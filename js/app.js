/* ==========================================================================
   Vitalia App Router, Render Engine & Interactions
   ========================================================================== */

/* ==========================================================================
   Consultation Store (Global for Prototype Robustness)
   ========================================================================== */
var ConsultationStore = {
    active: false,
    patient: null,
    constants: { ta: '', poids: '', temp: '', sat: '' },
    observations: '',
    basket: [],
    shieldLevel: 'green',
    aiActive: false,
    aiAnalysis: "", // To persist results across re-renders

    init(patientData) {
        this.active = true;
        this.patient = patientData;
        this.constants = { ta: '', poids: (patientData && patientData.poids) || '70', temp: '', sat: '' };
        this.observations = '';
        this.basket = [];
        this.shieldLevel = 'green';
        this.aiActive = false;
        this.aiAnalysis = "";
        console.log('Vitalia: ConsultationStore initialized/reset for:', (patientData && patientData.name) || 'Unknown');
        // Force global availability
        window.ConsultationStore = this;
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
        if (parseFloat(this.constants.ta) > 140) {
            this.shieldLevel = 'red';
        } else if (this.basket.length > 3) {
            this.shieldLevel = 'orange';
        } else {
            this.shieldLevel = 'green';
        }
        const event = new CustomEvent('shield-change', { detail: { level: this.shieldLevel } });
        document.dispatchEvent(event);
    },

    close() {
        this.active = false;
        this.patient = null;
    }
};
window.ConsultationStore = ConsultationStore;

// Global Function for Dr. Esdras Patient Summary
window.showEsdrasPatientSummary = function (patientId) {
    console.log("ESDRAS DEBUG: Triggered for patientId =", patientId);

    try {
        state.currentPatientId = patientId;
        const patientData = MOCK_DATA.patients.find(p => p.id === patientId);
        console.log("ESDRAS DEBUG: Found patientData =", patientData ? patientData.name : "NULL");

        if (!patientData) {
            console.error("ESDRAS DEBUG: No data for patientId", patientId);
            return;
        }

        // 1. Dr Esdras Card (Split layout)
        const esdrasContainer = document.getElementById('esdras-content-container');
        if (esdrasContainer) {
            if (!MOCK_DATA.schedule) {
                if (typeof VitaliaScheduler !== 'undefined') {
                    VitaliaScheduler.generateAutoSchedules();
                } else {
                    MOCK_DATA.schedule = [];
                }
            }
            esdrasContainer.innerHTML = DoctorViews.EsdrasAgendaTemplate(MOCK_DATA.schedule, patientId);
        }



        // 2. Vitalia View Card (Replace entire content area)
        const vitaliaDynamicArea = document.getElementById('vitalia-card-dynamic-area');
        console.log("ESDRAS DEBUG: Dynamic Area exists =", !!vitaliaDynamicArea);
        if (vitaliaDynamicArea) {
            vitaliaDynamicArea.innerHTML = DoctorViews.VitaliaViewTemplate(patientData);
        }

        // 3. Clinical Trends
        const tirContainer = document.getElementById('time-in-range-container');
        console.log("ESDRAS DEBUG: TIR container exists =", !!tirContainer);
        if (tirContainer) {
            tirContainer.innerHTML = DoctorViews.TimeInRangeTemplate(patientData);
        }

        const bpContainer = document.getElementById('bp-trend-container');
        console.log("ESDRAS DEBUG: BP container exists =", !!bpContainer);
        if (bpContainer) {
            bpContainer.innerHTML = DoctorViews.BPTrendTemplate(patientData);
        }

        const timelineContainer = document.getElementById('timeline-card-container');
        console.log("ESDRAS DEBUG: Timeline container exists =", !!timelineContainer);
        if (timelineContainer) {
            timelineContainer.innerHTML = DoctorViews.TimelineCardTemplate(patientData);
        }

        // 4. Highlight Selection
        console.log("ESDRAS DEBUG: Highlighting agenda item for", patientId);
        document.querySelectorAll('.agenda-item').forEach(item => {
            if (item.getAttribute('data-patient-id') === patientId) {
                item.classList.add('ring-2', 'ring-indigo-500', 'bg-white', 'shadow-lg', 'scale-105');
                item.classList.remove('bg-slate-50/50', 'opacity-60');
            } else {
                item.classList.remove('ring-2', 'ring-indigo-500', 'shadow-lg', 'scale-105');
                item.classList.add('bg-slate-50/50', 'opacity-60');
            }
        });

        if (window.lucide) lucide.createIcons();
        console.log("ESDRAS DEBUG: Completed all updates.");

    } catch (err) {
        console.error("ESDRAS DEBUG CRITICAL ERROR:", err);
    }
};

window.startConsultationFromEsdras = function (patientId) {
    console.log("Vitalia: Starting consultation from Esdras agenda for:", patientId);
    const patientData = MOCK_DATA.patients.find(p => p.id === patientId) || MOCK_DATA.patients[0];
    if (patientData) {
        triggerHyperFocus(patientData);
    }
};

