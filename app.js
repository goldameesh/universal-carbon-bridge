/*
 * ==========================================
 * Universal Carbon Bridge Explorer
 * Interactive Application & Canvas Engine
 * ==========================================
 */

// --- Regional Data Store for Dashboard Swapping ---
const REGIONAL_DATA = {
  global: {
    name: "Global Framework",
    flag: "🌍",
    element: "Sovereign carbon linking under the Paris Agreement Article 6 treaty system.",
    laws: "Paris Agreement, Article 6, Clauses 6.2 and 6.4 [3].",
    clauses: "<strong>ITMOs (Internationally Transferred Mitigation Outcomes):</strong> Bilateral trading mechanism that allows countries to sell excess emission reductions [2].<br><br><strong>Corresponding Adjustment:</strong> A mandatory ledger balancing rule that prevents double-counting by subtracting emissions from the buyer's tally and adding them back to the seller's [3].",
    sop: [
      { num: "1", title: "Bilateral Treaty", desc: "Two sovereign nations sign an Article 6.2 agreement establishing trade protocols." },
      { num: "2", title: "Project Validation", desc: "A decarbonization project in the host country is registered and verified under strict sovereign MRV." },
      { num: "3", title: "ITMO Authorization", desc: "The host country authorizes the emission reductions as ITMOs and applies a Corresponding Adjustment." },
      { num: "4", title: "Transfer & Credit", desc: "Credits are digitally transferred to the buyer country's registry to meet its official climate targets (NDCs)." }
    ],
    color: "#3b82f6",
    colorRgb: "59, 130, 246"
  },
  eu: {
    name: "European Union",
    flag: "🇪🇺",
    element: "The Carbon Border Adjustment Mechanism (CBAM) linking imports to the EU ETS price [1].",
    laws: "Regulation (EU) 2023/956 on Carbon Border Adjustment Mechanism [1].",
    clauses: "<strong>Import Equality Clause:</strong> Requires importers of carbon-intensive goods (Steel, Cement, Aluminum, Fertilizers, Hydrogen, Electricity) to buy virtual CBAM certificates matching the weekly EU Emissions Trading System price [1].<br><br><strong>Phase-Out Rule:</strong> Coordinates with the gradual phase-out of free carbon allowances allocated to EU domestic industries by 2034.",
    sop: [
      { num: "1", title: "CBAM Registry", desc: "The importer registers as an Authorized CBAM Declarant on the official EU commission portal." },
      { num: "2", title: "Calculate Embeds", desc: "Coordinate with non-EU manufacturers to calculate direct & indirect emissions embedded in the imported goods." },
      { num: "3", title: "Quarterly Report", desc: "Submit quarterly declarations detailing imported quantities, embedded carbon, and any carbon price already paid abroad." },
      { num: "4", title: "Surrender Certificates", desc: "By May 31st each year, surrender purchased CBAM certificates matching the net verified embedded emissions." }
    ],
    color: "#06b6d4",
    colorRgb: "6, 182, 212"
  },
  us: {
    name: "United States",
    flag: "🇺🇸",
    element: "Tax incentives and industrial carbon-reduction subsidies paired with state compliance markets [4].",
    laws: "Inflation Reduction Act (IRA) Section 45Q & state-level Cap-and-Trade laws (California, RGGI) [2][4].",
    clauses: "<strong>Section 45Q Credits:</strong> Provides massive federal tax credits per metric ton of carbon captured and geologically sequestered ($85/ton) or utilized in direct air capture ($180/ton) [4].<br><br><strong>Transferability Clause:</strong> Allows clean energy developers to sell or transfer their tax credits to third-party corporate buyers for direct cash.",
    sop: [
      { num: "1", title: "EPA Permitting", desc: "Obtain Class VI underground injection control permits from the EPA for geological carbon storage wells." },
      { num: "2", title: "MRV Plan", desc: "Submit a strict Monitoring, Reporting, and Verification (MRV) plan to the EPA to verify secure carbon storage." },
      { num: "3", title: "Secure Capture", desc: "Capture industrial carbon or ambient CO₂ and inject it deep geologically, monitoring for any leaks." },
      { num: "4", title: "Claim Credit", desc: "File Form 8933 with annual corporate tax filings to claim the 45Q credits or transfer them for cash." }
    ],
    color: "#3b82f6",
    colorRgb: "59, 130, 246"
  },
  china: {
    name: "China",
    flag: "🇨🇳",
    element: "Intensity-based National Compliance ETS bridged with voluntary forestry & green credits (CCERs) [5].",
    laws: "National Carbon Emissions Trading Scheme Management Regulations [5].",
    clauses: "<strong>Benchmark Allocation:</strong> Allowances are allocated based on generation intensity (emissions per unit of power produced), rather than an absolute cap [2][5].<br><br><strong>5% Offset Rule:</strong> Power generation companies can offset up to 5% of their compliance obligation using CCER credits.",
    sop: [
      { num: "1", title: "Allocation", desc: "Power plants receive annual carbon emission allowances based on their energy production output benchmarks." },
      { num: "2", title: "MRV Audit", desc: "Conduct annual carbon inventory audits, verified by certified independent third-party monitoring agencies." },
      { num: "3", title: "CCER Offsets", desc: "Acquire China Certified Emission Reduction (CCER) credits from approved forestry or methane projects." },
      { num: "4", title: "Settlement", desc: "Surrender allowances and up to 5% CCER offsets via the national carbon registry to achieve full compliance." }
    ],
    color: "#f59e0b",
    colorRgb: "245, 158, 11"
  },
  india: {
    name: "India",
    flag: "🇮🇳",
    element: "Structured domestic carbon market combining energy conservation targets with credit exchanges [6].",
    laws: "Energy Conservation (Amendment) Act & Carbon Credit Trading Scheme (CCTS) [6].",
    clauses: "<strong>Obligated Sectors Clause:</strong> Establishes mandatory carbon emission reduction targets for key heavy-industry sectors [6].<br><br><strong>CCC Generation:</strong> Companies that outperform their carbon intensity targets are awarded tradeable Carbon Credit Certificates (CCCs).",
    sop: [
      { num: "1", title: "Target Setting", desc: "Bureau of Energy Efficiency (BEE) assigns specific carbon reduction intensity targets to industrial plants." },
      { num: "2", title: "Annual Audit", desc: "Accredited energy auditors verify the plant's actual carbon emissions and energy savings." },
      { num: "3", title: "CCC Issuance", desc: "BEE reviews audit reports and authorizes the national registry to issue CCCs to outperforming plants." },
      { num: "4", title: "Exchange Trading", desc: "Obligated plants that miss targets purchase CCCs on domestic carbon exchanges to fulfill compliance." }
    ],
    color: "#8b5cf6",
    colorRgb: "139, 92, 246"
  },
  brazil: {
    name: "Brazil",
    flag: "🇧🇷",
    element: "Nature-based REDD+ credit generation and voluntary forest carbon bridging [7].",
    laws: "Brazil Forest Code & Jurisdictional REDD+ Safeguards Framework [7].",
    clauses: "<strong>Legal Reserve Incentives:</strong> Allows rural landowners who preserve more forest than the legally required baseline (up to 80% in the Amazon) to generate carbon offsets [7].<br><br><strong>Article 6 Authorization:</strong> Establishes rules for applying sovereign authorizations to voluntary credits for international trade.",
    sop: [
      { num: "1", title: "CAR Registry", desc: "Register land boundaries in the Rural Environmental Cadastre (CAR) to prove baseline ownership and legal compliance." },
      { num: "2", title: "Forest Inventory", desc: "Conduct professional remote-sensing and on-the-ground biomass measurements to quantify carbon stocks." },
      { num: "3", title: "Registry Audit", desc: "Undergo independent auditing by international registries (Verra/Gold Standard) to verify carbon credits." },
      { num: "4", title: "Tokenize / Sell", desc: "Sell verified carbon credits to global corporate buyers or bridge them digitally onto blockchains." }
    ],
    color: "#10b981",
    colorRgb: "16, 185, 129"
  },
  gcc: {
    name: "Middle East (GCC)",
    flag: "🇸🇦",
    element: "Sovereign Circular Carbon Economy (CCE) systems and environmental asset listing on the Air Carbon Exchange (ACX) [10][12].",
    laws: "Saudi Greenhouse Gas Crediting & Offsetting Mechanism (GCRM) and UAE Net Zero 2050 Strategic Charter [10][11].",
    clauses: "<strong>Circular Carbon Economy (CCE):</strong> Focuses on the '4 Rs' framework (Reduce emissions, Reuse carbon as industrial feedstocks, Recycle carbon via chemical synthesis, and Remove carbon through Direct Air Capture or CCS) [10].<br><br><strong>Environmental Instrument Rules:</strong> Regulates carbon credit tokens as financial instruments under Abu Dhabi Global Market (ADGM) FSRA rules, enabling international exchange listing [12].",
    sop: [
      { num: "1", title: "GCRM Registration", desc: "Initialize registry profile on the Saudi GCRM or UAE National Carbon Registry with verified corporate targets [10]." },
      { num: "2", title: "MRV Audit", desc: "Conduct third-party monitoring, reporting, and verification (MRV) of industrial carbon abatement or carbon capture [11]." },
      { num: "3", title: "ACX Tokenization", desc: "Digitally tokenize verified emissions reductions and list them on ADGM's Air Carbon Exchange (ACX) [12]." },
      { num: "4", title: "ITMO Export", desc: "Apply for sovereign Article 6 bilateral authorization to export credits as Internationally Transferred Mitigation Outcomes [3]." }
    ],
    color: "#d4af37",
    colorRgb: "212, 175, 55"
  }
};

