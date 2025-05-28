import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const rundownData = [
  {
    start: "08:30",
    end: "09:00",
    duration: "0:30:00",
    venue: "Main Room",
    activity: "Arrival dan Registration",
  },
  {
    start: "09:00",
    end: "09:10",
    duration: "0:10:00",
    venue: "Main Room",
    activity: "Opening Session - Welcoming Address, Opening prayer",
  },
  {
    start: "09:10",
    end: "09:15",
    duration: "0:05:00",
    venue: "Main Room",
    activity: "National Anthem and Hymne UC",
  },
  {
    start: "09:15",
    end: "09:18",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Opening Remarks by Head of Icombus - Jean Athalia",
  },
  {
    start: "09:18",
    end: "09:20",
    duration: "0:02:00",
    venue: "Main Room",
    activity:
      "Opening Remarks by The President of IBM Student Union - Kevin Djolin",
  },
  {
    start: "09:20",
    end: "09:23",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Opening Remarks by Vice Head Department of IBM Major",
  },
  {
    start: "09:23",
    end: "09:26",
    duration: "0:03:00",
    venue: "Main Room",
    activity:
      "Rundown Reading - Reading rules of ICOMBUS, Explanation of ICOMBUS timeline",
  },
  {
    start: "09:26",
    end: "10:51",
    duration: "1:25:00",
    venue: "Main Room",
    activity:
      "Concurrent Session 1 - MC Time, Speaker Session by Dr. Harry Patria Ph.D., Speaker Session by Prof. Dennis Cheek BA, BS, MA, Ph.D., FRSA, AAAS, QnA, Speaker Documentation",
  },
  {
    start: "10:51",
    end: "12:16",
    duration: "1:25:00",
    venue: "Main Room",
    activity:
      "Concurrent Session 2 - MC Time, Speaker Session by Dr. Nor'ain Abdullah, Speaker Session by Miguel Angel Esquivas Padilla IA., M.SE., QnA, Speaker Documentation",
  },
  {
    start: "12:16",
    end: "13:05",
    duration: "0:49:00",
    venue: "Main Room",
    activity: "MC Time, Break Time",
  },
  {
    start: "13:05",
    end: "15:20",
    duration: "2:15:00",
    venue: "Break Out Room",
    activity: "Concurrent Session 3 - MC Time, Break out room session",
  },
  {
    start: "15:20",
    end: "15:35",
    duration: "0:15:00",
    venue: "Main Room",
    activity:
      "Award and Closing ceremony - MC Time, closing, documentation, closing prayer",
  },
];

