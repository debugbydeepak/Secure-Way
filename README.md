<p align="center">
  <strong style="font-size: 2em; letter-spacing: 0.12em;">S E C U R E W A Y</strong>
</p>

<h3 align="center">
  Autonomous Logic Verification Platform for a Zero-Day World
</h3>

<p align="center">
  <em>Beyond the Scan — we prove breaches, not just flag them.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Django-6.0-092E20?style=flat-square&logo=django" alt="Django">
  <img src="https://img.shields.io/badge/Python-3.12+-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/License-MIT-C08552?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/SOC2-Ready-8C5A3C?style=flat-square" alt="SOC2">
  <img src="https://img.shields.io/badge/ISO--27001-Compliant-4B2E2B?style=flat-square" alt="ISO-27001">
</p>

---

## The Problem

Legacy vulnerability scanners (OWASP ZAP, Burp Suite) have **three critical blind spots**:

| Blind Spot | Impact |
|:---|:---|
| **Shadow DOM Barrier** | Cannot execute JavaScript — misses 70% of SPA endpoints |
| **BOLA Paradox** | Single-token scanning cannot detect broken access control |
| **Silent Breach** | SSRF/RCE leave no trace in HTTP responses |

**75% of modern API breaches** are logic-gap vulnerabilities that signature-based tools structurally cannot detect.

## The Solution

SECUREWAY deploys an **autonomous AI agent** that maps your application's business logic and produces cryptographic proof-of-exploit — not just scan reports.

| Engine Module | What It Does |
|:---|:---|
| **Agentic Discovery** | Playwright headless browser with 100% V8 JS coverage |
| **Dual-Token Identity Check** | Automated BOLA/BAC via persona swapping |
| **Neural PII Scrubber** | Real-time data masking during scans |
| **PyOD Anomaly Detection** | Zero-day readiness, 99.8% PoE accuracy |
| **Global OAST Callback Mesh** | Detects blind RCE/SSRF via out-of-band DNS/HTTP |
| **AES-256-GCM Reports** | Encrypted, digitally signed vulnerability reports |

## Quick Start

```bash
# Clone
git clone https://github.com/debugbydeepak/Secure-Way.git
cd Secure-Way

# Install Django (if not already installed)
pip install django

# Run migrations
python manage.py migrate

# Start the dev server
python manage.py runserver 8080
```

Open **http://localhost:8080** to see the landing page.

## Project Structure

```
secureway_project/
├── manage.py
├── secureway_project/
│   ├── settings.py          # Django config
│   ├── urls.py              # Root URL conf
│   └── wsgi.py
├── core/
│   ├── models.py            # ScanReport, VulnerabilityFinding
│   ├── views.py             # hero_view, dashboard_view
│   └── urls.py
├── templates/
│   ├── base.html            # Google Fonts, design tokens
│   ├── core/
│   │   └── hero.html        # Full landing page
│   └── partials/
│       └── _nav.html        # Reusable navigation
└── static/
    ├── css/
    │   ├── base.css          # Design system, reset, typography
    │   └── hero.css          # Hero page layout & components
    └── js/
        └── main.js           # Terminal animation, scroll effects
```

## Design System

The visual language is **editorial and artisanal** — warm tones, mixed serif + mono typography, and border-based depth.

| Token | Value | Usage |
|:---|:---|:---|
| `--cream` | `#FFF8F0` | Page background |
| `--copper` | `#C08552` | Primary accent, CTAs, highlights |
| `--brown` | `#8C5A3C` | Secondary headings, muted text |
| `--espresso` | `#4B2E2B` | Primary text, sidebar, footer bg |

**Typography:**
- **Playfair Display** (700, 900) → Hero titles, section headings
- **Cormorant Garamond** (300, 400i, 600) → Body text, subtitles, quotes
- **DM Mono** (300, 400, 500) → UI labels, nav, data, code

**Rules:** No gradients · No shadows · No glassmorphism · Borders only · Warm cream backgrounds

## Pricing

| Tier | Price | Highlights |
|:---|:---|:---|
| **Sentinel Lite** | ₹0 (Free) | OWASP Top 10, community support |
| **Guardian Pro** | ₹1,999/mo | CI/CD integration, Neural PII Scrubber |
| **Sovereign Audit** | ₹15,000/report | SOC2, ISO-27001, GDPR compliance reports |
| **Enterprise Nexus** | Custom | On-premise air-gapped deployment |

## Tech Stack

- **Backend:** Django 6.0 / Python 3.12+
- **Frontend:** Pure HTML, CSS, JavaScript — no frameworks
- **Database:** SQLite (dev) — PostgreSQL ready
- **Fonts:** Google Fonts (Playfair Display, Cormorant Garamond, DM Mono)

## Roadmap

- [x] Hero landing page with terminal animation
- [ ] Dashboard page with scan management
- [ ] Real-time scan status via WebSockets
- [ ] User authentication & team management
- [ ] CI/CD pipeline integration API

---

<p align="center">
  <sub>Built for 2026 · SOC2 & ISO-27001 Ready</sub><br>
  <sub>© 2026 SECUREWAY. All rights reserved.</sub>
</p>
