/**
 * Vitalia Clinic Manager - Full SaaS Interface
 * Modern, ultra-fluid medical management for African clinics.
 * Design: Stripe/Linear/Notion inspired â€” white, medical blue, soft greys
 */

// =========================================================================
//  STATE & ENGINE INTEGRATION
// =========================================================================
const COMMON_SPECIALTIES = [
    "Médecine Générale", "Cardiologie", "Pédiatrie", "Gynécologie", "Dermatologie",
    "Ophtalmologie", "Dentaire", "Radiologie", "Laboratoire", "Chirurgie",
    "Gastro-entérologie", "Neurologie", "ORL", "Kinésithérapie", "Psychiatrie",
    "Urologie", "Endocrinologie", "Rhumatologie", "Néphrologie", "Médecine Interne"
];

let clinicState = {
    selectedDate: new Date().toISOString().split('T')[0],
    selectedClinicId: 'clinic_1',
    activeSpecialtyId: null,
    patientSearchQuery: '',
    pendingBookingPatientId: null,
    dossierPatientId: null
};

const ClinicViews = {

    // =========================================================================
    //  LAYOUT
    // =========================================================================
    Layout: (subView = 'appointments') => {
        const clinic = MOCK_DATA.clinics.find(c => c.id === clinicState.selectedClinicId);
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'display:flex;height:100vh;overflow:hidden;background:#F8FAFC;font-family:"Inter",system-ui,sans-serif;-ms-overflow-style:-ms-autohiding-scrollbar;';

        const navItems = [
            { id: 'appointments', icon: 'calendar',         label: 'Rendez-vous' },
            { id: 'doctors',      icon: 'stethoscope',      label: 'Nos médecins' },
            { id: 'patients',     icon: 'users',            label: 'Patients' },
            { id: 'smart_planning',icon: 'calendar-clock',  label: 'Planif. Intelligente' },
            { id: 'dossiers',     icon: 'folder-open',      label: 'Dossiers médicaux' },
            { id: 'facturation',  icon: 'credit-card',      label: 'Facturation' },
            { id: 'stats',        icon: 'bar-chart-2',      label: 'Statistiques' },
            { id: 'settings',     icon: 'settings',         label: 'Paramètres' },
        ];

        wrapper.innerHTML = `
        <style>
            .cv-sidebar { width:220px;background:#0F172A;display:flex;flex-direction:column;flex-shrink:0;border-right:1px solid rgba(255,255,255,0.06); }
            .cv-logo { padding:24px 20px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(255,255,255,0.06);cursor:pointer; }
            .cv-logo-icon { width:36px;height:36px;background:linear-gradient(135deg,#3B82F6,#2563EB);border-radius:10px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(59,130,246,0.4); }
            .cv-logo span { font-size:18px;font-weight:800;color:#fff;letter-spacing:-0.5px; }
            .cv-nav { flex:1;padding:12px 10px;overflow-y:auto;display:flex;flex-direction:column;gap:2px; scrollbar-width: none; -ms-overflow-style: none; }
            .cv-nav::-webkit-scrollbar{width:0;}
            .cv-nav-section { font-size:9px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:1.2px;padding:14px 10px 6px; }
            .cv-nav-item { display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;cursor:pointer;transition:all 0.15s;color:#94A3B8;font-size:13px;font-weight:500;border:none;background:none;width:100%;text-align:left; }
            .cv-nav-item:hover { background:rgba(255,255,255,0.07);color:#E2E8F0; }
            .cv-nav-item.active { background:rgba(59,130,246,0.2);color:#60A5FA;font-weight:600; }
            .cv-nav-item.active svg { color:#3B82F6; }
            .cv-nav-item svg { width:16px;height:16px;flex-shrink:0; }
            .cv-footer { padding:16px 12px;border-top:1px solid rgba(255,255,255,0.06); }
            .cv-user { display:flex;align-items:center;gap:10px;padding:8px;border-radius:8px;cursor:pointer; }
            .cv-user:hover { background:rgba(255,255,255,0.05); }
            .cv-user img { width:34px;height:34px;border-radius:50%;border:2px solid rgba(59,130,246,0.5); }
            .cv-user-info span { display:block;font-size:12px;font-weight:700;color:#E2E8F0;line-height:1.3; }
            .cv-user-info small { font-size:10px;font-weight:500;color:#64748B;text-transform:uppercase;letter-spacing:0.5px; }
            .cv-body { flex:1;display:flex;flex-direction:column;overflow:hidden; }
            .cv-topbar { height:60px;background:#fff;border-bottom:1px solid #E2E8F0;display:flex;align-items:center;justify-content:space-between;padding:0 28px;flex-shrink:0;box-shadow:0 1px 3px rgba(0,0,0,0.04); }
            .cv-topbar-search { position:relative;flex:1;max-width:400px; }
            .cv-topbar-search input { width:100%;height:38px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:0 14px 0 38px;font-size:13px;font-weight:400;color:#1E293B;outline:none;transition:all 0.2s; }
            .cv-topbar-search input:focus { border-color:#3B82F6;box-shadow:0 0 0 3px rgba(59,130,246,0.1);background:#fff; }
            .cv-topbar-search svg { position:absolute;left:12px;top:50%;transform:translateY(-50%);width:15px;height:15px;color:#94A3B8; }
            .cv-topbar-actions { display:flex;align-items:center;gap:12px; }
            .cv-badge-online { display:flex;align-items:center;gap:6px;padding:5px 12px;background:#ECFDF5;border-radius:20px;font-size:10px;font-weight:700;color:#065F46;text-transform:uppercase;letter-spacing:0.5px; }
            .cv-badge-dot { width:6px;height:6px;background:#10B981;border-radius:50%;animation:pulse 2s infinite; }
            @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
            .cv-icon-btn { width:36px;height:36px;border-radius:8px;border:1px solid #E2E8F0;background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.15s;position:relative; }
            .cv-icon-btn:hover { background:#F8FAFC;border-color:#CBD5E1; }
            .cv-icon-btn svg { width:16px;height:16px;color:#64748B; }
            .cv-notif-dot { position:absolute;top:7px;right:7px;width:6px;height:6px;background:#EF4444;border-radius:50%;border:1.5px solid #fff; }
            .cv-btn-urgent { height:36px;padding:0 16px;background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;color:#DC2626;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all 0.15s; }
            .cv-btn-urgent:hover { background:#FEE2E2; }
            .cv-btn-urgent svg { width:14px;height:14px; }
            .cv-content { flex:1;overflow-y:auto;padding:24px;background:#F8FAFC; scrollbar-width: thin; scrollbar-color: #CBD5E1 transparent; -ms-overflow-style: -ms-autohiding-scrollbar; }
            .cv-content::-webkit-scrollbar{width:5px;}
            .cv-content::-webkit-scrollbar-track{background:transparent;}
            .cv-content::-webkit-scrollbar-thumb{background:#CBD5E1;border-radius:3px;}
            /* Day Select Buttons */
            .day-select-btn.active { background: #3B82F6 !important; color: #fff !important; border-color: #2563EB !important; box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3); }
            .day-select-btn.configured { background: #10B981 !important; color: #fff !important; border-color: #059669 !important; }
            /* Cards */
            .cv-card { background:#fff;border-radius:14px;border:1px solid #E2E8F0;box-shadow:0 1px 4px rgba(0,0,0,0.04); }
            .cv-card-hover:hover { box-shadow:0 4px 20px rgba(0,0,0,0.08);border-color:#CBD5E1;transform:translateY(-1px);transition:all 0.2s; }
            /* KPI */
            .cv-kpi-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:20px; }
            .cv-kpi { padding:20px;border-radius:14px;border:1px solid #E2E8F0;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.04); }
            .cv-kpi-icon { width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:14px; }
            .cv-kpi-icon svg { width:18px;height:18px; }
            .cv-kpi-val { font-size:28px;font-weight:800;color:#0F172A;line-height:1;letter-spacing:-1px;margin-bottom:4px; }
            .cv-kpi-label { font-size:11px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px; }
            .cv-kpi-trend { font-size:10px;font-weight:700;margin-top:8px; }
            /* Section */
            .cv-section-title { font-size:14px;font-weight:700;color:#1E293B;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between; }
            .cv-section-title a { font-size:11px;font-weight:600;color:#3B82F6;cursor:pointer; }
            .cv-section-title a:hover { text-decoration:underline; }
            /* Table */
            .cv-table { width:100%;border-collapse:collapse; }
            .cv-table th { font-size:10px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.8px;padding:10px 16px;border-bottom:1px solid #F1F5F9;text-align:left; }
            .cv-table td { padding:12px 16px;border-bottom:1px solid #F8FAFC;font-size:13px;color:#334155;vertical-align:middle; }
            .cv-table tr:last-child td { border-bottom:none; }
            .cv-table tr:hover td { background:#F8FAFC; }
            /* Badges */
            .cv-badge { display:inline-flex;align-items:center;padding:3px 10px;border-radius:20px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.3px; }
            .cv-badge-green { background:#DCFCE7;color:#166534; }
            .cv-badge-amber { background:#FEF3C7;color:#92400E; }
            .cv-badge-red { background:#FEE2E2;color:#991B1B; }
            .cv-badge-blue { background:#DBEAFE;color:#1E40AF; }
            .cv-badge-slate { background:#F1F5F9;color:#475569; }
            /* Buttons */
            .cv-btn { height:34px;padding:0 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;border:none;transition:all 0.15s; }
            .cv-btn svg { width:13px;height:13px; }
            .cv-btn-primary { background:#2563EB;color:#fff;box-shadow:0 2px 8px rgba(37,99,235,0.25); }
            .cv-btn-primary:hover { background:#1D4ED8;transform:translateY(-1px); }
            .cv-btn-ghost { background:#F8FAFC;color:#64748B;border:1px solid #E2E8F0; }
            .cv-btn-ghost:hover { background:#F1F5F9;color:#334155; }
            /* Animate */
            @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
            .cv-animate { animation:fadeUp 0.25s ease-out; }
            /* Avatar */
            .cv-avatar { border-radius:50%;overflow:hidden;flex-shrink:0; }
            /* Progress */
            .cv-progress { height:6px;background:#F1F5F9;border-radius:3px;overflow:hidden; }
            .cv-progress-bar { height:100%;border-radius:3px;background:linear-gradient(90deg,#3B82F6,#60A5FA); }
            /* Status dot */
            .cv-status { width:8px;height:8px;border-radius:50%;display:inline-block; }
            .cv-status-green { background:#10B981; }
            .cv-status-amber { background:#F59E0B; }
            .cv-status-red { background:#EF4444; }
            .cv-status-slate { background:#CBD5E1; }
            /* Timeline */
            .cv-timeline-item { position:relative;padding-left:28px;padding-bottom:20px; }
            .cv-timeline-item::before { content:'';position:absolute;left:7px;top:20px;bottom:0;width:1px;background:#E2E8F0; }
            .cv-timeline-item:last-child::before { display:none; }
            .cv-timeline-dot { position:absolute;left:0;top:4px;width:15px;height:15px;border-radius:50%;background:#3B82F6;border:2px solid #fff;box-shadow:0 0 0 2px #DBEAFE; }
            /* Chat */
            .cv-chat-bubble { padding:10px 14px;border-radius:12px;max-width:75%;font-size:13px;line-height:1.5; }
            .cv-chat-mine { background:#2563EB;color:#fff;border-radius:12px 12px 2px 12px;align-self:flex-end; }
            .cv-chat-other { background:#F1F5F9;color:#334155;border-radius:12px 12px 12px 2px;align-self:flex-start; }
            /* Stat bar */
            .cv-stat-row { display:flex;align-items:center;gap:12px;margin-bottom:14px; }
            .cv-stat-label { font-size:12px;font-weight:600;color:#475569;width:120px;flex-shrink:0; }
            .cv-stat-bar { flex:1;height:8px;background:#F1F5F9;border-radius:4px;overflow:hidden; }
            .cv-stat-fill { height:100%;border-radius:4px; }
            .cv-stat-val { font-size:12px;font-weight:700;color:#1E293B;width:36px;text-align:right;flex-shrink:0; }
            /* Input */
            .cv-input { height:38px;border:1px solid #E2E8F0;border-radius:8px;padding:0 12px;font-size:13px;color:#1E293B;outline:none;transition:all 0.2s;width:100%; }
            .cv-input:focus { border-color:#3B82F6;box-shadow:0 0 0 3px rgba(59,130,246,0.1); }
            .cv-textarea { border:1px solid #E2E8F0;border-radius:8px;padding:10px 12px;font-size:13px;color:#1E293B;outline:none;transition:all 0.2s;width:100%;resize:none; }
            .cv-textarea:focus { border-color:#3B82F6;box-shadow:0 0 0 3px rgba(59,130,246,0.1); }
            .cv-label { display:block;font-size:11px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px; }
        </style>

        <!-- SIDEBAR -->
        <aside class="cv-sidebar">
            <div class="cv-logo" onclick="handleNavigation('landing')">
                <div class="cv-logo-icon">
                    <i data-lucide="cross" style="width:18px;height:18px;color:#fff;transform:rotate(45deg)"></i>
                </div>
                <span>Vitalia</span>
            </div>

            <nav class="cv-nav">
                ${navItems.slice(0, 1).map(n => `
                <button class="cv-nav-item ${subView === n.id ? 'active' : ''}" onclick="handleClinicNav('${n.id}')">
                    <i data-lucide="${n.icon}"></i><span>${n.label}</span>
                </button>`).join('')}

                ${navItems.slice(1, 5).map(n => `
                <button class="cv-nav-item ${subView === n.id ? 'active' : ''}" onclick="handleClinicNav('${n.id}')">
                    <i data-lucide="${n.icon}"></i><span>${n.label}</span>
                </button>`).join('')}

                <div class="cv-nav-section">Finance & Ops</div>
                ${navItems.slice(5, 6).map(n => `
                <button class="cv-nav-item ${subView === n.id ? 'active' : ''}" onclick="handleClinicNav('${n.id}')">
                    <i data-lucide="${n.icon}"></i><span>${n.label}</span>
                </button>`).join('')}

                <div class="cv-nav-section">Analyse</div>
                ${navItems.slice(6).map(n => `
                <button class="cv-nav-item ${subView === n.id ? 'active' : ''}" onclick="handleClinicNav('${n.id}')">
                    <i data-lucide="${n.icon}"></i><span>${n.label}</span>
                </button>`).join('')}
            </nav>

            <div class="cv-footer">
                <div class="cv-user">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" class="cv-avatar" alt="Admin">
                    <div class="cv-user-info">
                        <span>Amadou Koné</span>
                        <small>Administrateur</small>
                    </div>
                </div>
            </div>
        </aside>

        <!-- MAIN BODY -->
        <div class="cv-body">
            <!-- TOP BAR -->
            <header class="cv-topbar" style="justify-content:space-between;">
                <div style="display:flex; flex-direction:column;">
                    <h2 style="font-size:16px; font-weight:800; color:#0F172A; margin:0;">${clinic.name}</h2>
                    <div style="display:flex; gap:12px; font-size:11px; color:#64748B; margin-top:2px;">
                        <span><i data-lucide="map-pin" style="width:10px; height:10px; display:inline; margin-right:4px;"></i>${clinic.address}</span>
                        <span><i data-lucide="phone" style="width:10px; height:10px; display:inline; margin-right:4px;"></i>${clinic.phone}</span>
                    </div>
                </div>
                <div class="cv-topbar-actions">
                    <div class="cv-badge-online">
                        <span class="cv-badge-dot"></span>
                        Système actif
                    </div>
                </div>
            </header>

            <!-- PAGE CONTENT -->
            <div class="cv-content" id="clinic-content-inner"></div>
        </div>
        `;

        setTimeout(() => {
            const inner = wrapper.querySelector('#clinic-content-inner');
            if (!inner) return;
            switch(subView) {
                case 'dashboard':    inner.innerHTML = ClinicViews.Dashboard(); break;
                case 'doctors':      inner.innerHTML = ClinicViews.Doctors(); break;
                case 'patients':     inner.innerHTML = ClinicViews.Patients(); break;
                case 'appointments': inner.innerHTML = ClinicViews.Appointments(); break;
                case 'smart_planning':inner.innerHTML = ClinicViews.SmartPlanning(); break;
                case 'dossiers':     inner.innerHTML = ClinicViews.Dossiers(); break;
                case 'prescriptions':inner.innerHTML = ClinicViews.Prescriptions(); break;
                case 'labo':         inner.innerHTML = ClinicViews.Labo(); break;
                case 'facturation':  inner.innerHTML = ClinicViews.Facturation(); break;
                case 'stock':        inner.innerHTML = ClinicViews.Stock(); break;
                case 'messages':     inner.innerHTML = ClinicViews.Messages(); break;
                case 'stats':        inner.innerHTML = ClinicViews.Statistics(); break;
                case 'settings':     inner.innerHTML = ClinicViews.Settings(); break;
                default:             inner.innerHTML = ClinicViews.Appointments();
            }
            if (window.lucide) lucide.createIcons();
        }, 0);

        return wrapper;
    },

    // =========================================================================
    //  PLANIFICATION INTELLIGENTE
    // =========================================================================
    SmartPlanning: () => {
        return `<div class="cv-animate" style="display:flex;flex-direction:column;height:100%;background:#F8FAFC;">
            <div style="padding:24px 32px;flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:24px;">
                <!-- Header & Top Actions -->
                <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                    <div>
                        <h1 style="font-size:24px;font-weight:900;color:#0F172A;letter-spacing:-0.5px;display:flex;align-items:center;gap:12px;margin:0;">
                            Planification Algorithmique des Médecins
                            <span style="background:linear-gradient(135deg,#3B82F6,#2563EB);color:#fff;font-size:10px;padding:3px 10px;border-radius:12px;text-transform:uppercase;letter-spacing:1px;font-weight:900;">Vitalia AI</span>
                        </h1>
                        <p style="font-size:13px;font-weight:600;color:#64748B;margin:6px 0 0;">L'IA génère les plannings, ajuste les durées de consultation selon la complexité et équilibre la charge avant l'attribution des patients.</p>
                    </div>
                    <div style="display:flex;gap:12px;">
                        <button id="btn-generate-schedules" class="bg-slate-900" style="padding:10px 20px;border:none;border-radius:12px;font-size:12px;font-weight:800;color:#fff;display:flex;align-items:center;gap:8px;box-shadow:0 10px 25px rgba(15,23,42,0.3);cursor:pointer;transition:all 0.2s;" onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 12px 30px rgba(15,23,42,0.4)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 10px 25px rgba(15,23,42,0.3)'">
                            <i data-lucide="sparkles" style="width:14px;height:14px;color:#FCD34D;"></i> Générer Plannings Auto
                        </button>
                    </div>
                </div>

                <!-- AI Quick Stats Bar -->
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
                    <!-- Stat 1 -->
                    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 10px rgba(0,0,0,0.02);">
                        <div style="width:40px;height:40px;background:#EEF2FF;border-radius:12px;display:flex;align-items:center;justify-content:center;"><i data-lucide="stethoscope" style="width:18px;height:18px;color:#4F46E5;"></i></div>
                        <div>
                            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#94A3B8;">Médecins Actifs</div>
                            <div style="font-size:20px;font-weight:900;color:#0F172A;letter-spacing:-0.5px;">5 / 8</div>
                        </div>
                    </div>
                    <!-- Stat 2 -->
                    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 10px rgba(0,0,0,0.02);">
                        <div style="width:40px;height:40px;background:#F0FDF4;border-radius:12px;display:flex;align-items:center;justify-content:center;"><i data-lucide="scale" style="width:18px;height:18px;color:#10B981;"></i></div>
                        <div>
                            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#94A3B8;">Équilibre Charge</div>
                            <div style="font-size:20px;font-weight:900;color:#0F172A;letter-spacing:-0.5px;">92%</div>
                        </div>
                    </div>

                    <!-- Stat 4 -->
                    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;box-shadow:0 2px 10px rgba(0,0,0,0.02);">
                        <div style="width:40px;height:40px;background:#FEF9C3;border-radius:12px;display:flex;align-items:center;justify-content:center;"><i data-lucide="history" style="width:18px;height:18px;color:#CA8A04;"></i></div>
                        <div>
                            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#94A3B8;">Analyse Historique</div>
                            <div style="font-size:20px;font-weight:900;color:#0F172A;letter-spacing:-0.5px;">Activée</div>
                        </div>
                    </div>
                </div>

                <!-- Doctors Shifts List -->
                <div style="display:flex;flex-direction:column;gap:16px;padding-bottom:100px;">
                    ${MOCK_DATA.doctors.filter(d => d.status !== 'offline').map(dr => {
                        const drSchedule = MOCK_DATA.schedule.filter(s => {
                            return true; // placeholder
                        });
                        
                        const drLoad = dr.load || 0;

                        return `
                        <div style="background:#fff;border-radius:20px;border:1px solid #E2E8F0;box-shadow:0 4px 12px rgba(0,0,0,0.02);overflow:hidden;">
                            <!-- Header -->
                            <div style="padding:20px 24px;border-bottom:1px solid #F1F5F9;display:flex;justify-content:space-between;align-items:center;background:#FAFAFA;">
                                <div style="display:flex;align-items:center;gap:16px;">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${dr.name}" style="width:48px;height:48px;border-radius:16px;background:#E2E8F0;">
                                    <div>
                                        <div style="font-size:16px;font-weight:800;color:#0F172A;">${dr.name}</div>
                                        <div style="font-size:12px;font-weight:600;color:#64748B;">${dr.role} â€¢ Présence planifiée: 08:00 - 18:00</div>
                                    </div>
                                </div>
                                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;width:250px;">
                                    <div style="display:flex;justify-content:space-between;width:100%;font-size:12px;font-weight:700;">
                                        <span style="color:#64748B;">Charge Optimisée</span>
                                        <span style="color:${drLoad > 80 ? '#EF4444' : '#3B82F6'};">${drLoad}%</span>
                                    </div>
                                    <div style="height:6px;width:100%;background:#E2E8F0;border-radius:4px;overflow:hidden;">
                                        <div style="height:100%;width:${drLoad}%;background:linear-gradient(90deg,${drLoad > 80 ? '#EF4444, #F87171' : '#3B82F6, #60A5FA'});border-radius:4px;"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Shift Timeline Blocks -->
                            <div style="padding:20px 24px;display:flex;gap:16px;overflow-x:auto;">
                                ${MOCK_DATA.schedule.filter(s => s.doctorId === dr.id || (!s.doctorId && MOCK_DATA.doctors.indexOf(dr) === 0)).map(appt => `
                                    <div style="min-width:240px;flex:1;background:${appt.type === 'block' ? '#FEF2F2' : appt.type === 'teleconsultation' ? '#F0FDF4' : '#F8FAFC'};border-radius:12px;padding:12px 16px;border:1px solid ${appt.type === 'block' ? '#FECACA' : appt.type === 'teleconsultation' ? '#BBF7D0' : '#E2E8F0'};border-left:4px solid ${appt.type === 'block' ? '#EF4444' : appt.type === 'teleconsultation' ? '#10B981' : '#3B82F6'};">
                                        <div style="font-size:11px;font-weight:800;color:${appt.type === 'block' ? '#EF4444' : appt.type === 'teleconsultation' ? '#10B981' : '#3B82F6'};margin-bottom:4px;">${appt.time} (${appt.length} min)</div>
                                        <div style="font-size:13px;font-weight:700;color:#1E293B;">${appt.patient}</div>
                                        <div style="font-size:11px;color:#64748B;margin-top:4px;display:flex;align-items:center;gap:4px;">
                                            <i data-lucide="${appt.type === 'teleconsultation' ? 'video' : appt.type === 'block' ? 'zap' : 'user'}" style="width:12px;height:12px;"></i> 
                                            ${appt.motif}
                                        </div>
                                        ${appt.complexity === 'High' ? `<div style="margin-top:6px;font-size:9px;font-weight:900;color:#4F46E5;text-transform:uppercase;letter-spacing:0.5px;display:flex;align-items:center;gap:4px;"><i data-lucide="brain" class="w-2.5 h-2.5"></i> Cas Complexe (Vitalia+)</div>` : ''}
                                    </div>
                                `).join('')}
                                ${MOCK_DATA.schedule.length === 0 ? `<div style="font-size:13px;color:#94A3B8;padding:20px;">Aucun planning généré. Cliquez sur "Générer Plannings Auto" pour commencer.</div>` : ''}
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>`;
    },

    // =========================================================================
    //  DASHBOARD
    // =========================================================================
    Dashboard: () => {
        const clinic = MOCK_DATA.clinics.find(c => c.id === clinicState.selectedClinicId);
        const kpis = [
            { label:'Patients / Jour', val:'47', icon:'users', color:'#3B82F6', bg:'#DBEAFE', trend:'+8%', up:true },
            { label:'En attente', val:'12', icon:'clock', color:'#F59E0B', bg:'#FEF3C7', trend:'Moyen', up:null },
            { label:'En consultation', val:'4', icon:'stethoscope', color:'#8B5CF6', bg:'#EDE9FE', trend:'Stable', up:null },
            { label:'Tps attente moy.', val:'18m', icon:'timer', color:'#10B981', bg:'#DCFCE7', trend:'-3m', up:true },
            { label:'Recette du jour', val:'2.4M', icon:'banknote', color:'#0EA5E9', bg:'#E0F2FE', trend:'+400k', up:true },
            { label:'RDV demain', val:'31', icon:'calendar-check', color:'#6366F1', bg:'#EEF2FF', trend:'Complet', up:null },
        ];
        
        // ... rest of data ... (omitted for matching, but will keep original logic)
        
        const activity = [
            { name:'Diallo Mariam', action:'Paiement en attente — Consultation Générale', time:'2m', icon:'credit-card', color:'#F59E0B', status:'amber' },
            { name:'Kouamé Serge', action:'Assigné au Dr Sophie (ORL)', time:'5m', icon:'arrow-right-circle', color:'#3B82F6', status:'blue' },
            { name:'Keita Ousmane', action:'Consultation terminée — Dossier fermé', time:'12m', icon:'check-circle', color:'#10B981', status:'green' },
            { name:'Sarra Diallo', action:'Résultats labo disponibles', time:'20m', icon:'flask-conical', color:'#8B5CF6', status:'slate' },
            { name:'Bamba Koné', action:'Vitaux enregistrés par Inf. Mariam', time:'28m', icon:'thermometer', color:'#6366F1', status:'blue' },
        ];

        const queue = [
            { name:'Touré Aminata', wait:'45m', doctor:'Dr Esdras', type:'RDV', urgent:true },
            { name:'N\'Dri Jean-Paul', wait:'22m', doctor:'Dr Sophie', type:'Sans RDV', urgent:false },
            { name:'Koné Fatou', wait:'15m', doctor:'Dr Amon', type:'RDV', urgent:false },
            { name:'Dembélé Ibrahim', wait:'8m', doctor:'Dr Esdras', type:'Télé', urgent:false },
        ];

        return `<div class="cv-animate" style="display:flex;flex-direction:column;gap:24px;">
            <!-- Header -->
            <div style="display:flex;align-items:flex-start;justify-content:space-between;">
                <div>
                    <h1 style="font-size:22px;font-weight:800;color:#0F172A;letter-spacing:-0.5px;">Bonjour, Amadou 👋</h1>
                    <p style="font-size:13px;color:#64748B;margin-top:4px;">${new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} — ${clinic.name}</p>
                </div>
                <div style="display:flex;gap:10px;">
                    <button class="cv-btn cv-btn-ghost">
                        <i data-lucide="download" style="width:13px;height:13px;"></i> Export
                    </button>
                    <button class="cv-btn cv-btn-primary" onclick="handleClinicNav('appointments')">
                        <i data-lucide="plus" style="width:13px;height:13px;"></i> Nouveau RDV
                    </button>
                </div>
            </div>

            <!-- KPIs -->
            <div class="cv-kpi-grid">
                ${kpis.map(k => `
                <div class="cv-kpi cv-card-hover" style="cursor:pointer;">
                    <div class="cv-kpi-icon" style="background:${k.bg};color:${k.color};">
                        <i data-lucide="${k.icon}"></i>
                    </div>
                    <div class="cv-kpi-val">${k.val}</div>
                    <div class="cv-kpi-label">${k.label}</div>
                    <div class="cv-kpi-trend" style="color:${k.up === true ? '#10B981' : k.up === false ? '#EF4444' : '#94A3B8'}">${k.trend}</div>
                </div>`).join('')}
            </div>

            <!-- Main Grid -->
            <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;align-items:start;">
                <!-- Activity Feed -->
                <div class="cv-card" style="padding:24px;">
                    <div class="cv-section-title">
                        <span>Flux d'activité en temps réel</span>
                        <a onclick="handleClinicNav('patients')">Voir tout</a>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        ${activity.map(a => `
                        <div style="display:flex;align-items:center;gap:14px;padding:12px;border-radius:10px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background=''">
                            <div style="width:36px;height:36px;border-radius:10px;background:${a.color}18;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <i data-lucide="${a.icon}" style="width:16px;height:16px;color:${a.color};"></i>
                            </div>
                            <div style="flex:1;min-width:0;">
                                <div style="font-size:13px;font-weight:700;color:#1E293B;">${a.name}</div>
                                <div style="font-size:12px;color:#64748B;margin-top:1px;">${a.action}</div>
                            </div>
                            <div style="font-size:11px;color:#94A3B8;font-weight:600;flex-shrink:0;">il y a ${a.time}</div>
                        </div>`).join('')}
                    </div>
                </div>

                <!-- Right Column -->
                <div style="display:flex;flex-direction:column;gap:16px;">
                    <!-- Alert card -->
                    <div style="background:linear-gradient(135deg,#EF4444,#DC2626);border-radius:14px;padding:20px;color:#fff;position:relative;overflow:hidden;">
                        <div style="position:absolute;right:-20px;top:-20px;width:100px;height:100px;background:rgba(255,255,255,0.08);border-radius:50%;"></div>
                        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;opacity:0.85;margin-bottom:6px;">âš ï¸ Alerte critique</div>
                        <div style="font-size:15px;font-weight:800;margin-bottom:8px;">Temps d'attente élevé</div>
                        <div style="font-size:12px;opacity:0.85;margin-bottom:16px;">Moyenne 45m en médecine générale. Redirection suggérée.</div>
                        <button style="background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);color:#fff;padding:8px 16px;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:0.5px;" onclick="handleClinicNav('appointments')">Gérer les flux</button>
                    </div>

                    <!-- Queue preview -->
                    <div class="cv-card" style="padding:20px;">
                        <div class="cv-section-title" style="margin-bottom:14px;">
                            <span>File d'attente</span>
                            <a onclick="handleClinicNav('appointments')">Gérer</a>
                        </div>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                            ${queue.map(q => `
                            <div style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:8px;border:1px solid #F1F5F9;background:#F8FAFC;">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${q.name}" style="width:32px;height:32px;border-radius:50%;" alt="">
                                <div style="flex:1;min-width:0;">
                                    <div style="font-size:12px;font-weight:700;color:#1E293B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${q.name}</div>
                                    <div style="font-size:10px;color:#94A3B8;">${q.doctor} Â· ${q.type}</div>
                                </div>
                                <div style="text-align:right;">
                                    <div style="font-size:12px;font-weight:800;color:${parseInt(q.wait) > 30 ? '#EF4444' : '#64748B'};">${q.wait}</div>

                                </div>
                            </div>`).join('')}
                        </div>
                    </div>

                    <!-- Facturation alert -->
                    <div class="cv-card" style="padding:20px;">
                        <div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:12px;">Facturation</div>
                        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:#FEF3C7;border-radius:10px;border:1px solid #FDE68A;">
                            <div style="width:36px;height:36px;border-radius:10px;background:#F59E0B;display:flex;align-items:center;justify-content:center;">
                                <i data-lucide="alert-circle" style="width:16px;height:16px;color:#fff;"></i>
                            </div>
                            <div>
                                <div style="font-size:12px;font-weight:800;color:#78350F;">8 paiements en attente</div>
                                <div style="font-size:11px;color:#92400E;">Total : 156 000 FCFA</div>
                            </div>
                        </div>
                        <button class="cv-btn cv-btn-ghost" style="width:100%;margin-top:10px;justify-content:center;" onclick="handleClinicNav('facturation')">
                            Voir facturation
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    },

    // =========================================================================
    //  PATIENTS
    // =========================================================================
    Patients: () => {
        const query = (clinicState.patientSearchQuery || '').toLowerCase();
        const patients = MOCK_DATA.patients.filter(p => 
            p.name.toLowerCase().includes(query) || 
            (p.phone && p.phone.includes(query)) || 
            p.id.toLowerCase().includes(query)
        );

        const statusColor = { 'En consultation':'#8B5CF6','En attente':'#F59E0B','Terminé':'#10B981','RDV planifié':'#3B82F6' };
        const statusBg   = { 'En consultation':'#EDE9FE','En attente':'#FEF3C7','Terminé':'#DCFCE7','RDV planifié':'#DBEAFE' };

        return `<div class="cv-animate" style="display:flex;flex-direction:column;gap:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;">
                <div>
                    <h1 style="font-size:20px;font-weight:800;color:#0F172A;letter-spacing:-0.5px;">Patients</h1>
                    <p style="font-size:13px;color:#64748B;margin-top:3px;">${patients.length} patients trouvés</p>
                </div>
                <div style="display:flex;gap:10px;">
                    <button class="cv-btn cv-btn-primary">
                        <i data-lucide="user-plus"></i> Nouveau patient
                    </button>
                </div>
            </div>

            <!-- Search bar -->
            <div style="position:relative;">
                <i data-lucide="search" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);width:15px;height:15px;color:#94A3B8;"></i>
                <input type="text" class="cv-input" placeholder="Rechercher par nom, téléphone, ID Vitalia..." 
                       value="${clinicState.patientSearchQuery}"
                       oninput="window.handlePatientSearch(this.value)"
                       style="padding-left:40px;height:44px;font-size:14px;">
            </div>

            <!-- Table -->
            <div class="cv-card" style="overflow:hidden;">
                <table class="cv-table">
                    <thead>
                        <tr>
                            <th>Patient</th>
                            <th>ID / Vitalia</th>
                            <th>Contact</th>
                            <th>Statut</th>
                            <th style="text-align:right;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${patients.map(p => `
                        <tr>
                            <td>
                                <div style="display:flex;align-items:center;gap:10px;">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=${p.name}" style="width:34px;height:34px;border-radius:50%;border:2px solid #F1F5F9;flex-shrink:0;" alt="">
                                    <div>
                                        <div style="font-size:13px;font-weight:700;color:#1E293B;">${p.name}</div>
                                        <div style="font-size:11px;color:#94A3B8;">${p.age || 'â€”'} ans</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style="font-size:12px;font-weight:600;color:#64748B;">${p.id}</div>
                                <div style="font-size:11px;color:#94A3B8;">Vitalia Core</div>
                            </td>
                            <td style="font-size:12px;color:#64748B;">${p.phone || p.tel || 'â€”'}</td>
                            <td>
                                <span class="cv-badge" style="background:${statusBg[p.status] || '#F1F5F9'};color:${statusColor[p.status] || '#475569'};">${p.status || 'Actif'}</span>
                            </td>
                            <td>
                                <div style="display:flex;gap:6px;justify-content:flex-end;">
                                    <button class="cv-btn cv-btn-primary" style="height:32px;font-size:11px;background:#10B981;border-color:#059669;" onclick="window.handleStartBookingForPatient('${p.id}')">
                                        <i data-lucide="calendar-plus"></i> Réserver
                                    </button>
                                </div>
                            </td>
                        </tr>`).join('')}
                        ${patients.length === 0 ? `<tr><td colspan="5" style="text-align:center;padding:40px;color:#94A3B8;">Aucun patient trouvé pour "${clinicState.patientSearchQuery}"</td></tr>` : ''}
                    </tbody>
                </table>
            </div>
        </div>`;
    },

    // =========================================================================
    //  RENDEZ-VOUS (V1.5 SMART SCALE) - Navigation en cascades
    // =========================================================================
    Appointments: () => {
        try {
            // Auto-générer les créneaux si aucun n'existe pour cette journée
            const existing = MOCK_DATA.slots.filter(
                s => s.clinicId === clinicState.selectedClinicId && s.date === clinicState.selectedDate
            );
            if (existing.length === 0) {
                try { AppointmentEngine.generateDailySlots(clinicState.selectedClinicId, clinicState.selectedDate); } catch(e) {}
            }

            const schedule = AppointmentEngine.getDailySchedule(clinicState.selectedClinicId, clinicState.selectedDate);
            let viewContent = '';

            // --- VUE DÉTAIL D'UNE SPÉCIALITÉ ---
            if (clinicState.activeSpecialtyId) {
                const spec = schedule.specialties.find(s => s.id === clinicState.activeSpecialtyId);
                if (!spec) { clinicState.activeSpecialtyId = null; return ClinicViews.Appointments(); }

                // Groupement par docteur
                const grouped = spec.slots.reduce((acc, slot) => {
                    const key = slot.doctor ? slot.doctor.id : 'unassigned';
                    if (!acc[key]) acc[key] = { doctor: slot.doctor, slots: [] };
                    acc[key].slots.push(slot);
                    return acc;
                }, {});

                viewContent = `<div class="cv-animate" style="display:flex;flex-direction:column;gap:20px;">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
                    <button class="cv-btn cv-btn-ghost" onclick="window.handleBackToSpecialties()" style="width:36px;height:36px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:12px;">
                        <i data-lucide="arrow-left"></i>
                    </button>
                    <div>
                        <h1 style="font-size:20px;font-weight:800;color:#0F172A;letter-spacing:-0.5px;">${spec.name}</h1>
                        <p style="font-size:13px;color:#64748B;">Programme du ${clinicState.selectedDate}</p>
                    </div>
                </div>

                <div style="display:flex;flex-direction:column;gap:24px;">
                    ${Object.entries(grouped).sort((a,b) => a[0] === 'unassigned' ? 1 : -1).map(([key, group]) => {
                        const isUnassigned = key === 'unassigned';
                        return `
                        <div class="cv-card" style="padding:24px;border-left:4px solid ${isUnassigned ? '#CBD5E1' : '#3B82F6'};">
                            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;border-bottom:1px solid #F1F5F9;padding-bottom:16px;">
                                <div style="display:flex;align-items:center;gap:14px;">
                                    ${!isUnassigned ? `
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${group.doctor.name}" style="width:44px;height:44px;border-radius:50%;border:2px solid #DBEAFE;">
                                        <div>
                                            <div style="font-size:16px;font-weight:800;color:#0F172A;">${group.doctor.name}</div>
                                            <div style="font-size:12px;color:#64748B;font-weight:600;">Médecin titulaire â€¢ ${group.slots.length} créneaux</div>
                                        </div>
                                    ` : `
                                        <div style="width:44px;height:44px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#94A3B8;">
                                            <i data-lucide="user-plus"></i>
                                        </div>
                                        <div>
                                            <div style="font-size:16px;font-weight:800;color:#1E293B;">
                                                ${group.slots.length > 0 && parseInt((group.slots[0].time || '00:00').split(' - ')[0].split(':')[0]) >= 19 
                                                  ? 'Médecin de garde <span style="font-size:11px;color:#6366F1;font-weight:700;margin-left:8px;background:#EEF2FF;padding:2px 8px;border-radius:4px;border:1px solid #E0E7FF;">SERVICE DE NUIT</span>' 
                                                  : 'Créneaux à assigner'}
                                            </div>
                                            <div style="font-size:12px;color:#94A3B8;">${group.slots.length} créneaux sans médecin</div>
                                        </div>
                                    `}
                                </div>
                                <div style="text-align:right;">
                                    <div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;">Taux d'occupation</div>
                                    <div style="font-size:14px;font-weight:800;color:#3B82F6;">${Math.round((group.slots.filter(s=>s.status==='BOOKED').length / group.slots.length) * 100)}%</div>
                                </div>
                            </div>

                            <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));gap:12px;">
                                ${group.slots.map(slot => {
                                    const isBooked = slot.status === 'BOOKED';
                                    const startHour = parseInt((slot.time || '00:00').split(' - ')[0].split(':')[0]);
                                    const isGarde = startHour >= 19 || startHour < 7;

                                    return `
                                    <div class="cv-card-hover" style="padding:16px;border:1px solid ${isGarde ? '#E0E7FF' : (isBooked ? '#F1F5F9' : '#E2E8F0')};background:${isGarde ? '#EEF2FF' : (isBooked ? '#F8FAFC' : '#fff')};border-radius:12px;transition:all 0.2s;position:relative;overflow:hidden;">
                                        ${isGarde ? `<div style="position:absolute;top:0;left:0;right:0;height:4px;background:#4F46E5;"></div>` : ''}
                                        <div style="display:flex;justify-content:space-between;margin-bottom:12px;align-items:flex-start;">
                                            <div>
                                                <span style="font-size:13px;font-weight:800;color:#1E293B;">${slot.time}</span>
                                                ${isGarde ? `<div style="font-size:9px;font-weight:800;color:#4F46E5;text-transform:uppercase;margin-top:2px;letter-spacing:0.5px;">â€¢ Garde</div>` : ''}
                                            </div>
                                            <span class="cv-badge" style="background:${isBooked ? '#FEE2E2' : (isGarde ? '#4F46E5' : (group.doctor ? '#DCFCE7' : '#F1F5F9'))};color:${isBooked ? '#B91C1C' : (isGarde ? '#fff' : (group.doctor ? '#15803D' : '#475569'))};font-size:9px;">
                                                ${slot.status}
                                            </span>
                                        </div>
                                        <div style="display:flex;gap:6px;margin-top:auto;">
                                            ${!isBooked ? `
                                                ${isUnassigned ? `<button class="cv-btn cv-btn-ghost" style="flex:1;height:30px;font-size:10px;background:${isGarde ? '#fff' : 'transparent'};border-color:${isGarde ? '#E0E7FF' : 'transparent'}" onclick="window.handleOpenAssignDoctor('${slot.id}', '${spec.id}')">Assigner ${isGarde ? 'Garde' : ''}</button>` : ''}
                                                <button class="cv-btn cv-btn-primary" style="flex:1;height:30px;font-size:10px;background:${isGarde ? '#4F46E5' : '#3B82F6'};border-color:${isGarde ? '#4338CA' : '#2563EB'}" onclick="window.handleBookSlot('${slot.id}')">Réserver</button>
                                            ` : `<button class="cv-btn cv-btn-ghost" style="width:100%;height:30px;font-size:10px;" onclick="window.handleViewAppointment('${slot.id}')">Dossier Patient</button>`}
                                        </div>
                                    </div>`;
                                }).join('')}
                            </div>
                        </div>`;
                    }).join('')}
                    ${spec.slots.length === 0 ? `<div style="padding:60px;text-align:center;color:#94A3B8;font-size:14px;background:#fff;border-radius:20px;border:1px dashed #E2E8F0;"><i data-lucide="calendar-x" style="width:40px;height:40px;margin-bottom:12px;opacity:0.3;"></i><br>Aucun créneau pour cette journée.</div>` : ''}
                </div>
                </div>`;
            } else {
                // --- VUE GRILLE DE SPÉCIALITÉS ---
                const grandTotalBooked = schedule.specialties.reduce((acc, s) => acc + s.slots.filter(sl => sl.status === 'BOOKED').length, 0);
                const grandTotalDoctors = new Set(schedule.specialties.flatMap(s => s.slots.filter(sl => sl.doctor).map(sl => sl.doctor.id))).size;

                viewContent = `<div class="cv-animate" style="display:flex;flex-direction:column;gap:20px;">
                    <div style="display:flex;align-items:center;justify-content:space-between;">
                        <div>
                            <h1 style="font-size:20px;font-weight:800;color:#0F172A;letter-spacing:-0.5px;">Dashboard Rendez-vous</h1>
                            <p style="font-size:13px;color:#64748B;margin-top:3px;">Vue d'ensemble â€¢ ${clinicState.selectedDate}</p>
                        </div>
                        <div style="display:flex;gap:10px;align-items:center;">
                            <div style="display:flex;background:#F1F5F9;padding:4px;border-radius:12px;">
                                <input type="date" class="cv-input" value="${clinicState.selectedDate}" onchange="window.handleDateChange(this.value)" style="border:none;background:transparent;padding:6px 12px;font-size:13px;font-weight:700;color:#475569;">
                            </div>
                            <button class="cv-btn cv-btn-primary" onclick="window.handleOpenNewSpecialtyModal()"><i data-lucide="plus"></i> Nouvelle Spécialité</button>
                        </div>
                    </div>

                    <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:16px;background:linear-gradient(135deg, #0F172A, #1E293B);padding:24px;border-radius:20px;color:#fff;box-shadow:0 10px 25px rgba(15, 23, 42, 0.15);">
                        <div style="border-right:1px solid rgba(255,255,255,0.1);">
                            <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Total Patients</div>
                            <div style="display:flex;align-items:baseline;gap:8px;">
                                <span style="font-size:32px;font-weight:900;letter-spacing:-1px;">${grandTotalBooked}</span>
                                <span style="font-size:12px;color:rgba(255,255,255,0.6);">Confirmés</span>
                            </div>
                        </div>
                        <div style="border-right:1px solid rgba(255,255,255,0.1);padding-left:20px;">
                            <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Médecins Mobilisés</div>
                            <div style="display:flex;align-items:baseline;gap:8px;">
                                <span style="font-size:32px;font-weight:900;letter-spacing:-1px;color:#10B981;">${grandTotalDoctors}</span>
                                <span style="font-size:12px;color:rgba(255,255,255,0.6);">En service</span>
                            </div>
                        </div>
                        <div style="padding-left:20px;">
                            <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Taux de remplissage</div>
                            <div style="display:flex;flex-direction:column;gap:8px;">
                                <div style="font-size:24px;font-weight:900;">${schedule.specialties.length > 0 ? Math.round((grandTotalBooked / (schedule.specialties.reduce((acc,s) => acc + s.slots.length,0) || 1)) * 100) : 0}%</div>
                                <div style="width:100%;height:4px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden;">
                                    <div style="width: ${schedule.specialties.length > 0 ? Math.round((grandTotalBooked / (schedule.specialties.reduce((acc,s) => acc + s.slots.length,0) || 1)) * 100) : 0}%; height:100%; background:#3B82F6;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:20px;">
                        ${schedule.specialties.map(spec => {
                            const bookedCount = spec.slots.filter(s => s.status === 'BOOKED').length;
                            const assignedCount = spec.slots.filter(s => s.doctor).length;
                            
                            return `
                            <div class="cv-card cv-card-hover" onclick="window.handleSelectSpecialty('${spec.id}')" style="cursor:pointer;padding:24px;position:relative;overflow:hidden;border:1px solid #E2E8F0;background:#fff;">
                                <div style="position:absolute;top:-10px;right:-10px;width:80px;height:80px;background:linear-gradient(135deg,#3B82F610,#2563EB05);border-radius:50%;"></div>
                                
                                <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
                                    <div style="width:48px;height:48px;background:#EFF6FF;border-radius:14px;display:flex;align-items:center;justify-content:center;color:#3B82F6;box-shadow:inset 0 0 0 1px rgba(59,130,246,0.1);">
                                        <i data-lucide="layers" style="width:24px;height:24px;"></i>
                                    </div>
                                    <div style="flex:1;">
                                        <h3 style="font-size:16px;font-weight:800;color:#0F172A;margin:0;">${spec.name}</h3>
                                        <div style="font-size:11px;font-weight:600;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;margin-top:2px;">${spec.slots.length} créneaux dispos</div>
                                    </div>
                                </div>

                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                                    <div style="background:#F8FAFC;padding:12px;border-radius:12px;border:1px solid #F1F5F9;">
                                        <div style="font-size:22px;font-weight:900;color:#0F172A;letter-spacing:-1px;">${bookedCount}</div>
                                        <div style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;">Patients</div>
                                    </div>
                                    <div style="background:#F8FAFC;padding:12px;border-radius:12px;border:1px solid #F1F5F9;">
                                        <div style="font-size:22px;font-weight:900;color:#10B981;letter-spacing:-1px;">${assignedCount}</div>
                                        <div style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;">Médecins</div>
                                    </div>
                                </div>

                                <div style="margin-top:20px;padding-top:16px;border-top:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;">
                                    <span class="cv-badge ${spec.slots.length > 0 ? 'cv-badge-green' : 'cv-badge-slate'}" style="font-size:9px;">
                                        ${spec.slots.length > 0 ? 'Slots actifs' : 'à€ générer'}
                                    </span>
                                    <div style="font-size:12px;font-weight:800;color:#3B82F6;display:flex;align-items:center;gap:4px;">
                                        Ouvrir <i data-lucide="chevron-right" style="width:16px;height:16px;"></i>
                                    </div>
                                </div>
                            </div>`;
                        }).join('')}
                        ${schedule.specialties.length === 0 ? `<div style="grid-column:1/-1;padding:60px;text-align:center;color:#94A3B8;background:#fff;border-radius:14px;border:1px dashed #E2E8F0;">
                            <i data-lucide="folder-plus" style="width:40px;height:40px;margin-bottom:12px;opacity:0.5;"></i>
                            <p style="font-size:15px;font-weight:600;">Aucune spécialité configurée.</p>
                            <button class="cv-btn cv-btn-primary" style="margin-top:12px;" onclick="window.createNewSpecialty()">Créer une spécialité</button>
                        </div>` : ''}
                    </div>
                </div>`;
            }

            // --- INJECTION DES MODALS (Toujours présentes) ---
            return viewContent + `
            <!-- Modal Assigner Docteur -->
            <div id="cv-assign-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;align-items:center;justify-content:center;backdrop-filter:blur(2px);">
                <div class="cv-card cv-animate" style="width:400px;padding:24px;box-shadow:0 20px 50px rgba(0,0,0,0.2);">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
                        <h2 style="font-size:18px;font-weight:800;color:#0F172A;">Assigner un médecin</h2>
                        <button onclick="window.handleCloseAssignDoctor()" style="border:none;background:none;cursor:pointer;"><i data-lucide="x" style="width:20px;height:20px;color:#94A3B8;"></i></button>
                    </div>
                    <div id="cv-doctor-list" style="display:flex;flex-direction:column;gap:10px;max-height:300px;overflow-y:auto;padding-right:4px;"></div>
                    <div style="margin-top:20px;display:flex;justify-content:flex-end;gap:10px;border-top:1px solid #F1F5F9;padding-top:16px;">
                        <button class="cv-btn cv-btn-ghost" onclick="window.handleCloseAssignDoctor()">Fermer</button>
                    </div>
                </div>
            </div>

            <!-- Modal Nouvelle Spécialité -->
            <div id="cv-spec-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
                <div class="cv-card cv-animate" style="width:500px;padding:28px;box-shadow:0 25px 70px rgba(0,0,0,0.3);max-height:90vh;display:flex;flex-direction:column;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
                        <div>
                            <h2 style="font-size:20px;font-weight:800;color:#0F172A;">Quelle spécialité ?</h2>
                            <p style="font-size:13px;color:#64748B;margin-top:4px;">Sélectionnez une suggestion ou saisissez un nom.</p>
                        </div>
                        <button onclick="window.handleCloseNewSpecialtyModal()" style="border:none;background:none;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background 0.2s;"><i data-lucide="x" style="width:20px;height:20px;color:#94A3B8;"></i></button>
                    </div>
                    
                    <div style="overflow-y:auto;flex:1;padding-right:10px;margin-bottom:24px;">
                        <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:10px;">
                            ${COMMON_SPECIALTIES.map(s => `
                                <button class="cv-spec-chip" onclick="window.addSuggestedSpecialty('${s}')" style="text-align:left;padding:12px 14px;background:#F1F5F9;border:1px solid #E2E8F0;border-radius:12px;font-size:13px;font-weight:700;color:#334155;cursor:pointer;transition:all 0.2s;">
                                    ${s}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div style="border-top:1px solid #F1F5F9;padding-top:20px;display:flex;flex-direction:column;gap:16px;">
                        <div>
                            <div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Capacité (Nombre de bureaux)</div>
                            <input id="cv-spec-capacity-input" type="number" class="cv-input" value="1" min="1" max="5" style="width:100px;">
                        </div>
                        
                        <div>
                            <div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Saisie personnalisée</div>
                            <div style="display:flex;gap:10px;">
                                <input id="cv-custom-spec-input" class="cv-input" placeholder="Ex: Médecine Nucléaire" style="flex:1;">
                                <button class="cv-btn cv-btn-primary" onclick="window.addCustomSpecialty()">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Réservation Patient -->
            <div id="cv-book-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
                <div class="cv-card cv-animate" style="width:450px;padding:32px;box-shadow:0 25px 70px rgba(0,0,0,0.3);">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
                        <div>
                            <h2 style="font-size:20px;font-weight:800;color:#0F172A;">Nouvelle Réservation</h2>
                            <p style="font-size:13px;color:#64748B;margin-top:4px;">Remplissez les informations du patient.</p>
                        </div>
                        <button onclick="window.handleCloseBookModal()" style="border:none;background:none;cursor:pointer;"><i data-lucide="x" style="width:20px;height:20px;color:#94A3B8;"></i></button>
                    </div>
                    
                    <input type="hidden" id="book-slot-id">

                    <div style="display:flex;flex-direction:column;gap:18px;">
                        <div>
                            <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;display:block;">Nom et Prénom</label>
                            <input id="book-patient-name" class="cv-input" placeholder="ex: Jean Kouassi">
                        </div>
                        
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                            <div>
                                <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;display:block;">Téléphone</label>
                                <input id="book-patient-phone" class="cv-input" placeholder="07 XX XX XX XX">
                            </div>
                            <div>
                                <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;display:block;">ID Vitalia</label>
                                <input id="book-patient-vitalia" class="cv-input" placeholder="VIT-2026-XXXX">
                            </div>
                        </div>

                        <div style="margin-top:12px;padding:16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;display:flex;align-items:center;gap:12px;">
                            <div style="width:36px;height:36px;border-radius:50%;background:#DBEAFE;display:flex;align-items:center;justify-content:center;">
                                <i data-lucide="info" style="width:18px;color:#2563EB;"></i>
                            </div>
                            <div style="font-size:12px;color:#475569;line-height:1.4;">
                                Cette opération consommera **1 token** de votre forfait clinique.
                            </div>
                        </div>

                        <div style="margin-top:10px;display:flex;justify-content:flex-end;gap:10px;border-top:1px solid #F1F5F9;padding-top:20px;">
                            <button class="cv-btn cv-btn-ghost" onclick="window.handleCloseBookModal()">Annuler</button>
                            <button class="cv-btn cv-btn-primary" onclick="window.confirmReservation()" style="padding:0 24px;">Confirmer la réservation</button>
                        </div>
                    </div>
                </div>
            </div>`;
        } catch(e) {
            console.error("Appointments view error:", e);
            return "<div style=\"padding:40px;text-align:center;background:#fff;border-radius:20px;border:1px dashed #FECACA\"><b style=\"color:#DC2626\">Erreur: " + e.message + "</b><br><button onclick=\"handleClinicNav('appointments')\" style=\"margin-top:12px\">Recharger</button></div>";
        }
    },

    // =========================================================================
    //  ÉQUIPE MÉDICALE
    // =========================================================================
    Doctors: () => {
        const doctors = MOCK_DATA.doctors;

        const statusLabel = {
            'active': 'En service',
            'break': 'En pause',
            'offline': 'Indisponible',
            'offline': 'Hors ligne'
        };

        const statusColor = {
            'active': '#10B981',
            'break': '#F59E0B',
            'offline': '#94A3B8'
        };

        return `<div class="cv-animate" style="display:flex;flex-direction:column;gap:24px;">
            <div style="display:flex;align-items:center;justify-content:space-between;">
                <div>
                    <h1 style="font-size:22px;font-weight:800;color:#0F172A;letter-spacing:-0.5px;">Notre équipe médicale</h1>
                    <p style="font-size:13px;color:#64748B;margin-top:4px;">Gérez les médecins et leur disponibilité</p>
                </div>
                <button class="cv-btn cv-btn-primary" onclick="window.handleOpenAddDoctorModal()">
                    <i data-lucide="user-plus"></i> Ajouter un médecin
                </button>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:20px;">
                ${doctors.map(dr => {
                    const drSpecialties = MOCK_DATA.specialties.filter(s => dr.specialties.includes(s.id));
                    
                    return `
                    <div class="cv-card cv-card-hover" style="padding:24px;position:relative;overflow:hidden;border:1px solid #E2E8F0;">
                        <div style="display:flex;align-items:start;justify-content:space-between;margin-bottom:20px;">
                            <div style="display:flex;gap:16px;">
                                <div style="position:relative;">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${dr.name}" style="width:60px;height:60px;border-radius:18px;background:#F8FAFC;border:1px solid #E2E8F0;">
                                    <span style="position:absolute;bottom:-2px;right:-2px;width:14px;height:14px;border-radius:50%;background:${statusColor[dr.status]};border:3px solid #fff;"></span>
                                </div>
                                <div>
                                    <h3 style="font-size:16px;font-weight:800;color:#0F172A;margin-bottom:4px;">${dr.name}</h3>
                                    <div style="font-size:12px;font-weight:600;color:#3B82F6;margin-bottom:4px;">${dr.role}</div>
                                    <div style="display:flex;align-items:center;gap:6px;">
                                        <span class="cv-status" style="background:${statusColor[dr.status]};"></span>
                                        <span style="font-size:11px;font-weight:700;color:${statusColor[dr.status]};text-transform:uppercase;">${statusLabel[dr.status]}</span>
                                    </div>
                                </div>
                            </div>
                            <button class="cv-icon-btn" style="width:32px;height:32px;" onclick="event.stopPropagation(); window.handleOpenEditDoctorModal('${dr.id}')"><i data-lucide="more-vertical"></i></button>
                        </div>

                        <div style="margin-bottom:20px;">
                            <div style="font-size:10px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Spécialités</div>
                            <div style="display:flex;flex-wrap:wrap;gap:6px;">
                                ${drSpecialties.length > 0 
                                    ? drSpecialties.map(s => `<span class="cv-badge cv-badge-blue" style="font-size:10px;">${s.name}</span>`).join('')
                                    : '<span style="font-size:11px;color:#94A3B8;font-style:italic;">Aucune spécialité assignée</span>'}
                            </div>
                        </div>

                        <div style="border-top:1px solid #F1F5F9;padding-top:16px;display:flex;align-items:center;justify-content:space-between;">
                            <div>
                                <div style="font-size:10px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Charge actuelle</div>
                                <div style="display:flex;align-items:center;gap:10px;width:120px;">
                                    <div class="cv-progress" style="flex:1;"><div class="cv-progress-bar" style="width:${dr.load}%;background:${dr.load > 80 ? '#EF4444' : '#10B981'};"></div></div>
                                    <span style="font-size:11px;font-weight:700;color:#475569;">${dr.load} %</span>
                                </div>
                            </div>
                            <div style="display:flex;gap:4px;">
                                <button class="cv-btn cv-btn-ghost" style="padding:0 10px;height:30px;"><i data-lucide="calendar"></i></button>
                                <button class="cv-btn cv-btn-ghost" style="padding:0 10px;height:30px;"><i data-lucide="mail"></i></button>
                            </div>
                        </div>
                    </div>`;
                }).join('')}
            </div>

            <!-- Modal Ajouter Médecin -->
            <div id="cv-add-dr-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
                <div class="cv-card cv-animate" style="width:550px;padding:28px;box-shadow:0 25px 70px rgba(0,0,0,0.3);max-height:90vh;display:flex;flex-direction:column;overflow:hidden;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-shrink:0;">
                        <div>
                            <h2 style="font-size:20px;font-weight:800;color:#0F172A;">Nouveau Médecin</h2>
                            <p style="font-size:13px;color:#64748B;margin-top:4px;">Configurez le profil et les disponibilités.</p>
                        </div>
                        <button onclick="window.handleCloseAddDoctorModal()" style="border:none;background:none;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background 0.2s;"><i data-lucide="x" style="width:20px;height:20px;color:#94A3B8;"></i></button>
                    </div>
                    
                    <div style="overflow-y:auto;flex:1;padding-right:10px;display:flex;flex-direction:column;gap:20px;">
                        <!-- Identité -->
                        <div>
                            <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Nom complet</label>
                            <div style="display:flex;align-items:center;background:#fff;border:1px solid #E2E8F0;border-radius:12px;padding:0 14px;box-shadow:0 2px 4px rgba(0,0,0,0.02);transition:all 0.2s;focus-within:border-blue-500;">
                                <select id="add-dr-prefix" style="border:none;background:none;font-weight:800;color:#64748B;margin-right:4px;outline:none;cursor:pointer;font-family:inherit;font-size:14px;">
                                    <option value="Dr.">Dr.</option>
                                    <option value="Pr.">Pr.</option>
                                </select>
                                <input id="add-dr-name" class="cv-input" placeholder="Koné Amadou" style="border:none;box-shadow:none;padding-left:0;flex:1;">
                            </div>
                        </div>

                        <!-- Specialites (Dropdown Toggle) -->
                        <div style="position:relative;">
                            <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:8px;">Spécialités principales</label>
                            <div id="add-dr-spec-toggle" onclick="window.toggleSpecDropdown()" style="width:100%;padding:12px 16px;background:#fff;border:1px solid #E2E8F0;border-radius:12px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;min-height:48px;box-shadow:0 2px 4px rgba(0,0,0,0.02);transition:all 0.2s;">
                                <span id="add-dr-spec-label" style="font-size:14px;color:#94A3B8;">Choisir votre spécialité</span>
                                <i data-lucide="chevron-down" style="width:16px;height:16px;color:#94A3B8;"></i>
                            </div>
                            
                            <div id="add-dr-spec-dropdown" style="display:none;position:absolute;top:100%;left:0;right:0;z-index:100;background:#fff;border:1px solid #E2E8F0;border-radius:12px;margin-top:8px;box-shadow:0 10px 25px rgba(0,0,0,0.1);max-height:220px;overflow-y:auto;padding:8px;">
                                ${[
                                    "Médecine Générale", "Pédiatrie", "Gynécologie-Obstétrique", "Cardiologie", 
                                    "Dermatologie", "Ophtalmologie", "ORL", "Gastro-entérologie", 
                                    "Neurologie", "Psychiatrie", "Chirurgie Générale", "Orthopédie", 
                                    "Urologie", "Endocrinologie", "Rhumatologie", "Néphrologie", 
                                    "Pneumologie", "Radiologie", "Médecine du sport", "Analyses Médicales"
                                ].map(spec => `
                                    <label style="display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:8px;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='transparent'">
                                        <input type="checkbox" name="add-dr-spec-check" value="${spec}" onchange="window.updateSpecLabel()" style="width:18px;height:18px;border-radius:6px;accent-color:#3B82F6;">
                                        <span style="font-size:14px;color:#334155;">${spec}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Admin -->
                        <div>
                            <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Numéro d'Ordre National <span style="font-style:italic;text-transform:lowercase;color:#CBD5E1;">(optionnel)</span></label>
                            <input id="add-dr-order" class="cv-input" placeholder="ex: ONM-2026-XXXX">
                        </div>

                        <!-- Disponibilités (Constructeur Flexible) -->
                        <div style="border-top:1px solid #F1F5F9;padding-top:20px;">
                            <label style="font-size:12px;font-weight:800;color:#1E293B;display:block;margin-bottom:12px;display:flex;align-items:center;gap:8px;">
                                <i data-lucide="calendar-clock" style="width:14px;height:14px;color:#3B82F6;"></i> Planning de présence personnalisé
                            </label>
                            
                            <div style="display:flex;flex-direction:column;gap:16px;background:#F8FAFC;padding:16px;border-radius:12px;border:1px solid #E2E8F0;">
                                <div>
                                    <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:8px;">1. Sélectionner les jours à configurer</label>
                                    <div style="display:flex;gap:6px;">
                                        ${['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => `
                                            <button class="day-select-btn" id="day-btn-${i+1}" data-day="${i+1}" onclick="this.classList.toggle('active')" style="width:34px;height:34px;border-radius:8px;border:1px solid #E2E8F0;background:#fff;font-size:12px;font-weight:800;color:#64748B;cursor:pointer;transition:all 0.2s;">${day}</button>
                                        `).join('')}
                                    </div>
                                </div>
                                
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;background:#fff;padding:12px;border-radius:10px;border:1px solid #F1F5F9;">
                                    <div>
                                        <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Heure Début</label>
                                        <select id="add-dr-start" class="cv-input" style="height:38px;">
                                            ${Array.from({length: 25}, (_, i) => {
                                                const h = 7 + Math.floor(i/2);
                                                const m = (i % 2 === 0) ? "00" : "30";
                                                const time = `${String(h).padStart(2, '0')}:${m}`;
                                                return `<option value="${time}" ${time === '08:00' ? 'selected' : ''}>${time}</option>`;
                                            }).join('')}
                                        </select>
                                    </div>
                                    <div>
                                        <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Heure Fin</label>
                                        <select id="add-dr-end" class="cv-input" style="height:38px;">
                                            ${Array.from({length: 25}, (_, i) => {
                                                const h = 7 + Math.floor(i/2);
                                                const m = (i % 2 === 0) ? "00" : "30";
                                                const time = `${String(h).padStart(2, '0')}:${m}`;
                                                return `<option value="${time}" ${time === '17:00' ? 'selected' : ''}>${time}</option>`;
                                            }).join('')}
                                        </select>
                                    </div>
                                    <div style="margin-top:4px;">
                                        <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Pause Début</label>
                                        <select id="add-dr-break-start" class="cv-input" style="height:38px;">
                                            <option value="">Aucune</option>
                                            ${Array.from({length: 25}, (_, i) => {
                                                const h = 7 + Math.floor(i/2);
                                                const m = (i % 2 === 0) ? "00" : "30";
                                                const time = `${String(h).padStart(2, '0')}:${m}`;
                                                return `<option value="${time}" ${time === '12:00' ? 'selected' : ''}>${time}</option>`;
                                            }).join('')}
                                        </select>
                                    </div>
                                    <div style="margin-top:4px;">
                                        <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Pause Fin</label>
                                        <select id="add-dr-break-end" class="cv-input" style="height:38px;">
                                            <option value="">Aucune</option>
                                            ${Array.from({length: 25}, (_, i) => {
                                                const h = 7 + Math.floor(i/2);
                                                const m = (i % 2 === 0) ? "00" : "30";
                                                const time = `${String(h).padStart(2, '0')}:${m}`;
                                                return `<option value="${time}" ${time === '13:00' ? 'selected' : ''}>${time}</option>`;
                                            }).join('')}
                                        </select>
                                    </div>
                                    
                                    <div style="grid-column: span 2; margin-top:12px;">
                                        <button onclick="window.validateCurrentSchedule()" class="cv-btn cv-btn-primary" style="width:100%; height:40px; background:linear-gradient(to right, #3B82F6, #2563EB); font-size:13px; font-weight:700;">Valider ces horaires</button>
                                    </div>
                                </div>
                                
                                <div id="schedule-summary" style="padding:10px; background:rgba(59,130,246,0.05); border:1px dashed #BFDBFE; border-radius:10px; display:none;">
                                    <div style="font-size:11px; font-weight:800; color:#3B82F6; text-transform:uppercase; margin-bottom:8px;">Horaires enregistrés :</div>
                                    <div id="schedule-summary-list" style="display:flex; flex-direction:column; gap:4px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="border-top:1px solid #F1F5F9;padding-top:24px;display:flex;justify-content:flex-end;gap:12px;flex-shrink:0;">
                        <button class="cv-btn cv-btn-ghost" onclick="window.handleCloseAddDoctorModal()">Annuler</button>
                        <button class="cv-btn cv-btn-primary" onclick="window.confirmAddDoctor()">Enregistrer le médecin</button>
                    </div>
                </div>
            </div>

            <!-- Modal Modifier Médecin -->
            <div id="cv-edit-dr-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
                <div class="cv-card cv-animate" style="width:520px;padding:28px;box-shadow:0 25px 70px rgba(0,0,0,0.3);max-height:90vh;display:flex;flex-direction:column;overflow:hidden;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-shrink:0;">
                        <div>
                            <h2 style="font-size:20px;font-weight:800;color:#0F172A;">Modifier le médecin</h2>
                            <p style="font-size:13px;color:#64748B;margin-top:4px;">Mettez à jour les informations de la fiche.</p>
                        </div>
                        <button onclick="window.handleCloseEditDoctorModal()" style="border:none;background:none;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;">
                            <i data-lucide="x" style="width:20px;height:20px;color:#94A3B8;"></i>
                        </button>
                    </div>

                    <div style="overflow-y:auto;flex:1;padding-right:8px;display:flex;flex-direction:column;gap:18px;">
                        <input type="hidden" id="edit-dr-id">

                        <!-- Nom -->
                        <div>
                            <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Préfixe & Nom</label>
                            <div style="display:flex;align-items:center;background:#fff;border:1px solid #E2E8F0;border-radius:12px;padding:0 14px;">
                                <select id="edit-dr-prefix" style="border:none;background:none;font-weight:800;color:#64748B;margin-right:4px;outline:none;cursor:pointer;font-family:inherit;font-size:14px;">
                                    <option value="Dr.">Dr.</option>
                                    <option value="Pr.">Pr.</option>
                                </select>
                                <input id="edit-dr-name" class="cv-input" placeholder="Nom complet" style="border:none;box-shadow:none;padding-left:0;flex:1;">
                            </div>
                        </div>

                        <!-- Statut -->
                        <div>
                            <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Statut</label>
                            <select id="edit-dr-status" class="cv-input">
                                <option value="active">En service</option>
                                <option value="break">En pause</option>
                                <option value="offline">Hors ligne</option>
                            </select>
                        </div>

                        <!-- Numéro d'ordre -->
                        <div>
                            <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Numéro d'Ordre <span style="font-style:italic;text-transform:lowercase;color:#CBD5E1;">(optionnel)</span></label>
                            <input id="edit-dr-order" class="cv-input" placeholder="ex: ONM-2026-XXXX">
                        </div>

                        <!-- Spécialités -->
                        <div>
                            <label style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:8px;">Spécialités</label>
                            <div id="edit-dr-spec-list" style="display:flex;flex-direction:column;gap:6px;max-height:200px;overflow-y:auto;background:#F8FAFC;padding:10px;border-radius:10px;border:1px solid #E2E8F0;">
                                ${[
                                    "Médecine Générale","Pédiatrie","Gynécologie-Obstétrique","Cardiologie",
                                    "Dermatologie","Ophtalmologie","ORL","Gastro-entérologie",
                                    "Neurologie","Psychiatrie","Chirurgie Générale","Orthopédie",
                                    "Urologie","Endocrinologie","Rhumatologie","Néphrologie",
                                    "Pneumologie","Radiologie","Médecine du sport","Analyses Médicales"
                                ].map(spec => `
                                    <label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:6px 8px;border-radius:8px;" onmouseover="this.style.background='#fff'" onmouseout="this.style.background='transparent'">
                                        <input type="checkbox" name="edit-dr-spec-check" value="${spec}" style="width:16px;height:16px;accent-color:#3B82F6;">
                                        <span style="font-size:13px;color:#334155;">${spec}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Disponibilités (Constructeur Flexible) -->
                        <div style="border-top:1px solid #F1F5F9;padding-top:20px;">
                            <label style="font-size:12px;font-weight:800;color:#1E293B;display:block;margin-bottom:12px;display:flex;align-items:center;gap:8px;">
                                <i data-lucide="calendar-clock" style="width:14px;height:14px;color:#3B82F6;"></i> Planning de présence personnalisé
                            </label>
                            
                            <div style="display:flex;flex-direction:column;gap:16px;background:#F8FAFC;padding:16px;border-radius:12px;border:1px solid #E2E8F0;">
                                <div>
                                    <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:8px;">1. Sélectionner les jours à modifier</label>
                                    <div style="display:flex;gap:6px;">
                                        ${['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => `
                                            <button class="day-select-btn edit-day-btn" id="edit-day-btn-${i+1}" data-day="${i+1}" onclick="this.classList.toggle('active')" style="width:34px;height:34px;border-radius:8px;border:1px solid #E2E8F0;background:#fff;font-size:12px;font-weight:800;color:#64748B;cursor:pointer;transition:all 0.2s;">${day}</button>
                                        `).join('')}
                                    </div>
                                </div>
                                
                                <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;background:#fff;padding:12px;border-radius:10px;border:1px solid #F1F5F9;">
                                    <div>
                                        <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Heure Début</label>
                                        <select id="edit-dr-start" class="cv-input" style="height:38px;">
                                            ${Array.from({length: 25}, (_, i) => {
                                                const h = 7 + Math.floor(i/2);
                                                const m = (i % 2 === 0) ? "00" : "30";
                                                const time = `${String(h).padStart(2, '0')}:${m}`;
                                                return `<option value="${time}">${time}</option>`;
                                            }).join('')}
                                        </select>
                                    </div>
                                    <div>
                                        <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Heure Fin</label>
                                        <select id="edit-dr-end" class="cv-input" style="height:38px;">
                                            ${Array.from({length: 25}, (_, i) => {
                                                const h = 7 + Math.floor(i/2);
                                                const m = (i % 2 === 0) ? "00" : "30";
                                                const time = `${String(h).padStart(2, '0')}:${m}`;
                                                return `<option value="${time}">${time}</option>`;
                                            }).join('')}
                                        </select>
                                    </div>
                                    <div style="margin-top:4px;">
                                        <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Pause Début</label>
                                        <select id="edit-dr-break-start" class="cv-input" style="height:38px;">
                                            <option value="">Aucune</option>
                                            ${Array.from({length: 25}, (_, i) => {
                                                const h = 7 + Math.floor(i/2);
                                                const m = (i % 2 === 0) ? "00" : "30";
                                                const time = `${String(h).padStart(2, '0')}:${m}`;
                                                return `<option value="${time}">${time}</option>`;
                                            }).join('')}
                                        </select>
                                    </div>
                                    <div style="margin-top:4px;">
                                        <label style="font-size:10px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px;">Pause Fin</label>
                                        <select id="edit-dr-break-end" class="cv-input" style="height:38px;">
                                            <option value="">Aucune</option>
                                            ${Array.from({length: 25}, (_, i) => {
                                                const h = 7 + Math.floor(i/2);
                                                const m = (i % 2 === 0) ? "00" : "30";
                                                const time = `${String(h).padStart(2, '0')}:${m}`;
                                                return `<option value="${time}">${time}</option>`;
                                            }).join('')}
                                        </select>
                                    </div>
                                    
                                    <div style="grid-column: span 2; margin-top:12px;">
                                        <button onclick="window.validateEditSchedule()" class="cv-btn cv-btn-primary" style="width:100%; height:40px; background:linear-gradient(to right, #3B82F6, #2563EB); font-size:13px; font-weight:700;">Mettre à jour ces jours</button>
                                    </div>
                                </div>
                                
                                <div id="edit-schedule-summary" style="padding:10px; background:rgba(59,130,246,0.05); border:1px dashed #BFDBFE; border-radius:10px; display:none;">
                                    <div style="font-size:11px; font-weight:800; color:#3B82F6; text-transform:uppercase; margin-bottom:8px;">Planning actuel :</div>
                                    <div id="edit-schedule-summary-list" style="display:flex; flex-direction:column; gap:4px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="border-top:1px solid #F1F5F9;padding-top:20px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;margin-top:16px;">
                        <button class="cv-btn" style="background:#FEE2E2;color:#DC2626;border:none;" onclick="window.handleDeleteDoctor()">
                            <i data-lucide="trash-2" style="width:14px;height:14px;"></i> Supprimer
                        </button>
                        <div style="display:flex;gap:10px;">
                            <button class="cv-btn cv-btn-ghost" onclick="window.handleCloseEditDoctorModal()">Annuler</button>
                            <button class="cv-btn cv-btn-primary" onclick="window.confirmEditDoctor()">Sauvegarder</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    },

    // =========================================================================
    //  DOSSIERS MÉDICAUX
    // =========================================================================
    Dossiers: () => {
        // Filtrer pour ne montrer que les patients qui ont une réservation confirmée
        const bookedPatientIds = new Set(MOCK_DATA.appointments.filter(a => a.status === 'CONFIRMED').map(a => a.patientId));
        const filteredPatients = MOCK_DATA.patients.filter(p => bookedPatientIds.has(p.id));

        // Sélectionner le patient actif (par défaut le premier de la liste filtrée)
        const patientId = clinicState.dossierPatientId || (filteredPatients[0] ? filteredPatients[0].id : null);
        const patient = filteredPatients.find(p => p.id === patientId) || filteredPatients[0];

        if (!patient) return `<div style="padding:100px;text-align:center;color:#64748B;display:flex;flex-direction:column;align-items:center;gap:16px;">
            <div style="width:60px;height:60px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#94A3B8;"><i data-lucide="folder-search" style="width:30px;height:30px;"></i></div>
            <div>
                <h3 style="font-size:16px;font-weight:700;color:#1E293B;">Aucun dossier actif</h3>
                <p style="font-size:13px;color:#94A3B8;margin-top:4px;">Seuls les patients ayant une réservation confirmée apparaissent ici.</p>
            </div>
            <button class="cv-btn cv-btn-primary" onclick="handleClinicNav('appointments')">Aller aux rendez-vous</button>
        </div>`;

        const timeline = patient.timeline || [
            { date:'20 Mars 2026', title:'Consultation Générale', doc:'Dr Esdras', note:'HbA1c: 7.8. Ajustement Metformine 1g x2/j.', type:'consultation' },
            { date:'12 Mars 2026', title:'Résultats Labo', doc:'Laboratoire Vitalia', note:'Glycémie à jeun: 1.42g/L. CRP légèrement élevée.', type:'labo' }
        ];

        const typeColor = { consultation:'#3B82F6', labo:'#8B5CF6', ordonnance:'#10B981', imagerie:'#F59E0B' };
        const typeIcon  = { consultation:'stethoscope', labo:'flask-conical', ordonnance:'pill', imagerie:'scan' };

        return `<div class="cv-animate" style="display:grid;grid-template-columns:280px 1fr;gap:20px;">
            <div style="display:flex;flex-direction:column;gap:10px;">
                <div style="position:relative;">
                    <i data-lucide="search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);width:14px;height:14px;color:#94A3B8;"></i>
                    <input class="cv-input" placeholder="Rechercher patient..." style="padding-left:32px;" oninput="window.handlePatientSearch(this.value); handleClinicNav('dossiers');">
                </div>
                <div style="display:flex;flex-direction:column;gap:10px;overflow-y:auto;max-height:calc(100vh - 200px);">
                    ${filteredPatients.map(p => `
                    <div class="cv-card" onclick="window.handleOpenPatientDossier('${p.id}')" style="padding:14px;cursor:pointer;border:2px solid ${p.id === patient.id ? '#3B82F6' : '#E2E8F0'};transition:border-color 0.15s;">
                        <div style="display:flex;align-items:center;gap:10px;">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=${p.name}" style="width:36px;height:36px;border-radius:50%;">
                            <div>
                                <div style="font-size:13px;font-weight:700;color:#1E293B;">${p.name}</div>
                                <div style="font-size:11px;color:#94A3B8;">${p.id} Â· ${p.age || 'â€”'} ans</div>
                            </div>
                        </div>
                    </div>`).join('')}
                </div>
            </div>

            <div class="cv-card" style="padding:28px;overflow-y:auto;max-height:calc(100vh - 140px);">
                <div style="display:flex;align-items:center;gap:18px;padding-bottom:24px;border-bottom:1px solid #F1F5F9;margin-bottom:24px;">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=${patient.name}" style="width:64px;height:64px;border-radius:50%;border:3px solid #DBEAFE;">
                    <div style="flex:1;">
                        <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
                            <h2 style="font-size:20px;font-weight:800;color:#0F172A;">${patient.name}</h2>
                            <span class="cv-badge cv-badge-blue">${patient.id}</span>
                        </div>
                        <div style="font-size:12px;color:#64748B;">${patient.age || 'â€”'} ans Â· Groupe ${patient.bloodType || 'â€”'} Â· Tél: ${patient.phone || patient.tel || 'â€”'}</div>
                        <div style="display:flex;gap:8px;margin-top:8px;">
                            ${(patient.chronicConditions || []).map(c => `<span class="cv-badge cv-badge-red">${c}</span>`).join('')}
                            ${(patient.alerts || []).map(a => `<span class="cv-badge cv-badge-amber">${a}</span>`).join('')}
                        </div>
                    </div>

                </div>

                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px;">
                    ${[{label:'Tension',val:'145/92',unit:'mmHg',color:'#EF4444'},{label:'Glycémie',val:'1.42',unit:'g/L',color:'#F59E0B'},{label:'Score Vitalia',val:patient.vitaliaScore || 'â€”',unit:'points',color:'#6366F1'},{label:'HbA1c',val:'7.8',unit:'%',color:'#8B5CF6'}].map(v => `<div style="background:#F8FAFC;border-radius:10px;padding:14px;text-align:center;border:1px solid #E2E8F0;"><div style="font-size:10px;font-weight:700;color:#94A3B8;text-transform:uppercase;margin-bottom:6px;">${v.label}</div><div style="font-size:22px;font-weight:800;color:${v.color};">${v.val}</div><div style="font-size:10px;color:#CBD5E1;">${v.unit}</div></div>`).join('')}
                </div>

                <div class="cv-section-title" style="margin-bottom:16px;">Historique médical</div>
                <div style="display:flex;flex-direction:column;gap:0;">
                ${timeline.map(t => `
                    <div class="cv-timeline-item">
                        <div class="cv-timeline-dot" style="background:${typeColor[t.type] || '#CBD5E1'};"></div>
                        <div style="display:flex;align-items:start;justify-content:space-between;margin-bottom:4px;">
                            <div style="display:flex;align-items:center;gap:8px;">
                                <i data-lucide="${typeIcon[t.type] || 'file-text'}" style="width:14px;height:14px;color:${typeColor[t.type] || '#CBD5E1'};"></i>
                                <span style="font-size:13px;font-weight:700;color:#1E293B;">${t.title}</span>
                            </div>
                            <span style="font-size:11px;color:#94A3B8;">${t.date}</span>
                        </div>
                        <div style="font-size:12px;color:#64748B;margin-bottom:4px;">Par ${t.doc || t.doctor || 'Vitalia'}</div>
                        <div style="font-size:12px;color:#334155;background:#F8FAFC;padding:10px 12px;border-radius:8px;border:1px solid #F1F5F9;">${t.note || t.summary || 'Pas de note.'}</div>
                    </div>`).join('')}
                </div>
            </div>
        </div>`;
    },

    // =========================================================================
    //  PRESCRIPTIONS
    // =========================================================================
    Prescriptions: () => {
        const rxList = [
            { patient:'Diallo Mariam', meds:['Metformine 1g x2/j','Lisinopril 5mg x1/j','Aspirine 100mg x1/j'], doctor:'Dr Esdras', date:'20 Mars 2026', status:'Active' },
            { patient:'Keita Ousmane', meds:['Amlodipine 5mg x1/j','Atorvastatine 20mg x1/j'], doctor:'Dr Sophie', date:'18 Mars 2026', status:'Active' },
            { patient:'Kouamé Serge', meds:['Metformine 500mg x2/j','Glibenclamide 5mg x1/j'], doctor:'Dr Esdras', date:'15 Mars 2026', status:'Expirée' },
            { patient:'Bamba Koné', meds:['Amoxicilline 500mg x3/j 7j','Paracétamol 1g si douleur'], doctor:'Dr Amon', date:'12 Mars 2026', status:'Terminée' },
        ];
        
        const getStatusStyles = (status) => {
            switch(status) {
                case 'Active': return 'bg-emerald-500/10 text-emerald-600 border-emerald-200';
                case 'Expirée': return 'bg-rose-500/10 text-rose-600 border-rose-200';
                default: return 'bg-slate-500/10 text-slate-600 border-slate-200';
            }
        };

        return `
        <div class="cv-animate flex flex-col gap-8">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-black text-slate-900 tracking-tight">Prescriptions Cliniques</h1>
                    <p class="text-sm font-semibold text-slate-500 mt-1">Suivi des ordonnances émises par l'établissement</p>
                </div>
                <button class="px-6 py-3 bg-slate-900 text-white font-black rounded-2xl flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                    <i data-lucide="plus" class="w-5 h-5"></i> Nouvelle ordonnance
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${rxList.map(rx => `
                    <div class="bg-white/70 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-8 flex flex-col gap-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500" style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);">
                        <div class="flex justify-between items-start">
                            <div class="flex items-center gap-4">
                                <div class="relative">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=${rx.patient}" class="w-14 h-14 rounded-full border-2 border-white shadow-md bg-slate-50">
                                    <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-black text-slate-900 leading-tight">${rx.patient}</h3>
                                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">${rx.doctor} • ${rx.date}</p>
                                </div>
                            </div>
                            <span class="px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${getStatusStyles(rx.status)}">
                                ${rx.status}
                            </span>
                        </div>

                        <div class="space-y-3">
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Médicaments principaux</p>
                            <div class="flex flex-col gap-2">
                                ${rx.meds.map(m => `
                                    <div class="flex items-center gap-3 p-3 bg-slate-50/50 border border-slate-100/50 rounded-2xl">
                                        <div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                        <span class="text-sm font-bold text-slate-700">${m}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="mt-auto flex gap-3 pt-4 border-t border-slate-100/50">
                            <button class="flex-1 py-3 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                <i data-lucide="printer" class="w-4 h-4"></i> Imprimer
                            </button>
                            <button class="flex-1 py-3 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                <i data-lucide="eye" class="w-4 h-4"></i> Détails
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;
    },

    // =========================================================================
    //  RÉSULTATS LABO
    // =========================================================================
    Labo: () => {
        const results = [
            { patient:'Diallo Mariam', test:'Bilan Glycémique', date:'12 Mars', result:'HbA1c: 7.8%, Glycémie: 1.42g/L', status:'Critique', doctor:'Dr Esdras' },
            { patient:'Keita Ousmane', test:'Bilan Lipidique', date:'18 Mars', result:'LDL: 1.6g/L, Triglycérides: 2.1g/L', status:'Anormal', doctor:'Dr Sophie' },
            { patient:'Kouamé Serge', test:'NFS Complète', date:'15 Mars', result:'GB: 8500, GR: 4.8M, Hb: 13.2g/dL', status:'Normal', doctor:'Dr Esdras' },
            { patient:'Sarra Diallo', test:'Bilan Rénal', date:'20 Mars', result:'Créatinine: 72Âµmol/L, Urée: 5.1mmol/L', status:'Normal', doctor:'Dr Amon' },
        ];
        const stC = { Critique:'red', Anormal:'amber', Normal:'green' };
        return `<div class="cv-animate" style="display:flex;flex-direction:column;gap:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;">
                <h1 style="font-size:20px;font-weight:800;color:#0F172A;">Résultats Laboratoire</h1>
                <button class="cv-btn cv-btn-primary"><i data-lucide="upload"></i> Importer résultats</button>
            </div>
            <div class="cv-card" style="overflow:hidden;">
                <table class="cv-table">
                    <thead><tr><th>Patient</th><th>Analyse</th><th>Date</th><th>Résultats clés</th><th>Médecin</th><th>Statut</th><th></th></tr></thead>
                    <tbody>
                        ${results.map(r => '<tr><td><div style="display:flex;align-items:center;gap:8px;"><img src="https://api.dicebear.com/7.x/notionists/svg?seed=' + r.patient + '" style="width:30px;height:30px;border-radius:50%;"><span style="font-size:13px;font-weight:700;color:#1E293B;">' + r.patient + '</span></div></td><td style="font-size:13px;font-weight:600;color:#334155;">' + r.test + '</td><td style="font-size:12px;color:#64748B;">' + r.date + '</td><td style="font-size:12px;color:#475569;max-width:200px;">' + r.result + '</td><td style="font-size:12px;color:#475569;">' + r.doctor + '</td><td><span class="cv-badge cv-badge-' + stC[r.status] + '">' + r.status + '</span></td><td><button class="cv-btn cv-btn-ghost" style="height:28px;font-size:11px;padding:0 10px;">Voir détails</button></td></tr>').join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    },

    // =========================================================================
    //  FACTURATION
    // =========================================================================
    Facturation: () => {
        const clinic = MOCK_DATA.clinics.find(c => c.id === clinicState.selectedClinicId);
        const wallet = clinic.tokenWallet;
        const transactions = MOCK_DATA.tokenTransactions.filter(t => t.clinicId === clinicState.selectedClinicId).reverse();
        
        const isLowBalance = wallet.token_balance < 50;
        const isCritical = wallet.token_balance === 0;

        return `<div class="cv-animate" style="display:flex;flex-direction:column;gap:24px;">
            <!-- ALERTES -->
            ${isCritical ? `
                <div style="background:#FEF2F2; border:1px solid #FECACA; padding:16px; border-radius:12px; display:flex; align-items:center; gap:12px; animation:shake 0.5s;">
                    <i data-lucide="alert-octagon" style="color:#EF4444;"></i>
                    <div style="flex:1;">
                        <div style="font-size:14px; font-weight:800; color:#991B1B;">ALERTE CRITIQUE : Solde épuisé</div>
                        <div style="font-size:12px; color:#B91C1C;">Les réservations de rendez-vous sont bloquées. Veuillez recharger votre compte immédiatement.</div>
                    </div>
                    <button class="cv-btn" style="background:#EF4444; color:#fff; border:none;" onclick="document.getElementById('recharge-amount').focus()">Recharger maintenant</button>
                </div>
            ` : isLowBalance ? `
                <div style="background:#FFFBEB; border:1px solid #FEF3C7; padding:14px; border-radius:12px; display:flex; align-items:center; gap:10px;">
                    <i data-lucide="alert-triangle" style="color:#D97706;"></i>
                    <div style="font-size:13px; font-weight:600; color:#92400E;">Solde faible : Il vous reste moins de 50 tokens. Prévoyez une recharge pour éviter les interruptions.</div>
                </div>
            ` : ''}

            <div style="display:flex;align-items:center;justify-content:space-between;">
                <div>
                    <h1 style="font-size:22px;font-weight:800;color:#0F172A;letter-spacing:-0.5px;">Gestion des Tokens — ${clinic.name}</h1>
                    <p style="font-size:13px;color:#64748B;margin-top:4px;">Suivi de consommation et recharges de l'établissement</p>
                </div>
                <div style="display:flex;gap:10px;">
                    <button class="cv-btn cv-btn-ghost" onclick="window.handleTokenHistoryExport()"><i data-lucide="download"></i> Historique CSV</button>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:20px;">
                <!-- Wallet & Recharge -->
                <div style="display:flex;flex-direction:column;gap:20px;">
                    <div class="cv-card" style="padding:28px; background:linear-gradient(135deg, #0F172A, #1E293B); color:#fff; position:relative; overflow:hidden;">
                        <div style="position:absolute; top:-20px; right:-20px; opacity:0.1;"><i data-lucide="coins" style="width:150px; height:150px;"></i></div>
                        
                        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                            <div>
                                <div style="font-size:11px; font-weight:700; color:#94A3B8; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">Solde disponible</div>
                                <div style="font-size:42px; font-weight:800; color:#fff; letter-spacing:-1px;">${wallet.token_balance.toLocaleString()} <span style="font-size:18px; color:#60A5FA; font-weight:600;">tokens</span></div>
                            </div>
                            <div style="text-align:right;">
                                <div style="font-size:10px; font-weight:700; color:#94A3B8; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Total investi</div>
                                <div style="font-size:16px; font-weight:700; color:#F8FAFC;">${wallet.total_spent_fcfa.toLocaleString()} FCFA</div>
                            </div>
                        </div>

                        <div style="margin-top:28px; display:flex; gap:24px; border-top:1px solid rgba(255,255,255,0.1); padding-top:20px;">
                            <div>
                                <div style="font-size:10px; font-weight:600; color:#64748B; text-transform:uppercase;">Consommation totale</div>
                                <div style="font-size:14px; font-weight:700; margin-top:2px;">${wallet.total_tokens_used.toLocaleString()}</div>
                            </div>
                            <div>
                                <div style="font-size:10px; font-weight:600; color:#64748B; text-transform:uppercase;">Prix moyen / token</div>
                                <div style="font-size:14px; font-weight:700; margin-top:2px;">${(wallet.total_spent_fcfa / (wallet.total_tokens_used + wallet.token_balance) || 0).toFixed(0)} FCFA</div>
                            </div>
                        </div>
                    </div>

                    <div class="cv-card" style="padding:24px;">
                        <div style="font-size:15px; font-weight:800; color:#1E293B; margin-bottom:18px; display:flex; align-items:center; gap:8px;">
                            <i data-lucide="zap" style="width:18px; color:#F59E0B;"></i> Acheter des tokens
                        </div>
                        
                        <div style="display:flex; flex-direction:column; gap:16px;">
                            <div>
                                <label style="font-size:11px; font-weight:700; color:#94A3B8; text-transform:uppercase; margin-bottom:6px; display:block;">Nombre de tokens souhaité</label>
                                <div style="display:flex; gap:10px;">
                                    <input type="number" id="recharge-amount" class="cv-input" value="1000" min="10" step="50" oninput="window.updateTokenPricePreview()" style="flex:1; font-size:18px; font-weight:700;">
                                    <div style="display:flex; flex-direction:column; justify-content:center; padding:0 12px; background:#F1F5F9; border-radius:10px; border:1px solid #E2E8F0;">
                                        <span id="recharge-price-label" style="font-size:13px; font-weight:800; color:#1E293B;">400 FCFA / token</span>
                                    </div>
                                </div>
                            </div>

                            <div style="background:#F8FAFC; padding:16px; border-radius:12px; border:1px dashed #E2E8F0; display:flex; justify-content:space-between; align-items:center;">
                                <div>
                                    <div style="font-size:11px; font-weight:600; color:#64748B;">MONTANT TOTAL à€ REGLER</div>
                                    <div id="recharge-total-preview" style="font-size:24px; font-weight:800; color:#2563EB;">400 000 FCFA</div>
                                </div>
                                <button class="cv-btn cv-btn-primary" style="height:48px; padding:0 32px; font-size:14px; font-weight:700; box-shadow:0 8px 20px rgba(59,130,246,0.3);" onclick="window.handleTokenPurchase()">
                                    Procéder au paiement
                                </button>
                            </div>

                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                                <div style="padding:10px; border:1px solid #E0F2FE; background:#F0F9FF; border-radius:8px;">
                                    <div style="font-size:10px; font-weight:700; color:#0369A1; text-transform:uppercase;">Palier 1 (< 1000)</div>
                                    <div style="font-size:13px; font-weight:700; color:#0C4A6E;">500 FCFA <span style="font-weight:400; font-size:11px;">par token</span></div>
                                </div>
                                <div style="padding:10px; border:1px solid #DCFCE7; background:#F0FDF4; border-radius:8px;">
                                    <div style="font-size:10px; font-weight:700; color:#15803D; text-transform:uppercase;">Palier 2 (â‰¥ 1000)</div>
                                    <div style="font-size:13px; font-weight:700; color:#064E3B;">400 FCFA <span style="font-weight:400; font-size:11px;">par token</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Historique -->
                <div class="cv-card" style="display:flex; flex-direction:column; overflow:hidden;">
                    <div style="padding:18px 24px; border-bottom:1px solid #F1F5F9; font-weight:800; color:#0F172A; display:flex; justify-content:space-between; align-items:center;">
                        Historique des flux
                        <span style="font-size:11px; font-weight:600; color:#3B82F6; background:#EFF6FF; padding:4px 8px; border-radius:20px;">Dernière 30 jours</span>
                    </div>
                    <div style="flex:1; overflow-y:auto; max-height:600px;">
                        <table class="cv-table">
                            <thead>
                                <tr>
                                    <th>Activité</th>
                                    <th>Quantité</th>
                                    <th>Date</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${transactions.map(t => `
                                    <tr>
                                        <td>
                                            <div style="display:flex; align-items:center; gap:10px;">
                                                <div style="width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; background:${t.type === 'purchase' ? '#DCFCE7' : '#F1F5F9'};">
                                                    <i data-lucide="${t.type === 'purchase' ? 'plus-circle' : 'minus-circle'}" style="width:14px; color:${t.type === 'purchase' ? '#10B981' : '#64748B'};"></i>
                                                </div>
                                                <div>
                                                    <div style="font-size:13px; font-weight:700; color:#1E293B;">${t.type === 'purchase' ? 'Recharge Tokens' : 'Usage RDV'}</div>
                                                    <div style="font-size:10px; color:#94A3B8;">${t.note || (t.amount > 0 ? t.amount.toLocaleString() + ' FCFA' : '')}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style="font-size:14px; font-weight:800; color:${t.type === 'purchase' ? '#10B981' : '#0F172A'};">
                                            ${t.type === 'purchase' ? '+' : '-'}${t.qty}
                                        </td>
                                        <td style="font-size:11px; color:#64748B;">${t.date}</td>
                                        <td>
                                            <span class="cv-badge cv-badge-${t.status === 'paid' || t.status === 'confirmed' ? 'green' : t.status === 'pending' ? 'amber' : 'red'}">
                                                ${t.status.toUpperCase()}
                                            </span>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>`;
    },

    // =========================================================================
    //  STOCK & PHARMACIE
    // =========================================================================
    Stock: () => {
        const items = [
            { name:'Metformine 500mg', cat:'Antidiabétique', stock:248, min:50, unit:'Boîtes', status:'OK' },
            { name:'Paracétamol 1g', cat:'Analgésique', stock:12, min:30, unit:'Boîtes', status:'Rupture' },
            { name:'Amoxicilline 500mg', cat:'Antibiotique', stock:34, min:30, unit:'Boîtes', status:'Faible' },
            { name:'Lisinopril 5mg', cat:'Antihypertenseur', stock:156, min:40, unit:'Boîtes', status:'OK' },
            { name:'Gants stériles L', cat:'Consommable', stock:8, min:20, unit:'Boîtes', status:'Rupture' },
            { name:'Seringues 5mL', cat:'Consommable', stock:340, min:100, unit:'Unités', status:'OK' },
        ];
        const getStatusStyles = (status) => {
            switch(status) {
                case 'OK': return 'bg-emerald-500/10 text-emerald-600 border-emerald-200';
                case 'Faible': return 'bg-amber-500/10 text-amber-600 border-amber-200';
                case 'Rupture': return 'bg-rose-500/10 text-rose-600 border-rose-200';
                default: return 'bg-slate-500/10 text-slate-600 border-slate-200';
            }
        };

        return `
        <div class="cv-animate flex flex-col gap-8">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-black text-slate-900 tracking-tight">Stock & Pharmacie</h1>
                    <p class="text-sm font-semibold text-slate-500 mt-1">Inventaire en temps réel et alertes de réapprovisionnement</p>
                </div>
                <button class="px-6 py-3 bg-slate-900 text-white font-black rounded-2xl flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                    <i data-lucide="plus" class="w-5 h-5"></i> Entrée stock
                </button>
            </div>

            <div class="bg-rose-50 border border-rose-100 rounded-[32px] p-8 flex items-center gap-8 shadow-sm">
                <div class="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-500/20 shrink-0">
                    <i data-lucide="alert-octagon" class="w-8 h-8"></i>
                </div>
                <div class="flex-1">
                    <h2 class="text-xl font-black text-rose-900">2 produits en rupture critique</h2>
                    <p class="text-rose-700/80 font-medium">Paracétamol 1g, Gants stériles L — Commander immédiatement pour éviter l'arrêt des soins.</p>
                </div>
                <button class="px-5 py-2.5 bg-rose-600 text-white font-black rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/10">Commander</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${items.map(item => {
                    const pct = Math.min((item.stock/(item.min*2))*100, 100);
                    const barColor = item.status==='OK' ? 'bg-emerald-500' : item.status==='Faible' ? 'bg-amber-500' : 'bg-rose-500';
                    return `
                    <div class="bg-white/70 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-6 flex flex-col gap-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500" style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);">
                        <div class="flex justify-between items-start">
                            <span class="px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${getStatusStyles(item.status)}">
                                ${item.status}
                            </span>
                            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">${item.cat}</span>
                        </div>

                        <div>
                            <h3 class="text-lg font-black text-slate-900 leading-tight">${item.name}</h3>
                            <div class="flex items-baseline gap-2 mt-2">
                                <span class="text-3xl font-black text-slate-800">${item.stock}</span>
                                <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">${item.unit}</span>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <div class="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                <span class="text-slate-400">Niveau de stock</span>
                                <span class="text-slate-900">Min: ${item.min}</span>
                            </div>
                            <div class="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div class="${barColor} h-full rounded-full transition-all duration-1000" style="width: ${pct}%"></div>
                            </div>
                        </div>

                        <button class="w-full py-3 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-300">
                            Historique Mouvements
                        </button>
                    </div>`;
                }).join('')}
            </div>
        </div>`;
    },

    // =========================================================================
    //  MESSAGES
    // =========================================================================
    Messages: () => {
        const threads = [
            { name:'Dr Esdras', msg:'Résultats labo pour Diallo Mariam reà§us.', time:'2m', unread:2, online:true },
            { name:'Dr Sophie', msg:'Patient Kouamé Serge est pràªt pour la visite.', time:'15m', unread:1, online:false },
            { name:'Inf. Mariam', msg:'Vitaux de 09h enregistrés pour Bamba Koné.', time:'28m', unread:0, online:true },
            { name:'Dr Amon', msg:'RDV annulé pour Sarra Diallo demain 10h.', time:'1h', unread:0, online:false },
        ];
        const msgs = [
            { from:'Dr Esdras', text:'Résultats labo pour Diallo Mariam reà§us. HbA1c à 7.8%, préoccupant.', time:'09:02', mine:false },
            { from:'Moi', text:'Merci. Je vais revoir son dosage de Metformine. Elle est encore là ?', time:'09:04', mine:true },
            { from:'Dr Esdras', text:'Oui, elle attend en salle 2. Je lui ai dit que tu rappellerais.', time:'09:05', mine:false },
            { from:'Moi', text:"Parfait. Je vais l'appeler maintenant et ajuster sa prescription.", time:'09:07', mine:true },
        ];
        return `<div class="cv-animate" style="display:grid;grid-template-columns:280px 1fr;height:calc(100vh - 136px);background:#fff;border-radius:14px;border:1px solid #E2E8F0;overflow:hidden;">
            <div style="border-right:1px solid #F1F5F9;display:flex;flex-direction:column;">
                <div style="padding:16px;border-bottom:1px solid #F1F5F9;"><div style="font-size:15px;font-weight:800;color:#0F172A;margin-bottom:10px;">Messages</div><div style="position:relative;"><i data-lucide="search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);width:14px;height:14px;color:#94A3B8;"></i><input class="cv-input" placeholder="Rechercher..." style="padding-left:32px;height:34px;font-size:12px;"></div></div>
                <div style="flex:1;overflow-y:auto;">
                    ${threads.map((t, i) => '<div style="display:flex;align-items:center;gap:10px;padding:14px 16px;cursor:pointer;border-bottom:1px solid #F8FAFC;background:' + (i===0?'#F0F7FF':'#fff') + ';"><div style="position:relative;flex-shrink:0;"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=' + t.name + '" style="width:38px;height:38px;border-radius:50%;"><span style="position:absolute;bottom:1px;right:1px;width:9px;height:9px;border-radius:50%;background:' + (t.online?'#10B981':'#CBD5E1') + ';border:2px solid #fff;"></span></div><div style="flex:1;min-width:0;"><div style="display:flex;justify-content:space-between;margin-bottom:2px;"><span style="font-size:13px;font-weight:700;color:#1E293B;">' + t.name + '</span><span style="font-size:10px;color:#94A3B8;">' + t.time + '</span></div><div style="font-size:11px;color:#64748B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + t.msg + '</div></div>' + (t.unread>0?'<span style="background:#2563EB;color:#fff;border-radius:20px;font-size:9px;font-weight:800;padding:2px 7px;">' + t.unread + '</span>':'') + '</div>').join('')}
                </div>
            </div>
            <div style="display:flex;flex-direction:column;">
                <div style="padding:14px 20px;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:12px;"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=DrEsdras" style="width:38px;height:38px;border-radius:50%;border:2px solid #DBEAFE;"><div><div style="font-size:14px;font-weight:700;color:#1E293B;">Dr Esdras</div><div style="font-size:11px;color:#10B981;">En ligne</div></div></div>
                <div style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:14px;">
                    ${msgs.map(m => '<div style="display:flex;flex-direction:column;align-items:' + (m.mine?'flex-end':'flex-start') + ';"><div class="cv-chat-bubble ' + (m.mine?'cv-chat-mine':'cv-chat-other') + '">' + m.text + '</div><div style="font-size:10px;color:#94A3B8;margin-top:4px;">' + m.from + ' Â· ' + m.time + '</div></div>').join('')}
                </div>
                <div style="padding:14px 20px;border-top:1px solid #F1F5F9;display:flex;gap:10px;align-items:center;">
                    <input class="cv-input" placeholder="Écrire un message..." style="flex:1;">
                    <button class="cv-btn cv-btn-primary"><i data-lucide="send"></i> Envoyer</button>
                </div>
            </div>
        </div>`;
    },

    // =========================================================================
    //  STATISTIQUES
    // =========================================================================
    Statistics: () => {
        const clinic = MOCK_DATA.clinics.find(c => c.id === clinicState.selectedClinicId);
        const totalPatients = MOCK_DATA.patients.length;
        const totalDoctors = MOCK_DATA.doctors.filter(d => d.clinicId === clinicState.selectedClinicId).length;
        const confirmedBookings = MOCK_DATA.appointments.filter(a => a.status === 'CONFIRMED').length;
        const tokenBalance = (clinic.tokenWallet ? clinic.tokenWallet.token_balance : 0);

        const doctorsPerformance = MOCK_DATA.doctors
            .filter(d => d.clinicId === clinicState.selectedClinicId)
            .map(d => ({
                name: d.name,
                load: d.load || 0,
                consultations: MOCK_DATA.appointments.filter(a => {
                    const slot = MOCK_DATA.slots.find(s => s.id === a.slotId);
                    return slot && slot.doctorId === d.id;
                }).length
            }));

        const specialtyStats = MOCK_DATA.specialties
            .filter(s => s.clinicId === clinicState.selectedClinicId)
            .map(s => {
                const slots = MOCK_DATA.slots.filter(sl => sl.specialtyId === s.id);
                const booked = slots.filter(sl => sl.status === 'BOOKED').length;
                return { name: s.name, booked, total: slots.length, pct: slots.length > 0 ? Math.round((booked / slots.length) * 100) : 0 };
            });

        return `<div class="cv-animate" style="display:flex;flex-direction:column;gap:24px;">
            <!-- Header -->
            <div style="display:flex;align-items:center;justify-content:space-between;">
                <div>
                    <h1 style="font-size:22px;font-weight:800;color:#0F172A;letter-spacing:-0.5px;">Analyses & Statistiques</h1>
                    <p style="font-size:13px;color:#64748B;margin-top:4px;">Indicateurs de performance par module</p>
                </div>
                <div style="display:flex;gap:10px;">
                    <button class="cv-btn cv-btn-ghost"><i data-lucide="download"></i> Rapport PDF</button>
                    <button class="cv-btn cv-btn-primary" onclick="handleClinicNav('dashboard')"><i data-lucide="layout-dashboard"></i> Vue Directe</button>
                </div>
            </div>

            <!-- KPIs Grid (Général) -->
            <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:16px;">
                <div class="cv-card" style="padding:20px;border-bottom:3px solid #3B82F6;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
                        <span style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;">Module Patients</span>
                        <i data-lucide="users" style="width:16px;height:16px;color:#3B82F6;"></i>
                    </div>
                    <div style="font-size:26px;font-weight:900;color:#1E293B;">${totalPatients}</div>
                    <div style="font-size:11px;color:#10B981;font-weight:700;margin-top:4px;">Base Vitalia active</div>
                </div>
                <div class="cv-card" style="padding:20px;border-bottom:3px solid #8B5CF6;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
                        <span style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;">Module Rendez-vous</span>
                        <i data-lucide="calendar-check" style="width:16px;height:16px;color:#8B5CF6;"></i>
                    </div>
                    <div style="font-size:26px;font-weight:900;color:#1E293B;">${confirmedBookings}</div>
                    <div style="font-size:11px;color:#94A3B8;font-weight:700;margin-top:4px;">Réservations confirmées</div>
                </div>
                <div class="cv-card" style="padding:20px;border-bottom:3px solid #10B981;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
                        <span style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;">Module Médecins</span>
                        <i data-lucide="stethoscope" style="width:16px;height:16px;color:#10B981;"></i>
                    </div>
                    <div style="font-size:26px;font-weight:900;color:#1E293B;">${totalDoctors}</div>
                    <div style="font-size:11px;color:#94A3B8;font-weight:700;margin-top:4px;">Équipe en service</div>
                </div>
                <div class="cv-card" style="padding:20px;border-bottom:3px solid #F59E0B;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
                        <span style="font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;">Module Facturation</span>
                        <i data-lucide="coins" style="width:16px;height:16px;color:#F59E0B;"></i>
                    </div>
                    <div style="font-size:26px;font-weight:900;color:#1E293B;">${tokenBalance}</div>
                    <div style="font-size:11px;color:${tokenBalance < 50 ? '#EF4444' : '#F59E0B'};font-weight:700;margin-top:4px;">
                        Tokens disponibles
                    </div>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
                <!-- Gestion des Ressources (Médecins & Spécialités) -->
                <div style="display:flex;flex-direction:column;gap:20px;">
                    <div class="cv-card" style="padding:24px;">
                        <h3 style="font-size:14px;font-weight:800;color:#0F172A;margin-bottom:20px;display:flex;align-items:center;gap:8px;">
                            <i data-lucide="users" style="width:16px;height:16px;color:#3B82F6;"></i> Section : Médecins & Charge
                        </h3>
                        <div style="display:flex;flex-direction:column;gap:16px;">
                            ${doctorsPerformance.map(d => `
                            <div>
                                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                                    <span style="font-size:13px;font-weight:700;color:#334155;">${d.name}</span>
                                    <span style="font-size:12px;font-weight:800;color:#64748B;">${d.consultations} consultations</span>
                                </div>
                                <div style="height:8px;background:#F1F5F9;border-radius:4px;overflow:hidden;">
                                    <div style="height:100%;width:${Math.min(100, (d.consultations/10)*100)}%;background:#3B82F6;border-radius:4px;"></div>
                                </div>
                            </div>`).join('')}
                        </div>
                    </div>

                    <div class="cv-card" style="padding:24px;">
                        <h3 style="font-size:14px;font-weight:800;color:#0F172A;margin-bottom:20px;display:flex;align-items:center;gap:8px;">
                            <i data-lucide="layers" style="width:16px;height:16px;color:#8B5CF6;"></i> Section : Rendez-vous par Spécialité
                        </h3>
                        <div style="display:flex;flex-direction:column;gap:12px;">
                            ${specialtyStats.map(s => `
                            <div style="display:flex;align-items:center;gap:16px;">
                                <div style="width:140px;font-size:12px;font-weight:600;color:#64748B;">${s.name}</div>
                                <div style="flex:1;height:12px;background:#F8FAFC;border:1px solid #F1F5F9;border-radius:6px;overflow:hidden;position:relative;">
                                    <div style="height:100%;width:${s.pct}%;background:#8B5CF6;"></div>
                                </div>
                                <div style="width:40px;text-align:right;font-size:12px;font-weight:800;color:#1E293B;">${s.pct}%</div>
                            </div>`).join('')}
                        </div>
                    </div>
                </div>

                <!-- Activité Patient & Finances -->
                <div style="display:flex;flex-direction:column;gap:20px;">
                    <div class="cv-card" style="padding:24px;background:linear-gradient(135deg, #F8FAFC, #FFFFFF);">
                        <h3 style="font-size:14px;font-weight:800;color:#0F172A;margin-bottom:20px;display:flex;align-items:center;gap:8px;">
                            <i data-lucide="folder-heart" style="width:16px;height:16px;color:#10B981;"></i> Section : Dossiers médicaux & Vitalia
                        </h3>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
                            <div style="background:#F0FDF4;padding:16px;border-radius:12px;border:1px solid #DCFCE7;">
                                <div style="font-size:10px;font-weight:700;color:#15803D;text-transform:uppercase;">Score Moyen</div>
                                <div style="font-size:24px;font-weight:900;color:#166534;margin-top:4px;">72 <span style="font-size:12px;font-weight:600;">pts</span></div>
                            </div>
                            <div style="background:#FFF1F2;padding:16px;border-radius:12px;border:1px solid #FFE4E6;">
                                <div style="font-size:10px;font-weight:700;color:#BE123C;text-transform:uppercase;">Dossiers Actifs</div>
                                <div style="font-size:24px;font-weight:900;color:#9F1239;margin-top:4px;">${confirmedBookings}</div>
                            </div>
                        </div>
                        <p style="font-size:12px;color:#64748B;line-height:1.6;">
                            Aligné avec le module <strong>Dossiers</strong>, cet indicateur montre la progression de la base clinique enregistrée.
                        </p>
                    </div>

                    <div class="cv-card" style="padding:24px;background:#0F172A;color:#fff;border-radius:16px;">
                        <h3 style="font-size:14px;font-weight:800;color:#FFFFFF;margin-bottom:20px;display:flex;align-items:center;gap:8px;">
                            <i data-lucide="trending-up" style="width:16px;height:16px;color:#FCD34D;"></i> Section : Facturation & Consommation
                        </h3>
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
                            <div>
                                <div style="font-size:11px;color:rgba(255,255,255,0.6);text-transform:uppercase;font-weight:700;">Dépense Totale</div>
                                <div style="font-size:20px;font-weight:900;color:#fff;margin-top:4px;">${clinic.tokenWallet ? (clinic.tokenWallet.total_spent_fcfa / 1000).toFixed(1) : 0}k <span style="font-size:12px;font-weight:500;">FCFA</span></div>
                            </div>
                            <div style="text-align:right;">
                                <div style="font-size:11px;color:rgba(255,255,255,0.6);text-transform:uppercase;font-weight:700;">Tokens Consommés</div>
                                <div style="font-size:20px;font-weight:900;color:#FCD34D;margin-top:4px;">${clinic.tokenWallet ? clinic.tokenWallet.total_tokens_used : 0}</div>
                            </div>
                        </div>
                        <div style="padding:12px;background:rgba(255,255,255,0.05);border-radius:10px;font-size:11px;color:rgba(255,255,255,0.8);line-height:1.5;">
                            Suivi en temps réel calqué sur le module <strong>Facturation</strong>.
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    },


    // =========================================================================
    //  PARAMàˆTRES
    // =========================================================================
    Settings: () => {
        const clinic = MOCK_DATA.clinics.find(c => c.id === clinicState.selectedClinicId) || {};

        return `<div class="cv-animate" style="max-width:700px;margin:10px auto;display:flex;flex-direction:column;gap:24px;">
            <div style="display:flex;flex-direction:column;gap:20px;">
                <div><h1 style="font-size:20px;font-weight:800;color:#0F172A;">Informations Clinique</h1><p style="font-size:13px;color:#64748B;margin-top:3px;">Gérez les informations de votre établissement</p></div>
                
                <!-- Contact Details -->
                <div class="cv-card" style="padding:24px;display:flex;flex-direction:column;gap:16px;">
                    <div style="font-size:14px;font-weight:800;color:#1E293B;margin-bottom:4px;">Coordonnées</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                        <div><label class="cv-label">Nom de la clinique</label><input class="cv-input" id="settings-name" value="${clinic.name || ''}"></div>
                        <div><label class="cv-label">Téléphone</label><input class="cv-input" id="settings-phone" value="${clinic.phone || ''}"></div>
                    </div>
                    <div><label class="cv-label">Adresse complète</label><input class="cv-input" id="settings-address" value="${clinic.address || ''}"></div>
                    <div><label class="cv-label">Email de contact</label><input class="cv-input" id="settings-email" value="${clinic.email || ''}"></div>
                </div>

                <!-- Operational Hours -->
                <div class="cv-card" style="padding:24px;display:flex;flex-direction:column;gap:16px;">
                    <div style="font-size:14px;font-weight:800;color:#1E293B;margin-bottom:4px;">Horaires & Planning</div>
                    <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:16px;">
                        <div><label class="cv-label">Heure d'ouverture</label><input class="cv-input" type="time" id="settings-open" value="${clinic.openingHour || '08:00'}"></div>
                        <div><label class="cv-label">Heure de fermeture</label><input class="cv-input" type="time" id="settings-close" value="${clinic.closingHour || '18:00'}"></div>
                        <div><label class="cv-label">Durée RDV (min)</label><input class="cv-input" type="number" id="settings-duration" value="${clinic.slotDuration || 30}"></div>
                    </div>
                </div>

                <div style="display:flex;justify-content:flex-end;">
                    <button class="cv-btn cv-btn-primary" onclick="window.handleSaveClinicSettings()" style="height:44px;padding:0 24px;"><i data-lucide="save"></i> Enregistrer les modifications</button>
                </div>
            </div>
        </div>`;
    },
};

// Global Handler for Clinic Navigation
window.handleClinicNav = function(subView) {
    if (typeof state !== 'undefined') {
        state.clinicSubView = subView;
    }

    // Try to update in-place to avoid full re-render (prevents race with setTimeout)
    const inner = document.getElementById('clinic-content-inner');
    if (inner) {
        const viewMap = {
            'dashboard':    () => ClinicViews.Dashboard(),
            'doctors':      () => ClinicViews.Doctors(),
            'patients':     () => ClinicViews.Patients(),
            'appointments': () => ClinicViews.Appointments(),
            'smart_planning':() => ClinicViews.SmartPlanning(),
            'dossiers':     () => ClinicViews.Dossiers(),
            'prescriptions':() => ClinicViews.Prescriptions(),
            'labo':         () => ClinicViews.Labo(),
            'facturation':  () => ClinicViews.Facturation(),
            'stock':        () => ClinicViews.Stock(),
            'messages':     () => ClinicViews.Messages(),
            'stats':        () => ClinicViews.Statistics(),
            'settings':     () => ClinicViews.Settings(),
        };
        const fn = viewMap[subView] || viewMap['appointments'];
        inner.innerHTML = fn();

        // Update active nav item
        document.querySelectorAll('.cv-nav-item').forEach(el => el.classList.remove('active'));
        const activeItem = document.querySelector(`.cv-nav-item[onclick*="'${subView}'"]`);
        if (activeItem) activeItem.classList.add('active');

        if (window.lucide) lucide.createIcons();
    } else {
        // Fallback: full re-render if layout isn't mounted yet
        if (typeof renderApp === 'function') renderApp();
    }
};

// =========================================================================
//  GLOBAL HANDLERS FOR APPOINTMENT ENGINE V1.5
// =========================================================================

window.handleDateChange = (val) => {
    clinicState.selectedDate = val;
    clinicState.activeSpecialtyId = null; // Reset selection on date change
    handleClinicNav('appointments');
};

window.handleSelectSpecialty = (id) => {
    clinicState.activeSpecialtyId = id;
    
    // Auto-génération si aucun créneau n'existe pour la journée
    const schedule = AppointmentEngine.getDailySchedule(clinicState.selectedClinicId, clinicState.selectedDate);
    const hasAnySlots = schedule.specialties.some(s => s.slots.length > 0);
    
    if (!hasAnySlots) {
        try {
            AppointmentEngine.generateDailySlots(clinicState.selectedClinicId, clinicState.selectedDate);
        } catch (e) { console.error("Auto-gen error:", e); }
    }
    
    handleClinicNav('appointments');
};

window.handleBackToSpecialties = () => {
    clinicState.activeSpecialtyId = null;
    handleClinicNav('appointments');
};

window.handleGenerateSlots = () => {
    try {
        AppointmentEngine.generateDailySlots(clinicState.selectedClinicId, clinicState.selectedDate);
        handleClinicNav('appointments');
    } catch (e) {
        alert(e.message);
    }
};

window.handleOpenAssignDoctor = (slotId, specialtyId) => {
    const modal = document.getElementById('cv-assign-modal');
    const list = document.getElementById('cv-doctor-list');
    if (!modal || !list) return;

    const qualifiedDoctors = MOCK_DATA.doctors.filter(d => d.specialties.includes(specialtyId) && d.status === 'active');
    
    list.innerHTML = qualifiedDoctors.length > 0 
        ? qualifiedDoctors.map(dr => `
            <div class="cv-card-hover" onclick="window.confirmAssign('${slotId}', '${dr.id}')" style="padding:12px;display:flex;align-items:center;gap:12px;cursor:pointer;border:1px solid #E2E8F0;border-radius:10px;">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${dr.name}" style="width:32px;height:32px;border-radius:50%;">
                <div>
                    <div style="font-size:13px;font-weight:700;color:#1E293B;">${dr.name}</div>
                    <div style="font-size:11px;color:#94A3B8;">${dr.role}</div>
                </div>
            </div>
        `).join('')
        : `<div style="padding:20px;text-align:center;color:#94A3B8;font-size:13px;">Aucun médecin qualifié disponible.</div>`;

    modal.style.display = 'flex';
};

window.handleCloseAssignDoctor = () => {
    const modal = document.getElementById('cv-assign-modal');
    if (modal) modal.style.display = 'none';
};

window.confirmAssign = (slotId, drId) => {
    try {
        AppointmentEngine.assignDoctorToSlot(slotId, drId);
        window.handleCloseAssignDoctor();
        handleClinicNav('appointments');
    } catch (e) {
        alert(e.message);
    }
};

window.handleBookSlot = (slotId) => {
    const modal = document.getElementById('cv-book-modal');
    if (!modal) return;

    document.getElementById('book-slot-id').value = slotId;
    
    // Si un patient a été sélectionné depuis la page "Patients"
    if (clinicState.pendingBookingPatientId) {
        const p = MOCK_DATA.patients.find(x => x.id === clinicState.pendingBookingPatientId);
        if (p) {
            document.getElementById('book-patient-name').value = p.name;
            document.getElementById('book-patient-phone').value = p.phone || p.tel || '';
            document.getElementById('book-patient-vitalia').value = p.id;
        }
        // On ne vide PAS forcément ici, on pourrait le faire après confirmation
    } else {
        document.getElementById('book-patient-name').value = '';
        document.getElementById('book-patient-phone').value = '';
        document.getElementById('book-patient-vitalia').value = '';
    }

    modal.style.display = 'flex';
    if (window.lucide) lucide.createIcons();
};

window.handleCloseBookModal = () => {
    const modal = document.getElementById('cv-book-modal');
    if (modal) modal.style.display = 'none';
};

window.confirmReservation = () => {
    const slotId = document.getElementById('book-slot-id').value;
    const name = document.getElementById('book-patient-name').value;
    const phone = document.getElementById('book-patient-phone').value;
    const vitaliaId = document.getElementById('book-patient-vitalia').value;

    if (!name || !phone) {
        return alert("Veuillez saisir au moins le nom et le numéro de téléphone.");
    }

    try {
        const patientId = vitaliaId || `pat_gen_${Date.now()}`;
        
        // Simuler la création d'un patient temporaire dans MOCK_DATA
        if (!MOCK_DATA.patients.find(p => p.id === patientId)) {
            MOCK_DATA.patients.push({
                id: patientId,
                name: name,
                phone: phone,
                vitaliaId: vitaliaId
            });
        }

        AppointmentEngine.bookSlot(slotId, patientId);
        
        // Reset pending patient after successful booking
        clinicState.pendingBookingPatientId = null;

        alert(`Réservation confirmée pour ${name}.\n(-1 token)`);
        window.handleCloseBookModal();
        handleClinicNav('appointments');
    } catch (e) {
        if (e.message === "INSUFFICIENT_TOKENS") {
            if (confirm("Votre solde de tokens est épuisé. Voulez-vous aller sur la page de facturation pour recharger ?")) {
                window.handleCloseBookModal();
                handleClinicNav('facturation');
            }
        } else {
            alert("Erreur: " + e.message);
        }
    }
};

window.handlePatientSearch = (query) => {
    clinicState.patientSearchQuery = query;
    const inner = document.getElementById('clinic-content-inner');
    if (inner) {
        inner.innerHTML = ClinicViews.Patients();
        if (window.lucide) lucide.createIcons();
    }
};

window.handleStartBookingForPatient = (patientId) => {
    const p = MOCK_DATA.patients.find(x => x.id === patientId);
    if (!p) return;
    
    clinicState.pendingBookingPatientId = patientId;
    alert(`Préparation de la réservation pour : ${p.name}\nVeuillez maintenant choisir un créneau dans le planning.`);
    
    handleClinicNav('appointments');
};

window.handleOpenPatientDossier = (patientId) => {
    clinicState.dossierPatientId = patientId;
    handleClinicNav('dossiers');
};

window.handleOpenNewSpecialtyModal = () => {
    const modal = document.getElementById('cv-spec-modal');
    if (modal) {
        modal.style.display = 'flex';
        if (window.lucide) lucide.createIcons();
    }
};

window.handleCloseNewSpecialtyModal = () => {
    const modal = document.getElementById('cv-spec-modal');
    if (modal) modal.style.display = 'none';
};

window.addSuggestedSpecialty = (name) => {
    const capacity = parseInt(document.getElementById('cv-spec-capacity-input')?.value || 1);
    window.confirmAddSpecialty(name, capacity);
    window.handleCloseNewSpecialtyModal();
};

window.addCustomSpecialty = () => {
    const input = document.getElementById('cv-custom-spec-input');
    const capacity = parseInt(document.getElementById('cv-spec-capacity-input')?.value || 1);
    const name = input?.value.trim();
    if (name) {
        window.confirmAddSpecialty(name, capacity);
        input.value = '';
        window.handleCloseNewSpecialtyModal();
    }
};

window.confirmAddSpecialty = (name, capacity = 1) => {
    // Eviter les doublons
    const exists = MOCK_DATA.specialties.find(s => s.clinicId === clinicState.selectedClinicId && s.name.toLowerCase() === name.toLowerCase());
    if (exists) return alert("Cette spécialité existe déjà dans cette clinique.");

    const id = `spec_${Date.now()}`;
    MOCK_DATA.specialties.push({
        id: id,
        clinicId: clinicState.selectedClinicId,
        name: name,
        isActive: true,
        concurrentSlots: capacity
    });

    // Auto-génération immédiate pour la nouvelle spécialité
    try {
        AppointmentEngine.generateDailySlots(clinicState.selectedClinicId, clinicState.selectedDate);
    } catch (e) { console.error("Auto-gen error:", e); }

    handleClinicNav('appointments');
};

window.handleViewAppointment = (slotId) => {
    const appt = MOCK_DATA.appointments.find(a => a.slotId === slotId);
    if (appt) {
        alert(`Réservation confirmée\nPatient ID: ${appt.patientId}\nStatut: ${appt.status}`);
    } else {
        alert("Aucun détail trouvé pour cette réservation.");
    }
};

window.handleOpenAddDoctorModal = () => {
    const modal = document.getElementById('cv-add-dr-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Reset fields
        document.getElementById('add-dr-name').value = '';
        document.getElementById('add-dr-order').value = '';
        document.querySelectorAll('input[name="add-dr-spec-check"]').forEach(cb => cb.checked = false);
        window.updateSpecLabel && window.updateSpecLabel();
        
        // Reset schedules
        window.tempSchedules = {};
        document.querySelectorAll('.day-select-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('configured');
            btn.style.background = '#fff';
            btn.style.color = '#64748B';
            btn.style.borderColor = '#E2E8F0';
        });
        const summary = document.getElementById('schedule-summary');
        if (summary) summary.style.display = 'none';
        const list = document.getElementById('schedule-summary-list');
        if (list) list.innerHTML = '';

        if (window.lucide) lucide.createIcons();
    }
};

window.handleCloseAddDoctorModal = () => {
    const modal = document.getElementById('cv-add-dr-modal');
    if (modal) modal.style.display = 'none';
};

window.confirmAddDoctor = () => {
    const rawName = document.getElementById('add-dr-name').value.trim();
    const prefix = document.getElementById('add-dr-prefix').value;
    const name = prefix + " " + rawName;
    const orderNumber = document.getElementById('add-dr-order').value.trim();
    
    // Get selected specialties from Checkboxes
    const selectedSpecNames = Array.from(document.querySelectorAll('input[name="add-dr-spec-check"]:checked')).map(cb => cb.value);
    
    // Check if at least one day is configured in tempSchedules
    const configuredDayKeys = Object.keys(window.tempSchedules || {});

    if (!rawName) return alert("Veuillez renseigner le nom du médecin.");
    if (selectedSpecNames.length === 0) return alert("Veuillez sélectionner au moins une spécialité.");
    if (configuredDayKeys.length === 0) return alert("Veuillez configurer et VALIDER au moins un planning journalier.");

    // Ensure selected specialties exist in MOCK_DATA.specialties
    const specIds = selectedSpecNames.map(name => {
        let spec = MOCK_DATA.specialties.find(s => s.name === name);
        if (!spec) {
            const id = `spec_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
            spec = { id: id, clinicId: clinicState.selectedClinicId, name: name, isActive: true, concurrentSlots: 1 };
            MOCK_DATA.specialties.push(spec);
        }
        return spec.id;
    });

    const newDr = {
        id: `dr_${Date.now()}`,
        clinicId: clinicState.selectedClinicId,
        name: name,
        role: selectedSpecNames[0], // Use first specialty as primary role
        orderNumber: orderNumber || null,
        status: 'active',
        specialties: specIds,
        load: 0,
        availability: {
            isFlexible: true,
            schedules: window.tempSchedules // Use the per-day dictionary
        }
    };

    MOCK_DATA.doctors.push(newDr);
    
    // ACTUALISATION DIRECTE : Re-calculer les assignations pour la date sélectionnée
    try {
        AppointmentEngine.recomputeAutoAssignments(clinicState.selectedClinicId, clinicState.selectedDate);
    } catch (e) {
        console.error("Auto-assign error:", e);
    }

    window.handleCloseAddDoctorModal();
    // Rediriger vers les rendez-vous pour voir l'impact immédiat
    handleClinicNav('appointments');
};

window.toggleSpecDropdown = () => {
    const dropdown = document.getElementById('add-dr-spec-dropdown');
    if (dropdown) {
        const isHidden = dropdown.style.display === 'none';
        dropdown.style.display = isHidden ? 'block' : 'none';
        
        // Icon rotation
        const toggle = document.getElementById('add-dr-spec-toggle');
        if (toggle) {
            const icon = toggle.querySelector('i');
            if (icon) icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
};

window.updateSpecLabel = () => {
    const checked = Array.from(document.querySelectorAll('input[name="add-dr-spec-check"]:checked'));
    const label = document.getElementById('add-dr-spec-label');
    if (label) {
        if (checked.length === 0) {
            label.textContent = "Choisir votre spécialité";
            label.style.color = "#94A3B8";
        } else if (checked.length === 1) {
            label.textContent = checked[0].value;
            label.style.color = "#1E293B";
            // Auto close on selection
            setTimeout(() => window.toggleSpecDropdown(), 300);
        } else {
            label.textContent = `${checked.length} spécialités sélectionnées`;
            label.style.color = "#1E293B";
            // Auto close on selection (even multiple)
            setTimeout(() => window.toggleSpecDropdown(), 300);
        }
    }
};

window.tempSchedules = {};

window.validateCurrentSchedule = () => {
    const activeBtns = Array.from(document.querySelectorAll('.day-select-btn.active'));
    if (activeBtns.length === 0) return alert("Veuillez sélectionner au moins un jour (cliquez sur les lettres L, M, M...) avant de valider.");

    const start = document.getElementById('add-dr-start').value;
    const end = document.getElementById('add-dr-end').value;
    const bStart = document.getElementById('add-dr-break-start').value;
    const bEnd = document.getElementById('add-dr-break-end').value;

    const dayNames = {1:'Lundi', 2:'Mardi', 3:'Mercredi', 4:'Jeudi', 5:'Vendredi', 6:'Samedi', 7:'Dimanche'};

    activeBtns.forEach(btn => {
        const day = btn.dataset.day;
        window.tempSchedules[day] = {
            startTime: start,
            endTime: end,
            breakStart: bStart || null,
            breakEnd: bEnd || null
        };
        // Mark as configured
        btn.classList.add('configured');
        btn.classList.remove('active');
        btn.style.background = '#10B981';
        btn.style.color = '#fff';
        btn.style.borderColor = '#059669';
    });

    // Update Summary
    const summary = document.getElementById('schedule-summary');
    const list = document.getElementById('schedule-summary-list');
    summary.style.display = 'block';
    
    // Build summary text
    const sortedDays = Object.keys(window.tempSchedules).sort();
    list.innerHTML = sortedDays.map(d => `
        <div style="font-size:12px; color:#475569; display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding:4px 0;">
            <span style="font-weight:700;">${dayNames[d]}</span>
            <span>${window.tempSchedules[d].startTime} - ${window.tempSchedules[d].endTime} ${window.tempSchedules[d].breakStart ? `(Pause: ${window.tempSchedules[d].breakStart}-${window.tempSchedules[d].breakEnd})` : ''}</span>
        </div>
    `).join('');
};

window.handleSelectSpecialty = (specId) => {
    clinicState.activeSpecialtyId = specId;

    // Auto-générer les créneaux si la journée est vide
    const existing = MOCK_DATA.slots.filter(
        s => s.clinicId === clinicState.selectedClinicId && s.date === clinicState.selectedDate
    );
    if (existing.length === 0) {
        try {
            AppointmentEngine.generateDailySlots(clinicState.selectedClinicId, clinicState.selectedDate);
        } catch(e) { console.error('Auto-gen error:', e); }
    }

    handleClinicNav('appointments');
};

window.handleBackToSpecialties = () => {
    clinicState.activeSpecialtyId = null;
    handleClinicNav('appointments');
};

// =========================================================================
//  EDIT DOCTOR HANDLERS
// =========================================================================
window.editTempSchedules = {};

window.handleOpenEditDoctorModal = (doctorId) => {
    const dr = MOCK_DATA.doctors.find(d => d.id === doctorId);
    if (!dr) return;

    const modal = document.getElementById('cv-edit-dr-modal');
    if (!modal) return;

    // Fill data
    document.getElementById('edit-dr-id').value = dr.id;
    const nameParts = dr.name.split(' ');
    const prefix = nameParts[0].includes('.') ? nameParts[0] : 'Dr.';
    const fullName = nameParts[0].includes('.') ? nameParts.slice(1).join(' ') : dr.name;
    
    document.getElementById('edit-dr-prefix').value = prefix;
    document.getElementById('edit-dr-name').value = fullName;
    document.getElementById('edit-dr-status').value = dr.status;
    document.getElementById('edit-dr-order').value = dr.orderNumber || '';

    // Specialized checks
    const specChecks = document.querySelectorAll('input[name="edit-dr-spec-check"]');
    specChecks.forEach(cb => {
        cb.checked = dr.specialties.includes(cb.value) || 
                     MOCK_DATA.specialties.find(s => s.id === cb.value && dr.specialties.includes(s.id)) ||
                     MOCK_DATA.specialties.find(s => s.name === cb.value && dr.specialties.includes(s.id));
    });

    // Avail (Advanced load)
    window.editTempSchedules = {};
    if (dr.availability && dr.availability.isFlexible && dr.availability.schedules) {
        window.editTempSchedules = JSON.parse(JSON.stringify(dr.availability.schedules));
    }

    // Reset and apply button styles
    const dayBtns = document.querySelectorAll('.edit-day-btn');
    dayBtns.forEach(btn => {
        btn.classList.remove('active', 'configured');
        btn.style.background = '#fff';
        btn.style.color = '#64748B';
        btn.style.borderColor = '#E2E8F0';
        
        const day = btn.dataset.day;
        if (window.editTempSchedules[day]) {
            btn.classList.add('configured');
            btn.style.background = '#10B981';
            btn.style.color = '#fff';
            btn.style.borderColor = '#059669';
        }
    });

    window.updateEditScheduleSummary();

    modal.style.display = 'flex';
    if (window.lucide) lucide.createIcons();
};

window.validateEditSchedule = () => {
    const activeBtns = Array.from(document.querySelectorAll('.edit-day-btn.active'));
    if (activeBtns.length === 0) return alert("Veuillez sélectionner au moins un jour à modifier (cliquez sur les lettres L, M, M...).");

    const start = document.getElementById('edit-dr-start').value;
    const end = document.getElementById('edit-dr-end').value;
    const bStart = document.getElementById('edit-dr-break-start').value;
    const bEnd = document.getElementById('edit-dr-break-end').value;

    activeBtns.forEach(btn => {
        const day = btn.dataset.day;
        window.editTempSchedules[day] = {
            startTime: start,
            endTime: end,
            breakStart: bStart || null,
            breakEnd: bEnd || null
        };
        // Mark as configured
        btn.classList.add('configured');
        btn.classList.remove('active');
        btn.style.background = '#10B981';
        btn.style.color = '#fff';
        btn.style.borderColor = '#059669';
    });

    window.updateEditScheduleSummary();
};

window.updateEditScheduleSummary = () => {
    const summary = document.getElementById('edit-schedule-summary');
    const list = document.getElementById('edit-schedule-summary-list');
    const dayNames = {1:'Lundi', 2:'Mardi', 3:'Mercredi', 4:'Jeudi', 5:'Vendredi', 6:'Samedi', 7:'Dimanche'};
    
    const sortedDays = Object.keys(window.editTempSchedules).sort();
    if (sortedDays.length > 0) {
        summary.style.display = 'block';
        list.innerHTML = sortedDays.map(d => `
            <div style="font-size:12px; color:#475569; display:flex; justify-content:space-between; border-bottom:1px solid #E2E8F0; padding:4px 0;">
                <span style="font-weight:700;">${dayNames[d]}</span>
                <span>${window.editTempSchedules[d].startTime} - ${window.editTempSchedules[d].endTime} ${window.editTempSchedules[d].breakStart ? `(Pause: ${window.editTempSchedules[d].breakStart}-${window.editTempSchedules[d].breakEnd})` : ''}</span>
            </div>
        `).join('');
    } else {
        summary.style.display = 'none';
        list.innerHTML = '';
    }
};

window.handleCloseEditDoctorModal = () => {
    const modal = document.getElementById('cv-edit-dr-modal');
    if (modal) modal.style.display = 'none';
};

window.confirmEditDoctor = () => {
    const id = document.getElementById('edit-dr-id').value;
    const dr = MOCK_DATA.doctors.find(d => d.id === id);
    if (!dr) return;

    const prefix = document.getElementById('edit-dr-prefix').value;
    const name = document.getElementById('edit-dr-name').value;
    const status = document.getElementById('edit-dr-status').value;
    const order = document.getElementById('edit-dr-order').value;

    const checkedSpecs = Array.from(document.querySelectorAll('input[name="edit-dr-spec-check"]:checked')).map(cb => cb.value);
    const specIds = checkedSpecs.map(sName => {
        const s = MOCK_DATA.specialties.find(spec => spec.name === sName);
        return s ? s.id : sName;
    });

    // Update Dr
    dr.name = `${prefix} ${name}`;
    dr.status = status;
    dr.orderNumber = order;
    dr.specialties = specIds;
    dr.role = checkedSpecs[0] || (MOCK_DATA.specialties.find(s => s.id === dr.specialties[0])?.name || dr.role);

    // Update availability
    if (Object.keys(window.editTempSchedules).length > 0) {
        dr.availability = {
            isFlexible: true,
            schedules: JSON.parse(JSON.stringify(window.editTempSchedules))
        };
    }

    window.handleCloseEditDoctorModal();
    handleClinicNav('doctors');
};

window.handleDeleteDoctor = () => {
    const id = document.getElementById('edit-dr-id').value;
    if (!confirm('àŠtes-vous sà»r de vouloir supprimer ce médecin ?')) return;

    const index = MOCK_DATA.doctors.findIndex(d => d.id === id);
    if (index !== -1) {
        MOCK_DATA.doctors.splice(index, 1);
    }

    window.handleCloseEditDoctorModal();
    handleClinicNav('doctors');
};

// =========================================================================
//  TOKEN BILLING HANDLERS
// =========================================================================
window.updateTokenPricePreview = () => {
    const input = document.getElementById('recharge-amount');
    if (!input) return;
    const qty = parseInt(input.value) || 0;
    const pricePerToken = TokenEngine.getTokenPrice(qty);
    const total = qty * pricePerToken;

    document.getElementById('recharge-price-label').textContent = `${pricePerToken} FCFA / token`;
    document.getElementById('recharge-total-preview').textContent = `${total.toLocaleString()} FCFA`;
};

window.handleTokenPurchase = () => {
    const qty = parseInt(document.getElementById('recharge-amount').value);
    if (qty < 10) return alert("Minimum 10 tokens.");

    const tx = TokenEngine.purchaseTokens(clinicState.selectedClinicId, qty);
    
    // Simuler un paiement réussi après 1.5s
    alert(`Simulation de paiement lancée pour ${tx.amount.toLocaleString()} FCFA...`);
    
    setTimeout(() => {
        const success = TokenEngine.confirmPayment(tx.id);
        if (success) {
            alert("Paiement confirmé ! Votre solde a été mis à jour.");
            handleClinicNav('facturation');
        }
    }, 1500);
};

window.handleTokenHistoryExport = () => {
    alert("Export de l'historique tokens généré avec succès !");
};


// =========================================================================
//  SETTINGS HANDLERS
// =========================================================================
window.handleSaveClinicSettings = () => {
    const clinic = MOCK_DATA.clinics.find(c => c.id === clinicState.selectedClinicId);
    if (!clinic) return;

    // Detect operational changes
    const newOpen = document.getElementById('settings-open').value;
    const newClose = document.getElementById('settings-close').value;
    const newDuration = parseInt(document.getElementById('settings-duration').value);

    const hasChanged = (newOpen !== clinic.openingHour || newClose !== clinic.closingHour || newDuration !== clinic.slotDuration);

    clinic.name = document.getElementById('settings-name').value;
    clinic.address = document.getElementById('settings-address').value;
    clinic.phone = document.getElementById('settings-phone').value;
    clinic.email = document.getElementById('settings-email').value;
    clinic.openingHour = newOpen;
    clinic.closingHour = newClose;
    clinic.slotDuration = newDuration;

    alert('Paramètres de la clinique enregistrés avec succès !');

    // Handle schedule regeneration if confirmed
    if (hasChanged) {
        if (confirm(`Les horaires ou la durée de créneau ont changé. Voulez-vous régénérer le planning pour aujourd'hui (${clinicState.selectedDate}) ?\n\nNote : Les rendez-vous déjà réservés seront conservés.`)) {
            // Remove unbooked slots for this clinic and date
            MOCK_DATA.slots = MOCK_DATA.slots.filter(s => 
                !(s.clinicId === clinic.id && s.date === clinicState.selectedDate && s.status === 'AVAILABLE')
            );
            // Regenerate
            try {
                AppointmentEngine.generateDailySlots(clinic.id, clinicState.selectedDate);
            } catch(e) {
                console.error("Erreur lors de la régénération du planning:", e);
            }
        }
    }
    
    // Re-render the whole app to update everything (header, dashboard, etc.)
    if (typeof renderApp === 'function') {
        renderApp();
        // Return to settings view
        handleClinicNav('settings');
    }
};
