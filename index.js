/* ==========================================================================
   AGENT HARNESS STUDIO — INTERACTIVE CLIENT & ENGINE CONTROLLER (PRO MAX)
   Includes: Real-time Live WABA Playground, Scroll Ticker, Multi-Step Audit Wizard, FAQ Live Search, Copy Snippets
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLiveWabaPlayground();
  initAnimatedCounters();
  initDsoRoiCalculator();
  initInspectorTabs();
  initFaqSearchAndAccordion();
  initMultiStepAuditWizard();
  initSampleWorkTemplates();
  initLiveTickerTime();
});

/* 1. Live Interactive WABA Payload Engine Playground */
function initLiveWabaPlayground() {
  const clientNameInput = document.getElementById('playground-client-name');
  const amountSlider = document.getElementById('playground-amount-slider');
  const amountValLabel = document.getElementById('playground-amount-val');
  const scenarioSelect = document.getElementById('playground-scenario-select');
  
  const chatDisplay = document.getElementById('playground-chat-display');
  const statusDisplay = document.getElementById('playground-status-display');

  if (!chatDisplay || !scenarioSelect) return;

  function updatePlayground() {
    const clientName = (clientNameInput && clientNameInput.value.trim()) ? clientNameInput.value.trim() : "Rajesh Hardware Patna";
    const amountVal = amountSlider ? parseInt(amountSlider.value).toLocaleString('en-IN') : "15,711";
    if (amountValLabel && amountSlider) amountValLabel.textContent = `₹${amountVal}`;

    const scenario = scenarioSelect.value;

    let chatHtml = '';
    let statusHtml = '';

    if (scenario === 'bucket1') {
      chatHtml = `
        <div class="chat-bubble chat-in">Hi, checking my current outstanding bill balance for ${escapeHtml(clientName)}.</div>
        <div class="chat-bubble chat-out">
          [Official WABA Harness — Bucket 1] नमस्ते ${escapeHtml(clientName)}, आपके <strong>₹${amountVal}</strong> रुपये के पेमेंट की तारीख निकल गई है। आप नीचे दिए गए लिंक से सीधे पेमेंट कर सकते हैं:<br>
          <a href="#" style="color: #10B981; text-decoration: underline; font-weight: 600;">https://pay.jmbt.in/inv_8492</a>
        </div>
      `;
      statusHtml = `
        <div class="chat-status-badge" style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--border-emerald); color: #10B981;">
          <span>✅ STATUS: SCHEMA VALIDATED</span>
          <span>100% Deterministic • 0% Ban Risk</span>
        </div>
      `;
    } else if (scenario === 'bucket2') {
      chatHtml = `
        <div class="chat-bubble chat-in">Hi, please send our ledger summary for ${escapeHtml(clientName)}.</div>
        <div class="chat-bubble chat-out">
          [Official WABA Harness — Bucket 2] नमस्ते ${escapeHtml(clientName)}, आपके खाते में <strong>₹${amountVal}</strong> रुपये का बकाया (outstanding) है। हमने पुराना हिसाब (ledger) चेक किया है। अगर पेमेंट करने में कोई दिक्कत आ रही है तो हमें बताएं।
        </div>
      `;
      statusHtml = `
        <div class="chat-status-badge" style="background: rgba(180, 131, 70, 0.1); border: 1px solid var(--border-gold); color: #B48346;">
          <span>🟡 STATUS: SOFT LEDGER AUDIT</span>
          <span>Anchored to client Register.md</span>
        </div>
      `;
    } else if (scenario === 'bucket3') {
      chatHtml = `
        <div class="chat-bubble chat-in">Why are we receiving payment reminders for invoice #8492?</div>
        <div class="chat-bubble chat-out">
          [Official WABA Harness — Bucket 3] नमस्ते ${escapeHtml(clientName)}, आपके <strong>₹${amountVal}</strong> रुपये का पेमेंट 30+ दिनों से पेंडिंग है। क्या बिल या सर्विस में कोई समस्या है? कृपया हमें सूचित करें।
        </div>
      `;
      statusHtml = `
        <div class="chat-status-badge" style="background: rgba(220, 38, 38, 0.1); border: 1px solid var(--border-red); color: #EF4444;">
          <span>🔴 STATUS: OVERDUE DIRECT QUERY</span>
          <span>Strict Devanagari Anti-Slop</span>
        </div>
      `;
    } else if (scenario === 'disputed') {
      chatHtml = `
        <div class="chat-bubble chat-in">We received a damaged box in invoice #8492 for ${escapeHtml(clientName)}. Holding payment until replacement.</div>
        <div class="chat-bubble chat-out" style="background: rgba(180, 131, 70, 0.15); border: 1px solid var(--border-gold); color: #D4AF37;">
          [Smart HITL Engine] We have logged your dispute regarding damaged box on invoice #8492. Automated payment reminders are now <strong>PAUSED</strong> for ${escapeHtml(clientName)}. Founder Rajesh ji has been notified for manual review.
        </div>
      `;
      statusHtml = `
        <div class="chat-status-badge" style="background: rgba(180, 131, 70, 0.15); border: 1px solid var(--border-gold); color: #D4AF37;">
          <span>⚡ STATUS: SMART HITL PAUSED</span>
          <span>Zero Spam • Human Intervention Routed</span>
        </div>
      `;
    } else if (scenario === 'flaky_bot') {
      chatHtml = `
        <div class="chat-bubble chat-in">Hi, checking balance for ${escapeHtml(clientName)}.</div>
        <div class="chat-bubble chat-out" style="background: rgba(220, 38, 38, 0.1); border: 1px solid var(--border-red); color: #EF4444;">
          [Generic AI Bot Slop] Sure! Your total owed is ₹4,500.00. We can also give you a special 40% discount if you pay today! Click here: http://fake-link.com
        </div>
        <div class="chat-bubble chat-in" style="color: #EF4444; border-color: var(--border-red);">
          ⚠️ CRITICAL ERROR: Bot hallucinated wrong amount (₹4,500 vs ₹${amountVal}) and offered unauthorized 40% discount! Meta Quality Rating tanked.
        </div>
      `;
      statusHtml = `
        <div class="chat-status-badge" style="background: rgba(220, 38, 38, 0.15); border: 1px solid var(--border-red); color: #EF4444;">
          <span>❌ STATUS: CRITICAL HALLUCINATION</span>
          <span>Generic Bot Failure Mode</span>
        </div>
      `;
    }

    chatDisplay.innerHTML = chatHtml;
    if (statusDisplay) statusDisplay.innerHTML = statusHtml;
  }

  if (clientNameInput) clientNameInput.addEventListener('input', updatePlayground);
  if (amountSlider) amountSlider.addEventListener('input', updatePlayground);
  if (scenarioSelect) scenarioSelect.addEventListener('change', updatePlayground);

  updatePlayground();
}

