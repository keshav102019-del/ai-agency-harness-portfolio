<?php
/**
 * Main Template File for Harness Studio WordPress Theme
 *
 * @package HarnessStudio
 */

get_header(); ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php wp_title( '|', true, 'right' ); ?> Agent Harness Studio | Custom AI Agent Architecture & Revenue Automation</title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <!-- Top System Status Ticker -->
  <div class="top-notice-bar">
    <div class="container-wide notice-flex">
      <div style="display: flex; align-items: center; gap: 0.85rem;">
        <span class="live-badge"><span class="pulse"></span> DIRECT META CLOUD API: 100% OPERATIONAL</span>
        <span style="color: rgba(255, 255, 255, 0.4);">|</span>
        <span style="color: #94A3B8; font-size: 0.825rem;">24/7 Dedicated VPS: <strong style="color: #F8FAFC;">Active</strong></span>
        <span style="color: rgba(255, 255, 255, 0.4);">|</span>
        <span style="color: #94A3B8; font-size: 0.825rem;">Local Data Storage: <strong style="color: var(--accent-emerald-bright);">100% Secure & Sovereign</strong></span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem; color: #94A3B8; font-size: 0.8rem;">
        <span>Free Direct Meta Keys: <strong style="color: var(--accent-emerald-bright);">0% Markup Tax</strong></span>
        <span style="color: rgba(255, 255, 255, 0.4);">|</span>
        <span id="live-ticker-time" style="font-family: var(--font-mono); color: #F8FAFC;">00:20:22</span>
      </div>
    </div>
  </div>

  <!-- Header Navigation -->
  <header class="editorial-header">
    <div class="container-wide header-flex">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="brand-logo">
        <div class="brand-icon">AH</div>
        <span style="color: var(--text-primary);">HARNESS</span><span style="color: var(--accent-gold);">STUDIO</span>
      </a>
      <nav class="header-nav">
        <a href="#hero-story" class="nav-link">The Truth About AI</a>
        <a href="#failures" class="nav-link">4 AI Failure Modes</a>
        <a href="#case-study-jmbt" class="nav-link">JMBT Patna Case Study</a>
        <a href="#solutions" class="nav-link">What We Build</a>
        <a href="#playground" class="nav-link">Live Playground</a>
        <a href="#comparison" class="nav-link">Competitor Teardown</a>
        <a href="#faq" class="nav-link">FAQ</a>
      </nav>
      <a href="#audit" class="btn-cta open-modal btn-gold-prominent">
        <span>Talk To Us</span>
        <span style="font-size: 1.1rem;">&rarr;</span>
      </a>
    </div>
  </header>

  <main class="container-wide">

    <!-- HERO SECTION -->
    <section id="hero-story" class="hero-section">
      <div class="kicker-pill">
        <span>🟢 B2B REVENUE AUTOMATION & CUSTOM AGENT HARNESSES</span>
        <span>•</span>
        <span>24/7 VPS LOCAL DATA SOVEREIGNTY</span>
      </div>

      <h1 class="main-headline">
        "Stop Buying $5,000 'AI Agents' That Hallucinate Balances, <span>Trigger Messaging Bans, And Fail In Real Work Tasks."</span>
      </h1>

      <div class="byline-wrap">
        <div class="author-img">AH</div>
        <div style="text-align: left;">
          <div style="color: var(--text-primary); font-weight: 700; font-size: 1.05rem;">By Keshav Kumar, Systems Architect & AI Practitioner</div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">Creator of Custom Agent Harness Architecture (ICM + OKF Governed)</div>
        </div>
      </div>

      <p style="font-size: 1.25rem; color: var(--text-primary); font-weight: 400; max-width: 900px; margin: 0 auto 3rem; line-height: 1.85;">
        Everyone on the internet is marketing AI—claiming <em>"AI can automate everything."</em> But when it comes to real business tasks, AI agents hallucinate, cascade into bugs, and fail. We engineer <strong>Custom Agent Harnesses</strong> for WhatsApp Business API and Email Revenue Operations—deployed 24/7 on dedicated VPS with <strong>100% local sovereign data storage, zero cloud leaks, and a 30-Day Co-Deployed Output Guarantee</strong>.
      </p>

      <div style="display: flex; gap: 1.25rem; justify-content: center; align-items: center; margin-bottom: 4rem; flex-wrap: wrap;">
        <a href="#audit" class="btn-cta open-modal btn-gold-prominent" style="padding: 1.1rem 2.5rem; font-size: 1.05rem;">
          <span>Talk To Us</span>
          <span style="font-size: 1.2rem;">&rarr;</span>
        </a>
        <a href="#case-study-jmbt" class="btn-cta-secondary" style="padding: 1.1rem 2.5rem; font-size: 1.05rem;">
          <span>Read Case Study ↓</span>
        </a>
      </div>

      <!-- Hero Visual Showcase -->
      <div class="hero-image-wrap">
        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/chatwoot_dashboard.png?v=20260803' ); ?>" alt="Chatwoot Live WhatsApp Business API Client Interaction Dashboard" loading="eager">
      </div>
    </section>

    <!-- PROOF METRICS BAR -->
    <section class="proof-bar">
      <div class="proof-card">
        <div class="proof-grid">
          <div>
            <div class="proof-val counter-val" data-target="72.42" data-prefix="₹" data-suffix="L+" style="color: var(--accent-gold);">₹72.42L+</div>
            <div class="proof-label">Trapped Receivables Recovered</div>
          </div>
          <div>
            <div class="proof-val counter-val" data-target="1181" data-prefix="" data-suffix=" Ledgers" style="color: var(--text-primary);">1,181 Ledgers</div>
            <div class="proof-label">Active Client Ledgers Tracked</div>
          </div>
          <div>
            <div class="proof-val counter-val" data-target="100" data-prefix="" data-suffix="%" style="color: var(--accent-emerald);">100%</div>
            <div class="proof-label">Local Data Sovereignty (VPS)</div>
          </div>
          <div>
            <div class="proof-val counter-val" data-target="0" data-prefix="" data-suffix=" Bans" style="color: var(--accent-emerald);">0 Bans</div>
            <div class="proof-label">100% Direct Meta WABA API</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 1: THE 4 FAILURE MODES OF BUSINESS AI -->
    <section id="failures" class="section-wrap">
      <span class="section-kicker">// 01. THE PROBLEM WITH GENERIC AI</span>
      <h2 class="section-title">The 4 Failure Modes of Business AI</h2>
      <p class="section-sub">Why off-the-shelf SaaS apps, n8n flowcharts, and generic AI agencies collapse when faced with real business operations.</p>

      <div class="bento-grid-2col" style="margin-bottom: 2.5rem;">
        <div class="bento-card">
          <span class="bento-badge badge-red">FAILURE MODE 01</span>
          <h4 style="font-size: 1.35rem; margin-bottom: 0.85rem; color: var(--text-primary);">1. The Accuracy Bottleneck & Confident Hallucination Cascades</h4>
          <p style="font-size: 0.975rem; color: var(--text-secondary);">
            <em>"My biggest fear isn't that AI fails—it's <strong>confident hallucinations</strong>. The AI does the wrong thing with supreme confidence."</em>
          </p>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0;">
            General-purpose AI models are probabilistic. In a business with real ledgers, a 95% accuracy rate means 5% catastrophic failure. One wrong balance calculation triggers a <strong>bug cascade</strong>—where fixing 1 bug creates 3 new bugs, sending duplicate spams 20 to 30 times and destroying client trust.
          </p>
        </div>

        <div class="bento-card">
          <span class="bento-badge badge-red">FAILURE MODE 02</span>
          <h4 style="font-size: 1.35rem; margin-bottom: 0.85rem; color: var(--text-primary);">2. The 3-Month Laptop Headache & Token Runaway Trap</h4>
          <p style="font-size: 0.975rem; color: var(--text-secondary);">
            <em>"The subscription cost isn't what kills you—<strong>the real cost is the hidden maintenance</strong>."</em>
          </p>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0;">
            Building heavy agentic workflows without context constraints forces you to sit at your laptop every single day debugging errors. Input token costs run away ($400/month for $50 worth of output), latency creates messaging lag, and non-technical staff cannot understand or manage the system.
          </p>
        </div>
      </div>

      <div class="bento-grid-2col">
        <div class="bento-card">
          <span class="bento-badge badge-red">FAILURE MODE 03</span>
          <h4 style="font-size: 1.35rem; margin-bottom: 0.85rem; color: var(--text-primary);">3. The "One-Size-Fits-All" Agency & n8n House of Cards</h4>
          <p style="font-size: 0.975rem; color: var(--text-secondary);">
            <em>"90% of AI agencies sell <strong>demos with a payment form</strong>. Complex n8n flowcharts are a <strong>house of cards</strong>."</em>
          </p>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0;">
            Freelancers charging ₹10,000 to ₹50,000 sell the exact same copy-paste n8n/Zapier workflow to everyone. They don't understand your business, your credit terms, or your payment promise dates. One API update or client typo shatters the entire workflow, and the freelancer ghosts you.
          </p>
        </div>

        <div class="bento-card" style="border-color: var(--border-red); background: rgba(239, 68, 68, 0.02);">
          <span class="bento-badge badge-red">FAILURE MODE 04</span>
          <h4 style="font-size: 1.35rem; color: var(--accent-red); margin-bottom: 0.85rem;">4. WhatsApp Scraper Account Bans & Middleman Markup Taxes</h4>
          <p style="font-size: 0.975rem; color: var(--text-secondary);">
            <em>"Using unofficial scrapers got business WhatsApp lines permanently banned."</em>
          </p>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0;">
            Cheap tools use unapproved browser scrapers (WAHA, Baileys, Selenium) that get detected by Meta's network algorithms, resulting in <strong>permanent account bans</strong> that wipe out years of customer contacts. Meanwhile, third-party SaaS platforms (Wati, AiSensy) charge heavy monthly subscriptions plus a 10%–39% markup tax on Meta messages.
          </p>
        </div>
      </div>

      <div class="callout-card">
        <p>
          "Don't pitch me AI. Pitch me a solution to a R.U.D.E. problem (Recognized, Urgent, Deep, Emotional). After burning cash and struggling with hallucinations, I learned: CONTEXT IS GOD. When you govern context tightly with sovereign files, hallucinations vanish completely."
        </p>
      </div>
    </section>

    <!-- SECTION 2: THE APPROVED JMBT PATNA GROUND TRUTH CASE STUDY -->
    <section id="case-study-jmbt" class="section-wrap">
      <article class="editorial-case-study">
        
        <header style="text-align: center; margin-bottom: 4rem;">
          <span class="section-kicker">// 02. AUTHENTIC GROUND TRUTH CASE STUDY</span>
          <h2 style="font-size: 2.85rem; color: var(--text-primary); margin-top: 0.85rem; line-height: 1.2;">
            The Wholesale Credit Nightmare: How A Failed AI Workflow Taught Us What Businesses Actually Need
          </h2>
          <p style="font-size: 1.15rem; color: var(--text-secondary); max-width: 760px; margin: 1.15rem auto 0;">
            The authentic operational story of Manoj Kumar (Founder, Jai Maa Bhagwati Traders, Patna) & Keshav Kumar, cement & rod credit ledgers, scraper ban recovery, and the creation of the Custom Agent Harness.
          </p>
        </header>

        <!-- Stat Bento -->
        <aside class="cs-stat-bento" style="margin-bottom: 4rem;">
          <div class="proof-grid">
            <div>
              <div style="font-size: 2.3rem; font-weight: 800; color: var(--accent-gold);">₹72.42L+</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Receivables Unlocked</div>
            </div>
            <div>
              <div style="font-size: 2.3rem; font-weight: 800; color: var(--text-primary);">1,181</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Active Clients</div>
            </div>
            <div>
              <div style="font-size: 2.3rem; font-weight: 800; color: var(--accent-emerald);">₹50k/mo</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Saved On Staff</div>
            </div>
            <div>
              <div style="font-size: 2.3rem; font-weight: 800; color: var(--accent-emerald);">0 Bans</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">100% Direct Meta API</div>
            </div>
          </div>
        </aside>

        <!-- Narrative Story Content (EXACT APPROVED TEXT) -->
        <div class="cs-narrative" style="max-width: 820px; margin: 0 auto; font-size: 1.15rem; line-height: 1.9; color: #1e293b;">
          
          <h3 style="font-size: 1.7rem; color: var(--text-primary); margin-bottom: 1.15rem;">1. The 1,000+ Client Construction Ledger Crisis</h3>

          <p>
            Manoj Kumar runs <em>Jai Maa Bhagwati Traders (JMBT)</em> in Patna—a wholesale dealership for heavy construction materials: cement, TMT steel rods, and PVC/iron pipes.
          </p>

          <p>
            In the construction trade, sales volume is high (₹10L to ₹20L per client), but buyers maintain continuous rolling credit balances (keeping ₹20,000 to ₹30,000 unpaid, or ₹1L to ₹3L pending). Over 1,181 retail contractors and dealers relied on JMBT.
          </p>

          <p>
            Manoj Kumar was running the business alone. It was physically impossible for one man to call thousands of clients every month. Hiring dedicated account managers meant paying <strong>₹30,000 to ₹50,000/month</strong>, yet staff still made register-matching errors and forgot follow-ups on promised payment dates. Over ₹70 Lakhs remained trapped in the market.
          </p>

          <figure style="margin: 3.5rem 0; padding: 2.25rem 0; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); text-align: center;">
            <blockquote style="font-family: var(--font-serif); font-style: italic; font-size: 1.85rem; line-height: 1.4; color: var(--text-primary); margin-bottom: 1rem;">
              "My father Manoj Kumar was spending 60 hours a week dialing unpaid accounts while his own suppliers demanded cash clearing. You can't hire 3 managers at ₹50,000 every month just to match registers."
            </blockquote>
            <figcaption style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">&mdash; Keshav Kumar, Son & System Architect</figcaption>
          </figure>

          <h3 style="font-size: 1.7rem; color: var(--text-primary); margin: 2.75rem 0 1.15rem;">2. The Scraper Ban, Custom Agent Failures & The 3-Month AI Nightmare</h3>

          <p>
            Desperate for a fix, Keshav turned to technology. First, an unapproved browser scraper software got Manoj Kumar's <strong>10-year-old primary WhatsApp business account permanently banned by Meta</strong>, destroying years of customer chat history and trust in one morning. 
          </p>

          <p>
            Next, Keshav tried hiring freelancers for n8n/Zapier bots, but they hallucinated 40% discounts on pending bills and spammed VIP clients. 
          </p>

          <p>
            Determined to fix it himself, Keshav spent months building his own <strong>custom AI agentic workflows</strong>. But the moment real business data entered the system, the custom agentic workflow collapsed:
          </p>

          <ul style="padding-left: 1.5rem; margin-bottom: 2.5rem;">
            <li style="margin-bottom: 0.85rem;"><strong>Heavy, Complex & Filled with Lag:</strong> Running multiple sub-agents was too heavy, created severe latency, and was a nightmare to manage.</li>
            <li style="margin-bottom: 0.85rem;"><strong>The Hallucination Cascade:</strong> There was always a bug. When the AI hallucinated a single piece of data, it triggered a <strong>cascade of errors</strong>—mismatched client records, wrong numbers, wrong emails, and 20 to 30 duplicate spam messages firing at angry customers.</li>
            <li style="margin-bottom: 0.85rem;"><strong>3 Months Staring at a Laptop:</strong> For 3 agonizing months, Keshav sat at his laptop every single day trying to fix one bug, only for 3 new bugs to appear. Input token costs skyrocketed, latency mounted, and zero reliable output was achieved.</li>
          </ul>

          <h3 style="font-size: 1.7rem; color: var(--text-primary); margin: 2.75rem 0 1.15rem;">3. How Keshav Solved It: The Custom Agent Harness Breakthrough</h3>

          <p>
            After 3 months of frustration, Keshav stepped back and analyzed the problem from first principles. He realized a fundamental truth: <strong>You don't need an AI agent. You need a Custom Agent Harness.</strong>
          </p>

          <p>
            Anyone can launch 100 sub-agents. But in a real business, unconstrained agents will always hallucinate. Furthermore, you cannot sell a copy-paste SaaS product or generic template to every business—every company has unique ledgers, credit terms, and operational edge cases.
          </p>

          <p>
            Keshav stopped trying to build complex agents and engineered a <strong>Custom Agent Harness</strong> built on three breakthrough principles:
          </p>

          <ul style="padding-left: 1.5rem; margin-bottom: 2.5rem;">
            <li style="margin-bottom: 0.85rem;"><strong>Governed Sovereign Context (ICM + OKF):</strong> Keshav combined <em>Interpretable Context Methodology (ICM)</em> and the <em>Open Knowledge Format (OKF)</em>. Instead of complex code or black-box flowcharts, all business rules, context, and ledger logic were written in plain-text Markdown files (`.md`). The system became so <strong>simple</strong> that his father Manoj Kumar or any non-technical staff member could open a file, read the rules in plain English, and understand exactly what the system was doing.</li>
            <li style="margin-bottom: 0.85rem;"><strong>Direct Official Meta Cloud API (0% Ban Risk):</strong> He threw out unofficial scrapers and provisioned official Meta WABA Cloud API keys directly from Meta—eliminating account ban risks completely while bypassing middleman SaaS markup taxes.</li>
            <li style="margin-bottom: 0.85rem;"><strong>Smart Failure & Human-in-the-Loop (HITL):</strong> If a client reported a damaged shipment, a Khata dispute, or requested a payment date extension, the harness didn't guess. It safely <strong>paused automated messaging</strong> for that contact and alerted Manoj Kumar for manual review.</li>
          </ul>

          <h3 style="font-size: 1.7rem; color: var(--text-primary); margin: 2.75rem 0 1.15rem;">4. Positive Results & Building For Others</h3>

          <p>
            The Custom Agent Harness delivered immediate, transformational results:
          </p>

          <ul style="padding-left: 1.5rem; margin-bottom: 2.5rem;">
            <li style="margin-bottom: 0.85rem;"><strong>Unblocked Liquidity:</strong> Accurately tracked and recovered pending accounts across 1,000+ construction contractors without a single calculation error.</li>
            <li style="margin-bottom: 0.85rem;"><strong>Cost Saved:</strong> Saved Manoj Kumar <strong>₹30,000 to ₹50,000/month</strong> in unnecessary account manager salaries.</li>
            <li style="margin-bottom: 0.85rem;"><strong>Zero Account Risk:</strong> 100% official Meta compliance with zero WhatsApp account bans or spam flags.</li>
          </ul>

          <p>
            After seeing his father's business transform from a daily operational nightmare into a smooth, automated system, Keshav realized that <strong>every business owner is struggling with broken AI hype and custom operational bottlenecks</strong>. 
          </p>

          <p>
            Today, Keshav builds <strong>Custom Agent Harnesses</strong> for business owners—working directly with them to solve their operational bottlenecks and co-deploying for 30 days to guarantee <strong>Desired Business Output</strong>.
          </p>

          <div style="text-align: center; margin-top: 4rem; padding-top: 2.5rem; border-top: 1px solid var(--border-light);">
            <a href="#audit" class="btn-cta open-modal btn-gold-prominent" style="font-size: 1.1rem; padding: 1.25rem 3rem;">Talk To Us &rarr;</a>
          </div>

        </div>
      </article>
    </section>

    <!-- SECTION 3: WHAT WE ENGINEER -->
    <section id="solutions" class="section-wrap">
      <span class="section-kicker">// 03. OUR SYSTEM SPECIFICATION</span>
      <h2 class="section-title">What We Engineer: Custom Agent Harnesses</h2>
      <p class="section-sub">We don't build generic chatbots. We build custom sovereign file harnesses tailored to your exact revenue operations, running 24/7 on your dedicated VPS.</p>

      <div class="bento-grid-3col">
        <div class="bento-card">
          <span class="bento-badge badge-gold">APPLICATION 01</span>
          <h4 style="font-size: 1.3rem; margin-bottom: 0.65rem; color: var(--text-primary);">WhatsApp WABA Automated Collection Harness</h4>
          <p style="font-size: 0.925rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
            Direct official Meta WABA Cloud API integration with 0% ban risk and 0% markup tax. Dynamic credit aging (1–15d, 16–30d, 31+d), payment promise date tracking, and automatic Smart HITL pause on client disputes.
          </p>
          <ul style="font-size: 0.85rem; color: var(--text-muted); padding-left: 1.1rem; line-height: 1.6;">
            <li>0% Calculation Error (`contract.schema.json`)</li>
            <li>Free Direct Meta API Key Provisioning</li>
            <li>Automatic Dispute Route to Human Staff</li>
          </ul>
        </div>

        <div class="bento-card">
          <span class="bento-badge badge-gold">APPLICATION 02</span>
          <h4 style="font-size: 1.3rem; margin-bottom: 0.65rem; color: var(--text-primary);">Email RevOps & Lead Routing Harness</h4>
          <p style="font-size: 0.925rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
            Autonomous inbound lead routing, qualification, and B2B lifecycle nurturing. Built with strict domain reputation protection, SPF/DKIM/DMARC alignment, and zero Spamhaus blacklisting risk.
          </p>
          <ul style="font-size: 0.85rem; color: var(--text-muted); padding-left: 1.1rem; line-height: 1.6;">
            <li>Zero Spamhaus / Deliverability Blacklist Risk</li>
            <li>Custom Lead Scoring & Data Enriched Routing</li>
            <li>Seamless CRM & Webhook Integration</li>
          </ul>
        </div>

        <div class="bento-card" style="border-color: var(--border-emerald); background: rgba(16, 185, 129, 0.02);">
          <span class="bento-badge badge-emerald">APPLICATION 03</span>
          <h4 style="font-size: 1.3rem; margin-bottom: 0.65rem; color: var(--text-primary);">24/7 VPS Sovereign Storage & Ledger Harness</h4>
          <p style="font-size: 0.925rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
            Runs continuously on your dedicated 24/7 VPS dashboard with <strong>100% local sovereign data storage</strong>. Your ledgers stay locally on your machine—zero third-party cloud data leaks, zero database exposure, zero hacking vulnerabilities.
          </p>
          <ul style="font-size: 0.85rem; color: var(--text-muted); padding-left: 1.1rem; line-height: 1.6;">
            <li>100% Local Data Ownership & Zero Cloud Leaks</li>
            <li>24/7 Continuous Autonomous VPS Execution</li>
            <li>Plain-Text Sovereign File Inspection (`.md`)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 4: LIVE PLAYGROUND -->
    <section id="playground" class="section-wrap">
      <span class="section-kicker">// 04. INTERACTIVE VERIFICATION</span>
      <h2 class="section-title">Live Custom Harness Playground</h2>
      <p class="section-sub">Test how our verified WABA Harness enforces 100% deterministic outputs vs how generic AI agents hallucinate.</p>

      <div class="playground-box">
        <div class="playground-grid">
          
          <div class="playground-controls">
            <h4 style="font-size: 1.2rem; color: var(--accent-gold); margin-bottom: 0.5rem;">🕹️ Interactive Controls</h4>
            
            <div class="control-group">
              <label class="control-label">Client / Merchant Name:</label>
              <input type="text" id="playground-client-name" class="control-input" value="Rajesh Hardware Patna">
            </div>

            <div class="control-group">
              <label class="control-label" style="display: flex; justify-content: space-between;">
                <span>Outstanding Balance:</span>
                <span id="playground-amount-val" style="color: var(--accent-gold); font-weight: 700;">₹15,711</span>
              </label>
              <input type="range" id="playground-amount-slider" class="calc-slider" min="1000" max="150000" step="1000" value="15711">
            </div>

            <div class="control-group">
              <label class="control-label">Execution Scenario:</label>
              <select id="playground-scenario-select" class="control-select">
                <option value="bucket1">🟢 Bucket 1 (1–15 Days): Polite Nudge</option>
                <option value="bucket2">🟡 Bucket 2 (16–30 Days): Soft Ledger Summary</option>
                <option value="bucket3">🔴 Bucket 3 (31+ Days): Direct Overdue Query</option>
                <option value="disputed">⚡ Disputed Merchant: Smart HITL Pause Engine</option>
                <option value="flaky_bot">❌ Flaky AI Bot Mode (Failure Showcase)</option>
              </select>
            </div>
          </div>

          <!-- Chat Screen -->
          <div class="chat-screen">
            <div id="playground-chat-display">
              <!-- Rendered via JS -->
            </div>
            <div id="playground-status-display">
              <!-- Status badge via JS -->
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 5: COMPETITOR COMPARISON TEARDOWN -->
    <section id="comparison" class="section-wrap">
      <span class="section-kicker">// 05. MARKET COMPARISON</span>
      <h2 class="section-title">Custom Agent Harness vs The Market</h2>
      <p class="section-sub">Why off-the-shelf WhatsApp SaaS apps (Wati, AiSensy), Khatabook, and n8n freelancers fail in real business operations.</p>

      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; background: #FFFFFF; border-radius: var(--radius-md); border: 1px solid var(--border-light); overflow: hidden; box-shadow: var(--shadow-md);">
          <thead>
            <tr style="background: #0F172A; color: #FFFFFF; text-align: left; font-family: var(--font-display);">
              <th style="padding: 1.25rem 1.5rem;">Feature / Capability</th>
              <th style="padding: 1.25rem 1.5rem;">WhatsApp SaaS (Wati/AiSensy)</th>
              <th style="padding: 1.25rem 1.5rem;">Accounting Apps (Khatabook)</th>
              <th style="padding: 1.25rem 1.5rem;">AI Agencies (n8n/Zapier)</th>
              <th style="padding: 1.25rem 1.5rem; background: var(--accent-gold); color: #0F172A;">Agent Harness Studio (ICM + OKF)</th>
            </tr>
          </thead>
          <tbody style="font-size: 0.95rem;">
            <tr style="border-bottom: 1px solid var(--border-light);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">WhatsApp Account Safety</td>
              <td style="padding: 1.15rem 1.5rem;">Official WABA</td>
              <td style="padding: 1.15rem 1.5rem;">N/A (Manual Click)</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-red); font-weight: 600;">🔴 High Ban Risk (Scrapers)</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-emerald); font-weight: 700; background: var(--accent-emerald-soft);">🟢 0% Ban Risk (Direct Meta Cloud API)</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-light);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">API Cost Structure</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-red);">🔴 10%–39% Markup Tax</td>
              <td style="padding: 1.15rem 1.5rem;">N/A</td>
              <td style="padding: 1.15rem 1.5rem;">Variable API Costs</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-emerald); font-weight: 700; background: var(--accent-emerald-soft);">🟢 Free Direct Meta Keys (0% Markup)</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-light);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">Ledger & Khata Parsing</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--text-muted);">❌ No</td>
              <td style="padding: 1.15rem 1.5rem;">🟡 Basic Entry Only</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--text-muted);">❌ Unreliable</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-emerald); font-weight: 700; background: var(--accent-emerald-soft);">🟢 Advanced Sovereign Markdown Parsing</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-light);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">Data Privacy & Security</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-red);">🔴 Third-Party SaaS Storage</td>
              <td style="padding: 1.15rem 1.5rem;">Closed Cloud DB</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-red);">🔴 External Webhooks</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-emerald); font-weight: 700; background: var(--accent-emerald-soft);">🟢 100% Local Sovereign Data (24/7 VPS)</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-light);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">Zero-Hallucination Gate</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--text-muted);">❌ Rule Flowchart Only</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--text-muted);">❌ None</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-red);">❌ Probabilistic (Guesses)</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-emerald); font-weight: 700; background: var(--accent-emerald-soft);">🟢 contract.schema.json Math Gate</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-light);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">Dispute & Promise Handling</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--text-muted);">❌ Fails on Typos</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--text-muted);">❌ Manual Only</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--text-muted);">❌ Breaks Workflow</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-emerald); font-weight: 700; background: var(--accent-emerald-soft);">🟢 Smart HITL Pause Engine</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-light);">
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">System Transparency</td>
              <td style="padding: 1.15rem 1.5rem;">Black-Box SaaS</td>
              <td style="padding: 1.15rem 1.5rem;">Closed Mobile App</td>
              <td style="padding: 1.15rem 1.5rem;">Complex JSON Spaghetti</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-emerald); font-weight: 700; background: var(--accent-emerald-soft);">🟢 Sovereign Markdown (.md) Files</td>
            </tr>
            <tr>
              <td style="padding: 1.15rem 1.5rem; font-weight: 600;">Business Commitment</td>
              <td style="padding: 1.15rem 1.5rem;">Monthly Software Sub</td>
              <td style="padding: 1.15rem 1.5rem;">Software License</td>
              <td style="padding: 1.15rem 1.5rem;">One-off Code Drop</td>
              <td style="padding: 1.15rem 1.5rem; color: var(--accent-emerald); font-weight: 700; background: var(--accent-emerald-soft);">🟢 30-Day Co-Deployment Output Guarantee</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 6: FAQ WITH SEARCH -->
    <section id="faq" class="section-wrap">
      <span class="section-kicker">// 06. FREQUENTLY ASKED QUESTIONS</span>
      <h2 class="section-title">Frequently Asked Questions</h2>
      <p class="section-sub">Got questions about Meta WABA API integration, 24/7 VPS hosting, or zero-hallucination guarantees? Search below:</p>
      
      <div class="faq-search-wrap">
        <input type="text" id="faq-search-input" class="faq-search-input" placeholder="🔍 Type to search FAQ (e.g. Meta API, VPS, local data, ban, dispute)...">
      </div>

      <div class="faq-list">
        <div class="faq-card">
          <button class="faq-q">
            <span>How is my business data kept 100% safe from cloud leaks or hacking?</span>
            <span class="faq-q-icon">+</span>
          </button>
          <div class="faq-a">
            We run your harness continuously on a dedicated 24/7 VPS with 100% local sovereign data storage. All your customer ledgers and rules live locally on your private machine—zero third-party cloud data leaks, zero external database exposure, and maximum security.
          </div>
        </div>

        <div class="faq-card">
          <button class="faq-q">
            <span>Why do you build custom software instead of selling a monthly SaaS app?</span>
            <span class="faq-q-icon">+</span>
          </button>
          <div class="faq-a">
            Because every real business has unique credit rules, payment habits, and edge cases. Generic SaaS tools force you into rigid templates that break. We build custom harnesses inside your business that evolve with you.
          </div>
        </div>

        <div class="faq-card">
          <button class="faq-q">
            <span>Why do you set up our Direct Meta API key for free?</span>
            <span class="faq-q-icon">+</span>
          </button>
          <div class="faq-a">
            Because Meta provides direct Cloud API access without fees. Third-party SaaS tools add 10%–39% markups and introduce account risk. Setting up direct keys ensures 100% official compliance and zero vendor tax.
          </div>
        </div>

        <div class="faq-card">
          <button class="faq-q">
            <span>How do you guarantee the AI won't hallucinate or send wrong balance calculations?</span>
            <span class="faq-q-icon">+</span>
          </button>
          <div class="faq-a">
            All numerical outputs must pass strict `contract.schema.json` mathematical checks against your accounting records before any Meta WABA or email message is dispatched.
          </div>
        </div>

        <div class="faq-card">
          <button class="faq-q">
            <span>What happens when a customer reports a damaged delivery or dispute?</span>
            <span class="faq-q-icon">+</span>
          </button>
          <div class="faq-a">
            The Smart Human-in-the-Loop (HITL) engine detects dispute keywords, instantly pauses automated messaging for that specific contact, and routes the conversation to your team for manual review.
          </div>
        </div>

        <div class="faq-card">
          <button class="faq-q">
            <span>What does your "30-Day Co-Deployment" mean?</span>
            <span class="faq-q-icon">+</span>
          </button>
          <div class="faq-a">
            We don't drop code and ghost. We stay with your business for 30 days, test real-world customer responses, refine rules, and ensure the system delivers the exact financial output promised.
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: AUDIT CTA -->
    <section id="audit" class="section-wrap" style="text-align: center; border-bottom: none; padding-bottom: 7rem;">
      <span class="section-kicker">// 07. NEXT STEPS</span>
      <h2 style="font-size: 3rem; margin-bottom: 1.25rem;">Schedule an Operational Problem Audit</h2>
      <p style="color: var(--text-secondary); max-width: 660px; margin: 0 auto 2.75rem; font-size: 1.15rem;">
        We limit monthly partner intake to 2 companies to ensure dedicated custom engineering and zero-error deployment.
      </p>
      <button class="btn-cta open-modal btn-gold-prominent" style="font-size: 1.2rem; padding: 1.35rem 3.5rem;">Talk To Us &rarr;</button>
    </section>

  </main>

  <!-- Sticky Bottom CTA Bar for Mobile Devices -->
  <div class="sticky-mobile-cta">
    <a href="#audit" class="btn-cta open-modal btn-gold-prominent" style="width: 100%; justify-content: center; font-size: 1rem; padding: 0.9rem 1.5rem;">
      <span>Talk To Us &rarr;</span>
    </a>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <div class="container-wide">
      <p>© <?php echo date('Y'); ?> Agent Harness Studio. B2B Revenue Automation Engineering. Built with ICM & Direct Meta WABA Cloud API.</p>
    </div>
  </footer>

  <!-- Multi-Step Founder Booking Wizard Modal -->
  <div id="founder-modal" class="modal-overlay">
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      
      <div class="wizard-steps-nav">
        <div class="wizard-step-dot active"></div>
        <div class="wizard-step-dot"></div>
        <div class="wizard-step-dot"></div>
      </div>

      <form id="founder-audit-wizard-form">
        
        <!-- STEP 1: Basic Founder Info -->
        <div class="wizard-step-content active" data-step="1">
          <h3 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 0.5rem;">Step 1: Business Identity</h3>
          <p style="font-size: 0.925rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Tell us about your business so system architect Keshav Kumar can review your operational context before the call.
          </p>

          <div class="form-group">
            <label class="form-label">Your Name</label>
            <input type="text" id="audit-name" class="form-input" placeholder="e.g. Rajesh Kumar" required>
          </div>
          <div class="form-group">
            <label class="form-label">Company Name & Industry</label>
            <input type="text" id="audit-company" class="form-input" placeholder="e.g. Acme Wholesale (B2B Distribution)" required>
          </div>

          <button type="button" id="wizard-btn-step1-next" class="btn-cta btn-gold-prominent" style="width: 100%; margin-top: 1rem;">Next: Bottleneck Assessment &rarr;</button>
        </div>

        <!-- STEP 2: Bottleneck Assessment -->
        <div class="wizard-step-content" data-step="2">
          <h3 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 0.5rem;">Step 2: Operational Bottleneck</h3>
          <p style="font-size: 0.925rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            What is currently trapping your capital or causing operational headaches?
          </p>

          <div class="form-group">
            <label class="form-label">Primary Operational Challenge</label>
            <select id="audit-challenge" class="form-select" required>
              <option value="">Select primary bottleneck...</option>
              <option value="collections">High DSO / Outstanding ledgers (Over ₹50L trapped)</option>
              <option value="banned">WhatsApp account ban risk / Using scrapers</option>
              <option value="hallucinations">AI bot messaging errors / Customer disputes</option>
              <option value="custom">ERP / Tally / Custom ledger integration</option>
            </select>
          </div>

          <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
            <button type="button" id="wizard-btn-step2-prev" class="btn-cta-secondary" style="flex: 1;">&larr; Back</button>
            <button type="button" id="wizard-btn-step2-next" class="btn-cta btn-gold-prominent" style="flex: 2;">Next: Contact Details &rarr;</button>
          </div>
        </div>

        <!-- STEP 3: Contact & Submit -->
        <div class="wizard-step-content" data-step="3">
          <h3 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 0.5rem;">Step 3: Direct Contact</h3>
          <p style="font-size: 0.925rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Where should system architect Keshav Kumar send your audit findings?
          </p>

          <div class="form-group">
            <label class="form-label">WhatsApp Number / Business Email</label>
            <input type="text" id="audit-contact" class="form-input" placeholder="+91 98765 43210 / name@company.com" required>
          </div>

          <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
            <button type="button" id="wizard-btn-step3-prev" class="btn-cta-secondary" style="flex: 1;">&larr; Back</button>
            <button type="submit" class="btn-cta btn-gold-prominent" style="flex: 2;">Submit Audit Request &rarr;</button>
          </div>
        </div>

      </form>
    </div>
  </div>

  <?php wp_footer(); ?>
</body>
</html>
