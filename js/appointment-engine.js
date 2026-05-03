/**
 * MEDICAL APPOINTMENT ENGINE — V1.5 (SMART SCALE)
 * Pre-computed slot system for high scalability.
 */

const AppointmentEngine = {
    
    /**
     * Algorithme : Génération des créneaux (Pré-calcul)
     */
    /**
     * Algorithme : Génération des créneaux (Pré-calcul & Auto-assignation)
     */
    generateDailySlots(clinicId, date) {
        const clinic = MOCK_DATA.clinics.find(c => c.id === clinicId);
        const specialties = MOCK_DATA.specialties.filter(s => s.clinicId === clinicId && s.isActive);
        
        if (!clinic) throw new Error("Clinic not found");

        const start = clinic.openingHour; // e.g. "07:00"
        const end = clinic.closingHour;   // e.g. "19:00"
        const duration = clinic.slotDuration; // e.g. 30

        const newSlots = [];

        specialties.forEach(specialty => {
            let currentTime = start;
            const concurrentCount = specialty.concurrentSlots || 1;

            // Trouver les médecins qualifiés pour cette spécialité
            const qualifiedDoctors = MOCK_DATA.doctors.filter(d => 
                d.clinicId === clinicId && 
                d.specialties.includes(specialty.id) &&
                d.status === 'active'
            );

            while (this.isBefore(currentTime, end)) {
                const endTime = this.addMinutes(currentTime, duration);
                if (this.isAfter(endTime, end)) break;

                // Trouver les médecins disponibles sur ce créneau horaire
                const availableDoctors = qualifiedDoctors.filter(dr => 
                    this.isDoctorAvailable(dr, date, currentTime, endTime)
                );

                // Générer N créneaux parallèles pour ce bloc temporel
                for (let i = 0; i < concurrentCount; i++) {
                    // Auto-assignation si un médecin est dispo pour ce slot i
                    const drToAssign = availableDoctors[i] || null;

                    newSlots.push({
                        id: `slot_${clinicId}_${specialty.id}_${date}_${currentTime.replace(':', '')}_${i}`,
                        clinicId: clinicId,
                        date: date,
                        startTime: currentTime,
                        endTime: endTime,
                        specialtyId: specialty.id,
                        doctorId: drToAssign ? drToAssign.id : null,
                        status: 'AVAILABLE',
                        capacity: 1,
                        bookedCount: 0
                    });
                }

                currentTime = endTime;
            }
        });

        // Enregistrer dans MOCK_DATA (Simulation)
        MOCK_DATA.slots = [...MOCK_DATA.slots, ...newSlots];
        return newSlots;
    },

    /**
     * Helper: Vérifie la disponibilité d'un médecin (Jours + Heures + Pauses)
     * Supporte le mode flexible (horaires différents par jour)
     */
    isDoctorAvailable(doctor, date, startTime, endTime) {
        const avail = doctor.availability;
        if (!avail) return false;

        // Convertir date en jour de la semaine (1=Lundi, ..., 7=Dimanche)
        const d = new Date(date);
        const dayOfWeek = String(d.getDay() === 0 ? 7 : d.getDay());

        let daySched = null;

        // Mode Flexible : Recherche par dictionnaire de jours
        if (avail.isFlexible && avail.schedules) {
            daySched = avail.schedules[dayOfWeek];
        } 
        // Mode Classique : Recherche par tableau de jours
        else if (avail.days && avail.days.includes(parseInt(dayOfWeek))) {
            daySched = avail;
        }

        if (!daySched) return false;

        // 2. Check main working range
        const startVisible = daySched.startTime;
        const endVisible = daySched.endTime;
        if (startTime < startVisible || endTime > endVisible) return false;

        // 3. Check break period (Pause)
        const bStart = daySched.breakStart;
        const bEnd = daySched.breakEnd;
        if (bStart && bEnd) {
            if (startTime < bEnd && endTime > bStart) return false;
        }

        return true;
    },

    /**
     * Attribution MANUELLE d'un médecin à un créneau
     */
    assignDoctorToSlot(slotId, doctorId) {
        const slot = MOCK_DATA.slots.find(s => s.id === slotId);
        const doctor = MOCK_DATA.doctors.find(d => d.id === doctorId);

        if (!slot || !doctor) throw new Error("Slot or Doctor not found");

        // RÈGLE MÉTIER : Qualification
        if (!doctor.specialties.includes(slot.specialtyId)) {
            throw new Error(`Doctor ${doctor.name} is not qualified for this specialty.`);
        }

        // RÈGLE MÉTIER : Disponibilité (pas 2 créneaux en même temps)
        const isConflict = MOCK_DATA.slots.some(s => 
            s.doctorId === doctorId && 
            s.date === slot.date && 
            s.startTime === slot.startTime &&
            s.id !== slotId
        );

        if (isConflict) {
            throw new Error(`Doctor ${doctor.name} is already assigned at ${slot.startTime}.`);
        }

        slot.doctorId = doctorId;
        return true;
    },

    /**
     * Réservation d'un créneau (SÉCURISÉE)
     */
    bookSlot(slotId, patientId) {
        const slot = MOCK_DATA.slots.find(s => s.id === slotId);
        if (!slot) throw new Error("Slot not found");

        // CHECK TOKENS
        const clinic = MOCK_DATA.clinics.find(c => c.id === slot.clinicId);
        if (!clinic || !clinic.tokenWallet || clinic.tokenWallet.token_balance <= 0) {
            throw new Error("INSUFFICIENT_TOKENS");
        }

        if (slot.status !== 'AVAILABLE') {
            throw new Error("Slot not available");
        }

        if (slot.bookedCount >= slot.capacity) {
            throw new Error("Slot full");
        }

        // Consume Token
        TokenEngine.useToken(slot.clinicId, `RDV ${patientId || 'Patient'}`);

        slot.bookedCount += 1;

        if (slot.bookedCount === slot.capacity) {
            slot.status = 'BOOKED';
        }

        const appointment = {
            id: `appt_${Date.now()}`,
            clinicId: slot.clinicId,
            slotId: slotId,
            patientId: patientId,
            status: 'CONFIRMED'
        };

        MOCK_DATA.appointments.push(appointment);
        return appointment;
    },

    /**
     * API — CARTE DU JOUR
     */
    getDailySchedule(clinicId, date) {
        const slots = MOCK_DATA.slots.filter(s => s.clinicId === clinicId && s.date === date);
        const specialties = MOCK_DATA.specialties.filter(s => s.clinicId === clinicId);

        return {
            date: date,
            specialties: specialties.map(spec => ({
                id: spec.id,
                name: spec.name,
                slots: slots.filter(s => s.specialtyId === spec.id).map(s => {
                    const dr = MOCK_DATA.doctors.find(d => d.id === s.doctorId);
                    return {
                        id: s.id,
                        time: `${s.startTime} - ${s.endTime}`,
                        startTime: s.startTime,
                        endTime: s.endTime,
                        doctor: dr ? { id: dr.id, name: dr.name } : null,
                        status: s.status,
                        remaining: s.capacity - s.bookedCount
                    };
                })
            }))
        };
    },

    /**
     * Rapprochement : Remplit les créneaux vides avec les médecins disponibles
     * Utile lorsqu'un nouveau médecin est enregistré ou qu'un statut change.
     */
    recomputeAutoAssignments(clinicId, date) {
        const slots = MOCK_DATA.slots.filter(s => s.clinicId === clinicId && s.date === date && s.doctorId === null);
        if (slots.length === 0) return;

        const specialties = [...new Set(slots.map(s => s.specialtyId))];

        specialties.forEach(specId => {
            const specSlots = slots.filter(s => s.specialtyId === specId);
            const doctors = MOCK_DATA.doctors.filter(d => 
                d.clinicId === clinicId && 
                d.specialties.includes(specId) && 
                d.status === 'active'
            );

            // Regrouper par heure pour gérer la concurrence
            const timeBlocks = [...new Set(specSlots.map(s => s.startTime))];

            timeBlocks.forEach(time => {
                const slotsAtTime = specSlots.filter(s => s.startTime === time);
                const endTime = slotsAtTime[0].endTime;
                
                // Médecins réellement dispo à cette heure précise
                const availableDrs = doctors.filter(dr => 
                    this.isDoctorAvailable(dr, date, time, endTime) &&
                    // Et qui n'est pas déjà assigné ailleurs à cette même heure dans cette clinique
                    !MOCK_DATA.slots.some(s => s.clinicId === clinicId && s.date === date && s.startTime === time && s.doctorId === dr.id)
                );

                slotsAtTime.forEach((slot, index) => {
                    if (availableDrs[index]) {
                        slot.doctorId = availableDrs[index].id;
                    }
                });
            });
        });
    },

    // --- Helpers ---

    isBefore(time1, time2) {
        return time1 < time2;
    },

    isAfter(time1, time2) {
        return time1 > time2;
    },

    /**
     * Ajoute des minutes à une chaîne "HH:mm"
     */
    addMinutes(timeStr, minutes) {
        if (!timeStr) return "00:00";
        const parts = timeStr.split(':');
        let h = parseInt(parts[0]);
        let m = parseInt(parts[1]);
        
        m += minutes;
        while (m >= 60) {
            m -= 60;
            h += 1;
        }
        while (h >= 24) {
            h -= 24;
        }
        
        return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
    }
};