// --- Canvas Carbon Bridge Animation Engine ---
let canvas, ctx;
let particles = [];
let rings = [];
let activePillar = "markets"; // Default pillar state: markets, border, sovereign, transition
let particleGenerationRate = 2; // rate of spawning

const PILLAR_THEMES = {
  markets: { color: "#06b6d4", colorRgb: "6, 182, 212" }, // cyan
  border: { color: "#f59e0b", colorRgb: "245, 158, 11" },   // gold
  sovereign: { color: "#3b82f6", colorRgb: "59, 130, 246" }, // blue
  transition: { color: "#8b5cf6", colorRgb: "139, 92, 246" } // purple
};

class Particle {
  constructor(x, y, stage = "fossil") {
    this.x = x;
    this.y = y;
    this.stage = stage; // fossil, bridging, netzero
    this.radius = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1.5 + 1.5;
    this.speedY = (Math.random() - 0.5) * 0.8;
    this.opacity = Math.random() * 0.5 + 0.3;
    
    // Fossil colors (dark soot / gray / amber combustion spikes)
    if (stage === "fossil") {
      this.color = Math.random() > 0.85 ? "rgba(245, 158, 11, 0.4)" : "rgba(100, 116, 139, 0.5)";
    }
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Boundary containment or stage changes
    const bridgeStart = canvas.width * 0.35;
    const bridgeEnd = canvas.width * 0.65;

    // State Transitions
    if (this.stage === "fossil" && this.x >= bridgeStart) {
      this.stage = "bridging";
      // Interaction depending on the active bridge pillar!
      if (activePillar === "border") {
        this.speedX *= 0.6; // slowing down as they encounter the border filter
      } else if (activePillar === "transition") {
        this.speedY += (canvas.height * 0.7 - this.y) * 0.05; // pull downwards into carbon storage
      }
    }

    if (this.stage === "bridging" && this.x >= bridgeEnd) {
      this.stage = "netzero";
      this.radius = Math.random() * 2 + 1;
      this.speedX = Math.random() * 1.2 + 2;
      this.speedY = -Math.random() * 1.5 - 0.5; // Float upwards to heaven/future
      this.opacity = Math.random() * 0.6 + 0.4;
    }

    // Pillar specific particle modifications
    if (this.stage === "bridging") {
      const theme = PILLAR_THEMES[activePillar];
      this.color = `rgba(${theme.colorRgb}, ${this.opacity})`;
    } else if (this.stage === "netzero") {
      // transformed particles (neon green & cyan)
      this.color = Math.random() > 0.4 ? "rgba(16, 185, 129, 0.7)" : "rgba(6, 182, 212, 0.7)";
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

    // Subtle glow for transformed net-zero particles
    if (this.stage === "netzero") {
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
    } else {
      ctx.shadowBlur = 0;
    }
  }
}

// Glowing Credit Rings floating on the clean side
class CreditRing {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 8 + 5;
    this.speedY = -Math.random() * 1 - 0.4;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.maxRadius = this.radius * 2;
    this.growRate = 0.05;
    this.opacity = 0.8;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.radius += this.growRate;
    this.opacity -= 0.005;
  }

