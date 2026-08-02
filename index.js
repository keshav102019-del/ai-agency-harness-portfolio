/* ==========================================================================
   INTERACTIVE APPLICATION LOGIC & CONTROLLERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initFilePlayground();
  initFaqAccordion();
  initModalBooking();
  initLiveTickerSimulation();
});

/* 1. Interactive File Playground Tabs */
function initFilePlayground() {
  const tabs = document.querySelectorAll('.tab-btn');
  const codeDisplay = document.getElementById('code-display');

  const fileContents = {
    'AGENTS.md': `/* ==========================================================================
   AGENTS.md — Universal Identity & Guardrail Layer (Layer 1)
   ========================================================================== */

# IMMUTABLE CONTRACT
- Role: Deterministic Revenue & Ledger Automation Agent
- Engine: 100% Meta Official WhatsApp Business API
- Golden Rule 1: NEVER guess or hallucinate currency figures or invoice totals.
- Golden Rule 2: All actions must anchor to verified database events.
- Golden Rule 3: Disputed client ledgers must trigger immediate Smart HITL Pause.

## TRUST BOUNDARIES
- Allowed Actions: Read ledger balances, dispatch Meta-approved utility templates.
- Restricted Actions: Cannot issue direct discounts, modify core accounts without owner key.`,

    'SOUL.md': `/* ==========================================================================
   SOUL.md — Reference Business Policies & Blacklists (Layer 4)
   ========================================================================== */

# BUSINESS POLICIES & RECONCILIATION RULES
- Company: Jai Maa Bhagwati Traders (JMBT)
- Total Active Clients: 1,181
- Granular Pillars: 6 (Very High Dues to Zero Balance)

## BLACKLIST & SMART PAUSE RULES
- Rule 4B: If client has active goods dispute or payment promise within 30 days -> PAUSE.
- Active Paused Clients: 92 clients (₹2,59,440.25 total) awaiting human reconciliation.
- Blacklisted Contacts: Chacha Sanoj Sah (+918051718919) -> Manual Human Review Only.`,

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
      if (fileContents[fileName]) {
        codeDisplay.textContent = fileContents[fileName];
      }
    });
  });
}

/* 2. FAQ Accordion */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* 3. Booking Modal */
function initModalBooking() {
  const modal = document.getElementById('booking-modal');
  const openBtns = document.querySelectorAll('.open-modal-btn');
  const closeBtn = document.querySelector('.modal-close');
  const bookingForm = document.getElementById('booking-form');

  openBtns.forEach(btn => {
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

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your Problem Audit Request has been submitted. We will analyze your workflow and contact you within 4 hours.');
      modal.classList.remove('active');
      bookingForm.reset();
    });
  }
}

/* 4. Live Telemetry Simulation Ticker */
function initLiveTickerSimulation() {
  const telemetryElement = document.getElementById('live-telemetry');
  const events = [
    "[WABA Cloud API] Dispatched ledger_personal_remind to +9198*** -> Status: DELIVERED (200 OK)",
    "[Schema Gate] Validation PASSED for client_id #4102 | total_owed: ₹15,711.00",
    "[HITL Engine] Client #92 (Chacha Sanoj Sah) PAUSED -> Active Dispute Flagged",
    "[System Lock] Lock 'dispatch_run_8492' verified -> 0 duplicate messages sent",
    "[Telemetry Reconcile] ₹23,422.00 payment webhook received -> Client ledger updated"
  ];

  let index = 0;
  if (telemetryElement) {
    setInterval(() => {
      index = (index + 1) % events.length;
      telemetryElement.textContent = events[index];
    }, 4000);
  }
}