window.startTeleconsultation = function (patientId) {
    console.log("Vitalia: Starting Teleconsultation for:", patientId);
    const patientData = MOCK_DATA.patients.find(p => p.id === patientId) || MOCK_DATA.patients[0];
    if (patientData) {
        if (typeof DoctorViews !== 'undefined' && DoctorViews.TeleconsultationViewTemplate) {
            const modalHtml = DoctorViews.TeleconsultationViewTemplate(patientData);
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            if (window.lucide) lucide.createIcons();

            // --- DYNAMIC TELECONSULTATION SCRIPTS ---

            // 1. Timer Logic
            let seconds = 262;
            const timerEl = document.getElementById('teleconsultation-timer');
            if (timerEl) {
                const ival = setInterval(() => {
                    if (!document.getElementById('teleconsultation-overlay')) return clearInterval(ival);
                    seconds++;
                    timerEl.innerText = "En Direct : " + String(Math.floor(seconds / 60)).padStart(2, '0') + ":" + String(seconds % 60).padStart(2, '0');
                }, 1000);
            }

            // 2. Chat Simulation
            setTimeout(() => {
                const chat = document.getElementById('teleconsultation-chat');
                const notes = document.getElementById('teleconsultation-notes');
                if (chat && document.getElementById('teleconsultation-overlay')) {
                    const bubble = document.createElement('div');
                    bubble.style.cssText = "background:#E6F6F4;padding:16px;border-radius:16px;border-left:4px solid #00A693;animation:fade-in 0.3s ease-out;";
                    bubble.innerHTML = "<strong style='color:#00A693;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;display:block;'>Vous</strong><span style='font-size:14px;color:#134E4A;line-height:1.5;font-weight:500;'>Très bien. Je vais vous prescrire de quoi soulager ces douleurs avec du paracétamol et un antispasmodique.</span>";
                    chat.appendChild(bubble);
                    chat.scrollTop = chat.scrollHeight;
                    if (notes) {
                        notes.value += " Prescription de paracétamol et antispasmodique à envisager.";
                        notes.style.boxShadow = "0 0 0 2px #10B981 inset";
                        setTimeout(() => notes.style.boxShadow = "none", 1000);
                        notes.scrollTop = notes.scrollHeight;
                    }
                }
            }, 5000);

            // 3. Maximize Toggle
            window.toggleVideoSize = function () {
                const grid = document.getElementById('teleconsultation-grid');
                const left = document.getElementById('tc-left-panel');
                const right = document.getElementById('tc-right-panel');
                const bottom = document.getElementById('tc-bottom-panel');
                const video = document.getElementById('tc-video-panel');
                const icon = document.getElementById('tc-maximize-icon');
                if (!grid) return;

                if (grid.getAttribute('data-maximized') === 'true') {
                    grid.style.padding = '24px';
                    grid.style.gap = '24px';
                    grid.style.gridTemplateColumns = '280px 1fr 340px';
                    grid.style.gridTemplateRows = '1fr auto';
                    left.style.display = 'flex'; right.style.display = 'flex'; bottom.style.display = 'flex';
                    setTimeout(() => {
                        left.style.opacity = '1'; right.style.opacity = '1'; bottom.style.opacity = '1';
                    }, 50);
                    video.style.gridRow = '1 / 2';
                    video.style.gridColumn = '2';
                    grid.setAttribute('data-maximized', 'false');
                    if (icon) icon.setAttribute('data-lucide', 'maximize');
                } else {
                    grid.style.padding = '12px';
                    grid.style.gap = '0px';
                    grid.style.gridTemplateColumns = '0px 1fr 340px'; // Keep AI panel visible
                    grid.style.gridTemplateRows = '1fr 0px';
                    left.style.opacity = '0'; bottom.style.opacity = '0';
                    // Do NOT hide right panel
                    setTimeout(() => {
                        left.style.display = 'none'; bottom.style.display = 'none';
                        video.style.gridRow = '1 / -1';
                        video.style.gridColumn = '1 / 3'; // Occupy left and center
                    }, 200);
                    grid.setAttribute('data-maximized', 'true');
                    if (icon) icon.setAttribute('data-lucide', 'minimize');
                }
                if (window.lucide) lucide.createIcons();
            };

        } else {
            console.error("TeleconsultationViewTemplate not found in DoctorViews");
        }
    }
};

window.openOrdonnanceModal = function (patientId) {
    console.log("Vitalia: Opening Ordonnance for:", patientId);
    const patientData = MOCK_DATA.patients.find(p => p.id === patientId) || MOCK_DATA.patients[0];
    if (patientData) {
        if (typeof DoctorViews !== 'undefined' && DoctorViews.OrdonnanceModalTemplate) {
            const modalHtml = DoctorViews.OrdonnanceModalTemplate(patientData);
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            if (window.lucide) lucide.createIcons();
        }
    }
};

var state = {
    currentUser: 'DOCTOR',
    currentView: 'landing',
    doctorSubView: 'dashboard',
    clinicSubView: 'appointments',
    pharmacySubView: 'dashboard',
    selectedPatient: null,
    billingTimeframe: 'SEMAINE',
};
window.state = state;

window.changeBillingTimeframe = function (timeframe) {
    state.billingTimeframe = timeframe;
    renderApp();
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    initImmersionLayers();
    renderApp();
});

function initImmersionLayers() {
    console.log("Vitalia: Initializing Immersion Layers...");
    if (document.getElementById('hyper-focus-container')) return;

    const vignette = document.createElement('div');
    vignette.className = 'hyper-focus-vignette';
    vignette.id = 'hyper-focus-vignette';
    document.body.appendChild(vignette);

    const halo = document.createElement('div');
    halo.className = 'shield-guard-halo green';
    halo.id = 'shield-guard-halo';
    document.body.appendChild(halo);

    const focusContainer = document.createElement('div');
    focusContainer.className = 'consultation-focus-container';
    focusContainer.id = 'hyper-focus-container';
    document.body.appendChild(focusContainer);

    document.addEventListener('shield-change', (e) => {
        const haloEl = document.getElementById('shield-guard-halo');
        if (haloEl) haloEl.className = `shield-guard-halo ${e.detail.level}`;
    });
    console.log("Vitalia: Immersion layers ready.");
}

function renderApp() {
    console.log("Vitalia: Rendering view", state.currentView, state.doctorSubView);
    initImmersionLayers();
    const appContainer = document.getElementById('app');
    if (!appContainer) return;
    appContainer.innerHTML = '';

    switch (state.currentView) {
        case 'landing':
            appContainer.appendChild(RenderTemplates.Landing());
            break;
        case 'doctor_portal':
            appContainer.appendChild(RenderTemplates.DoctorPortalLayout());
            break;
        case 'clinic_dashboard':
            appContainer.appendChild(RenderTemplates.ClinicDashboard());
            break;
        case 'pharmacy_portal':
            appContainer.appendChild(RenderTemplates.PharmacyPortal());
            break;
        default:
            appContainer.appendChild(RenderTemplates.Landing());
            break;
    }

    lucide.createIcons();
    attachGlobalListeners();
}

function handleNavigation(view, role = null, subView = null) {
    state.currentView = view;
    if (role) state.currentUser = role;
    if (view === 'pharmacy_portal') state.pharmacySubView = subView || 'dashboard';
    else if (view === 'clinic_dashboard') state.clinicSubView = subView || 'appointments';
    else if (subView) state.doctorSubView = subView;
    renderApp();
}

// --- PHARMACY MODULE LOGIC ---
window.selectPrescription = function (id) {
    state.selectedPrescriptionId = id;
    renderApp();
};

window.runPharmaAction = function (id, action) {
    const modalContainer = document.getElementById('pharma-modal-container');
    if (!modalContainer) return;

    if (action === 'TREAT_MODAL') {
        modalContainer.innerHTML = PharmacyViews.TreatmentModal(id);
        if (window.lucide) lucide.createIcons();
        state.treatmentOption = null;
    } else if (action === 'VIEW_RESPONSE') {
        modalContainer.innerHTML = PharmacyViews.TreatmentModal(id, 'VIEW_RESPONSE');
        if (window.lucide) lucide.createIcons();
    } else if (action === 'DELIVERED') {
        window.updatePrescriptionStatus(id, 'TERMINE', "Votre commande a été livrée. Merci pour votre confiance.");
    } else if (action === 'ACCEPT_PRESCRIPTION') {
        window.updatePrescriptionStatus(id, 'EN_COURS', "Ordonnance acceptée. Analyse en cours.");

        // Use a small delay to ensure renderApp() has finished updating the DOM
        setTimeout(() => {
            const freshModalContainer = document.getElementById('pharma-modal-container');
            if (freshModalContainer) {
                const modalHtml = PharmacyViews.TreatmentModal(id);
                if (modalHtml) {
                    freshModalContainer.innerHTML = modalHtml;
                    if (window.lucide) lucide.createIcons();
                    state.treatmentOption = null;
                }
            }
        }, 50);
    }
};

