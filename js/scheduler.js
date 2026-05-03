/**
 * Vitalia Intelligent Scheduler
 * Core logic for algorithmic doctor scheduling, workload balancing, 
 * and complexity-based duration adjustment.
 */

const VitaliaScheduler = {
    // Configuration
    config: {
        defaultDuration: 30, // minutes
        emergencyBuffer: 0.15, // 15% of time reserved for emergencies
        complexityMultiplier: 1.25, // Higher risk scores increase duration
        complexityThreshold: 70, // VitaliaScore above this is "complex"
        shiftStart: '08:00',
        shiftEnd: '18:00'
    },

    /**
     * Main entry point to generate a new schedule
     */
    generateAutoSchedules() {
        console.log("Vitalia Scheduler: Starting algorithmic generation...");
        
        const doctors = MOCK_DATA.doctors.filter(d => d.status === 'active' || d.status === 'break');
        const patients = MOCK_DATA.patients;
        const newSchedule = [];

        // 1. Initialize Doctor Slots
        const doctorSlots = {};
        doctors.forEach(dr => {
            doctorSlots[dr.id] = {
                drName: dr.name,
                currentTime: this.config.shiftStart,
                slots: [],
                totalLoad: 0
            };
        });

        // 2. Sort Patients by Priority (VitaliaScore)
        const sortedPatients = [...patients].sort((a, b) => b.vitaliaScore - a.vitaliaScore);

        // 3. Distribute Patients (Simple Load Balancing)
        sortedPatients.forEach((patient, index) => {
            // Find doctor with the lowest current load
            const drId = Object.keys(doctorSlots).reduce((minDr, currentDr) => {
                return (doctorSlots[currentDr].totalLoad < doctorSlots[minDr].totalLoad) ? currentDr : minDr;
            });

            const drData = doctorSlots[drId];
            const duration = this.calculateDuration(patient);
            const startTime = drData.currentTime;
            const endTime = this.addMinutes(startTime, duration);

            const appointment = {
                id: `apt_gen_${Date.now()}_${index}`,
                doctorId: drId, // Added drId
                time: startTime,
                patient: patient.name,
                patientId: patient.id,
                type: Math.random() > 0.3 ? 'physique' : 'teleconsultation',
                status: 'À venir',
                length: duration,
                motif: patient.motif || 'Suivi régulier',
                isConsulted: false,
                complexity: patient.vitaliaScore > this.config.complexityThreshold ? 'High' : 'Normal'
            };

            drData.slots.push(appointment);
            drData.totalLoad += duration;
            drData.currentTime = endTime;
            
            // Update doctor load in mock data (clamped to 100)
            const drMock = MOCK_DATA.doctors.find(d => d.id === drId);
            if (drMock) {
                // Approximate load percentage based on 8 hour shift (480 mins)
                drMock.load = Math.min(100, Math.round((drData.totalLoad / 480) * 100));
            }

            newSchedule.push(appointment);
        });

        // 4. Inject Emergency Buffers
        this.injectEmergencies(doctorSlots, newSchedule);

        // 5. Update Global State
        MOCK_DATA.schedule = newSchedule;
        console.log("Vitalia Scheduler: Generation complete. Total appointments:", newSchedule.length);
        
        return newSchedule;
    },

    /**
     * Adjust duration based on patient complexity
     */
    calculateDuration(patient) {
        if (patient.vitaliaScore > this.config.complexityThreshold) {
            return Math.ceil(this.config.defaultDuration * this.config.complexityMultiplier);
        }
        return this.config.defaultDuration;
    },

    /**
     * Helpers for time manipulation
     */
    addMinutes(timeStr, minutes) {
        const [h, m] = timeStr.split(':').map(Number);
        const date = new Date(2000, 0, 1, h, m + minutes);
        return String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
    },

    /**
     * Reserved slots for urgent cases
     */
    injectEmergencies(doctorSlots, allAppointments) {
        // In a real app, this would use historical peak time data
        // For the prototype, we add a block at 11:00 or 15:00 if they are still within shift
        Object.keys(doctorSlots).forEach(drId => {
            const dr = doctorSlots[drId];
            const emergencySlot = {
                id: `urgent_${drId}_${Date.now()}`,
                time: '11:00',
                patient: 'URGENCE RESERVÉE',
                patientId: null,
                type: 'block',
                status: 'Bloqué',
                length: 30,
                motif: 'Créneau réservé IA (Risque pic d\'affluence)',
                isConsulted: false
            };
            allAppointments.push(emergencySlot);
        });
        
        // Final sort by time
        allAppointments.sort((a, b) => a.time.localeCompare(b.time));
    }
};

window.VitaliaScheduler = VitaliaScheduler;
