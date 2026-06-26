import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: "prod-1",
    nameEn: "SB-55 Pro Power Tractor",
    nameHi: "एसबी-55 प्रो पावर ट्रैक्टर",
    category: "tractors",
    descriptionEn: "High-performance heavy cultivation tractor featuring advanced 4-wheel drive, dual-clutch transmission, and high lift capacity hydraulic systems designed for rough terrains.",
    descriptionHi: "उन्नत 4-व्हील ड्राइव, डुअल-क्लच ट्रांसमिशन और उच्च लिफ्ट क्षमता हाइड्रोलिक सिस्टम के साथ उच्च प्रदर्शन वाला भारी कृषि ट्रैक्टर, जो कठिन रास्तों के लिए डिजाइन किया गया है।",
    images: [
      "https://images.unsplash.com/photo-1594140733857-e11b6518cb43?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=800"
    ],
    specsEn: {
      "Engine Power": "55 HP @ 2200 RPM",
      "No. of Cylinders": "3 Cylinders, Water Cooled",
      "Gearbox": "8 Forward + 2 Reverse",
      "Lift Capacity": "1800 Kg",
      "Brakes": "Oil Immersed Multi-Disc Brakes"
    },
    specsHi: {
      "इंजन पावर": "55 HP @ 2200 RPM",
      "सिलेंडर की संख्या": "3 सिलेंडर, वाटर कूल्ड",
      "गियरबॉक्स": "8 आगे + 2 पीछे",
      "लिफ्ट क्षमता": "1800 किलोग्राम",
      "ब्रेक": "तेल में डूबे हुए मल्टी-डिस्क ब्रेक"
    },
    featuresEn: [
      "Turbocharged Fuel-Efficient Engine",
      "Power Steering with Adjustable Column",
      "Aerodynamic Canopy for Farmer Protection",
      "Dual Speed Independent PTO"
    ],
    featuresHi: [
      "टर्बोचार्ज्ड ईंधन-कुशल इंजन",
      "समायोज्य कॉलम के साथ पावर स्टीयरिंग",
      "किसान सुरक्षा के लिए एयरोडायनामिक कैनोपी",
      "डुअल स्पीड स्वतंत्र पीटीओ"
    ],
    priceRange: "₹7.4 Lakhs - ₹8.3 Lakhs",
    whatsAppMsg: "Hello SB Agrotech! I am interested in the SB-55 Pro Power Tractor. Please provide dealership information and financing quotes."
  },
  {
    id: "prod-2",
    nameEn: "SB Rotavator Extreme",
    nameHi: "एसबी रोटावेटर एक्सट्रीम",
    category: "implements",
    descriptionEn: "Super-durability rotary tiller fitted with Boron steel blades and heavy gear-drive transmission. Prepares perfect soil seedbeds in a single pass even on hard soils.",
    descriptionHi: "बोरोन स्टील ब्लेड और हेवी गियर-ड्राइव ट्रांसमिशन से लैस अत्यधिक टिकाऊ रोटरी टिलर। कठोर मिट्टी पर भी एक ही बार में सटीक बीज क्यारी तैयार करता है।",
    images: [
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
    ],
    specsEn: {
      "Working Width": "6 Feet / 1.8 Meters",
      "No. of Blades": "42 High-Grade Boron Steel Blades",
      "Gearbox Type": "Multi-Speed Heavy Cast Iron",
      "Weight": "420 Kg",
      "Compatible Power": "35 HP to 55 HP Tractors"
    },
    specsHi: {
      "कार्य चौड़ाई": "6 फीट / 1.8 मीटर",
      "ब्लेड की संख्या": "42 उच्च श्रेणी बोरोन स्टील ब्लेड",
      "गियरबॉक्स प्रकार": "मल्टी-स्पीड भारी कच्चा लोहा (Cast Iron)",
      "वजन": "420 किलोग्राम",
      "उपयुक्त ट्रैक्टर शक्ति": "35 HP से 55 HP ट्रैक्टर"
    },
    featuresEn: [
      "Specially Curved Blades for Low Load on Tractor",
      "Double Leakproof Oil Seals for Mud Protection",
      "Robust Side Plate Bracket",
      "Adjustable Tilling Depth Skid Shoes"
    ],
    featuresHi: [
      "ट्रैक्टर पर कम लोड के लिए विशेष रूप से घुमावदार ब्लेड",
      "कीचड़ से सुरक्षा के लिए डबल लीकप्रूफ ऑयल सील",
      "मजबूत साइड प्लेट ब्रैकेट",
      "समायोज्य जुताई गहराई स्किड शूज"
    ],
    priceRange: "₹1.1 Lakhs - ₹1.4 Lakhs",
    whatsAppMsg: "Hello SB Agrotech! I want to enquire about the SB Rotavator Extreme for my farm. Please share pricing and nearby dealer details."
  },
  {
    id: "prod-3",
    nameEn: "SB SeedMaster Seeder & Drill",
    nameHi: "एसबी सीडमास्टर सीडर और ड्रिल",
    category: "seeding",
    descriptionEn: "Highly efficient grain drill with accurate seed-metering fluted rollers and fertilizer applicator. Maximizes seed spacing uniformity to prevent germination failure.",
    descriptionHi: "सटीक बीज-मापन बांसुरीदार रोलर्स और उर्वरक एप्लिकेटर के साथ अत्यधिक कुशल अनाज बोने की मशीन। अंकुरण विफलता को रोकने के लिए बीज की दूरी की एकरूपता को अधिकतम करती है।",
    images: [
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800"
    ],
    specsEn: {
      "No. of Rows": "9 Row Outlets",
      "Row-to-Row Spacing": "Adjustable (6 to 9 inches)",
      "Seed Hopper Capacity": "60 Kg",
      "Fertilizer Hopper": "60 Kg Dual Compartment",
      "Drive Mechanism": "Ground Wheel Chain Drive"
    },
    specsHi: {
      "लाइनों की संख्या": "9 कतार आउटलेट",
      "कतार से कतार की दूरी": "समायोज्य (6 से 9 इंच)",
      "बीज हॉपर क्षमता": "60 किलोग्राम",
      "उर्वरक हॉपर": "60 किलोग्राम डुअल कम्पार्टमेंट",
      "ड्राइव मैकेनिज्म": "ग्राउंड व्हील चेन ड्राइव"
    },
    featuresEn: [
      "Precision Sowing for Wheat, Soya, Gram and Mustard",
      "Corrosion Resistant Sheet Metal Tanks",
      "Spring-Loaded Furrow Openers",
      "Clear Level Indicators for Seeds & Manure"
    ],
    featuresHi: [
      "गेहूं, सोयाबीन, चना और सरसों के लिए सटीक बुवाई",
      "जंग प्रतिरोधी शीट मेटल टैंक",
      "स्प्रिंग-लोडेड फरो ओपनर्स",
      "बीज और खाद के लिए स्पष्ट स्तर संकेतक"
    ],
    priceRange: "₹0.85 Lakhs - ₹1.15 Lakhs",
    whatsAppMsg: "Hello SB Agrotech! Please send quotation details and delivery times for the SB SeedMaster Drill."
  },
  {
    id: "prod-4",
    nameEn: "SB-90 Combine Harvester",
    nameHi: "एसबी-90 कंबाइन हार्वेस्टर",
    category: "harvesting",
    descriptionEn: "Heavy-duty multi-crop self-propelled combine harvester designed to harvest wheat, paddy, soybean, and corn with minimal grain breakage and ultra-clean threshing.",
    descriptionHi: "न्यूनतम अनाज टूटने और अत्यधिक स्वच्छ थ्रेसिंग के साथ गेहूं, धान, सोयाबीन और मक्का की कटाई के लिए डिजाइन किया गया भारी बहु-फसल स्व-चालित कंबाइन हार्वेस्टर।",
    images: [
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
    ],
    specsEn: {
      "Engine": "101 HP @ 2200 RPM Turbo",
      "Cutter Bar Width": "14 Feet / 4.2 Meters",
      "Threshing Drum Type": "Rasp Bar and Peg Tooth dual-system",
      "Grain Tank Capacity": "1200 Liters",
      "Cleaning Area": "2.8 Sq. Meters"
    },
    specsHi: {
      "इंजन": "101 HP @ 2200 RPM टर्बो",
      "कटर बार चौड़ाई": "14 फीट / 4.2 मीटर",
      "थ्रेसिंग ड्रम प्रकार": "रास्प बार और पेग टूथ डुअल-सिस्टम",
      "अनाज टैंक क्षमता": "1200 लीटर",
      "सफाई क्षेत्र": "2.8 वर्ग मीटर"
    },
    featuresEn: [
      "Under-mount Straw Chopper Attachment Available",
      "Spacious AC Operator cabin with Ergonomic Joystick Control",
      "Ultra-low grain loss (< 1.2% certified)",
      "High Discharge Auger for Quick Grain Unloading"
    ],
    featuresHi: [
      "अंडर-माउंट स्ट्रॉ चॉपर अटैचमेंट उपलब्ध",
      "एर्गोनोमिक जॉयस्टिक नियंत्रण के साथ विशाल एसी केबिन",
      "अत्यधिक कम अनाज हानि (< 1.2% प्रमाणित)",
      "त्वरित अनाज उतारने के लिए हाई डिस्चार्ज औगर"
    ],
    priceRange: "₹18.5 Lakhs - ₹21.0 Lakhs",
    whatsAppMsg: "Hello SB Agrotech! I am interested in the SB-90 Combine Harvester for custom harvesting business. Please share catalog, financing options and local subsidy support details."
  },
  {
    id: "prod-5",
    nameEn: "SB Orchard-30 Compact Tractor",
    nameHi: "एसबी ऑर्चर्ड-30 कॉम्पैक्ट ट्रैक्टर",
    category: "tractors",
    descriptionEn: "Highly maneuverable compact utility tractor tailored specifically for vineyard corridors, orchards, and small horticultural fields with ultra-narrow track width.",
    descriptionHi: "बेहद संकीर्ण ट्रैक चौड़ाई के साथ विशेष रूप से अंगूर के बागों, फलों के बगीचों और छोटे बागवानी खेतों के लिए तैयार किया गया अत्यधिक गतिमान कॉम्पैक्ट ट्रैक्टर।",
    images: [
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1594140733857-e11b6518cb43?auto=format&fit=crop&q=80&w=800"
    ],
    specsEn: {
      "Engine Power": "30 HP @ 2400 RPM",
      "Width": "3.2 Feet (Ultra-Narrow)",
      "No. of Cylinders": "2 Cylinders, Direct Injection",
      "Turning Radius": "2.1 Meters",
      "Lift Capacity": "850 Kg"
    },
    specsHi: {
      "इंजन पावर": "30 HP @ 2400 RPM",
      "चौड़ाई": "3.2 फीट (अत्यधिक संकीर्ण)",
      "सिलेंडर की संख्या": "2 सिलेंडर, डायरेक्ट इंजेक्शन",
      "मोड़ने की त्रिज्या": "2.1 मीटर",
      "लिफ्ट क्षमता": "850 किलोग्राम"
    },
    featuresEn: [
      "Fits Easily in Narrow Orchard Rows",
      "Excellent Fuel Economy for Light Utility Work",
      "High Ground Clearance",
      "Responsive Power Steering"
    ],
    featuresHi: [
      "फलों के बगीचों की संकीर्ण लाइनों में आसानी से फिट बैठता है",
      "हल्के उपयोगिता कार्यों के लिए उत्कृष्ट ईंधन बचत",
      "उच्च ग्राउंड क्लीयरेंस",
      "उत्तरदायी पावर स्टीयरिंग"
    ],
    priceRange: "₹3.8 Lakhs - ₹4.5 Lakhs",
    whatsAppMsg: "Hello SB Agrotech! I need information on the Orchard-30 Compact Tractor. Please share details of your orchard attachments."
  },
  {
    id: "prod-6",
    nameEn: "SB Reversible Spring plow",
    nameHi: "एसबी रिवर्सिबल स्प्रिंग हल (हल)",
    category: "implements",
    descriptionEn: "Heavy carbon steel two-furrow plow with manual or hydraulic turnover mechanism. Equipped with impact safety springs to clear deep-seated rocks without damage.",
    descriptionHi: "मैनुअल या हाइड्रोलिक टर्नओवर मैकेनिज्म के साथ भारी कार्बन स्टील का दो-फरो वाला हल। बिना किसी नुकसान के गहरे पत्थरों से निपटने के लिए प्रभाव सुरक्षा स्प्रिंग्स से लैस।",
    images: [
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=800"
    ],
    specsEn: {
      "Type": "2 Furrow Moldboard Reversible",
      "Mouldboard Material": "Hardened high-manganese steel",
      "Safety Mechanism": "Heavy-Duty Shock Absorption Springs",
      "Tilling Depth": "Up to 12 Inches",
      "Required Power": "45 HP and above"
    },
    specsHi: {
      "प्रकार": "2 फरो मोल्डबोर्ड प्रतिवर्ती (Reversible)",
      "मोल्डबोर्ड सामग्री": "कठोर उच्च-मैंगनीज स्टील",
      "सुरक्षा तंत्र": "भारी-भरकम शॉक एब्जॉर्प्शन स्प्रिंग्स",
      "जुताई गहराई": "12 इंच तक",
      "आवश्यक ट्रैक्टर शक्ति": "45 HP और उससे अधिक"
    },
    featuresEn: [
      "180-Degree Flip Action Cuts Field Time in Half",
      "Replaceable Wear Points for Extended Lifespan",
      "Under-frame clearance prevents crop clogging",
      "Deep soil aeration maximizes water retention"
    ],
    featuresHi: [
      "180-डिग्री फ्लिप एक्शन खेतों की जुताई का समय आधा कर देता है",
      "लंबे जीवनकाल के लिए बदलने योग्य वियर पॉइंट्स",
      "अंडर-फ्रेम क्लीयरेंस फसल के फंसने को रोकता है",
      "गहरी मिट्टी की जुताई पानी रोकने की क्षमता को बढ़ाती है"
    ],
    priceRange: "₹0.95 Lakhs - ₹1.25 Lakhs",
    whatsAppMsg: "Hello SB Agrotech! I want to inquire about the Reversible Spring Plow. Please share dealership details and delivery in my district."
  }
];

