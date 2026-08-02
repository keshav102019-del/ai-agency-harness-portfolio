/* ==========================================================================
   WORDPRESS THEME INTERACTIVE CONTROLLERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initInspectorTabs();
  initFaqAccordion();
  initFounderModal();
  initTelemetryTicker();
  initWhatsAppSimulator();
  initDsoCalculator();
});

function initWhatsAppSimulator() {
  const simBtns = document.querySelectorAll('.sim-btn');
  const chatDisplay = document.getElementById('chat-simulator-display');

  const scenarios = {
    'flaky': `
      <div class="chat-bubble chat-in">Hi, I want to check my pending invoice balance for Acme Traders.</div>
      <div class="chat-bubble chat-out" style="background: #7f1d1d;">[Generic AI Bot] Sure! Your total owed is ₹4,500.00. We can also give you a special 40% discount if you pay today! Click here: http://fake-link.com</div>
      <div class="chat-bubble chat-in" style="color: #f87171;">⚠️ ERROR: Customer replied "I already paid yesterday! Why are you asking again and offering false discounts?" -> Customer angry, Meta Quality Rating tanked.</div>
    `,
    'waba_harness': `
      <div class="chat-bubble chat-in">Hi, I want to check my pending invoice balance for Acme Traders.</div>
      <div class="chat-bubble chat-out">[Official WABA Harness] Hello Rajesh ji. According to your verified JMBT ledger as of 2:30 PM:
Total Dues: ₹15,711.00
Due Date: Aug 5, 2026
Verified Payment Link: https://pay.jmbt.in/inv_8492

Replies are anchored to your official ledger.</div>
      <div class="chat-bubble chat-in" style="color: #34d399;">✅ SUCCESS: 100% Schema Validated | 0% Numeric Error | Verified WABA Template.</div>
    `,
    'disputed': `
      <div class="chat-bubble chat-in">We received a damaged box in invoice #8492. We are holding payment until replacement arrives.</div>
      <div class="chat-bubble chat-out" style="background: #1e293b;">[Smart HITL Engine] We have logged your dispute regarding damaged box on invoice #8492. Automated payment reminders are now PAUSED. Our owner Rajesh ji has been notified for manual review.</div>
      <div class="chat-bubble chat-in" style="color: #fbbf24;">⚡ HITL PAUSE: Client #92 flagged in SOUL.md. 0 automated spam messages sent.</div>
    `
  };

  simBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      simBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const scenarioKey = btn.getAttribute('data-scenario');
      if (scenarios[scenarioKey]) {
        chatDisplay.innerHTML = scenarios[scenarioKey];
      }
    });
  });
}

function initDsoCalculator() {
  const amountSlider = document.getElementById('calc-amount-slider');
  const dsoSlider = document.getElementById('calc-dso-slider');
  const amountValLabel = document.getElementById('calc-amount-label');
  const dsoValLabel = document.getElementById('calc-dso-label');
  const unlockedCashLabel = document.getElementById('calc-unlocked-cash');
  const dsoReductionLabel = document.getElementById('calc-dso-reduced');

  function updateCalc() {
    if (!amountSlider || !dsoSlider) return;
    
    const amountInLakhs = parseFloat(amountSlider.value);
    const currentDsoDays = parseInt(dsoSlider.value);

    amountValLabel.textContent = `₹${amountInLakhs.toFixed(1)} Lakhs`;
    dsoValLabel.textContent = `${currentDsoDays} Days`;

    const reducedDays = Math.round(currentDsoDays * 0.4);
    const newDsoDays = currentDsoDays - reducedDays;
    const cashUnlockedInLakhs = (amountInLakhs / currentDsoDays) * reducedDays;

    unlockedCashLabel.textContent = `₹${cashUnlockedInLakhs.toFixed(2)} Lakhs`;
    dsoReductionLabel.textContent = `${currentDsoDays}d → ${newDsoDays}d (${reducedDays} days faster)`;
  }

  if (amountSlider && dsoSlider) {
    amountSlider.addEventListener('input', updateCalc);
    dsoSlider.addEventListener('input', updateCalc);
    updateCalc();
  }
}

function initInspectorTabs() {
  const tabs = document.querySelectorAll('.inspector-tab');
  const codeDisplay = document.getElementById('inspector-code-display');

  const files = {
    'AGENTS.md': `/* ==========================================================================
   AGENTS.md — Universal Identity & Guardrail Layer (Layer 1)
   ========================================================================== */