/* 2. Scroll-Triggered Animated Counters */
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.counter-val');
  if (!counterElements.length) return;

  let animated = false;

  function runCounters() {
    if (animated) return;
    const proofBar = document.querySelector('.proof-bar');
    if (!proofBar) return;

    const rect = proofBar.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      animated = true;

      counterElements.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const inc = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += inc;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = `${prefix}${current.toLocaleString('en-IN', { maximumFractionDigits: 2 })}${suffix}`;
        }, stepTime);
      });
    }
  }

  window.addEventListener('scroll', runCounters);
  runCounters();
}

/* 3. Enhanced DSO & ROI Capital Calculator */
function initDsoRoiCalculator() {
  const amountSlider = document.getElementById('calc-amount-slider');
  const dsoSlider = document.getElementById('calc-dso-slider');
  const amountValLabel = document.getElementById('calc-amount-label');
  const dsoValLabel = document.getElementById('calc-dso-label');

  const unlockedCashLabel = document.getElementById('calc-unlocked-cash');
  const dsoReductionLabel = document.getElementById('calc-dso-reduced');
  const interestSavedLabel = document.getElementById('calc-interest-saved');

  function updateCalc() {
    if (!amountSlider || !dsoSlider) return;

    const amountInLakhs = parseFloat(amountSlider.value);
    const currentDsoDays = parseInt(dsoSlider.value);

    if (amountValLabel) amountValLabel.textContent = `₹${amountInLakhs.toFixed(1)} Lakhs`;
    if (dsoValLabel) dsoValLabel.textContent = `${currentDsoDays} Days`;

    const reducedDays = Math.round(currentDsoDays * 0.4);
    const newDsoDays = currentDsoDays - reducedDays;
    const cashUnlockedInLakhs = (amountInLakhs / currentDsoDays) * reducedDays;
    const annualInterestSavedInRupees = (cashUnlockedInLakhs * 100000) * 0.12;

    if (unlockedCashLabel) unlockedCashLabel.textContent = `₹${cashUnlockedInLakhs.toFixed(2)} Lakhs`;
    if (dsoReductionLabel) dsoReductionLabel.textContent = `${currentDsoDays}d → ${newDsoDays}d (${reducedDays}d faster)`;
    if (interestSavedLabel) interestSavedLabel.textContent = `₹${(annualInterestSavedInRupees / 100000).toFixed(2)} Lakhs/yr`;
  }

  if (amountSlider && dsoSlider) {
    amountSlider.addEventListener('input', updateCalc);
    dsoSlider.addEventListener('input', updateCalc);
    updateCalc();
  }
}

