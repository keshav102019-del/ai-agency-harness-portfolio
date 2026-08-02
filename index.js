/* ==========================================================================
   LONG-FORM EDITORIAL DIRECT RESPONSE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initInspectorTabs();
  initFaqAccordion();
  initFounderModal();
  initTelemetryTicker();
});

/* 1. File Inspector Tabs */
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

/* 2. FAQ Accordion */
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

/* 3. Founder Booking Modal */
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

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your Problem Audit request has been received. The founder will personally review your workflow and contact you within 4 hours.');
      modal.classList.remove('active');
      form.reset();
    });
  }
}

/* 4. Live Telemetry Ticker */
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