export const testimonialsData = [
  {
    id: "t-1",
    nameEn: "Sardar Gurpreet Singh",
    nameHi: "सरदार गुरप्रीत सिंह",
    locationEn: "Bhatinda, Punjab",
    locationHi: "भटिंडा, पंजाब",
    textEn: "We purchased the SB-90 Combine Harvester last crop season. It harvested our 45-acre wheat plot in record time. Grain breakage was negligible and the AC cabin made long night operation completely stress-free. Outstanding quality!",
    textHi: "हमने पिछले फसल सीजन में एसबी-90 कंबाइन हार्वेस्टर खरीदा था। इसने रिकॉर्ड समय में हमारे 45 एकड़ गेहूं की कटाई पूरी की। अनाज का टूटना बिल्कुल नगण्य था और एसी केबिन ने रात के लंबे संचालन को पूरी तरह से तनावमुक्त बना दिया। उत्कृष्ट गुणवत्ता!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    cropEn: "Wheat & Paddy",
    cropHi: "गेहूं और धान"
  },
  {
    id: "t-2",
    nameEn: "Dnyaneshwar Patil",
    nameHi: "ज्ञानेश्वर पाटिल",
    locationEn: "Latur, Maharashtra",
    locationHi: "लातूर, महाराष्ट्र",
    textEn: "SB Rotavator Extreme is incredibly rugged! Our soils are clayey and full of basalt rocks. Standard tillers get bent blades, but SB's Boron-steel blades have withstood two full sowing periods without a single bend. Highly recommended.",
    textHi: "एसबी रोटावेटर एक्सट्रीम अविश्वसनीय रूप से मजबूत है! हमारी मिट्टी चिकनी और बेसाल्ट पत्थरों से भरी है। सामान्य टिलर के ब्लेड मुड़ जाते हैं, लेकिन एसबी के बोरोन-स्टील ब्लेड ने बिना किसी मोड़ के दो पूर्ण बुवाई चक्रों का सामना किया है। अत्यधिक अनुशंसित।",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    cropEn: "Sugarcane & Pulses",
    cropHi: "गन्ना और दालें"
  },
  {
    id: "t-3",
    nameEn: "Chaudhary Ram Saran",
    nameHi: "चौधरी राम शरण",
    locationEn: "Karnal, Haryana",
    locationHi: "करनाल, हरियाणा",
    textEn: "The SB-55 Pro Tractor has unbelievable torque. Pulling deep seeders and rotavators is effortless. What impressed me most was their regional service technician who arrived at 11 PM to deliver an oil filter. Exceptional service commitment!",
    textHi: "एसबी-55 प्रो ट्रैक्टर में अविश्वसनीय टॉर्क है। गहरे सीडर्स और रोटावेटर को खींचना आसान है। जिस बात ने मुझे सबसे अधिक प्रभावित किया, वह उनका क्षेत्रीय सेवा तकनीशियन था जो रात 11 बजे ऑयल फ़िल्टर देने मेरे खेत पर आया। असाधारण सेवा प्रतिबद्धता!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    cropEn: "Rice & Basmati",
    cropHi: "चावल और बासमती"
  }
];