# IMMUTABLE SOVEREIGN CONTRACT
- Role: Deterministic Revenue & Ledger Automation Agent
- Engine: 100% Meta Official WhatsApp Business API (Direct WABA Cloud Key)
- Rule 1: NEVER guess or hallucinate currency figures or ledger balances.
- Rule 2: All automation triggers must anchor to verified database events.
- Rule 3: Disputed client accounts trigger immediate Smart HITL Pause.

## TRUST & DATA BOUNDARIES
- Allowed: Read ledger balances, dispatch Meta-approved utility templates.
- Forbidden: Cannot issue unauthorized discounts or modify core accounts without owner key.`,

    'SOUL.md': `/* ==========================================================================
   SOUL.md — Reference Business Policies & Blacklists (Layer 4)
   ========================================================================== */

# BUSINESS POLICIES & RECONCILIATION RULES
- Target Enterprise: Jai Maa Bhagwati Traders (JMBT)
- Total Active Clients: 1,181
- Granular Pillars: 6 (Very High Dues to Zero Balance)

## SMART PAUSE & BLACKLIST RULES
- Rule 4B: If client has active goods dispute or payment promise within 30 days -> PAUSE.
- Active Paused Clients: 92 clients (₹2,59,440.25 total) isolated for human review.
- Blacklisted Contact: Chacha Sanoj Sah (+918051718919) -> Manual Human Review Only.`,

    'contract.schema.json': `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Stage3_Dispatch_Contract",
  "type": "object",
  "properties": {
    "client_id": { "type": "string" },
    "clean_phone": { "type": "string", "pattern": "^\\\\+91[0-9]{10}$" },
    "total_owed": { "type": "number", "minimum": 0.01 },
    "approved_template": { "type": "string", "enum": ["ledger_personal_remind"] },
    "hitl_status": { "type": "string", "enum": ["ELIGIBLE", "PAUSED_DISPUTED"] }
  },
  "required": ["client_id", "clean_phone", "total_owed", "approved_template", "hitl_status"]
}`
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const fileName = tab.getAttribute('data-file');
      if (files[fileName]) {
        codeDisplay.textContent = files[fileName];
      }
    });
  });
}

function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const qBtn = card.querySelector('.faq-q');
    qBtn.addEventListener('click', () => {
      const isActive = card.classList.contains('active');
      faqCards.forEach(c => c.classList.remove('active'));
      if (!isActive) {
        card.classList.add('active');
      }
    });
  });
}

function initFounderModal() {
  const modal = document.getElementById('founder-modal');
  const triggerBtns = document.querySelectorAll('.open-modal');
  const closeBtn = document.querySelector('.modal-close');
  const form = document.getElementById('founder-audit-form');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your Problem Audit request has been received. The founder will personally review your workflow and contact you within 4 hours.');
      modal.classList.remove('active');
      form.reset();
    });
  }
}

function initTelemetryTicker() {
  const textEl = document.getElementById('live-ticker');
  const items = [
    "[Meta WABA Cloud API] Dispatched ledger_personal_remind -> Status: DELIVERED (200 OK)",
    "[ICM Protocol] Read AGENTS.md & SOUL.md -> 0% Numeric Error Gate Validated",
    "[Smart HITL] Client #92 (Chacha Sanoj Sah) PAUSED -> Active Dispute Flagged",
    "[System Lock] Lock 'dispatch_run_8492' verified -> 0 Duplicate Messages Sent",
    "[Telemetry Reconcile] ₹23,422.00 payment webhook received -> Client ledger updated"
  ];

  let idx = 0;
  if (textEl) {
    setInterval(() => {
      idx = (idx + 1) % items.length;
      textEl.textContent = items[idx];
    }, 4500);
  }
}