// --- DATA FOR BREAK OUT ROOMS ---
const borData = [
  // BOR 1
  {
    room: 1,
    presenters: [
      {
        title:
          "The Role of Institutional Ownership in Preventing Financial Distress in Technology Companies.",
        name: "Sherly Margaretha",
      },
      {
        title:
          "The Utilizing Systematic Literature Review and Bibliometric: Study in Environment, Social and Governance for Corporate Finance Performance",
        name: "M Dandy Resafahlevi Nasution",
      },
      {
        title:
          "THE EFFECT OF LIQUIDITY, ACTIVITY RATIO, AND LEVERAGE ON FINANCIAL DISTRESS IN TEXTILE AND GARMENT SUB-SECTOR COMPANIES LISTED ON THE INDONESIA STOCK EXCHANGE IN 2019-2023",
        name: "Fresilla Oktaviani. Cabvo Warsono",
      }, // [cite: 2]
      {
        title:
          "Empowering Small Enterprises with Scalable Web Solutions A Framework Integrating Responsive Design, SQL Analytics, Al Personalization, and Cloud Hosting",
        name: "Felicia Sword",
      }, // [cite: 2]
    ],
  },
  // BOR 2
  {
    room: 2,
    presenters: [
      {
        title:
          "THE IMPACT OF ENVIRONMENTAL, SOCIAL, GOVERNANCE (ESG) SCORE AND SELF-ASSESSMENT GCG ON FINANCIAL PERFORMANCE WITH CREDIT RISK AS A MODERATING VARIABLE IN BANKING COMPANIES LISTED ON THE INDONESIA STOCK EXCHANGE FOR THE PERIOD 2019-2023",
        name: "Nurul Khopipah",
      }, // [cite: 2]
      {
        title:
          "ANALYSIS OF ABNORMAL RETURN AND TRADING VOLUME ACTIVITY BEFORE AND AFTER THE IMPLEMENTATION OF POJK NUMBER 48 OF DECEMBER 2020",
        name: "NI WAYAN TRISNA PURNAMA DEWI",
      }, // [cite: 2]
      {
        title:
          "THE EFFECT OF BUSINESS RISK, CASH TURNOVER, AND WORKING CAPITAL TURNOVER ON LIQUIDITY MODERATED BY SALES GROWTH (IN MANUFACTURING COMPANIES IN THE CONSUMER GOODS SECTOR LISTED ON THE INDONESIA STOCK EXCHANGE IN 2019-2023)",
        name: "Nurfitriani Dewi Yulianti",
      }, // [cite: 2]
      {
        title:
          "The Effect of Fraud Triangle to Fraud Academictrough Artificial Intelligence",
        name: "Adelia Kurnia Syahrani",
      }, // [cite: 2]
    ],
  },
  // BOR 3
  {
    room: 3,
    presenters: [
      {
        title:
          "The Influence of Social Media Utilization in Health Awareness Campaigns and Its Impact on Scaling Social Movements: A Case Study of Libur ibur Lari Community",
        name: "Jessica Kristianti Dharsana",
      }, // [cite: 2]
      {
        title:
          "The Influence of Financial Literacy and Overconfidence on Investment Decisions with Risk Tolerance as a Mediating Variable (A Study on StockInvestors in Bali Province)",
        name: "Kadek Dewi Sawitri",
      }, // [cite: 2]
      {
        title:
          "THE EFFECT OF SUSTAINABILITY REPORT AND FINANCIAL PERFORMANCE ON COMPANY VALUE WITH INVESTMENT OPPORTUNITY SET (IOS) AS A MODERATING VARIABLE",
        name: "Syashi Kirana Ayn Rahayu",
      }, // [cite: 2]
      {
        title:
          "Risk Management in Financial Technology: A SystematicLiterature Review",
        name: "Fiqrah Maulani",
      }, // [cite: 2]
    ],
  },
  // BOR 4
  {
    room: 4,
    presenters: [
      {
        title:
          "The Influence of Intellectual Capital, Profitability, and inflation on Stock Prices of Oil and Gas Industry Companies Listed on the Indonesia Stock Exchange (IDX) for the Period 2019-2023",
        name: "Yulia Sisca Amanda",
      }, // [cite: 2]
      {
        title:
          "THE EFFECT OF INSTITUTIONAL OWNERSHIP, MANAGERIAL OWNERSHIP AND INDEPENDENT BOARD OF COMMISSIONERS ON TAX AVOIDANCE IN COMPANIES IN THE BASIC MATERIALS SECTOR LISTED ON THE INDONESIA STOCK EXCHANGE IN 2019-2023",
        name: "Kezia Callista Odelyn Sinugroho",
      }, // [cite: 2]
      {
        title:
          "Pricing Effect to Dual Sales Channel Preference Using Central Composite Logistic Regression",
        name: "Januardi Januardi",
      }, // [cite: 2]
      {
        title:
          "Assessing the Sustainability Gap in Microfinance: A Review Based on PNM's Sustainability Report",
        name: "Amalia Dwi Asih",
      }, // [cite: 2]
      {
        title:
          "Sustainable Supply Chain Practices and Business Performance of Culinary MSME's in West Java",
        name: "Tribowo Rachmat Fauzan",
      }, // [cite: 2]
      {
        title:
          "Evaluating ESG-Driven Strategies for Business Sustainability in the EV Sector: A Content Analysis Approach",
        name: "Fransiska Mulyani, S.T., M.M.",
      }, // [cite: 2]
      {
        title:
          "THE ROLE OF CUSTOMER SATISFACTION AND ENGAGEMENT MEDIATES THE INFLUENCE OF CUSTOMER EXPERIENCE ON REPURCHASE INTENTION",
        name: "Nyoman Candra Tri Wahyuni",
      }, // [cite: 2]
      {
        title:
          "The Influence of Organizational Culture, Training, and Career Development on Employee Performance at PT. Kurabo Manunggal Textile (KUMATEX)",
        name: "Adila Balqis Maudyna",
      }, // [cite: 2]
    ],
  },
  // BOR 5
  {
    room: 5,
    presenters: [
      {
        title:
          "The Influence of Investment Motivation, Risk Perception, and Financial Efficacy on People's Investment Decisions in The Capital Market",
        name: "Alhidayatullah, S.M., M.M.",
      }, // [cite: 2]
      {
        title:
          "The Effect of Financial Distress, Leverage, and Profit Management on Tax Agressiveness in Energy Sector Companies Listed on the Indonesia Stock Exchange (IDX) in 2019-2023",
        name: "Rizkiah Kartika Alfiyyah",
      }, // [cite: 2]
      {
        title:
          "The Influence of Digital Marketing Whatsapp and Digital Payment System on Customer Satisfaction (at the Nur Cloth Shope)",
        name: "Arobi Haikal",
      }, // [cite: 2]
      {
        title:
          "Understanding Job Satisfaction Among International Part-Time Student Workers in Taiwan: Insights from Self-Determination Theory",
        name: "I Gede Artha Wibawa",
      }, // [cite: 2]
      {
        title:
          "THE EFFECT OF SOFT SKILLS, EDUCATION LEVEL AND WORK EXPERIENCE ON EMPLOYEE PRODUCTIVITY OF PT ANUGERAH PELITA SEJAHTERA",
        name: "Siti Salsabilla Azzahra",
      }, // [cite: 2]
      {
        title:
          "THE EFFECT OF DIVIDEND POLICY AND CAPITAL POLICY ON COMPANY VALUE WITH PROFITABILITY ASA MODERATING VARIABLE IN THE FOOD AND BEVERAGE SUB-SECTOR LISTED ON THE INDONESIA STOCK EXCHANGE (IDX) 2019-2023 PERIOD",
        name: "Ajeng Lutfiah Pratiwi",
      }, // [cite: 2]
      {
        title:
          "THE EFFECT OF BRAND IMAGE AND PRODUCT QUALITY ON CONSUMER LOYALTY TOWARDS UNIQLO BRAND AT LIPPO KARAWACI SUPERMALL TANGERANG",
        name: "Ananta Amelis Putri",
      }, // [cite: 2]
      {
        title:
          "The Influence Of Job Satisfaction, Work Environment And Career Development On Employee Performance At PT. Kurabo Manunggal Textile (KUMATEX)",
        name: "Fitria Awalia",
      }, // [cite: 2]
    ],
  },
  // BOR 6
  {
    room: 6,
    presenters: [
      {
        title:
          "THE ROLE OF THE BOARD AND ARL: EMPIRICAL EVIDENCE IN THE PROPERTY, REAL ESTATE, BUILDING SECTOR IN INDONESIA",
        name: "Muhammad Ilham Fauzan",
      }, // [cite: 2]
      {
        title:
          "Financial Distress Analysis Using a Comparison of the Altman Model, Springate Model, Zmijewski Model, and Grover Model in the Energy Sector Listed on the IDX for the 2019-2023 Period",
        name: "Rahma Utami",
      }, // [cite: 2]
      {
        title:
          "The Effect Of Perceived Ease of Use And Perceived Usefulness On Reuse Intention With E-Satisfaction As A Mediation Variable",
        name: "Komang Ayu Trishantika Dewi",
      }, // [cite: 2]
      {
        title:
          "PERAN INSTITUTIONAL OWNERSHIP PADA HUMAN CAPITAL DAN STRUCTURAL CAPITAL EFFICIENCY DALAM MENINGKATKAN NILAI PERUSAHAAN",
        name: "Bryan Poaler",
      }, // [cite: 2]
      {
        title:
          "Balancing Exploration and Exploitation: The Impact of Ambidextrous Leadership on Innovative Work Behavior in State-Owned Oil and Gas Enterprises",
        name: "Eizel Mauldy Muhammad",
      }, // [cite: 2]
      {
        title:
          "ORGANIZATIONAL CULTURE ASA SUPPORTING FACTOR FOR THE QUALITY OF HUMAN RESOURCES",
        name: "Farida Frihartini",
      }, // [cite: 2]
      {
        title:
          "KNOWLEDGE MANAGEMENT AS A CATALYST FOR ORGANIZATIONAL PERFORMANCE (Empirical Study on Private Universities in the Pantura Region of West Java)",
        name: "Rita Sri Silvia Pamuji",
      }, // [cite: 2]
      {
        title:
          "EXPLORING THE LINK BETWEEN ENTREPRENEURIAL LEADERSHIP AND INNOVATION SUCCESS: EVIDENCE FROM SMALLAND MEDIUM ENTERPRISES",
        name: "Iqbal Ramadhani Fuadiputra",
      }, // [cite: 2]
    ],
  },
  // BOR 7
  {
    room: 7,
    presenters: [
      {
        title:
          "THE EFFECT OF GOOD CORPORATE GOVERNANCE AND INTELLECTUAL CAPITAL ON COMPANY VALUE (In Index 100 companies listed on the Indonesia Stock Exchange for the 2019-2023 period)",
        name: "Wahyu Setiyono",
      }, // [cite: 2]
      {
        title:
          "FROM FRUGALITY TO INVESTMENT THE ROLE OF FINANCIAL SELF-EFFICACY IN SHAPING INVESTMENT DECISION",
        name: "Risma",
      }, // [cite: 2]
      {
        title:
          "Analyzing The Impact Of Al-Based Digital Transformation and E-Marketing on The Sustainability and Competitiveness of MSMEs in South Sulawesi",
        name: "Michele Jenny Mahakena",
      }, // [cite: 2]
      {
        title:
          "THE INFLUENCE OF FEAR OF MISSING OUT (FOMO) AND TIKTOK SOCIAL MEDIA MARKETING ON IMPULSIVE BUYING OF ADIDAS SAMBA PRODUCTS AMONG STUDENTS OF THE UNIVERSITY OF MUHAMMADIYAH TANGERANG",
        name: "Dini",
      }, // [cite: 3]
      {
        title:
          "Improving the Quality of Service of Perumda Tirta Pakuan, Bogor City: Quantitative Analysis Using Descriptive Statistics",
        name: "Ananda Tory Diandra.",
      }, // [cite: 4]
      {
        title:
          "THE EFFECT OF REWARD AND PUNISHMENT SYSTEMS ON EMPLOYEE PERFORMANCE AT PT. ABADI BENUA CEMERLANG",
        name: "Siti Nurul Acnun Nisa",
      }, // [cite: 5, 6]
      {
        title:
          "ANALYSIS OF THE EFFECTIVENESS OF BISKITA TRANS PAKUAN ADVERTISING ON INSTAGRAM SOCIAL MEDIA",
        name: "Siti Hani Aminah",
      }, // [cite: 7]
      {
        title:
          "Local Herbal Tea Product Promotion Strategy: Case Study In Tajurhalang Village",
        name: "Yunita Aulia Putri",
      }, // [cite: 7]
      {
        title:
          "Investigating Factors Influencing Green Purchase Intention: The Moderating Role of Green Brand Knowledge",
        name: "Bernadette Carla Gita Apriani",
      }, // [cite: 7]
      {
        title:
          "The Power of Green: How Marketing Mix Shapes Brand Loyalty at The Body Shop Indonesia",
        name: "Desak Gde Pravina Dianthi",
      }, // [cite: 7]
      {
        title:
          "A Systematic Literature Review On FactorsInfluencing Repurchase Intention Of Organic Food In Bali",
        name: "Made Wara Sastra Harta",
      }, // [cite: 7]
      {
        title:
          "The Role of Brand Love in Mediating the Influence of Brand Experience and Brand Satisfaction on Brand Loyalty",
        name: "Ni Putu Avu Supriati",
      }, // [cite: 7]
      {
        title:
          "Exploring the Impact of Fear of Missing Out on Compulsive Buying: The Moderating Role of Materialism",
        name: "Frifalia Fresinta",
      }, // [cite: 7]
      {
        title:
          "THE EFFECT OF BRAND IMAGE AND PRODUCT QUALITY ON THE PURCHASE DECISION OF MAYBELLINE MASCARA COSMETICS (Case Study on Students of the Faculty of Economics and Business, Muhammadiyah University of Tangerang)",
        name: "Ayu Nur Jamilah",
      }, // [cite: 7]
    ],
  },
  // BOR 8
  {
    room: 8,
    presenters: [
      {
        title:
          "THE INFLUENCE OF WORK ENVIRONMENT INDIVIDUALCHARACTERISTICS, AND WORK CULTURE ON EMPLOYEEPERFORMANCE AT PT. INDONESIA TOYOBO FILM SOLUTIONS",
        name: "Dwi Ambarwati",
      }, // [cite: 3, 4]
      {
        title:
          "EVALUATION OF COLD CHAIN AWARENESS AND TECHNOLOGY ADOPTION IN MULTI INDUSTRY.A DESCRIPTIVE ANALYSIS",
        name: "Imam Jaelani",
      }, // [cite: 4]
      {
        title:
          "The Influence of Work Quality, Work Supervision and Work Environment on Employee Productivity at PT Premink Abadi Indonesia",
        name: "Sinta Nurfadilah",
      }, // [cite: 6]
      {
        title:
          "THE EFFECT OF SERVICE QUALITY AND PRODUCT INNOVATION ON PURCHASING DECISIONS (Case Study at Es Teh Indonesia Banjar Wijava Tangerang City Outlet)",
        name: "Putri Fia Apriani",
      }, // [cite: 8]
      {
        title:
          "The Influence of Brand Ambassador, Brand Image, and Product Quality on Purchasing Decisions of Whitelah Skincare Products",
        name: "Elen Angelica",
      }, // [cite: 8]
      {
        title:
          "THE INFLUENCE OF CONTENT MARKETING AND BRAND AUTHENTICITY ON CONTINUOUS PURCHASE INTENTION ON PRODUCTS FACETOLOGY ON THE TIKTOK APPLICATION IN TANGERANG CITY",
        name: "Nurul Fatimah",
      }, // [cite: 8]
      {
        title:
          "The Role of Customer Attitudes in The Relationship of Green Product and Green Awareness Toward Purchase Intention In Surabaya",
        name: "Jesselyn Beatrice Hartanto",
      }, // [cite: 8]
      {
        title:
          "Strategic Approaches to Boost Offline Performancesin the Perfumery Industry (A Case Study of Nifty Twice)",
        name: "Syifa Nafiah",
      }, // [cite: 8]
      {
        title:
          "Supply Chain Development Strategy to Improve Street Vendor Competitiveness",
        name: "Resa Angraeni",
      }, // [cite: 8]
      {
        title:
          "APPLICATION OF SWOT ANALYSIS AND BLUE OCEAN STRATEGY TO CREATE NEW MARKET SPACE FOR PINTAR STARTUP",
        name: "Naufal Hanif Arsalan",
      }, // [cite: 8]
      {
        title:
          "Transformation of Management Policy and StrategicCommunication Merdeka Belajar (Emancipated Learning): An Evaluation Study of Branding and Social Media in Public Sector",
        name: "Anantasha Titisania Rimadewi",
      }, // [cite: 8, 9]
      {
        title:
          "The Influence of Trend, Brand Image. Co-Branding. and Product Design on Buying Interest of Uniqlo Products",
        name: "Gregorius Yoga Kurniadi",
      }, // [cite: 10]
      {
        title:
          "Purchasing Decisions in Generation Z: The Role of Green Advertising, Green Packaging, and Green Price",
        name: "Ivena Gloria Sahetapy",
      }, // [cite: 10]
      {
        title:
          "The Influence of Experiential Marketing, Product Innovation, Brand Image, and Emotional Branding on Customer Loyalty of McDonald's",
        name: "Agnes Anggarawati",
      }, // [cite: 10]
    ],
  },
  // BOR 9
  {
    room: 9,
    presenters: [
      {
        title:
          "THE EFFECT OF PROFITABILITY AND CASH GROWTH ON COMPANY VALUE MEDIATED BY DIVIDEND POLICY (Empirical Studi On Energy Sector Companies Listed On The IDX in 2019-2024)",
        name: "Nia Wenty Agustin",
      }, // [cite: 10]
      {
        title:
          "The influence of world oil prices, world gold prices, inflation, exchange rates and interest rates on the composite stock price index for the period 2014-2023",
        name: "Adelia Amanda Putri",
      }, // [cite: 10]
      {
        title:
          "THE INFLUENCE OF INTELLECTUAL CAPITAL AND GOOD CORPORATE GOVERNANCE ON MANUFACTURING COMPANIES IN THE CONSUMER GOODS SUBSECTOR LISTED ON THE INDONESIA STOCK EXCHANGE FOR THE PERIOD 2019-2023",
        name: "Feni Fitriastuti",
      }, // [cite: 10, 11]
      {
        title:
          "Comparative Evaluation of Portofolio Performance: A Study of Cryptocurrency andStock (Study Case Bitwise10 Crypto Index and LQ45 Index)",
        name: "Heru Fachrezie",
      }, // [cite: 10]
      {
        title:
          "Sustainable Tourism As A Catalyst For Achieving Sdgs In Indonesia",
        name: "Dicky Satria Ramadhan",
      }, // [cite: 10]
      {
        title:
          "The Use of Digital Technology in Micro Business Operations: A Conceptual Study on Utilizing Simple Financial Applications",
        name: "Dave Christian Tjora",
      }, // [cite: 10]
    ],
  },
];
// --- END OF DATA FOR BREAK OUT ROOMS ---

