const PharmacyViews = {
    Layout: (subView = 'dashboard') => {
        return `
        <div class="flex h-screen bg-[#F8FAFC] overflow-hidden" style="background-image: radial-gradient(#E2E8F0 1px, transparent 1px); background-size: 40px 40px;">
            <!-- Sidebar -->
            <aside class="w-64 bg-slate-900 text-white flex flex-col shrink-0 shadow-2xl z-20">
                <div class="p-8">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-tr from-emerald-600 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <i data-lucide="pill" class="text-white w-7 h-7"></i>
                        </div>
                        <div>
                            <h2 class="font-black text-xl leading-none tracking-tight">Vitalia</h2>
                            <span class="text-[10px] text-emerald-400 uppercase tracking-[0.2em] font-black">Pharmacie V2.1</span>
                        </div>
                    </div>
                </div>
                
                <nav class="flex-1 px-4 space-y-2">
                    <div class="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4 mb-4">Navigation</div>
                    <a href="#" onclick="handleNavigation('pharmacy_portal', 'PHARMACIE', 'dashboard')" 
                       class="flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 ${subView === 'dashboard' ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-900/40' : 'text-slate-400 hover:bg-white/5 hover:text-white'}">
                        <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
                        <span class="font-bold">Tableau de Bord</span>
                    </a>
                    <a href="#" onclick="handleNavigation('pharmacy_portal', 'PHARMACIE', 'billing')" 
                       class="flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 ${subView === 'billing' ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-900/40' : 'text-slate-400 hover:bg-white/5 hover:text-white'}">
                        <i data-lucide="receipt-text" class="w-5 h-5"></i>
                        <span class="font-bold">Facturation</span>
                    </a>
                    <a href="#" onclick="handleNavigation('pharmacy_portal', 'PHARMACIE', 'history')" 
                       class="flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 ${subView === 'history' ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-900/40' : 'text-slate-400 hover:bg-white/5 hover:text-white'}">
                        <i data-lucide="history" class="w-5 h-5"></i>
                        <span class="font-bold">Historique</span>
                    </a>
                    <a href="#" onclick="handleNavigation('pharmacy_portal', 'PHARMACIE', 'settings')" 
                       class="flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 ${subView === 'settings' ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-900/40' : 'text-slate-400 hover:bg-white/5 hover:text-white'}">
                        <i data-lucide="settings" class="w-5 h-5"></i>
                        <span class="font-bold">Paramètres</span>
                    </a>
                </nav>

                <div class="p-6">
                    <a href="#" onclick="handleLogout()" class="flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-400 hover:bg-rose-500 hover:text-white transition-all duration-300 group">
                        <i data-lucide="log-out" class="w-5 h-5 group-hover:rotate-180 transition-transform"></i>
                        <span class="font-bold">Déconnexion</span>
                    </a>
                </div>
            </aside>

            <!-- Main Content -->
            <main class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <!-- Decorative blobs -->
                <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                <header class="h-24 bg-white/60 backdrop-blur-md border-b border-white flex items-center justify-between px-10 shrink-0 z-10">
                    <div>
                        <h1 class="text-3xl font-black text-slate-900 leading-none mb-1 tracking-tight">
                            ${subView === 'dashboard' ? 'Tableau de Bord' :
                    subView === 'billing' ? 'Facturation' :
                        subView === 'history' ? 'Historique' : 'Paramètres'}
                        </h1>
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">${new Date().toLocaleDateString('fr-FR', {weekday: 'long', day: 'numeric', month: 'long'})}</p>
                    </div>
                    
                    <div class="flex items-center gap-6">
                         <div class="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm">
                            <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span class="text-xs font-black text-slate-600 uppercase tracking-widest">Live System</span>
                        </div>
                        <div class="relative">
                            <button class="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:rotate-12 transition-all duration-300 shadow-sm">
                                <i data-lucide="bell" class="w-6 h-6"></i>
                                <span class="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black text-white">3</span>
                            </button>
                        </div>
                    </div>
                </header>

                <div class="flex-1 overflow-y-auto p-10" style="-ms-overflow-style:-ms-autohiding-scrollbar;">
                    ${subView === 'dashboard' ? PharmacyViews.Dashboard() :
                subView === 'billing' ? PharmacyViews.BillingHistory() :
                    subView === 'history' ? PharmacyViews.PrescriptionHistory() :
                        PharmacyViews.Settings()}
                </div>
            </main>
        </div>
        <div id="pharma-modal-container"></div>
        `;
    },

    Dashboard: () => {
        const prescriptions = MOCK_DATA.prescriptions
            .filter(p => {
                const isNotIgnored = p.status !== 'NON_PRISE_EN_CHARGE';
                if (!isNotIgnored) return false;
                
                // Disappear if EN_ATTENTE_PRISE_EN_CHARGE and older than 15 mins
                if (p.status === 'EN_ATTENTE_PRISE_EN_CHARGE') {
                    const diff = Date.now() - new Date(p.receivedAt).getTime();
                    if (diff > 10 * 60 * 1000) return false;
                }

                // Disappear if TERMINE and older than 10 seconds
                if (p.status === 'TERMINE' && p.closedAt) {
                    const diff = Date.now() - p.closedAt;
                    if (diff > 10000) return false;
                }

                return true;
            })
            .sort((a, b) => new Date(b.date_reception) - new Date(a.date_reception))
            .slice(0, 10);

        if (prescriptions.length === 0) {
            return `
            <div class="flex flex-col items-center justify-center p-20 bg-white rounded-[40px] border-2 border-dashed border-slate-200 animate-fade-in shadow-sm">
                <div class="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-300">
                    <i data-lucide="inbox" class="w-12 h-12"></i>
                </div>
                <h3 class="text-xl font-black text-slate-800 mb-2">Aucune ordonnance active</h3>
                <p class="text-slate-500 max-w-sm text-center font-medium">Les nouvelles ordonnances envoyées par les cliniques Vitalia apparaîtront ici en temps réel.</p>
            </div>
            `;
        }

        return `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${prescriptions.map(p => PharmacyViews.PrescriptionCard(p)).join('')}
        </div>
        `;
    },

    PrescriptionCard: (p) => {
        const statuses = {
            'EN_ATTENTE_PRISE_EN_CHARGE': { 
                label: 'Urgent: Prise en charge', 
                base: 'bg-rose-500/10 text-rose-600 border-rose-200', 
                dot: 'bg-rose-500 animate-pulse',
                glow: 'shadow-[0_0_15px_rgba(244,63,94,0.3)]'
            },
            'EN_COURS': { 
                label: 'Analyse en cours', 
                base: 'bg-blue-500/10 text-blue-600 border-blue-200', 
                dot: 'bg-blue-500 animate-bounce',
                glow: ''
            },
            'PRET': { 
                label: 'Prêt pour retrait', 
                base: 'bg-emerald-500/10 text-emerald-600 border-emerald-200', 
                dot: 'bg-emerald-500',
                glow: 'shadow-[0_0_15px_rgba(16,185,129,0.2)]'
            },
            'REPONSE_RECUE': { 
                label: 'Réponse Client', 
                base: 'bg-violet-500/10 text-violet-600 border-violet-200', 
                dot: 'bg-violet-500 animate-ping',
                glow: 'shadow-[0_0_15px_rgba(139,92,246,0.3)]'
            },
            'EN_ATTENTE_CLIENT': { 
                label: 'En attente patient', 
                base: 'bg-amber-500/10 text-amber-600 border-amber-200', 
                dot: 'bg-amber-500',
                glow: ''
            },
            'PAIEMENT_EN_ATTENTE': { 
                label: 'Paiement requis', 
                base: 'bg-orange-500/10 text-orange-600 border-orange-200', 
                dot: 'bg-orange-500 animate-pulse',
                glow: ''
            },
            'TERMINE': { 
                label: 'Livré', 
                base: 'bg-slate-100 text-slate-500 border-slate-200', 
                dot: 'bg-slate-400',
                glow: ''
            }
        };

        const config = statuses[p.status] || { label: p.status, base: 'bg-slate-100 text-slate-600', dot: 'bg-slate-400', glow: '' };

        return `
        <div class="group relative bg-white/70 rounded-[32px] border border-white/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden ${config.glow}" style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);">
            
            <!-- Card Header: Status & Timing -->
            <div class="p-6 pb-4">
                <div class="flex justify-between items-center mb-6">
                    <div class="flex items-center gap-2 px-3 py-1.5 rounded-full border ${config.base} backdrop-blur-md">
                        <div class="w-1.5 h-1.5 rounded-full ${config.dot}"></div>
                        <span class="text-[10px] font-black uppercase tracking-widest">${config.label}</span>
                    </div>
                    
                    ${p.status === 'EN_ATTENTE_PRISE_EN_CHARGE' ? `
                        <div class="flex items-center gap-2 bg-rose-500 text-white px-3 py-1.5 rounded-xl shadow-lg shadow-rose-500/20">
                            <i data-lucide="timer" class="w-3.5 h-3.5"></i>
                            <span class="font-black text-xs tabular-nums" id="timer-${p.id}">${(() => {
                                const diff = (new Date(p.receivedAt).getTime() + 10 * 60 * 1000) - Date.now();
                                if (diff <= 0) return "00:00";
                                const mins = Math.floor(diff / 60000);
                                const secs = Math.floor((diff % 60000) / 1000);
                                return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
                            })()}</span>
                        </div>
                    ` : `
                        <div class="flex items-center gap-1.5 text-slate-400">
                            <i data-lucide="calendar" class="w-3 h-3"></i>
                            <span class="text-[10px] font-bold">${new Date(p.date_reception).toLocaleDateString('fr-FR', {day: 'numeric', month: 'short'})}</span>
                        </div>
                    `}
                </div>

                <!-- Patient Identity -->
                <div class="mb-6">
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Patient</p>
                    <h3 class="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">${p.patientName}</h3>
                    <div class="flex items-center gap-2 text-slate-500 mt-1">
                        <div class="w-2 h-2 rounded-full bg-slate-200"></div>
                        <span class="text-xs font-semibold">${p.clinic}</span>
                    </div>
                </div>

                <!-- Medications List -->
                <div class="space-y-2.5 mb-6">
                    ${p.medications.slice(0, 3).map(m => `
                        <div class="flex items-center gap-3 py-2 px-3 rounded-2xl bg-slate-50 border border-slate-100/50 group/item hover:bg-white hover:border-emerald-200 hover:shadow-sm transition-all duration-300">
                            <div class="w-2 h-2 rounded-full bg-emerald-500 group-hover/item:scale-125 transition-transform"></div>
                            <span class="text-sm font-bold text-slate-600 group-hover/item:text-slate-900 truncate">${m}</span>
                        </div>
                    `).join('')}
                    ${p.medications.length > 3 ? `
                        <div class="text-[10px] font-black text-slate-400 pl-8 uppercase tracking-widest">
                            + ${p.medications.length - 3} autres médicaments
                        </div>
                    ` : ''}
                </div>

                <!-- Insurance Info (Simplified) -->
                ${p.insurance ? `
                    <div class="mt-auto pt-4 border-t border-slate-100/50 flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-indigo-500"></i>
                            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">${p.insurance.name}</span>
                        </div>
                        <span class="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg">${p.insurance.coverage}</span>
                    </div>
                ` : ''}
            </div>

            <!-- Footer / Actions -->
            <div class="p-6 bg-slate-50/50 border-t border-slate-100 mt-auto">
                ${(() => {
                    const btnBase = "w-full font-black text-sm uppercase tracking-widest py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 shadow-xl";
                    switch (p.status) {
                        case 'EN_ATTENTE_CLIENT':
                            return `
                                <div class="w-full bg-white border border-slate-200 text-slate-400 font-bold py-4 rounded-2xl flex items-center justify-center gap-3">
                                    <i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i>
                                    Patient en ligne...
                                </div>
                            `;
                        case 'PAIEMENT_EN_ATTENTE':
                            return `
                                <div class="w-full bg-amber-50 border border-amber-200 text-amber-600 font-black py-4 rounded-2xl flex items-center justify-center gap-3 animate-pulse">
                                    <i data-lucide="credit-card" class="w-5 h-5"></i>
                                    Paiement Requis
                                </div>
                            `;
                        case 'REPONSE_RECUE':
                            return `
                                <button onclick="window.runPharmaAction('${p.id}', 'VIEW_RESPONSE')" 
                                    class="${btnBase} bg-violet-600 hover:bg-violet-700 text-white shadow-violet-600/20">
                                    <i data-lucide="message-square-check" class="w-5 h-5"></i>
                                    Réponse reçue
                                </button>
                            `;
                        case 'PRET':
                            return `
                                <button onclick="window.runPharmaAction('${p.id}', 'DELIVERED')" 
                                    class="${btnBase} bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20">
                                    <i data-lucide="package-check" class="w-5 h-5"></i>
                                    Délivrer
                                </button>
                            `;
                        case 'TERMINE':
                            return `
                                <div class="w-full py-2 text-center text-slate-300 font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                                    <i data-lucide="check-circle" class="w-4 h-4"></i>
                                    Dossier Clôturé
                                </div>
                            `;
                        case 'EN_ATTENTE_PRISE_EN_CHARGE':
                            return `
                                <button onclick="window.runPharmaAction('${p.id}', 'ACCEPT_PRESCRIPTION')" 
                                    class="${btnBase} bg-slate-900 hover:bg-black text-white shadow-slate-900/30">
                                    <i data-lucide="check-circle" class="w-5 h-5 text-emerald-400"></i>
                                    Prendre en charge
                                </button>
                            `;
                        default:
                            return `
                                <button onclick="window.runPharmaAction('${p.id}', 'TREAT_MODAL')" 
                                    class="${btnBase} bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20">
                                    <i data-lucide="play-circle" class="w-5 h-5"></i>
                                    Traiter
                                </button>
                            `;
                    }
                })()}
            </div>
        </div>
        `;
    },

    Settings: () => {
        return `
        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                <h2 class="text-xl font-bold text-slate-800 mb-6">Paramètres de la Pharmacie</h2>
                <div class="space-y-6">
                    <div class="grid grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-slate-600">Nom de l'établissement</label>
                            <input type="text" value="Pharmacie de la Cité" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all">
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-slate-600">Adresse</label>
                            <input type="text" value="Abidjan, Côte d'Ivoire" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    TreatmentModal: (prescriptionId, mode = 'TREAT') => {
        const p = MOCK_DATA.prescriptions.find(ord => ord.id === prescriptionId);
        if (!p) return '';

        const isResponseMode = mode === 'VIEW_RESPONSE';
        const lastResp = p.lastResponse || { type: 'ACCEPTé', value: 'Alternative acceptée par le patient.' };

        return `
        <div id="pharma-modal-overlay" class="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[1000] flex items-center justify-center p-4 md:p-8 animate-fade-in">
            <div class="bg-white w-full max-w-6xl h-full max-h-[850px] rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-in">
                
                <!-- Left: Prescription Image & Insurance -->
                <div class="w-full md:w-1/2 bg-slate-100 flex flex-col h-full border-r border-slate-200 overflow-hidden relative">
                    <div class="p-6 bg-white/50 border-b border-slate-200 flex items-center justify-between shrink-0">
                        <h3 class="font-bold text-slate-800 flex items-center gap-2">
                            <i data-lucide="image" class="text-emerald-500 w-5 h-5"></i>
                            Ordonnance - ${p.patientName}
                        </h3>
                        <button onclick="window.zoomImage('${p.image}')" class="text-slate-500 hover:text-emerald-600 transition-all">
                            <i data-lucide="maximize-2" class="w-5 h-5"></i>
                        </button>
                    </div>
                    
                    <div class="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-200">
                        <img src="${p.image}" alt="Ordonnance" class="max-w-full h-auto rounded-xl shadow-lg cursor-zoom-in hover:scale-105 transition-transform duration-500" onclick="window.zoomImage('${p.image}')">
                    </div>

                    ${p.insurance ? `
                    <div class="p-6 bg-blue-600 text-white shrink-0">
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-blue-100 text-xs font-bold uppercase tracking-wider mb-1">Assurance Associée</p>
                                <h4 class="text-xl font-extrabold uppercase">${p.insurance.name}</h4>
                            </div>
                            <div class="text-right">
                                <p class="text-blue-100 text-xs font-bold uppercase tracking-wider mb-1">Taux Charge</p>
                                <span class="bg-white text-blue-700 px-4 py-1 rounded-full font-black text-lg">${p.insurance.coverage}</span>
                            </div>
                        </div>
                    </div>
                    ` : `
                    <div class="p-6 bg-slate-800 text-white shrink-0">
                        <div class="flex items-center gap-3">
                            <i data-lucide="shield-off" class="text-slate-400 w-6 h-6"></i>
                            <span class="font-bold uppercase tracking-widest text-slate-300">Aucune Assurance Associée</span>
                        </div>
                    </div>
                    `}
                </div>

                <!-- Right: Treatment Process -->
                <div class="w-full md:w-1/2 flex flex-col h-full relative">
                    <button onclick="document.getElementById('pharma-modal-overlay').remove()" class="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all z-10 shadow-sm leading-none">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>

                    <div class="p-8 flex-1 overflow-y-auto">
                        <div class="mb-8">
                            <h2 class="text-3xl font-black text-slate-900 mb-2 leading-tight">
                                ${isResponseMode ? 'Réponse du Patient' : 'Traitement de l\'ordonnance'}
                            </h2>
                            <p class="text-slate-500">
                                ${isResponseMode ? 'Le patient a répondu à votre proposition.' : 'Veuillez vérifier les médicaments et définir le statut.'}
                            </p>
                        </div>

                        ${isResponseMode ? `
                            <!-- View Response Mode -->
                            <div class="space-y-6 animate-fade-in">
                                <div class="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-6 flex items-start gap-4">
                                    <div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                                        <i data-lucide="message-circle" class="text-white w-6 h-6"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-black text-emerald-900 uppercase text-xs tracking-widest mb-1">Résultat</h4>
                                        <p class="text-emerald-800 font-bold text-lg">${lastResp.value}</p>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <button onclick="window.handlePatientChoice('${p.id}', 'ABANDON')" 
                                        class="flex flex-col items-center justify-center p-6 rounded-3xl border-2 border-slate-200 bg-slate-50 hover:bg-rose-50 hover:border-rose-300 transition-all group">
                                        <div class="w-12 h-12 bg-slate-200 text-slate-500 rounded-xl flex items-center justify-center mb-3 group-hover:bg-rose-500 group-hover:text-white transition-all">
                                            <i data-lucide="slash" class="w-6 h-6"></i>
                                        </div>
                                        <span class="font-bold uppercase text-xs text-slate-600 group-hover:text-rose-700">Abandonner</span>
                                    </button>
                                    <button onclick="window.handlePatientChoice('${p.id}', 'CONTINUE')" 
                                        class="flex flex-col items-center justify-center p-6 rounded-3xl border-2 border-emerald-500 bg-emerald-50 transition-all group ring-4 ring-emerald-500/10">
                                        <div class="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-emerald-500/20">
                                            <i data-lucide="arrow-right" class="w-6 h-6"></i>
                                        </div>
                                        <span class="font-bold uppercase text-xs text-emerald-800">Continuer</span>
                                    </button>
                                </div>

                                <div id="final-price-section" class="hidden animate-slide-up bg-slate-50 rounded-3xl p-6 border border-slate-200">
                                    <label class="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Montant total final (FCFA)</label>
                                    <div class="relative">
                                        <input type="number" id="pharma-final-price" placeholder="Ex: 5000" 
                                            class="w-full bg-white px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none text-2xl font-black text-emerald-600 transition-all">
                                        <span class="absolute right-6 top-1/2 -translate-y-1/2 font-black text-slate-400">XOF</span>
                                    </div>
                                    <button onclick="window.finalizePrescription('${p.id}')" 
                                        class="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest py-4 rounded-2xl shadow-xl shadow-emerald-600/30 active:scale-95 transition-all flex items-center justify-center gap-3">
                                        <i data-lucide="check-circle" class="w-6 h-6"></i>
                                        Valider et Envoyer
                                    </button>
                                </div>
                            </div>
                        ` : `
                            <!-- Standard Treatment Mode -->
                            <div class="grid grid-cols-2 gap-4 mb-8">
                                <button onclick="window.toggleTreatmentOption('VALIDATE')" id="btn-opt-validate" 
                                    class="flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all group border-slate-200 bg-slate-50">
                                    <div class="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                                        <i data-lucide="check-circle-2" class="w-8 h-8"></i>
                                    </div>
                                    <span class="font-black uppercase tracking-tight text-slate-600">Tout disponible</span>
                                </button>
                                
                                <button onclick="window.toggleTreatmentOption('MISSING')" id="btn-opt-missing"
                                    class="flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all group border-slate-200 bg-slate-50 hover:border-amber-400 hover:bg-amber-50">
                                    <div class="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                                        <i data-lucide="alert-triangle" class="w-8 h-8"></i>
                                    </div>
                                    <span class="font-black uppercase tracking-tight text-slate-600 group-hover:text-amber-800">Médicament manquant</span>
                                </button>
                            </div>

                            <!-- Form Sections -->
                            <div id="treatment-form-container" class="space-y-6">
                                <div id="section-validate" class="hidden animate-slide-up">
                                    <div class="bg-slate-50 rounded-3xl p-6 border border-slate-200">
                                        <label class="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Montant total à payer (FCFA)</label>
                                        <div class="relative">
                                            <input type="number" id="pharma-price-input" placeholder="Ex: 5000" 
                                                class="w-full bg-white px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none text-2xl font-black text-emerald-600 transition-all">
                                            <span class="absolute right-6 top-1/2 -translate-y-1/2 font-black text-slate-400">XOF</span>
                                        </div>
                                    </div>
                                </div>

                                <div id="section-missing" class="hidden animate-slide-up space-y-4">
                                    <div class="bg-amber-50 rounded-3xl p-6 border border-amber-200">
                                        <div class="space-y-4">
                                            <div>
                                                <label class="block text-[10px] font-black text-amber-800 mb-1 uppercase tracking-widest">Médicament indisponible</label>
                                                <input type="text" id="pharma-missing-name" placeholder="Nom du médicament" 
                                                    class="w-full bg-white px-5 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none font-bold text-slate-800 transition-all">
                                            </div>
                                            <div class="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label class="block text-[10px] font-black text-amber-800 mb-1 uppercase tracking-widest">Alternative proposée</label>
                                                    <input type="text" id="pharma-alt-name" placeholder="Ex: Générique" 
                                                        class="w-full bg-white px-5 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none font-bold text-slate-800 transition-all">
                                                </div>
                                                <div>
                                                    <label class="block text-[10px] font-black text-amber-800 mb-1 uppercase tracking-widest">Prix (XOF)</label>
                                                    <input type="number" id="pharma-alt-price" placeholder="Prix" 
                                                        class="w-full bg-white px-5 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none font-black text-amber-600 transition-all">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `}
                    </div>

                    ${!isResponseMode ? `
                    <div class="p-8 bg-slate-50 border-t border-slate-200 flex gap-4 shrink-0">
                        <button onclick="document.getElementById('pharma-modal-overlay').remove()" 
                            class="px-8 py-4 rounded-2xl font-bold text-slate-600 hover:bg-slate-200 transition-all">
                            Annuler
                        </button>
                        <button onclick="window.submitTreatment('${prescriptionId}')" id="pharma-submit-btn" disabled
                            class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest py-4 rounded-2xl shadow-xl shadow-emerald-600/30 active:scale-95 transition-all flex items-center justify-center gap-3 opacity-50 cursor-not-allowed">
                            <i data-lucide="send" class="w-6 h-6"></i>
                        </button>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
        `;
    },

    BillingHistory: () => {
        const billing = MOCK_DATA.billing || [];

        const daySummaries = billing.reduce((acc, curr) => {
            if (!acc[curr.date]) acc[curr.date] = 0;
            acc[curr.date] += curr.amount;
            return acc;
        }, {});

        const sortedDates = Object.keys(daySummaries).sort((a, b) => new Date(b) - new Date(a));

        return `
        <div class="space-y-10 animate-fade-in">
            <!-- Stats Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                <div class="bg-white/70 backdrop-blur-xl p-8 rounded-[32px] border border-white/60 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 group">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                            <i data-lucide="trending-up" class="text-emerald-600 w-6 h-6"></i>
                        </div>
                        <p class="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Total 7 derniers jours</p>
                    </div>
                    <p class="text-4xl font-black text-slate-900">${billing.reduce((sum, b) => sum + b.amount, 0).toLocaleString()} <span class="text-sm font-bold text-slate-400 ml-1">XOF</span></p>
                </div>
                <div class="bg-white/70 backdrop-blur-xl p-8 rounded-[32px] border border-white/60 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 group">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                            <i data-lucide="bar-chart-3" class="text-blue-600 w-6 h-6"></i>
                        </div>
                        <p class="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Moyenne quotidienne</p>
                    </div>
                    <p class="text-4xl font-black text-slate-900">${Math.round(billing.reduce((sum, b) => sum + b.amount, 0) / 7).toLocaleString()} <span class="text-sm font-bold text-slate-400 ml-1">XOF</span></p>
                </div>
                <div class="bg-white/70 backdrop-blur-xl p-8 rounded-[32px] border border-white/60 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 group">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                            <i data-lucide="credit-card" class="text-indigo-600 w-6 h-6"></i>
                        </div>
                        <p class="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Transactions</p>
                    </div>
                    <p class="text-4xl font-black text-slate-900">${billing.length}</p>
                </div>
                <!-- Card Abonnement -->
                <div class="bg-white/70 backdrop-blur-xl p-8 rounded-[32px] border border-white/60 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                                <i data-lucide="zap" class="text-amber-600 w-6 h-6"></i>
                            </div>
                            <p class="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Abonnement</p>
                        </div>
                        <span class="text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-200/50 flex items-center gap-1.5">
                            <div class="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                            Mode Gratuit Activé
                        </span>
                    </div>
                    <div>
                        <button class="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-[10px] tracking-tighter py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all uppercase">
                            Payer mon abonnement
                        </button>
                    </div>
                </div>
            </div>

            <div class="bg-white/70 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-sm overflow-hidden">
                <div class="p-8 border-b border-slate-100/50 flex justify-between items-center bg-slate-50/30">
                    <h2 class="font-black text-slate-900 flex items-center gap-3">
                        <i data-lucide="list-checks" class="w-6 h-6 text-emerald-500"></i>
                        Détail des transactions
                    </h2>
                </div>
                <div class="overflow-x-auto text-[13px]">
                    <table class="w-full text-left border-separate border-spacing-0">
                        <thead>
                            <tr class="bg-slate-50/50">
                                <th class="px-8 py-5 font-black text-slate-400 uppercase tracking-widest text-[10px]">Date & Heure</th>
                                <th class="px-8 py-5 font-black text-slate-400 uppercase tracking-widest text-[10px]">Patient</th>
                                <th class="px-8 py-5 font-black text-slate-400 uppercase tracking-widest text-[10px]">ID Transaction</th>
                                <th class="px-8 py-5 font-black text-slate-400 uppercase tracking-widest text-[10px] text-right">Montant</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100/50">
                            ${billing.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time)).map(b => `
                                <tr class="hover:bg-emerald-50/30 transition-colors group">
                                    <td class="px-8 py-5">
                                        <div class="font-black text-slate-900">${new Date(b.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                                        <div class="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">${b.time}</div>
                                    </td>
                                    <td class="px-8 py-5 font-bold text-slate-600 group-hover:text-emerald-700 transition-colors">${b.patient}</td>
                                    <td class="px-8 py-5 text-xs font-mono text-slate-400">${b.id}</td>
                                    <td class="px-8 py-5 text-right">
                                        <span class="font-black text-slate-900 text-base">${b.amount.toLocaleString()}</span>
                                        <span class="text-[10px] font-black text-slate-400 ml-1 uppercase">XOF</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Daily Summaries -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${sortedDates.map(date => `
                    <div class="bg-white/50 backdrop-blur-md border border-white hover:border-emerald-200 p-6 rounded-[24px] shadow-sm transition-all hover:bg-emerald-50/50">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">${new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                        <p class="text-2xl font-black text-emerald-600">${daySummaries[date].toLocaleString()} <span class="text-xs font-bold text-emerald-400">XOF</span></p>
                    </div>
                `).join('')}
            </div>
        </div>
        `;
    },

    PrescriptionHistory: () => {
        const history = MOCK_DATA.prescriptions
            .filter(p => p.status === 'TERMINE')
            .sort((a, b) => new Date(b.date_reception) - new Date(a.date_reception));

        return `
        <div class="bg-white/70 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-sm overflow-hidden animate-fade-in text-[13px]">
            <div class="p-8 border-b border-slate-100/50 bg-slate-50/30 flex justify-between items-center">
                <h2 class="font-black text-slate-900 flex items-center gap-3 tracking-tight">
                    <i data-lucide="archive" class="w-6 h-6 text-indigo-500"></i>
                    Archive des Ordonnances
                </h2>
                <div class="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100">
                    <div class="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span class="text-[10px] font-black text-indigo-700 uppercase tracking-widest">
                        ${history.length} Traitées
                    </span>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-separate border-spacing-0">
                    <thead>
                        <tr class="bg-slate-50/50">
                            <th class="px-8 py-5 font-black text-slate-400 uppercase tracking-widest text-[10px]">Date d'envoi</th>
                            <th class="px-8 py-5 font-black text-slate-400 uppercase tracking-widest text-[10px]">Patient</th>
                            <th class="px-8 py-5 font-black text-slate-400 uppercase tracking-widest text-[10px]">Prescripteur</th>
                            <th class="px-8 py-5 font-black text-slate-400 uppercase tracking-widest text-[10px]">Traitements</th>
                            <th class="px-8 py-5 font-black text-slate-400 uppercase tracking-widest text-[10px] text-right">Statut Final</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100/50">
                        ${history.map(p => `
                            <tr class="hover:bg-indigo-50/30 transition-colors group">
                                <td class="px-8 py-5">
                                    <div class="font-black text-slate-900">${new Date(p.date_reception).toLocaleDateString()}</div>
                                    <div class="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">${p.id}</div>
                                </td>
                                <td class="px-8 py-5 font-bold text-slate-600 group-hover:text-indigo-700 transition-colors">${p.patientName}</td>
                                <td class="px-8 py-5">
                                    <div class="font-black text-slate-700 text-xs">${p.clinic}</div>
                                    <div class="text-[10px] text-slate-400 font-bold uppercase mt-0.5">${p.doctor || 'Anonyme'}</div>
                                </td>
                                <td class="px-8 py-5">
                                    <div class="flex flex-wrap gap-1.5">
                                        ${p.medications.map(m => `
                                            <span class="px-2 py-0.5 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-500">${m}</span>
                                        `).join('')}
                                    </div>
                                </td>
                                <td class="px-8 py-5 text-right">
                                    <span class="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-100 text-[9px] font-black uppercase tracking-widest">
                                        Clôturé
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            ${history.length === 0 ? `
                <div class="p-32 text-center">
                    <div class="w-24 h-24 bg-slate-50/50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                        <i data-lucide="inbox" class="w-12 h-12"></i>
                    </div>
                    <h3 class="text-slate-900 font-black text-lg">Aucun historique</h3>
                    <p class="text-slate-400 text-sm font-medium mt-1">Les ordonnances délivrées apparaîtront ici.</p>
                </div>
            ` : ''}
        </div>
        `;
    }
};
