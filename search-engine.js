/*
 * ==========================================
 * Universal Carbon Bridge Explorer
 * Smart Citation Search Engine & Database
 * ==========================================
 */

// --- The Official Citations Register ---
const CITATIONS = {
  1: {
    id: 1,
    title: "Regulation (EU) 2023/956 on Carbon Border Adjustment Mechanism",
    source: "European Parliament & Council",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0956"
  },
  2: {
    id: 2,
    title: "State and Trends of Carbon Pricing 2025",
    source: "World Bank Group",
    url: "https://openknowledge.worldbank.org/handle/10986/41595"
  },
  3: {
    id: 3,
    title: "Paris Agreement Article 6 Cooperative Implementation Guidance",
    source: "UNFCCC",
    url: "https://unfccc.int/process/the-paris-agreement/cooperative-implementation"
  },
  4: {
    id: 4,
    title: "US Inflation Reduction Act (IRA) Section 45Q Carbon Capture Credit",
    source: "US Environmental Protection Agency (EPA)",
    url: "https://www.epa.gov/greenhouse-gas-reduction-fund"
  },
  5: {
    id: 5,
    title: "China National Carbon Emissions Trading Scheme Management Rules",
    source: "Ministry of Ecology and Environment (MEE), PRC",
    url: "http://english.mee.gov.cn/"
  },
  6: {
    id: 6,
    title: "India Carbon Credit Trading Scheme (CCTS) Implementation Framework",
    source: "Bureau of Energy Efficiency (BEE), Government of India",
    url: "https://beeindia.gov.in/"
  },
  7: {
    id: 7,
    title: "REDD+ Brazil Forest Code Safeguards and Voluntary Credits",
    source: "National Registry of Reducing Emissions from Deforestation (CONREDD+)",
    url: "https://www.gov.br/mma/pt-br"
  },
  8: {
    id: 8,
    title: "Voluntary Carbon Market Integrity Principles (VCMI)",
    source: "Voluntary Carbon Markets Integrity Initiative",
    url: "https://vcminitiative.org/"
  },
  9: {
    id: 9,
    title: "Bridging the Gap: The Role of Digital Carbon Registries and Web3 Tokens",
    source: "World Economic Forum (WEF)",
    url: "https://www.weforum.org/reports/"
  },
  10: {
    id: 10,
    title: "Saudi Greenhouse Gas Crediting and Offsetting Mechanism (GCRM) Guidelines",
    source: "Ministry of Energy, Kingdom of Saudi Arabia",
    url: "https://www.moenergy.gov.sa/"
  },
  11: {
    id: 11,
    title: "UAE Net Zero 2050 Strategic Initiative & Environmental Registries Charter",
    source: "Ministry of Climate Change and Environment, United Arab Emirates",
    url: "https://www.moccae.gov.ae/"
  },
  12: {
    id: 12,
    title: "ADGM FSRA Environmental Instrument Rules & Air Carbon Exchange Listing Standards",
    source: "Abu Dhabi Global Market Financial Services Regulatory Authority",
    url: "https://www.adgm.com/"
  }
};