// --- PHARMACY TIMER ENGINE ---
setInterval(() => {
    if (state.currentView !== 'pharmacy_portal' || state.pharmacySubView !== 'dashboard') return;

    let needsRender = false;
    const now = Date.now();

    MOCK_DATA.prescriptions.forEach(p => {
        if (p.status === 'EN_ATTENTE_PRISE_EN_CHARGE') {
            const receivedTime = new Date(p.receivedAt).getTime();
            const expirationTime = receivedTime + 10 * 60 * 1000;
            const diff = expirationTime - now;

            if (diff <= 0) {
                p.status = 'NON_PRISE_EN_CHARGE';
                needsRender = true;
                console.log(`Prescription ${p.id} expired.`);
            } else {
                // Update timer in UI if element exists
                const timerEl = document.getElementById(`timer-${p.id}`);
                if (timerEl) {
                    const mins = Math.floor(diff / 60000);
                    const secs = Math.floor((diff % 60000) / 1000);
                    timerEl.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
                }
            }
        }

        // Auto-disappearance of closed prescriptions after 10 seconds
        if (p.status === 'TERMINE' && p.closedAt && !p.disappeared) {
            if (now - p.closedAt > 10000) {
                p.disappeared = true;
                needsRender = true;
            }
        }
    });

    // --- SIMULATION: Random incoming prescription (5% chance every 3 seconds for demo) ---
    if (Math.random() > 0.95 && MOCK_DATA.prescriptions.length < 8) {
        const id = 'ORD-' + Math.floor(Math.random() * 900 + 100);
        const patient = MOCK_DATA.patients[Math.floor(Math.random() * MOCK_DATA.patients.length)];
        MOCK_DATA.prescriptions.push({
            id: id,
            patientName: patient.name,
            clinic: 'Clinique Saint-Jean',
            doctor: 'Dr. Sophie Martin',
            image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop&q=60',
            medications: ['Nouveau traitement...', 'Analyse en cours'],
            status: 'EN_ATTENTE_PRISE_EN_CHARGE',
            receivedAt: new Date().toISOString(),
            date_reception: new Date().toISOString()
        });
        needsRender = true;
        console.log("Vitalia: Nouvelle ordonnance simulée arrivant...");
    }

    if (needsRender) renderApp();
}, 3000);
window.toggleTreatmentOption = function (option) {
    state.treatmentOption = option;
    const sectionValidate = document.getElementById('section-validate');
    const sectionMissing = document.getElementById('section-missing');
    const btnValidate = document.getElementById('btn-opt-validate');
    const btnMissing = document.getElementById('btn-opt-missing');
    const submitBtn = document.getElementById('pharma-submit-btn');

    // Activer le bouton de soumission
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    if (option === 'VALIDATE') {
        sectionValidate?.classList.remove('hidden');
        sectionMissing?.classList.add('hidden');
        btnValidate?.classList.add('border-emerald-500', 'bg-emerald-50', 'ring-4', 'ring-emerald-500/10');
        btnValidate?.classList.remove('border-slate-200', 'bg-slate-50');
        btnMissing?.classList.remove('border-amber-400', 'bg-amber-50', 'ring-4', 'ring-amber-500/10');
        btnMissing?.classList.add('border-slate-200', 'bg-slate-50');

        const label = btnValidate?.querySelector('span');
        if (label) label.className = "font-black uppercase tracking-tight text-emerald-800";
        const labelMissing = btnMissing?.querySelector('span');
        if (labelMissing) labelMissing.className = "font-black uppercase tracking-tight text-slate-600";
    } else {
        sectionValidate?.classList.add('hidden');
        sectionMissing?.classList.remove('hidden');
        btnMissing?.classList.add('border-amber-400', 'bg-amber-50', 'ring-4', 'ring-amber-500/10');
        btnMissing?.classList.remove('border-slate-200', 'bg-slate-50');
        btnValidate?.classList.remove('border-emerald-500', 'bg-emerald-50', 'ring-4', 'ring-emerald-500/10');
        btnValidate?.classList.add('border-slate-200', 'bg-slate-50');

        const label = btnMissing?.querySelector('span');
        if (label) label.className = "font-black uppercase tracking-tight text-amber-800";
        const labelVal = btnValidate?.querySelector('span');
        if (labelVal) labelVal.className = "font-black uppercase tracking-tight text-slate-600";
    }
};

window.zoomImage = function (url) {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center p-4 animate-fade-in cursor-zoom-out';
    overlay.onclick = () => overlay.remove();
    overlay.innerHTML = `
        <img src="${url}" class="max-w-full max-h-full object-contain shadow-2xl animate-scale-in">
        <button class="absolute top-8 right-8 text-white text-4xl leading-none">&times;</button>
    `;
    document.body.appendChild(overlay);
};

window.handlePatientChoice = function (id, choice) {
    if (choice === 'ABANDON') {
        if (confirm("Êtes-vous sûr de vouloir abandonner ce traitement ?")) {
            window.updatePrescriptionStatus(id, 'EN_ATTENTE', "Traitement abandonné par la pharmacie."); // Reset
            document.getElementById('pharma-modal-overlay')?.remove();
        }
    } else {
        const finalPriceSection = document.getElementById('final-price-section');
        if (finalPriceSection) {
            finalPriceSection.classList.remove('hidden');
        }
    }
};

window.finalizePrescription = function (id) {
    const price = document.getElementById('pharma-final-price')?.value;
    if (!price || price <= 0) return alert("Veuillez saisir un prix valide.");

    const p = MOCK_DATA.prescriptions.find(ord => ord.id === id);
    if (!p) return;

    window.addPharmaMessage(id, "PRIX", "Le coût total ajusté de votre ordonnance est de {prix_total} FCFA. Veuillez confirmer pour finaliser.", { prix_total: parseFloat(price) });
    window.updatePrescriptionStatus(id, 'EN_COURS');

    // Simuler confirmation finale patient et paiement
    setTimeout(() => {
        const recoveryModes = [
            { msg: "C'est validé pour moi ! Je souhaite être livré à nouveau.", type: 'LIVRAISON', val: "Livraison à domicile" },
            { msg: "C'est validé ! Je passe récupérer l'ordonnance moi-même dans quelques instants.", type: 'RETRAIT', val: "Retrait en pharmacie" }
        ];
        const pick = recoveryModes[Math.floor(Math.random() * recoveryModes.length)];

        window.addPharmaMessage(id, "PRIX_OK", pick.msg, {}, "PATIENT");
        p.lastResponse = { type: 'PAYMENT_DONE', value: pick.val, mode: pick.type };
        window.updatePrescriptionStatus(id, 'PRET', `Préparation terminée. ${pick.type === 'LIVRAISON' ? 'Prêt pour livraison.' : 'Prêt pour retrait.'}`);
    }, 2000);

    document.getElementById('pharma-modal-overlay')?.remove();
};

