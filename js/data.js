/* ==========================================================================
   Vitalia Data Mock & State Layer
   ========================================================================== */

var MOCK_DATA = {
    clinics: [
        { 
            id: 'clinic_1', 
            name: 'Clinique Saint-Jean', 
            phone: '+225 27 22 41 41 41',
            address: 'Boulevard de France, Cocody, Abidjan',
            openingHour: '07:00', 
            closingHour: '23:30', 
            slotDuration: 30,
            email: 'contact@saint-jean.ci',
            tokenWallet: {
                token_balance: 500,
                total_tokens_used: 120,
                total_spent_fcfa: 250000
            }
        }
    ],

    tokenTransactions: [
        { id: 'tx_1', clinicId: 'clinic_1', type: 'purchase', qty: 500, amount: 250000, date: '2026-04-10', status: 'paid' },
        { id: 'tx_2', clinicId: 'clinic_1', type: 'usage', qty: 1, amount: 0, date: '2026-04-14', status: 'confirmed', note: 'RDV Pat_101' }
    ],

    specialties: [
        { id: 'spec_1', clinicId: 'clinic_1', name: 'Médecine Générale', isActive: true, concurrentSlots: 2 },
        { id: 'spec_2', clinicId: 'clinic_1', name: 'Cardiologie', isActive: true, concurrentSlots: 1 },
        { id: 'spec_3', clinicId: 'clinic_1', name: 'Pédiatrie', isActive: true, concurrentSlots: 1 }
    ],

    doctors: [
        { 
            id: 'dr_1', clinicId: 'clinic_1', name: 'Dr. Sophie Martin', role: 'Médecin Généraliste', status: 'active',
            specialties: ['spec_1'], load: 85,
            availability: { days: [1,2,3,4,5], startTime: '07:00', endTime: '19:00', breakStart: '12:00', breakEnd: '13:00' }
        },
        { 
            id: 'dr_2', clinicId: 'clinic_1', name: 'Dr. Jean Dupont', role: 'Cardiologue', status: 'active',
            specialties: ['spec_2'], load: 40,
            availability: { days: [1,2,3,4,5], startTime: '08:00', endTime: '17:00', breakStart: '12:30', breakEnd: '13:30' }
        },
        { 
            id: 'dr_3', clinicId: 'clinic_1', name: 'Dr. Alice Dubois', role: 'Pédiatre', status: 'break',
            specialties: ['spec_3'], load: 60,
            availability: { days: [1,3,5], startTime: '08:00', endTime: '16:00', breakStart: null, breakEnd: null }
        },
        { 
            id: 'dr_4', clinicId: 'clinic_1', name: 'Dr. Marc Leroy', role: 'Dermatologue', status: 'offline',
            specialties: [], load: 0,
            availability: null
        }
    ],

    slots: [], // To be populated by generateDailySlots

    appointments: [], // Record of bookings

    waitingRoom: [
        { id: 'p_1', name: 'Emma Bernard', time: '09:00', status: 'waiting', waitDuration: '15 min', type: 'Sur place' },
        { id: 'p_2', name: 'Thomas Petit', time: '09:30', status: 'waiting', waitDuration: '5 min', type: 'Téléconsultation' },
        { id: 'p_3', name: 'Léa Richard', time: '10:00', status: 'arriving', waitDuration: '-', type: 'Sur place' },
    ],

    patients: [
        {
            id: 'pat_101',
            name: 'Kouamé Serge',
            phone: '07 58 42 12 00',
            age: 52,
            gender: 'M',
            bloodType: 'A+',
            vitaliaScore: 58,
            scoreTrend: 'down',
            alerts: ['Tension élevée (150/95)', 'Risque cardiovasculaire'],
            allergies: ['Pénicilline'],
            antecedents: ['Diabète Type 2', 'Hypertension Artérielle'],
            motif: 'Suivi diabète et contrôle tensionnel',
            chronicConditions: ['Diabète Type 2', 'Hypertension Artérielle'],
            mainDiagnosis: 'Diabète Type 2 non équilibré',
            currentTreatments: ['Metformine 1000mg x2/jr', 'Amlodipine 5mg x1/jr'],
            aiSummary: 'Patient de 52 ans avec un diabète de type 2 et une hypertension. Note une tendance à la hausse de la glycémie à jeun. Risque cardiovasculaire modéré nécessitant un ajustement thérapeutique.',
            timeline: [
                { id: 'ev_1', date: '15 Mars 2026', type: 'Consultation', title: 'Suivi Diabète & Hypertension', summary: 'Glycémie instable, ajustement de la Metformine recommandé.', details: 'Le patient rapporte des épisodes de fatigue. Tension artérielle à 150/95. ECG normal.' },
                { id: 'ev_2', date: '02 Mars 2026', type: 'Lab result', title: 'Bilan Sanguin Complet', summary: 'HbA1c: 7.8% (Cible < 7%), LDL: 1.2g/L.', details: 'Hyperglycémie persistante. Fonction rénale normale (Créatinine: 9mg/L).' }
            ],
            trends: {
                bp: [145, 150, 142, 148, 150],
                weight: [88, 87.5, 87.8, 88.2, 88],
                glucose: [1.45, 1.55, 1.48, 1.62, 1.65],
                heartRate: [72, 75, 70, 78, 76]
            }
        },
        {
            id: 'pat_102',
            name: 'Diallo Mariam',
            phone: '01 02 03 04 05',
            age: 47,
            gender: 'F',
            bloodType: 'O+',
            vitaliaScore: 65,
            scoreTrend: 'stable',
            alerts: ['Diabète non contrôlé'],
            allergies: ['Aspirine'],
            antecedents: ['Diabète Type 1', 'Insuffisance veineuse'],
            motif: 'Renouvellement ordonnance insuline',
            chronicConditions: ['Diabète Type 1'],
            mainDiagnosis: 'Diabète Type 1 stable',
            currentTreatments: ['Insuline Lantus 24UI le soir'],
            aiSummary: 'Patiente de 47 ans suivie pour diabète de type 1. Équilibre glycémique satisfaisant sur les 3 derniers mois.',
            timeline: [
                { id: 'ev_10', date: '10 Fév 2026', type: 'Consultation', title: 'Renouvellement Ordonnance', summary: 'Contrôle trimestriel, pas de complications.', details: 'Examen podologique normal. Pas de signes de rétinopathie.' }
            ],
            trends: {
                bp: [120, 122, 118, 120, 121],
                weight: [65, 64.8, 65.2, 65.1, 65.3],
                glucose: [1.10, 1.15, 1.08, 1.12, 1.14],
                heartRate: [68, 70, 69, 72, 71]
            }
        }
    ],

    medications: [
        { id: 'm1', name: 'Metformine 1000mg', desc: 'Antidiabétique oral', tags: ['Diabète'] },
        { id: 'm2', name: 'Amlodipine 5mg', desc: 'Antihypertenseur', tags: ['Hypertension'] },
        { id: 'm3', name: 'Paracétamol 1g', desc: 'Antalgique', tags: ['Douleur'] }
    ],

    clinicStats: {
        totalPatientsToday: 124,
        avgWaitTime: '12 min',
        teleconsultationPercentage: 35,
        activeDoctors: 8
    },

    prescriptions: [
        {
            id: 'ORD-101',
            patientName: 'Kouamé Serge',
            clinic: 'Clinique Saint-Jean',
            doctor: 'Dr. Sophie Martin',
            image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop&q=60',
            medications: ['Metformine 1000mg', 'Amlodipine 5mg', 'Paracétamol 1g'],
            status: 'EN_ATTENTE_PRISE_EN_CHARGE',
            receivedAt: new Date(Date.now() - 2 * 60000).toISOString(),
            date_reception: new Date().toISOString(),
            insurance: { name: 'SAHAM', coverage: '80%' }
        },
        {
            id: 'ORD-102',
            patientName: 'Diallo Mariam',
            clinic: 'Clinique Saint-Jean',
            doctor: 'Dr. Jean Dupont',
            image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&auto=format&fit=crop&q=60',
            medications: ['Insuline Lantus 24UI'],
            status: 'EN_COURS',
            receivedAt: new Date(Date.now() - 30 * 60000).toISOString(),
            date_reception: new Date().toISOString(),
            insurance: { name: 'ASCOMA', coverage: '100%' }
        },
        {
            id: 'ORD-103',
            patientName: 'Koné Fatou',
            clinic: 'Vitalia Nord',
            doctor: 'Dr. Amon',
            image: 'https://images.unsplash.com/photo-1512418490979-92798ccc1380?w=800&auto=format&fit=crop&q=60',
            medications: ['Amoxicilline 500mg', 'Sirop Toux'],
            status: 'PRET',
            receivedAt: new Date(Date.now() - 120 * 60000).toISOString(),
            date_reception: new Date().toISOString(),
            lastResponse: { type: 'PAYMENT_DONE', value: 'Retrait en pharmacie', mode: 'RETRAIT' }
        }
    ],
    pharmaMessages: [],
    billing: [
        { id: 'TR-1001', date: '2026-04-14', time: '09:15', patient: 'Bernard Emma', amount: 15600 },
        { id: 'TR-1002', date: '2026-04-14', time: '10:30', patient: 'Petit Thomas', amount: 8400 },
        { id: 'TR-1003', date: '2026-04-15', time: '08:45', patient: 'Richard Léa', amount: 22000 }
    ]
};


