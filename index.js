/* ==========================================================================
   INTERACTIVE CONTROLLERS — FOUNDER MANIFESTO & HARNESS STUDIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPlayground();
  initFaqAccordion();
  initBookingModal();
  initTelemetryTicker();
});

/* 1. Code & File Playground Switcher */
function initPlayground() {
  const tabs = document.querySelectorAll('.playground-tab');
  const codeViewer = document.getElementById('code-viewer');

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
        codeViewer.textContent = files[fileName];
      }
    });
  });
}

/* 2. FAQ Accordion Controller */
function initFaqAccordion() {
  const faqRows = document.querySelectorAll('.faq-row');

  faqRows.forEach(row => {
    const btn = row.querySelector('.faq-btn');
    btn.addEventListener('click', () => {
      const isActive = row.classList.contains('active');
      faqRows.forEach(r => r.classList.remove('active'));
      if (!isActive) {
        row.classList.add('active');
      }
    });
  });
}

/* 3. Modal Booking Form Controller */
function initBookingModal() {
  const modalBg = document.getElementById('booking-modal-bg');
  const triggerBtns = document.querySelectorAll('.open-modal-trigger');
  const closeBtn = document.querySelector('.modal-close-btn');
  const bookingForm = document.getElementById('audit-booking-form');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalBg.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalBg.classList.remove('active');
    });
  }

  if (modalBg) {
    modalBg.addEventListener('click', (e) => {
      if (e.target === modalBg) {
        modalBg.classList.remove('active');
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your Problem Audit Request has been received. The founder will personally review your workflow and contact you within 4 hours.');
      modalBg.classList.remove('active');
      bookingForm.reset();
    });
  }
}

/* 4. Telemetry Ticker Simulation */
function initTelemetryTicker() {
  const tickerEl = document.getElementById('live-ticker-text');
  const logs = [
    "[Meta WABA Official API] Dispatched ledger_personal_remind to +9198*** -> Status: DELIVERED (200 OK)",
    "[Schema Gate] Validation PASSED for client_id #4102 | total_owed: ₹15,711.00",
    "[HITL Engine] Client #92 (Chacha Sanoj Sah) PAUSED -> Active Dispute Flagged",
    "[System Lock] Lock 'dispatch_run_8492' verified -> 0 duplicate messages sent",
    "[Telemetry Reconcile] ₹23,422.00 payment webhook received -> Client ledger updated"
  ];

  let i = 0;
  if (tickerEl) {
    setInterval(() => {
      i = (i + 1) % logs.length;
      tickerEl.textContent = logs[i];
    }, 4500);
  }
}