window.submitTreatment = function (id) {
    if (state.treatmentOption === 'VALIDATE') {
        const price = document.getElementById('pharma-price-input')?.value;
        if (!price || price <= 0) return alert("Veuillez saisir un prix valide.");

        window.addPharmaMessage(id, "PRIX", "Le coût total de votre ordonnance est de {prix_total} FCFA. Veuillez confirmer pour lancer la préparation.", { prix_total: parseFloat(price) });
        window.updatePrescriptionStatus(id, 'PAIEMENT_EN_ATTENTE'); // NEW STATUS

        // Simuler paiement et choix mode après 3 secondes
        setTimeout(() => window.simulatePatientResponse(id), 3000);

    } else {
        const missing = document.getElementById('pharma-missing-name')?.value.trim();
        const alt = document.getElementById('pharma-alt-name')?.value.trim();
        const altPrice = document.getElementById('pharma-alt-price')?.value;

        if (!missing) return alert("Le nom du médicament manquant est requis.");

        let template = "";
        let vars = { medicament_manquant: missing };

        if (alt && altPrice) {
            template = "Le médicament {medicament_manquant} est indisponible. Nous proposons une alternative ({medicament_alternatif}) à {prix_alt} FCFA. Souhaitez-vous valider ?";
            vars.medicament_alternatif = alt;
            vars.prix_alt = parseFloat(altPrice);
        } else {
            template = "Le médicament suivant est actuellement indisponible : {medicament_manquant}. Souhaitez-vous attendre ou annuler ce médicament ?";
        }

        window.addPharmaMessage(id, "MANQUE", template, vars);
        window.updatePrescriptionStatus(id, 'EN_ATTENTE_CLIENT');

        // Simuler réponse patient après 3 secondes
        setTimeout(() => window.simulatePatientResponse(id), 3000);
    }

    document.getElementById('pharma-modal-overlay')?.remove();
};

window.simulatePatientResponse = function (id) {
    const p = MOCK_DATA.prescriptions.find(ord => ord.id === id);
    if (!p) return;

    if (p.status === 'PAIEMENT_EN_ATTENTE') {
        const recoveryModes = [
            { msg: "Paiement effectué. Je passerai récupérer l'ordonnance moi-même dans quelques instants.", type: 'RETRAIT', val: "Retrait en pharmacie" },
            { msg: "Paiement effectué. Merci de me livrer à l'adresse indiquée.", type: 'LIVRAISON', val: "Livraison à domicile" }
        ];
        const pick = recoveryModes[Math.floor(Math.random() * recoveryModes.length)];

        p.lastResponse = { type: 'PAYMENT_DONE', value: pick.val, mode: pick.type };

        window.addPharmaMessage(id, "PAIEMENT_OK", pick.msg, {}, "PATIENT");
        window.updatePrescriptionStatus(id, 'PRET');
    } else {
        const responses = [
            { msg: "D'accord, je valide l'alternative. Merci !", val: "Alternative acceptée.", status: 'REPONSE_RECUE' },
            { msg: "Non désolé, je préfère annuler ce médicament.", val: "Proposition refusée.", status: 'REPONSE_RECUE' }
        ];
        const pick = responses[Math.floor(Math.random() * responses.length)];
        p.lastResponse = { type: 'RESULT', value: pick.val };

        window.addPharmaMessage(id, "PATIENT_RESPONSE", pick.msg, {}, "PATIENT");
        window.updatePrescriptionStatus(id, pick.status);
    }
    renderApp();
};

window.updatePrescriptionStatus = function (id, newStatus, messageTemplate) {
    const p = MOCK_DATA.prescriptions.find(ord => ord.id === id);
    if (p) {
        p.status = newStatus;
        if (newStatus === 'TERMINE') {
            p.closedAt = Date.now();
        }
        if (messageTemplate) {
            window.addPharmaMessage(id, "STATUS", messageTemplate, {});
        }
        renderApp();
    }
};

window.addPharmaMessage = function (id, type, template, variables) {
    const newMessage = {
        id: 'MSG-' + Date.now(),
        prescription_id: id,
        type: type,
        template: template,
        variables: variables,
        sender: "PHARMACIE",
        timestamp: new Date().toISOString()
    };

    if (!MOCK_DATA.pharmaMessages) MOCK_DATA.pharmaMessages = [];
    MOCK_DATA.pharmaMessages.push(newMessage);
    renderApp();
};

function attachGlobalListeners() {
    // Avoid double attachments in a simple way for the prototype
    // Clear and re-add logic is better but here we just check existing ones or use delegation
}

