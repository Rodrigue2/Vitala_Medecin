const DoctorViews = {
    Dashboard: () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'w-full';
        wrapper.innerHTML = `
            <div class="antigravity-grid">
                <!-- ROW 1 -->
                <!-- 1. Hero Card (Dr Esdras) -->
                <div class="antigravity-card antigravity-card-hero col-span-2">
                    <!-- Premium header -->
                    <div class="ag-card-header">
                        <div class="ag-card-icon indigo">
                            <i data-lucide="sparkles"></i>
                        </div>
                        <div>
                            <div class="ag-card-label">Assistant IA</div>
                            <div class="ag-card-title">Dr Esdras</div>
                        </div>
                        <span style="margin-left:auto;display:flex;align-items:center;gap:6px;padding:3px 10px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:20px;">
                            <span style="width:6px;height:6px;border-radius:50%;background:#10b981;display:inline-block;animation:ping 1s cubic-bezier(0,0,0.2,1) infinite;"></span>
                            <span style="font-size:9px;font-weight:900;color:#065f46;text-transform:uppercase;letter-spacing:1px;">IA Active</span>
                        </span>
                    </div>
                    <div id="esdras-content-container" class="flex-1 flex flex-col" style="padding-top: 20px;">
                        <div class="flex items-center gap-6" style="margin-bottom: 12px;">
                            <div>
                                <h2 class="text-3xl font-serif text-slate-900 tracking-tight" style="margin-bottom: 4px;">Bonjour, <span class="font-serif">Dr Sophie</span></h2>
                            </div>
                        </div>
                        
                        <p class="text-[17px] font-medium text-slate-600 leading-relaxed max-w-xl" style="margin-bottom: 44px;">
                           "Je suis <strong>Dr Esdras</strong>. Aujourd'hui, je vous accompagne pour rendre votre journée <strong>fluide</strong> et <strong>agréable</strong>. Vous avez <strong>18 patients</strong> prévus."
                        </p>

                        <div class="flex items-center gap-6">
                            <button style="
                                padding: 12px 28px;
                                background: linear-gradient(135deg, #4f46e5, #6366f1);
                                color: #fff; border: none; border-radius: 14px; cursor: pointer;
                                font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;
                                display: flex; align-items: center; gap: 8px;
                                box-shadow: 0 8px 20px -4px rgba(99,102,241,0.4);
                                transition: all 0.2s ease;
                            "
                            onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 12px 28px -4px rgba(99,102,241,0.5)'"
                            onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 8px 20px -4px rgba(99,102,241,0.4)'"
                            id="esdras-ok-btn">
                                <i data-lucide="calendar" class="w-4 h-4"></i>
                                Voir l'agenda
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 2. Vitalia View -->
                <div class="antigravity-card flex flex-col" id="vitalia-view-card">
                    <div class="ag-card-header">
                        <div class="ag-card-icon teal">
                            <i data-lucide="crosshair"></i>
                        </div>
                        <div>
                            <div class="ag-card-label">Analyse IA</div>
                            <div class="ag-card-title">Vitalia View</div>
                        </div>
                    </div>
                    <div id="vitalia-card-dynamic-area" class="flex-1 flex flex-col items-center justify-center">
                        <div class="flex flex-col items-center" style="opacity:0.45;">
                            <div style="width:72px;height:72px;border-radius:50%;border:2px dashed #cbd5e1;display:flex;align-items:center;justify-content:center;margin-bottom:12px;position:relative;">
                                <i data-lucide="crosshair" class="w-8 h-8 text-slate-300"></i>
                            </div>
                            <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">En attente d'un patient...</p>
                        </div>
                    </div>
                </div>

                <!-- ROW 2 -->
                <!-- 4. Temps dans la Cible -->
                <div class="antigravity-card" id="time-in-range-container">
                    <div class="ag-card-header">
                        <div class="ag-card-icon emerald">
                            <i data-lucide="pie-chart"></i>
                        </div>
                        <div>
                            <div class="ag-card-label">Glycémie</div>
                            <div class="ag-card-title">Temps dans la Cible</div>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center justify-center" style="opacity:0.4;padding:16px 0;">
                        <i data-lucide="pie-chart" class="w-10 h-10 text-slate-200 mb-3"></i>
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sélectionnez un patient</p>
                    </div>
                </div>

                <!-- 5. Tendance TA -->
                <div class="antigravity-card" id="bp-trend-container">
                    <div class="ag-card-header">
                        <div class="ag-card-icon rose">
                            <i data-lucide="trending-up"></i>
                        </div>
                        <div>
                            <div class="ag-card-label">Tension Artérielle</div>
                            <div class="ag-card-title">Tendance TA</div>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center justify-center" style="opacity:0.4;padding:16px 0;">
                        <i data-lucide="trending-up" class="w-10 h-10 text-slate-200 mb-3"></i>
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sélectionnez un patient</p>
                    </div>
                </div>

                <!-- 6. Historique Médical -->
                <div class="antigravity-card col-span-1" id="timeline-card-container">
                    <div class="ag-card-header">
                        <div class="ag-card-icon amber">
                            <i data-lucide="clock"></i>
                        </div>
                        <div>
                            <div class="ag-card-label">Dossier</div>
                            <div class="ag-card-title">Historique Médical</div>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center justify-center" style="opacity:0.4;padding:16px 0;">
                        <i data-lucide="clock" class="w-10 h-10 text-slate-200 mb-3"></i>
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sélectionnez un patient</p>
                    </div>
                </div>
            </div>
        `;
        return wrapper;
    },
    Agenda: () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'w-full h-full flex flex-col bg-[#F8FAFC]';
        wrapper.innerHTML = `
            <!-- Offline/Resilience Banner -->
            <div style="background:#FEF3C7;border-bottom:1px solid #FDE68A;padding:8px 24px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:11px;font-weight:700;color:#92400E;letter-spacing:0.5px;text-transform:uppercase;">
                <i data-lucide="wifi-off" style="width:14px;height:14px;"></i>
                Mode Hors-Ligne Temporaire — Modifications locales en cours de synchronisation
                <div style="width:6px;height:6px;background:#F59E0B;border-radius:50%;animation:pulse 2s infinite;"></div>
            </div>

            <div class="p-8 max-w-6xl mx-auto w-full flex-1 flex flex-col gap-6" style="padding-bottom:120px; overflow-y:auto;">
                <!-- Header & AI Insights -->
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h1 class="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                            Planification Intelligente
                            <span style="background:linear-gradient(135deg,#3B82F6,#2563EB);color:#fff;font-size:10px;padding:3px 10px;border-radius:12px;text-transform:uppercase;letter-spacing:1px;font-weight:900;">Vitalia AI</span>
                        </h1>
                        <p class="text-sm font-semibold text-slate-500 mt-2">Mardi 18 Mars 2026 — 18 patients prévus, 2 urgences intercalées.</p>
                    </div>
                    <div class="flex gap-3">
                        <button style="padding:10px 16px;background:#fff;border:1px solid #E2E8F0;border-radius:12px;font-size:12px;font-weight:700;color:#1E293B;display:flex;align-items:center;gap:8px;box-shadow:0 1px 3px rgba(0,0,0,0.04);cursor:pointer;">
                            <i data-lucide="refresh-cw" style="width:14px;height:14px;color:#64748B;"></i>
                            Synchroniser Dossiers
                        </button>
                        <button style="padding:10px 20px;background:linear-gradient(135deg,#0F172A,#1E293B);border:none;border-radius:12px;font-size:12px;font-weight:800;color:#fff;display:flex;align-items:center;gap:8px;box-shadow:0 10px 25px rgba(15,23,42,0.3);cursor:pointer;">
                            <i data-lucide="zap" style="width:14px;height:14px;color:#FCD34D;"></i>
                            Optimisation Automatique
                        </button>
                    </div>
                </div>

                <!-- AI Quick Stats Bar -->
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
                    <!-- Stat 1 -->
                    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 10px rgba(0,0,0,0.02);">
                        <div style="width:40px;height:40px;background:#EEF2FF;border-radius:12px;display:flex;align-items:center;justify-content:center;">
                            <i data-lucide="clock-4" style="width:18px;height:18px;color:#4F46E5;"></i>
                        </div>
                        <div>
                            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#94A3B8;">Gain de temps AI</div>
                            <div style="font-size:20px;font-weight:900;color:#0F172A;letter-spacing:-0.5px;">+ 42 min</div>
                        </div>
                    </div>
                    <!-- Stat 2 -->
                    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 10px rgba(0,0,0,0.02);">
                        <div style="width:40px;height:40px;background:#F0FDF4;border-radius:12px;display:flex;align-items:center;justify-content:center;">
                            <i data-lucide="users" style="width:18px;height:18px;color:#10B981;"></i>
                        </div>
                        <div>
                            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#94A3B8;">Rotation / Charge</div>
                            <div style="font-size:20px;font-weight:900;color:#0F172A;letter-spacing:-0.5px;">Équilibrée</div>
                        </div>
                    </div>
                    <!-- Stat 3 -->
                    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 10px rgba(0,0,0,0.02);">
                        <div style="width:40px;height:40px;background:#FEF2F2;border-radius:12px;display:flex;align-items:center;justify-content:center;">
                            <i data-lucide="alert-triangle" style="width:18px;height:18px;color:#EF4444;"></i>
                        </div>
                        <div>
                            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#94A3B8;">Urgences Intégrées</div>
                            <div style="font-size:20px;font-weight:900;color:#0F172A;letter-spacing:-0.5px;">2</div>
                        </div>
                    </div>
                    <!-- Stat 4 -->
                    <div style="background:linear-gradient(135deg,#F0F9FF,#E0F2FE);border:1px solid #BAE6FD;border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.boxShadow='0 4px 15px rgba(2,132,199,0.15)'" onmouseout="this.style.boxShadow='none'">
                        <div style="width:40px;height:40px;background:#fff;border-radius:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
                            <i data-lucide="sparkles" style="width:18px;height:18px;color:#0284C7;"></i>
                        </div>
                        <div>
                            <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;color:#0369A1;">Suggestion IA</div>
                            <div style="font-size:13px;font-weight:700;color:#0C4A6E;line-height:1.2;">Créneau libre à 11h suggéré pour téléconsult.</div>
                        </div>
                    </div>
                </div>

                <!-- Main Timeline Container -->
                <div style="background:#fff;border-radius:24px;border:1px solid #E2E8F0;box-shadow:0 10px 30px rgba(0,0,0,0.03);overflow:hidden;display:flex;flex-direction:column;min-height:400px;">
                    <div style="padding:16px 20px;border-bottom:1px solid #F1F5F9;background:#F8FAFC;display:flex;align-items:center;gap:24px;">
                        <div style="width:64px;font-size:10px;font-weight:800;text-transform:uppercase;color:#94A3B8;letter-spacing:1px;text-align:right;">Heure</div>
                        <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#94A3B8;letter-spacing:1px;flex:1;">Patient & Dossier Synchronisé</div>
                        <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#94A3B8;letter-spacing:1px;width:120px;">Statut IA</div>
                    </div>
                    
                    <div style="flex:1;overflow-y:auto;padding:12px 20px;" id="doctor-agenda-list">
                        ${MOCK_DATA.schedule.map(slot => {
                            let cardStyle = 'background:#fff;border:1px solid #E2E8F0;border-left:4px solid #3B82F6;';
                            let icon = 'user';
                            let tagStyle = 'background:#DBEAFE;color:#1E40AF;';
                            let aiText = 'Dossier Analysé';
                            
                            if (slot.type === 'teleconsultation') {
                                cardStyle = 'background:#FAFAFA;border:1px solid #E2E8F0;border-left:4px solid #10B981;';
                                icon = 'video';
                                tagStyle = 'background:#D1FAE5;color:#065F46;';
                                aiText = 'Tests Requis';
                            } else if (slot.type === 'block') {
                                cardStyle = 'background:#F1F5F9;border:1px dashed #CBD5E1;border-left:4px solid #94A3B8;opacity:0.7;';
                                icon = 'lock';
                                tagStyle = 'background:#E2E8F0;color:#475569;';
                                aiText = 'Optimisé';
                            }
                            if (slot.isConsulted) {
                                cardStyle = 'background:#F8FAFC;border:1px solid #F1F5F9;border-left:4px solid #CBD5E1;opacity:0.6;';
                                icon = 'check-circle-2';
                                tagStyle = 'background:#E2E8F0;color:#64748B;';
                                aiText = 'Clôturé';
                            }

                            return `
                            <div style="display:flex;min-height:86px;margin-bottom:12px;group">
                                <div style="width:64px;display:flex;justify-content:flex-end;padding-top:16px;padding-right:16px;">
                                    <span style="font-size:14px;font-weight:800;color:#475569;font-variant-numeric:tabular-nums;">${slot.time}</span>
                                </div>
                                <div style="flex:1;border-radius:16px;${cardStyle}padding:16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,0.02);cursor:pointer;transition:all 0.2s;" onmouseover="this.style.boxShadow='0 8px 24px rgba(0,0,0,0.06)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 2px 8px rgba(0,0,0,0.02)';this.style.transform='translateY(0)'" onclick="if('${slot.patientId}') { state.selectedPatient='${slot.patientId}'; handleNavigation('doctor_portal', null, 'fiche_patient'); }">
                                    <div style="display:flex;align-items:center;gap:16px;">
                                        <div style="width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;${tagStyle}">
                                            <i data-lucide="${icon}" style="width:18px;height:18px;"></i>
                                        </div>
                                        <div>
                                            <div style="font-size:15px;font-weight:800;color:#0F172A;letter-spacing:-0.2px;margin-bottom:2px">${slot.patient}</div>
                                            <div style="font-size:12px;font-weight:600;color:#64748B;display:flex;align-items:center;gap:8px;">
                                                <span style="display:inline-flex;padding:2px 8px;border-radius:10px;${tagStyle}font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;">${slot.type === 'block' ? 'Bloqué' : slot.type}</span>
                                                • ${slot.length} min
                                                ${!slot.isConsulted && slot.patientId ? `<span style="color:#3B82F6;display:flex;align-items:center;gap:4px;background:#EFF6FF;padding:2px 6px;border-radius:6px;font-size:10px;font-weight:800;"><i data-lucide="sparkles" style="width:12px;height:12px;"></i> Pré-rempli par IA</span>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display:flex;align-items:center;gap:12px;width:120px;justify-content:flex-end;">
                                        <div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;">${aiText}</div>
                                        ${slot.patientId ? `<button style="width:36px;height:36px;border-radius:10px;border:1px solid #E2E8F0;background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#3B82F6;box-shadow:0 1px 3px rgba(0,0,0,0.05);" title="Ouvrir Dossier"><i data-lucide="arrow-right" style="width:16px;height:16px;"></i></button>` : ''}
                                    </div>
                                </div>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
        return wrapper;
    },

    SalleAttente: () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'p-6 max-w-4xl mx-auto w-full flex flex-col gap-6';
        wrapper.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h1 class="text-2xl font-bold text-slate-800 flex items-center gap-2"><i data-lucide="users" class="w-6 h-6 text-primary"></i> Salle d'Attente</h1>
                    <p class="text-sm text-slate-500 mt-1">3 patients en attente. Temps estimé moyen : 15 min.</p>
                </div>
            </div>
            
            <div class="flex flex-col gap-3">
                <div class="card p-4 flex items-center justify-between border-l-4 border-l-warning">
                    <div class="flex gap-4 items-center">
                        <div class="avatar w-12 h-12 bg-slate-200 rounded-full font-bold flex items-center justify-center text-slate-600">SB</div>
                        <div>
                            <div class="font-bold text-lg text-slate-800">Sarra Diallo, <span class="text-base font-normal text-slate-500">28 ans</span></div>
                            <div class="text-sm text-slate-600 flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-warning"></i> En attente depuis 9 min</div>
                            <div class="text-xs text-slate-500 mt-1">Motif: Renouvellement Ordonnance</div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary btn-call-patient" data-patient-id="1" data-patient-name="Sarra Diallo">
                            <i data-lucide="phone-call" class="w-4 h-4"></i> Appeler Patient
                        </button>
                    </div>
                </div>

                <div class="card p-4 flex items-center justify-between border-l-4 border-l-primary relative overflow-hidden">
                    <div class="absolute right-0 top-0 h-full w-2 bg-primary"></div>
                    <div class="flex gap-4 items-center">
                        <div class="avatar w-12 h-12 bg-slate-200 rounded-full font-bold flex items-center justify-center text-slate-600">OK</div>
                        <div>
                            <div class="font-bold text-lg text-slate-800 flex items-center gap-2">Ousmane Keita, <span class="text-base font-normal text-slate-500">45 ans</span> <i data-lucide="zap" class="w-4 h-4 text-warning"></i></div>
                            <div class="text-sm text-slate-600 flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-danger"></i> En attente depuis 21 min</div>
                            <div class="text-xs font-bold text-warning mt-1">Motif Prioritaire: Douleur Poitrine (IA Alerte)</div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary btn-call-patient" data-patient-id="2" data-patient-name="Ousmane Keita">
                            <i data-lucide="phone-call" class="w-4 h-4"></i> Appeler Patient
                        </button>
                    </div>
                </div>
            </div>
        `;
        return wrapper;
    },

    PatientsList: () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'p-6';
        wrapper.innerHTML = `<h1 class="text-2xl font-bold">Liste des Patients</h1><p class="mt-4 text-slate-500">Recherchez ou naviguez dans la liste de tous vos patients.</p>`;
        return wrapper;
    },

    FichePatient: () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex flex-col h-full bg-slate-50';
        const patient = MOCK_DATA.patients.find(p => p.id === state.selectedPatient) || MOCK_DATA.patients[0];

        wrapper.innerHTML = `
            <!-- Identity Header -->
            <div style="
                background: linear-gradient(135deg, #4f46e5 0%, #6366f1 60%, #818cf8 100%);
                padding: 24px 28px 0;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
            ">
                <div style="position:absolute;right:-30px;top:-30px;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,0.06);"></div>
                <div style="position:absolute;left:40%;bottom:-40px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.04);"></div>

                <div style="display:flex;justify-content:space-between;align-items:flex-start;position:relative;z-index:1;margin-bottom:20px;">
                    <div style="display:flex;align-items:center;gap:16px;">
                        <div style="width:72px;height:72px;border-radius:20px;overflow:hidden;border:2px solid rgba(255,255,255,0.3);box-shadow:0 8px 24px rgba(0,0,0,0.2);flex-shrink:0;">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=${patient.name}" style="width:100%;height:100%;object-fit:cover;" alt="">
                        </div>
                        <div>
                            <h1 style="font-size:22px;font-weight:900;color:#fff;margin:0 0 8px;letter-spacing:-0.5px;">${patient.name}</h1>
                            <div style="display:flex;gap:6px;flex-wrap:wrap;">
                                <span style="padding:2px 10px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.25);border-radius:20px;font-size:9px;font-weight:800;color:#e0e7ff;text-transform:uppercase;">${patient.age} ans</span>
                                <span style="padding:2px 10px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.25);border-radius:20px;font-size:9px;font-weight:800;color:#e0e7ff;text-transform:uppercase;">${patient.gender === 'M' ? 'Homme' : 'Femme'}</span>
                                <span style="padding:2px 10px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.25);border-radius:20px;font-size:9px;font-weight:800;color:#e0e7ff;text-transform:uppercase;">Gpe ${patient.bloodType}</span>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end;">
                        <button class="btn-call-patient" data-patient-id="${patient.id}" data-patient-name="${patient.name}" style="padding:10px 24px;background:#4f46e5;border:none;border-radius:12px;color:#fff;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:1px;cursor:pointer;display:flex;align-items:center;gap:8px;box-shadow:0 10px 25px rgba(79, 70, 229, 0.4);transition:all 0.3s;width:220px;justify-content:center;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 15px 30px rgba(79, 70, 229, 0.5)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 10px 25px rgba(79, 70, 229, 0.4)'">
                            <i data-lucide="stethoscope" style="width:14px;height:14px;"></i> Nouvelle Consultation
                        </button>
                        <button class="btn-follow-up-patient" data-patient-id="${patient.id}" style="padding:9px 24px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);border-radius:12px;color:#fff;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1px;cursor:pointer;display:flex;align-items:center;gap:8px;transition:all 0.2s;width:220px;justify-content:center;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
                            <i data-lucide="calendar-check" style="width:14px;height:14px;"></i> Visite de Contrôle
                        </button>
                    </div>
                </div>

                <!-- Tabs -->
                <div style="display:flex;gap:20px;position:relative;z-index:1;">
                    <button style="padding:10px 0;font-size:11px;font-weight:800;color:#fff;background:none;border:none;border-bottom:2px solid #fff;cursor:pointer;text-transform:uppercase;letter-spacing:0.8px;">Vue Générale</button>
                    <button onclick="handleNavigation('doctor_portal', null, 'historique')" style="padding:10px 0;font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;text-transform:uppercase;letter-spacing:0.8px;">Historique</button>
                    <button style="padding:10px 0;font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;text-transform:uppercase;letter-spacing:0.8px;">Documents</button>
                </div>
            </div>

            <!-- Content Grid -->
            <div style="flex:1;overflow-y:auto;padding:24px;display:grid;grid-template-columns:1fr 1fr 340px;gap:16px;background:#f8fafc;">

                <!-- Card: Antécédents & Allergies -->
                <div class="antigravity-card" style="border-radius:20px;padding:20px;">
                    <div class="ag-card-header">
                        <div class="ag-card-icon indigo"><i data-lucide="user"></i></div>
                        <div>
                            <div class="ag-card-label">Dossier médical</div>
                            <div class="ag-card-title">Antécédents & Facteurs</div>
                        </div>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                        <div>
                            <p style="font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;margin-bottom:8px;">Antécédents médicaux</p>
                            <div style="display:flex;flex-direction:column;gap:6px;">
                                ${patient.antecedents.map(a => `
                                    <div style="display:flex;align-items:center;gap:8px;padding:7px 10px;background:#f5f3ff;border-radius:10px;border:1px solid #e0e7ff;">
                                        <div style="width:6px;height:6px;border-radius:50%;background:#6366f1;flex-shrink:0;"></div>
                                        <span style="font-size:11px;font-weight:600;color:#312e81;">${a}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <p style="font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;margin-bottom:8px;">Allergies identifiées</p>
                            <div style="display:flex;flex-wrap:wrap;gap:6px;">
                                ${patient.allergies.map(a => `
                                    <span style="padding:4px 12px;background:#fff1f2;border:1px solid #fecdd3;border-radius:20px;font-size:11px;font-weight:700;color:#be123c;">${a}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card: Traitements en cours -->
                <div class="antigravity-card" style="border-radius:20px;padding:20px;">
                    <div class="ag-card-header">
                        <div class="ag-card-icon teal"><i data-lucide="pill"></i></div>
                        <div>
                            <div class="ag-card-label">Prescription</div>
                            <div class="ag-card-title">Traitements en cours</div>
                        </div>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        ${patient.currentTreatments.map((t, i) => `
                            <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:12px;">
                                <div style="width:32px;height:32px;border-radius:10px;background:linear-gradient(135deg,#0d9488,#14b8a6);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                    <i data-lucide="pill" style="width:14px;height:14px;color:#fff;"></i>
                                </div>
                                <div style="flex:1;min-width:0;">
                                    <p style="font-size:12px;font-weight:700;color:#134e4a;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Right column: Score + Alertes -->
                <div style="display:flex;flex-direction:column;gap:14px;">

                    <!-- Score Vitalia -->
                    <div class="antigravity-card" style="border-radius:20px;padding:20px;">
                        <div class="ag-card-header" style="margin-bottom:14px;padding-bottom:12px;">
                            <div class="ag-card-icon emerald"><i data-lucide="activity"></i></div>
                            <div>
                                <div class="ag-card-label">Santé globale</div>
                                <div class="ag-card-title">Score Vitalia</div>
                            </div>
                        </div>
                        <div style="display:flex;align-items:center;gap:16px;">
                            <div style="position:relative;width:70px;height:70px;flex-shrink:0;">
                                <svg viewBox="0 0 36 36" style="width:70px;height:70px;transform:rotate(-90deg);">
                                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f1f5f9" stroke-width="3"/>
                                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="${patient.vitaliaScore > 75 ? '#10b981' : patient.vitaliaScore > 50 ? '#f59e0b' : '#ef4444'}" stroke-width="3"
                                        stroke-dasharray="${patient.vitaliaScore} ${100 - patient.vitaliaScore}" stroke-linecap="round"/>
                                </svg>
                                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;">
                                    <span style="font-size:16px;font-weight:900;color:#0f172a;line-height:1;">${patient.vitaliaScore}</span>
                                    <span style="font-size:8px;font-weight:700;color:#94a3b8;">/100</span>
                                </div>
                            </div>
                            <div>
                                <p style="font-size:12px;font-weight:700;color:${patient.vitaliaScore > 75 ? '#065f46' : patient.vitaliaScore > 50 ? '#78350f' : '#7f1d1d'};margin:0 0 4px;">
                                    ${patient.vitaliaScore > 75 ? 'État satisfaisant' : patient.vitaliaScore > 50 ? 'Surveillance requise' : 'Attention requise'}
                                </p>
                                <p style="font-size:10px;color:#94a3b8;margin:0;font-weight:500;">L'IA détecte une baisse de 12 pts depuis la dernière visite.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Alertes Médicales -->
                    <div class="antigravity-card" style="border-radius:20px;padding:20px;border-color:#fef3c7;background:linear-gradient(135deg,#fffbeb,#fef9ee);">
                        <div class="ag-card-header" style="margin-bottom:12px;padding-bottom:12px;border-bottom-color:#fde68a;">
                            <div class="ag-card-icon amber"><i data-lucide="alert-triangle"></i></div>
                            <div>
                                <div class="ag-card-label">Surveillance</div>
                                <div class="ag-card-title">Alertes Médicales</div>
                            </div>
                        </div>
                        <div style="display:flex;flex-direction:column;gap:6px;">
                            ${patient.alerts.map(a => `
                                <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#fff;border:1px solid #fde68a;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
                                    <span style="width:6px;height:6px;border-radius:50%;background:#f59e0b;margin-top:4px;flex-shrink:0;"></span>
                                    <span style="font-size:11px;font-weight:600;color:#78350f;line-height:1.4;">${a}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        return wrapper;

    },

    Consultation: () => {
         const wrapper = document.createElement('div');
         wrapper.className = 'flex flex-col h-full bg-white overflow-hidden';
         const patient = MOCK_DATA.patients.find(p => p.id === state.selectedPatient) || MOCK_DATA.patients[0];

         wrapper.innerHTML = `
            <!-- Topbar Context -->
            <header class="bg-white border-b shadow-[0_4px_10px_rgba(0,0,0,0.02)] h-14 flex items-center px-4 justify-between shrink-0">
                <div class="flex items-center gap-3">
                    <button class="btn btn-ghost btn-icon mr-2" onclick="handleNavigation('doctor_portal', null, 'fiche_patient')">
                        <i data-lucide="arrow-left"></i>
                    </button>
                    <div class="avatar"><img src="https://api.dicebear.com/7.x/notionists/svg?seed=${patient.name}" alt="Avatar"></div>
                    <div>
                        <h2 class="font-bold text-sm leading-tight text-slate-800">${patient.name}</h2>
                        <span class="text-xs text-secondary">${patient.age} ans • ${patient.gender} • ${patient.bloodType}</span>
                    </div>
                </div>
                
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                        <label class="text-xs font-semibold text-slate-600 cursor-pointer flex items-center gap-2 shadow-sm" for="ai-shadow-toggle">
                            <i data-lucide="sparkles" class="w-4 h-4 text-primary"></i> 
                            Dr. Esdras Téléconsultation
                            <div class="relative inline-block w-8 h-4 bg-slate-200 rounded-full transition-colors toggle-bg">
                                <input type="checkbox" id="ai-shadow-toggle" class="opacity-0 w-0 h-0 peer" checked onchange="document.getElementById('shadow-suggestions').classList.toggle('hidden')">
                                <span class="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-sm" style="box-shadow: 0 1px 2px rgba(0,0,0,0.2);"></span>
                            </div>
                        </label>
                    </div>
                    <button class="btn btn-primary text-sm px-4 py-2" onclick="handleNavigation('doctor_portal', null, 'dashboard')"><i data-lucide="check" class="w-4 h-4"></i> Terminer</button>
                </div>
            </header>

            <div class="flex-1 flex overflow-hidden">
                <!-- Left panel: Notes area -->
                <div class="flex-1 flex flex-col p-6 overflow-y-auto">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-lg font-bold text-slate-800">Observations Cliniques</h2>
                        <div class="flex gap-3 items-center">
                             <button class="btn btn-primary text-xs px-3 py-1.5 flex items-center gap-2 shadow-sm font-bold bg-gradient-to-r from-primary to-blue-500 border-none" onclick="alert('L\\'IA écoute et structure la consultation en cours...')">
                                 <i data-lucide="mic" class="w-3 h-3 animate-bounce"></i> Dictée Vocale IA
                             </button>
                        </div>
                    </div>
                    
                    <!-- Pre-filled Motif -->
                    <div class="mb-4 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span class="text-xs font-bold uppercase text-slate-400">Motif Auto-Rempli (Questionnaire Patient)</span>
                        <p class="text-sm font-semibold text-slate-700 mt-1">"Maux de tête fréquents depuis 3 jours et petite toux."</p>
                    </div>

                    <!-- Editor -->
                    <div class="flex-1 bg-slate-50 rounded-lg border border-slate-200 p-4 font-mono text-sm leading-relaxed overflow-y-auto outline-none" contenteditable="true" spellcheck="false" style="font-family: inherit;">
                        Patient se plaint de céphalées persistantes. 
                        Tension mesurée à <span class="bg-warning bg-opacity-20 border-b-2 border-warning text-slate-800 cursor-pointer" title="Alerte: Hypertension">150/95</span> ce matin.
                        <br><br>
                        Il mentionne également une <span class="bg-primary bg-opacity-10 border-b-2 border-primary text-slate-800 cursor-pointer" title="SuggérÂ° IA: Lien avec IEC ?">toux sèche</span> nocturne.
                    </div>
                </div>

                <!-- Right panel: AI Suggestions & Directives -->
                <div class="w-[350px] bg-slate-50 border-l border-slate-200 flex flex-col p-4 shadow-inner overflow-y-auto" id="shadow-suggestions">
                    <div class="flex items-center gap-2 mb-4 text-primary font-bold">
                        <i data-lucide="sparkles" class="w-5 h-5"></i> Dr. Esdras AI Analysis
                    </div>

                    <!-- Suggestion Block -->
                    <div class="card p-3 mb-4 border border-blue-200 bg-blue-50 shadow-sm relative overflow-hidden">
                         <div class="absolute -right-2 -bottom-2 opacity-5"><i data-lucide="bot" class="w-16 h-16"></i></div>
                         <h4 class="text-sm font-bold text-blue-800 mb-2 relative z-10 flex gap-2 items-center"><i data-lucide="lightbulb" class="w-4 h-4 text-blue-600"></i> Diagnostic Potentiel</h4>
                         <p class="text-xs text-blue-900 mb-2 relative z-10">La toux sèche est un effet secondaire fréquent de l'IEC prescrit le mois dernier.</p>
                         <button class="btn w-full bg-white text-blue-800 border-blue-200 text-xs py-1 mt-1 hover:bg-blue-100">Ajouter note relative au traitement</button>
                    </div>

                    <!-- Vitalia Rules -->
                    <div class="card p-3 mb-4 shadow-sm border border-slate-200">
                         <h4 class="text-sm font-bold text-slate-700 mb-2 flex gap-2 items-center"><i data-lucide="activity" class="w-4 h-4 text-warning"></i> Signes Vitaux Critiques</h4>
                         <ul class="text-xs text-slate-600 list-none flex flex-col gap-2">
                             <li class="flex items-center justify-between bg-warning-bg p-2 rounded font-bold text-warning-strong border border-warning">
                                Tension
                                <span>150/95</span>
                             </li>
                         </ul>
                    </div>

                    <!-- Quick Prescriptions -->
                    <div class="mt-auto flex flex-col gap-2">
                        <button class="btn btn-outline bg-white border-slate-300 text-slate-700 hover:border-primary text-sm flex gap-2 justify-center" onclick="handleNavigation('doctor_portal', null, 'ordonnance')">
                            <i data-lucide="pill" class="w-4 h-4 text-primary"></i> Nouvelle Ordonnance
                        </button>
                        <button class="btn btn-outline bg-white border-slate-300 text-slate-700 hover:border-primary text-sm flex gap-2 justify-center">
                            <i data-lucide="file-check" class="w-4 h-4 text-primary"></i> Générer Arrêt Maladie
                        </button>
                    </div>
                </div>
            </div>
            
            <style>
                .dr-esdras-text {
                    background: linear-gradient(to bottom right, #0F172A, #334155);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                input:checked + span { transform: translateX(100%); background-color: white; }
                input:checked ~ .toggle-bg { background-color: var(--clr-primary); }
            </style>
         `;
         return wrapper;
    },

    Ordonnance: () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex flex-col h-full bg-slate-50';
        wrapper.innerHTML = `
            <div class="p-6 pb-2 border-b bg-white flex justify-between items-center">
                <h1 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <i data-lucide="pill" class="w-6 h-6 text-primary"></i> Création d'Ordonnance
                </h1>
                <div class="flex gap-2">
                    <button class="btn btn-outline"><i data-lucide="printer" class="w-4 h-4"></i> Imprimer</button>
                    <button class="btn btn-primary" onclick="alert('QR Code envoyé au patient sur mobile !')"><i data-lucide="qr-code" class="w-4 h-4"></i> Partager via QR / Mobile</button>
                </div>
            </div>

            <div class="p-6 flex-1 overflow-y-auto max-w-4xl w-full mx-auto flex flex-col gap-6">
                <!-- Search Box -->
                <div class="card p-4">
                    <div class="relative">
                        <i data-lucide="search" class="absolute left-3 top-3 w-5 h-5 text-slate-400"></i>
                        <input type="text" class="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 focus:outline-primary" placeholder="Rechercher médicament par nom ou principe actif..." value="Amlodipine">
                    </div>
                    <div class="mt-4 flex flex-col gap-2 border bg-white rounded-lg p-2 shadow-sm">
                        <div class="flex justify-between items-center p-2 bg-primary bg-opacity-10 text-primary border border-primary rounded cursor-pointer font-bold text-sm">
                            <div class="flex gap-2 items-center"><i data-lucide="plus-circle" class="w-4 h-4"></i> Amlodipine 5mg - Boîte de 30</div>
                            <span class="text-xs opacity-80">Antihypertenseur</span>
                        </div>
                        <div class="flex justify-between items-center p-2 hover:bg-slate-50 rounded cursor-pointer text-sm font-medium text-slate-700">
                            <div class="flex gap-2 items-center"><i data-lucide="plus-circle" class="w-4 h-4 text-slate-400"></i> Amlodipine 10mg - Boîte de 30</div>
                             <span class="text-xs text-slate-400">Antihypertenseur</span>
                        </div>
                    </div>
                </div>

                <!-- Prescription List -->
                <div class="card p-0 overflow-hidden border border-slate-200">
                    <div class="p-4 bg-slate-100 border-b border-slate-200 font-bold text-slate-700 flex justify-between">
                        Ordonnance en cours
                        <span class="badge badge-success border border-green-500 font-bold bg-white text-success"><i data-lucide="shield-check" class="w-3 h-3 inline mr-1"></i> Vérifiée par IA</span>
                    </div>
                    
                    <div class="p-4 flex flex-col gap-4 bg-white">
                        <div class="border rounded-lg border-slate-200 p-4 relative group">
                            <div class="absolute right-2 top-2 hidden group-hover:flex gap-1">
                                <button class="btn btn-ghost btn-icon w-6 h-6"><i data-lucide="trash-2" class="w-4 h-4 text-danger"></i></button>
                            </div>
                            <h4 class="font-bold text-lg text-primary mb-1">Amlodipine 5mg</h4>
                            <div class="text-sm font-medium text-slate-800 mb-3 text-secondary">Posologie : 1 comprimé le matin</div>
                            <div class="flex gap-2 mb-2">
                                <span class="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">Durée : 3 mois</span>
                                <span class="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">QSP : 1 mois</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pharmacie Partenaire -->
                <div class="card p-4 border border-blue-200 bg-blue-50 flex justify-between items-center cursor-pointer hover:bg-blue-100 transition-colors">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shrink-0 shadow-sm"><i data-lucide="store" class="w-5 h-5"></i></div>
                        <div>
                            <h4 class="font-bold text-sm text-blue-900">Transférer à la pharmacie partenaire</h4>
                            <p class="text-xs text-blue-700">Le patient pourra récupérer ses médicaments sans délai.</p>
                        </div>
                    </div>
                    <i data-lucide="chevron-right" class="w-5 h-5 text-blue-500"></i>
                </div>
            </div>
        `;
        return wrapper;
    },

    Historique: () => {
         const wrapper = document.createElement('div');
         wrapper.className = 'flex flex-col h-full bg-slate-50';
         wrapper.innerHTML = `
            <div class="p-6 pb-4 border-b bg-white">
                <h1 class="text-2xl font-bold text-slate-800 flex items-center gap-2"><i data-lucide="history" class="w-6 h-6 text-primary"></i> Historique Patient</h1>
            </div>
            <div class="flex-1 p-6 overflow-y-auto max-w-4xl w-full mx-auto">
                <div class="relative border-l-2 border-slate-200 ml-4 pl-6 pb-2">
                    
                    <!-- Event 1 -->
                    <div class="mb-8 relative">
                        <div class="absolute -left-[35px] w-6 h-6 bg-white border-2 border-primary rounded-full flex items-center justify-center">
                            <div class="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <div class="text-xs font-bold text-primary mb-1">Aujourd'hui, 08:30</div>
                        <div class="card p-4 shadow-sm border border-slate-100 relative">
                            <h3 class="font-bold text-slate-800 flex justify-between items-center">Consultation Générale <span class="badge badge-success text-[10px] bg-white text-success border-success font-bold">Terminée</span></h3>
                            <p class="text-sm text-slate-600 mt-2">Plaintes de maux de tête. Tension à 150/95. Prescription mise à jour.</p>
                            <div class="flex gap-2 mt-3">
                                <button class="btn btn-outline text-xs px-2 py-1"><i data-lucide="file-text" class="w-3 h-3"></i> Voir Ordonnance</button>
                            </div>
                        </div>
                    </div>

                     <!-- Event 2 -->
                    <div class="mb-8 relative">
                        <div class="absolute -left-[35px] w-6 h-6 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center">
                            <i data-lucide="flask-conical" class="w-3 h-3 text-slate-400"></i>
                        </div>
                        <div class="text-xs font-bold text-slate-500 mb-1">15 Janvier 2026</div>
                        <div class="card p-4 shadow-sm border border-slate-100 bg-white">
                            <h3 class="font-bold text-slate-800">Résultats d'Analyses Laboratoire</h3>
                            <p class="text-sm text-slate-600 mt-2 flex gap-2 items-center"><i data-lucide="alert-triangle" class="w-4 h-4 text-warning"></i> Bilan lipidique : LDL légèrement au-dessus de la normale.</p>
                            <div class="mt-3 bg-slate-50 p-2 rounded border border-slate-100 text-xs font-mono text-slate-700">
                                LDL-Cholesterol: 1.6 g/L<br>
                                HDL-Cholesterol: 0.5 g/L
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         `;
         return wrapper;
    },

    Facturation: () => {
         const wrapper = document.createElement('div');
         wrapper.className = 'flex flex-col h-full bg-slate-50';
         wrapper.innerHTML = `
            <div class="p-6 pb-4 border-b bg-white flex justify-between items-center">
                <h1 class="text-2xl font-bold text-slate-800 flex items-center gap-2"><i data-lucide="credit-card" class="w-6 h-6 text-primary"></i> Facturation & Administratif</h1>
                <button class="btn btn-primary" onclick="alert('Feuille de soins télétransmise !')"><i data-lucide="send" class="w-4 h-4"></i> Télétransmettre à l'Assurance</button>
            </div>
            <div class="flex-1 p-6 overflow-y-auto max-w-5xl w-full mx-auto flex flex-col gap-6">
                <!-- AI Cotation Suggestion -->
                <div class="card p-0 border border-blue-200 shadow-sm overflow-hidden bg-white">
                    <div class="bg-blue-50 border-b border-blue-100 p-4 flex justify-between items-center">
                        <div class="flex items-center gap-2 font-bold text-blue-800">
                            <i data-lucide="bot" class="w-5 h-5"></i> Suggestions de Cotation IA (Dr. Esdras)
                        </div>
                        <span class="badge badge-primary bg-white border border-blue-200 text-blue-700 font-bold">Patient: Kouamé Serge</span>
                    </div>
                    <div class="p-5 flex flex-col gap-4">
                        <p class="text-sm text-slate-600 mb-2">Basé sur la dernière consultation (Renouvellement Ordonnance, Examen tension), voici les actes suggérés :</p>
                        <div class="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-primary transition-colors cursor-pointer bg-slate-50">
                            <div class="flex gap-3 items-center">
                                <div class="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700">CS</div>
                                <div>
                                    <h4 class="font-bold text-slate-800 text-sm">Consultation Spécifique (Généraliste)</h4>
                                    <div class="text-xs text-slate-500">Code standard : CS (+ MPC)</div>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="font-bold text-lg text-slate-800">26,50 â‚¬</div>
                                <button class="btn btn-outline text-xs"><i data-lucide="plus" class="w-3 h-3"></i> Ajouter</button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-primary transition-colors cursor-pointer bg-slate-50">
                             <div class="flex gap-3 items-center">
                                <div class="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700">ECG</div>
                                <div>
                                    <h4 class="font-bold text-slate-800 text-sm">Électrocardiogramme</h4>
                                    <div class="text-xs text-slate-500">Justifié par alerte tension élevée.</div>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="font-bold text-lg text-slate-800">14,26 â‚¬</div>
                                <button class="btn btn-primary text-xs"><i data-lucide="check" class="w-3 h-3"></i> Ajouté</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Facture Actuelle -->
                <div class="card p-0 shadow-sm border border-slate-200 bg-white">
                    <div class="p-4 border-b border-slate-100 font-bold text-slate-800">Feuille de Soins Actuelle</div>
                    <div class="p-4 flex flex-col gap-2">
                        <div class="flex justify-between text-sm py-2 border-b border-slate-50">
                            <span class="text-slate-600">Consultation Spécifique (CS)</span>
                            <span class="font-bold text-slate-800">26,50 â‚¬</span>
                        </div>
                        <div class="flex justify-between text-sm py-2 border-b border-slate-50">
                            <span class="text-slate-600">Électrocardiogramme (DEQP003)</span>
                            <span class="font-bold text-slate-800">14,26 â‚¬</span>
                        </div>
                        <div class="flex justify-between text-lg py-3 mt-2">
                            <span class="font-bold text-slate-800">Total à facturer</span>
                            <span class="font-bold text-primary">40,76 â‚¬</span>
                        </div>
                    </div>
                </div>
            </div>
         `;
         return wrapper;
    },

    getFollowUpPreviousSummary: function(patient) {
        if (!patient) return null;
        return {
            date: "12 Mars 2026",
            diagnosis: patient.mainDiagnosis || "Hypertension Artérielle",
            symptoms: "Céphalées, Fatigue, Bourdonnements d'oreilles",
            treatment: (patient.currentTreatments && (patient.currentTreatments[0] || patient.currentTreatments)) || "Amlodipine 5mg",
            notes: "Patient stable mais tension limite. Augmentation de la fatigue signalée."
        };
    },

    ConsultationFocusMode: (patient) => {
        if (!patient) return '';
        
        // Map data from MOCK_DATA structure
        const displayName = patient.name || "Patient Inconnu";
        const displayAge = patient.age || "--";
        const displayGender = patient.gender === 'F' || patient.gender === 'Femme' ? "Femme" : (patient.gender === 'M' || patient.gender === 'Homme' ? "Homme" : patient.gender || "N/A");
        const displayScore = patient.vitaliaScore || 0;
        const displayAllergies = patient.allergies || [];
        const displayAntecedents = patient.antecedents || [];
        const displayFamilyHistory = ["DIABÃˆTE (PÃˆRE)", "HTA (MÃˆRE)"]; // Fallback as not in patient mock

        const dashArray = 2 * Math.PI * 28;
        const dashOffset = dashArray * (1 - displayScore / 100);

        return `
            <!-- Top Header Patient Card -->
            <header class="focus-patient-header">
                <div class="patient-identity-group">
                    <div class="health-score-ring">
                        <svg width="64" height="64">
                            <circle class="bg" cx="32" cy="32" r="28"></circle>
                            <circle class="progress" cx="32" cy="32" r="28" 
                                style="stroke-dasharray: ${dashArray}; stroke-dashoffset: ${dashOffset};">
                            </circle>
                        </svg>
                        <span class="health-score-value">${displayScore}%</span>
                        <div class="health-score-label">Score Vitalia</div>
                    </div>
                    <div class="patient-main-info flex items-center gap-8">
                        <div class="flex flex-col">
                            <h2 class="text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap mb-0.5">${displayName}</h2>
                            <div class="flex items-center gap-2">
                                <span class="bg-slate-100/80 text-slate-500 px-2 py-0.5 rounded-md text-[10px] font-black border border-slate-200/60 uppercase tracking-wider">${displayAge} ans</span>
                                <span class="bg-indigo-50/80 text-indigo-500 px-2 py-0.5 rounded-md text-[10px] font-black border border-indigo-100/60 uppercase tracking-wider">${displayGender}</span>
                            </div>
                        </div>
                        
                        <div class="patient-clinical-context flex items-center gap-3 mt-0">
                            <!-- Allergies Card -->
                            <div class="clinical-card variant-allergies">
                                <div class="badge-label"><i data-lucide="shield-alert" class="w-3 h-3 text-rose-500"></i> Allergies</div>
                                <div class="card-tag-list">
                                    ${displayAllergies.map(a => `<span class="badge-premium bg-rose-soft">${a}</span>`).join('')}
                                </div>
                            </div>
                            
                            <!-- Antécédents Personnels Card -->
                            <div class="clinical-card variant-personal">
                                <div class="badge-label"><i data-lucide="user" class="w-3 h-3 text-indigo-500"></i> Antécédents Personnels</div>
                                <div class="card-tag-list">
                                    ${displayAntecedents.map(h => `<span class="badge-premium bg-indigo-soft">${h}</span>`).join('')}
                                </div>
                            </div>

                            <!-- Antécédents Familiaux Card -->
                            <div class="clinical-card variant-family">
                                <div class="badge-label"><i data-lucide="users" class="w-3 h-3 text-amber-500"></i> Antécédents Familiaux</div>
                                <div class="card-tag-list">
                                    ${displayFamilyHistory.map(f => `<span class="badge-premium bg-amber-soft">${f}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex items-center gap-8">
                    <div class="consultation-timer">
                        <i data-lucide="clock" class="w-4 h-4"></i>
                        <span>08:42</span>
                    </div>
                    <button class="btn btn-outline border-slate-200 text-slate-600 rounded-2xl px-6 h-12" id="btn-close-consult">
                        Terminer
                    </button>
                </div>
            </header>

            <!-- Main Layout Grid -->
            <div class="focus-body-grid">
                <!-- Left Column: Patient Symptoms & Vitals -->
                <div class="focus-col">
                    <div class="hifi-card compact-card">
                        <h3 class="hifi-card-title mb-2">Motif de Consultation</h3>
                        <p class="text-lg font-bold text-slate-800 mb-3">Douleurs thoraciques</p>
                        
                        <div class="symptoms-list-compact">
                            <div class="symptom-item-compact">
                                <i data-lucide="check-circle-2" class="w-4 h-4 symptom-icon-check"></i>
                                <span class="text-[11px] font-bold text-slate-700">Douleur thoracique</span>
                            </div>
                            <div class="symptom-item-compact">
                                <i data-lucide="check-circle-2" class="w-4 h-4 symptom-icon-check"></i>
                                <span class="text-[11px] font-bold text-slate-700">Essoufflement</span>
                            </div>
                            <div class="symptom-item-compact">
                                <i data-lucide="check-circle-2" class="w-4 h-4 symptom-icon-check"></i>
                                <span class="text-[11px] font-bold text-slate-700">Fatigue</span>
                            </div>
                        </div>
                    </div>

                    <div class="hifi-card">
                        <h3 class="hifi-card-title">Signes Vitaux</h3>
                        <div class="vitals-grid-hifi">
                            <div class="metric-tile alert-red">
                                <span class="metric-label">Tension</span>
                                <span class="metric-value">145/90</span>
                            </div>
                            <div class="metric-tile alert-orange">
                                <span class="metric-label">Pouls</span>
                                <span class="metric-value">88 bpm</span>
                            </div>
                            <div class="metric-tile">
                                <span class="metric-label">Temp</span>
                                <span class="metric-value">37.1Â°C</span>
                            </div>
                            <div class="metric-tile">
                                <span class="metric-label">SPO2</span>
                                <span class="metric-value">98%</span>
                            </div>
                            <div class="metric-tile">
                                <span class="metric-label">Glucose</span>
                                <span class="metric-value">0.96 g/L</span>
                            </div>
                            <div class="metric-tile">
                                <span class="metric-label">IMC</span>
                                <span class="metric-value">24.2</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Center Column: Observations -->
                <div class="focus-col">
                    <!-- Observations Médicales (Main Input) -->
                    <div class="hifi-card scribe-input-area relative flex flex-col">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="hifi-card-title flex items-center gap-2 mb-0">
                                <i data-lucide="file-text" class="w-4 h-4"></i>
                                Observations Médicales
                            </h3>
                            <div class="flex items-center gap-2">
                                <span class="text-[10px] font-bold text-slate-400 uppercase mr-2" id="audio-status">Saisie vocale</span>
                                <button id="btn-audio-obs" class="btn-audio-obs" title="Démarrer l'enregistrement">
                                    <i data-lucide="mic" class="w-5 h-5"></i>
                                </button>
                            </div>
                        </div>
                        <textarea id="observation-textarea" class="scribe-textarea large-observations text-lg w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 flex-1" placeholder="Saisissez vos observations cliniques ici..."></textarea>
                        
                        <div class="mt-4 flex justify-end">
                            <button id="btn-validate-obs" class="btn btn-primary px-8 rounded-xl font-bold shadow-md hover:scale-105 transition-transform">
                                <i data-lucide="check-circle" class="w-4 h-4 mr-2"></i>
                                Valider les Observations
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Right Column: AI Assistant & Insights -->
                <div class="focus-col">
                    <!-- Assistant IA Vitalia (Togglable) -->
                    <div id="ai-card-main" class="hifi-card flex-1 flex flex-col relative min-h-0 ${ConsultationStore.aiActive ? 'ai-assistant-active' : ''}">
                        <div class="absolute top-0 right-0 p-6 opacity-10">
                            <i data-lucide="sparkles" class="w-16 h-16 text-primary"></i>
                        </div>
                        
                        <div class="flex items-center justify-between mb-4 flex-shrink-0">
                            <h3 class="hifi-card-title flex items-center gap-2 mb-0">
                                <i data-lucide="bot" class="w-5 h-5 text-primary"></i>
                                Assistant IA Vitalia
                            </h3>
                            <button id="ai-activate-toggle" class="ai-activation-btn btn btn-primary px-6 rounded-full text-xs font-bold shadow-sm">
                                ${ConsultationStore.aiActive ? 
                                    '<i data-lucide="zap-off" class="w-3 h-3 mr-2"></i> Désactiver Assistant' : 
                                    '<i data-lucide="zap" class="w-3 h-3 mr-2"></i> Activer l\'Assistant'}
                            </button>
                        </div>

                        <div id="ai-content-panel" class="ai-content-wrapper flex-1 overflow-y-auto pr-2 pt-2">
                            <!-- 1. Analyse Clinique Card (Indigo) -->
                            <div class="bg-indigo-50/50 p-5 rounded-[24px] border border-indigo-100/50 mb-5 shadow-sm">
                                <div class="flex items-center gap-2 mb-3">
                                    <div class="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
                                        <i data-lucide="microscope" class="w-4 h-4"></i>
                                    </div>
                                    <h4 class="text-[11px] font-bold text-indigo-700 uppercase tracking-widest">Analyse Clinique</h4>
                                </div>
                                <ul class="text-[13px] space-y-3 text-slate-700 font-medium italic">
                                    <li class="flex gap-2 items-start"><span class="text-indigo-400">•</span> <span>Douleur thoracique depuis 2 jours</span></li>
                                    <li class="flex gap-2 items-start"><span class="text-indigo-400">•</span> <span>Irradiation vers le bras gauche</span></li>
                                    <li class="flex gap-2 items-start"><span class="text-indigo-400">•</span> <span>Aggravation lors de l'effort physique</span></li>
                                    <li class="flex gap-2 items-start"><span class="text-indigo-400">•</span> <span>Essoufflement associé</span></li>
                                </ul>
                            </div>

                            <!-- 2. Alerte Critique Card (Rose/Red) -->
                            <div class="bg-rose-50 p-5 rounded-[24px] border border-rose-100 mb-5 shadow-sm">
                                <div class="flex items-center gap-2 mb-3">
                                    <div class="w-7 h-7 bg-rose-500 rounded-lg flex items-center justify-center text-white">
                                        <i data-lucide="alert-circle" class="w-4 h-4"></i>
                                    </div>
                                    <h4 class="text-[11px] font-bold text-rose-700 uppercase tracking-widest">Alerte Critique</h4>
                                </div>
                                <p class="text-[13px] text-rose-600 font-bold leading-relaxed">
                                    Risque cardiovasculaire modéré détecté. Une surveillance immédiate est recommandée.
                                </p>
                            </div>

                            <!-- 3. Diagnostics Card (Slate/Emerald) -->
                            <div class="bg-slate-50/50 p-5 rounded-[24px] border border-slate-200/60 mb-6 shadow-sm">
                                <div class="flex items-center gap-2 mb-4">
                                    <div class="w-7 h-7 bg-slate-600 rounded-lg flex items-center justify-center text-white">
                                        <i data-lucide="activity" class="w-4 h-4"></i>
                                    </div>
                                    <h4 class="text-[11px] font-bold text-slate-700 uppercase tracking-widest">Diagnostics Probables</h4>
                                </div>
                                
                                <div class="space-y-3">
                                    <!-- Angine -->
                                    <div class="diag-item p-3.5 rounded-[20px] bg-emerald-50/50 border border-emerald-100 shadow-xs">
                                        <div class="diag-header flex justify-between items-center mb-2">
                                            <span class="text-[13px] font-bold text-emerald-800">Angine stable</span>
                                            <span class="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] rounded-full font-black">65%</span>
                                        </div>
                                        <div class="diag-bar-bg h-1.5 bg-emerald-100/50 rounded-full overflow-hidden">
                                            <div class="diag-bar-fill h-full bg-emerald-500" style="width: 65%;"></div>
                                        </div>
                                    </div>

                                    <!-- RGO -->
                                    <div class="diag-item p-3.5 rounded-[20px] bg-amber-50/50 border border-amber-100 shadow-xs">
                                        <div class="diag-header flex justify-between items-center mb-2">
                                            <span class="text-[13px] font-bold text-amber-800">Reflux Gastro-Oesophagien</span>
                                            <span class="px-2.5 py-1 bg-amber-100 text-amber-700 text-[10px] rounded-full font-bold">25%</span>
                                        </div>
                                        <div class="diag-bar-bg h-1.5 bg-amber-100/50 rounded-full overflow-hidden">
                                            <div class="diag-bar-fill h-full bg-amber-500" style="width: 25%;"></div>
                                        </div>
                                    </div>

                                    <!-- DMS -->
                                    <div class="diag-item p-3.5 rounded-[20px] bg-white border border-slate-200 shadow-xs">
                                        <div class="diag-header flex justify-between items-center mb-2">
                                            <span class="text-[13px] font-bold text-slate-700">Douleur Musculo-Squelettique</span>
                                            <span class="text-slate-400 text-[10px] font-bold">10%</span>
                                        </div>
                                        <div class="diag-bar-bg h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                            <div class="diag-bar-fill h-full bg-slate-400" style="width: 10%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="ai-action-buttons mt-4 mb-2 flex gap-3">
                                <button id="ai-exploration-btn" class="btn btn-outline flex-1 rounded-2xl h-12 text-xs font-bold border-slate-200">Exploration</button>
                                <button class="btn btn-primary flex-1 rounded-2xl h-12 text-xs font-bold text-white shadow-xl shadow-primary/20">Valider l'Analyse</button>
                            </div>
                        </div>

                        <!-- Empty state placeholder when inactive -->
                        <div id="ai-inactive-placeholder" class="ai-inactive-placeholder flex-1 flex flex-col items-center justify-center text-center p-4 opacity-60">
                            <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-2">
                                <i data-lucide="sparkles" class="w-5 h-5 text-slate-400"></i>
                            </div>
                            <p class="text-[11px] font-medium text-slate-400">L'IA Vitalia est prête à vous assister.</p>
                        </div>
                    </div>

                    <div class="hifi-card disabled-ai-card" id="card-recommended-tests">
                        <h3 class="hifi-card-title">Tests Recommandés</h3>
                        <div class="ai-dependent-content hidden">
                            <div class="flex flex-wrap gap-2">
                                <button class="btn btn-outline text-xs h-8 px-3 rounded-lg border-slate-200">ECG</button>
                                <button class="btn btn-outline text-xs h-8 px-3 rounded-lg border-slate-200">Bilan Sanguin</button>
                                <button class="btn btn-outline text-xs h-8 px-3 rounded-lg border-slate-200">Radio Thorax</button>
                                <button class="btn btn-outline text-xs h-8 px-3 rounded-lg border-slate-200">Echographie</button>
                            </div>
                        </div>
                        <div class="ai-placeholder flex flex-col items-center justify-center p-4">
                            <p class="text-[10px] text-slate-400 font-medium italic">En attente de l'analyse IA...</p>
                        </div>
                    </div>

                    <div class="hifi-card border-primary/20 bg-primary/5 disabled-ai-card" id="card-suggested-treatment">
                        <h3 class="hifi-card-title" style="color: var(--clr-primary)">Traitement Suggéré</h3>
                        <div class="ai-dependent-content hidden">
                            <div class="treatment-list space-y-3">
                                <div class="treatment-item bg-white/60 p-3 rounded-xl border border-primary/10">
                                    <p class="font-bold text-slate-800 text-sm">Paracétamol 1g</p>
                                    <p class="text-[11px] text-slate-500">3 fois par jour pendant 3 jours</p>
                                </div>
                                <div class="treatment-item bg-white/60 p-3 rounded-xl border border-primary/10">
                                    <p class="font-bold text-slate-800 text-sm">Kardegic 75mg</p>
                                    <p class="text-[11px] text-slate-500">1 sachet par jour le matin</p>
                                </div>
                                <div class="treatment-item bg-white/60 p-3 rounded-xl border border-primary/10">
                                    <p class="font-bold text-slate-800 text-sm">Ramipril 2.5mg</p>
                                    <p class="text-[11px] text-slate-500">1 comprimé par jour le soir</p>
                                </div>
                            </div>
                            <div class="flex gap-2 mt-4">
                                <button class="btn btn-outline flex-1 h-9 text-xs rounded-lg bg-white">Modifier</button>
                                <button class="btn btn-primary flex-1 h-9 text-xs rounded-lg text-white">Confirmer</button>
                            </div>
                        </div>
                        <div class="ai-placeholder flex flex-col items-center justify-center p-4">
                            <p class="text-[10px] text-slate-400 font-medium italic">En attente de l'analyse IA...</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Action Bar -->
            <div class="focus-bottom-bar">
                <button onclick="if(window.openOrdonnanceModal) window.openOrdonnanceModal('${patient.id}')" class="btn btn-outline btn-large flex-1 border-slate-200 text-slate-700">Générer Ordonnance</button>
                <button class="btn btn-outline btn-large flex-1 border-slate-200 text-slate-700">Planifier Suivi</button>
                <button onclick="if(window.openActesModal) window.openActesModal('${patient.id}', '${(patient.name||"").replace(/'/g, "&apos;")}', '${patient.age || "54 ans"}', '${patient.gender || "M"}')" class="btn btn-outline btn-large flex-1 border-slate-200 text-slate-700">Actes Réalisés</button>
                <button class="btn btn-primary btn-large flex-1">Envoyer Résumé au Patient</button>
            </div>
        `;
    },

    FollowUpFocusMode: function(patient) {
        if (!patient) return '';
        const prev = this.getFollowUpPreviousSummary(patient);
        const score = patient.vitaliaScore || 75;
        const dashArray = 2 * Math.PI * 28;
        const dashOffset = dashArray * (1 - score/100);

        return `
            <div class="follow-up-focus-wrapper" style="display:flex;flex-direction:column;height:100vh;background:#F7F9FB;color:#0F172A;font-family:Inter, sans-serif;overflow:hidden;">
                <!-- Modern Top Header -->
                <header style="height:70px;background:#fff;border-bottom:1px solid #E5E9F0;display:flex;items-center;justify-content:space-between;padding:0 32px;flex-shrink:0;z-index:100;">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <div style="width:36px;height:36px;background:#00A693;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 4px 12px rgba(0,166,147,0.2);">
                            <i data-lucide="refresh-cw" style="width:18px;height:18px;"></i>
                        </div>
                        <div>
                            <h1 style="font-size:15px;font-weight:900;letter-spacing:-0.4px;">Visite de contrôle</h1>
                            <div style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:1px;display:flex;items-center;gap:6px;">
                                <span style="color:#00A693;">Vitalia Platform</span> • ${patient.name}
                            </div>
                        </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:16px;">
                        <div style="display:flex;align-items:center;gap:10px;padding:6px 14px;background:#f1f5f9;border-radius:30px;">
                            <div style="width:8px;height:8px;border-radius:50%;background:#00A693;animation:pulse 2s infinite;"></div>
                            <span style="font-size:11px;font-weight:800;color:#475569;">SESSION ACTIVE</span>
                        </div>
                        <button onclick="exitHyperFocus()" style="padding: 10px 24px; border-radius: 12px; border: 1.5px solid #E2E8F0; background: #fff; cursor: pointer; color: #64748B; font-size: 14px; font-weight: 800; transition: all 0.2s;" onmouseover="this.style.background='#F8FAFC';this.style.color='#0F172A';">
                            Terminer
                        </button>
                    </div>
                </header>

                <!-- Grid Layout 3 Columns -->
                <div style="flex:1;display:grid;grid-template-columns:320px 1fr 340px;gap:2px;background:#E5E9F0;overflow:hidden;">
                    
                    <!-- LEFT: PREVIOUS SUMMARY -->
                    <aside style="background:#fff;padding:24px;overflow-y:auto;display:flex;flex-direction:column;gap:24px;">
                        <div>
                            <span style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;display:block;margin-bottom:12px;">Dernière Consultation</span>
                            <div style="padding:20px;background:#F8FAFC;border:1px solid #F1F5F9;border-radius:20px;position:relative;">
                                <div style="position:absolute;right:16px;top:-10px;padding:4px 10px;background:#00A693;color:#fff;font-size:9px;font-weight:900;border-radius:20px;box-shadow:0 4px 8px rgba(0,166,147,0.2);">${prev.date}</div>
                                <h3 style="font-size:13px;font-weight:900;margin-bottom:12px;color:#1E293B;">${prev.diagnosis}</h3>
                                <p style="font-size:11px;font-weight:600;color:#64748B;line-height:1.6;margin-bottom:12px;">"${prev.notes}"</p>
                                <div style="display:flex;flex-direction:column;gap:8px;">
                                    <div style="font-size:10px;font-weight:700;color:#475569;display:flex;align-items:center;gap:8px;"><i data-lucide="activity" style="width:12px;height:12px;color:#00A693;"></i> ${prev.symptoms}</div>
                                    <div style="font-size:10px;font-weight:700;color:#475569;display:flex;align-items:center;gap:8px;"><i data-lucide="pill" style="width:12px;height:12px;color:#00A693;"></i> ${prev.treatment}</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;display:block;margin-bottom:12px;">Objectifs définis</span>
                            <div style="display:flex;flex-direction:column;gap:10px;">
                                <div style="display:flex;align-items:center;gap:10px;font-size:11px;font-weight:600;color:#1E293B;"><i data-lucide="check-circle-2" style="width:14px;height:14px;color:#00A693;"></i> Stabiliser la tension</div>
                                <div style="display:flex;align-items:center;gap:10px;font-size:11px;font-weight:600;color:#1E293B;"><i data-lucide="check-circle-2" style="width:14px;height:14px;color:#00A693;"></i> Réduire consommation sel</div>
                                <div style="display:flex;align-items:center;gap:10px;font-size:11px;font-weight:600;color:#94A3B8;"><i data-lucide="circle" style="width:14px;height:14px;"></i> Activité physique (30min/j)</div>
                            </div>
                        </div>
                    </aside>

                    <!-- CENTER: FOLLOW-UP INPUT -->
                    <main style="background:#F7F9FB;padding:32px;overflow-y:auto;display:flex;flex-direction:column;gap:24px;">
                        
                        <!-- 1. Evolution -->
                        <div style="background:#fff;border-radius:24px;padding:24px;box-shadow:0 2px 10px rgba(0,0,0,0.02);border:1px solid #E5E9F0;">
                            <h3 style="font-size:13px;font-weight:900;margin-bottom:16px;display:flex;align-items:center;gap:10px;"><i data-lucide="trending-up" style="color:#00A693;width:18px;"></i> Évolution des symptômes</h3>
                            <div style="display:flex;gap:10px;margin-bottom:16px;">
                                <button style="flex:1;padding:12px;background:#F0FDF4;border:2px solid #DCFCE7;border-radius:16px;color:#166534;font-size:11px;font-weight:900;cursor:pointer;">Amélioration</button>
                                <button style="flex:1;padding:12px;background:#F8FAFC;border:2px solid #F1F5F9;border-radius:16px;color:#475569;font-size:11px;font-weight:800;cursor:pointer;">Stable</button>
                                <button style="flex:1;padding:12px;background:#FFF1F2;border:2px solid #FFE4E6;border-radius:16px;color:#9F1239;font-size:11px;font-weight:800;cursor:pointer;">Aggravation</button>
                            </div>
                            <textarea placeholder="Ajouter des précisions cliniques..." style="width:100%;height:60px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:12px;font-size:12px;outline:none;resize:none;"></textarea>
                        </div>

                        <!-- 2. Observance -->
                        <div style="background:#fff;border-radius:24px;padding:24px;box-shadow:0 2px 10px rgba(0,0,0,0.02);border:1px solid #E5E9F0;">
                            <h3 style="font-size:13px;font-weight:900;margin-bottom:16px;display:flex;align-items:center;gap:10px;"><i data-lucide="pill" style="color:#00A693;width:18px;"></i> Observance thérapeutique</h3>
                            <div style="display:flex;gap:10px;margin-bottom:16px;">
                                <button style="flex:1;padding:12px;background:#F0FDF4;border:2px solid #DCFCE7;border-radius:16px;color:#166534;font-size:11px;font-weight:900;cursor:pointer;">Bonne</button>
                                <button style="flex:1;padding:12px;background:#FFFBEB;border:2px solid #FEF3C7;border-radius:16px;color:#92400E;font-size:11px;font-weight:800;cursor:pointer;">Irrégulière</button>
                                <button style="flex:1;padding:12px;background:#F8FAFC;border:2px solid #F1F5F9;border-radius:16px;color:#475569;font-size:11px;font-weight:800;cursor:pointer;">Arrêt complet</button>
                            </div>
                            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
                                <input type="checkbox" style="width:18px;height:18px;accent-color:#00A693;cursor:pointer;">
                                <span style="font-size:12px;font-weight:700;color:#475569;">Présence d'effets secondaires</span>
                            </label>
                        </div>

                        <!-- 3. Constantes Vitale Grid -->
                        <div style="background:#fff;border-radius:24px;padding:24px;box-shadow:0 2px 10px rgba(0,0,0,0.02);border:1px solid #E5E9F0;">
                            <h3 style="font-size:13px;font-weight:900;margin-bottom:16px;display:flex;align-items:center;gap:10px;"><i data-lucide="activity" style="color:#00A693;width:18px;"></i> Constantes vitales</h3>
                            <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:12px;">
                                <div style="display:flex;flex-direction:column;gap:6px;">
                                    <span style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;">Tension (TA)</span>
                                    <input type="text" value="130/80" style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:12px;font-weight:800;text-align:center;">
                                </div>
                                <div style="display:flex;flex-direction:column;gap:6px;">
                                    <span style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;">Pouls (bpm)</span>
                                    <input type="text" value="72" style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:12px;font-weight:800;text-align:center;">
                                </div>
                                <div style="display:flex;flex-direction:column;gap:6px;">
                                    <span style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;">Poids (kg)</span>
                                    <input type="text" value="${patient.poids || '70'}" style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:12px;font-weight:800;text-align:center;">
                                </div>
                                <div style="display:flex;flex-direction:column;gap:6px;">
                                    <span style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;">Glycémie</span>
                                    <input type="text" value="0.95" style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:12px;font-weight:800;text-align:center;">
                                </div>
                            </div>
                        </div>

                        <!-- 4. Resultats Tests -->
                        <div style="background:#fff;border-radius:24px;padding:24px;box-shadow:0 2px 10px rgba(0,0,0,0.02);border:1px solid #E5E9F0;">
                            <h3 style="font-size:13px;font-weight:900;margin-bottom:16px;display:flex;align-items:center;gap:10px;"><i data-lucide="beaker" style="color:#00A693;width:18px;"></i> Examens récents</h3>
                            <div style="display:flex;gap:12px;">
                                <button style="flex:1;padding:14px;border:1px dashed #00A693;background:rgba(0,166,147,0.02);border-radius:16px;color:#00A693;font-size:11px;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;"><i data-lucide="plus" style="width:16px;"></i> Labo</button>
                                <button style="flex:1;padding:14px;border:1px dashed #00A693;background:rgba(0,166,147,0.02);border-radius:16px;color:#00A693;font-size:11px;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;"><i data-lucide="plus" style="width:16px;"></i> Imagerie</button>
                                <button style="flex:1;padding:14px;border:1px dashed #00A693;background:rgba(0,166,147,0.02);border-radius:16px;color:#00A693;font-size:11px;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;"><i data-lucide="paperclip" style="width:16px;"></i> Joindre</button>
                            </div>
                        </div>

                        <!-- 5. Evaluation Clinique -->
                        <div style="background:#fff;border-radius:24px;padding:24px;box-shadow:0 2px 10px rgba(0,0,0,0.02);border:1px solid #E5E9F0;">
                            <h3 style="font-size:13px;font-weight:900;margin-bottom:16px;display:flex;align-items:center;gap:10px;"><i data-lucide="check-square" style="color:#00A693;width:18px;"></i> Évaluation globale</h3>
                            <div style="display:flex;gap:10px;">
                                <button style="flex:1;padding:12px;background:#F0FDF4;border:2px solid #DCFCE7;border-radius:16px;color:#166534;font-size:11px;font-weight:900;cursor:pointer;">Controlé</button>
                                <button style="flex:1;padding:12px;background:#F8FAFC;border:2px solid #F1F5F9;border-radius:16px;color:#475569;font-size:11px;font-weight:800;cursor:pointer;">Partiel</button>
                                <button style="flex:1;padding:12px;background:#FFF1F2;border:2px solid #FFE4E6;border-radius:16px;color:#9F1239;font-size:11px;font-weight:800;cursor:pointer;">Non controlé</button>
                            </div>
                        </div>

                        <!-- 6. Decision Medicale -->
                        <div style="background:#fff;border-radius:24px;padding:24px;box-shadow:0 2px 10px rgba(0,0,0,0.02);border:1px solid #E5E9F0;">
                            <h3 style="font-size:13px;font-weight:900;margin-bottom:16px;">Décision médicale</h3>
                            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                                <button style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;font-size:11px;font-weight:700;text-align:left;cursor:pointer;display:flex;items-center;gap:10px;"><i data-lucide="play" style="width:14px;color:#00A693;"></i> Continuer le traitement</button>
                                <button style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;font-size:11px;font-weight:700;text-align:left;cursor:pointer;display:flex;items-center;gap:10px;"><i data-lucide="edit" style="width:14px;color:#00A693;"></i> Ajuster posologie</button>
                                <button style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;font-size:11px;font-weight:700;text-align:left;cursor:pointer;display:flex;items-center;gap:10px;"><i data-lucide="test-tube" style="width:14px;color:#3B82F6;"></i> Prescrire examens</button>
                                <button style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;font-size:11px;font-weight:700;text-align:left;cursor:pointer;display:flex;items-center;gap:10px;"><i data-lucide="external-link" style="width:14px;color:#6366F1;"></i> Orienter confrère</button>
                            </div>
                        </div>

                        <!-- 7. Prochain suivi -->
                        <div style="background:#fff;border-radius:24px;padding:24px;box-shadow:0 2px 10px rgba(0,0,0,0.02);border:1px solid #E5E9F0;margin-bottom:60px;">
                            <h3 style="font-size:13px;font-weight:900;margin-bottom:16px;">Prochain rendez-vous</h3>
                            <div style="display:flex;gap:8px;">
                                <span style="flex:1;padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:10px;font-weight:900;text-align:center;cursor:pointer;">1 sem.</span>
                                <span style="flex:1;padding:10px;background:#F0FDF4;border:1px solid #00A693;border-radius:12px;font-size:10px;font-weight:950;text-align:center;cursor:pointer;color:#00A693;">1 mois</span>
                                <span style="flex:1;padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:10px;font-weight:900;text-align:center;cursor:pointer;">3 mois</span>
                                <span style="flex:1;padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:10px;font-weight:900;text-align:center;cursor:pointer;">6 mois</span>
                            </div>
                        </div>
                    </main>

                    <!-- RIGHT: TIMELINE + TRENDS -->
                    <aside style="background:#fff;padding:24px;overflow-y:auto;display:flex;flex-direction:column;gap:32px;">
                        <!-- Mini Timeline -->
                        <div>
                            <span style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;display:block;margin-bottom:16px;">Derniers événements</span>
                            <div style="display:flex;flex-direction:column;gap:16px;position:relative;">
                                <div style="position:absolute;left:11px;top:0;bottom:0;width:1px;background:#F1F5F9;"></div>
                                <div style="display:flex;gap:16px;position:relative;z-index:1;">
                                    <div style="width:24px;height:24px;border-radius:50%;background:#F0FDF4;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i data-lucide="stethoscope" style="width:12px;color:#00A693;"></i></div>
                                    <div><p style="font-size:11px;font-weight:900;margin:0;">Consultation</p><span style="font-size:9px;color:#94A3B8;font-weight:600;">12 Mars 2026</span></div>
                                </div>
                                <div style="display:flex;gap:16px;position:relative;z-index:1;">
                                    <div style="width:24px;height:24px;border-radius:50%;background:#EFF6FF;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i data-lucide="beaker" style="width:12px;color:#3B82F6;"></i></div>
                                    <div><p style="font-size:11px;font-weight:900;margin:0;">Analyse Labo</p><span style="font-size:9px;color:#94A3B8;font-weight:600;">05 Mars 2026</span></div>
                                </div>
                            </div>
                        </div>

                        <!-- Mini Trends -->
                        <div>
                             <span style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;display:block;margin-bottom:16px;">Tendances santé</span>
                             <div style="display:flex;flex-direction:column;gap:12px;">
                                 <!-- BP -->
                                 <div style="padding:14px;background:#F8FAFC;border-radius:18px;border:1px solid #F1F5F9;">
                                     <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                                         <span style="font-size:10px;font-weight:900;color:#64748B;">Tension (Sys.)</span>
                                         <span style="font-size:11px;font-weight:900;color:#1E293B;">130 <span style="font-size:8px;color:#94A3B8;">mmHg</span></span>
                                     </div>
                                     <div style="display:flex;align-items:flex-end;gap:3px;height:30px;">
                                         <div style="flex:1;height:40%;background:#E2E8F0;border-radius:2px;"></div>
                                         <div style="flex:1;height:60%;background:#E2E8F0;border-radius:2px;"></div>
                                         <div style="flex:1;height:85%;background:#F43F5E;border-radius:2px;"></div>
                                         <div style="flex:1;height:50%;background:#00A693;border-radius:2px;"></div>
                                     </div>
                                 </div>
                                 <!-- Glucose -->
                                 <div style="padding:14px;background:#F8FAFC;border-radius:18px;border:1px solid #F1F5F9;">
                                     <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                                         <span style="font-size:10px;font-weight:900;color:#64748B;">Glycémie</span>
                                         <span style="font-size:11px;font-weight:900;color:#1E293B;">0.95 <span style="font-size:8px;color:#94A3B8;">g/L</span></span>
                                     </div>
                                     <div style="display:flex;align-items:flex-end;gap:3px;height:30px;">
                                         <div style="flex:1;height:70%;background:#E2E8F0;border-radius:2px;"></div>
                                         <div style="flex:1;height:65%;background:#E2E8F0;border-radius:2px;"></div>
                                         <div style="flex:1;height:68%;background:#00A693;border-radius:2px;"></div>
                                     </div>
                                 </div>
                             </div>
                        </div>

                        <!-- AI Panel Bot -->
                        <div style="margin-top:auto;padding:20px;background:#F0FDF4;border:1px solid #DCFCE7;border-radius:24px;text-align:center;">
                            <div style="width:40px;height:40px;background:#fff;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;box-shadow:0 4px 10px rgba(0,0,0,0.05);">
                                <i data-lucide="sparkles" style="width:20px;color:#00A693;"></i>
                            </div>
                            <h4 style="font-size:12px;font-weight:900;color:#166534;margin-bottom:4px;">Assistant Vitalia</h4>
                            <p style="font-size:10px;color:#166534;font-weight:600;margin-bottom:14px;line-height:1.4;">Générez un compte-rendu structuré en un clic.</p>
                            <button id="btn-generate-followup-summary" style="width:100%;padding:10px;background:#00A693;color:#fff;border:none;border-radius:12px;font-size:10px;font-weight:900;cursor:pointer;box-shadow:0 4px 12px rgba(0,166,147,0.3);">Générer le résumé</button>
                        </div>
                    </aside>
                </div>

                <!-- Floating Save Button -->
                <button onclick="exitHyperFocus()" style="position:fixed;bottom:32px;right:400px;padding:14px 32px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-size:13px;font-weight:950;cursor:pointer;display:flex;align-items:center;gap:10px;box-shadow:0 20px 40px rgba(15,23,42,0.3);z-index:200;">
                    <i data-lucide="save" style="width:18px;"></i> Enregistrer la consultation
                </button>
            </div>
            <script>
                if (typeof lucide !== 'undefined') lucide.createIcons();
            </script>
        `;
    },
    getAIExplorationModal: () => `
        <div class="modal-overlay animate-fade-in" id="ai-exploration-overlay">
            <div class="modal-content animate-slide-up max-w-2xl w-full h-[80vh] flex flex-col mx-4">
                <div class="flex items-center justify-between p-6 border-b border-slate-100">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                            <i data-lucide="sparkles" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-black text-slate-800 tracking-tight">Vitalia AI Exploration</h3>
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assistant Intelligent Actif</span>
                            </div>
                        </div>
                    </div>
                    <button id="close-exploration-modal" class="w-10 h-10 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>
                </div>

                <div class="flex-1 overflow-y-auto p-6 space-y-6" id="chat-messages">
                    <div class="flex gap-4">
                        <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                            <i data-lucide="bot" class="w-5 h-5"></i>
                        </div>
                        <div class="bg-indigo-50/50 p-4 rounded-2xl rounded-tl-none border border-indigo-100/50 max-w-[85%]">
                            <p class="text-sm text-slate-700 leading-relaxed font-medium">
                                Bonjour Dr Esdras. Je suis prêt à approfondir l'analyse de ce patient avec vous. 
                                Vous pouvez me poser des questions sur les diagnostics suggérés, demander des recherches de protocoles ou simuler des options de traitement. 
                                <br><br>Que souhaitez-vous explorer ?
                            </p>
                        </div>
                    </div>
                </div>

                <div class="p-6 border-t border-slate-100 bg-slate-50/30">
                    <div class="flex gap-2">
                        <div class="relative flex-1">
                            <input type="text" id="exploration-input" placeholder="Posez une question à l'IA ou demandez une recherche..." class="w-full h-14 pl-6 pr-14 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm font-medium">
                            <button class="absolute right-3 top-2.5 w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors">
                                <i data-lucide="paperclip" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <button id="send-exploration-btn" class="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">
                            <i data-lucide="send-horizontal" class="w-6 h-6"></i>
                        </button>
                    </div>
                    <div class="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                        <button class="suggestion-chip">ðŸ“‹ Protocoles Angine</button>
                        <button class="suggestion-chip">ðŸ”¬ Interactions médicamenteuses</button>
                        <button class="suggestion-chip">ðŸ“š Recherches PubMed</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    EsdrasAgendaTemplate: (schedule, selectedPatientId = null) => {
        const selectedPatient = selectedPatientId ? MOCK_DATA.patients.find(p => p.id === selectedPatientId) : null;
        const selectedAppointment = selectedPatientId ? schedule.find(a => a.patientId === selectedPatientId) : null;
        const isTeleconsultation = selectedAppointment && selectedAppointment.type === 'teleconsultation';
        
        if (selectedPatient) {
            return `
                <div class="esdras-agenda-split flex gap-6 animate-slide-up h-full" style="display: flex; gap: 24px; min-height: 380px;">

                    <!-- Left Column: Agenda Premium Scroll -->
                    <div style="flex:0 0 280px;display:flex;flex-direction:column;border-right:1px solid #F1F5F9;padding-right:18px;">
                        
                        <!-- Header Agenda gauche -->
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-shrink:0;">
                            <div style="font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:2px;color:#94A3B8;">Planning</div>
                            <span style="padding:2px 8px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:20px;font-size:8px;font-weight:900;color:#2563EB;">${schedule.length} RDV</span>
                        </div>

                        <!-- Liste scrollable -->
                        <div style="height:342px;overflow-y:auto;display:flex;flex-direction:column;gap:12px;min-height:0;padding-right:8px;">
                            ${schedule.map(apt => {
                                const isSelected = apt.patientId === selectedPatientId;
                                const typeColors = {
                                    'physique':        { dot:'#3B82F6', bg: isSelected ? 'transparent' : '#EFF6FF', label:'PHYSIQUE' },
                                    'teleconsultation':{ dot:'#22C55E', bg: isSelected ? 'transparent' : '#F0FDF4', label:'TÉLÉ' },
                                    'block':           { dot:'#F97316', bg: isSelected ? 'transparent' : '#FFF7ED', label:'BLOQUÉ' },
                                };
                                const tc = typeColors[apt.type] || typeColors['physique'];
                                return `
                                     <div class="agenda-item"
                                          data-patient-id="${apt.patientId || ''}"
                                          onclick="window.showEsdrasPatientSummary('${apt.patientId}')"
                                          style="
                                            height:75px;
                                            box-sizing:border-box;
                                            flex-shrink:0;
                                            padding:16px 20px;
                                            border-radius:20px;
                                            background:${isSelected ? 'linear-gradient(135deg,#4f46e5,#6366f1)' : '#FFFFFF'};
                                            border:2px solid ${isSelected ? 'transparent' : '#F1F5F9'};
                                            cursor:pointer;
                                            transition:all 0.18s ease;
                                            display:flex;
                                            align-items:center;
                                            gap:14px;
                                            box-shadow:${isSelected ? '0 8px 24px rgba(99,102,241,0.3)' : '0 2px 6px rgba(0,0,0,0.04)'};
                                            position:relative;
                                            overflow:hidden;
                                         ">
                                        <!-- Accent dot -->
                                        <div style="width:12px;height:12px;border-radius:50%;background:${isSelected ? 'rgba(255,255,255,0.6)' : tc.dot};flex-shrink:0;${apt.status === 'En cours' && !isSelected ? 'box-shadow:0 0 8px ' + tc.dot + ';' : ''}"></div>
                                        
                                        <div style="flex:1;min-width:0;pointer-events:none;">
                                            <div style="font-size:16px;font-weight:900;color:${isSelected ? '#fff' : '#0F172A'};line-height:1.3;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center;gap:6px;">${apt.isConsulted ? `<i data-lucide="check-circle-2" style="width:16px;height:16px;color:${isSelected ? '#fff' : '#22C55E'};flex-shrink:0;"></i>` : ''}${apt.patient}</div>
                                            <div style="font-size:11px;font-weight:700;color:${isSelected ? 'rgba(255,255,255,0.65)' : '#94A3B8'};text-transform:uppercase;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${apt.time} &bull; ${tc.label}</div>
                                        </div>
                                        
                                        ${isSelected ? '<div style="width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.5);flex-shrink:0;"></div>' : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>

                        <!-- Actions -->
                        <div style="flex-shrink:0;margin-top:10px;padding-top:10px;border-top:1px solid #F8FAFC;display:flex;flex-direction:column;gap:6px;">
                            <button style="width:100%;padding:9px;background:#fff;border:1px solid #E2E8F0;border-radius:10px;cursor:pointer;font-size:9px;font-weight:900;color:#64748B;text-transform:uppercase;letter-spacing:1px;display:flex;align-items:center;justify-content:center;gap:6px;transition:all 0.2s;" id="esdras-terminate-btn">
                                <i data-lucide="log-out" style="width:11px;height:11px;"></i> Terminer
                            </button>
                            <button style="width:100%;padding:9px;background:linear-gradient(135deg,#4f46e5,#6366f1);border:none;border-radius:10px;cursor:pointer;font-size:9px;font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:1px;display:flex;align-items:center;justify-content:center;gap:6px;" onclick="location.reload()">
                                <i data-lucide="rotate-ccw" style="width:11px;height:11px;"></i> Retour
                            </button>
                        </div>
                    </div>

                    <!-- Right Column: Patient Summary Premium -->
                    <div class="flex-[2] flex flex-col animate-slide-left" style="gap: 0;">

                        <!-- Identity Header with gradient -->
                        <div style="background:linear-gradient(135deg,#4f46e5 0%,#6366f1 60%,#818cf8 100%);border-radius:20px;padding:20px;margin-bottom:12px;position:relative;overflow:hidden;">
                            <div style="position:absolute;right:-20px;top:-20px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.07);"></div>
                            <div style="position:absolute;right:20px;bottom:-30px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.05);"></div>

                            <div style="display:flex;align-items:center;gap:14px;position:relative;z-index:1;">
                                <div style="width:60px;height:60px;border-radius:16px;overflow:hidden;border:2px solid rgba(255,255,255,0.3);flex-shrink:0;box-shadow:0 8px 20px rgba(0,0,0,0.15);">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=${selectedPatient.name}" style="width:100%;height:100%;object-fit:cover;" alt="">
                                </div>
                                <div style="flex:1;min-width:0;">
                                    <h4 style="font-size:17px;font-weight:900;color:#fff;margin:0 0 6px;letter-spacing:-0.3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${selectedPatient.name}</h4>
                                    <div style="display:flex;gap:6px;flex-wrap:wrap;">
                                        <span style="padding:2px 10px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.25);border-radius:20px;font-size:9px;font-weight:800;color:#e0e7ff;text-transform:uppercase;">${selectedPatient.age} ans</span>
                                        <span style="padding:2px 10px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.25);border-radius:20px;font-size:9px;font-weight:800;color:#e0e7ff;text-transform:uppercase;">${selectedPatient.gender === 'M' ? 'Homme' : 'Femme'}</span>
                                        <span style="padding:2px 10px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.25);border-radius:20px;font-size:9px;font-weight:800;color:#e0e7ff;text-transform:uppercase;">Gpe ${selectedPatient.bloodType}</span>
                                    </div>
                                </div>
                                <div style="text-align:center;flex-shrink:0;">
                                    <div style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,0.15);border:2px solid rgba(255,255,255,0.3);display:flex;flex-direction:column;align-items:center;justify-content:center;">
                                        <span style="font-size:13px;font-weight:900;color:#fff;line-height:1;">${selectedPatient.vitaliaScore}</span>
                                        <span style="font-size:7px;font-weight:700;color:#c7d2fe;line-height:1;margin-top:1px;">Score</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Info Cards -->
                        <div style="display:flex;flex-direction:column;gap:12px;flex:1;margin-bottom:12px;">
                            <div style="background:#f5f3ff;border:2px solid #e0e7ff;border-radius:16px;padding:16px 20px;">
                                <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                                    <div style="width:24px;height:24px;border-radius:6px;background:#6366f1;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                        <i data-lucide="clipboard-list" style="width:12px;height:12px;color:#fff;"></i>
                                    </div>
                                    <span style="font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:1.2px;color:#6366f1;">Motif de consultation</span>
                                </div>
                                <p style="font-size:13px;font-weight:700;color:#312e81;margin:0;line-height:1.4;">${selectedPatient.motif || 'Non renseigne'}</p>
                            </div>

                            <div style="background:#f8fafc;border:2px solid #f1f5f9;border-radius:16px;padding:16px 20px;">
                                <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
                                    <div style="width:24px;height:24px;border-radius:6px;background:#64748b;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                        <i data-lucide="shield" style="width:12px;height:12px;color:#fff;"></i>
                                    </div>
                                    <span style="font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:1.2px;color:#64748b;">Antecedents</span>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:6px;">
                                    ${selectedPatient.antecedents.map(a => `
                                        <span style="padding:4px 12px;background:#fff;border:1px solid #e2e8f0;border-radius:20px;font-size:11px;font-weight:700;color:#475569;box-shadow:0 1px 2px rgba(0,0,0,0.03);">${a}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div style="display:flex;flex-direction:column;gap:12px;padding-top:8px;">
                            <button 
                                onclick="${isTeleconsultation ? `window.startTeleconsultation('${selectedPatient.id}')` : `window.startConsultationFromEsdras('${selectedPatient.id}')`}"
                                style="width:100%;padding:18px 20px;background:linear-gradient(135deg,#4f46e5,#6366f1);border:none;border-radius:18px;cursor:pointer;font-size:14px;font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:1px;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 8px 20px -4px rgba(99,102,241,0.4);transition:all 0.2s ease;"
                                onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 24px -4px rgba(99,102,241,0.5)'"
                                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 8px 20px -4px rgba(99,102,241,0.4)'"
                            >
                                <i data-lucide="${isTeleconsultation ? 'video' : 'stethoscope'}" style="width:18px;height:18px;"></i>
                                ${isTeleconsultation ? 'Téléconsultation' : 'Nouvelle Consultation'}
                            </button>
                            <button 
                                class="btn-follow-up-patient"
                                data-patient-id="${selectedPatient.id}"
                                style="width:100%;padding:16px 20px;background:#fff;border:2px solid #e2e8f0;border-radius:18px;cursor:pointer;font-size:13px;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;display:flex;align-items:center;justify-content:center;gap:10px;transition:all 0.2s ease;"
                                onmouseover="this.style.borderColor='#6366f1';this.style.color='#4f46e5';this.style.background='#f5f3ff'"
                                onmouseout="this.style.borderColor='#e2e8f0';this.style.color='#64748b';this.style.background='#fff'"
                            >
                                <i data-lucide="clipboard-check" style="width:16px;height:16px;"></i>
                                Visite de Controle
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Etat par defaut - Agenda premium scrollable
        const today = new Date();
        const jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
        const mois = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
        const dateFormatted = `${jours[today.getDay()]} ${today.getDate()} ${mois[today.getMonth()]}`;
        const pending  = schedule.filter(a => a.status === 'A venir').length;
        const inProg   = schedule.filter(a => a.status === 'En cours').length;
        const done     = schedule.filter(a => a.status === 'Termine').length;

        const typeConfig = {
            'physique':        { label:'Presentiel',  bg:'#EFF6FF', color:'#2563EB', border:'#BFDBFE', dot:'#3B82F6' },
            'teleconsultation':{ label:'Teleconsult.', bg:'#F0FDF4', color:'#16A34A', border:'#BBF7D0', dot:'#22C55E' },
            'block':           { label:'Bloque',       bg:'#FFF7ED', color:'#EA580C', border:'#FED7AA', dot:'#F97316' },
        };
        const statusConfig = {
            'En cours': { bg:'#ECFDF5', color:'#059669', border:'#A7F3D0', pulse:true  },
            'A venir':  { bg:'#F8FAFC', color:'#64748B', border:'#E2E8F0', pulse:false },
            'Bloque':   { bg:'#FFF7ED', color:'#EA580C', border:'#FED7AA', pulse:false },
        };

        return `
            <div class="esdras-agenda animate-slide-up" style="display:flex;flex-direction:column;min-height:500px;width:100%;flex:1;">

                <!-- Header -->
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-shrink:0;">
                    <div>
                        <div style="font-size:8px;font-weight:900;text-transform:uppercase;letter-spacing:2px;color:#94A3B8;margin-bottom:2px;">Planning du jour</div>
                        <div style="font-size:12px;font-weight:900;color:#0F172A;letter-spacing:-0.2px;">${dateFormatted}</div>
                    </div>
                    <div style="display:flex;align-items:center;gap:5px;">
                        ${inProg > 0 ? `<span style="display:flex;align-items:center;gap:4px;padding:3px 8px;background:#ECFDF5;border:1px solid #A7F3D0;border-radius:20px;font-size:8px;font-weight:900;color:#059669;text-transform:uppercase;letter-spacing:0.5px;"><span style="width:5px;height:5px;border-radius:50%;background:#10B981;display:inline-block;"></span>En cours</span>` : ''}
                        <span style="padding:3px 8px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:20px;font-size:8px;font-weight:900;color:#2563EB;">${schedule.length} RDV</span>
                    </div>
                </div>

                <!-- Stats row -->
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:12px;flex-shrink:0;">
                    <div style="padding:7px 8px;background:#EFF6FF;border-radius:10px;border:1px solid #DBEAFE;text-align:center;">
                        <div style="font-size:7px;font-weight:900;color:#93C5FD;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:1px;">A venir</div>
                        <div style="font-size:16px;font-weight:900;color:#1D4ED8;">${Math.max(pending, schedule.filter(a => a.status === 'A venir' || a.status === '\u00c0 venir').length) || schedule.length - inProg - done}</div>
                    </div>
                    <div style="padding:7px 8px;background:#ECFDF5;border-radius:10px;border:1px solid #D1FAE5;text-align:center;">
                        <div style="font-size:7px;font-weight:900;color:#6EE7B7;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:1px;">En cours</div>
                        <div style="font-size:16px;font-weight:900;color:#065F46;">${inProg}</div>
                    </div>
                    <div style="padding:7px 8px;background:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0;text-align:center;">
                        <div style="font-size:7px;font-weight:900;color:#CBD5E1;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:1px;">Total</div>
                        <div style="font-size:16px;font-weight:900;color:#334155;">${schedule.length}</div>
                    </div>
                </div>

                <!-- Liste scrollable des RDV -->
                <div style="height:440px;overflow-y:auto;display:flex;flex-direction:column;gap:12px;padding-right:8px;min-height:0;">
                    ${schedule.map((apt, idx) => {
                        const tc = typeConfig[apt.type] || typeConfig['physique'];
                        const sc = statusConfig[apt.status] || statusConfig['A venir'];
                        const hasPatient = !!apt.patientId;
                        return `
                             <div class="agenda-item"
                                 data-patient-id="${apt.patientId || ''}"
                                 onclick="${hasPatient ? `window.showEsdrasPatientSummary('${apt.patientId}')` : ''}"
                                 style="
                                    height:95px;
                                    box-sizing:border-box;
                                    flex-shrink:0;
                                    background:#FFFFFF;
                                    border:2px solid #F1F5F9;
                                    border-radius:24px;
                                    padding:20px 24px;
                                    cursor:${hasPatient ? 'pointer' : 'default'};
                                    transition:all 0.18s ease;
                                    display:flex;
                                    align-items:center;
                                    gap:20px;
                                    box-shadow:0 4px 10px rgba(0,0,0,0.04);
                                    position:relative;
                                    overflow:hidden;
                                 "
                                 ${hasPatient ? `onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 10px 24px rgba(0,0,0,0.08)';this.style.borderColor='#C7D2FE'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 10px rgba(0,0,0,0.04)';this.style.borderColor='#F1F5F9'"` : ''}>

                                <!-- Accent bar -->
                                <div style="position:absolute;left:0;top:0;bottom:0;width:6px;background:${tc.dot};border-radius:24px 0 0 24px;"></div>

                                <!-- Heure -->
                                <div style="flex-shrink:0;text-align:center;min-width:56px;">
                                    <div style="font-size:20px;font-weight:900;color:#0F172A;letter-spacing:-0.5px;line-height:1;">${apt.time}</div>
                                    <div style="font-size:11px;font-weight:700;color:#64748B;margin-top:6px;text-transform:uppercase;">${apt.length || 30}min</div>
                                </div>

                                <!-- Separator -->
                                <div style="width:2px;height:48px;background:#E2E8F0;flex-shrink:0;border-radius:2px;"></div>

                                <!-- Patient info -->
                                <div style="flex:1;min-width:0;">
                                    <div style="font-size:18px;font-weight:900;color:#0F172A;line-height:1.2;margin-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${apt.patient}</div>
                                    ${apt.motif ? `<div style="font-size:13px;font-weight:600;color:#64748B;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${apt.motif}</div>` : ''}
                                </div>

                                <!-- Badges -->
                                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0;">
                                    <span style="padding:6px 14px;background:${tc.bg};border:1px solid ${tc.border};border-radius:20px;font-size:12px;font-weight:900;color:${tc.color};text-transform:uppercase;">${tc.label}</span>
                                    <span style="display:flex;align-items:center;gap:4px;padding:6px 14px;background:${sc.bg};border:1px solid ${sc.border};border-radius:20px;font-size:11px;font-weight:900;color:${sc.color};text-transform:uppercase;">
                                        ${sc.pulse ? `<span style="width:6px;height:6px;border-radius:50%;background:${sc.color};display:inline-block;margin-right:2px;"></span>` : ''}
                                        ${apt.status}
                                    </span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- Bottom actions -->
                <div style="flex-shrink:0;margin-top:10px;padding-top:10px;border-top:1px solid #F8FAFC;display:flex;gap:6px;">
                    <button style="flex:1;padding:9px;background:#fff;border:1px solid #E2E8F0;border-radius:10px;cursor:pointer;font-size:9px;font-weight:900;color:#64748B;text-transform:uppercase;letter-spacing:1px;display:flex;align-items:center;justify-content:center;gap:5px;transition:all 0.2s;" id="esdras-terminate-btn">
                        <i data-lucide="log-out" style="width:11px;height:11px;"></i> Terminer
                    </button>
                    <button style="flex:1;padding:9px;background:linear-gradient(135deg,#4f46e5,#6366f1);border:none;border-radius:10px;cursor:pointer;font-size:9px;font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:1px;display:flex;align-items:center;justify-content:center;gap:5px;" onclick="location.reload()">
                        <i data-lucide="rotate-ccw" style="width:11px;height:11px;"></i> Retour
                    </button>
                </div>
            </div>
        `;
    },

    EsdrasEndDaySummaryTemplate: (stats) => {
        return `
            <div class="flex flex-col gap-3">
                <p class="text-[11px] font-medium text-slate-700 leading-relaxed italic">
                    "Faisons le point, Docteur. Aujourd'hui, vous avez consulte <strong>${stats.consulted}</strong> patients. Il en reste <strong>${stats.remaining}</strong> prevus dans votre agenda. Etes-vous sur de vouloir terminer votre journee maintenant ?"
                </p>
                <div class="mt-2 flex justify-end gap-2">
                    <button class="btn btn-ghost btn-xs text-[10px] text-slate-500" onclick="location.reload()">Annuler</button>
                    <button class="btn btn-primary btn-xs text-[10px]" onclick="location.reload()">Confirmer la fin</button>
                </div>
            </div>
        `;
    },

    VitaliaViewTemplate: function(patient) {
        if (!patient) return '';
        const score = patient.vitaliaScore || 72;
        const scoreTrend = patient.scoreTrend || 'stable';
        const dashArray = 2 * Math.PI * 28;
        const dashOffset = dashArray * (1 - score/100);
        
        // Define dynamic colors based on score
        const activeScoreColor = score > 71 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';
        const activeScoreBg = score > 71 ? 'linear-gradient(135deg, #A7F3D0 0%, #ECFDF5 100%)' : 
                              score >= 50 ? 'linear-gradient(135deg, #FDE68A 0%, #FFFBEB 100%)' : 
                                            'linear-gradient(135deg, #FECACA 0%, #FEF2F2 100%)';
        const activeTrackColor = score > 71 ? '#D1FAE5' : score >= 50 ? '#FEF3C7' : '#FEE2E2';
        const activeTextColor = score > 71 ? '#065F46' : score >= 50 ? '#92400E' : '#991B1B';
        const activePillBg = score > 71 ? 'rgba(16, 185, 129, 0.15)' : score >= 50 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(239, 68, 68, 0.15)';

        const heartAge = patient.age ? Math.round(patient.age * 1.1) : 57;

        return `
            <div style="display:flex;flex-direction:column;height:100%;gap:16px;">
                <!-- Health Score Donut (Remplaçant Identite et Motif) -->
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;background:${activeScoreBg};border-radius:16px;padding:24px 16px;position:relative;box-shadow:inset 0 2px 10px rgba(0,0,0,0.02);">
                    
                    <!-- Circular Progress -->
                    <div style="position:relative;width:130px;height:130px;margin-bottom:18px;">
                        <svg viewBox="0 0 100 100" style="width:100%;height:100%;transform:rotate(-90deg);">
                            <!-- Track -->
                            <circle cx="50" cy="50" r="40" stroke="${activeTrackColor}" stroke-width="13" fill="none" />
                            <!-- Progress -->
                            <circle cx="50" cy="50" r="40" stroke="${activeScoreColor}" stroke-width="13" fill="none" stroke-dasharray="251.2" stroke-dashoffset="${251.2 * (1 - score / 100)}" stroke-linecap="round"/>
                        </svg>
                        <!-- Center Text -->
                        <div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                            <span style="font-size:36px;font-weight:900;color:${activeTextColor};line-height:1;letter-spacing:-1px;">${score}</span>
                            <span style="font-size:13px;font-weight:800;color:${activeScoreColor};margin-top:2px;">/100</span>
                        </div>
                    </div>

                    <!-- Heart Age Pill -->
                    <div style="background:${activePillBg};padding:7px 20px;border-radius:24px;display:flex;align-items:center;gap:8px;box-shadow:0 2px 6px rgba(0,0,0,0.04);">
                        <span style="width:7px;height:7px;border-radius:50%;background:${activeScoreColor};"></span>
                        <span style="font-size:14px;font-weight:700;color:${activeTextColor};">Ã‚ge cardiaque : <span style="font-weight:900;color:${activeTextColor};">${heartAge} ans</span></span>
                    </div>
                </div>


                <!-- Alertes -->
                ${patient.alerts && patient.alerts.length > 0 ? `
                <div>
                    <div style="font-size:8px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Alertes</div>
                    <div style="display:flex;flex-direction:column;gap:5px;">
                        ${patient.alerts.map(alert => `
                            <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:#FEF2F2;border:1px solid #FECACA;border-radius:10px;">
                                <i data-lucide="alert-triangle" style="width:12px;height:12px;color:#EF4444;flex-shrink:0;"></i>
                                <span style="font-size:10px;font-weight:700;color:#991B1B;">${alert}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- Risk factors -->
                <div>
                    <div style="font-size:8px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Facteurs de risque</div>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                        <div>
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                                <div style="display:flex;align-items:center;gap:6px;">
                                    <div style="width:6px;height:6px;border-radius:50%;background:#EF4444;box-shadow:0 0 6px rgba(239,68,68,0.5);"></div>
                                    <span style="font-size:10px;font-weight:700;color:#334155;">Risque cardiovasculaire</span>
                                </div>
                                <span style="font-size:9px;font-weight:900;color:#EF4444;background:#FEF2F2;padding:2px 8px;border-radius:10px;">eleve &bull; 85%</span>
                            </div>
                            <div style="width:100%;height:5px;background:#F1F5F9;border-radius:10px;overflow:hidden;"><div style="height:100%;width:85%;background:linear-gradient(90deg,#EF4444,#F87171);border-radius:10px;"></div></div>
                        </div>
                        <div>
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                                <div style="display:flex;align-items:center;gap:6px;">
                                    <div style="width:6px;height:6px;border-radius:50%;background:#F59E0B;"></div>
                                    <span style="font-size:10px;font-weight:700;color:#334155;">Risque diabete</span>
                                </div>
                                <span style="font-size:9px;font-weight:900;color:#D97706;background:#FFFBEB;padding:2px 8px;border-radius:10px;">modere &bull; 50%</span>
                            </div>
                            <div style="width:100%;height:5px;background:#F1F5F9;border-radius:10px;overflow:hidden;"><div style="height:100%;width:50%;background:linear-gradient(90deg,#F59E0B,#FCD34D);border-radius:10px;"></div></div>
                        </div>
                        <div>
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                                <div style="display:flex;align-items:center;gap:6px;">
                                    <div style="width:6px;height:6px;border-radius:50%;background:#10b981;box-shadow:0 0 6px rgba(16,185,129,0.5);"></div>
                                    <span style="font-size:10px;font-weight:700;color:#334155;">Risque oncologique</span>
                                </div>
                                <span style="font-size:9px;font-weight:900;color:#065f46;background:#ecfdf5;padding:2px 8px;border-radius:10px;">bas &bull; 25%</span>
                            </div>
                            <div style="width:100%;height:5px;background:#F1F5F9;border-radius:10px;overflow:hidden;"><div style="height:100%;width:25%;background:linear-gradient(90deg,#10b981,#34d399);border-radius:10px;box-shadow:0 0 8px rgba(16,185,129,0.3);"></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <script>if (typeof lucide !== 'undefined') lucide.createIcons();</script>
        `;
    },

    // Alias pour compatibilite
    getFollowUpPreviousSummary: function(patient) {
        return {
            date: '15 Mars 2026',
            diagnosis: 'Suivi Diabete & Hypertension',
            notes: 'Glycemie instable, ajustement de la Metformine recommande. Tension artérielle 150/95.',
            treatments: patient.currentTreatments || []
        };
    },

    TimeInRangeTemplate: (patient) => {
        if (!patient) {
            return `
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;opacity:0.5;text-align:center;height:100%;">
                    <div style="width:48px;height:48px;background:#ECFDF5;border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;">
                        <i data-lucide="pie-chart" style="width:20px;height:20px;color:#6EE7B7;"></i>
                    </div>
                    <p style="font-size:10px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">En attente</p>
                    <p style="font-size:11px;color:#CBD5E1;font-style:italic;">Selectionnez un patient</p>
                </div>
            `;
        }

        let tir = 67, hyper = 28, hypo = 5;
        if (patient.trends && patient.trends.glucose) {
            const total = patient.trends.glucose.length;
            const inRange = patient.trends.glucose.filter(v => v >= 0.7 && v <= 1.4).length;
            const high = patient.trends.glucose.filter(v => v > 1.4).length;
            const low = patient.trends.glucose.filter(v => v < 0.7).length;
            tir = Math.round((inRange / total) * 100);
            hyper = Math.round((high / total) * 100);
            hypo = Math.round((low / total) * 100);
        }

        const tirStatus = tir >= 70 ? { label:'Excellent', color:'#10B981', bg:'#ECFDF5', border:'#A7F3D0' } :
                          tir >= 50 ? { label:'Acceptable', color:'#F59E0B', bg:'#FFFBEB', border:'#FDE68A' } :
                                      { label:'Critique', color:'#EF4444', bg:'#FEF2F2', border:'#FECACA' };

        const circumference = 2 * Math.PI * 52;
        const tirDash    = (tir / 100) * circumference;
        const hyperDash  = (hyper / 100) * circumference;
        const hypoDash   = (hypo / 100) * circumference;

        return `
            <div style="display:flex;flex-direction:column;height:100%;padding:0;">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,#10B981,#059669);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(16,185,129,0.3);">
                            <i data-lucide="pie-chart" style="width:16px;height:16px;color:white;"></i>
                        </div>
                        <div>
                            <div style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;">Glycemie Â· 90j</div>
                            <div style="font-size:14px;font-weight:900;color:#0F172A;letter-spacing:-0.3px;">Temps dans la Cible</div>
                        </div>
                    </div>
                    <span style="padding:4px 10px;background:${tirStatus.bg};border:1px solid ${tirStatus.border};border-radius:20px;font-size:9px;font-weight:900;color:${tirStatus.color};text-transform:uppercase;letter-spacing:1px;">${tirStatus.label}</span>
                </div>

                <div style="display:flex;flex-direction:column;align-items:center;position:relative;margin-bottom:8px;">
                    <svg viewBox="0 0 120 120" width="140" height="140" style="transform:rotate(-90deg);overflow:visible;">
                        <circle cx="60" cy="60" r="52" fill="none" stroke="#F1F5F9" stroke-width="12"/>
                        <circle cx="60" cy="60" r="52" fill="none" stroke="#EF4444" stroke-width="12"
                            stroke-dasharray="${hypoDash} ${circumference - hypoDash}"
                            stroke-dashoffset="0"
                            stroke-linecap="round" style="opacity:0.85;"/>
                        <circle cx="60" cy="60" r="52" fill="none" stroke="#F59E0B" stroke-width="12"
                            stroke-dasharray="${hyperDash} ${circumference - hyperDash}"
                            stroke-dashoffset="${-hypoDash}"
                            stroke-linecap="round" style="opacity:0.85;"/>
                        <circle cx="60" cy="60" r="52" fill="none" stroke="#10B981" stroke-width="12"
                            stroke-dasharray="${tirDash} ${circumference - tirDash}"
                            stroke-dashoffset="${-(hypoDash + hyperDash)}"
                            stroke-linecap="round"/>
                    </svg>
                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;pointer-events:none;">
                        <span style="font-size:30px;font-weight:900;color:#0F172A;letter-spacing:-2px;line-height:1;">${tir}%</span>
                        <span style="font-size:8px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;margin-top:2px;">dans la cible</span>
                    </div>
                </div>

                <div style="display:flex;flex-direction:column;gap:10px;">
                    <div>
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                            <div style="display:flex;align-items:center;gap:6px;">
                                <div style="width:8px;height:8px;border-radius:50%;background:#10B981;box-shadow:0 0 6px rgba(16,185,129,0.5);"></div>
                                <span style="font-size:11px;font-weight:700;color:#475569;">Cible (0.7-1.4 g/L)</span>
                            </div>
                            <span style="font-size:12px;font-weight:900;color:#10B981;">${tir}%</span>
                        </div>
                        <div style="height:6px;background:#E2E8F0;border-radius:10px;overflow:hidden;">
                            <div style="height:100%;width:${tir}%;background:linear-gradient(90deg,#10B981,#34D399);border-radius:10px;box-shadow:0 0 8px rgba(16,185,129,0.3);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                            <div style="display:flex;align-items:center;gap:6px;">
                                <div style="width:8px;height:8px;border-radius:50%;background:#F59E0B;"></div>
                                <span style="font-size:11px;font-weight:700;color:#475569;">Hyperglycemie (&gt;1.4)</span>
                            </div>
                            <span style="font-size:12px;font-weight:900;color:#F59E0B;">${hyper}%</span>
                        </div>
                        <div style="height:6px;background:#E2E8F0;border-radius:10px;overflow:hidden;">
                            <div style="height:100%;width:${hyper}%;background:linear-gradient(90deg,#F59E0B,#FCD34D);border-radius:10px;"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                            <div style="display:flex;align-items:center;gap:6px;">
                                <div style="width:8px;height:8px;border-radius:50%;background:#EF4444;"></div>
                                <span style="font-size:11px;font-weight:700;color:#475569;">Hypoglycemie (&lt;0.7)</span>
                            </div>
                            <span style="font-size:12px;font-weight:900;color:#EF4444;">${hypo}%</span>
                        </div>
                        <div style="height:6px;background:#E2E8F0;border-radius:10px;overflow:hidden;">
                            <div style="height:100%;width:${hypo || 1}%;background:linear-gradient(90deg,#EF4444,#FCA5A5);border-radius:10px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <script>if (typeof lucide !== 'undefined') lucide.createIcons();</script>
        `;
    },

    BPTrendTemplate: (patient) => {
        if (!patient) {
            return `
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;opacity:0.5;text-align:center;height:100%;">
                    <div style="width:48px;height:48px;background:#FFF1F2;border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;">
                        <i data-lucide="heart-pulse" style="width:20px;height:20px;color:#FDA4AF;"></i>
                    </div>
                    <p style="font-size:10px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">En attente</p>
                    <p style="font-size:11px;color:#CBD5E1;font-style:italic;">Selectionnez un patient</p>
                </div>
            `;
        }

        const fullData = (patient.trends && patient.trends.bp) || [118, 125, 135, 160, 175, 145, 130, 120, 155, 139, 128, 142];
        const data = fullData.slice(-12);
        const threshold = 135;
        const maxVal = Math.max(...data, 185);
        const minVal = Math.min(...data, 100);
        const chartHeight = 130;
        const lastVal = data[data.length - 1];
        const prevVal = data[data.length - 2];
        const trend = lastVal > prevVal ? 'up' : lastVal < prevVal ? 'down' : 'stable';
        const aboveCount = data.filter(v => v > threshold).length;
        const avgVal = Math.round(data.reduce((a,b) => a+b, 0) / data.length);

        return `
            <div style="display:flex;flex-direction:column;height:100%;">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,#F43F5E,#E11D48);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(244,63,94,0.3);">
                            <i data-lucide="heart-pulse" style="width:16px;height:16px;color:white;"></i>
                        </div>
                        <div>
                            <div style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;">Tension Arterielle Â· Systolique</div>
                            <div style="font-size:14px;font-weight:900;color:#0F172A;letter-spacing:-0.3px;">Tendance TA</div>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:26px;font-weight:900;color:${lastVal > threshold ? '#EF4444' : '#10B981'};letter-spacing:-1px;line-height:1;">${lastVal}</div>
                        <div style="font-size:9px;font-weight:700;color:#94A3B8;">mmHg Â· actuel</div>
                    </div>
                </div>

                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:16px;">
                    <div style="padding:8px 10px;background:#FFF1F2;border-radius:10px;border:1px solid #FECDD3;">
                        <div style="font-size:8px;font-weight:900;color:#FDA4AF;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Au-dessus seuil</div>
                        <div style="font-size:16px;font-weight:900;color:#E11D48;">${aboveCount}<span style="font-size:9px;font-weight:700;color:#FDA4AF;">/${data.length}</span></div>
                    </div>
                    <div style="padding:8px 10px;background:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0;">
                        <div style="font-size:8px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Moyenne</div>
                        <div style="font-size:16px;font-weight:900;color:#0F172A;">${avgVal}<span style="font-size:9px;">&nbsp;mmHg</span></div>
                    </div>
                    <div style="padding:8px 10px;background:${lastVal > threshold ? '#FEF2F2' : '#ECFDF5'};border-radius:10px;border:1px solid ${lastVal > threshold ? '#FECACA' : '#A7F3D0'};">
                        <div style="font-size:8px;font-weight:900;color:${lastVal > threshold ? '#FCA5A5' : '#6EE7B7'};text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Tendance</div>
                        <div style="font-size:13px;font-weight:900;color:${lastVal > threshold ? '#EF4444' : '#10B981'};">&uarr; ${trend === 'up' ? 'hausse' : trend === 'down' ? 'baisse' : 'stable'}</div>
                    </div>
                </div>

                <div style="flex:1;position:relative;display:flex;flex-direction:column;justify-content:flex-end;">
                    ${[180, 160, 140, 120, 100].map(v => {
                        const bottom = ((v - minVal) / (maxVal - minVal)) * chartHeight;
                        const isThreshold = v === 140;
                        return `
                            <div style="position:absolute;left:0;right:0;bottom:${bottom}px;display:flex;align-items:center;gap:4px;pointer-events:none;">
                                <span style="font-size:8px;font-weight:700;color:${isThreshold ? '#F43F5E' : '#CBD5E1'};width:24px;text-align:right;flex-shrink:0;">${v}</span>
                                <div style="flex:1;border-top:1px ${isThreshold ? 'dashed #FECACA' : 'dotted #F1F5F9'};margin-left:4px;"></div>
                            </div>
                        `;
                    }).join('')}

                    <div style="display:flex;align-items:flex-end;gap:3px;width:100%;height:${chartHeight}px;padding-left:30px;">
                        ${data.map((v, i) => {
                            const h = Math.max(4, ((v - minVal) / (maxVal - minVal)) * chartHeight);
                            const isAbove = v > threshold;
                            const isLast = i === data.length - 1;
                            return `
                                <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;position:relative;">
                                    ${isLast ? `<div style="position:absolute;top:${chartHeight - h - 22}px;font-size:9px;font-weight:900;color:${isAbove ? '#EF4444' : '#10B981'};white-space:nowrap;">${v}</div>` : ''}
                                    <div style="width:100%;height:${h}px;border-radius:6px 6px 2px 2px;background:${isAbove ? 'linear-gradient(0deg,#F43F5E,#FB7185)' : 'linear-gradient(0deg,#3B82F6,#60A5FA)'};${isAbove ? 'box-shadow:0 -4px 10px rgba(244,63,94,0.2);' : ''}${isLast ? 'outline:2px solid rgba(59,130,246,0.3);' : ''}transition:height 0.5s ease;"></div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div style="display:flex;align-items:center;gap:6px;margin-top:10px;padding:6px 10px;background:#FFF1F2;border-radius:8px;border:1px dashed #FECDD3;">
                    <div style="width:20px;height:1px;border-top:2px dashed #F43F5E;"></div>
                    <span style="font-size:9px;font-weight:900;color:#E11D48;text-transform:uppercase;letter-spacing:1px;">Seuil hypertension : 135 mmHg</span>
                </div>
            </div>
            <script>if (typeof lucide !== 'undefined') lucide.createIcons();</script>
        `;
    },

    TimelineCardTemplate: (patient) => {
        if (!patient) {
            return `
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;opacity:0.5;text-align:center;height:100%;">
                    <div style="width:48px;height:48px;background:#FFFBEB;border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;">
                        <i data-lucide="clock" style="width:20px;height:20px;color:#FCD34D;"></i>
                    </div>
                    <p style="font-size:10px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">En attente</p>
                    <p style="font-size:11px;color:#CBD5E1;font-style:italic;">Selectionnez un patient</p>
                </div>
            `;
        }

        const timeline = patient.timeline || [];
        const recentEvents = timeline.slice(0, 4);
        const score = patient.vitaliaScore || 72;
        const scoreColor = score >= 75 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';
        const scoreLabel = score >= 75 ? 'Bon' : score >= 50 ? 'Moyen' : 'Critique';
        const scoreBg = score >= 75 ? '#ECFDF5' : score >= 50 ? '#FFFBEB' : '#FEF2F2';

        const typeConfig = {
            'Consultation': { icon: 'stethoscope', color: '#6366F1', bg: '#EEF2FF' },
            'Lab result':   { icon: 'flask-conical', color: '#0EA5E9', bg: '#F0F9FF' },
            'Prescription': { icon: 'pill', color: '#10B981', bg: '#ECFDF5' },
            'Imaging':      { icon: 'scan', color: '#8B5CF6', bg: '#F5F3FF' },
            'Hospitalization': { icon: 'hospital', color: '#EF4444', bg: '#FEF2F2' },
        };

        const eventsHtml = recentEvents.length > 0
            ? recentEvents.map((ev, i) => {
                const cfg = typeConfig[ev.type] || { icon:'calendar', color:'#64748B', bg:'#F8FAFC' };
                const isLast = i === recentEvents.length - 1;
                return `
                    <div style="display:flex;align-items:flex-start;gap:12px;">
                        <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;">
                            <div style="width:32px;height:32px;border-radius:10px;background:${cfg.bg};border:1px solid ${cfg.color}22;display:flex;align-items:center;justify-content:center;">
                                <i data-lucide="${cfg.icon}" style="width:14px;height:14px;color:${cfg.color};"></i>
                            </div>
                            ${!isLast ? `<div style="width:2px;height:16px;background:linear-gradient(${cfg.color},#F1F5F9);margin-top:2px;border-radius:2px;"></div>` : ''}
                        </div>
                        <div style="flex:1;min-width:0;">
                            <div style="font-size:11px;font-weight:800;color:#1E293B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${ev.title}</div>
                            <div style="font-size:9px;font-weight:700;color:#94A3B8;margin-top:1px;">${ev.date}</div>
                        </div>
                        <span style="flex-shrink:0;font-size:8px;font-weight:900;color:${cfg.color};background:${cfg.bg};padding:2px 7px;border-radius:8px;text-transform:uppercase;letter-spacing:0.5px;">${ev.type.replace('Lab result','Labo').replace('Prescription','Rx').replace('Consultation','Consult.').replace('Imaging','Imagerie').replace('Hospitalization','Hospit.')}</span>
                    </div>
                `;
            }).join('')
            : `<div style="padding:24px;text-align:center;color:#CBD5E1;font-size:11px;font-style:italic;">Aucun historique disponible.</div>`;

        return `
            <div style="display:flex;flex-direction:column;height:100%;">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,#F59E0B,#D97706);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(245,158,11,0.3);">
                            <i data-lucide="history" style="width:16px;height:16px;color:white;"></i>
                        </div>
                        <div>
                            <div style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1.5px;">Dossier Medical</div>
                            <div style="font-size:14px;font-weight:900;color:#0F172A;letter-spacing:-0.3px;">Historique</div>
                        </div>
                    </div>
                    <div style="display:flex;flex-direction:column;align-items:center;padding:8px 12px;background:${scoreBg};border-radius:14px;border:1px solid ${scoreColor}33;">
                        <span style="font-size:20px;font-weight:900;color:${scoreColor};letter-spacing:-1px;line-height:1;">${score}</span>
                        <span style="font-size:8px;font-weight:800;color:${scoreColor};opacity:0.8;">${scoreLabel}</span>
                    </div>
                </div>

                <div style="flex:1;display:flex;flex-direction:column;gap:12px;overflow:hidden;">
                    <div style="font-size:9px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:2px;margin-bottom:4px;">Evenements recents</div>
                    ${eventsHtml}
                </div>

                <div style="padding-top:16px;margin-top:auto;display:flex;flex-direction:column;gap:8px;">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                        <div style="padding:8px 10px;background:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0;">
                            <div style="font-size:8px;font-weight:900;color:#94A3B8;text-transform:uppercase;">Consultations</div>
                            <div style="font-size:16px;font-weight:900;color:#0F172A;">${timeline.filter(e=>e.type==='Consultation').length || 3}</div>
                        </div>
                        <div style="padding:8px 10px;background:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0;">
                            <div style="font-size:8px;font-weight:900;color:#94A3B8;text-transform:uppercase;">Evenements</div>
                            <div style="font-size:16px;font-weight:900;color:#0F172A;">${timeline.length || 6}</div>
                        </div>
                    </div>
                    <button style="width:100%;padding:12px;background:linear-gradient(135deg,#4F46E5,#6366F1);border:none;border-radius:14px;color:#fff;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:1.5px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 6px 20px rgba(99,102,241,0.3);transition:all 0.2s;" onclick="openMedicalTimeline()" onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 8px 24px rgba(99,102,241,0.4)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 6px 20px rgba(99,102,241,0.3)'">
                        <i data-lucide="external-link" style="width:14px;height:14px;"></i>
                        Voir l'historique complet
                    </button>
                </div>
            </div>
            <script>if (typeof lucide !== 'undefined') lucide.createIcons();</script>
        `;
    },

    OrdonnanceModalTemplate: (patient) => {
        const currentDate = new Date().toLocaleDateString('fr-FR');
        return `
            <div class="modal-overlay animate-fade-in" id="ordonnance-overlay" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(15,23,42,0.6);backdrop-filter:blur(8px);z-index:99999;display:flex;align-items:center;justify-content:center;padding:2vh;overflow-y:auto;" onclick="if(event.target===this) this.remove()">
                
                <div class="modal-content animate-slide-up" style="background:#F7F9FB;width:100%;max-width:550px;border-radius:24px;box-shadow:0 20px 40px rgba(0,0,0,0.1);padding:32px;position:relative;margin:auto;">
                    
                    <!-- Paper Container -->
                    <div style="background:#ffffff;border-radius:16px;box-shadow:0 8px 20px rgba(0,0,0,0.03);padding:32px;position:relative;border:1px solid #E2E8F0;">
                        
                        <!-- Header -->
                        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;">
                            <div>
                                <div style="font-size:11px;font-weight:900;color:#1E293B;letter-spacing:1px;margin-bottom:8px;">STRUCTURE MÉDICALE</div>
                                <div style="font-size:16px;font-weight:900;color:#0F172A;margin-bottom:4px;">Dr. Esdras</div>
                                <div style="font-size:13px;color:#64748B;">Médecine spécialisée</div>
                            </div>
                            <div style="text-align:right;">
                                <div style="display:inline-block;background:#64748B;color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;margin-bottom:12px;">en_cours</div>
                                <div style="font-size:18px;font-weight:900;color:#0F172A;letter-spacing:0.5px;margin-bottom:6px;">ORDONNANCE</div>
                                <div style="font-size:12px;color:#64748B;display:flex;align-items:center;justify-content:flex-end;gap:6px;">
                                    <i data-lucide="calendar" style="width:14px;height:14px;"></i> ${currentDate}
                                </div>
                            </div>
                        </div>

                        <!-- Patient Info -->
                        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:24px;">
                            <div>
                                <div style="font-size:12px;color:#64748B;margin-bottom:4px;">Patient</div>
                                <div style="font-size:15px;font-weight:900;color:#0F172A;">${patient.name}</div>
                            </div>
                            <div style="text-align:right;">
                                <div style="font-size:12px;color:#64748B;margin-bottom:4px;">Ã‚ge / Sexe</div>
                                <div style="font-size:14px;font-weight:800;color:#0F172A;">${patient.age} ans &bull; ${patient.gender === 'M' ? 'Masculin' : 'Féminin'}</div>
                            </div>
                        </div>

                        <!-- Separator -->
                        <div style="border-bottom:3px dotted #E2E8F0;margin-bottom:24px;"></div>

                        <!-- Title -->
                        <h4 style="font-size:15px;font-weight:900;color:#0F172A;margin-bottom:20px;">Médicaments prescrits</h4>

                        <!-- Table -->
                        <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
                            <thead>
                                <tr style="border-bottom:1px solid #F1F5F9;">
                                    <th style="text-align:left;padding-bottom:12px;font-size:12px;font-weight:700;color:#64748B;">Médicament</th>
                                    <th style="text-align:left;padding-bottom:12px;font-size:12px;font-weight:700;color:#64748B;">Dosage</th>
                                    <th style="text-align:left;padding-bottom:12px;font-size:12px;font-weight:700;color:#64748B;">Posologie</th>
                                    <th style="text-align:right;padding-bottom:12px;font-size:12px;font-weight:700;color:#64748B;width:60px;">P.U<br/>(XOF)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom:1px solid #F8FAFC;">
                                    <td style="padding:16px 0;width:30%;">
                                        <div style="font-size:15px;font-weight:900;color:#0F172A;margin-bottom:4px;">Doliprane</div>
                                        <div style="font-size:12px;color:#94A3B8;">Pendant le repas</div>
                                    </td>
                                    <td style="padding:16px 0;width:20%;">
                                        <div style="font-size:14px;font-weight:900;color:#0F172A;margin-bottom:4px;">1000mg</div>
                                        <div style="font-size:12px;color:#94A3B8;">5 jours</div>
                                    </td>
                                    <td style="padding:16px 0;font-size:14px;color:#334155;font-weight:500;width:30%;">
                                        1 matin, 1 soir
                                    </td>
                                    <td style="padding:16px 0;text-align:right;font-size:14px;font-weight:900;color:#0F172A;width:20%;">
                                        2500<br/>XOF
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:16px 0;">
                                        <div style="font-size:15px;font-weight:900;color:#0F172A;margin-bottom:4px;">Spasfon</div>
                                        <div style="font-size:12px;color:#94A3B8;">Boire beaucoup d'eau</div>
                                    </td>
                                    <td style="padding:16px 0;">
                                        <div style="font-size:14px;font-weight:900;color:#0F172A;margin-bottom:4px;">80mg</div>
                                        <div style="font-size:12px;color:#94A3B8;">3 jours</div>
                                    </td>
                                    <td style="padding:16px 0;font-size:14px;color:#334155;font-weight:500;">
                                        2 comprimés si<br/>douleur
                                    </td>
                                    <td style="padding:16px 0;text-align:right;font-size:14px;font-weight:900;color:#0F172A;">
                                        1800<br/>XOF
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Footer Info -->
                        <div style="display:flex;justify-content:space-between;align-items:flex-end;">
                            <div style="border:1px solid #E2E8F0;border-radius:12px;padding:16px;width:60%;background:#F8FAFC;">
                                <div style="font-size:13px;font-weight:900;color:#0F172A;margin-bottom:8px;">Observations</div>
                                <div style="font-size:13px;color:#475569;line-height:1.5;">Suivre le traitement strictement selon la posologie indiquée.</div>
                            </div>
                            <div style="width:35%;text-align:center;">
                                <div style="font-size:12px;color:#64748B;margin-bottom:8px;">Signature</div>
                                <div style="border-bottom:1px solid #CBD5E1;margin-bottom:8px;"></div>
                                <div style="font-size:14px;font-weight:900;color:#0F172A;">Dr. Esdras</div>
                            </div>
                        </div>

                    </div>
                    
                    <!-- Confidential string -->
                    <div style="text-align:center;font-size:11px;color:#94A3B8;font-style:italic;margin-top:16px;margin-bottom:24px;">
                        Ce document est confidentiel. Conservation recommandée 6 mois.
                    </div>

                    <!-- Actions -->
                    <div style="display:flex;gap:12px;">
                        <button onclick="document.getElementById('ordonnance-overlay').remove()" style="flex:1;padding:16px;background:#fff;border:2px solid #E2E8F0;border-radius:16px;font-size:14px;font-weight:800;color:#475569;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='#fff'">
                            Modifier
                        </button>
                        <button onclick="document.getElementById('ordonnance-overlay').remove(); alert('L\\'ordonnance a été validée et envoyée avec succès au patient et à la pharmacie partenaire !')" style="flex:1.5;padding:16px;background:#00A693;border:none;border-radius:16px;font-size:14px;font-weight:900;color:#fff;cursor:pointer;box-shadow:0 8px 20px rgba(0,166,147,0.3);transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:8px;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                            <i data-lucide="send" style="width:16px;height:16px;"></i> Valider et Envoyer
                        </button>
                    </div>

                </div>
            </div>
        `;
    },

    TeleconsultationViewTemplate: (patient) => {
        return `
            <div class="modal-overlay animate-fade-in" id="teleconsultation-overlay" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(15,23,42,0.8);backdrop-filter:blur(12px);z-index:99999;display:flex;align-items:center;justify-content:center;padding:2vh 2vw;" onclick="if(event.target===this) this.remove()">
                <div class="modal-content animate-slide-up" style="background:#F7F9FB;width:100%;max-width:1700px;height:96vh;border-radius:32px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);border:1px solid #334155;">
                    
                    <!-- Top Bar -->
                    <div style="height:64px;background:#ffffff;border-bottom:1px solid #E2E8F0;display:flex;align-items:center;justify-content:space-between;padding:0 32px;flex-shrink:0;">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div style="width:32px;height:32px;background:#E6F6F4;border-radius:8px;display:flex;align-items:center;justify-content:center;">
                                <i data-lucide="video" style="width:16px;height:16px;color:#00A693;"></i>
                            </div>
                            <span style="font-size:16px;font-weight:900;color:#0F172A;letter-spacing:-0.2px;">Téléconsultation IA &bull; ${patient.name}</span>
                        </div>
                        <div style="display:flex;align-items:center;gap:16px;">
                            <div style="display:flex;align-items:center;gap:6px;background:#FEE2E2;border:1px solid #FECACA;padding:6px 12px;border-radius:20px;">
                                <div style="width:8px;height:8px;background:#EF4444;border-radius:50%;animation:pulse 2s infinite;"></div>
                                <span id="teleconsultation-timer" style="font-size:11px;font-weight:800;color:#DC2626;text-transform:uppercase;">En Direct : 04:22</span>
                            </div>
                            <button onclick="window.terminateTeleconsultation('${patient.id}')" style="padding: 10px 24px; border-radius: 12px; border: 1.5px solid #E2E8F0; background: #fff; cursor: pointer; color: #64748B; font-size: 14px; font-weight: 800; transition: all 0.2s;" onmouseover="this.style.background='#F8FAFC';this.style.color='#0F172A';">
                                Terminer
                            </button>
                        </div>
                    </div>

                    <!-- 4-Zone Layout -->
                    <div id="teleconsultation-grid" style="display: grid; grid-template-columns: 280px 1fr 340px; grid-template-rows: 1fr auto; gap: 24px; height: 100%; padding: 24px; min-height:0; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
                        
                        <!-- 1. LEFT SIDEBAR: Patient Context -->
                        <div id="tc-left-panel" style="grid-row: 1 / 3; grid-column: 1; background:#ffffff; border-radius:24px; padding:24px; box-shadow:0 4px 24px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:20px; overflow-y:auto; transition: opacity 0.2s;">
                            <div style="text-align:center;">
                                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=${patient.name}" style="width:88px;height:88px;border-radius:24px;background:#F1F5F9;margin:0 auto 12px auto;display:block;border:2px solid #E2E8F0;" />
                                <h2 style="font-size:22px;font-weight:900;color:#0F172A;margin:0 0 6px 0;">${patient.name}</h2>
                                <p style="font-size:14px;font-weight:700;color:#64748B;margin:0;">${patient.age} ans &bull; ${patient.gender === 'M' ? 'Homme' : 'Femme'} &bull; Gpe ${patient.bloodType}</p>
                            </div>
                            
                            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:16px;">
                                <div style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;margin-bottom:8px;letter-spacing:1px;">Motif de Consultation</div>
                                <div style="font-size:14px;font-weight:800;color:#0F172A;line-height:1.4;">${patient.motif || 'Non spécifié'}</div>
                            </div>

                            <div>
                                <div style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;margin-bottom:10px;letter-spacing:1px;">Alertes Médicales</div>
                                <div style="display:flex;flex-direction:column;gap:8px;">
                                    ${(patient.allergies||[]).map(a => `<div style="background:#FEF2F2;border:1px solid #FECACA;color:#DC2626;padding:10px 14px;border-radius:12px;font-size:13px;font-weight:800;display:flex;align-items:center;gap:10px;"><i data-lucide="alert-circle" style="width:16px;height:16px;"></i> Allergie: ${a}</div>`).join('') || '<div style="color:#94A3B8;font-size:13px;font-weight:600;">Aucune allergie connue</div>'}
                                    ${(patient.chronicConditions||[]).map(c => `<div style="background:#FFFBEB;border:1px solid #FDE68A;color:#D97706;padding:10px 14px;border-radius:12px;font-size:13px;font-weight:800;display:flex;align-items:center;gap:10px;"><i data-lucide="activity" style="width:16px;height:16px;"></i> ${c}</div>`).join('')}
                                    ${(patient.currentTreatments||[]).map(c => `<div style="background:#F0FDF4;border:1px solid #BBF7D0;color:#059669;padding:10px 14px;border-radius:12px;font-size:13px;font-weight:800;display:flex;align-items:center;gap:10px;"><i data-lucide="pill" style="width:16px;height:16px;"></i> Tx: ${c}</div>`).join('')}
                                </div>
                            </div>

                            <div style="margin-top:auto;">
                                <div style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;margin-bottom:10px;letter-spacing:1px;">Dernières Constantes</div>
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                                    <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:14px;padding:14px;text-align:center;">
                                        <div style="font-size:22px;font-weight:900;color:#EF4444;line-height:1;">12/8</div>
                                        <div style="font-size:10px;font-weight:800;color:#64748B;text-transform:uppercase;margin-top:6px;">Tension</div>
                                    </div>
                                    <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:14px;padding:14px;text-align:center;">
                                        <div style="font-size:22px;font-weight:900;color:#3B82F6;line-height:1;">98%</div>
                                        <div style="font-size:10px;font-weight:800;color:#64748B;text-transform:uppercase;margin-top:6px;">SpO2</div>
                                    </div>
                                    <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:14px;padding:14px;text-align:center;">
                                        <div style="font-size:22px;font-weight:900;color:#F59E0B;line-height:1;">72</div>
                                        <div style="font-size:10px;font-weight:800;color:#64748B;text-transform:uppercase;margin-top:6px;">BPM</div>
                                    </div>
                                    <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:14px;padding:14px;text-align:center;">
                                        <div style="font-size:22px;font-weight:900;color:#10B981;line-height:1;">37.2</div>
                                        <div style="font-size:10px;font-weight:800;color:#64748B;text-transform:uppercase;margin-top:6px;">Temp Â°C</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <!-- 2. CENTER: Video Feed -->
                        <div id="tc-video-panel" style="grid-row: 1 / 2; grid-column: 2; position:relative; background:#0F172A; border-radius:32px; overflow:hidden; box-shadow:0 10px 40px rgba(0,0,0,0.15); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
                            <!-- Patient Video placeholder (mixkit or unsplash fallback) -->
                            <video src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-video-call-on-a-laptop-42999-large.mp4" autoplay loop muted style="width:100%; height:100%; object-fit:cover; opacity:0.95;"></video>
                            
                            <!-- Doctor PIP -->
                            <div style="position:absolute; top:24px; right:24px; width:180px; height:240px; border-radius:20px; border:3px solid rgba(255,255,255,0.8); overflow:hidden; box-shadow:0 15px 35px rgba(0,0,0,0.4); background:#0F172A;">
                                <video src="https://assets.mixkit.co/videos/preview/mixkit-doctor-with-a-stethoscope-around-his-neck-43015-large.mp4" autoplay loop muted style="width:100%; height:100%; object-fit:cover; transform:scaleX(-1);"></video>
                            </div>
                            
                            <!-- Video controls -->
                            <div style="position:absolute; bottom:32px; left:50%; transform:translateX(-50%); display:flex; gap:20px; background:rgba(15,23,42,0.6); backdrop-filter:blur(16px); padding:16px; border-radius:100px; border:1px solid rgba(255,255,255,0.1);">
                                <button style="width:56px;height:56px;border-radius:50%;background:#EF4444;border:none;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 12px rgba(239,68,68,0.4);"><i data-lucide="phone-off" style="width:24px;height:24px;"></i></button>
                                <button style="width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.15);border:none;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'"><i data-lucide="mic" style="width:24px;height:24px;"></i></button>
                                <button style="width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.15);border:none;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'"><i data-lucide="video" style="width:24px;height:24px;"></i></button>
                                <button onclick="if(window.toggleVideoSize) window.toggleVideoSize()" style="width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.15);border:none;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'"><i id="tc-maximize-icon" data-lucide="maximize" style="width:24px;height:24px;"></i></button>
                            </div>

                            <!-- Connection Status -->
                            <div style="position:absolute; top:24px; left:24px; background:rgba(15,23,42,0.6); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.1); border-radius:24px; padding:10px 16px; font-size:13px; font-weight:700; color:#fff; display:flex; align-items:center; gap:10px; box-shadow:0 4px 12px rgba(0,0,0,0.2);">
                                <div style="width:10px;height:10px;background:#10B981;border-radius:50%;box-shadow:0 0 8px #10B981;"></div>
                                HD Stable &bull; 45ms
                            </div>
                        </div>

                        <!-- 3. RIGHT SIDEBAR: AI Assistant -->
                        <div id="tc-right-panel" style="grid-row: 1 / 3; grid-column: 3; background:#ffffff; border-radius:24px; padding:24px; display:flex; flex-direction:column; gap:20px; box-shadow:0 4px 24px rgba(0,0,0,0.03); transition: opacity 0.2s;">
                            <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #F1F5F9;padding-bottom:16px;flex-shrink:0;">
                                <h3 style="font-size:18px;font-weight:900;color:#0F172A;display:flex;align-items:center;gap:10px;margin:0;">
                                    <div style="background:#E6F6F4;padding:8px;border-radius:8px;"><i data-lucide="bot" style="color:#00A693;width:18px;height:18px;"></i></div> 
                                    Dr. IA Esdras
                                </h3>
                                <span style="display:flex;align-items:center;gap:6px;font-size:12px;color:#10B981;font-weight:800;background:#ECFDF5;padding:6px 12px;border-radius:20px;">
                                    <div style="width:6px;height:6px;background:#10B981;border-radius:50%;animation:pulse 2s infinite;"></div> En écoute
                                </span>
                            </div>
                            
                            <!-- Live Transcription -->
                            <div id="teleconsultation-chat" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:16px;padding-right:8px;min-height:0;scroll-behavior:smooth;">
                                <div style="background:#F8FAFC;padding:16px;border-radius:16px;border-left:4px solid #94A3B8;">
                                    <strong style="color:#0F172A;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;display:block;">${patient.name}</strong>
                                    <span style="font-size:14px;color:#334155;line-height:1.5;font-weight:500;">Oui docteur, la douleur est principalement localisée à l'arrière du cou et irradie sur les côtés. Ã‡a fait environ 3 jours.</span>
                                </div>
                                <div style="background:#E6F6F4;padding:16px;border-radius:16px;border-left:4px solid #00A693;">
                                    <strong style="color:#00A693;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;display:block;">Vous</strong>
                                    <span style="font-size:14px;color:#134E4A;line-height:1.5;font-weight:500;">Avez-vous remarqué des problèmes de vue ou des nausées pendant ces crises ?</span>
                                </div>
                                <div style="background:#F8FAFC;padding:16px;border-radius:16px;border-left:4px solid #94A3B8;">
                                    <strong style="color:#0F172A;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;display:block;">${patient.name}</strong>
                                    <span style="font-size:14px;color:#334155;line-height:1.5;font-weight:500;">Un peu de sensibilité à la lumière, oui. Mais pas de nausées.</span>
                                </div>
                            </div>
                            
                            <!-- AI Suggestions -->
                            <div style="background:#FFFBEB;border:2px solid #FDE68A;border-radius:20px;padding:20px;flex-shrink:0;box-shadow:0 4px 15px rgba(245,158,11,0.05);">
                                <div style="display:flex;align-items:center;gap:10px;font-size:14px;font-weight:900;color:#D97706;margin-bottom:12px;">
                                    <div style="background:#FEF3C7;padding:6px;border-radius:8px;"><i data-lucide="lightbulb" style="width:16px;height:16px;"></i></div> 
                                    Suggestions d'Analyse IA
                                </div>
                                <ul style="margin:0;padding-left:24px;font-size:14px;font-weight:600;color:#92400E;line-height:1.6;display:flex;flex-direction:column;gap:6px;">
                                    <li>Pensez à évoquer une <strong style="text-decoration:underline;">céphalée de tension</strong> ou potentiellement une migraine.</li>
                                    <li>Demandez si la douleur est pulsatile.</li>
                                    <li>Vérifiez la qualité du sommeil récente.</li>
                                </ul>
                            </div>
                            </div>
                        </div>

                        <!-- 4. BOTTOM PANEL: Medical Actions -->
                        <div id="tc-bottom-panel" style="grid-row: 2 / 3; grid-column: 2; background:#ffffff; border-radius:24px; padding:24px; box-shadow:0 4px 24px rgba(0,0,0,0.03); display:flex; gap:24px; align-items:center; transition: opacity 0.2s;">
                            <div style="flex:1;">
                                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                                    <label style="font-size:12px;font-weight:900;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;">Notes Cliniques (Générées par IA)</label>
                                    <span style="font-size:11px;font-weight:700;color:#10B981;background:#ECFDF5;padding:4px 10px;border-radius:12px;">Mise à jour en temps réel</span>
                                </div>
                                <textarea id="teleconsultation-notes" style="width:100%;height:64px;background:#F8FAFC;border:2px solid #E2E8F0;border-radius:16px;padding:12px 16px;font-size:14px;color:#0F172A;font-weight:600;outline:none;resize:none;transition:box-shadow 0.3s;scroll-behavior:smooth;">Céphalées cervico-occipitales bilatérales depuis 72h. Photophobie légère. Pas de nausées.</textarea>
                            </div>
                            <div style="display:flex;gap:16px;">
                                <button onclick="if(window.openOrdonnanceModal) window.openOrdonnanceModal('${patient.id}')" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:#F0FDF4;border:2px solid #BBF7D0;color:#059669;width:96px;height:96px;border-radius:20px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                                    <i data-lucide="pill" style="width:24px;height:24px;"></i>
                                    <span style="font-size:11px;font-weight:900;text-transform:uppercase;">Ordonnance</span>
                                </button>
                                <button style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:#EFF6FF;border:2px solid #BFDBFE;color:#2563EB;width:96px;height:96px;border-radius:20px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                                    <i data-lucide="flask-conical" style="width:24px;height:24px;"></i>
                                    <span style="font-size:11px;font-weight:900;text-transform:uppercase;">Bilan Labo</span>
                                </button>
                                <button style="display:flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,#00A693,#008A7A);border:none;color:#fff;height:96px;padding:0 28px;border-radius:20px;cursor:pointer;font-weight:900;font-size:14px;text-transform:uppercase;letter-spacing:1px;box-shadow:0 8px 20px rgba(0,166,147,0.3);transition:all 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                                    <i data-lucide="file-check" style="width:20px;height:20px;"></i>
                                    Générer<br/>Rapport
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <style>
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
        `;
    },

    MedicalTimelineView: (patient) => {
        const timeline = patient.timeline || [];
        
        // Colors & Icons
        const typeConfig = {
            'Consultation':     { icon: 'stethoscope', color: '#00A693', bg: '#E6F6F4' }, // Vitalia Green
            'Lab result':       { icon: 'flask-conical', color: '#2563EB', bg: '#DBEAFE' }, // Blue
            'Prescription':     { icon: 'pill', color: '#EA580C', bg: '#FFEDD5' }, // Orange
            'Imaging':          { icon: 'scan', color: '#7C3AED', bg: '#EDE9FE' }, // Purple
            'Hospitalization':  { icon: 'hospital', color: '#DC2626', bg: '#FEE2E2' }, // Red
        };

        // --- LEFT PANEL HTML ---
        const leftPanel = `
            <div style="background:#ffffff;border-radius:24px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,0.03);display:flex;flex-direction:column;gap:20px;height:100%;min-height:0;overflow-y:auto;">
                <!-- Profile -->
                <div style="display:flex;align-items:center;gap:16px;">
                    <div style="width:56px;height:56px;border-radius:16px;background:#F1F5F9;overflow:hidden;flex-shrink:0;">
                        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=${patient.name}" style="width:100%;height:100%;object-fit:cover;" />
                    </div>
                    <div>
                        <h2 style="font-size:18px;font-weight:800;color:#0F172A;margin:0 0 4px 0;line-height:1.2;">${patient.name}</h2>
                        <div style="font-size:12px;font-weight:600;color:#64748B;">${patient.age} ans &bull; ${patient.gender === 'M' ? 'Homme' : 'Femme'} &bull; ${patient.bloodType}</div>
                    </div>
                </div>

                <!-- Info blocks -->
                <div style="display:flex;flex-direction:column;gap:16px;">
                    <div>
                        <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#94A3B8;letter-spacing:1px;margin-bottom:6px;">Diagnostic Principal</div>
                        <div style="font-size:13px;font-weight:600;color:#1E293B;background:#F8FAFC;padding:10px 12px;border-radius:12px;border:1px solid #F1F5F9;">
                            ${patient.mainDiagnosis || 'Non spécifié'}
                        </div>
                    </div>
                    
                    <div>
                        <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#94A3B8;letter-spacing:1px;margin-bottom:6px;">Traitements Actuels</div>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            ${(patient.currentTreatments || []).map(t => `
                                <div style="font-size:12px;font-weight:600;color:#334155;background:#F8FAFC;padding:8px 12px;border-radius:8px;display:flex;align-items:center;gap:8px;">
                                    <i data-lucide="pill" style="width:12px;height:12px;color:#00A693;"></i> ${t}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                        <div>
                            <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#94A3B8;letter-spacing:1px;margin-bottom:6px;">Allergies</div>
                            <div style="display:flex;flex-wrap:wrap;gap:4px;">
                                ${(patient.allergies || []).map(a => `<span style="font-size:11px;font-weight:700;color:#DC2626;background:#FEE2E2;padding:4px 8px;border-radius:6px;">${a}</span>`).join('') || '<span style="font-size:11px;color:#94A3B8;">Aucune</span>'}
                            </div>
                        </div>
                        <div>
                            <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#94A3B8;letter-spacing:1px;margin-bottom:6px;">Chroniques</div>
                            <div style="display:flex;flex-wrap:wrap;gap:4px;">
                                ${(patient.chronicConditions || []).map(c => `<span style="font-size:11px;font-weight:700;color:#D97706;background:#FEF3C7;padding:4px 8px;border-radius:6px;">${c}</span>`).join('') || '<span style="font-size:11px;color:#94A3B8;">Aucune</span>'}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI Summary -->
                <div style="margin-top:auto;background:linear-gradient(145deg,#F0FDF4,#E6F6F4);padding:16px;border-radius:16px;border:1px solid #CCFBF1;position:relative;overflow:hidden;">
                    <i data-lucide="sparkles" style="position:absolute;top:-10px;right:-10px;width:60px;height:60px;color:#00A693;opacity:0.05;"></i>
                    <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
                        <i data-lucide="sparkles" style="width:14px;height:14px;color:#00A693;"></i>
                        <span style="font-size:11px;font-weight:800;color:#00A693;text-transform:uppercase;letter-spacing:0.5px;">Synthèse IA Vitalia</span>
                    </div>
                    <p style="font-size:12px;color:#134E4A;line-height:1.6;margin:0;font-weight:500;">
                        ${patient.aiSummary || 'Aucune synthèse générée.'}
                    </p>
                </div>
            </div>
        `;

        // --- CENTER PANEL (TIMELINE) ---
        const centerPanel = `
            <div style="display:flex;flex-direction:column;height:100%;min-height:0;">
                <!-- Header -->
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-shrink:0;">
                    <div>
                        <h1 style="font-size:24px;font-weight:900;color:#0F172A;margin:0 0 4px 0;letter-spacing:-0.5px;">Historique Médical</h1>
                        <div style="font-size:13px;font-weight:500;color:#64748B;">Dossier complet et chronologique</div>
                    </div>
                    <button onclick="alert('Module d\'ajout d\'événement clinique en préparation...')" style="background:#00A693;color:white;border:none;border-radius:12px;padding:12px 20px;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:8px;box-shadow:0 4px 12px rgba(0,166,147,0.25);transition:all 0.2s;" onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 6px 16px rgba(0,166,147,0.3)';" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(0,166,147,0.25)';">
                        <i data-lucide="plus" style="width:16px;height:16px;"></i> Ajouter événement
                    </button>
                </div>

                <!-- Filters -->
                <div style="display:flex;gap:8px;margin-bottom:24px;overflow-x:auto;padding-bottom:4px;">
                    <button onclick="window.filterMedicalTimeline('Tous', this)" style="background:#0F172A;color:white;border:none;border-radius:20px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.2s;">Tous</button>
                    <button onclick="window.filterMedicalTimeline('Consultation', this)" style="background:#fff;color:#64748B;border:1px solid #E2E8F0;border-radius:20px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.2s;">Consultations</button>
                    <button onclick="window.filterMedicalTimeline('Lab result', this)" style="background:#fff;color:#64748B;border:1px solid #E2E8F0;border-radius:20px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.2s;">Laboratoire</button>
                    <button onclick="window.filterMedicalTimeline('Imaging', this)" style="background:#fff;color:#64748B;border:1px solid #E2E8F0;border-radius:20px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.2s;">Imagerie</button>
                    <button onclick="window.filterMedicalTimeline('Prescription', this)" style="background:#fff;color:#64748B;border:1px solid #E2E8F0;border-radius:20px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.2s;">Ordonnances</button>
                </div>

                <!-- Timeline Scroll Area -->
                <div style="flex:1;overflow-y:auto;padding-right:12px;position:relative;min-height:0;">
                    <div style="position:absolute;left:24px;top:0;bottom:0;width:2px;background:#E2E8F0;border-radius:2px;z-index:0;"></div>

                    <div style="display:flex;flex-direction:column;gap:24px;position:relative;z-index:1;">
                        ${timeline.map((ev, idx) => {
                            const cfg = typeConfig[ev.type] || { icon:'calendar', color:'#64748B', bg:'#F1F5F9' };
                            return `
                                <div class="medical-timeline-event" data-event-type="${ev.type}" style="display:flex;gap:20px;align-items:flex-start;group;transition:all 0.3s ease;">
                                    <div style="width:48px;height:48px;border-radius:16px;background:${cfg.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 0 0 6px #F7F9FB;position:relative;z-index:2;">
                                        <i data-lucide="${cfg.icon}" style="width:20px;height:20px;color:${cfg.color};"></i>
                                    </div>

                                    <div style="flex:1;background:#ffffff;border:1px solid #F1F5F9;border-radius:20px;padding:20px;box-shadow:0 4px 20px rgba(0,0,0,0.02);transition:all 0.2s;cursor:pointer;" onmouseover="this.style.boxShadow='0 8px 30px rgba(0,0,0,0.05)';this.style.borderColor='#E2E8F0'" onmouseout="this.style.boxShadow='0 4px 20px rgba(0,0,0,0.02)';this.style.borderColor='#F1F5F9'">
                                        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
                                            <div>
                                                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                                                    <span style="font-size:11px;font-weight:800;color:${cfg.color};background:${cfg.bg};padding:4px 10px;border-radius:8px;text-transform:uppercase;letter-spacing:0.5px;">${ev.type.replace('Lab result','Laboratoire').replace('Consultation','Consultation').replace('Hospitalization','Hospit.').replace('Imaging','Imagerie').replace('Prescription','Ordonnance')}</span>
                                                    <span style="font-size:12px;font-weight:600;color:#94A3B8;">${ev.date}</span>
                                                </div>
                                                <h3 style="font-size:16px;font-weight:800;color:#0F172A;margin:0;">${ev.title}</h3>
                                            </div>
                                            <button onclick="alert('Options avancées non disponibles en démo.')" style="background:transparent;border:none;color:#CBD5E1;cursor:pointer;"><i data-lucide="more-horizontal" style="width:20px;height:20px;"></i></button>
                                        </div>

                                        <p style="font-size:13px;color:#475569;line-height:1.6;margin:0 0 16px 0;">${ev.summary || ev.details}</p>

                                        <div style="display:flex;align-items:center;gap:12px;border-top:1px solid #F8FAFC;padding-top:16px;">
                                            <button onclick="alert('Détails cliniques en cours de développement...')" style="background:#F8FAFC;border:1px solid #E2E8F0;color:#475569;border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all 0.2s;" onmouseover="this.style.background='#F1F5F9'" onmouseout="this.style.background='#F8FAFC'">
                                                <i data-lucide="file-text" style="width:14px;height:14px;"></i> Détails
                                            </button>
                                            <button onclick="alert('Document joint non disponible en démonstration.')" style="background:#F8FAFC;border:1px solid #E2E8F0;color:#475569;border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all 0.2s;" onmouseover="this.style.background='#F1F5F9'" onmouseout="this.style.background='#F8FAFC'">
                                                <i data-lucide="paperclip" style="width:14px;height:14px;"></i> Doc
                                            </button>
                                            ${ev.doctor ? `<div style="margin-left:auto;font-size:11px;font-weight:600;color:#94A3B8;display:flex;align-items:center;gap:6px;"><i data-lucide="user" style="width:12px;height:12px;"></i> Dr. ${ev.doctor}</div>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;

        // --- RIGHT PANEL (HEALTH TRENDS) ---
        const drawSvgLine = (data, color, w, h) => {
            if(!data || data.length < 2) return '';
            const min = Math.min(...data);
            const max = Math.max(...data);
            const range = (max - min) || 1;
            const pts = data.map((v, i) => {
                const x = (i / (data.length - 1)) * w;
                const y = h - ((v - min) / range) * h * 0.8 - h * 0.1; // padding 10%
                return `${x},${y}`;
            }).join(' ');
            return `
                <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="overflow:visible;display:block;">
                    <polyline fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="${pts}" />
                    <circle cx="${w}" cy="${h - ((data[data.length-1] - min) / range) * h * 0.8 - h * 0.1}" r="4" fill="${color}" stroke="#fff" stroke-width="2" />
                </svg>
            `;
        };

        const currentTrends = patient.trends || { bp: [120, 125, 122], weight: [70, 70, 69.5], glucose: [1.1, 1.2, 1.05], heartRate: [72, 75, 70] };

        const renderTrendCard = (title, value, unit, data, color, icon) => `
            <div style="background:#ffffff;border-radius:16px;padding:16px;box-shadow:0 4px 15px rgba(0,0,0,0.02);border:1px solid #F1F5F9;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                        <div style="width:28px;height:28px;border-radius:8px;background:${color}15;display:flex;align-items:center;justify-content:center;">
                            <i data-lucide="${icon}" style="width:14px;height:14px;color:${color};"></i>
                        </div>
                        <span style="font-size:12px;font-weight:700;color:#64748B;">${title}</span>
                    </div>
                </div>
                <div style="display:flex;align-items:flex-end;justify-content:space-between;">
                    <div>
                        <span style="font-size:22px;font-weight:900;color:#0F172A;letter-spacing:-0.5px;line-height:1;">${value}</span>
                        <span style="font-size:11px;font-weight:600;color:#94A3B8;margin-left:2px;">${unit}</span>
                    </div>
                    <div style="width:80px;height:30px;">
                        ${drawSvgLine(data, color, 80, 30)}
                    </div>
                </div>
            </div>
        `;

        const lastBP = currentTrends.bp ? currentTrends.bp[currentTrends.bp.length-1] : '--';
        const lastWeight = currentTrends.weight ? currentTrends.weight[currentTrends.weight.length-1] : '--';
        const lastGluc = currentTrends.glucose ? currentTrends.glucose[currentTrends.glucose.length-1] : '--';
        const lastHR = currentTrends.heartRate ? currentTrends.heartRate[currentTrends.heartRate.length-1] : '--';

        const rightPanel = `
            <div style="display:flex;flex-direction:column;height:100%;min-height:0;gap:16px;overflow-y:auto;">
                <h3 style="font-size:14px;font-weight:800;text-transform:uppercase;color:#94A3B8;letter-spacing:1px;margin:10px 0 0 0;">Tendances vitales</h3>
                ${renderTrendCard('Tension', lastBP, 'mmHg', currentTrends.bp, '#EF4444', 'heart-pulse')}
                ${renderTrendCard('Glycémie', lastGluc, 'g/L', currentTrends.glucose, '#3B82F6', 'droplets')}
                ${renderTrendCard('Fréquence C.', lastHR, 'bpm', currentTrends.heartRate, '#F59E0B', 'activity')}
                ${renderTrendCard('Poids', lastWeight, 'kg', currentTrends.weight, '#10B981', 'scale')}

                <div style="margin-top:auto;padding:20px;background:#F8FAFC;border-radius:16px;border:1px dashed #CBD5E1;text-align:center;">
                    <i data-lucide="bar-chart-2" style="width:24px;height:24px;color:#94A3B8;margin:0 auto 10px auto;"></i>
                    <p style="font-size:12px;color:#64748B;font-weight:500;margin:0;">L'analyse prédictive suggère un risque cardiovasculaire en baisse.</p>
                </div>
            </div>
        `;

        // --- FULL MODAL WRAPPER ---
        return `
            <div class="modal-overlay animate-fade-in" id="medical-timeline-overlay" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(15,23,42,0.4);backdrop-filter:blur(6px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:2vh 2vw;" onclick="if(event.target===this) this.remove()">
                <div class="modal-content animate-slide-up" style="background:#F7F9FB;width:100%;max-width:1400px;height:96vh;border-radius:32px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,0.3);border:1px solid #E2E8F0;">
                    
                    <!-- Top Bar -->
                    <div style="height:64px;background:#ffffff;border-bottom:1px solid #E2E8F0;display:flex;align-items:center;justify-content:space-between;padding:0 32px;flex-shrink:0;">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div style="width:32px;height:32px;background:#E6F6F4;border-radius:8px;display:flex;align-items:center;justify-content:center;">
                                <i data-lucide="layout-template" style="width:16px;height:16px;color:#00A693;"></i>
                            </div>
                            <span style="font-size:14px;font-weight:800;color:#0F172A;letter-spacing:-0.2px;">Vitalia EMR</span>
                        </div>
                        <button onclick="document.getElementById('medical-timeline-overlay').remove()" style="width:40px;height:40px;border-radius:50%;background:#F8FAFC;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#64748B;transition:all 0.2s;" onmouseover="this.style.background='#E2E8F0';this.style.color='#0F172A';" onmouseout="this.style.background='#F8FAFC';this.style.color='#64748B';">
                            <i data-lucide="x" style="width:20px;height:20px;"></i>
                        </button>
                    </div>

                    <!-- 3-Column Layout -->
                    <div style="display:grid;grid-template-columns:300px 1fr 300px;gap:32px;flex:1;min-height:0;padding:32px;">
                        <!-- Left Panel -->
                        ${leftPanel}

                        <!-- Center Panel -->
                        ${centerPanel}

                        <!-- Right Panel -->
                        ${rightPanel}
                    </div>
                </div>
                <script>
                    window.filterMedicalTimeline = function(type, btn) {
                        const container = btn.parentElement;
                        Array.from(container.children).forEach(b => {
                            b.style.background = '#fff';
                            b.style.color = '#64748B';
                            b.style.border = '1px solid #E2E8F0';
                        });
                        btn.style.background = '#0F172A';
                        btn.style.color = 'white';
                        btn.style.border = 'none';

                        const events = document.querySelectorAll('.medical-timeline-event');
                        events.forEach(el => {
                            if (type === 'Tous') {
                                el.style.display = 'flex';
                                setTimeout(() => el.style.opacity = '1', 10);
                            } else {
                                if (el.getAttribute('data-event-type') === type) {
                                    el.style.display = 'flex';
                                    setTimeout(() => el.style.opacity = '1', 10);
                                } else {
                                    el.style.opacity = '0';
                                    setTimeout(() => el.style.display = 'none', 300);
                                }
                            }
                        });
                    };
                </script>
            </div>
        `;
    },

    Statistics: () => {
        const wrapper = document.createElement('div');
        wrapper.className = "w-full h-full animate-fade-in flex";

        const mkArea = (data, color) => {
            const W = 320, H = 80, mx = Math.max(...data);
            const pts = data.map((v,i) => `${(i/(data.length-1))*W},${H-(v/mx)*H}`).join(' ');
            const fill = `${pts} ${W},${H} 0,${H}`;
            const gid = 'ag' + color.replace('#','');
            return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" width="100%" height="80" style="display:block;"><defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity="0.18"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient></defs><line x1="0" y1="${H*0.33}" x2="${W}" y2="${H*0.33}" stroke="rgba(226,232,240,0.7)" stroke-width="1"/><line x1="0" y1="${H*0.66}" x2="${W}" y2="${H*0.66}" stroke="rgba(226,232,240,0.7)" stroke-width="1"/><polygon points="${fill}" fill="url(#${gid})"/><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        };

        const mkDonut = (pct, color) => {
            const R=32, circ=2*Math.PI*R, dash=(pct/100)*circ, gap=circ-dash;
            return `<svg width="90" height="90" viewBox="0 0 80 80"><circle cx="40" cy="40" r="${R}" fill="none" stroke="#F1F5F9" stroke-width="10"/><circle cx="40" cy="40" r="${R}" fill="none" stroke="${color}" stroke-width="10" stroke-dasharray="${dash.toFixed(1)} ${gap.toFixed(1)}" stroke-dashoffset="${(circ*0.25).toFixed(1)}" stroke-linecap="round"/><text x="40" y="37" text-anchor="middle" font-size="14" font-weight="800" fill="${color}">${pct}%</text></svg>`;
        };

        const mkBar = (pct, color) => `<div style="height:8px;border-radius:99px;background:#F1F5F9;overflow:hidden;"><div style="height:100%;width:${pct}%;background:${color};border-radius:99px;"></div></div>`;

        const actData = [24,38,31,55,42,68,59,82,74,91,78,105,93,112,85,99,116,104,91,113,101,127,109,121,113,135,125,142,133,152];
        const revData = [2100,2400,2200,2700,2500,2900,2800,3200,3100,3400,3200,3600];

        const sections = {
            vue_ensemble: `
                <div class="sts-section-header"><h2 class="sts-section-title">Vue d'ensemble</h2><p class="sts-section-subtitle">Activité clinique du jour &middot; 20 mars 2026</p></div>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:20px;">
                    ${[
                        {n:'24',      l:'Consultations',    ic:'stethoscope', c:'#00A693',t:'+12%'},
                        {n:'14 min',  l:'Dur&eacute;e moy.',      ic:'clock',       c:'#6366F1',t:'&minus;2min'},
                        {n:'2.1%',    l:"Taux d'absence",   ic:'user-x',      c:'#F59E0B',t:'&minus;0.8%'},
                        {n:'84/100',  l:'Score Sant&eacute; Moy.', ic:'heart-pulse', c:'#10B981',t:'+4pts'},
                    ].map(k=>`<div class="sts-card" style="padding:22px;"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;"><div style="width:42px;height:42px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:${k.c}14;"><i data-lucide="${k.ic}" style="width:20px;height:20px;color:${k.c};"></i></div><span style="font-size:11px;font-weight:800;padding:4px 10px;border-radius:20px;background:#ECFDF5;color:#059669;">${k.t}</span></div><div style="font-size:28px;font-weight:900;color:#0F172A;letter-spacing:-1px;margin-bottom:4px;">${k.n}</div><div style="font-size:12px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.4px;">${k.l}</div></div>`).join('')}
                </div>
                <div class="sts-card" style="margin-bottom:20px;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px;"><div><h3 class="sts-card-title">Activit&eacute; Clinique &mdash; 30 derniers jours</h3><p style="font-size:13px;color:#94A3B8;margin-top:2px;">Consultations journali&egrave;res</p></div><div style="text-align:right;"><div style="font-size:22px;font-weight:900;color:#10B981;">+52%</div><div style="font-size:11px;color:#94A3B8;">vs mois dernier</div></div></div>
                    <div style="border-radius:12px;overflow:hidden;background:linear-gradient(180deg,rgba(0,166,147,0.03) 0%,transparent 100%);">${mkArea(actData,'#00A693')}</div>
                    <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:10px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;"><span>01 Mar</span><span>08 Mar</span><span>15 Mar</span><span>22 Mar</span><span>30 Mar</span></div>
                </div>
                <div style="border-radius:20px;padding:22px 26px;background:linear-gradient(135deg,#0F172A,#1E1B4B);border:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:20px;margin-bottom:20px;">
                    <div style="width:50px;height:50px;border-radius:15px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#6366F1,#A855F7);box-shadow:0 6px 18px rgba(99,102,241,0.4);"><i data-lucide="brain-circuit" style="width:24px;height:24px;color:white;"></i></div>
                    <div style="flex:1;"><p style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:3px;color:#818CF8;margin-bottom:5px;">IA Vitalia &middot; Alerte Clinique</p><h3 style="font-size:16px;font-weight:900;color:white;margin-bottom:3px;">30% des patients diab&eacute;tiques sans bilan depuis 12 mois.</h3><p style="font-size:13px;color:#94A3B8;"><span style="color:#F87171;font-weight:800;">5 patients urgents</span> &middot; <span style="color:#FCD34D;font-weight:700;">Risque cardiovasculaire</span> &eacute;lev&eacute; sur 3 profils</p></div>
                    <button style="padding:10px 18px;border-radius:12px;font-size:13px;font-weight:800;color:white;cursor:pointer;background:linear-gradient(135deg,#F43F5E,#EF4444);border:none;white-space:nowrap;">5 urgences &rarr;</button>
                </div>
                <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px;">
                    <div class="sts-card"><h3 class="sts-card-title" style="margin-bottom:18px;">Votre Impact M&eacute;dical</h3><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">${[{n:'124',l:'Patients Stabilis&eacute;s',c:'#10B981',b:'#ECFDF5'},{n:'92%',l:'Continuit&eacute; Soins',c:'#6366F1',b:'#EEF2FF'},{n:'+8%',l:'Score Sant&eacute; Moy.',c:'#A855F7',b:'#FAF5FF'}].map(m=>`<div style="border-radius:14px;padding:16px;text-align:center;background:${m.b};"><div style="font-size:26px;font-weight:900;color:${m.c};margin-bottom:4px;">${m.n}</div><div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;color:#64748B;">${m.l}</div></div>`).join('')}</div><div style="margin-top:18px;padding-top:14px;border-top:1px solid #F1F5F9;text-align:center;"><span style="font-size:13px;font-weight:700;color:#10B981;">&#10022; Vos patients sont en meilleure sant&eacute; que le mois dernier &uarr;</span></div></div>
                    <div style="border-radius:18px;padding:22px;background:linear-gradient(135deg,#FFFBEB,#FEF3C7);border:1.5px solid rgba(245,158,11,0.2);"><div style="width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:rgba(245,158,11,0.15);margin-bottom:14px;"><i data-lucide="euro" style="width:20px;height:20px;color:#B45309;"></i></div><div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:#B45309;margin-bottom:6px;">Revenus du mois</div><div style="font-size:34px;font-weight:900;color:#0F172A;letter-spacing:-1px;">14 250<span style="font-size:18px;font-weight:700;color:#D97706;"> &euro;</span></div><div style="margin-top:8px;font-size:13px;font-weight:800;color:#059669;display:flex;align-items:center;gap:4px;"><i data-lucide="arrow-up-right" style="width:14px;height:14px;"></i> +12.4%</div></div>
                </div>`,

            sante_population: `
                <div class="sts-section-header"><h2 class="sts-section-title">Sant&eacute; de la Pati&egrave;nt&egrave;le</h2><p class="sts-section-subtitle">Distribution des pathologies &middot; 320 patients actifs</p></div>
                <div style="display:grid;grid-template-columns:160px 1fr;gap:16px;margin-bottom:16px;">
                    <div class="sts-card" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;"><svg width="110" height="110" viewBox="0 0 80 80"><circle cx="40" cy="40" r="32" fill="none" stroke="#F1F5F9" stroke-width="10"/><circle cx="40" cy="40" r="32" fill="none" stroke="#00A693" stroke-width="10" stroke-dasharray="170 33" stroke-dashoffset="50" stroke-linecap="round"/><text x="40" y="37" text-anchor="middle" font-size="16" font-weight="900" fill="#0F172A">84</text><text x="40" y="51" text-anchor="middle" font-size="9" font-weight="700" fill="#94A3B8">/100</text></svg><p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#64748B;margin-top:10px;text-align:center;">Score Vitalia Moyen</p></div>
                    <div class="sts-card"><h3 class="sts-card-title" style="margin-bottom:18px;">Pathologies Chroniques</h3><div style="display:flex;flex-direction:column;gap:14px;">${[{l:'Hypertension',p:42,c:'#F43F5E'},{l:'Diab&egrave;te Type 2',p:28,c:'#F59E0B'},{l:'Ob&eacute;sit&eacute;',p:22,c:'#6366F1'},{l:'Risque Cardiovasculaire',p:18,c:'#EC4899'}].map(x=>`<div><div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:13px;font-weight:700;color:#374151;">${x.l}</span><span style="font-size:13px;font-weight:800;color:${x.c};">${x.p}%</span></div>${mkBar(x.p,x.c)}</div>`).join('')}</div></div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
                    ${[{t:'Hypertension',gp:68,bp:32,gc:'#10B981',bc:'#F43F5E',gl:'Contr&ocirc;l&eacute;e',bl:'Non contr&ocirc;l&eacute;e'},{t:'Diab&egrave;te',gp:55,bp:45,gc:'#10B981',bc:'#F59E0B',gl:'&Eacute;quilibr&eacute;',bl:'Non &eacute;quilibr&eacute;'}].map(d=>`<div class="sts-card"><h3 class="sts-card-title" style="margin-bottom:16px;">Suivi &mdash; ${d.t}</h3><div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;margin-bottom:6px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;border-radius:50%;background:${d.gc};"></div><span style="font-size:13px;font-weight:600;color:#374151;">${d.gl}</span></div><span style="font-size:13px;font-weight:800;color:${d.gc};">${d.gp}%</span></div>${mkBar(d.gp,d.gc)}</div><div><div style="display:flex;justify-content:space-between;margin-bottom:6px;"><div style="display:flex;align-items:center;gap:6px;"><div style="width:8px;height:8px;border-radius:50%;background:${d.bc};"></div><span style="font-size:13px;font-weight:600;color:#374151;">${d.bl}</span></div><span style="font-size:13px;font-weight:800;color:${d.bc};">${d.bp}%</span></div>${mkBar(d.bp,d.bc)}</div></div>`).join('')}
                </div>
                <div class="sts-card"><h3 class="sts-card-title" style="margin-bottom:18px;">R&eacute;partition Visuelle</h3><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:center;">${[{l:'Hypertension',p:42,c:'#F43F5E',n:134},{l:'Diab&egrave;te T2',p:28,c:'#F59E0B',n:90},{l:'Ob&eacute;sit&eacute;',p:22,c:'#6366F1',n:70},{l:'Autre',p:8,c:'#10B981',n:26}].map(d=>`<div><div style="display:flex;justify-content:center;margin-bottom:8px;">${mkDonut(d.p,d.c)}</div><p style="font-size:13px;font-weight:800;color:#374151;">${d.l}</p><p style="font-size:11px;color:#94A3B8;">${d.n} patients</p></div>`).join('')}</div></div>`,

            revenus: `
                <div class="sts-section-header"><h2 class="sts-section-title">Revenus &amp; Facturation</h2><p class="sts-section-subtitle">Analyse financi&egrave;re &middot; Mars 2026</p></div>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px;">${[{n:'14 250 &euro;',l:'Revenus totaux',ic:'euro',c:'#F59E0B',t:'+12.4%'},{n:'593 &euro;',l:'Par consultation',ic:'trending-up',c:'#10B981',t:'+5%'},{n:'24',l:'Consultations factur&eacute;es',ic:'receipt',c:'#6366F1',t:'100%'}].map(k=>`<div class="sts-card" style="padding:22px;"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;"><div style="width:42px;height:42px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:${k.c}14;"><i data-lucide="${k.ic}" style="width:20px;height:20px;color:${k.c};"></i></div><span style="font-size:11px;font-weight:800;padding:4px 10px;border-radius:20px;background:#ECFDF5;color:#059669;">${k.t}</span></div><div style="font-size:26px;font-weight:900;color:#0F172A;letter-spacing:-1px;margin-bottom:4px;">${k.n}</div><div style="font-size:12px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.4px;">${k.l}</div></div>`).join('')}</div>
                <div class="sts-card" style="margin-bottom:20px;"><h3 class="sts-card-title" style="margin-bottom:18px;">Tendance Revenus &mdash; 12 mois</h3><div style="border-radius:12px;overflow:hidden;">${mkArea(revData,'#F59E0B')}</div><div style="display:flex;justify-content:space-between;margin-top:8px;font-size:10px;font-weight:800;color:#94A3B8;text-transform:uppercase;"><span>Avr</span><span>Mai</span><span>Jun</span><span>Jul</span><span>Ao&ucirc;</span><span>Sep</span><span>Oct</span><span>Nov</span><span>D&eacute;c</span><span>Jan</span><span>F&eacute;v</span><span>Mar</span></div></div>
                <div class="sts-card"><h3 class="sts-card-title" style="margin-bottom:18px;">Par Type de Consultation</h3>${[{l:'Standard (25&euro;)',p:58,a:'8 265 &euro;',c:'#00A693'},{l:'Premi&egrave;re (50&euro;)',p:22,a:'3 150 &euro;',c:'#6366F1'},{l:'T&eacute;l&eacute;consul. (20&euro;)',p:14,a:'2 000 &euro;',c:'#F59E0B'},{l:'Contr&ocirc;le (20&euro;)',p:6,a:'835 &euro;',c:'#10B981'}].map(r=>`<div style="margin-bottom:14px;"><div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:13px;font-weight:600;color:#374151;">${r.l}</span><div style="display:flex;gap:8px;"><span style="font-size:12px;color:#94A3B8;">${r.p}%</span><span style="font-size:13px;font-weight:800;color:${r.c};">${r.a}</span></div></div>${mkBar(r.p,r.c)}</div>`).join('')}</div>`,

            ia_insights: `
                <div class="sts-section-header"><h2 class="sts-section-title">Insights IA Vitalia</h2><p class="sts-section-subtitle">Analyses pr&eacute;dictives &middot; Mis &agrave; jour ce soir &agrave; 00:58</p></div>
                <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px;">${[{ic:'alert-triangle',c:'#F43F5E',bg:'#FEF2F2',bd:'#FECDD3',t:'5 patients n&eacute;cessitent un suivi urgent',b:'Risque cardiovasculaire critique. Recommandation : contact dans les 48h.',ba:'Critique'},{ic:'clock',c:'#F59E0B',bg:'#FFFBEB',bd:'#FDE68A',t:'30% des diab&eacute;tiques sans bilan depuis 12 mois',b:"HbA1c manquant pour 27 patients. Campagne de rappel recommand&eacute;e.",ba:'Attention'},{ic:'trending-up',c:'#6366F1',bg:'#EEF2FF',bd:'#C7D2FE',t:'Risque cardiovasculaire en hausse ce trimestre',b:'Score cardiovasculaire moyen +3 pts. 18% &agrave; surveiller.',ba:'Info'},{ic:'check-circle',c:'#10B981',bg:'#ECFDF5',bd:'#A7F3D0',t:'Taux contr&ocirc;le hypertension : 68% &mdash; objectif atteint',b:'Au-dessus de la moyenne nationale (61%). Excellent travail !',ba:'Excellent'},{ic:'users',c:'#0284C7',bg:'#F0F9FF',bd:'#BAE6FD',t:'12 nouveaux patients &mdash; profil atypique sur 3',b:'Ant&eacute;c&eacute;dents familiaux m&eacute;ritant un d&eacute;pistage pr&eacute;coce.',ba:'Nouveau'}].map(i=>`<div style="border-radius:16px;padding:18px 20px;background:${i.bg};border:1.5px solid ${i.bd};display:flex;align-items:flex-start;gap:14px;"><div style="width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:${i.c}20;"><i data-lucide="${i.ic}" style="width:18px;height:18px;color:${i.c};"></i></div><div style="flex:1;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;"><p style="font-size:14px;font-weight:800;color:#1E293B;">${i.t}</p><span style="font-size:10px;font-weight:800;padding:2px 8px;border-radius:20px;background:${i.c};color:white;white-space:nowrap;">${i.ba}</span></div><p style="font-size:13px;color:#64748B;">${i.b}</p></div></div>`).join('')}</div>
                <div class="sts-card" style="border-left:4px solid #00A693;"><h3 class="sts-card-title" style="margin-bottom:14px;">Actions Recommand&eacute;es</h3><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">${[{ic:'calendar-plus',t:'Programmer 5 bilans urgents',c:'#F43F5E'},{ic:'mail',t:'Envoyer rappels diab&eacute;tiques',c:'#F59E0B'},{ic:'file-text',t:'G&eacute;n&eacute;rer rapport PDF',c:'#6366F1'}].map(a=>`<button style="padding:14px;border-radius:12px;background:#F8FAFC;border:1.5px solid #E2E8F0;display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;font-weight:700;color:#374151;text-align:left;"><i data-lucide="${a.ic}" style="width:16px;height:16px;color:${a.c};flex-shrink:0;"></i> ${a.t}</button>`).join('')}</div></div>`,

            performance: `
                <div class="sts-section-header"><h2 class="sts-section-title">Performance &amp; Impact</h2><p class="sts-section-subtitle">M&eacute;triques qualit&eacute; des soins &middot; Mars 2026</p></div>
                <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:20px;">${[{t:'Patients Stabilis&eacute;s',n:'124',s:'sur 145 suivis',p:86,c:'#10B981',i:'trending-up'},{t:'Taux de Continuit&eacute;',n:'92%',s:'des patients ont un suivi',p:92,c:'#6366F1',i:'repeat'},{t:'Am&eacute;lioration Score Sant&eacute;',n:'+8pts',s:'&eacute;volution moyenne',p:68,c:'#00A693',i:'heart-pulse'},{t:'Satisfaction Patients',n:'4.8/5',s:'sur 87 avis',p:96,c:'#F59E0B',i:'star'}].map(m=>`<div class="sts-card" style="padding:22px;"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;"><div><p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#94A3B8;margin-bottom:4px;">${m.t}</p><div style="font-size:30px;font-weight:900;color:#0F172A;letter-spacing:-1px;">${m.n}</div><p style="font-size:12px;color:#64748B;margin-top:2px;">${m.s}</p></div><div style="width:42px;height:42px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:${m.c}14;"><i data-lucide="${m.i}" style="width:20px;height:20px;color:${m.c};"></i></div></div><div style="height:6px;border-radius:99px;background:#F1F5F9;overflow:hidden;"><div style="height:100%;width:${m.p}%;background:${m.c};border-radius:99px;"></div></div><p style="font-size:11px;color:#94A3B8;margin-top:6px;">${m.p}% de l'objectif</p></div>`).join('')}</div>
                <div class="sts-card"><h3 class="sts-card-title" style="margin-bottom:14px;">Exporter &amp; Actions</h3><div style="display:flex;gap:10px;flex-wrap:wrap;"><button style="display:flex;align-items:center;gap:8px;padding:11px 20px;border-radius:12px;font-size:13px;font-weight:800;background:linear-gradient(135deg,#00A693,#059669);color:white;border:none;cursor:pointer;box-shadow:0 4px 14px rgba(0,166,147,0.3);"><i data-lucide="download" style="width:15px;height:15px;"></i> Exporter PDF</button><button style="display:flex;align-items:center;gap:8px;padding:11px 20px;border-radius:12px;font-size:13px;font-weight:700;background:white;color:#374151;border:1.5px solid #E2E8F0;cursor:pointer;"><i data-lucide="bar-chart-2" style="width:15px;height:15px;"></i> Analytics</button><button style="display:flex;align-items:center;gap:8px;padding:11px 20px;border-radius:12px;font-size:13px;font-weight:700;background:white;color:#374151;border:1.5px solid #E2E8F0;cursor:pointer;"><i data-lucide="filter" style="width:15px;height:15px;"></i> Filtrer</button></div></div>`,
        };

        const navItems = [
            {id:'vue_ensemble',    icon:'layout-dashboard', label:"Vue d'ensemble"},
            {id:'sante_population',icon:'users',            label:'Sant&eacute; Pati&egrave;nt&egrave;le'},
            {id:'revenus',         icon:'euro',             label:'Revenus'},
            {id:'ia_insights',     icon:'brain-circuit',    label:'Insights IA'},
            {id:'performance',     icon:'trending-up',      label:'Performance'},
        ];

        wrapper.innerHTML = `
            <style>
              .sts-sidebar{width:220px;flex-shrink:0;background:rgba(255,255,255,0.7);backdrop-filter:blur(20px);border-right:1.5px solid rgba(226,232,240,0.6);padding:28px 16px;display:flex;flex-direction:column;gap:4px;}
              .sts-nav-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:14px;cursor:pointer;font-size:13px;font-weight:700;color:#64748B;transition:all 0.2s;text-decoration:none;border:1.5px solid transparent;}
              .sts-nav-item:hover{background:#F8FAFC;color:#1E293B;}
              .sts-nav-item.active{background:linear-gradient(135deg,#ECFDF5,#D1FAE5);color:#065F46;border-color:rgba(16,185,129,0.2);}
              .sts-nav-item.active i{color:#059669;}
              .sts-content{flex:1;padding:28px 32px;overflow-y:auto;background:#F8FAFC;}
              .sts-section-header{margin-bottom:20px;}
              .sts-section-title{font-size:1.5rem;font-weight:900;color:#0F172A;letter-spacing:-0.5px;margin-bottom:4px;}
              .sts-section-subtitle{font-size:0.875rem;color:#64748B;font-weight:500;}
              .sts-card{background:white;border-radius:18px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.04);border:1px solid #F1F5F9;}
              .sts-card-title{font-size:15px;font-weight:800;color:#1E293B;}
              .sts-filter-btn{padding:8px 16px;border-radius:20px;font-size:12px;font-weight:800;cursor:pointer;border:1.5px solid #E2E8F0;background:white;color:#64748B;transition:all 0.2s;}
              .sts-filter-btn.active{background:linear-gradient(135deg,#0F172A,#1E293B);color:white;border-color:transparent;}
            </style>
            <div class="sts-sidebar">
                <p style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:3px;color:#CBD5E1;padding-left:12px;margin-bottom:4px;">Statistiques</p>
                ${navItems.map(n=>`<a href="#" class="sts-nav-item ${n.id==='vue_ensemble'?'active':''}" data-section="${n.id}" onclick="return false;"><i data-lucide="${n.icon}" style="width:16px;height:16px;"></i><span>${n.label}</span></a>`).join('')}
                <div style="flex:1;"></div>
                <div style="padding:16px 12px 4px;font-size:11px;color:#94A3B8;font-weight:600;display:flex;align-items:center;gap:6px;border-top:1px solid #F1F5F9;"><i data-lucide="shield-check" style="width:14px;height:14px;color:#10B981;"></i><span>Donn&eacute;es s&eacute;curis&eacute;es &middot; Vitalia</span></div>
            </div>
            <div class="sts-content" id="sts-main">
                <div style="display:flex;gap:8px;margin-bottom:22px;">
                    <button class="sts-filter-btn active">Aujourd'hui</button>
                    <button class="sts-filter-btn">Cette semaine</button>
                    <button class="sts-filter-btn">Ce mois</button>
                    <div style="flex:1;"></div>
                    <button style="display:flex;align-items:center;gap:6px;padding:8px 16px;border-radius:20px;font-size:12px;font-weight:800;cursor:pointer;background:white;border:1.5px solid #E2E8F0;color:#374151;"><i data-lucide="download" style="width:14px;height:14px;"></i> Exporter</button>
                </div>
                ${sections['vue_ensemble']}
            </div>
        `;

        setTimeout(() => {
            if (window.lucide) lucide.createIcons({ el: wrapper });
            const nav = wrapper.querySelectorAll('.sts-nav-item[data-section]');
            const main = wrapper.querySelector('#sts-main');
            const filterBar = `<div style="display:flex;gap:8px;margin-bottom:22px;"><button class="sts-filter-btn active">Aujourd'hui</button><button class="sts-filter-btn">Cette semaine</button><button class="sts-filter-btn">Ce mois</button><div style="flex:1;"></div><button style="display:flex;align-items:center;gap:6px;padding:8px 16px;border-radius:20px;font-size:12px;font-weight:800;cursor:pointer;background:white;border:1.5px solid #E2E8F0;color:#374151;"><i data-lucide="download" style="width:14px;height:14px;"></i> Exporter</button></div>`;
            nav.forEach(item => {
                item.addEventListener('click', () => {
                    nav.forEach(n => n.classList.remove('active'));
                    item.classList.add('active');
                    const sec = item.getAttribute('data-section');
                    main.innerHTML = filterBar + (sections[sec] || '');
                    if (window.lucide) lucide.createIcons({ el: main });
                    main.querySelectorAll('.sts-filter-btn').forEach(btn => {
                        btn.addEventListener('click', () => { main.querySelectorAll('.sts-filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); });
                    });
                });
            });
            wrapper.querySelectorAll('.sts-filter-btn').forEach(btn => {
                btn.addEventListener('click', () => { wrapper.querySelectorAll('.sts-filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); });
            });
        }, 80);

        return wrapper;
    },
    
    Profile: () => {
        const wrapper = document.createElement('div');
        wrapper.className = "w-full h-full p-12 max-w-[1000px] mx-auto animate-fade-in flex items-center justify-center";
        wrapper.innerHTML = `
            <div class="text-center">
                <i data-lucide="user-circle" class="w-20 h-20 text-indigo-200 mx-auto mb-6"></i>
                <h1 class="text-3xl font-serif font-bold text-slate-900 tracking-tight mb-2">Profil du Médecin</h1>
                <p class="text-slate-500 font-medium text-lg">La section Profil est en cours de développement pour un accès complet à vos paramètres cliniques.</p>
            </div>
        `;
        return wrapper;
    },

    Settings: () => {
        const wrapper = document.createElement('div');
        wrapper.className = "w-full h-full animate-fade-in flex";

        const sections = [
            { id: 'profile', icon: 'user-circle', label: 'Profil' },
            { id: 'consultation', icon: 'calendar-clock', label: 'Consultations' },
            { id: 'teleconsultation', icon: 'video', label: 'Téléconsultation' },
            { id: 'prescriptions', icon: 'pill', label: 'Ordonnances' },
            { id: 'notifications', icon: 'bell', label: 'Notifications' },
            { id: 'patients', icon: 'users', label: 'Gestion Patients' },
            { id: 'security', icon: 'shield-check', label: 'Sécurité' },
            { id: 'billing', icon: 'credit-card', label: 'Facturation' },
            { id: 'integrations', icon: 'plug', label: 'Intégrations' },
            { id: 'language', icon: 'globe', label: 'Langue & Région' },
        ];

        const sectionContent = {
            profile: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Profil du Médecin</h2>
                    <p class="stg-section-subtitle">Informations personnelles et professionnelles</p>
                </div>
                <div class="stg-card">
                    <div class="flex items-center gap-7 mb-8 pb-8" style="border-bottom:1px solid #F1F5F9;">
                        <div class="relative flex-shrink-0">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=SophieVitalia&backgroundColor=0284c7" class="w-24 h-24 rounded-3xl object-cover shadow-lg" style="border:3px solid #00A693;">
                            <button class="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md" style="background:#00A693;">
                                <i data-lucide="camera" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <div>
                            <h3 class="text-xl font-black text-slate-900">Dr. Sophie Martin</h3>
                            <p class="text-sm font-semibold text-emerald-600 mt-0.5">Médecin Généraliste</p>
                            <p class="text-xs text-slate-400 mt-1">Dernière mise à jour : 15 mars 2026</p>
                        </div>
                    </div>
                    <div class="stg-form-grid">
                        <div class="stg-field">
                            <label>Prénom</label>
                            <input type="text" value="Sophie" class="stg-input"/>
                        </div>
                        <div class="stg-field">
                            <label>Nom de famille</label>
                            <input type="text" value="Martin" class="stg-input"/>
                        </div>
                        <div class="stg-field">
                            <label>Spécialité</label>
                            <select class="stg-input">
                                <option selected>Médecine Générale</option>
                                <option>Cardiologie</option>
                                <option>Dermatologie</option>
                                <option>Pédiatrie</option>
                            </select>
                        </div>
                        <div class="stg-field">
                            <label>NÂ° RPPS / Ordre des Médecins</label>
                            <input type="text" value="10003847291" class="stg-input"/>
                        </div>
                        <div class="stg-field" style="grid-column:span 2;">
                            <label>Email professionnel</label>
                            <input type="email" value="s.martin@vitalia.fr" class="stg-input"/>
                        </div>
                        <div class="stg-field" style="grid-column:span 2;">
                            <label>Signature numérique</label>
                            <div class="stg-upload-zone">
                                <i data-lucide="upload-cloud" class="w-8 h-8 text-slate-300 mx-auto mb-2"></i>
                                <p class="text-sm font-semibold text-slate-500">Glisser ou <span class="text-emerald-600 cursor-pointer">parcourir</span> votre signature</p>
                                <p class="text-xs text-slate-400 mt-1">PNG ou SVG Â· Max 2 Mo</p>
                            </div>
                        </div>
                    </div>
                    <div class="stg-save-row">
                        <button class="stg-btn-primary"><i data-lucide="save" class="w-4 h-4"></i> Sauvegarder</button>
                    </div>
                </div>`,

            consultation: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Paramètres de Consultation</h2>
                    <p class="stg-section-subtitle">Configurez vos horaires et la durée de vos consultations</p>
                </div>
                <div class="stg-card">
                    <h3 class="stg-card-title mb-5">Durée et Horaires</h3>
                    <div class="stg-form-grid">
                        <div class="stg-field">
                            <label>Durée par défaut</label>
                            <select class="stg-input">
                                <option>15 min</option>
                                <option selected>20 min</option>
                                <option>30 min</option>
                                <option>45 min</option>
                                <option>60 min</option>
                            </select>
                        </div>
                        <div class="stg-field">
                            <label>Durée première consultation</label>
                            <select class="stg-input">
                                <option>30 min</option>
                                <option selected>45 min</option>
                                <option>60 min</option>
                            </select>
                        </div>
                        <div class="stg-field">
                            <label>Heure de début</label>
                            <input type="time" value="08:00" class="stg-input"/>
                        </div>
                        <div class="stg-field">
                            <label>Heure de fin</label>
                            <input type="time" value="18:00" class="stg-input"/>
                        </div>
                    </div>
                    <div class="mt-6 mb-1">
                        <label class="stg-label">Jours de travail</label>
                        <div class="flex gap-2 mt-2 flex-wrap">
                            ${['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'].map((d,i) => `
                            <button class="stg-day-btn ${i < 5 ? 'active' : ''}">${d}</button>`).join('')}
                        </div>
                    </div>
                    <div class="mt-6 pt-6" style="border-top:1px solid #F1F5F9;">
                        <h3 class="stg-card-title mb-4">Pauses</h3>
                        <div class="flex gap-3">
                            <input type="time" value="12:00" class="stg-input" style="width:auto;flex:1;"/>
                            <span class="self-center text-slate-400 font-bold">â†’</span>
                            <input type="time" value="13:30" class="stg-input" style="width:auto;flex:1;"/>
                        </div>
                    </div>
                    <div class="stg-save-row">
                        <button class="stg-btn-primary"><i data-lucide="save" class="w-4 h-4"></i> Sauvegarder</button>
                    </div>
                </div>`,

            teleconsultation: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Téléconsultation</h2>
                    <p class="stg-section-subtitle">Gérez vos consultations vidéo à distance</p>
                </div>
                <div class="stg-card">
                    <div class="flex items-center justify-between mb-6 pb-6" style="border-bottom:1px solid #F1F5F9;">
                        <div>
                            <h3 class="stg-card-title mb-0.5">Activer la Téléconsultation</h3>
                            <p class="text-sm text-slate-400">Rendez visible l'option de vidéoconsultation pour vos patients</p>
                        </div>
                        <label class="stg-toggle"><input type="checkbox" checked><span class="stg-toggle-slider"></span></label>
                    </div>
                    <div class="stg-form-grid">
                        <div class="stg-field">
                            <label>Plateforme vidéo par défaut</label>
                            <select class="stg-input">
                                <option selected>Vitalia Meet (intégré)</option>
                                <option>Doctolib Vidéo</option>
                                <option>Zoom Santé</option>
                            </select>
                        </div>
                        <div class="stg-field">
                            <label>Délai min. avant consultation</label>
                            <select class="stg-input">
                                <option>1 heure</option>
                                <option selected>2 heures</option>
                                <option>4 heures</option>
                            </select>
                        </div>
                        <div class="stg-field" style="grid-column:span 2;">
                            <label>Message automatique pré-consultation</label>
                            <textarea class="stg-input" rows="3" style="resize:none;">Bonjour, votre téléconsultation avec le Dr Martin aura lieu dans quelques instants. Assurez-vous d'être dans un endroit calme et de disposer d'une bonne connexion internet.</textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-between py-4" style="border-top:1px solid #F1F5F9;margin-top:16px;">
                        <div>
                            <p class="text-sm font-bold text-slate-700">Caméra HD par défaut</p>
                            <p class="text-xs text-slate-400">Utiliser la caméra haute définition si disponible</p>
                        </div>
                        <label class="stg-toggle"><input type="checkbox" checked><span class="stg-toggle-slider"></span></label>
                    </div>
                    <div class="stg-save-row">
                        <button class="stg-btn-primary"><i data-lucide="save" class="w-4 h-4"></i> Sauvegarder</button>
                    </div>
                </div>`,

            prescriptions: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Ordonnances</h2>
                    <p class="stg-section-subtitle">Templates et médicaments favoris</p>
                </div>
                <div class="stg-card mb-5">
                    <h3 class="stg-card-title mb-4">Médicaments favoris</h3>
                    <div class="flex flex-col gap-2">
                        ${['Amoxicilline 500mg','Ibuprofène 400mg','Paracétamol 1g','Metformine 500mg','Oméprazole 20mg'].map(m => `
                        <div class="flex items-center justify-between p-3 rounded-xl" style="background:#F8FAFC;border:1px solid #E2E8F0;">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:#ECFDF5;"><i data-lucide="pill" class="w-4 h-4 text-emerald-600"></i></div>
                                <span class="text-sm font-bold text-slate-700">${m}</span>
                            </div>
                            <button class="text-slate-400 hover:text-rose-500 transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
                        </div>`).join('')}
                    </div>
                    <button class="mt-4 flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                        <i data-lucide="plus-circle" class="w-4 h-4"></i> Ajouter un médicament favori
                    </button>
                </div>
                <div class="stg-card">
                    <h3 class="stg-card-title mb-4">Options automatiques</h3>
                    ${[
                        ['Signature auto sur chaque ordonnance','Appliquer automatiquement votre signature numérique',true],
                        ['Auto-remplissage données patient','Pré-remplir nom, date de naissance et numéro de sécurité',true],
                        ['Alerte interactions médicamenteuses','ÃŠtre averti des interactions potentielles',true],
                    ].map(([t,s,c]) => `
                    <div class="flex items-center justify-between py-4" style="border-bottom:1px solid #F8FAFC;">
                        <div>
                            <p class="text-sm font-bold text-slate-700">${t}</p>
                            <p class="text-xs text-slate-400">${s}</p>
                        </div>
                        <label class="stg-toggle"><input type="checkbox" ${c?'checked':''}><span class="stg-toggle-slider"></span></label>
                    </div>`).join('')}
                    <div class="stg-save-row">
                        <button class="stg-btn-primary"><i data-lucide="save" class="w-4 h-4"></i> Sauvegarder</button>
                    </div>
                </div>`,

            notifications: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Notifications</h2>
                    <p class="stg-section-subtitle">Choisissez ce que vous souhaitez recevoir et par quel canal</p>
                </div>
                <div class="stg-card mb-5">
                    <h3 class="stg-card-title mb-5">Canaux de notification</h3>
                    <div class="grid grid-cols-3 gap-4">
                        ${[['SMS','message-square','#10B981','#ECFDF5'],['Email','mail','#6366F1','#EEF2FF'],['In-app','bell','#F59E0B','#FFFBEB']].map(([n,ic,c,bg]) => `
                        <div class="rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer channel-card" style="background:${bg};border:2px solid ${c}22;">
                            <div class="w-12 h-12 rounded-2xl flex items-center justify-center" style="background:${c}22;">
                                <i data-lucide="${ic}" class="w-6 h-6" style="color:${c};"></i>
                            </div>
                            <span class="text-sm font-black text-slate-700">${n}</span>
                            <label class="stg-toggle"><input type="checkbox" checked><span class="stg-toggle-slider"></span></label>
                        </div>`).join('')}
                    </div>
                </div>
                <div class="stg-card">
                    <h3 class="stg-card-title mb-4">Événements</h3>
                    ${[
                        ['Rappels patients','Confirmation et rappel 24h avant RDV',true],
                        ['Résultats d\'analyses disponibles','Notification à réception des résultats labo',true],
                        ['Alerte patient à risque élevé','Signalement immédiat d\'un patient critique',true],
                        ['Résumé quotidien','Récap de fin de journée avec stats clés',false],
                        ['Nouveau message patient','Lorsqu\'un patient vous envoie un message',true],
                    ].map(([t,s,c]) => `
                    <div class="flex items-center justify-between py-4" style="border-bottom:1px solid #F8FAFC;">
                        <div>
                            <p class="text-sm font-bold text-slate-700">${t}</p>
                            <p class="text-xs text-slate-400">${s}</p>
                        </div>
                        <label class="stg-toggle"><input type="checkbox" ${c?'checked':''}><span class="stg-toggle-slider"></span></label>
                    </div>`).join('')}
                    <div class="stg-save-row">
                        <button class="stg-btn-primary"><i data-lucide="save" class="w-4 h-4"></i> Sauvegarder</button>
                    </div>
                </div>`,

            patients: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Gestion des Patients</h2>
                    <p class="stg-section-subtitle">Champs personnalisés, catégories et consentements</p>
                </div>
                <div class="stg-card mb-5">
                    <h3 class="stg-card-title mb-4">Champs personnalisés</h3>
                    <div class="flex flex-col gap-2 mb-4">
                        ${['Allergies connues','Médecin traitant précédent','Assureur complémentaire'].map(f => `
                        <div class="flex items-center justify-between p-3 rounded-xl" style="background:#F8FAFC;border:1px solid #E2E8F0;">
                            <div class="flex items-center gap-2"><i data-lucide="grip-vertical" class="w-4 h-4 text-slate-300"></i><span class="text-sm font-bold text-slate-700">${f}</span></div>
                            <div class="flex items-center gap-2">
                                <span class="px-2 py-0.5 text-xs font-bold rounded-lg" style="background:#EEF2FF;color:#4338CA;">Texte</span>
                                <button class="text-slate-400 hover:text-rose-500"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                            </div>
                        </div>`).join('')}
                    </div>
                    <button class="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700">
                        <i data-lucide="plus-circle" class="w-4 h-4"></i> Ajouter un champ
                    </button>
                </div>
                <div class="stg-card">
                    <h3 class="stg-card-title mb-4">Catégories patients</h3>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${[['Chronique','#F59E0B'],['Prioritaire','#F43F5E'],['Surveillance','#6366F1'],['Stable','#10B981']].map(([l,c]) => `
                        <span class="px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer" style="background:${c}15;color:${c};border:1.5px solid ${c}30;">${l}</span>`).join('')}
                        <button class="px-3 py-1.5 rounded-xl text-xs font-black text-slate-500 cursor-pointer" style="background:#F8FAFC;border:1.5px dashed #CBD5E1;">+ Nouvelle</button>
                    </div>
                    <div class="flex items-center justify-between py-3 mt-2" style="border-top:1px solid #F1F5F9;">
                        <div>
                            <p class="text-sm font-bold text-slate-700">Gestion du consentement RGPD</p>
                            <p class="text-xs text-slate-400">Afficher le formulaire de consentement à chaque nouveau patient</p>
                        </div>
                        <label class="stg-toggle"><input type="checkbox" checked><span class="stg-toggle-slider"></span></label>
                    </div>
                </div>`,

            security: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Sécurité</h2>
                    <p class="stg-section-subtitle">Protégez votre compte et les données de vos patients</p>
                </div>
                <div class="stg-card mb-5" style="border-left:4px solid #F43F5E;">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:#FEF2F2;"><i data-lucide="lock" class="w-5 h-5 text-rose-500"></i></div>
                        <h3 class="stg-card-title mb-0">Changer le mot de passe</h3>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="stg-field"><label>Mot de passe actuel</label><input type="password" placeholder="••••••••" class="stg-input"/></div>
                        <div class="stg-field"><label>Nouveau mot de passe</label><input type="password" placeholder="••••••••" class="stg-input"/></div>
                        <div class="stg-field"><label>Confirmer le nouveau mot de passe</label><input type="password" placeholder="••••••••" class="stg-input"/></div>
                    </div>
                    <div class="stg-save-row">
                        <button class="stg-btn-danger"><i data-lucide="key" class="w-4 h-4"></i> Changer le mot de passe</button>
                    </div>
                </div>
                <div class="stg-card mb-5">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:#EFF6FF;"><i data-lucide="shield" class="w-5 h-5 text-blue-500"></i></div>
                            <div>
                                <h3 class="stg-card-title mb-0">Double authentification (2FA)</h3>
                                <p class="text-xs text-slate-400">Ajoute une couche de sécurité via SMS ou application</p>
                            </div>
                        </div>
                        <label class="stg-toggle"><input type="checkbox"><span class="stg-toggle-slider"></span></label>
                    </div>
                </div>
                <div class="stg-card">
                    <h3 class="stg-card-title mb-4">Sessions actives</h3>
                    ${[
                        ['Chrome Â· Windows 11','Paris, France','Actuelle'],
                        ['Safari Â· iPhone 14','Paris, France','Il y a 2h'],
                        ['Firefox Â· MacBook Pro','Bordeaux, France','Il y a 2j'],
                    ].map(([d,l,t]) => `
                    <div class="flex items-center justify-between py-3.5" style="border-bottom:1px solid #F8FAFC;">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:#F8FAFC;"><i data-lucide="monitor" class="w-4 h-4 text-slate-500"></i></div>
                            <div>
                                <p class="text-sm font-bold text-slate-700">${d}</p>
                                <p class="text-xs text-slate-400">${l} Â· ${t}</p>
                            </div>
                        </div>
                        ${t==='Actuelle' ? '<span class="px-2.5 py-1 text-xs font-black rounded-xl" style="background:#ECFDF5;color:#10B981;">Actuelle</span>' : '<button class="text-xs font-bold text-rose-500 hover:text-rose-700 transition-colors">Révoquer</button>'}
                    </div>`).join('')}
                    <div class="mt-5">
                        <button class="flex items-center gap-2 text-sm font-black text-rose-500 hover:text-rose-700 transition-colors">
                            <i data-lucide="log-out" class="w-4 h-4"></i> Se déconnecter de tous les appareils
                        </button>
                    </div>
                </div>`,

            billing: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Facturation</h2>
                    <p class="stg-section-subtitle">Tarifs, paiements et partenaires assurance</p>
                </div>
                <div class="stg-card mb-5">
                    <h3 class="stg-card-title mb-4">Tarifs des consultations</h3>
                    <div class="stg-form-grid">
                        ${[['Consultation standard','25','â‚¬'],['Teleconsultation','20','â‚¬'],['Première consultation','50','â‚¬'],['Visite de contrôle','20','â‚¬']].map(([l,v,u]) => `
                        <div class="stg-field">
                            <label>${l}</label>
                            <div class="relative">
                                <input type="number" value="${v}" class="stg-input" style="padding-right:40px;"/>
                                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">${u}</span>
                            </div>
                        </div>`).join('')}
                    </div>
                    <div class="stg-save-row">
                        <button class="stg-btn-primary"><i data-lucide="save" class="w-4 h-4"></i> Mettre à jour les tarifs</button>
                    </div>
                </div>
                <div class="stg-card">
                    <h3 class="stg-card-title mb-4">Partenaires Assurance</h3>
                    ${[['CNSS / Assurance Maladie','Connecté','#10B981'],['AXA Santé','Connecté','#10B981'],['Allianz Care','Non connecté','#94A3B8']].map(([n,s,c]) => `
                    <div class="flex items-center justify-between py-3.5" style="border-bottom:1px solid #F8FAFC;">
                        <div class="flex items-center gap-3">
                            <div class="w-2.5 h-2.5 rounded-full" style="background:${c};"></div>
                            <span class="text-sm font-bold text-slate-700">${n}</span>
                        </div>
                        <span class="text-xs font-black" style="color:${c};">${s}</span>
                    </div>`).join('')}
                </div>`,

            integrations: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Intégrations</h2>
                    <p class="stg-section-subtitle">Connectez vos outils partenaires à Vitalia</p>
                </div>
                <div class="stg-card">
                    ${[
                        ['Laboratoire Biogroup','Résultats d\'analyses en temps réel','flask-conical','#6366F1','Connecté'],
                        ['Pharmacie Centrale','Transmission ordonnances électroniques','shopping-bag','#059669','Connecté'],
                        ['Système SESAM-Vitale','Prise en charge Assurance Maladie','credit-card','#2563EB','Connecté'],
                        ['DoctoShare — Messagerie','Messagerie sécurisée entre professionnels','message-circle','#7C3AED','Connecté'],
                        ['HealthData Analytics','Analyse prédictive des risques patients','bar-chart-2','#DB2777','Déconnecter'],
                        ['Répertoire DMP','Dossier Médical Partagé national','folder-open','#D97706','Connecté'],
                    ].map(([n,d,ic,c,s]) => `
                    <div class="flex items-center justify-between py-5" style="border-bottom:1px solid #F8FAFC;">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style="background:${c}12;border:1.5px solid ${c}25;">
                                <i data-lucide="${ic}" class="w-6 h-6" style="color:${c};"></i>
                            </div>
                            <div>
                                <p class="text-sm font-black text-slate-800">${n}</p>
                                <p class="text-xs text-slate-400">${d}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-1.5">
                                <div class="w-2 h-2 rounded-full" style="background:${s==='Déconnecter' ? '#F43F5E' : '#10B981'};"></div>
                                <span class="text-xs font-bold" style="color:${s==='Déconnecter' ? '#F43F5E' : '#10B981'};">${s==='Déconnecter' ? 'Connecté' : 'Connecté'}</span>
                            </div>
                            <button class="stg-btn-sm ${s==='Déconnecter' ? 'danger' : 'outline'}">${s==='Déconnecter' ? 'Déconnecter' : 'Gérer'}</button>
                        </div>
                    </div>`).join('')}
                    <button class="stg-btn-outline mt-5 flex items-center gap-2 text-sm">
                        <i data-lucide="plus-circle" class="w-4 h-4"></i> Ajouter une intégration
                    </button>
                </div>`,

            language: `
                <div class="stg-section-header">
                    <h2 class="stg-section-title">Langue & Région</h2>
                    <p class="stg-section-subtitle">Personnalisez votre expérience régionale</p>
                </div>
                <div class="stg-card">
                    <div class="stg-form-grid">
                        <div class="stg-field" style="grid-column:span 2;">
                            <label>Langue de l'interface</label>
                            <div class="flex gap-3 mt-1">
                                ${[['ðŸ‡«ðŸ‡·','Français',true],['ðŸ‡¬ðŸ‡§','English',false],['ðŸ‡¦ðŸ‡·','Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©',false]].map(([f,l,a]) => `
                                <button class="lang-btn ${a?'active':''} flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all">${f} ${l}</button>`).join('')}
                            </div>
                        </div>
                        <div class="stg-field">
                            <label>Devise</label>
                            <select class="stg-input">
                                <option selected>EUR (â‚¬) — Euro</option>
                                <option>USD ($) — Dollar</option>
                                <option>MAD — Dirham</option>
                                <option>CFA — Franc CFA</option>
                            </select>
                        </div>
                        <div class="stg-field">
                            <label>Format de date</label>
                            <select class="stg-input">
                                <option selected>JJ/MM/AAAA</option>
                                <option>MM/DD/YYYY</option>
                                <option>AAAA-MM-JJ</option>
                            </select>
                        </div>
                        <div class="stg-field">
                            <label>Fuseau horaire</label>
                            <select class="stg-input">
                                <option selected>Europe/Paris (UTC+1)</option>
                                <option>Africa/Casablanca (UTC+1)</option>
                                <option>Africa/Abidjan (UTC+0)</option>
                            </select>
                        </div>
                        <div class="stg-field">
                            <label>Format d'heure</label>
                            <select class="stg-input">
                                <option selected>24h (14:30)</option>
                                <option>12h (2:30 PM)</option>
                            </select>
                        </div>
                    </div>
                    <div class="stg-save-row">
                        <button class="stg-btn-primary"><i data-lucide="save" class="w-4 h-4"></i> Sauvegarder</button>
                    </div>
                </div>`,
        };

        wrapper.innerHTML = `
            <style>
              .stg-sidebar { width: 240px; flex-shrink: 0; background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); border-right: 1.5px solid rgba(226,232,240,0.6); padding: 28px 16px; display: flex; flex-direction: column; gap: 4px; overflow-y: auto; }
              .stg-nav-item { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 14px; cursor: pointer; font-size: 13px; font-weight: 700; color: #64748B; transition: all 0.2s cubic-bezier(.22,.68,0,1.2); text-decoration: none; }
              .stg-nav-item:hover { background: #F8FAFC; color: #1E293B; }
              .stg-nav-item.active { background: linear-gradient(135deg, #ECFDF5, #D1FAE5); color: #065F46; border: 1.5px solid rgba(16,185,129,0.2); }
              .stg-nav-item.active i { color: #059669; }
              .stg-content { flex: 1; padding: 36px 40px; overflow-y: auto; background: #F8FAFC; }
              .stg-section-header { margin-bottom: 24px; }
              .stg-section-title { font-size: 1.6rem; font-weight: 900; color: #0F172A; letter-spacing: -0.5px; margin-bottom: 4px; }
              .stg-section-subtitle { font-size: 0.875rem; color: #64748B; font-weight: 500; }
              .stg-card { background: white; border-radius: 20px; padding: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border: 1px solid #F1F5F9; margin-bottom: 20px; }
              .stg-card:last-child { margin-bottom: 0; }
              .stg-card-title { font-size: 1rem; font-weight: 800; color: #1E293B; }
              .stg-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
              .stg-field { display: flex; flex-direction: column; gap: 6px; }
              .stg-label, .stg-field label { font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; }
              .stg-input { border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 11px 14px; font-size: 14px; font-weight: 600; color: #1E293B; background: #F8FAFC; width: 100%; outline: none; transition: all 0.2s; }
              .stg-input:focus { border-color: #00A693; box-shadow: 0 0 0 3px rgba(0,166,147,0.1); background: white; }
              .stg-upload-zone { border: 2px dashed #CBD5E1; border-radius: 16px; padding: 32px 20px; text-align: center; background: #F8FAFC; transition: all 0.2s; cursor: pointer; }
              .stg-upload-zone:hover { border-color: #00A693; background: #ECFDF5; }
              .stg-save-row { display: flex; justify-content: flex-end; margin-top: 24px; padding-top: 20px; border-top: 1px solid #F1F5F9; }
              .stg-btn-primary { display: flex; align-items: center; gap: 8px; padding: 11px 22px; background: linear-gradient(135deg,#00A693,#059669); color: white; border-radius: 14px; font-size: 14px; font-weight: 800; cursor: pointer; border: none; box-shadow: 0 4px 16px rgba(0,166,147,0.3); transition: all 0.2s; }
              .stg-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,166,147,0.4); }
              .stg-btn-danger { display: flex; align-items: center; gap: 8px; padding: 11px 22px; background: linear-gradient(135deg,#F43F5E,#E11D48); color: white; border-radius: 14px; font-size: 14px; font-weight: 800; cursor: pointer; border: none; box-shadow: 0 4px 16px rgba(244,63,94,0.3); transition: all 0.2s; }
              .stg-btn-outline { display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: white; color: #475569; border: 1.5px solid #E2E8F0; border-radius: 14px; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
              .stg-btn-outline:hover { border-color: #00A693; color: #00A693; }
              .stg-btn-sm { padding: 7px 14px; border-radius: 10px; font-size: 12px; font-weight: 800; cursor: pointer; border: none; transition: all 0.2s; }
              .stg-btn-sm.outline { background: #F8FAFC; color: #475569; border: 1.5px solid #E2E8F0; }
              .stg-btn-sm.danger { background: #FEF2F2; color: #F43F5E; border: 1.5px solid #FECDD3; }
              .stg-toggle { position: relative; display: inline-block; width: 46px; height: 26px; flex-shrink: 0; }
              .stg-toggle input { opacity: 0; width: 0; height: 0; }
              .stg-toggle-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #CBD5E1; transition: 0.3s; border-radius: 26px; }
              .stg-toggle-slider:before { position: absolute; content: ""; height: 20px; width: 20px; left: 3px; bottom: 3px; background: white; transition: 0.3s; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
              .stg-toggle input:checked + .stg-toggle-slider { background: #00A693; }
              .stg-toggle input:checked + .stg-toggle-slider:before { transform: translateX(20px); }
              .stg-day-btn { padding: 8px 14px; border-radius: 10px; font-size: 13px; font-weight: 800; cursor: pointer; border: 1.5px solid #E2E8F0; background: #F8FAFC; color: #64748B; transition: all 0.2s; }
              .stg-day-btn.active { background: #ECFDF5; border-color: #6EE7B7; color: #065F46; }
              .lang-btn { background: #F8FAFC; border: 1.5px solid #E2E8F0; color: #475569; }
              .lang-btn.active { background: #ECFDF5; border-color: #6EE7B7; color: #065F46; }
              .stg-footer { text-align: center; padding: 24px; font-size: 12px; color: #94A3B8; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 6px; }
            </style>

            <!-- Left navigation sidebar -->
            <div class="stg-sidebar">
                <p class="text-[10px] font-black uppercase tracking-[3px] text-slate-400 px-3 mb-2">Paramètres</p>
                ${sections.map(s => `
                <a href="#" class="stg-nav-item ${s.id === 'profile' ? 'active' : ''}" data-section="${s.id}" onclick="return false;">
                    <i data-lucide="${s.icon}" class="w-4 h-4"></i>
                    <span>${s.label}</span>
                </a>`).join('')}
                <div style="flex:1;"></div>
                <div class="stg-footer">
                    <i data-lucide="shield-check" class="w-4 h-4 text-emerald-500"></i>
                    <span>Vos données sont sécurisées par Vitalia</span>
                </div>
            </div>

            <!-- Main content -->
            <div class="stg-content" id="stg-main">
                ${sectionContent['profile']}
            </div>
        `;

        // Section navigation
        setTimeout(() => {
            if (window.lucide) lucide.createIcons({ el: wrapper });

            const navItems = wrapper.querySelectorAll('.stg-nav-item[data-section]');
            const mainArea = wrapper.querySelector('#stg-main');

            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    navItems.forEach(n => n.classList.remove('active'));
                    item.classList.add('active');
                    const sec = item.getAttribute('data-section');
                    mainArea.innerHTML = sectionContent[sec] || '<p class="text-slate-500 p-8">Section en cours de développement.</p>';
                    if (window.lucide) lucide.createIcons({ el: mainArea });

                    // Day button interactivity
                    mainArea.querySelectorAll('.stg-day-btn').forEach(btn => {
                        btn.addEventListener('click', () => btn.classList.toggle('active'));
                    });
                    // Lang button interactivity
                    mainArea.querySelectorAll('.lang-btn').forEach(btn => {
                        btn.addEventListener('click', () => {
                            mainArea.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                            btn.classList.add('active');
                        });
                    });
                    // Save button feedback
                    mainArea.querySelectorAll('.stg-btn-primary, .stg-btn-danger').forEach(btn => {
                        btn.addEventListener('click', () => {
                            const orig = btn.innerHTML;
                            btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Enregistré !';
                            btn.style.background = 'linear-gradient(135deg,#059669,#10B981)';
                            if (window.lucide) lucide.createIcons({ el: btn });
                            setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; if(window.lucide) lucide.createIcons({el:btn}); }, 2000);
                        });
                    });
                });
            });

            // Day button interactivity for initial view
            wrapper.querySelectorAll('.stg-day-btn').forEach(btn => {
                btn.addEventListener('click', () => btn.classList.toggle('active'));
            });
            // Save button feedback for initial view
            wrapper.querySelectorAll('.stg-btn-primary').forEach(btn => {
                btn.addEventListener('click', () => {
                    const orig = btn.innerHTML;
                    btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Enregistré !';
                    btn.style.background = 'linear-gradient(135deg,#059669,#10B981)';
                    if (window.lucide) lucide.createIcons({ el: btn });
                    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; if(window.lucide) lucide.createIcons({el:btn}); }, 2000);
                });
            });
        }, 80);

        return wrapper;
    },

};


window.openActesModal = function(patientId, patientName, patientAge, patientGender) {
    // 1. Existing check and remove
    if (document.getElementById('actes-modal-overlay')) {
        document.getElementById('actes-modal-overlay').remove();
    }

    // 2. Mock state for this modal
    let state = {
        patient: {
            name: patientName || 'Robert Dupont',
            age: patientAge || '54 ans',
            gender: patientGender || 'M',
            id: patientId || 'P-84732',
            coverageType: 'Assuré',
            coverageColor: '#10B981',
            coveragePct: 70
        },
        actes: [
            { id: 1, name: 'Consultation standard', price: 25.0, qty: 1 }
        ],
        produits: [],
        reduction: 0
    };

    // 3. Render functions
    const renderActes = () => {
        const tbody = document.getElementById('actes-tbody');
        if (!tbody) return;
        tbody.innerHTML = state.actes.map((a, i) => `
            <tr style="border-bottom: 1px solid #F1F5F9; transition: background 0.2s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='transparent'">
                <td style="padding:16px 12px;font-size:14px;font-weight:700;color:#1E293B;">${a.name}</td>
                <td style="padding:16px 12px;font-size:14px;color:#64748B;">${a.price.toFixed(2)} â‚¬</td>
                <td style="padding:16px 12px;">
                    <input type="number" min="1" value="${a.qty}" class="acte-qty-input" data-idx="${i}" data-type="actes" style="width:60px;padding:6px 10px;border-radius:8px;border:1.5px solid #E2E8F0;background:white;font-size:13px;font-weight:700;text-align:center;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='#00A693'" onblur="this.style.borderColor='#E2E8F0'">
                </td>
                <td style="padding:16px 12px;font-size:14px;font-weight:800;color:#0F172A;">${(a.price * a.qty).toFixed(2)} â‚¬</td>
                <td style="padding:16px 12px;text-align:right;">
                    <button class="delete-btn" data-idx="${i}" data-type="actes" style="width:32px;height:32px;border-radius:8px;border:none;background:rgba(244,63,94,0.05);color:#F43F5E;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all 0.2s;" onmouseover="this.style.background='#F43F5E';this.style.color='white'" onmouseout="this.style.background='rgba(244,63,94,0.05)';this.style.color='#F43F5E'">
                        <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
                    </button>
                </td>
            </tr>
        `).join('');
        lucide.createIcons({ el: tbody });
        attachListeners();
        updateTotals();
    };

    const renderProduits = () => {
        const tbody = document.getElementById('produits-tbody');
        if (!tbody) return;
        tbody.innerHTML = state.produits.length === 0 
        ? `<tr><td colspan="5" style="padding:24px;text-align:center;font-size:13px;font-weight:600;color:#94A3B8;border-bottom:1px solid #F1F5F9;">Aucun produit administré au cabinet</td></tr>`
        : state.produits.map((a, i) => `
            <tr style="border-bottom: 1px solid #F1F5F9; transition: background 0.2s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='transparent'">
                <td style="padding:16px 12px;font-size:14px;font-weight:700;color:#1E293B;">${a.name}</td>
                <td style="padding:16px 12px;font-size:14px;color:#64748B;">${a.price.toFixed(2)} â‚¬</td>
                <td style="padding:16px 12px;">
                    <input type="number" min="1" value="${a.qty}" class="acte-qty-input" data-idx="${i}" data-type="produits" style="width:60px;padding:6px 10px;border-radius:8px;border:1.5px solid #E2E8F0;background:white;font-size:13px;font-weight:700;text-align:center;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='#00A693'" onblur="this.style.borderColor='#E2E8F0'">
                </td>
                <td style="padding:16px 12px;font-size:14px;font-weight:800;color:#0F172A;">${(a.price * a.qty).toFixed(2)} â‚¬</td>
                <td style="padding:16px 12px;text-align:right;">
                    <button class="delete-btn" data-idx="${i}" data-type="produits" style="width:32px;height:32px;border-radius:8px;border:none;background:rgba(244,63,94,0.05);color:#F43F5E;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all 0.2s;" onmouseover="this.style.background='#F43F5E';this.style.color='white'" onmouseout="this.style.background='rgba(244,63,94,0.05)';this.style.color='#F43F5E'">
                        <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
                    </button>
                </td>
            </tr>
        `).join('');
        lucide.createIcons({ el: tbody });
        attachListeners();
        updateTotals();
    };

    const attachListeners = () => {
        document.querySelectorAll('#actes-modal-overlay .acte-qty-input').forEach(inp => {
            inp.addEventListener('input', (e) => {
                const idx = parseInt(e.target.dataset.idx);
                const type = e.target.dataset.type;
                const val = parseInt(e.target.value) || 1;
                state[type][idx].qty = val;
                type === 'actes' ? renderActes() : renderProduits();
                e.target.focus();
            });
        });

        document.querySelectorAll('#actes-modal-overlay .delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const b = e.currentTarget;
                const idx = parseInt(b.dataset.idx);
                const type = b.dataset.type;
                state[type].splice(idx, 1);
                type === 'actes' ? renderActes() : renderProduits();
            });
        });
        
        const reducInp = document.getElementById('reduction-input');
        if (reducInp && !reducInp.dataset.listening) {
            reducInp.dataset.listening = "true";
            reducInp.addEventListener('input', (e) => {
                state.reduction = parseFloat(e.target.value) || 0;
                updateTotals();
            });
        }
    };

    const updateTotals = () => {
        const totalGross = [...state.actes, ...state.produits].reduce((acc, a) => acc + (a.price * a.qty), 0);
        let discounted = totalGross - state.reduction;
        if(discounted < 0) discounted = 0;
        const coverageAmount = discounted * (state.patient.coveragePct / 100);
        const remaining = discounted;

        const elGross = document.getElementById('summary-gross');
        const elRem = document.getElementById('summary-remaining');
        
        if(elGross) elGross.innerText = totalGross.toFixed(2) + ' â‚¬';
        
        if(elRem) {
            elRem.innerText = remaining.toFixed(2) + ' â‚¬';
            
            // Animation flash
            elRem.style.transform = 'scale(1.05)';
            elRem.style.color = '#F59E0B';
            setTimeout(() => {
                elRem.style.transform = 'scale(1)';
                elRem.style.color = 'white';
            }, 200);
        }
    };

    // 4. Modal Container
    const overlay = document.createElement('div');
    overlay.id = 'actes-modal-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.backgroundColor = 'rgba(15, 23, 42, 0.6)';
    overlay.style.backdropFilter = 'blur(8px)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.25s cubic-bezier(0.16,1,0.3,1)';

    const modal = document.createElement('div');
    modal.style.width = '100%';
    modal.style.maxWidth = '1100px';
    modal.style.height = '90vh';
    modal.style.background = '#F8FAFC';
    modal.style.borderRadius = '24px';
    modal.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.overflow = 'hidden';
    modal.style.transform = 'translateY(20px) scale(0.98)';
    modal.style.transition = 'all 0.3s cubic-bezier(0.16,1,0.3,1)';

    // Header structure
    const headerHTML = `
        <div style="padding: 20px 32px; background: white; border-bottom: 1px solid #E2E8F0; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 16px;">
                <div style="width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, #00A693, #059669); color: white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,166,147,0.3);">
                    <i data-lucide="receipt" style="width: 24px; height: 24px;"></i>
                </div>
                <div>
                    <h2 style="font-size: 20px; font-weight: 900; color: #0F172A; margin: 0; letter-spacing: -0.5px;">Actes & Facturation</h2>
                    <div style="display:flex;align-items:center;gap:10px;margin-top:4px;">
                        <span style="font-size:13px;font-weight:700;color:#475569;">${state.patient.name}</span>
                        <span style="color:#CBD5E1;">&bull;</span>
                        <span style="font-size:13px;color:#64748B;">${state.patient.age} (${state.patient.gender})</span>
                        <span style="color:#CBD5E1;">&bull;</span>
                        <span style="font-size:13px;font-family:monospace;font-weight:800;color:#94A3B8;">${state.patient.id}</span>
                        <span style="padding:2px 8px;border-radius:12px;background:${state.patient.coverageColor}15;color:${state.patient.coverageColor};font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;margin-left:4px;">${state.patient.coverageType}</span>
                    </div>
                </div>
            </div>
            <button id="close-modal-btn" style="width: 36px; height: 36px; border-radius: 12px; border: 1.5px solid #E2E8F0; background: white; color: #64748B; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.background='#F1F5F9';this.style.color='#0F172A';" onmouseout="this.style.background='white';this.style.color='#64748B';">
                <i data-lucide="x" style="width: 18px; height: 18px;"></i>
            </button>
        </div>
    `;

    // Main Content
    const contentHTML = `
        <div style="flex: 1; min-height: 0; display: grid; grid-template-columns: 1fr 340px; overflow: hidden;">
            
            <!-- LEFT PANE (Lists) -->
            <div style="padding: 32px; overflow-y: auto; background: #F8FAFC; min-height: 0;">
                
                <!-- Actes Section -->
                <div style="background: white; border-radius: 20px; border: 1px solid #E2E8F0; padding: 24px; margin-bottom: 24px; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="font-size: 16px; font-weight: 900; color: #0F172A; display: flex; align-items: center; gap: 8px;">
                            <i data-lucide="activity" style="color:#00A693;width:20px;"></i> Actes réalisés
                        </h3>
                        <button id="add-acte-btn" style="padding: 8px 16px; border-radius: 12px; background: rgba(0,166,147,0.08); color: #00A693; border: none; font-size: 13px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;" onmouseover="this.style.background='#00A693';this.style.color='white'" onmouseout="this.style.background='rgba(0,166,147,0.08)';this.style.color='#00A693'">
                            <i data-lucide="plus" style="width: 16px; height: 16px;"></i> Ajouter
                        </button>
                    </div>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="border-bottom: 2px solid #F1F5F9;">
                                <th style="padding:12px;text-align:left;font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;width:40%;">Acte</th>
                                <th style="padding:12px;text-align:left;font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;width:20%;">Prix U.</th>
                                <th style="padding:12px;text-align:left;font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;width:15%;">Qté</th>
                                <th style="padding:12px;text-align:left;font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;width:15%;">Total</th>
                                <th style="padding:12px;width:10%;"></th>
                            </tr>
                        </thead>
                        <tbody id="actes-tbody"></tbody>
                    </table>

                    <!-- Auto-suggestions -->
                    <div style="margin-top: 20px; padding-top: 16px; border-top: 1px dashed #E2E8F0;">
                        <span style="font-size: 11px; font-weight: 800; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 12px;">Suggestions IA :</span>
                        <div style="display: inline-flex; gap: 8px;">
                            ${[
                                {name:'ECG repos', price:14.26},
                                {name:'Frottis', price:15.36},
                                {name:'Suture', price:48.20}
                            ].map(s => `
                            <button class="suggest-btn" data-name="${s.name}" data-price="${s.price}" data-type="actes" style="padding: 6px 14px; border-radius: 20px; border: 1.5px solid #E2E8F0; background: white; color: #475569; font-size: 12px; font-weight: 700; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.borderColor='#00A693';this.style.color='#00A693'" onmouseout="this.style.borderColor='#E2E8F0';this.style.color='#475569'">
                                + ${s.name} (${s.price}â‚¬)
                            </button>`).join('')}
                        </div>
                    </div>
                </div>

                <!-- Produits Section -->
                <div style="background: white; border-radius: 20px; border: 1px solid #E2E8F0; padding: 24px; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="font-size: 16px; font-weight: 900; color: #0F172A; display: flex; align-items: center; gap: 8px;">
                            <i data-lucide="pill" style="color:#6366F1;width:20px;"></i> Produits & Médicaments
                        </h3>
                        <button id="add-produit-btn" style="padding: 8px 16px; border-radius: 12px; background: rgba(99,102,241,0.08); color: #6366F1; border: none; font-size: 13px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;" onmouseover="this.style.background='#6366F1';this.style.color='white'" onmouseout="this.style.background='rgba(99,102,241,0.08)';this.style.color='#6366F1'">
                            <i data-lucide="plus" style="width: 16px; height: 16px;"></i> Ajouter
                        </button>
                    </div>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="border-bottom: 2px solid #F1F5F9;">
                                <th style="padding:12px;text-align:left;font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;width:40%;">Produit</th>
                                <th style="padding:12px;text-align:left;font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;width:20%;">Prix U.</th>
                                <th style="padding:12px;text-align:left;font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;width:15%;">Qté</th>
                                <th style="padding:12px;text-align:left;font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;width:15%;">Total</th>
                                <th style="padding:12px;width:10%;"></th>
                            </tr>
                        </thead>
                        <tbody id="produits-tbody"></tbody>
                    </table>
                </div>

            </div>

            <!-- RIGHT PANE (Summary) -->
            <div style="background: white; border-left: 1px solid #E2E8F0; display: flex; flex-direction: column; min-height: 0;">
                <div style="padding: 32px 24px; flex: 1; overflow-y: auto;">
                    <h3 style="font-size: 16px; font-weight: 900; color: #0F172A; margin-bottom: 24px; display:flex; align-items:center; gap:8px;">
                        <i data-lucide="calculator" style="color:#00A693;width:18px;"></i> Résumé Facturation
                    </h3>

                    <!-- Calculation lines -->
                    <div style="display:flex; justify-content:space-between; margin-bottom: 16px;">
                        <span style="font-size: 14px; color: #475569; font-weight: 600;">Total Brut</span>
                        <span id="summary-gross" style="font-size: 15px; font-weight: 800; color: #1E293B;">0.00 â‚¬</span>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
                        <span style="font-size: 14px; color: #475569; font-weight: 600;">Réduction</span>
                        <div style="display:flex; align-items:center;">
                            <span style="font-size:14px; font-weight:700; color:#F43F5E; margin-right:4px;">-</span>
                            <input type="number" id="reduction-input" min="0" value="0.00" step="0.5" style="width:64px; padding:6px 8px; border-radius:8px; border:1px solid #E2E8F0; background:#F8FAFC; text-align:right; font-size:13px; font-weight:800; color:#F43F5E; outline:none; transition:border 0.2s;" onfocus="this.style.borderColor='#F43F5E'">
                        </div>
                    </div>


                    <!-- Final Total -->
                    <div style="background: linear-gradient(135deg, #0F172A, #1E1B4B); border-radius: 16px; padding: 20px; color: white;">
                        <p style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #94A3B8; margin-bottom: 4px;">Reste à payer (Patient)</p>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span id="summary-remaining" style="font-size: 34px; font-weight: 900; letter-spacing: -1px; transition: all 0.2s;">0.00 â‚¬</span>
                        </div>
                    </div>

                    <div style="margin-top: 24px; padding: 16px; border-radius: 14px; background: rgba(245,158,11,0.08); border: 1px dashed rgba(245,158,11,0.3); display: flex; gap: 12px;">
                        <i data-lucide="info" style="color: #D97706; width: 18px; flex-shrink: 0;"></i>
                        <p style="font-size: 12px; font-weight: 600; color: #B45309; margin: 0; line-height: 1.5;">Vous préparez la facturation. L'encaissement sera géré par l'administration.</p>
                    </div>

                </div>

                <!-- Footer Actions -->
                <div style="padding: 24px; background: #F8FAFC; border-top: 1px solid #E2E8F0; display: flex; flex-direction: column; gap: 12px;">
                    <button id="submit-billing-btn" style="width: 100%; padding: 16px; border-radius: 14px; background: linear-gradient(135deg, #00A693, #059669); color: white; border: none; font-size: 14px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 16px rgba(0,166,147,0.3); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <i data-lucide="send" style="width: 18px; height: 18px;"></i> Envoyer à la facturation
                    </button>
                    <button id="save-draft-btn" style="width: 100%; padding: 14px; border-radius: 14px; background: white; color: #475569; border: 1.5px solid #E2E8F0; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='#F1F5F9'" onmouseout="this.style.background='white'">
                        Enregistrer Brouillon
                    </button>
                </div>
            </div>

        </div>
    `;

    modal.innerHTML = headerHTML + contentHTML;
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Initial render
    renderActes();
    renderProduits();

    // Event listeners for close
    document.getElementById('close-modal-btn').addEventListener('click', () => {
        overlay.style.opacity = '0';
        modal.style.transform = 'translateY(20px) scale(0.98)';
        setTimeout(() => overlay.remove(), 250);
    });

    // Auto-suggestions listener
    document.querySelectorAll('.suggest-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const b = e.currentTarget;
            state.actes.push({ name: b.dataset.name, price: parseFloat(b.dataset.price), qty: 1 });
            renderActes();
        });
    });

    // Submit animation
    document.getElementById('submit-billing-btn').addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const origWidth = btn.offsetWidth;
        btn.style.width = origWidth + 'px';
        btn.innerHTML = '<i data-lucide="loader-2" class="animate-spin" style="width:18px;"></i> Transfert...';
        if(window.lucide) lucide.createIcons({el:btn});
        
        setTimeout(() => {
            btn.innerHTML = '<i data-lucide="check-circle" style="width:18px;"></i> Transmis';
            if(window.lucide) lucide.createIcons({el:btn});
            btn.style.background = '#10B981';
            
            setTimeout(() => {
                document.getElementById('close-modal-btn').click();
            }, 800);
        }, 1200);
    });

    document.getElementById('save-draft-btn').addEventListener('click', () => {
        document.getElementById('close-modal-btn').click();
    });

    // Animation in
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        modal.style.transform = 'translateY(0) scale(1)';
    });
};