  draw() {
    ctx.shadowBlur = 12;
    ctx.shadowColor = "rgba(16, 185, 129, 0.5)";
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(16, 185, 129, ${this.opacity})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    // Inner cyan dot
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
    ctx.fill();
    
    ctx.shadowBlur = 0;
  }
}

function initCanvas() {
  canvas = document.getElementById("bridgeCanvas");
  if (!canvas) return;
  
  ctx = canvas.getContext("2d");
  
  // Resize canvas to cover container
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Setup loop
  animate();
}

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const bridgeStart = canvas.width * 0.35;
  const bridgeEnd = canvas.width * 0.65;
  const centerY = canvas.height * 0.5;

  // --- DRAW PHYSICAL GRAPHICS ---

  // 1. Left Bank - The Fossil Era
  ctx.fillStyle = "rgba(20, 27, 45, 0.4)";
  ctx.fillRect(0, 0, bridgeStart - 20, canvas.height);
  
  // Combustion symbol stacks drawn programmatically
  ctx.strokeStyle = "rgba(100, 116, 139, 0.2)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(30, canvas.height);
  ctx.lineTo(30, canvas.height - 80);
  ctx.lineTo(45, canvas.height - 80);
  ctx.lineTo(45, canvas.height);
  ctx.stroke();

  // 2. Right Bank - The Net-Zero Future
  ctx.fillStyle = "rgba(16, 185, 129, 0.03)";
  ctx.fillRect(bridgeEnd + 20, 0, canvas.width - bridgeEnd - 20, canvas.height);
  
  // Green turbine programmatically drawn
  ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
  ctx.beginPath();
  ctx.moveTo(canvas.width - 50, canvas.height);
  ctx.lineTo(canvas.width - 50, canvas.height - 100);
  ctx.stroke();

  // 3. The Carbon Bridge Structure
  const theme = PILLAR_THEMES[activePillar];
  
  // Bridge deck line
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(bridgeStart - 20, centerY);
  ctx.lineTo(bridgeEnd + 20, centerY);
  ctx.stroke();

  // Bridge suspension cables linking to active pillar color
  ctx.strokeStyle = `rgba(${theme.colorRgb}, 0.15)`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(bridgeStart, centerY);
  ctx.quadraticCurveTo(canvas.width * 0.5, centerY - 60, bridgeEnd, centerY);
  ctx.stroke();

  // The Active Transformation Gate
  const gradient = ctx.createLinearGradient(canvas.width * 0.45, 0, canvas.width * 0.55, 0);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(0.5, `rgba(${theme.colorRgb}, 0.25)`);
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  
  ctx.fillStyle = gradient;
  ctx.fillRect(canvas.width * 0.45, 0, canvas.width * 0.1, canvas.height);

  // Border shield for CBAM
  if (activePillar === "border") {
    ctx.strokeStyle = `rgba(${theme.colorRgb}, 0.4)`;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.5, 0);
    ctx.lineTo(canvas.width * 0.5, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // --- PARTICLES ENGINE ---

  // Spawn raw carbon particles on the left
  if (Math.random() < particleGenerationRate) {
    particles.push(new Particle(0, centerY + (Math.random() - 0.5) * 60, "fossil"));
  }

  // Update & draw particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();

    // Spawning credit rings as particles emerge in netzero stage
    if (p.stage === "netzero" && Math.random() > 0.98 && rings.length < 25) {
      rings.push(new CreditRing(p.x, p.y));
    }

    // Garbage collection
    if (p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      particles.splice(i, 1);
    }
  }

  // Update & draw credit rings
  for (let i = rings.length - 1; i >= 0; i--) {
    const r = rings[i];
    r.update();
    r.draw();

    if (r.opacity <= 0 || r.y < 0) {
      rings.splice(i, 1);
    }
  }
}