// Delegate events to avoid multiple attachments on re-renders
document.addEventListener('click', (e) => {
    const btnCall = e.target.closest('.btn-call-patient');
    if (btnCall) {
        e.preventDefault();
        e.stopPropagation();
        const patientId = btnCall.dataset.patientId || 1;
        const patientName = btnCall.dataset.patientName || 'Patient';
        console.log("Vitalia: Click 'Appeler Patient' for:", patientName);
        btnCall.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> Appel...`;
        btnCall.classList.replace('btn-primary', 'btn-success');
        lucide.createIcons();
        setTimeout(() => {
            triggerHyperFocus({ id: patientId, name: patientName, age: 45, poids: 70 });
        }, 600);
        return;
    }

    const hyperFocusToggle = e.target.closest('#hyper-focus-toggle');
    if (hyperFocusToggle) {
        if (hyperFocusToggle.checked) {
            triggerHyperFocus({ id: 1, name: 'Kouamé Jean', age: 52, poids: 78 });
        } else {
            exitHyperFocus();
        }
        return;
    }

    const aiToggleBtn = e.target.closest('#ai-activate-toggle');
    if (aiToggleBtn) {
        const aiCard = document.getElementById('ai-card-main');
        if (!aiCard) return;

        const isActive = aiCard.classList.toggle('ai-assistant-active');
        const recommendedTestsCard = document.getElementById('card-recommended-tests');
        const suggestedTreatmentCard = document.getElementById('card-suggested-treatment');

        const toggleDependentCards = (active) => {
            [recommendedTestsCard, suggestedTreatmentCard].forEach(card => {
                if (!card) return;
                const content = card.querySelector('.ai-dependent-content');
                const placeholder = card.querySelector('.ai-placeholder');

                if (active) {
                    card.classList.remove('disabled-ai-card');
                    if (content) content.classList.remove('hidden');
                    if (placeholder) placeholder.classList.add('hidden');
                } else {
                    card.classList.add('disabled-ai-card');
                    if (content) content.classList.add('hidden');
                    if (placeholder) placeholder.classList.remove('hidden');
                }
            });
        };

        if (isActive) {
            ConsultationStore.aiActive = true;
            aiToggleBtn.innerHTML = `<i data-lucide="zap-off" class="w-3 h-3 mr-2"></i> Désactiver Assistant`;
            toggleDependentCards(true);
            console.log("Vitalia: AI Assistant Activated.");
        } else {
            ConsultationStore.aiActive = false;
            aiToggleBtn.innerHTML = `<i data-lucide="zap" class="w-3 h-3 mr-2"></i> Activer l'Assistant`;
            toggleDependentCards(false);
            console.log("Vitalia: AI Assistant Deactivated.");
        }
        lucide.createIcons();
        return;
    }

    const generateScheduleBtn = e.target.closest('#btn-generate-schedules');
    if (generateScheduleBtn) {
        console.log("Vitalia: UI Trigger -> Auto-Schedule Generation");
        if (typeof VitaliaScheduler !== 'undefined') {
            const btn = generateScheduleBtn;
            const originalHtml = btn.innerHTML;

            // UI Feedback
            btn.disabled = true;
            btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Algorithme en cours...`;
            if (window.lucide) lucide.createIcons();

            setTimeout(() => {
                VitaliaScheduler.generateAutoSchedules();
                btn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> Plannings Générés !`;
                btn.classList.replace('bg-slate-900', 'bg-emerald-600');
                if (window.lucide) lucide.createIcons();

                // Refresh view if in smart_planning
                if (state.currentView === 'clinic_dashboard' && state.clinicSubView === 'smart_planning') {
                    renderApp();
                }

                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalHtml;
                    btn.classList.replace('bg-emerald-600', 'bg-slate-900');
                    if (window.lucide) lucide.createIcons();
                }, 3000);
            }, 1500);
        } else {
            console.error("Vitalia: VitaliaScheduler not found!");
        }
        return;
    }

    // 10. AI Exploration Modal Actions
    const closeExplorationBtn = e.target.closest('#close-exploration-modal');
    if (closeExplorationBtn) {
        document.getElementById('ai-exploration-overlay')?.remove();
        return;
    }

    // 11. Dr. Esdras Agenda OK Action
    const esdrasOkBtn = e.target.closest('#esdras-ok-btn');
    if (esdrasOkBtn) {
        const container = document.getElementById('esdras-content-container');
        if (container) {
            if (!MOCK_DATA.schedule) {
                if (typeof VitaliaScheduler !== 'undefined') {
                    VitaliaScheduler.generateAutoSchedules();
                } else {
                    MOCK_DATA.schedule = [];
                }
            }
            container.innerHTML = DoctorViews.EsdrasAgendaTemplate(MOCK_DATA.schedule);
            lucide.createIcons();
        }
        return;
    }

    const esdrasTerminateBtn = e.target.closest('#esdras-terminate-btn');
    if (esdrasTerminateBtn) {
        const container = document.getElementById('esdras-content-container');
        if (container) {
            const schedule = MOCK_DATA.schedule;
            // Realistic simulation: 18 total (per message), consulted is total - remaining in mock
            const remainingCount = schedule.filter(s => s.status === 'À venir' && s.patientId).length;
            const totalPlanned = 18;
            const consultedCount = totalPlanned - remainingCount;

            container.innerHTML = DoctorViews.EsdrasEndDaySummaryTemplate({
                consulted: consultedCount,
                remaining: remainingCount
            });
            lucide.createIcons();
        }
        return;
    }

    const esdrasConfirmTerminateBtn = e.target.closest('#esdras-confirm-terminate-btn');
    if (esdrasConfirmTerminateBtn) {
        handleNavigation('landing');
        return;
    }

    // AI Exploration Modal Handlers
    const explorationBtn = e.target.closest('#ai-exploration-btn');
    if (explorationBtn) {
        const modalContainer = document.getElementById('modal-container');
        if (modalContainer) {
            modalContainer.innerHTML = DoctorViews.getAIExplorationModal();
            lucide.createIcons();

            const input = document.getElementById('exploration-input');
            if (input) {
                setTimeout(() => input.focus(), 100);
                input.addEventListener('keypress', (ki) => {
                    if (ki.key === 'Enter') handleExplorationSend();
                });
            }
        }
        return;
    }

    const closeExploration = e.target.closest('#close-exploration-modal') || (e.target.id === 'ai-exploration-overlay');
    if (closeExploration) {
        const modal = document.getElementById('ai-exploration-overlay');
        if (modal) {
            modal.classList.add('animate-fade-out'); // Optional transition
            setTimeout(() => modal.remove(), 200);
        }
        return;
    }

    const sendExploration = e.target.closest('#send-exploration-btn');
    if (sendExploration) {
        handleExplorationSend();
        return;
    }

    const suggestionChip = e.target.closest('.suggestion-chip');
    if (suggestionChip) {
        const input = document.getElementById('exploration-input');
        if (input) {
            input.value = suggestionChip.innerText.replace(/[📋🔬📚]\s*/, "");
            handleExplorationSend();
        }
    }

    // Follow-up Trigger
    const btnFollowUp = e.target.closest('.btn-follow-up-patient');
    if (btnFollowUp) {
        const patientId = btnFollowUp.dataset.patientId || state.selectedPatient || state.currentPatientId || 1;
        console.log("Vitalia: Follow-up click. Patient ID:", patientId);
        const patientData = MOCK_DATA.patients.find(p => p.id === patientId.toString()) || MOCK_DATA.patients[0];
        triggerFollowUpMode(patientData);
        return;
    }
});