const breakoutRoomRules = [
  "Ensure your laptop or device is fully charged or connected to a power source to avoid any interruptions during the event.",
  "A stable connection is essential for a smooth experience. Please check your connection before the event begins.",
  "It is recommended to use headphones or earphones for better audio quality and to minimize background noise. Please join the zoom meeting 15 minutes earlier to ensure everything is in order before the event starts.",
  "Please make sure your powerpoint presentation is ready and has been prepared properly.",
  "Each participant will be given 10-15 minutes for their presentation including the Q&A session.",
  "Participants are allowed to ask questions to other participants regarding their presentation.",
  "After completing your presentation, Please do not leave the zoom meeting.",
  "The event will be facilitated by a moderator who will guide the proceedings.",
  "While inside the zoom meeting, turning on your camera and using a virtual background is mandatory.",
  "All participants must join all the session and are prohibited to leave the zoom meeting or the breakout room before any further instructions.",
  "All participants must speak and ask questions formally and properly, not using inappropriate language throughout the meeting including cursing, mocking, and making fun of one another.",
  "All participants must behave respectfully and well mannered to others.",
  "Ensure that your microphone is muted during the conference and only turn it on when asking questions or during presentations. Please wait after the presenter directs you to open your microphone.",
  "Ensure that you enter the right BOR (Break Out Room) according to the instructions that were already given.",
  "All participants must have their camera’s on and in a proper position with their faces show clearly on screen.",
  "Participants who are not present and who are leaving the zoom meeting and BOR (Break Out Room) before instructed are disqualified immediately.",
  "All participants must not change their group members and all members must be present throughout the event until it finishes. The member that is not present will be disqualified immediately.",
  "All participant must use formal and proper attire during the event and presentation.",
  "Every team must attend conference session from the begining until the end and for the presetation session and also one person must represent the whole team.",
];

