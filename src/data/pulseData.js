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
      highlights: ["Coronary Angioplasty & Stenting", "Complex Radial Access PCI", "Bifurcation Lesion Care"]
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
      highlights: ["12-Lead Digital ECG", "2D Color Doppler Echo", "Treadmill Stress Test (TMT)", "24-Hour Holter"]
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
      highlights: ["High Dependency Cardiac Beds", "Central Telemetry Monitoring", "Round-the-clock Resident Care"]
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
      highlights: ["Permanent Pacemaker (PPI)", "AICD Implantation", "Cardiac Resynchronization (CRT)"]
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
      highlights: ["24/7 Acute Chest Pain Triage", "Emergency Primary Angioplasty", "Direct Doctor ICU Access"]
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
      highlights: ["Lipid & Cholesterol Clinic", "Hypertension Reversal Programs", "Personalized Cardiac Risk Audit"]
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

  // Section 03: Explore Specialities (10 Proposed Departments)
  departments: [
    {
      id: "cardiology",
      slug: "cardiology",
      name: "Cardiology & Vascular Sciences",
      shortName: "Cardiology",
      organ: "Heart",
      leadDoctor: "Dr. Prakash Chand Shahi",
      leadDegree: "DM Cardiology (PGIMER), MD (KGMU)",
      accentColor: "#2788B8", // Medical Blue
      accentBg: "bg-emerald-50 text-[#2788B8] border-emerald-200",
      pillColor: "border-[#2788B8] text-[#2788B8]",
      tagline: "Comprehensive catheter-guided cardiac intervention and rhythm restoration.",
      description: "PULSE Cardiology & Vascular Centre is eastern UP's apex centre for radial-access coronary interventions, complex bifurcation stenting, and permanent cardiac pacemakers.",
      image: "/images/cath-lab.jpg",
      icon: "HeartPulse",
      keyProcedures: [
        "Transradial Coronary Angioplasty",
        "Coronary Angiogram (CAG)",
        "CT Coronary Angiography (128-Slice)",
        "Permanent Pacemaker Implantation (PPI)",
        "Peripheral Vascular Stenting",
        "Echocardiography & Doppler Studies"
      ],
      features: [
        "Flat-panel Siemens Digital Cath Lab with ultra-low radiation",
        "Over 12,000 successful transradial cardiac interventions",
        "24/7 acute STEMI Code-Blue response team"
      ],
      stats: { primary: "99.4%", primaryLabel: "Radial Success Rate", secondary: "< 45 min", secondaryLabel: "Door-to-Balloon Time" }
    },
    {
      id: "neurology",
      slug: "neurology",
      name: "Neurology & Spine Surgery",
      shortName: "Neurology",
      organ: "Brain",
      leadDoctor: "Dr. Ananya Sharma",
      leadDegree: "MCh Neurosurgery (AIIMS New Delhi)",
      accentColor: "#AFA0E9", // Lavender
      accentBg: "bg-purple-50 text-[#7C3AED] border-purple-200",
      pillColor: "border-[#AFA0E9] text-[#7C3AED]",
      tagline: "Microscopic neurosurgery, hyperacute stroke management, and spinal precision.",
      description: "From hyperacute ischemic stroke thrombolysis within the golden hour to microscopic cranial tumour resection and endoscopic spinal disc decompressive surgeries.",
      image: "/images/neurology-brain-synapse.jpg",
      icon: "Brain",
      keyProcedures: [
        "Endoscopic Spine Discectomy",
        "Microvascular Cranial Surgery",
        "Hyperacute Stroke Thrombolysis",
        "Epilepsy & Neuropathy Diagnostics",
        "Deep Brain Stimulation Evaluation",
        "Stereotactic Neuro-Navigation"
      ],
      features: [
        "Dedicated Neuro-Intensive Care Unit (Neuro-ICU)",
        "Karl Storz 4K Ultra-HD Neuro-Endoscopy Suite",
        "Rapid stroke protocol with instant 3T MRI diffusion imaging"
      ],
      stats: { primary: "100%", primaryLabel: "AIIMS-Trained Faculty", secondary: "< 30 min", secondaryLabel: "Stroke Door-to-Needle" }
    },
    {
      id: "orthopaedics",
      slug: "orthopaedics",
      name: "Orthopaedics & Joint Replacement",
      shortName: "Orthopaedics",
      organ: "Bones",
      leadDoctor: "Dr. Vikramaditya Rathore",
      leadDegree: "MS Ortho, MCh Ortho (UK)",
      accentColor: "#65BCA6", // Mint
      accentBg: "bg-[#F0FDF4] text-[#0D9488] border-[#A7F3D0]",
      pillColor: "border-[#65BCA6] text-[#0D9488]",
      tagline: "Robotic sub-millimeter joint reconstruction and sports arthroscopy.",
      description: "Pioneering computer-navigated total knee and hip arthroplasty, complex trauma reconstruction, and minimally invasive sports ligament repair for rapid mobility.",
      image: "/images/pu.png",
      icon: "Bone",
      keyProcedures: [
        "Robotic Total Knee Replacement",
        "Anterior Minimally Invasive Hip Arthroplasty",
        "Arthroscopic ACL / Meniscal Repair",
        "Complex Pelvic & Acetabular Trauma",
        "Deformity Correction & Ilizarov",
        "Geriatric Fragility Fracture Program"
      ],
      features: [
        "Laminar Airflow Class-100 Modular Ortho Operating Theatres",
        "Sub-millimeter robotic precision cutting guides",
        "Fast-track recovery program with same-day assisted ambulation"
      ],
      stats: { primary: "99.2%", primaryLabel: "Prosthesis Longevity", secondary: "24 hrs", secondaryLabel: "Post-op First Step" }
    },
    {
      id: "oncology",
      slug: "oncology",
      name: "Medical & Surgical Oncology",
      shortName: "Oncology",
      organ: "Cells & Tumors",
      leadDoctor: "Dr. Rajeshwar Sen",
      leadDegree: "MCh Surgical Oncology (Tata Memorial Centre)",
      accentColor: "#059669",
      accentBg: "bg-emerald-50 text-[#064E3B] border-emerald-200",
      pillColor: "border-emerald-300 text-[#064E3B]",
      tagline: "Multidisciplinary tumour board, targeted chemotherapy, and organ-preserving oncology.",
      description: "Dedicated to comprehensive cancer care through organ-preserving surgical resections, targeted immunotherapy, clinical medical oncology, and supportive survivorship.",
      image: "/images/coronary-artery-perfusion.jpg",
      icon: "ShieldAlert",
      keyProcedures: [
        "Organ-Preserving Breast Surgery (BCS)",
        "Gastrointestinal & Hepato-Pancreato-Biliary Surgery",
        "Head & Neck Microvascular Reconstruction",
        "Targeted Molecular Chemotherapy",
        "Immunotherapy Infusions",
        "Multidisciplinary Tumour Board Consult"
      ],
      features: [
        "Daycare Chemotherapy Infusion Centre with HEPA filtration",
        "Tumour Board collaborative review for every complex case",
        "Compassionate palliative and survivorship support"
      ],
      stats: { primary: "100%", primaryLabel: "Tumour Board Reviews", secondary: "5,000+", secondaryLabel: "Successful Surgeries" }
    },
    {
      id: "gastroenterology",
      slug: "gastroenterology",
      name: "Gastroenterology & Hepatology",
      shortName: "Gastroenterology",
      organ: "Stomach",
      leadDoctor: "Dr. Sunita Kulkarni",
      leadDegree: "DM Gastroenterology (KEM Mumbai)",
      accentColor: "#EBCB91", // Mint
      accentBg: "bg-amber-50 text-[#D97706] border-amber-200",
      pillColor: "border-[#EBCB91] text-[#D97706]",
      tagline: "Advanced therapeutic endoscopy, pancreatic care, and comprehensive liver health.",
      description: "High-definition endoscopic retrograde cholangiopancreatography (ERCP), endoscopic ultrasound (EUS), and clinical management of hepatitis, cirrhosis, and gastrointestinal bleeding.",
      image: "/images/advanced-mri-scanner.jpg",
      icon: "Apple",
      keyProcedures: [
        "Diagnostic & Therapeutic Upper GI Endoscopy",
        "Colonoscopy with Polypectomy",
        "ERCP for Biliary & Pancreatic Ducts",
        "Endoscopic Ultrasound (EUS)",
        "Chronic Liver Disease Management",
        "Emergency Bleeding EVL Banding"
      ],
      features: [
        "Olympus EVIS X1 Endoscopy System with Narrow Band Imaging",
        "24/7 acute GI bleed intervention protocol",
        "Dedicated liver health and metabolic screening clinic"
      ],
      stats: { primary: "15,000+", primaryLabel: "Endoscopies Done", secondary: "24/7", secondaryLabel: "Emergency GI Bleed Care" }
    },
    {
      id: "urology",
      slug: "urology",
      name: "Urology & Kidney Transplant",
      shortName: "Urology",
      organ: "Kidney & Bladder",
      leadDoctor: "Dr. Alok Verma",
      leadDegree: "MCh Urology (SGPGI Lucknow)",
      accentColor: "#2788B8", // Medical Blue
      accentBg: "bg-emerald-50 text-[#2788B8] border-emerald-200",
      pillColor: "border-[#2788B8] text-[#2788B8]",
      tagline: "Laser stone fragmentation, prostate holmium enucleation, and uro-oncology.",
      description: "Pioneering incision-less laser lithotripsy (RIRS), Holmium laser enucleation of prostate (HoLEP), laparoscopic uro-oncology, and renal transplantation support.",
      image: "/images/pu.png",
      icon: "Activity",
      keyProcedures: [
        "RIRS (Retrograde Intrarenal Surgery with Laser)",
        "PCNL for Large Renal Calculi",
        "HoLEP / Bipolar TURP for Prostate Enlargement",
        "Laparoscopic Nephrectomy & Pyeloplasty",
        "Male Infertility & Andrology Care",
        "Dialysis Vascular Access Creation (AV Fistula)"
      ],
      features: [
        "100W Holmium Laser system with dusting capabilities",
        "Flexible high-definition digital ureteroscopy",
        "Dedicated 16-bed Hemodialysis wing"
      ],
      stats: { primary: "98.8%", primaryLabel: "Stone Clearance Rate", secondary: "Daycare", secondaryLabel: "RIRS Discharge" }
    },
    {
      id: "pulmonology",
      slug: "pulmonology",
      name: "Pulmonology & Critical Care",
      shortName: "Pulmonology",
      organ: "Lungs",
      leadDoctor: "Dr. Tarun Chopra",
      leadDegree: "MD Pulmonary Medicine (VMMC New Delhi)",
      accentColor: "#A9D8E9", // Ice Blue
      accentBg: "bg-cyan-50 text-[#059669] border-cyan-200",
      pillColor: "border-[#A9D8E9] text-[#059669]",
      tagline: "Advanced interventional bronchoscopy, sleep medicine, and acute respiratory ICU.",
      description: "Dedicated respiratory department handling severe COPD, interstitial lung diseases (ILD), asthma, complex pleural effusions, and advanced sleep apnea diagnostics.",
      image: "/images/cath-lab.jpg",
      icon: "Wind",
      keyProcedures: [
        "Diagnostic & Therapeutic Video Bronchoscopy",
        "Endobronchial Ultrasound (EBUS-TBNA)",
        "Pleural Fluid Drainage & Thoracoscopy",
        "Comprehensive Sleep Apnea Polysomnography",
        "Pulmonary Function Testing (PFT & DLCO)",
        "Advanced Mechanical Ventilation Care"
      ],
      features: [
        "Dedicated 12-Bed Respiratory Intensive Care Unit (RICU)",
        "State-of-the-art Jaeger Body Plethysmography lab",
        "Post-infection and chronic cough rehabilitation program"
      ],
      stats: { primary: "24/7", primaryLabel: "Intensivist-Led RICU", secondary: "99.1%", secondaryLabel: "Ventilator Weaning Rate" }
    },
    {
      id: "gynaecology",
      slug: "gynaecology",
      name: "Gynaecology, Obstetrics & Fetal Medicine",
      shortName: "Gynaecology & Obstetrics",
      organ: "Reproductive & Fetal",
      leadDoctor: "Dr. Meera Nambiar",
      leadDegree: "MD, MRCOG (London, UK)",
      accentColor: "#059669",
      accentBg: "bg-emerald-50 text-[#064E3B] border-emerald-200",
      pillColor: "border-emerald-300 text-[#064E3B]",
      tagline: "High-risk pregnancy management, painless childbirth, and laparoscopic gynaecology.",
      description: "Comprehensive women's healthcare providing advanced fetal medicine 3D/4D ultrasound, natural birth suites, laparoscopic uterine-sparing surgeries, and menopausal health.",
      image: "/images/hospital-ward-suites.jpg",
      icon: "Heart",
      keyProcedures: [
        "High-Risk Pregnancy & Maternal Critical Care",
        "Painless Normal Delivery (LDR Suites)",
        "Advanced Fetal Medicine Targeted Scans",
        "Total Laparoscopic Hysterectomy (TLH)",
        "Fertility Workup & Hysteroscopic Surgeries",
        "Adolescent & Menopausal Wellness Clinics"
      ],
      features: [
        "Modern LDR (Labour, Delivery, Recovery) single-room suites",
        "Direct link to Level-3 Neonatal ICU (NICU)",
        "Voluson E10 4D Fetal Ultrasound scanner"
      ],
      stats: { primary: "8,500+", primaryLabel: "Safe Deliveries", secondary: "24/7", secondaryLabel: "Obstetric Anaesthesia" }
    },
    {
      id: "paediatrics",
      slug: "paediatrics",
      name: "Paediatrics & Neonatology",
      shortName: "Paediatrics",
      organ: "Infant & Child",
      leadDoctor: "Dr. Rohini Deshmukh",
      leadDegree: "MD Paediatrics, Fellowship Neonatology (CMC Vellore)",
      accentColor: "#65BCA6", // Mint
      accentBg: "bg-[#F0FDF4] text-[#0D9488] border-[#A7F3D0]",
      pillColor: "border-[#65BCA6] text-[#0D9488]",
      tagline: "Level-3 NICU care, child development, and comprehensive pediatric emergencies.",
      description: "Specialized pediatric and neonatal care for premature neonates, congenital anomalies, pediatric infectious illnesses, asthma, and developmental milestones monitoring.",
      image: "/images/pu.png",
      icon: "Baby",
      keyProcedures: [
        "Level-3 Neonatal Intensive Care (NICU)",
        "Pediatric Intensive Care Unit (PICU)",
        "Childhood Immunization & Growth Tracking",
        "Pediatric Allergy & Asthma Care",
        "Neonatal Phototherapy & Exchange Transfusion",
        "Developmental Milestone & Nutrition Clinic"
      ],
      features: [
        "Dräger Babylog advanced neonatal ventilators",
        "Dedicated transport incubator for emergency neonatal retrieval",
        "Child-friendly healing environment designed to reduce anxiety"
      ],
      stats: { primary: "99.0%", primaryLabel: "NICU Survival Rate", secondary: "24/7", secondaryLabel: "In-House Neonatologist" }
    },
    {
      id: "general-medicine",
      slug: "general-medicine",
      name: "General Internal Medicine & Diabetology",
      shortName: "General Medicine",
      organ: "Systemic Health",
      leadDoctor: "Dr. Harish Chandra Mishra",
      leadDegree: "MD Medicine (KGMU Lucknow)",
      accentColor: "#173C59", // Deep Navy
      accentBg: "bg-slate-50 text-[#173C59] border-slate-200",
      pillColor: "border-[#173C59] text-[#173C59]",
      tagline: "Comprehensive diagnostic medicine, multi-morbidity care, and lifestyle reversal.",
      description: "The clinical backbone of PULSE Hospital, addressing complex multi-system disorders, diabetes mellitus, refractory hypertension, infectious diseases, and executive wellness.",
      image: "/images/operation-theatre-laminar.jpg",
      icon: "Stethoscope",
      keyProcedures: [
        "Comprehensive Diabetes & Metabolic Profiling",
        "Adult Infectious Disease Care (Dengue, Typhoid, Malaria)",
        "Refractory Hypertension Management",
        "Geriatric Polypharmacy & Multi-Organ Optimization",
        "Autoimmune & Rheumatology Screening",
        "Executive Preventive Health Assessments"
      ],
      features: [
        "Integrated multi-specialist consultative diagnostic approach",
        "Fully automated clinical pathology and biochemistry lab",
        "Personalized lifestyle and glycemic control tracking"
      ],
      stats: { primary: "30+ Yrs", primaryLabel: "Cumulative Faculty Wisdom", secondary: "20,000+", secondaryLabel: "Patients Treated" }
    }
  ],

  // Section 04: Interactive Human Anatomy Model Hotspots
  anatomyHotspots: [
    {
      id: "heart",
      name: "Heart & Vascular System",
      organ: "Heart",
      department: "Cardiology & Vascular Sciences",
      slug: "cardiology",
      leadDoctor: "Dr. Prakash Chand Shahi",
      shortDesc: "Pumping 100,000 times daily. We specialize in radial-access stenting, angiograms, and cardiac pacing.",
      keyCondition: "Coronary Artery Disease, Myocardial Infarction, Arrhythmias",
      accent: "#2788B8",
      modelPosition: { x: 50, y: 38 },
      tag: "Apex Center"
    },
    {
      id: "brain",
      name: "Brain & Nervous System",
      organ: "Brain",
      department: "Neurology & Spine Surgery",
      slug: "neurology",
      leadDoctor: "Dr. Ananya Sharma",
      shortDesc: "Center of cognition, movement, and life. Advanced stroke thrombolysis and microscopic neurosurgery.",
      keyCondition: "Acute Ischemic Stroke, Brain Tumors, Disc Herniation",
      accent: "#AFA0E9",
      modelPosition: { x: 50, y: 15 },
      tag: "Stroke Protocol"
    },
    {
      id: "lungs",
      name: "Lungs & Respiratory Tree",
      organ: "Lungs",
      department: "Pulmonology & Critical Care",
      slug: "pulmonology",
      leadDoctor: "Dr. Tarun Chopra",
      shortDesc: "Delivering oxygen to every vital cell. Video bronchoscopy, sleep studies, and critical ventilation.",
      keyCondition: "COPD, Asthma, Severe Pneumonia, Sleep Apnea",
      accent: "#A9D8E9",
      modelPosition: { x: 42, y: 34 },
      tag: "RICU Wing"
    },
    {
      id: "stomach",
      name: "Digestive System & Liver",
      organ: "Stomach",
      department: "Gastroenterology & Hepatology",
      slug: "gastroenterology",
      leadDoctor: "Dr. Sunita Kulkarni",
      shortDesc: "Metabolic powerhouse. High-definition endoscopy, ERCP, liver care, and gastrointestinal therapeutics.",
      keyCondition: "Liver Cirrhosis, GI Bleeding, Gallbladder & Pancreatic Disorders",
      accent: "#EBCB91",
      modelPosition: { x: 54, y: 52 },
      tag: "Advanced Endoscopy"
    },
    {
      id: "bones",
      name: "Skeletal Framework & Joints",
      organ: "Bones",
      department: "Orthopaedics & Joint Replacement",
      slug: "orthopaedics",
      leadDoctor: "Dr. Vikramaditya Rathore",
      shortDesc: "Preserving human locomotion. Robotic total knee/hip arthroplasty, complex trauma, and sports arthroscopy.",
      keyCondition: "Severe Osteoarthritis, ACL Tears, Complex Fractures",
      accent: "#65BCA6",
      modelPosition: { x: 50, y: 72 },
      tag: "Robotic Precision"
    }
  ],

  // Section 05: Meet Our Specialists
  doctors: [
    {
      id: "dr-prakash-chand-shahi",
      slug: "dr-prakash-chand-shahi",
      name: "Dr. Prakash Chand Shahi",
      shortName: "Dr. P. C. Shahi",
      title: "Director & Chief Interventional Cardiologist",
      department: "Cardiology & Vascular Sciences",
      departmentSlug: "cardiology",
      qualifications: "DM Cardiology (PGIMER Chandigarh), MD General Medicine (KGMU Lucknow), MBBS (GSVM Kanpur)",
      regNo: "UP Medical Council Reg. No. 47395",
      experience: "22+ Years",
      languages: "English, Hindi",
      consultationHours: "Mon – Sat: 10:00 AM – 8:00 PM",
      opdRoom: "Suite 101, Executive Cardiology Wing",
      image: "/images/d1.jpeg",
      bio: "Trained at India's top medical institutes — PGIMER Chandigarh, KGMU Lucknow, and GSVM Kanpur — Dr. Prakash Chand Shahi is a pioneer of painless heart care through the wrist in eastern Uttar Pradesh. With over 22 years of experience, he is trusted for honest advice, safe treatment, and caring family consultations.",
      achievements: [
        "Pioneered transradial coronary catheterization in Gorakhpur",
        "DM Cardiology from PGIMER Chandigarh (2013)",
        "MD General Medicine from KGMU Lucknow (2007)",
        "Fellow of the Cardiological Society of India (FCSI)",
        "Over 12,000 successful coronary and peripheral angioplasties"
      ],
      specialties: [
        "Wrist-First Transradial Angioplasty & Stenting",
        "Primary PCI in Acute Myocardial Infarction",
        "Permanent Pacemaker & ICD Implantation",
        "Complex Coronary Bifurcation Interventions",
        "Angiogram CD Second Opinions"
      ]
    },
    {
      id: "dr-ananya-sharma",
      slug: "dr-ananya-sharma",
      name: "Dr. Ananya Sharma",
      shortName: "Dr. A. Sharma",
      title: "Chief Neurosurgeon & Minimally Invasive Spine Surgeon",
      department: "Neurology & Spine Surgery",
      departmentSlug: "neurology",
      qualifications: "MCh Neurosurgery (AIIMS New Delhi), MS General Surgery, MBBS",
      experience: "18+ Years",
      languages: "English, Hindi",
      consultationHours: "Mon – Sat: 10:30 AM – 03:00 PM",
      opdRoom: "Suite 104, Neuro-Spine Pavilion",
      image: "/images/cardiac-icu-telemetry.jpg",
      bio: "Dr. Ananya Sharma brings over 18 years of high-volume neurosurgical mastery, specializing in microvascular cranial surgeries, endoscopic spinal disc decompressions, and hyperacute stroke interventions. She completed her super-specialty MCh at the prestigious AIIMS New Delhi.",
      achievements: [
        "MCh Neurosurgery from AIIMS New Delhi",
        "Over 4,500 successful cranial and spine procedures",
        "Published 24+ peer-reviewed papers on microvascular brain surgery",
        "Member of Neurological Society of India (NSI)"
      ],
      specialties: [
        "Endoscopic Spinal Decompression",
        "Brain Tumour Micro-Resection",
        "Hyperacute Ischemic Stroke Interventions",
        "Trigeminal Neuralgia Microvascular Decompression"
      ]
    },
    {
      id: "dr-vikramaditya-rathore",
      slug: "dr-vikramaditya-rathore",
      name: "Dr. Vikramaditya Rathore",
      shortName: "Dr. V. Rathore",
      title: "Chief Orthopaedic & Robotic Joint Replacement Surgeon",
      department: "Orthopaedics & Joint Replacement",
      departmentSlug: "orthopaedics",
      qualifications: "MCh Ortho (UK), MS Orthopaedics, MBBS",
      experience: "20+ Years",
      languages: "English, Hindi",
      consultationHours: "Mon – Sat: 11:00 AM – 04:00 PM",
      opdRoom: "Suite 201, Joint Reconstruction Wing",
      image: "/images/pu.png",
      bio: "Dr. Vikramaditya Rathore is a renowned authority on robotic-assisted knee and hip arthroplasty with surgical fellowships in the United Kingdom. He focuses on sub-millimeter prosthetic alignment, tissue preservation, and fast-track rehabilitation allowing patients to walk within 24 hours.",
      achievements: [
        "MCh Orthopaedics from Dundee, United Kingdom",
        "Over 6,000 successful primary and revision joint replacements",
        "Gold Medalist in MS Orthopaedics",
        "Faculty trainer for robotic arthroplasty navigation"
      ],
      specialties: [
        "Robotic Total Knee Replacement",
        "Tissue-Sparing Total Hip Arthroplasty",
        "Sports Ligament Reconstruction (ACL/PCL)",
        "Complex Revision Joint Surgeries"
      ]
    },
    {
      id: "dr-meera-nambiar",
      slug: "dr-meera-nambiar",
      name: "Dr. Meera Nambiar",
      shortName: "Dr. M. Nambiar",
      title: "Senior Consultant Obstetrician, Gynaecologist & Fetal Medicine Specialist",
      department: "Gynaecology, Obstetrics & Fetal Medicine",
      departmentSlug: "gynaecology",
      qualifications: "MRCOG (London, UK), MD Obstetrics & Gynaecology, MBBS",
      experience: "16+ Years",
      languages: "English, Hindi, Malayalam",
      consultationHours: "Mon – Sat: 09:30 AM – 01:30 PM & 04:30 PM – 07:30 PM",
      opdRoom: "Suite 205, Mother & Child Centre",
      image: "/images/pu.png",
      bio: "With dual British and Indian board qualifications (MRCOG London & MD), Dr. Meera Nambiar leads the Mother & Child Centre at PULSE. She is widely respected for managing high-risk pregnancies, performing laparoscopic gynecological surgeries, and guiding parents through advanced 3D fetal echocardiography.",
      achievements: [
        "Member of the Royal College of Obstetricians and Gynaecologists (MRCOG UK)",
        "Over 8,500 healthy deliveries guided",
        "Pioneer in natural birthing suites and painless epidural delivery in the region"
      ],
      specialties: [
        "High-Risk Obstetric Management",
        "Fetal Medicine & Advanced Targeted Scans",
        "Total Laparoscopic Hysterectomy (TLH)",
        "Painless Natural Childbirth"
      ]
    },
    {
      id: "dr-rajeshwar-sen",
      slug: "dr-rajeshwar-sen",
      name: "Dr. Rajeshwar Sen",
      shortName: "Dr. R. Sen",
      title: "Director of Surgical Oncology & Multidisciplinary Cancer Care",
      department: "Medical & Surgical Oncology",
      departmentSlug: "oncology",
      qualifications: "MCh Surgical Oncology (Tata Memorial Centre), MS, MBBS",
      experience: "21+ Years",
      languages: "English, Hindi, Bengali",
      consultationHours: "Mon – Fri: 11:00 AM – 03:30 PM",
      opdRoom: "Suite 301, Cancer Care Pavilion",
      image: "/images/cath-lab.jpg",
      bio: "Trained at the premier Tata Memorial Centre in Mumbai, Dr. Rajeshwar Sen brings supreme surgical expertise in organ-preserving oncological resections, gastrointestinal cancer surgeries, and personalized multidisciplinary cancer treatments.",
      achievements: [
        "MCh Surgical Oncology from Tata Memorial Centre Mumbai",
        "Over 5,000 major cancer resections",
        "Co-chair of the Regional Cancer Consensus Board"
      ],
      specialties: [
        "Breast Conservation Surgery (BCS)",
        "Head & Neck Onco-Surgery with Reconstruction",
        "Gastrointestinal & Hepato-Biliary Cancer Surgeries",
        "Multidisciplinary Tumour Board Consultations"
      ]
    },
    {
      id: "dr-tarun-chopra",
      slug: "dr-tarun-chopra",
      name: "Dr. Tarun Chopra",
      shortName: "Dr. T. Chopra",
      title: "Chief Pulmonologist & Critical Care Specialist",
      department: "Pulmonology & Critical Care",
      departmentSlug: "pulmonology",
      qualifications: "MD Pulmonary Medicine (VMMC New Delhi), FCCP (USA), MBBS",
      experience: "14+ Years",
      languages: "English, Hindi, Punjabi",
      consultationHours: "Mon – Sat: 10:00 AM – 02:00 PM",
      opdRoom: "Suite 108, Respiratory Care Wing",
      image: "/images/pacemaker-tech.jpg",
      bio: "Dr. Tarun Chopra oversees PULSE's Respiratory Intensive Care Unit, specializing in interventional video bronchoscopy, lung biopsies, sleep-disordered breathing, and advanced respiratory therapy for acute ARDS and chronic COPD.",
      achievements: [
        "Fellow of the American College of Chest Physicians (FCCP)",
        "MD Pulmonary Medicine from VMMC & Safdarjung Hospital Delhi",
        "Pioneered video bronchoscopy services at PULSE"
      ],
      specialties: [
        "Interventional Video Bronchoscopy & EBUS",
        "Acute Respiratory Distress Syndrome (ARDS) Management",
        "Sleep Apnea Diagnosis & CPAP Titration",
        "Severe Asthma & ILD Management"
      ]
    }
  ],

  // Section 06: Centres of Excellence
  centresOfExcellence: [
    {
      id: "heart-vascular",
      name: "Heart & Vascular Centre of Excellence",
      subtitle: "Apex Interventional & Hemodynamic Precision",
      description: "Equipped with state-of-the-art flat-panel digital catheterization labs, cardiac electrophysiology suites, and round-the-clock emergency angioplasty protocols overseen by Dr. Prakash Chand Shahi.",
      services: [
        "24/7 Primary Angioplasty (P-PCI) for Acute Heart Attacks",
        "Transradial Coronary Stenting with Drug-Eluting Stents",
        "Dual-Chamber & Biventricular Pacemaker (CRT-D) Implantation",
        "Peripheral Vascular Angioplasty & Renal Stenting",
        "Advanced Echocardiography & Non-Invasive Cardiac Stress Lab"
      ],
      image: "/images/cath-lab.jpg",
      accent: "#2788B8"
    },
    {
      id: "brain-spine",
      name: "Brain & Spine Centre of Excellence",
      subtitle: "Microscopic Neurosurgery & Golden-Hour Stroke Protocol",
      description: "Dedicated to cranial micro-neurosurgery, spine endoscopy, and rapid hyperacute stroke thrombolysis within the critical 4.5-hour golden window.",
      services: [
        "Hyperacute Ischemic Stroke Interventions & Thrombolysis",
        "Endoscopic Lumbar & Cervical Spine Discectomy",
        "Microvascular Decompression for Cranial Neuralgias",
        "Traumatic Brain Injury & Complex Skull Base Surgeries",
        "Comprehensive Neuro-Intensive Care Unit (Neuro-ICU)"
      ],
      image: "/images/brain-mri-diffusion.jpg",
      accent: "#AFA0E9"
    },
    {
      id: "bone-joint",
      name: "Bone & Joint Centre of Excellence",
      subtitle: "Sub-Millimeter Robotic Arthroplasty & Sports Medicine",
      description: "Features ultra-clean Class-100 laminar airflow operating theatres, computer-navigated robotic joint alignment, and sports ligament reconstruction for early pain-free ambulation.",
      services: [
        "Robotic-Assisted Total Knee & Hip Replacement",
        "Arthroscopic Knee (ACL/PCL/Meniscus) & Shoulder Repair",
        "Complex Poly-Trauma & Pelvi-Acetabular Reconstruction",
        "Minimally Invasive Spine Fixation & Deformity Correction",
        "Fast-Track Post-Operative Rehabilitation Center"
      ],
      image: "/images/robotic-knee-navigation.jpg",
      accent: "#65BCA6"
    },
    {
      id: "cancer-care",
      name: "Cancer Care Centre of Excellence",
      subtitle: "Precision Surgical Oncology & Compassionate Chemotherapy",
      description: "Comprehensive multidisciplinary oncology unit offering organ-preserving surgical resections, targeted chemotherapy infusions, and cancer screening clinics.",
      services: [
        "Organ-Preserving Breast & Head-Neck Onco-Surgeries",
        "Gastrointestinal & Hepato-Pancreato-Biliary Surgeries",
        "HEPA-Filtered Daycare Chemotherapy Infusion Center",
        "Weekly Multidisciplinary Tumour Board Reviews",
        "Preventive Cancer Screening & Genetic Risk Assessment"
      ],
      image: "/images/ct-calcium-score.jpg",
      accent: "#F2A28D"
    },
    {
      id: "mother-child",
      name: "Mother & Child Centre of Excellence",
      subtitle: "High-Risk Pregnancy, Natural Birth Suites & Level-3 NICU",
      description: "Holistic care for mothers and newborns, featuring comfortable private LDR birthing suites, advanced 3D/4D fetal scans, and 24/7 in-house neonatologists.",
      services: [
        "High-Risk Pregnancy & Maternal High-Dependency Care",
        "Painless Delivery in State-of-the-Art LDR Suites",
        "Advanced Level-3 Neonatal Intensive Care Unit (NICU)",
        "Targeted Fetal Medicine Scans & Prenatal Counseling",
        "Comprehensive Pediatric Vaccination & Wellness Wing"
      ],
      image: "/images/hospital-ward-suites.jpg",
      accent: "#EBCB91"
    }
  ],

  // Section 07: Advanced Medical Technology
  technology: [
    {
      id: "cath-lab",
      name: "Siemens Artis Zee Flat-Panel Digital Cath Lab",
      category: "Vascular & Interventional Imaging",
      tagline: "Ultra-low radiation dosage with crystalline digital hemodynamic visualization.",
      specs: [
        "Ultra-High Spatial Resolution for Micro-Vascular Guidance",
        "Real-Time Stent Boost Sub-Millimeter Enhancement",
        "Automated Radiation Dose Optimization Protocol",
        "Integrated Hemodynamic Telemetry Recording System"
      ],
      description: "Allows our cardiology team led by Dr. Prakash Chand Shahi to execute complex transradial coronary angioplasties with unmatched visual precision and minimal patient radiation exposure.",
      image: "/images/cath-lab.jpg",
      status: "Operational 24/7"
    },
    {
      id: "mri-3t",
      name: "3.0 Tesla Silent Whole-Body MRI",
      category: "Diagnostic Resonance Imaging",
      tagline: "Unparalleled soft-tissue resolution with 70% acoustic noise suppression.",
      specs: [
        "High-Density Neuro & Musculoskeletal Dedicated Coils",
        "Sub-Millimeter Isotropic 3D Volumetric Imaging",
        "Whisper-Quiet Patient Comfort Acoustic Engineering",
        "Advanced Diffusion & Perfusion Stroke Mapping"
      ],
      description: "Delivers exceptional anatomical clarity for brain tumors, stroke diffusion within minutes, spinal nerve root impingement, and cartilage wear.",
      image: "/images/advanced-mri-scanner.jpg",
      status: "Available Daily"
    },
    {
      id: "ct-128",
      name: "128-Slice Dual-Source Cardiac CT",
      category: "High-Speed Volumetric Computed Tomography",
      tagline: "Complete 3D coronary angiogram in a single heartbeat without arterial puncture.",
      specs: [
        "Sub-0.3 Second Rotation Speed for Dynamic Gating",
        "Sub-Millimeter Spatial Resolution of Arterial Calcium",
        "Non-Invasive Virtual Colonoscopy & Angiography",
        "Ultra-Low Pediatric & Geriatric Dose Modulation"
      ],
      description: "Reconstructs crystal-clear 3D visualizations of coronary blockages, thoracic aorta, and pulmonary vessels in outpatient settings without hospital admission.",
      image: "/images/ct-calcium-score.jpg",
      status: "Available Daily"
    },
    {
      id: "modular-ot",
      name: "Class-100 Laminar Airflow Modular Operating Theatres",
      category: "Surgical Architecture & Sterility",
      tagline: "Zero-particulate HEPA air exchange preventing surgical-site contamination.",
      specs: [
        "Positive Pressure Laminar Air Curtain over Sterile Zone",
        "Seamless Antibacterial Anti-Static Medical Wall Panels",
        "Integrated 4K Karl Storz Endoscopic Visualization Towers",
        "Centralized Medical Gas and Vacuum Monitoring System"
      ],
      description: "Ensures the highest international standards of sterility for joint replacements, complex neurosurgeries, and extensive oncological operations.",
      image: "/images/operation-theatre-laminar.jpg",
      status: "5 Suites Operational"
    }
  ],

  // Section 08: Patient Journey (5 Steps)
  patientJourney: [
    {
      step: "01",
      title: "Book Appointment",
      subtitle: "Instant Digital & OPD Access",
      description: "Seamlessly schedule your consultation online or via our dedicated priority helpline. Select your preferred specialist, clinical department, and time slot without waiting queues."
    },
    {
      step: "02",
      title: "Doctor Consultation",
      subtitle: "Thorough Clinical Evaluation",
      description: "Meet your senior heart doctor for a calm, clear discussion. We carefully check your past reports, symptoms, and overall heart health."
    },
    {
      step: "03",
      title: "Diagnosis & Tests",
      subtitle: "Sub-Millimeter Precision Investigations",
      description: "Undergo recommended diagnostics—such as Flat-Panel Angiography, 3T MRI, 128-Slice CT, or automated pathology—with transparent, fast turnaround reporting."
    },
    {
      step: "04",
      title: "Personalized Treatment",
      subtitle: "Ethical & Minimally Invasive Care",
      description: "From wrist-first transradial stenting and robotic joint replacement to targeted medical therapy, your care plan is customized with zero unnecessary procedures."
    },
    {
      step: "05",
      title: "Recovery & Follow-up",
      subtitle: "Continuity of Compassionate Health",
      description: "Step-down rehabilitation, post-discharge medication guidance, and tele-consultation follow-ups ensure your recovery is sustained, safe, and empowering."
    }
  ],

  // Section 09: Patient Stories
  patientStories: [
    {
      id: "story-1",
      patientName: "Ramakant Tripathi",
      age: "62 Years",
      location: "Gorakhpur",
      condition: "Severe Triple Vessel Coronary Artery Disease",
      doctor: "Dr. Prakash Chand Shahi",
      department: "Cardiology",
      recoveryTime: "Discharged within 24 Hours",
      quote: "I was told elsewhere that open heart bypass surgery was my only option. Dr. Prakash Chand Shahi examined my angiogram CD, explained every detail patiently, and performed a flawless wrist-first angioplasty with two stents. I was walking the very next morning without any groin pain or bleeding. PULSE gave me my life back.",
      verified: true
    },
    {
      id: "story-2",
      patientName: "Sunita Devi",
      age: "58 Years",
      location: "Deoria",
      condition: "Severe Bilateral Knee Osteoarthritis",
      doctor: "Dr. Vikramaditya Rathore",
      department: "Orthopaedics",
      recoveryTime: "Walked on Day 2",
      quote: "For four years I could not climb even two steps without excruciating pain. Dr. Rathore and the robotic surgery team at PULSE replaced both my knees with astonishing precision. The nursing staff and physiotherapy care was world-class. Today I take my grandchildren to the park every evening.",
      verified: true
    },
    {
      id: "story-3",
      patientName: "Mohd. Aslam Khan",
      age: "47 Years",
      location: "Basti",
      condition: "Acute Ischemic Stroke",
      doctor: "Dr. Ananya Sharma",
      department: "Neurology",
      recoveryTime: "Full Neurological Recovery",
      quote: "When my father suddenly lost speech and facial movement, PULSE's emergency team initiated the Stroke Code immediately. The 3T MRI and intravenous thrombolysis happened within 35 minutes of arrival. His speech and motor functions returned completely. Truly grateful to Dr. Sharma.",
      verified: true
    }
  ],

  // Section 10: Hospital Tour & Architectural Facilities
  hospitalTour: [
    {
      id: "tour-1",
      title: "Grand Architectural Atrium & Reception",
      category: "Patient Welcome & Triage",
      description: "Designed with generous natural light, acoustic dampening, and streamlined digital registration kiosks for zero-wait patient admission.",
      image: "/images/reception.png",
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
      image: "/images/doctor-patient-consult.jpg",
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
      image: "/images/doctor-recovery-discharge.jpg",
      featured: false
    }
  ],

  // Section 11: Health Insights & Medical Articles
  healthInsights: [
    {
      id: "insight-1",
      title: "Recognizing Early Warning Signs of Coronary Artery Disease Before a Heart Attack",
      author: "Dr. Prakash Chand Shahi",
      authorRole: "Director & Chief Cardiologist",
      category: "Cardiology",
      readTime: "4 min read",
      date: "November 2026",
      summary: "Understanding atypical symptoms like jaw discomfort, uncharacteristic breathlessness during mild exertion, and why early angiogram screening saves lives.",
      slug: "early-warning-signs-heart-attack"
    },
    {
      id: "insight-2",
      title: "The Golden Hour in Acute Ischemic Stroke: Why Every Minute Saves Millions of Brain Cells",
      author: "Dr. Ananya Sharma",
      authorRole: "Chief Neurosurgeon",
      category: "Neurology",
      readTime: "5 min read",
      date: "November 2026",
      summary: "The BE-FAST mnemonic protocol and how instant arrival at a 24/7 stroke-ready hospital enables complete neurological recovery via thrombolysis.",
      slug: "golden-hour-stroke-management"
    },
    {
      id: "insight-3",
      title: "Robotic Knee Replacement: How Sub-Millimeter Accuracy Transforms Joint Longevity",
      author: "Dr. Vikramaditya Rathore",
      authorRole: "Chief Orthopaedic Surgeon",
      category: "Orthopaedics",
      readTime: "4 min read",
      date: "October 2026",
      summary: "Comparing conventional jig alignment with 3D computer navigation, tissue sparing incisions, and how patients walk within 24 hours post-surgery.",
      slug: "robotic-knee-replacement-precision"
    },
    {
      id: "insight-4",
      title: "Managing High Blood Pressure & Diabetes: A Cardiometabolic Preventive Roadmap",
      author: "Dr. Harish Chandra Mishra",
      authorRole: "Senior Consultant Internal Medicine",
      category: "General Medicine",
      readTime: "3 min read",
      date: "October 2026",
      summary: "Preventing silent microvascular kidney damage and cardiovascular disease through disciplined home monitoring and modern cardioprotective regimens.",
      slug: "cardiometabolic-preventive-roadmap"
    }
  ],

  // Section 12: Insurance & Patient Guide
  insurancePartners: [
    "Star Health & Allied Insurance",
    "HDFC ERGO General Insurance",
    "ICICI Lombard",
    "Max Bupa (Niva Bupa)",
    "Care Health Insurance",
    "Bajaj Allianz",
    "Ayushman Bharat (PM-JAY)",
    "Govt. Employee Cashless Schemes"
  ],

  faqs: [
    {
      q: "How do I schedule a consultation with Dr. Prakash Chand Shahi?",
      a: "You can book an appointment directly through our online appointment booking system on this website, call our priority OPD desk at +91 98765 43211, or walk in during regular OPD hours (10:00 AM – 8:00 PM)."
    },
    {
      q: "Does PULSE Hospital support cashless insurance and TPA claims?",
      a: "Yes. PULSE Hospital has a dedicated 24/7 Cashless TPA Helpdesk that processes claims with all major private health insurers, TPAs, and recognized government healthcare schemes."
    },
    {
      q: "What is transradial coronary angioplasty and how is it different from groin access?",
      a: "Transradial angioplasty accesses the heart through a tiny puncture in the wrist radial artery rather than the femoral groin artery. It drastically reduces bleeding complications, eliminates hours of painful bed rest, and allows safe same-day or next-day ambulation."
    },
    {
      q: "What emergency facilities are available at PULSE Hospital?",
      a: "We maintain a 24/7 dedicated Emergency & Trauma Care Department with instant access to our Flat-Panel Digital Cath Lab, 3T MRI, 128-Slice CT, 24/7 blood bank linkages, and emergency Code-Blue cardiology response."
    }
  ],
  cardiacExplorerHotspots: [
    {
      id: 'coronary',
      label: 'LAD Coronary Artery',
      x: '52%',
      y: '38%',
      domain: 'Coronary Angioplasty & Stenting Target',
      detail: 'Left Anterior Descending branch supplying the anterior left ventricular wall.',
      chamber: 'Anterior Myocardium',
      clinicalInsight: 'Primary target vessel for transradial balloon dilation and drug-eluting stenting.',
    },
    {
      id: 'interventional',
      label: 'Aortic Root & Catheter Access',
      x: '46%',
      y: '22%',
      domain: 'Radial Catheterization Gateway',
      detail: 'Ascending aorta conduit for balloon dilation and drug-eluting stent deployment.',
      chamber: 'Ascending Aorta',
      clinicalInsight: 'Coronary ostium engagement pathway for sub-millimeter stent delivery.',
    },
    {
      id: 'pacemaker',
      label: 'Sinoatrial (SA) Conduction Node',
      x: '38%',
      y: '48%',
      domain: 'Pacemaker Rhythm Node',
      detail: 'Primary physiological cardiac pacemaker governing sinus node depolarization.',
      chamber: 'Right Atrial Junction',
      clinicalInsight: 'Target conduction area for physiological dual-chamber pacemaker lead positioning.',
    },
  ]
};
