/* ==========================================================================
   AGENT HARNESS STUDIO — INTERACTIVE CLIENT & ENGINE CONTROLLER (PRO MAX)
   Includes: Real-time Live WABA Playground, Scroll Ticker, Multi-Step Audit Wizard, FAQ Live Search, Keyboard Support & ARIA Accessibility
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLiveWabaPlayground();
  initAnimatedCounters();
  initFaqSearchAndAccordion();
  initMultiStepAuditWizard();
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
    const rawVal = amountSlider ? parseInt(amountSlider.value, 10) : 15711;
    const amountVal = rawVal.toLocaleString('en-IN');
    if (amountValLabel) amountValLabel.textContent = `₹${amountVal}`;

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

  window.addEventListener('scroll', runCounters, { passive: true });
  runCounters();
}

/* 3. FAQ Accordion & Live Instant Search Filter with ARIA Accessibility */
function initFaqSearchAndAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');
  const searchInput = document.getElementById('faq-search-input');

  faqCards.forEach(card => {
    const qBtn = card.querySelector('.faq-q');
    if (!qBtn) return;
    
    // Set initial ARIA state
    qBtn.setAttribute('aria-expanded', 'false');

    qBtn.addEventListener('click', () => {
      const isActive = card.classList.contains('active');
      faqCards.forEach(c => {
        c.classList.remove('active');
        const b = c.querySelector('.faq-q');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        card.classList.add('active');
        qBtn.setAttribute('aria-expanded', 'true');
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

/* 4. Multi-Step Founder Audit Wizard Modal with Keyboard Esc Support & Focus Handling */
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
      if (parseInt(content.getAttribute('data-step'), 10) === currentStep) {
        content.classList.add('active');
        // Auto-focus first input of active step
        const firstInput = content.querySelector('input, select');
        if (firstInput) setTimeout(() => firstInput.focus(), 100);
      }
    });
  }

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    goToStep(1);
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
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
      alert('🎉 Audit Request Confirmed! Founder Keshav Kumar will review your operational requirements and reach out within 4 hours.');
      closeModal();
      form.reset();
      goToStep(1);
    });
  }
}

/* 5. Live Clock Ticker in Top Bar */
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
