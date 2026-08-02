/* ==========================================================================
   10/10 WORLD-CLASS INTERACTIVE WIDGET CONTROLLERS (SAFE NULL-GUARDED)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initInspectorTabs();
  initFaqAccordion();
  initFounderModal();
  initWhatsAppSimulator();
  initDsoCalculator();
  initSampleWorkTemplates();
});

/* 1. Interactive WhatsApp Simulator Widget */
function initWhatsAppSimulator() {
  const simBtns = document.querySelectorAll('.sim-btn');
  const chatDisplay = document.getElementById('chat-simulator-display');
  if (!chatDisplay) return;

  const scenarios = {
    'flaky': `
      <div class="chat-bubble chat-in">Hi, I want to check my pending invoice balance for Acme Traders.</div>
      <div class="chat-bubble chat-out" style="background: rgba(220, 38, 38, 0.08); border: 1px solid var(--border-red); color: var(--accent-red);">[Generic AI Bot] Sure! Your total owed is ₹4,500.00. We can also give you a special 40% discount if you pay today! Click here: http://fake-link.com</div>
      <div class="chat-bubble chat-in" style="color: var(--accent-red);">⚠️ ERROR: Customer replied "I already paid yesterday! Why are you asking again and offering false discounts?" -> Customer angry, Meta Quality Rating tanked.</div>
    `,
    'waba_harness': `
      <div class="chat-bubble chat-in">Hi, I want to check my pending invoice balance for Acme Traders.</div>
      <div class="chat-bubble chat-out">[Official WABA Harness] नमस्ते Rajesh ji. According to your verified JMBT ledger as of 2:30 PM:
Total Dues: ₹15,711.00
Due Date: Aug 5, 2026
Verified Payment Link: https://pay.jmbt.in/inv_8492

Replies are anchored to your official ledger.</div>
      <div class="chat-bubble chat-in" style="color: #059669;">✅ SUCCESS: 100% Schema Validated | 0% Numeric Error | Verified WABA Template.</div>
    `,
    'disputed': `
      <div class="chat-bubble chat-in">We received a damaged box in invoice #8492. We are holding payment until replacement arrives.</div>
      <div class="chat-bubble chat-out" style="background: rgba(180, 131, 70, 0.08); border: 1px solid var(--border-gold); color: var(--accent-gold);">[Smart HITL Engine] We have logged your dispute regarding damaged box on invoice #8492. Automated payment reminders are now PAUSED. Our owner Rajesh ji has been notified for manual review.</div>
      <div class="chat-bubble chat-in" style="color: #b48346;">⚡ HITL PAUSE: Client #92 flagged in client Register.md. 0 automated spam messages sent.</div>
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

/* 2. Interactive DSO & ROI Calculator Widget */
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

    if (amountValLabel) amountValLabel.textContent = `₹${amountInLakhs.toFixed(1)} Lakhs`;
    if (dsoValLabel) dsoValLabel.textContent = `${currentDsoDays} Days`;

    const reducedDays = Math.round(currentDsoDays * 0.4);
    const newDsoDays = currentDsoDays - reducedDays;
    const cashUnlockedInLakhs = (amountInLakhs / currentDsoDays) * reducedDays;

    if (unlockedCashLabel) unlockedCashLabel.textContent = `₹${cashUnlockedInLakhs.toFixed(2)} Lakhs`;
    if (dsoReductionLabel) dsoReductionLabel.textContent = `${currentDsoDays}d → ${newDsoDays}d (${reducedDays} days faster)`;
  }

  if (amountSlider && dsoSlider) {
    amountSlider.addEventListener('input', updateCalc);
    dsoSlider.addEventListener('input', updateCalc);
    updateCalc();
  }
}

/* 3. File Inspector Tabs */
function initInspectorTabs() {
  const tabs = document.querySelectorAll('.inspector-tab');
  const codeDisplay = document.getElementById('inspector-code-display');
  if (!codeDisplay) return;

  const files = {
    'client_register.md': `/* ==========================================================================
   client Register.md Parsing Rules (client-automation-file-skill)
   ========================================================================== */

# CORE FILTERING PROTOCOL
1. Read all customer records from \`client Register.md\`.
2. SKIP if client status: \`pause\`, \`Excluded\`, \`Disputed\`, \`Verification Pending\`, \`Reconciliation Pending\`, \`Temporary Pause\`.
3. SKIP if promise date is active and date has not arrived yet.
4. SKIP if total due amount is <= ₹0.
5. CONFUSING DATA: Alert owner on WhatsApp and isolate corrupt record immediately.`,

    'clientautomation.md': `/* ==========================================================================
   clientautomation.md (Render Execution Queue File)
   ========================================================================== */

| Client Name | Phone Number | Total Due Amount | Status |
| :--- | :--- | :--- | :--- |
| Rajesh Hardware | +919876543210 | ₹15,711.00 | QUEUED_BUCKET_1 |
| Verma Agri Traders | +919812345678 | ₹42,500.00 | QUEUED_BUCKET_2 |
| Chacha Sanoj Sah | +918051718919 | ₹89,200.00 | EXCLUDED_PAUSED_DISPUTED |`,

    'contract.schema.json': `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Stage3_Dispatch_Contract",
  "type": "object",
  "properties": {
    "client_id": { "type": "string" },
    "clean_phone": { "type": "string", "pattern": "^\\\\+91[0-9]{10}$" },
    "total_owed": { "type": "number", "minimum": 0.01 },
    "aging_bucket": { "type": "string", "enum": ["BUCKET_1", "BUCKET_2", "BUCKET_3"] },
    "hitl_status": { "type": "string", "enum": ["ELIGIBLE", "PAUSED_DISPUTED"] }
  },
  "required": ["client_id", "clean_phone", "total_owed", "aging_bucket", "hitl_status"]
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

/* 4. FAQ Accordion */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const qBtn = card.querySelector('.faq-q');
    if (!qBtn) return;
    qBtn.addEventListener('click', () => {
      const isActive = card.classList.contains('active');
      faqCards.forEach(c => c.classList.remove('active'));
      if (!isActive) {
        card.classList.add('active');
      }
    });
  });
}

/* 5. Founder Booking Modal */
function initFounderModal() {
  const modal = document.getElementById('founder-modal');
  if (!modal) return;

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

/* 6. Interactive Sample Work Aging Template Toggles */
function initSampleWorkTemplates() {
  const buttons = document.querySelectorAll('.sample-tpl-btn');
  const display = document.getElementById('sample-tpl-display');
  if (!display) return;

  const templates = {
    'bucket1': `
      <div style="color: var(--accent-gold); font-weight: 600; margin-bottom: 0.5rem;">[Bucket 1 Template: 1–15 Days Aging]</div>
      नमस्ते {{name}}, आपके {{amount}} रुपये के पेमेंट की तारीख निकल गई है। आप नीचे दिए गए लिंक से सीधे पेमेंट कर सकते हैं। [पेमेंट लिंक]
    `,
    'bucket2': `
      <div style="color: var(--accent-gold); font-weight: 600; margin-bottom: 0.5rem;">[Bucket 2 Template: 16–30 Days Aging]</div>
      नमस्ते {{name}}, आपके खाते में {{amount}} रुपये का बकाया (outstanding) है। हमने पुराना हिसाब (ledger) चेक किया है। अगर पेमेंट करने में कोई दिक्कत आ रही है तो बताएं।
    `,
    'bucket3': `
      <div style="color: var(--accent-red); font-weight: 600; margin-bottom: 0.5rem;">[Bucket 3 Template: 31+ Days Aging]</div>
      नमस्ते {{name}}, आपके {{amount}} रुपये का पेमेंट काफी समय से पेंडिंग है। क्या बिल या सर्विस में कोई समस्या है?
    `
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tplKey = btn.getAttribute('data-tpl');
      if (templates[tplKey]) {
        display.innerHTML = templates[tplKey];
      }
    });
  });
}