/* 4. Sovereign File Inspector & Snippet Copying */
function initInspectorTabs() {
  const tabs = document.querySelectorAll('.inspector-tab');
  const codeDisplay = document.getElementById('inspector-code-display');
  const copyBtn = document.getElementById('btn-copy-inspector');

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

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeDisplay.textContent).then(() => {
        const origText = copyBtn.textContent;
        copyBtn.textContent = 'Copied! ✓';
        copyBtn.style.color = '#10B981';
        copyBtn.style.borderColor = '#10B981';
        setTimeout(() => {
          copyBtn.textContent = origText;
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2000);
      });
    });
  }
}

/* 5. FAQ Accordion & Live Instant Search Filter */
function initFaqSearchAndAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');
  const searchInput = document.getElementById('faq-search-input');

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

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      faqCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

/* 6. Multi-Step Founder Audit Wizard Modal */
function initMultiStepAuditWizard() {
  const modal = document.getElementById('founder-modal');
  if (!modal) return;

  const triggerBtns = document.querySelectorAll('.open-modal');
  const closeBtn = document.querySelector('.modal-close');
  
  const stepDots = document.querySelectorAll('.wizard-step-dot');
  const stepContents = document.querySelectorAll('.wizard-step-content');

  const btnStep1Next = document.getElementById('wizard-btn-step1-next');
  const btnStep2Next = document.getElementById('wizard-btn-step2-next');
  const btnStep2Prev = document.getElementById('wizard-btn-step2-prev');
  const btnStep3Prev = document.getElementById('wizard-btn-step3-prev');

  const form = document.getElementById('founder-audit-wizard-form');

  let currentStep = 1;

  function goToStep(stepNum) {
    currentStep = stepNum;
    stepDots.forEach((dot, index) => {
      dot.classList.remove('active', 'completed');
      if (index + 1 === currentStep) {
        dot.classList.add('active');
      } else if (index + 1 < currentStep) {
        dot.classList.add('completed');
      }
    });

    stepContents.forEach(content => {
      content.classList.remove('active');
      if (parseInt(content.getAttribute('data-step')) === currentStep) {
        content.classList.add('active');
      }
    });
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      goToStep(1);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (btnStep1Next) {
    btnStep1Next.addEventListener('click', () => {
      const name = document.getElementById('audit-name')?.value;
      const company = document.getElementById('audit-company')?.value;
      if (!name || !company) {
        alert('Please fill in your name and company before proceeding.');
        return;
      }
      goToStep(2);
    });
  }

  if (btnStep2Next) {
    btnStep2Next.addEventListener('click', () => {
      const challenge = document.getElementById('audit-challenge')?.value;
      if (!challenge) {
        alert('Please select your primary operational challenge.');
        return;
      }
      goToStep(3);
    });
  }

  if (btnStep2Prev) btnStep2Prev.addEventListener('click', () => goToStep(1));
  if (btnStep3Prev) btnStep3Prev.addEventListener('click', () => goToStep(2));

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const contact = document.getElementById('audit-contact')?.value;
      if (!contact) {
        alert('Please enter your WhatsApp number or email.');
        return;
      }
      alert('🎉 Audit Request Confirmed! Founder Rajesh ji will review your operational requirements and reach out within 4 hours.');
      modal.classList.remove('active');
      form.reset();
      goToStep(1);
    });
  }
}

/* 7. Interactive Sample Work Aging Template Toggles */
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

/* 8. Live Clock Ticker in Top Bar */
function initLiveTickerTime() {
  const timeEl = document.getElementById('live-ticker-time');
  if (!timeEl) return;

  function updateTime() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  setInterval(updateTime, 1000);
  updateTime();
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