// Set active bridge pillar on user interaction
function selectPillar(pillarId) {
  activePillar = pillarId;
  
  // Highlight UI elements
  document.querySelectorAll(".pillar-trigger").forEach(btn => {
    btn.classList.remove("active");
  });
  
  const activeBtn = document.getElementById(`pillar-${pillarId}`);
  if (activeBtn) activeBtn.classList.add("active");

  // Show detailed panel below the canvas
  const detailPanel = document.getElementById("pillar-details");
  const detailTitle = document.getElementById("detail-title");
  const detailSubtitle = document.getElementById("detail-subtitle");
  const detailDescText = document.getElementById("detail-desc-text");
  const specMechanism = document.getElementById("spec-mechanism");
  const specGlobalLaw = document.getElementById("spec-global-law");
  const specSop = document.getElementById("spec-sop");

  if (!detailPanel) return;

  // Render details based on pillar
  const pillarDetails = {
    markets: {
      title: "Market Linkage & Digitization",
      subtitle: "The Liquidity Bridge",
      desc: "This carbon bridge connects fragmented voluntary carbon registries (e.g. Verra, Gold Standard) with high-efficiency blockchain networks [9]. By locking carbon credits in legacy systems and minting digital twins (tokens), this mechanism creates borderless, 24/7 liquidity, enabling instant collateralization, fractionalized trading, and auditable corporate retirements [9].",
      mechanism: "Tokenization Protocols (ERC-20 twin minting)",
      law: "VCMI Integrity Guidelines, IETA Guidelines [8]",
      sop: "Lock credit -> Mint digital token -> Verify on blockchain ledger"
    },
    border: {
      title: "Carbon Border Adjustments (CBAM)",
      subtitle: "The Fair Trade Bridge",
      desc: "This carbon bridge acts as a regulatory tariff to prevent 'carbon leakage' [1]. By charging imported heavy goods (cement, steel, aluminum, fertilizers) a price equivalent to local emissions costs, it removes the financial incentive for corporations to outsource manufacturing to countries with lax regulations [1][2].",
      mechanism: "Embedded Emissions Valuation (EU CBAM Certificates)",
      law: "EU Regulation (EU) 2023/956, World Bank Pricing Framework [1][2]",
      sop: "Register as declarant -> Measure embedded emissions -> Purchase and surrender certificates"
    },
    sovereign: {
      title: "Article 6 Sovereign Links",
      subtitle: "The Treaty Bridge",
      desc: "Under Article 6 of the Paris Agreement, sovereign nations trade mitigation assets directly [3]. This bridge links national registries using 'Corresponding Adjustments' to ensure that when Country A transfers a carbon unit (an ITMO) to Country B, it adjusts its national ledger to prevent double-counting [3].",
      mechanism: "ITMOs (Internationally Transferred Mitigation Outcomes)",
      law: "UNFCCC Paris Agreement Article 6.2 & 6.4 [3]",
      sop: "Bilateral agreement -> Project validation -> Corresponding adjustment -> Registry transfer"
    },
    transition: {
      title: "Transition Technologies",
      subtitle: "The Industrial Bridge",
      desc: "This technological bridge spans the gap between current fossil fuels and future zero-carbon infrastructure. By financing direct carbon capture and storage (CCS), waste methane conversion, and green hydrogen, it provides a physical pathway to reduce emissions from heavy industry during the phase-down period [4][7].",
      mechanism: "Carbon Capture, Utilization & Storage (CCUS)",
      law: "US IRA Section 45Q, Energy Conservation Act [4][6]",
      sop: "Industrial capture -> EPA Class VI geological injection -> Permanent seismic monitoring"
    }
  };

  const details = pillarDetails[pillarId];
  const theme = PILLAR_THEMES[pillarId];

  // Set active colors dynamically in styles
  document.documentElement.style.setProperty("--accent-active", theme.color);
  document.documentElement.style.setProperty("--accent-active-rgb", theme.colorRgb);

  detailTitle.textContent = details.title;
  detailSubtitle.textContent = details.subtitle;
  detailDescText.innerHTML = details.desc;
  specMechanism.textContent = details.mechanism;
  specGlobalLaw.textContent = details.law;
  specSop.textContent = details.sop;

  detailPanel.style.display = "grid";
  // Sync container borders to match the selected pillar
  detailPanel.querySelector(".detail-card").style.borderColor = theme.color;
  
  // Scroll details into view smoothly
  detailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// --- Regional Dashboard Loader ---
function loadRegion(regionId) {
  const data = REGIONAL_DATA[regionId];
  if (!data) return;

  // Highlight selected button
  document.querySelectorAll(".region-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  
  const activeBtn = document.getElementById(`region-btn-${regionId}`);
  if (activeBtn) activeBtn.classList.add("active");

  // Load Content
  document.getElementById("region-active-flag").textContent = data.flag;
  document.getElementById("region-active-name").textContent = data.name;
  document.getElementById("region-element").innerHTML = data.element;
  document.getElementById("region-laws").innerHTML = data.laws;
  document.getElementById("region-clauses").innerHTML = data.clauses;

  // Build SOP timeline steps
  const timelineContainer = document.getElementById("sop-timeline");
  timelineContainer.innerHTML = "";
  
  data.sop.forEach(step => {
    const stepCard = document.createElement("div");
    stepCard.className = "timeline-step";
    stepCard.innerHTML = `
      <div class="step-num">${step.num}</div>
      <h5>${step.title}</h5>
      <p>${step.desc}</p>
    `;
    timelineContainer.appendChild(stepCard);
  });

  // Apply regional colors dynamically
  const dashboardCard = document.getElementById("region-dashboard-panel");
  dashboardCard.style.borderColor = data.color;
  dashboardCard.style.boxShadow = `0 10px 40px -15px rgba(${data.colorRgb}, 0.15), var(--shadow-glow)`;

  // Apply colors to list items and headers
  document.documentElement.style.setProperty("--accent-active", data.color);
  document.documentElement.style.setProperty("--accent-active-rgb", data.colorRgb);
}

// --- Dynamic Interactive Calculators ---

// CBAM Calculator Logic
function initCbamCalculator() {
  const sectorSelect = document.getElementById("cbam-sector");
  const quantityInput = document.getElementById("cbam-quantity");
  const quantityRange = document.getElementById("cbam-quantity-range");
  const etsInput = document.getElementById("cbam-ets");
  const etsRange = document.getElementById("cbam-ets-range");
  const localInput = document.getElementById("cbam-local");
  const localRange = document.getElementById("cbam-local-range");

  if (!sectorSelect) return;

  // Carbon Intensity Factors (tonnes CO2 per tonne product)
  const SECTOR_INTENSITIES = {
    steel: 1.8,
    cement: 0.9,
    aluminum: 4.5,
    fertilizer: 2.1,
    hydrogen: 9.0,
    electricity: 0.4
  };

  function updateCalculations() {
    const sector = sectorSelect.value;
    const qty = parseFloat(quantityInput.value) || 0;
    const etsPrice = parseFloat(etsInput.value) || 0;
    const localPrice = parseFloat(localInput.value) || 0;

    const intensity = SECTOR_INTENSITIES[sector] || 0;
    const totalEmissions = qty * intensity;
    const grossCost = totalEmissions * etsPrice;
    
    // Exporter local carbon tax deduction
    const localDeduction = totalEmissions * localPrice;
    const finalTariff = Math.max(0, grossCost - localDeduction);

    // Update Output displays
    document.getElementById("cbam-calc-emissions").textContent = `${totalEmissions.toLocaleString(undefined, {maximumFractionDigits: 1})} t CO₂e`;
    document.getElementById("cbam-calc-tariff").textContent = `$${finalTariff.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
  }

  // Bind values (Synchronize input number and slider range)
  function bindInputs(numEl, rangeEl) {
    numEl.addEventListener("input", () => {
      rangeEl.value = numEl.value;
      updateCalculations();
    });
    rangeEl.addEventListener("input", () => {
      numEl.value = rangeEl.value;
      updateCalculations();
    });
  }

  bindInputs(quantityInput, quantityRange);
  bindInputs(etsInput, etsRange);
  bindInputs(localInput, localRange);
  sectorSelect.addEventListener("change", updateCalculations);

  updateCalculations();
}

// Voluntary Carbon Offset Calculator Logic
function initOffsetCalculator() {
  const areaInput = document.getElementById("offset-area");
  const areaRange = document.getElementById("offset-area-range");
  const rateSelect = document.getElementById("offset-rate");
  const priceInput = document.getElementById("offset-price");
  const priceRange = document.getElementById("offset-price-range");
  const auditInput = document.getElementById("offset-audit");
  const auditRange = document.getElementById("offset-audit-range");

  if (!areaInput) return;

  function updateCalculations() {
    const area = parseFloat(areaInput.value) || 0;
    const rate = parseFloat(rateSelect.value) || 0;
    const price = parseFloat(priceInput.value) || 0;
    const auditCosts = parseFloat(auditInput.value) || 0;

    const annualCredits = area * rate;
    const grossRevenue = annualCredits * price;
    
    // Net profit calculates first year taking audit verification costs into account
    const netProfit = Math.max(0, grossRevenue - auditCosts);

    // Update Output displays
    document.getElementById("offset-calc-credits").textContent = `${annualCredits.toLocaleString(undefined, {maximumFractionDigits: 0})} Credits/yr`;
    document.getElementById("offset-calc-revenue").textContent = `$${netProfit.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
  }

  function bindInputs(numEl, rangeEl) {
    numEl.addEventListener("input", () => {
      rangeEl.value = numEl.value;
      updateCalculations();
    });
    rangeEl.addEventListener("input", () => {
      numEl.value = rangeEl.value;
      updateCalculations();
    });
  }

  bindInputs(areaInput, areaRange);
  bindInputs(priceInput, priceRange);
  bindInputs(auditInput, auditRange);
  rateSelect.addEventListener("change", updateCalculations);

  updateCalculations();
}

// --- Smart Search Box Event Handlers ---
function initSmartSearch() {
  const searchInput = document.getElementById("smart-search-bar");
  const searchBtn = document.getElementById("smart-search-btn");
  const resultsWrapper = document.getElementById("search-results-area");
  
  if (!searchInput) return;

  function executeSearch(query) {
    if (!query || query.trim() === "") return;

    // Call custom search script
    const searchData = searchCarbonBridge(query);

    // Show wrapper
    resultsWrapper.style.display = "block";
    resultsWrapper.innerHTML = ""; // reset

    if (searchData.results && searchData.results.length > 0) {
      searchData.results.forEach(res => {
        const item = res.item;
        
        // Highlight matching terms & turn [N] into active markers
        const formattedAnswer = highlightKeywords(item.answer, query);

        // Build result card
        const resultCard = document.createElement("div");
        resultCard.className = "result-card";
        resultCard.innerHTML = `
          <div class="result-header">
            <h4>${item.question}</h4>
            <span class="badge glow-text">Relevance: ${Math.round(Math.min(100, res.score * 5))}%</span>
          </div>
          <div class="result-text">
            <p>${formattedAnswer}</p>
          </div>
          <div class="citations-footer" id="citations-for-${item.id}">
            <h5>Citations & Verified Resources</h5>
            <div class="citation-list" id="list-for-${item.id}"></div>
          </div>
        `;

        resultsWrapper.appendChild(resultCard);

        // Append citations metadata
        const citListContainer = document.getElementById(`list-for-${item.id}`);
        item.citations.forEach(citId => {
          const cit = getCitationMetadata(citId);
          if (cit) {
            const citEl = document.createElement("div");
            citEl.className = "cit-item";
            citEl.innerHTML = `
              <div class="cit-index">${cit.id}</div>
              <div>
                <strong>${cit.source}:</strong> 
                <a href="${cit.url}" target="_blank" class="cit-link">${cit.title}</a>
              </div>
            `;
            citListContainer.appendChild(citEl);
          }
        });
      });
      
      // Scroll to results
      resultsWrapper.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  // Click suggestions
  document.querySelectorAll(".tag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-query");
      searchInput.value = text;
      executeSearch(text);
    });
  });

  searchBtn.addEventListener("click", () => {
    executeSearch(searchInput.value);
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      executeSearch(searchInput.value);
    }
  });
}

// Global click handler to open citations from inline text
window.openCitationDetails = function(citationId) {
  const cit = getCitationMetadata(citationId);
  if (cit) {
    // Open in new tab directly as interactive feedback
    window.open(cit.url, '_blank');
  }
};

// --- Initialisation Entry ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Particle Canvas Setup
  initCanvas();

  // 2. Select default pillar to set active color
  selectPillar("markets");

  // 3. Load default region dashboard
  loadRegion("global");

  // 4. Set up listeners on the region explorer sidebar
  document.querySelectorAll(".region-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const regionId = btn.id.replace("region-btn-", "");
      loadRegion(regionId);
    });
  });

  // 5. Selectors for bridge pillars triggers
  document.querySelectorAll(".pillar-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const pillarId = btn.id.replace("pillar-", "");
      selectPillar(pillarId);
    });
  });

  // 6. Setup Calculators
  initCbamCalculator();
  initOffsetCalculator();

  // 7. Setup Smart Search
  initSmartSearch();
});
