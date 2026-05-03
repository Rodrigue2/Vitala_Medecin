/**
 * ConsultationStore - Vitalia Pro
 * Manages temporary data for the active consultation session.
 */
console.log("Vitalia: Loading ConsultationStore...");
var ConsultationStore = {
    active: false,
    patient: null,
    constants: {
        ta: '',
        poids: '',
        temp: '',
        sat: ''
    },
    observations: '',
    basket: [], // Prescriptions and exams
    shieldLevel: 'green', // green, orange, red

    init(patientData) {
        this.active = true;
        this.patient = patientData;
        this.constants = { ta: '', poids: patientData.poids || '', temp: '', sat: '' };
        this.observations = '';
        this.basket = [];
        this.shieldLevel = 'green';
        console.log('ConsultationStore initialized for:', patientData.name);
    },

    updateConstant(key, value) {
        if (this.constants.hasOwnProperty(key)) {
            this.constants[key] = value;
            this.updateShield();
        }
    },

    addToBasket(item) {
        this.basket.push(item);
        this.updateShield();
    },

    updateShield() {
        // Mock logic: alert if constant is high
        if (parseFloat(this.constants.ta) > 140) {
            this.shieldLevel = 'red';
        } else if (this.basket.length > 3) {
            this.shieldLevel = 'orange';
        } else {
            this.shieldLevel = 'green';
        }
        
        // Dispatch event for UI update
        const event = new CustomEvent('shield-change', { detail: { level: this.shieldLevel } });
        document.dispatchEvent(event);
    },

    close() {
        this.active = false;
        this.patient = null;
    }
};