// --- The Knowledge Base Q&A Dataset ---
const KNOWLEDGE_BASE = [
  {
    id: "what-is-carbon-bridge",
    tags: ["concept", "definition", "carbon bridge", "bridge", "overview", "what is"],
    question: "What exactly is a Carbon Bridge?",
    answer: "A <strong>Carbon Bridge</strong> is a multi-dimensional regulatory, financial, and technological mechanism that connects disjointed carbon systems to ensure a unified path to net-zero [2]. It acts as a connector in four key ways: first, by linking different carbon registries (like traditional verifiers Verra/Gold Standard with digital Web3 platforms) to increase credit liquidity [9]; second, by establishing border controls like the EU CBAM to equalize carbon costs internationally and prevent emissions leakage [1]; third, by enabling sovereign emissions trading between countries under Article 6 of the Paris Agreement [3]; and fourth, by facilitating industrial transitions using bridging technologies like CCS or green hydrogen to cross from high-emission fossil dependency to clean operations [4].",
    citations: [1, 2, 3, 4, 9]
  },
  {
    id: "cbam-concept",
    tags: ["cbam", "europe", "border", "leakage", "tariff", "import"],
    question: "What are the rules and objectives of the EU Carbon Border Adjustment Mechanism (CBAM)?",
    answer: "The EU CBAM is a border carbon tariff designed under <strong>Regulation (EU) 2023/956</strong> to prevent 'carbon leakage' [1]. Carbon leakage occurs when EU-based companies move carbon-heavy production to countries with weaker climate policies, or when domestic products are replaced by more carbon-intensive imports. CBAM bridges this gap by charging an equivalent carbon price on specific imported goods (steel, cement, aluminum, fertilizers, hydrogen, and electricity) based on their embedded emissions [1]. Importers must register with the CBAM registry, monitor and report direct and indirect emissions, and purchase virtual 'CBAM certificates' matched to the prevailing weekly price of EU ETS allowances [1].",
    citations: [1]
  },
  {
    id: "cbam-sop",
    tags: ["cbam", "sop", "procedure", "importer", "steps", "how to"],
    question: "What is the step-by-step SOP for an importer to comply with EU CBAM?",
    answer: "To comply with the EU CBAM, importers must follow a strict Standard Operating Procedure (SOP) [1]:<br><br>1. <strong>Registration:</strong> Apply for the status of 'Authorized CBAM Declarant' via the official EU CBAM Registry portal.<br>2. <strong>Monitoring & Calculation:</strong> Coordinate with overseas manufacturers to measure and verify the exact embedded greenhouse gas emissions (tonnes of CO₂ equivalent per tonne of product) in accordance with EU monitoring rules.<br>3. <strong>Quarterly Declarations:</strong> Submit a CBAM declaration every quarter detailing the quantities of imported goods and their verified emissions.<br>4. <strong>Certificate Reconciliation:</strong> Purchase virtual CBAM certificates from the EU registry. Importers must surrender certificates matching the quantity of embedded emissions by May 31st of each calendar year [1].",
    citations: [1]
  },
  {
    id: "article-6-sovereign",
    tags: ["article 6", "paris agreement", "sovereign", "unfccc", "global", "itmo"],
    question: "How do sovereign countries bridge emissions using Article 6 of the Paris Agreement?",
    answer: "Article 6 of the Paris Agreement establishes the ultimate framework for international carbon market bridging [3]. Under <strong>Article 6.2</strong>, countries can enter bilateral or multilateral agreements to transfer carbon credits known as Internationally Transferred Mitigation Outcomes (ITMOs) to meet their Nationally Determined Contributions (NDCs) [2][3]. The key rule is 'Corresponding Adjustment'—meaning if Country A sells an ITMO to Country B, Country A must add that emission reduction back to its national carbon ledger to prevent double-counting [3]. <strong>Article 6.4</strong> creates a centralized UN-governed carbon credit mechanism replacing the old Kyoto Clean Development Mechanism (CDM) to authorize project-level international offsets [3].",
    citations: [2, 3]
  },
  {
    id: "us-ira-credits",
    tags: ["usa", "ira", "45q", "subsidy", "sequestration", "tax"],
    question: "What rules govern the Carbon Bridge in the United States?",
    answer: "The United States does not have a federal carbon tariff or carbon price, but instead utilizes a subsidy-driven carbon bridge anchored in the <strong>Inflation Reduction Act (IRA)</strong> [4]. A central law is <strong>Section 45Q</strong>, which provides generous tax credits for carbon oxide sequestration. Under 45Q, developers receive up to $85 per tonne for captured carbon stored securely in deep geological formations, or up to $180 per tonne for carbon captured directly from the ambient air (Direct Air Capture) [4]. These credits can be transferred or paid directly for the first 5 years, acting as a massive financial bridge attracting global capital to carbon infrastructure. Regional compliance is bridged by state-level markets like the California Cap-and-Trade and the Regional Greenhouse Gas Initiative (RGGI) [2].",
    citations: [2, 4]
  },
  {
    id: "china-ets-ccer",
    tags: ["china", "ets", "ccer", "national ets", "power sector"],
    question: "How does China's National ETS and CCER system work?",
    answer: "China operates the world's largest carbon compliance market by volume, managing emissions from its massive thermal power sector [5]. Managed by the Ministry of Ecology and Environment under national regulations, the <strong>National ETS</strong> operates on an intensity-based allowance allocation, rather than an absolute cap [2][5]. To bridge the compliance market with local development, China employs the <strong>China Certified Emission Reduction (CCER)</strong> voluntary program. Under this rule, compliance entities can offset up to 5% of their national ETS obligation using certified credits from voluntary projects like forestry, renewable energy, and methane capture [5]. This provides a vital economic bridge transferring funds from heavy industry to rural and green projects [2].",
    citations: [2, 5]
  },
  {
    id: "india-ccts",
    tags: ["india", "ccts", "bee", "voluntary", "compliance"],
    question: "What is India's Carbon Credit Trading Scheme (CCTS)?",
    answer: "India is rapidly building its domestic carbon bridge through the <strong>Carbon Credit Trading Scheme (CCTS)</strong>, established under the amended Energy Conservation Act [6]. Governed by the Bureau of Energy Efficiency (BEE), CCTS is designed to transition India's carbon market from a voluntary standard to a unified national compliance registry [6]. Under the initial phases, the government establishes mandatory emission intensity targets for obligated sectors (such as iron, steel, cement, and petrochemicals). Entities that exceed their reduction targets are issued Carbon Credit Certificates (CCCs), which they can trade on dedicated domestic exchanges with entities that fall short of their targets [6]. This scheme serves as a structural bridge to align Indian industry with global standards like the EU CBAM.",
    citations: [6]
  },
  {
    id: "brazil-forest-redd",
    tags: ["brazil", "forest", "redd", "voluntary", "offsets", "amazon"],
    question: "What are the rules and policies for carbon bridging in Brazil?",
    answer: "Brazil's carbon bridge mechanism is heavily focused on nature-based solutions, particularly REDD+ (Reducing Emissions from Deforestation and Forest Degradation) in the Amazon [7]. Guided by the <strong>Brazil Forest Code</strong> and CONREDD+ policies, the carbon bridge connects private land conservation with voluntary carbon registries [7]. Brazil's policies incentivize landowners to preserve native forests beyond the mandatory Legal Reserve limits by allowing the generation of carbon offsets [7]. The country is currently establishing a national registry to track credits generated via jurisdictional programs, ensuring that carbon credits sold to international buyers under Article 6 of the Paris Agreement comply with strict sovereign monitoring guidelines and respect indigenous lands [2][7].",
    citations: [2, 7]
  },
  {
    id: "digital-blockchain-bridge",
    tags: ["blockchain", "token", "digital", "verra", "toucan", "c3"],
    question: "How does digital token carbon bridging work?",
    answer: "Digital carbon bridging is a Web3/DeFi innovation that transfers environmental assets onto a blockchain [9]. In this process, a developer holds traditional credits in verified registries (e.g. Verra, Gold Standard) [8]. A specialized carbon bridge protocol (such as Toucan Protocol or C3) verifies these credits and locks or retires them on the traditional registry with a public note stating they have been bridged [9]. The protocol then mints a digital twin—an ERC-20 token representing 1 tonne of carbon offset—on a public blockchain [9]. These tokenized credits can be pooled to create liquid environmental index tokens (like BCT or NCT), traded permissionlessly, integrated into smart contracts, or retired transparently on-chain, solving liquidity bottlenecks in the legacy voluntary market [9].",
    citations: [8, 9]
  },
  {
    id: "leakage-definition",
    tags: ["leakage", "leak", "border", "competitiveness", "shift"],
    question: "What is carbon leakage and how does a bridge prevent it?",
    answer: "<strong>Carbon leakage</strong> is the phenomenon where companies operating under strict emissions limits (like the EU ETS) transfer their operations to countries with lax regulations to avoid carbon costs [2]. This results in no net reduction in global emissions, merely a geographic shift in pollution, while harming the domestic economy. A carbon bridge, specifically a Carbon Border Adjustment Mechanism (CBAM), prevents leakage by imposing a matching charge on imported carbon-intensive products [1]. By applying a level carbon cost regardless of origin, it removes the financial incentive for industries to relocate, protects local competitive interests, and encourages exporting countries to establish their own domestic carbon pricing bridges to avoid the border tariff [1][2].",
    citations: [1, 2]
  },
  {
    id: "gcc-carbon-bridge",
    tags: ["gcc", "middle east", "saudi", "uae", "cce", "abatement", "gulf"],
    question: "How does the carbon bridge framework operate in the GCC and Middle East?",
    answer: "Carbon bridging in the GCC and Middle East is structurally anchored in the <strong>Circular Carbon Economy (CCE)</strong> framework [10]. Rather than viewing carbon solely as a pollutant to be taxed, CCE treats carbon as a valuable industrial asset through the 4 Rs: <strong>Reduce</strong> emissions using renewables and energy efficiency, <strong>Reuse</strong> captured carbon as feedstock for chemicals, <strong>Recycle</strong> carbon into clean fuels, and <strong>Remove</strong> carbon via Direct Air Capture (DAC) and deep geological storage [10][11]. This conceptual bridge allows the region's massive energy infrastructure to transition smoothly by creating export-ready low-carbon commodities, such as blue ammonia and green hydrogen, bridged to international markets via Article 6 sovereign ledgers [3][10].",
    citations: [3, 10, 11]
  },
  {
    id: "saudi-gcrm",
    tags: ["saudi", "gcrm", "riyadh", "compliance", "offset", "cce"],
    question: "What is the Saudi Greenhouse Gas Crediting & Offsetting Mechanism (GCRM)?",
    answer: "The <strong>Greenhouse Gas Crediting and Offsetting Mechanism (GCRM)</strong> is Saudi Arabia's official national carbon registry established by the Ministry of Energy [10]. Operating in alignment with the Saudi Green Initiative (SGI), the GCRM provides a highly regulated, sovereign-approved platform for both public and private entities to register emissions reduction projects [10]. Verified carbon credits are issued based on strict monitoring, reporting, and verification (MRV) protocols [11]. These credits can be utilized for national climate target compliance, traded in domestic voluntary markets, or exported as Internationally Transferred Mitigation Outcomes (ITMOs) under Article 6 of the Paris Agreement, provided a corresponding adjustment is applied by the government [3][10].",
    citations: [3, 10, 11]
  },
  {
    id: "adgm-acx-rules",
    tags: ["adgm", "acx", "uae", "token", "exchange", "registry", "abu dhabi"],
    question: "How does the Abu Dhabi Global Market (ADGM) Air Carbon Exchange (ACX) work?",
    answer: "The <strong>Air Carbon Exchange (ACX)</strong> in Abu Dhabi Global Market (ADGM) is a pioneering environmental asset exchange [12]. Under the ADGM Financial Services Regulatory Authority (FSRA), environmental instruments (like carbon credits) are legally classified as financial instruments [12]. This allows ACX to operate as a fully regulated exchange where traditional carbon credits from registries like Verra or Gold Standard are locked and digitally tokenized [9][12]. These tokenized carbon assets are traded 24/7 with institutional-grade clearing, providing maximum liquidity and price discovery for global corporate buyers seeking to manage their carbon liability [12].",
    citations: [9, 12]
  }
];