export const milestonesData = [
  {
    year: "1991",
    titleEn: "Our Humble Forge",
    titleHi: "हमारी लघु शुरुआत",
    descEn: "Started as a family-owned metal forge in Rajkot, hand-crafting standard simple hand tools, plows, and sickles for local farmers.",
    descHi: "राजकोट में एक पारिवारिक धातु भट्टी के रूप में शुरुआत हुई, जो स्थानीय किसानों के लिए साधारण हस्त उपकरण, हल और दरांती बनाती थी।"
  },
  {
    year: "2002",
    titleEn: "First Automated Production",
    titleHi: "पहला स्वचालित उत्पादन",
    descEn: "Inaugurated our first semi-automated welding and sheet pressing unit. Launched our first commercial moldboard plows and seed drills.",
    descHi: "हमारे पहले अर्ध-स्वचालित वेल्डिंग और शीट प्रेसिंग यूनिट का उद्घाटन। हमारे पहले वाणिज्यिक मोल्डबोर्ड हल और बीज ड्रिल लॉन्च किए गए।"
  },
  {
    year: "2012",
    titleEn: "The Tractor Breakthrough",
    titleHi: "ट्रैक्टर निर्माण में कदम",
    descEn: "Unveiled our indigenous utility tractor lineup (35HP - 55HP). Reached a major milestone of empowering 50,000+ farmers across 6 states.",
    descHi: "हमारे स्वदेशी ट्रैक्टर लाइनअप (35HP - 55HP) का अनावरण किया गया। 6 राज्यों में 50,000+ किसानों को सशक्त बनाने का एक बड़ा मील का पत्थर हासिल किया।"
  },
  {
    year: "2021",
    titleEn: "Smart Farming & Exports",
    titleHi: "स्मार्ट फार्मिंग और वैश्विक निर्यात",
    descEn: "Integrated AI engineering stresses, robotics assembly lines, and extended export shipping routes to 12+ countries globally.",
    descHi: "एआई इंजीनियरिंग सिमुलेशन, रोबोटिक्स असेंबली लाइनों को एकीकृत किया और वैश्विक स्तर पर 12+ देशों में निर्यात शिपिंग रूट शुरू किए।"
  },
  {
    year: "2026",
    titleEn: "Introducing AI Gear Concierge",
    titleHi: "एआई गियर सलाहकार का परिचय",
    descEn: "Launched our cloud-connected neural assistant to provide perfect implement custom match configurations for sustainable agriculture.",
    descHi: "सतत कृषि के लिए सही उपकरण कस्टम मैच विन्यास प्रदान करने के लिए हमारे क्लाउड-कनेक्टेड न्यूरल सहायक का शुभारंभ किया।"
  }
];