window.AppointmentEngine = AppointmentEngine;

/**
 * TOKEN SYSTEM ENGINE
 */
const TokenEngine = {
    getTokenPrice(qty) {
        if (qty < 1000) return 500;
        return 400; // 1000 to 10000+
    },

    purchaseTokens(clinicId, qty) {
        const clinic = MOCK_DATA.clinics.find(c => c.id === clinicId);
        if (!clinic) return null;

        const pricePerToken = this.getTokenPrice(qty);
        const totalAmount = qty * pricePerToken;

        const transaction = {
            id: `tx_${Date.now()}`,
            clinicId: clinicId,
            type: 'purchase',
            qty: qty,
            pricePerToken: pricePerToken,
            amount: totalAmount,
            date: new Date().toISOString().split('T')[0],
            status: 'pending' // Simulates waiting for payment gateway
        };

        MOCK_DATA.tokenTransactions.push(transaction);
        return transaction;
    },

    confirmPayment(txId) {
        const tx = MOCK_DATA.tokenTransactions.find(t => t.id === txId);
        if (!tx || tx.status !== 'pending') return false;

        const clinic = MOCK_DATA.clinics.find(c => c.id === tx.clinicId);
        if (!clinic) return false;

        // Update Wallet
        if (!clinic.tokenWallet) {
            clinic.tokenWallet = { token_balance: 0, total_tokens_used: 0, total_spent_fcfa: 0 };
        }
        
        clinic.tokenWallet.token_balance += tx.qty;
        clinic.tokenWallet.total_spent_fcfa += tx.amount;
        tx.status = 'paid';

        return true;
    },

    useToken(clinicId, note = "") {
        const clinic = MOCK_DATA.clinics.find(c => c.id === clinicId);
        if (!clinic || !clinic.tokenWallet || clinic.tokenWallet.token_balance <= 0) return false;

        clinic.tokenWallet.token_balance -= 1;
        clinic.tokenWallet.total_tokens_used += 1;

        MOCK_DATA.tokenTransactions.push({
            id: `usage_${Date.now()}`,
            clinicId: clinicId,
            type: 'usage',
            qty: 1,
            amount: 0,
            date: new Date().toISOString().split('T')[0],
            status: 'confirmed',
            note: note
        });

        return true;
    }
};

window.TokenEngine = TokenEngine;