// --- Simple Client-side TF-IDF / Term Density Search Algorithm ---
function searchCarbonBridge(query) {
  if (!query || typeof query !== "string") {
    return {
      success: false,
      query: "",
      results: []
    };
  }

  // Preprocess query: lowercase, strip punctuation, split into terms
  const cleanQuery = query.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
  const queryTerms = cleanQuery.split(/\s+/).filter(term => term.length > 2); // filter short words

  if (queryTerms.length === 0) {
    // If query is very short or all stopwords, try exact match on full string
    queryTerms.push(cleanQuery.trim());
  }

  // Common stop words to exclude from weighting
  const stopWords = ["the", "how", "what", "does", "that", "this", "with", "from", "your", "under", "about", "rules", "laws"];

  const filteredQueryTerms = queryTerms.filter(term => !stopWords.includes(term));

  // Score each Q&A block
  const scoredResults = KNOWLEDGE_BASE.map(item => {
    let score = 0;
    
    // Tag matching: massive boost
    item.tags.forEach(tag => {
      filteredQueryTerms.forEach(term => {
        if (tag === term) {
          score += 15;
        } else if (tag.includes(term) || term.includes(tag)) {
          score += 5;
        }
      });
    });

    // Question matching: high weight
    const cleanQuestion = item.question.toLowerCase();
    filteredQueryTerms.forEach(term => {
      if (cleanQuestion.includes(term)) {
        score += 8;
        // Exact boundary match
        const regex = new RegExp("\\b" + term + "\\b", "g");
        const count = (cleanQuestion.match(regex) || []).length;
        score += count * 4;
      }
    });

    // Answer text matching: standard weight
    const cleanAnswer = item.answer.toLowerCase();
    filteredQueryTerms.forEach(term => {
      if (cleanAnswer.includes(term)) {
        score += 3;
        const regex = new RegExp("\\b" + term + "\\b", "g");
        const count = (cleanAnswer.match(regex) || []).length;
        score += count * 2;
      }
    });

    return {
      item: item,
      score: score
    };
  });

  // Filter out zero scores and sort by score descending
  const results = scoredResults
    .filter(res => res.score > 0)
    .sort((a, b) => b.score - a.score);

  if (results.length > 0) {
    return {
      success: true,
      query: query,
      results: results.slice(0, 3) // Return top 3 matches
    };
  }

  // --- Fallback Mechanism ---
  // If no direct Q&A matches, construct a synthesized general response
  const generalOverview = KNOWLEDGE_BASE.find(item => item.id === "what-is-carbon-bridge");
  
  return {
    success: true,
    isFallback: true,
    query: query,
    results: [
      {
        item: {
          id: "general-fallback",
          question: `Resource Search: "${query}"`,
          answer: `We couldn't find a direct matching regulation in our local registry for <strong>"${query}"</strong>. However, global carbon bridges under the Paris Agreement and border structures generally follow standard legal pathways [2]. Here is a fundamental overview of carbon bridge operations:<br><br>A <strong>Carbon Bridge</strong> functions to resolve cross-border carbon pricing disparities and registry disconnects [2][9]. For compliant operations like the <strong>EU CBAM</strong>, international trade emissions must be verified, accounted for, and offset with matching compliance certificates [1]. For voluntary and nature-based offsets (such as forestry in <strong>Brazil</strong> or clean energy in <strong>India</strong>), projects must undergo strict verification according to official registries like Verra, Gold Standard, or state programs [6][7]. We recommend exploring our regional tabs to view specific SOPs, or checking out official climate policy portals.`,
          citations: [1, 2, 6, 7, 9]
        },
        score: 1
      }
    ]
  };
}

// Helper to highlight terms in returned HTML string
function highlightKeywords(text, query) {
  if (!query) return text;
  
  const cleanQuery = query.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
  const terms = cleanQuery.split(/\s+/).filter(t => t.length > 3 && !["what", "does", "rules", "laws", "how", "with", "under", "about"].includes(t));
  
  if (terms.length === 0) return text;
  
  let highlightedText = text;
  
  // To avoid breaking HTML tags (like <strong> or <br>), we extract and replace carefully
  terms.forEach(term => {
    // Escape regex chars
    const escapedTerm = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    // Regex that matches the keyword outside of HTML tag attributes (basic protection)
    const regex = new RegExp(`(?<!<[^>]*)\\b(${escapedTerm})(?!\\b[^>]*>)`, 'gi');
    highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
  });
  
  // Format citations [N] into interactive markers
  highlightedText = highlightedText.replace(/\[([1-9])\]/g, '<span class="cit-mark" onclick="openCitationDetails($1)">$1</span>');
  
  return highlightedText;
}

// Retrieve citation details
function getCitationMetadata(id) {
  return CITATIONS[id] || null;
}