function handleExplorationSend() {
    const input = document.getElementById('exploration-input');
    const chatMessages = document.getElementById('chat-messages');
    if (!input || !chatMessages || !input.value.trim()) return;

    const userText = input.value.trim();
    input.value = '';

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'flex flex-col items-end';
    userMsg.innerHTML = `
        <div class="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] shadow-md">
            <p class="text-sm font-medium">${userText}</p>
        </div>
        <span class="text-[9px] text-slate-400 font-bold mt-1 uppercase">Vous • À l'instant</span>
    `;
    chatMessages.appendChild(userMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate AI Loading
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'flex gap-4 animate-pulse';
    loadingMsg.id = 'ai-loading';
    loadingMsg.innerHTML = `
        <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
            <i data-lucide="bot" class="w-5 h-5"></i>
        </div>
        <div class="bg-indigo-50/50 p-4 rounded-2xl rounded-tl-none border border-indigo-100/50">
            <div class="flex gap-1">
                <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
        </div>
    `;
    chatMessages.appendChild(loadingMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    lucide.createIcons();

    // Simulate AI Response
    setTimeout(() => {
        const loading = document.getElementById('ai-loading');
        if (loading) loading.remove();

        const aiResponse = document.createElement('div');
        aiResponse.className = 'flex gap-4 animate-slide-up';
        aiResponse.innerHTML = `
            <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                <i data-lucide="bot" class="w-5 h-5"></i>
            </div>
            <div class="bg-indigo-50/50 p-5 rounded-2xl rounded-tl-none border border-indigo-100/50 max-w-[85%] shadow-sm">
                <p class="text-sm text-slate-700 leading-relaxed font-medium">
                    J'analyse vote demande : "${userText}".<br><br>
                    Détaillons les points suivants : 
                    <br>• Conformité aux protocoles de la SFC.
                    <br>• Comparaison avec le profil patient (52 ans, HTA).
                    <br>• Risques potentiels liés aux comorbidités.
                    <br><br>Souhaitez-vous que je génère un rapport complet pour le dossier médical ?
                </p>
                <div class="mt-4 flex gap-2">
                    <button class="px-3 py-1.5 bg-white border border-indigo-100 rounded-lg text-[10px] font-bold text-indigo-600 hover:bg-white transition-colors">Générer Rapport</button>
                    <button class="px-3 py-1.5 bg-white border border-indigo-100 rounded-lg text-[10px] font-bold text-indigo-600 hover:bg-white transition-colors">Voir l'étude liée</button>
                </div>
            </div>
        `;
        chatMessages.appendChild(aiResponse);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        lucide.createIcons();
    }, 2000);
}

function triggerHyperFocus(patientData) {
    console.log("Vitalia: Triggering Hyper-Focus Mode for:", patientData.name);
    ConsultationStore.init(patientData);
    document.body.classList.add('hyper-focus');

    const container = document.getElementById('hyper-focus-container');
    if (container) {
        console.log("Vitalia: Updating container innerHTML...");
        try {
            if (!DoctorViews || !DoctorViews.ConsultationFocusMode) {
                throw new Error("DoctorViews.ConsultationFocusMode is missing!");
            }
            const html = DoctorViews.ConsultationFocusMode(patientData);
            if (!html) throw new Error("Template returned empty string");
            container.innerHTML = html;
            console.log("Vitalia: Hyper-Focus overlay content rendered.");
        } catch (e) {
            console.error("Vitalia: Error rendering template:", e);
            container.innerHTML = `<div style="padding: 100px; background: white; border-radius: 20px;">
                <h1>Erreur de chargement</h1>
                <p>${e.message}</p>
                <button onclick="exitHyperFocus()">Retour</button>
            </div>`;
        }
        lucide.createIcons();
        attachFocusModeListeners();
    } else {
        console.error("Vitalia: #hyper-focus-container NOT FOUND. Re-initializing...");
        initImmersionLayers();
        const retryContainer = document.getElementById('hyper-focus-container');
        if (retryContainer) {
            retryContainer.innerHTML = DoctorViews.ConsultationFocusMode(patientData);
            lucide.createIcons();
            attachFocusModeListeners();
        }
    }
}

function triggerFollowUpMode(patientData) {
    console.log("Vitalia: Triggering Follow-Up Mode for:", patientData.name);
    ConsultationStore.init(patientData);
    document.body.classList.add('hyper-focus');

    const container = document.getElementById('hyper-focus-container');
    if (container) {
        try {
            const html = DoctorViews.FollowUpFocusMode(patientData);
            container.innerHTML = html;
            lucide.createIcons();
            attachFollowUpListeners();
        } catch (e) {
            console.error("Vitalia: Error rendering follow-up template:", e);
            container.innerHTML = `<div style="padding: 100px; background: white; border-radius: 20px;">
                <h1>Erreur de chargement</h1>
                <p>${e.message}</p>
                <button onclick="exitHyperFocus()">Retour</button>
            </div>`;
        }
    }
}

function attachFollowUpListeners() {
    const summaryBtn = document.getElementById('btn-generate-followup-summary');
    if (summaryBtn) {
        summaryBtn.addEventListener('click', handleFollowUpSummaryGeneration);
    }
}

function handleFollowUpSummaryGeneration() {
    const btn = document.getElementById('btn-generate-followup-summary');
    if (!btn) return;

    const originalHtml = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="w-3 h-3 mr-2 animate-spin"></i> Génération...`;
    lucide.createIcons();

    setTimeout(() => {
        btn.innerHTML = `<i data-lucide="check" class="w-3 h-3 mr-2"></i> Résumé envoyé`;
        btn.style.background = "#166534";
        lucide.createIcons();

        console.log("Vitalia: Follow-up summary generated by AI and sent to patient file.");

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = originalHtml;
            btn.style.background = "";
            lucide.createIcons();
        }, 3000);
    }, 2000);
}

function exitHyperFocus() {
    console.log("Vitalia: Exiting Hyper-Focus Mode");

    // Capture the current patient ID before clearing the store
    const patientId = ConsultationStore.patient ? ConsultationStore.patient.id : (window.state && window.state.currentPatientId);

    // Mark the appointment as consulted in MOCK_DATA
    if (patientId) {
        const appointment = MOCK_DATA.schedule.find(a => a.patientId === patientId);
        if (appointment) {
            console.log("Vitalia: Marking appointment as consulted for:", patientId);
            appointment.isConsulted = true;
        }
    }

    document.body.classList.remove('hyper-focus');
    ConsultationStore.close();

    // Original re-render call
    renderApp();

    // If we're on the Doctor Portal Dashboard, restore the Esdras view for the last patient
    if (patientId && window.state.currentView === 'doctor_portal' && window.state.doctorSubView === 'dashboard') {
        setTimeout(() => {
            if (window.showEsdrasPatientSummary) {
                console.log("Vitalia: Restoring Esdras view for patient:", patientId);
                window.showEsdrasPatientSummary(patientId);
            }
        }, 150);
    }
}

window.terminateTeleconsultation = function (patientId) {
    console.log("Vitalia: Terminating Teleconsultation for:", patientId);

    if (patientId) {
        const appointment = MOCK_DATA.schedule.find(a => a.patientId === patientId);
        if (appointment) {
            console.log("Vitalia: Marking teleconsultation as consulted for:", patientId);
            appointment.isConsulted = true;
        }
    }

    const overlay = document.getElementById('teleconsultation-overlay');
    if (overlay) overlay.remove();

    // Refresh the view to show the indicator
    if (window.showEsdrasPatientSummary) {
        window.showEsdrasPatientSummary(patientId);
    }
};

function attachFocusModeListeners() {
    const textarea = document.querySelector('.scribe-textarea');
    if (!textarea) return;
    textarea.focus();

    const slashMenu = document.getElementById('slash-menu');
    textarea.addEventListener('input', (e) => {
        const text = e.target.value;
        if (text.endsWith('/')) {
            slashMenu.style.display = 'flex';
        } else {
            slashMenu.style.display = 'none';
        }
    });

    document.querySelectorAll('.slash-menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const cmd = e.currentTarget.dataset.cmd;
            textarea.value = textarea.value.slice(0, textarea.value.lastIndexOf('/'));
            if (cmd === 'ta') {
                const val = prompt('Tension (ex: 120/80):');
                if (val) { ConsultationStore.updateConstant('ta', val); textarea.value += `[TA: ${val}] `; }
            } else if (cmd === 'poids') {
                const val = prompt('Poids (kg):');
                if (val) { ConsultationStore.updateConstant('poids', val); textarea.value += `[Poids: ${val}kg] `; }
            }
            slashMenu.style.display = 'none';
            textarea.focus();
        });
    });

    document.querySelectorAll('.suggestion-card').forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('.text-sm.font-bold').innerText;
            ConsultationStore.addToBasket(name);
            alert(`${name} ajouté.`);
        });
    });

    const btnClose = document.getElementById('btn-close-consult');
    if (btnClose) {
        btnClose.addEventListener('click', () => {
            if (confirm('Clôturer la consultation ?')) {
                exitHyperFocus();
            }
        });
    }


    // Validation Logic for Observations (Contextual AI Simulation)
    const validateBtn = document.getElementById('btn-validate-obs');
    if (validateBtn) {
        validateBtn.addEventListener('click', () => {
            const obsTextarea = document.getElementById('observation-textarea');
            const obsText = obsTextarea ? obsTextarea.value.trim().toLowerCase() : "";

            // Get selected motifs
            const motifs = Array.from(document.querySelectorAll('.focus-col:first-child .symptom-item input[type="checkbox"]:checked'))
                .map(cb => cb.closest('.symptom-item').querySelector('span').innerText);

            const originalText = validateBtn.innerHTML;
            validateBtn.disabled = true;
            validateBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 mr-2 animate-spin"></i> Analyse contextuelle...`;
            lucide.createIcons();

            // Simulate AI processing both Motifs AND Observations
            setTimeout(() => {
                validateBtn.disabled = false;
                validateBtn.innerHTML = originalText;
                lucide.createIcons();

                const aiAnalysisPanel = document.getElementById('ai-realtime-analysis');
                if (aiAnalysisPanel) {
                    // Visual pulse only, content is now mostly static in template for robustness
                    aiAnalysisPanel.style.backgroundColor = 'rgba(219, 234, 254, 0.8)';
                    setTimeout(() => {
                        if (aiAnalysisPanel) aiAnalysisPanel.style.backgroundColor = '';
                    }, 500);
                }

                console.log("Vitalia: Contextual AI processing completed.");
            }, 1500);
        });
    }

    // Audio Recording Simulation Logic
    const audioBtn = document.getElementById('btn-audio-obs');
    const obsTextarea = document.getElementById('observation-textarea');
    const audioStatus = document.getElementById('audio-status');

    if (audioBtn && obsTextarea) {
        audioBtn.addEventListener('click', () => {
            const isRecording = audioBtn.classList.toggle('recording');

            if (isRecording) {
                audioStatus.innerText = "Enregistrement...";
                audioStatus.style.color = "#EF4444";
                obsTextarea.placeholder = "Écoute en cours... Parlez maintenant.";

                // Simulate 3 seconds of "listening"
                setTimeout(() => {
                    if (audioBtn.classList.contains('recording')) {
                        audioBtn.classList.remove('recording');
                        audioStatus.innerText = "Saisie vocale";
                        audioStatus.style.color = "";
                        obsTextarea.placeholder = "Saisissez vos observations cliniques ici...";

                        const simulatedTranscription = "Patient de 42 ans, présente une douleur thoracique rétrosternale irradiant vers le bras gauche. Essoufflement à l'effort. Pas de fièvre. Antécédents d'HTA.";

                        // Append or replace? Let's append if empty, or add newline
                        const currentVal = obsTextarea.value.trim();
                        obsTextarea.value = (currentVal ? currentVal + "\n\n" : "") + simulatedTranscription;

                        console.log("Vitalia: Audio transcription simulation completed.");
                        obsTextarea.focus();
                    }
                }, 3000);
            } else {
                audioStatus.innerText = "Saisie vocale";
                audioStatus.style.color = "";
                obsTextarea.placeholder = "Saisissez vos observations cliniques ici...";
            }
        });
    }
}

