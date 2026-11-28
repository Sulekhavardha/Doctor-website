export const PULSE_DATA = {
  brand: "PULSE Multispeciality Hospital",
  shortBrand: "PULSE Hospital",
  tagline: "Care That Moves You Forward.",
  supportingText: "Expert doctors. Advanced technology. Compassionate healthcare.",
  location: "Betiahata, Gorakhpur, Uttar Pradesh 273001, India",
  emergencyPhone: "+91 94558 99378",
  opdHelpline: "+91 94558 99378",
  email: "care@pulsehospital.com",
  opdHours: "Monday – Saturday: 10:00 AM – 8:00 PM",
  emergencyHours: "24/7 Continuous Emergency, Trauma & Cardiac ICU",

  // Lead Clinician & Director
  doctor: {
    name: "Dr. Prakash Chand Shahi",
    title: "Senior Consultant Cardiologist & Interventional Cardiologist",
    regNo: "UP Medical Council Reg. No. 47395",
    shortName: "Dr. P. C. Shahi",
    speciality: "Cardiologist & Interventional Cardiologist",
    experienceYears: "22+",
    experienceText: "22+ Years of Dedicated Clinical Practice",
    location: "Betiahata, Gorakhpur, Uttar Pradesh, India",
    portraitPlaceholder: null,
    qualifications: [
      {
        degree: "MBBS",
        institution: "GSVM Medical College, Kanpur",
        year: "Foundation",
        description: "Undergraduate medical foundation in general surgery and medicine."
      },
      {
        degree: "MD — General Medicine",
        institution: "King George's Medical University (KGMU)",
        year: "2007",
        description: "Advanced post-graduate residency in comprehensive internal medicine at India's foremost medical university."
      },
      {
        degree: "DM — Cardiology",
        institution: "Postgraduate Institute of Medical Education and Research (PGIMER)",
        year: "2013",
        description: "Super-specialty doctorate in Cardiology and hemodynamic intervention from an institute of national importance."
      }
    ],
    areasOfInterest: [
      {
        title: "Interventional Cardiology",
        subtitle: "Catheter-Guided Vascular Therapy",
        description: "Minimally invasive diagnostic and therapeutic catheter-based procedures for complex coronary and peripheral vascular disease.",
        icon: "Activity",
        tags: ["Coronary Angioplasty", "Stent Implantation", "Vascular Patency"]
      },
      {
        title: "Pacemakers",
        subtitle: "Cardiac Rhythm Management",
        description: "Advanced implantation and electrophysiological evaluation of permanent pacemakers and cardiac pacing devices.",
        icon: "Cpu",
        tags: ["Bradycardia Care", "Device Optimization", "Conduction Synchronization"]
      }
    ],
    philosophy: "Precision diagnosis, meticulous interventional execution, and compassionate long-term cardiac preservation for every patient."
  },

  // Comprehensive Heart Care Services (Official Hospital Portfolio)
  comprehensiveServices: [
    {
      id: "interventional-cardiology",
      title: "Interventional Cardiology",
      titleHi: "इंटरवेंशनल कार्डियोलॉजी",
      description: "Angioplasty, stenting and complex PCI performed by expert interventional teams.",
      descriptionHi: "एंजियोप्लास्टी, स्टेंटिंग और कॉम्प्लेक्स पीसीआई एक्सपर्ट इंटरवेंशनल टीम द्वारा।",
      icon: "HeartPulse",
      link: "/treatments",
      badge: "Apex Cath Lab",
      badgeHi: "अपेक्स कैथ लैब",
      highlights: ["Coronary Angioplasty & Stenting", "Complex Radial Access PCI", "Bifurcation Lesion Care"],
      highlightsHi: ["कोरोनरी एंजियोप्लास्टी और स्टेंटिंग", "कलाई से सुरक्षित एंजियोप्लास्टी (PCI)", "जटिल ब्लॉकेज का इलाज"]
    },
    {
      id: "diagnostic-cardiology",
      title: "Diagnostic Cardiology",
      titleHi: "डायग्नोस्टिक कार्डियोलॉजी",
      description: "ECG, Echo, TMT, Holter and advanced non-invasive cardiac diagnostics.",
      descriptionHi: "ईसीजी, इको, टीएमटी, होल्टर और एडवांस्ड नॉन-इनवेसिव कार्डियक डायग्नोस्टिक्स।",
      icon: "Activity",
      link: "/treatments",
      badge: "High Precision",
      badgeHi: "सटीक जांच",
      highlights: ["12-Lead Digital ECG", "2D Color Doppler Echo", "Treadmill Stress Test (TMT)", "24-Hour Holter"],
      highlightsHi: ["12-लीड डिजिटल ईसीजी (ECG)", "2D कलर डॉपलर इको (Echo)", "ट्रेडमिल स्ट्रेस टेस्ट (TMT)", "24-घंटे होल्टर जांच"]
    },
    {
      id: "hdu-general-ward",
      title: "HDU / General Ward",
      titleHi: "एचडीयू / जनरल वार्ड",
      description: "High Dependency Unit and fully equipped general ward care with 24x7 dedicated nursing.",
      descriptionHi: "हाई डिपेंडेंसी यूनिट (एचडीयू) और 24x7 डेडिकेटेड नर्सिंग के साथ पूरी तरह सुसज्जित जनरल वार्ड केयर।",
      icon: "Stethoscope",
      link: "/hospital",
      badge: "24x7 Nursing",
      badgeHi: "24x7 नर्सिंग",
      highlights: ["High Dependency Cardiac Beds", "Central Telemetry Monitoring", "Round-the-clock Resident Care"],
      highlightsHi: ["हाई डिपेंडेंसी कार्डियक बेड्स", "सेंट्रल टेलीमेट्री मॉनिटरिंग", "24x7 डॉक्टर और नर्सिंग देखभाल"]
    },
    {
      id: "electrophysiology",
      title: "Electrophysiology",
      titleHi: "इलेक्ट्रोफिजियोलॉजी",
      description: "Pacemaker implants, ICDs and radiofrequency ablation for arrhythmias.",
      descriptionHi: "पेसमेकर इम्प्लांट्स, आईसीडी और अतालता (एरिथ्मिया) के लिए रेडियोफ्रीक्वेंसी एब्लेशन।",
      icon: "Zap",
      link: "/treatments",
      badge: "Rhythm Care",
      badgeHi: "हार्टबीट केयर",
      highlights: ["Permanent Pacemaker (PPI)", "AICD Implantation", "Cardiac Resynchronization (CRT)"],
      highlightsHi: ["परमानेंट पेसमेकर (PPI)", "एआईसीडी (AICD) इम्प्लांटेशन", "कार्डियक रीसिंक्रोनाइजेशन (CRT)"]
    },
    {
      id: "emergency-services",
      title: "Emergency Services",
      titleHi: "इमरजेंसी सर्विसेज",
      description: "24x7 chest-pain response with door-to-balloon protocols under 60 minutes.",
      descriptionHi: "60 मिनट से कम के डोर-टू-बैलून प्रोटोकॉल के साथ 24x7 सीने में दर्द (चेस्ट पेन) इमरजेंसी रिस्पॉन्स।",
      icon: "ShieldAlert",
      link: "/contact",
      badge: "< 60 Min Protocol",
      badgeHi: "< 60 मिनट प्रोटोकॉल",
      highlights: ["24/7 Acute Chest Pain Triage", "Emergency Primary Angioplasty", "Direct Doctor ICU Access"],
      highlightsHi: ["24/7 सीने में दर्द (चेस्ट पेन) इमरजेंसी", "इमरजेंसी प्राइमरी एंजियोप्लास्टी", "सीधे डॉक्टर और आईसीयू की सुविधा"]
    },
    {
      id: "preventive-cardiology",
      title: "Preventive Cardiology",
      titleHi: "प्रिवेंटिव कार्डियोलॉजी",
      description: "Cardiac wellness, lipid clinic and personalised heart-risk programs.",
      descriptionHi: "कार्डियक वेलनेस, लिपिड क्लिनिक और पर्सनलाइज्ड हार्ट-रिस्क प्रिवेंशन प्रोग्राम्स।",
      icon: "Users",
      link: "/contact",
      badge: "Heart Wellness",
      badgeHi: "हार्ट वेलनेस",
      highlights: ["Lipid & Cholesterol Clinic", "Hypertension Reversal Programs", "Personalized Cardiac Risk Audit"],
      highlightsHi: ["लिपिड और कोलेस्ट्रॉल क्लिनिक", "ब्लड प्रेशर नियंत्रण प्रोग्राम", "व्यक्तिगत हार्ट-रिस्क जांच"]
    }
  ],

  clinic: {
    name: "PULSE Multispeciality Hospital & Heart Centre",
    address: "Betiahata, Gorakhpur, Uttar Pradesh, India",
    landmark: "Prime Medical District, Betiahata",
    hours: "Monday – Saturday: 08:30 AM – 08:30 PM",
    sunday: "Sunday: Emergency & Inpatient Services Open 24/7",
    locationDetails: {
      city: "Gorakhpur",
      district: "Gorakhpur",
      state: "Uttar Pradesh",
      country: "India"
    }
  },

  // Section 02: Hospital At A Glance
  stats: [
    {
      value: "22+",
      label: "Years of Healthcare Excellence",
      detail: "Unbroken clinical commitment to eastern Uttar Pradesh since 2002",
      icon: "Award"
    },
    {
      value: "35+",
      label: "Medical Specialists",
      detail: "Super-specialist clinicians trained at PGIMER, AIIMS, and KGMU",
      icon: "Users"
    },
    {
      value: "10+",
      label: "Medical Departments",
      detail: "Comprehensive tertiary super-specialities under one medical roof",
      icon: "Layers"
    },
    {
      value: "24/7",
      label: "Advanced Facilities",
      detail: "Flat-Panel Cath Lab, 3T Silent MRI, 128-Slice CT, Level-3 ICU",
      icon: "Activity"
    }
  ],

  // Section 08: Patient Journey (5 Steps)
  patientJourney: [
    {
      step: "01",
      title: "Book Appointment",
      titleHi: "अपॉइंटमेंट बुक करें",
      subtitle: "Instant Digital & OPD Access",
      description: "Book your OPD visit online or by phone. Pick a convenient time slot with zero long queues.",
      descriptionHi: "ऑनलाइन या फोन पर आसानी से अपना ओपीडी अपॉइंटमेंट बुक करें और बिना लंबी कतार के समय पर मिलें।"
    },
    {
      step: "02",
      title: "Doctor Consultation",
      titleHi: "डॉक्टर से परामर्श",
      subtitle: "Thorough Clinical Evaluation",
      description: "Meet Dr. Shahi for a calm, clear discussion. We carefully check your past reports, symptoms, and overall heart health.",
      descriptionHi: "डॉ. शाही से शांत और साफ बातचीत करें। हम आपकी पुरानी रिपोर्ट्स, लक्षण और दिल की सेहत को ध्यान से जांचते हैं।"
    },
    {
      step: "03",
      title: "Diagnosis & Tests",
      titleHi: "दिल की जांच और टेस्ट",
      subtitle: "Accurate Heart Investigations",
      description: "Get Digital ECG, 2D Color Echo, TMT, or Angiography done cleanly with same-day reports and CDs.",
      descriptionHi: "डिजिटल ईसीजी, 2डी कलर इको, टीएमटी या एंजियोग्राफी की जांच सेम-डे रिपोर्ट और सीडी के साथ कराएं।"
    },
    {
      step: "04",
      title: "Personalized Treatment",
      titleHi: "सही और व्यक्तिगत इलाज",
      subtitle: "Honest & Safe Heart Care",
      description: "From safe heart stenting through the wrist and pacemakers to tailored medicines, you get only the care you truly need.",
      descriptionHi: "कलाई के रास्ते सुरक्षित हार्ट स्टेंटिंग और पेसमेकर से लेकर सही दवाइयों तक, आपको सिर्फ वही इलाज मिलता है जिसकी सच में ज़रूरत है।"
    },
    {
      step: "05",
      title: "Recovery & Follow-up",
      titleHi: "रिकवरी और फॉलो-अप",
      subtitle: "Ongoing Heart Health",
      description: "Clear medicine guidance, diet tips, and regular follow-up checkups keep your heart strong and healthy.",
      descriptionHi: "सही दवाई मार्गदर्शन, खान-पान की सलाह और नियमित फॉलो-अप जांच से आपका दिल लंबे समय तक स्वस्थ रहता है।"
    }
  ],

  // Section 10: Hospital Tour & Architectural Facilities
  hospitalTour: [
    {
      id: "tour-1",
      title: "Grand Architectural Atrium & Reception",
      category: "Patient Welcome & Triage",
      description: "Designed with generous natural light, acoustic dampening, and streamlined digital registration kiosks for zero-wait patient admission.",
      image: "/images/reception.webp",
      featured: true
    },
    {
      id: "tour-2",
      title: "Siemens Artis Zee Flat-Panel Digital Cath Lab",
      category: "Vascular Interventions",
      description: "State-of-the-art sterile catheterization theater with Dr. Prakash Chand Shahi performing radial angioplasty and real-time hemodynamic monitoring.",
      image: "/images/doctor-cathlab-procedure.jpg",
      featured: false
    },
    {
      id: "tour-3",
      title: "Executive Outpatient Consultation Suites",
      category: "Clinical Consultations",
      description: "Calm, private consultation rooms where Dr. Shahi personally explains ECG and heart scan reports with families.",
      image: "/images/M.png",
      featured: false
    },
    {
      id: "tour-4",
      title: "Class-100 Laminar Flow Modular OT & Pacing Suite",
      category: "Surgical Care",
      description: "Ultra-clean cardiac & pacing theatres with positive-pressure HEPA filtration and continuous hemodynamic telemetry.",
      image: "/images/cardiac-icu-room.jpg",
      featured: false
    },
    {
      id: "tour-5",
      title: "Post-Procedure Cardiac Recovery & ICU Rounds",
      category: "Bedside Recovery",
      description: "Daily bedside follow-up rounds by Dr. Shahi ensuring rapid ambulation and safe recovery after stenting.",
      image: "/images/cardiac-recovery-icu-suite.jpg",
      featured: false
    }
  ],
};