const Rundown = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bagian judul & info */}
        <div className="text-left mb-8">
          <div className="flex justify-between items-center w-full">
            {" "}
            {/* Container flex */}
            <a
              href="https://docs.google.com/uc?export=download&id=1eMpvc033pvxAS1Of0IFav3VFqVZ9BiJq"
              className="inline-block bg-gradient-to-r from-[#345327] to-[#A3953B] text-white py-2 px-6 rounded-lg transition-colors hover:opacity-90 text-xs sm:text-sm" // Menyesuaikan padding dan ukuran teks untuk mobile
            >
              Download Rundown
            </a>
            <a
              href="https://docs.google.com/uc?export=download&id=1jt9mIlXDjcM5DfBSQ6n61FPKk6-yvZXj"
              className="inline-block bg-gradient-to-r from-[#345327] to-[#A3953B] text-white py-2 px-6 rounded-lg transition-colors hover:opacity-90 text-xs sm:text-sm" // Menyesuaikan padding dan ukuran teks untuk mobile
            >
              Download Guidebook
            </a>
          </div>

          {/* Logo */}
          <div className="py-4">
            <Image
              src="/logo.png"
              alt="ICOMBUS logo"
              width={200}
              height={50}
              priority
            />
          </div>

          {/* Judul */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#345327]">
            Rundown - Main Session
          </h1>
          <p className="text-gray-600 font-semibold">Online: Zoom</p>
          <p className="text-gray-600 font-semibold mb-4">Date: 30 May 2025</p>
        </div>

        {/* Tabel rundown utama */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border border-[#1F4923] text-left text-xs sm:text-sm md:text-base">
            <thead className="bg-[#1F4923] text-white">
              <tr>
                <th className="p-3 border-r border-[#1F4923]">Start</th>
                <th className="p-3 border-r border-[#1F4923]">End</th>
                <th className="p-3 border-r border-[#1F4923]">Duration</th>
                <th className="p-3 border-r border-[#1F4923]">Venue</th>
                <th className="p-3">Activity</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {rundownData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-[#1F4923]">
                    {item.start}
                  </td>
                  <td className="p-3 border-b border-[#1F4923]">{item.end}</td>
                  <td className="p-3 border-b border-[#1F4923]">
                    {item.duration}
                  </td>
                  <td className="p-3 border-b border-[#1F4923]">
                    {item.venue}
                  </td>
                  <td className="p-3 border-b border-[#1F4923]">
                    {item.activity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rundown Breakout Room (BOR) */}
        <div className="text-left mb-8">
          <a
            href="https://docs.google.com/uc?export=download&id=1g6ZTONhL7U5NL19So4h0O1hVEj0vlLtd"
            className="inline-block bg-gradient-to-r from-[#345327] to-[#A3953B] text-white py-2 px-6 rounded-lg transition-colors hover:opacity-90"
          >
            Download Break Out Room Details
          </a>

          {/* Judul */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#345327] mt-8">
            Rundown - Break Out Rooms (13:05 - 15:20)
          </h1>
          <p className="text-gray-600 font-semibold">Online: Zoom</p>
          <p className="text-gray-600 font-semibold mb-4">Date: 30 May 2025</p>
          {/* Breakout Room Rules Section */}
          <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-[#3f673b] mb-3">
              Breakout Room Rules
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
              {breakoutRoomRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
          {/* End of Breakout Room Rules Section */}
        </div>

        {/* Tabel BOR */}
        {borData.map((bor, borIndex) => (
          <div key={borIndex} className="overflow-x-auto mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#3f673b]">
              Break Out Room {bor.room}
            </h2>
            <table className="min-w-full border border-[#1F4923] text-left text-xs sm:text-sm md:text-base">
              <thead className="bg-[#1F4923] text-white">
                <tr>
                  <th className="p-3 border-r border-[#1F4923] w-3/5">TITLE</th>
                  <th className="p-3 w-2/5">NAME</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {bor.presenters.map((presenter, presenterIndex) => (
                  <tr key={presenterIndex} className="hover:bg-gray-50">
                    <td className="p-3 border-b border-[#1F4923]">
                      {presenter.title}
                    </td>
                    <td className="p-3 border-b border-[#1F4923]">
                      {presenter.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Rundown;