/* ==========================================================================
   Templates Layer
   ========================================================================== */
const RenderTemplates = {
    Landing: () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'w-full min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 md:p-12';
        wrapper.style.background = 'radial-gradient(circle at top right, #EEF2FF 0%, #F8FAFC 50%, #F1F5F9 100%)';

        wrapper.innerHTML = `
            <!-- Header Section -->
            <div class="text-center mb-16 animate-fade-in">
                <div class="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <i data-lucide="heart-pulse" class="text-white w-5 h-5"></i>
                    </div>
                    <span class="font-black text-xl text-slate-900 tracking-tight">Vitalia</span>
                    <span class="text-[10px] font-black bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md uppercase">V2.0</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Bienvenue sur votre <span class="text-emerald-600">Espace Santé</span></h1>
                <p class="text-slate-500 font-semibold text-lg max-w-2xl mx-auto">Sélectionnez le portail correspondant à votre activité pour commencer.</p>
            </div>

            <!-- Portals Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full animate-slide-up">
                <!-- Portal Médecin -->
                <div class="group relative" onclick="handleNavigation('doctor_portal', 'DOCTOR', 'dashboard')">
                    <div class="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div class="relative flex flex-col items-center p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer text-center h-full">
                        <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <i data-lucide="stethoscope" class="w-8 h-8"></i>
                        </div>
                        <h2 class="text-xl font-black text-slate-900 mb-2">Portail Médecin</h2>
                        <p class="text-slate-500 text-xs font-medium mb-6 leading-relaxed">Consultation patient, dossiers médicaux et téléconsultation intelligente.</p>
                        <div class="mt-auto w-full">
                            <button class="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl group-hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-900/10">Entrer dans l'espace</button>
                        </div>
                    </div>
                </div>

                <!-- Portal Clinique -->
                <div class="group relative" onclick="handleNavigation('clinic_dashboard', 'CLINIC_ADMIN', 'appointments')">
                    <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div class="relative flex flex-col items-center p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer text-center h-full">
                        <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <i data-lucide="building-2" class="w-8 h-8"></i>
                        </div>
                        <h2 class="text-xl font-black text-slate-900 mb-2">Portail Clinique</h2>
                        <p class="text-slate-500 text-xs font-medium mb-6 leading-relaxed">Gérez votre clinique : statistiques, ressources et administration globale.</p>
                        <div class="mt-auto w-full">
                            <button class="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl group-hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/10">Gérer ma structure</button>
                        </div>
                    </div>
                </div>

                <!-- Portal Pharmacie -->
                <div class="group relative" onclick="handleNavigation('pharmacy_portal', 'PHARMACIST', 'dashboard')">
                    <div class="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div class="relative flex flex-col items-center p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer text-center h-full">
                        <div class="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                            <i data-lucide="pill" class="w-8 h-8"></i>
                        </div>
                        <h2 class="text-xl font-black text-slate-900 mb-2">Portail Pharmacie</h2>
                        <p class="text-slate-500 text-xs font-medium mb-6 leading-relaxed">Gestion des ordonnances, facturation sécurisée et suivi des traitements.</p>
                        <div class="mt-auto w-full">
                            <button class="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl group-hover:bg-amber-600 transition-colors shadow-lg shadow-slate-900/10">Accéder au comptoir</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Info -->
            <div class="mt-20 text-slate-400 text-xs font-bold uppercase tracking-widest animate-fade-in">
                Powered by Vitalia AI Engine • Secure medical ecosystem
            </div>
        `;
        return wrapper;
    },

    DoctorPortalLayout: () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'dashboard-layout h-full flex flex-col';
        const isActive = (view) => state.doctorSubView === view ? 'active' : '';

        wrapper.innerHTML = `
            <div class="flex flex-1 overflow-hidden">
                <aside class="sidebar">
                    <div class="px-6 py-8 flex items-center gap-3 mb-6 cursor-pointer" onclick="handleNavigation('landing')">
                        <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                            <i data-lucide="heart-pulse" class="w-6 h-6 text-emerald-600"></i>
                        </div>
                        <span class="font-bold text-xl text-white">Vitalia</span>
                    </div>

                    <nav class="sidebar-menu">
                        <a href="#" class="sidebar-item ${isActive('dashboard')}" onclick="handleNavigation('doctor_portal', null, 'dashboard')">
                            <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
                            <span>Tableau de Bord</span>
                        </a>
                        <a href="#" class="sidebar-item ${isActive('patients')}" onclick="handleNavigation('doctor_portal', null, 'patients')">
                            <i data-lucide="search" class="w-5 h-5"></i>
                            <span>Recherche Patient</span>
                        </a>
                        <a href="#" class="sidebar-item ${isActive('statistics')}" onclick="handleNavigation('doctor_portal', null, 'statistics')">
                            <i data-lucide="bar-chart-2" class="w-5 h-5"></i>
                            <span>Statistiques</span>
                        </a>
                        <a href="#" class="sidebar-item ${isActive('settings')}" onclick="handleNavigation('doctor_portal', null, 'settings')">
                            <i data-lucide="settings" class="w-5 h-5"></i>
                            <span>Paramètres</span>
                        </a>
                    </nav>

                    <!-- Profil Section (Bottom) -->
                    <div style="padding: 24px 20px; border-top: 1px solid rgba(255,255,255,0.06); background: rgba(0,0,0,0.15);">
                        <a href="#" class="sidebar-item ${isActive('profile')}" onclick="handleNavigation('doctor_portal', null, 'profile')" style="padding: 8px 12px; margin-bottom: 20px; border-radius: 12px; background: rgba(255,255,255,0.05);">
                            <i data-lucide="user-circle" class="w-5 h-5 text-emerald-400"></i>
                            <span class="text-emerald-50">Profil Médecin</span>
                        </a>
                        
                        <div style="display: flex; align-items: center; gap: 14px; padding: 0 10px;">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=SophieVitalia&backgroundColor=0284c7" style="width: 46px; height: 46px; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.4); border: 2px solid #34D399; object-fit: cover;" alt="Dr Sophie">
                            <div style="display: flex; flex-direction: column; gap: 2px;">
                                <h4 style="font-size: 14px; font-weight: 800; color: #ffffff; margin: 0; line-height: 1.2; letter-spacing: -0.2px;">Dr. Sophie M.</h4>
                                <span style="font-size: 11px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Généraliste</span>
                            </div>
                        </div>
                    </div>
                </aside>

                <main class="main-content flex-1 flex flex-col">
                    <header class="header-minimalist">
                        <div class="flex items-center gap-3">
                            <select style="height:44px;padding-left:16px;padding-right:12px;background:linear-gradient(135deg,#EEF2FF 0%,#F5F3FF 100%);border:1.5px solid #C7D2FE;border-radius:14px;font-size:13px;font-weight:700;color:#4338CA;outline:none;cursor:pointer;transition:all 0.2s;box-shadow:0 2px 8px rgba(99,102,241,0.08);min-width:215px;" onmouseover="this.style.boxShadow='0 4px 16px rgba(99,102,241,0.18)';this.style.borderColor='#818CF8';" onmouseout="this.style.boxShadow='0 2px 8px rgba(99,102,241,0.08)';this.style.borderColor='#C7D2FE';">
                                <option value="" disabled selected>Sélectionner Clinique...</option>
                                <option value="1">Clinique Saint-Jean</option>
                                <option value="2">Centre Médical Vitalia</option>
                                <option value="3">Hôpital Nord</option>
                            </select>

                            <select style="height:44px;padding-left:16px;padding-right:12px;background:linear-gradient(135deg,#ECFDF5 0%,#F0FDF4 100%);border:1.5px solid #6EE7B7;border-radius:14px;font-size:13px;font-weight:700;color:#065F46;outline:none;cursor:pointer;transition:all 0.2s;box-shadow:0 2px 8px rgba(16,185,129,0.08);min-width:235px;" onmouseover="this.style.boxShadow='0 4px 16px rgba(16,185,129,0.18)';this.style.borderColor='#34D399';" onmouseout="this.style.boxShadow='0 2px 8px rgba(16,185,129,0.08)';this.style.borderColor='#6EE7B7';">
                                <option value="" disabled selected>Sélectionner Spécialité...</option>
                                <option value="gen">Médecine Générale</option>
                                <option value="cardio">Cardiologie</option>
                                <option value="derma">Dermatologie</option>
                                <option value="ped">Pédiatrie</option>
                            </select>
                        </div>
                        <div class="flex items-center gap-6">
                            <div class="focus-toggle-antigravity" title="Activer le mode sombre">
                                <i data-lucide="moon" class="w-4 h-4 text-slate-500 mr-1"></i>
                                <span class="focus-toggle-label">Mode Sombre</span>
                                <label class="switch">
                                    <input type="checkbox" id="dark-mode-toggle" onchange="document.body.classList.toggle('dark-theme');">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </header>
                    <div id="doctor-content-wrapper" class="flex-1 overflow-y-auto pb-10 min-h-0"></div>
                </main>
            </div>
        `;

        setTimeout(() => {
            const contentArea = wrapper.querySelector('#doctor-content-wrapper');
            if (contentArea) {
                switch (state.doctorSubView) {
                    case 'dashboard': contentArea.appendChild(DoctorViews.Dashboard()); break;
                    case 'salle_attente': contentArea.appendChild(DoctorViews.SalleAttente()); break;
                    case 'consultation': contentArea.appendChild(DoctorViews.Consultation()); break;
                    case 'agenda': contentArea.appendChild(DoctorViews.Agenda()); break;
                    case 'fiche_patient': contentArea.appendChild(DoctorViews.FichePatient()); break;
                    case 'patients': contentArea.appendChild(DoctorViews.PatientsList()); break;
                    case 'statistics': contentArea.appendChild(DoctorViews.Statistics()); break;
                    case 'settings': contentArea.appendChild(DoctorViews.Settings()); break;
                    case 'profile': contentArea.appendChild(DoctorViews.Profile()); break;
                    case 'historique': contentArea.appendChild(DoctorViews.Historique ? DoctorViews.Historique() : DoctorViews.Dashboard()); break;
                    default: contentArea.appendChild(DoctorViews.Dashboard()); break;
                }
                lucide.createIcons();
            }
        }, 0);
        return wrapper;
    },

    ClinicDashboard: () => {
        return ClinicViews.Layout(state.clinicSubView);
    },

    PharmacyPortal: () => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = PharmacyViews.Layout(state.pharmacySubView);
        return wrapper;
    }
};

// Global function to trigger the medical timeline overlay
window.openMedicalTimeline = function () {
    // Determine the current patient
    const patientId = state.currentPatientId;
    if (!patientId) {
        console.warn('Vitalia: Aucun patient sélectionné pour la timeline.');
        return;
    }
    const patient = MOCK_DATA.patients.find(p => p.id === patientId);

    if (patient) {
        const timelineWrapper = document.createElement('div');
        timelineWrapper.innerHTML = DoctorViews.MedicalTimelineView(patient);
        const overlay = timelineWrapper.firstElementChild;
        document.body.appendChild(overlay);

        // Initialize icons for the new overlay
        if (window.lucide) {
            window.lucide.createIcons({
                attrs: {
                    class: ["lucide-icon"]
                }
            });
        }
    } else {
        console.error('Patient non trouvé pour la timeline');
    }
};
