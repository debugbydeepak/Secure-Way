/* ═══════════════════════════════════════════════════════
   SECUREWAY — Main JavaScript
   Terminal typewriter, scroll observer, nav toggle
   ═══════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ── Terminal Typewriter Animation ───────────────── */
    const terminalLines = [
        { text: '> secureway --target https://app.example.com --mode full', cls: 'terminal__line--prompt', delay: 40 },
        { text: '', cls: '', delay: 600 },
        { text: '  Initializing Playwright headless browser...', cls: '', delay: 30 },
        { text: '  V8 engine ready. Shadow DOM rendering enabled.', cls: 'terminal__line--success', delay: 25 },
        { text: '', cls: '', delay: 400 },
        { text: '> Crawling target... 247 endpoints discovered', cls: 'terminal__line--prompt', delay: 35 },
        { text: '> Shadow DOM rendered. 31 hidden API routes mapped.', cls: 'terminal__line--success', delay: 30 },
        { text: '  ├─ /api/v2/users/{id}/settings  (authenticated)', cls: '', delay: 20 },
        { text: '  ├─ /api/v2/admin/export         (role: admin)', cls: '', delay: 20 },
        { text: '  └─ /internal/webhook/callback    (undocumented)', cls: 'terminal__line--alert', delay: 20 },
        { text: '', cls: '', delay: 500 },
        { text: '> Dual-Token BOLA check initiated...', cls: 'terminal__line--prompt', delay: 35 },
        { text: '  Swapping: USER_A token → USER_B resource', cls: '', delay: 28 },
        { text: '  GET /api/v2/users/1042/settings', cls: '', delay: 25 },
        { text: '  Response: 200 OK — BREACH CONFIRMED [HIGH]', cls: 'terminal__line--critical', delay: 30 },
        { text: '', cls: '', delay: 400 },
        { text: '> PII scan: 3 fields detected, scrubbing...', cls: 'terminal__line--prompt', delay: 30 },
        { text: '  email: j███@██████.com  ✓ masked', cls: 'terminal__line--success', delay: 22 },
        { text: '  phone: +91-████-██48   ✓ masked', cls: 'terminal__line--success', delay: 22 },
        { text: '  aadhaar: XXXX-XXXX-7291 ✓ masked', cls: 'terminal__line--success', delay: 22 },
        { text: '', cls: '', delay: 400 },
        { text: '> OAST callback listener active on 3 regions...', cls: 'terminal__line--prompt', delay: 30 },
        { text: '  Blind SSRF payload delivered to /internal/webhook', cls: '', delay: 25 },
        { text: '  ⚠ DNS callback received: ap-south-1 (14ms)', cls: 'terminal__line--alert', delay: 28 },
        { text: '  SSRF CONFIRMED — out-of-band exfiltration [CRITICAL]', cls: 'terminal__line--critical', delay: 30 },
        { text: '', cls: '', delay: 600 },
        { text: '> Generating PoE report... AES-256-GCM encrypted.', cls: 'terminal__line--success', delay: 30 },
        { text: '  Scan complete: 7 critical, 12 high, 23 medium.', cls: 'terminal__line--prompt', delay: 28 },
        { text: '  Report: secureway_report_2026-03-20.enc', cls: '', delay: 25 },
    ];

    function typewriterEffect() {
        const body = document.getElementById('terminal-body');
        const cursor = document.getElementById('terminal-cursor');
        if (!body || !cursor) return;

        // Clear previous content (keep cursor)
        body.innerHTML = '';
        body.appendChild(cursor);

        let lineIndex = 0;

        function typeLine() {
            if (lineIndex >= terminalLines.length) {
                // Loop after a pause
                setTimeout(function () {
                    body.innerHTML = '';
                    body.appendChild(cursor);
                    lineIndex = 0;
                    typeLine();
                }, 3000);
                return;
            }

            const line = terminalLines[lineIndex];
            const span = document.createElement('span');
            span.className = 'terminal__line';
            if (line.cls) span.classList.add(line.cls);

            // Insert span before cursor
            body.insertBefore(span, cursor);

            if (line.text === '') {
                span.textContent = '\n';
                lineIndex++;
                setTimeout(typeLine, line.delay);
                return;
            }

            let charIndex = 0;
            function typeChar() {
                if (charIndex < line.text.length) {
                    span.textContent += line.text[charIndex];
                    charIndex++;
                    setTimeout(typeChar, line.delay);
                } else {
                    span.textContent += '\n';
                    lineIndex++;
                    setTimeout(typeLine, 120);
                }
            }

            typeChar();
        }

        // Start after a brief pause
        setTimeout(typeLine, 800);
    }


    /* ── Scroll Observer (Fade-in) ──────────────────── */
    function initScrollObserver() {
        var targets = document.querySelectorAll(
            '.problem__card, .solution__row, .evidence__card, ' +
            '.compliance__badge, .pricing__card, .section__header'
        );

        targets.forEach(function (el) {
            el.classList.add('fade-in');
        });

        if (!('IntersectionObserver' in window)) {
            // Fallback: just show everything
            targets.forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        targets.forEach(function (el) {
            observer.observe(el);
        });
    }


    /* ── Mobile Nav Toggle ──────────────────────────── */
    function initNavToggle() {
        var hamburger = document.getElementById('nav-hamburger');
        var links = document.getElementById('nav-links');
        if (!hamburger || !links) return;

        hamburger.addEventListener('click', function () {
            links.classList.toggle('open');
            hamburger.classList.toggle('active');
        });

        // Close on link click
        var navLinks = links.querySelectorAll('.nav__link');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                links.classList.remove('open');
                hamburger.classList.remove('active');
            });
        });
    }


    /* ── Active Nav on Scroll ───────────────────────── */
    function initActiveNav() {
        var sections = document.querySelectorAll('section[id]');
        var navLinks = document.querySelectorAll('.nav__link');

        if (!('IntersectionObserver' in window) || sections.length === 0) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.getAttribute('id');
                    navLinks.forEach(function (link) {
                        link.classList.remove('nav__link--active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('nav__link--active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.3
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }


    /* ── Auto-scroll terminal ───────────────────────── */
    function initTerminalAutoScroll() {
        var body = document.getElementById('terminal-body');
        if (!body) return;

        var scrollObserver = new MutationObserver(function () {
            body.scrollTop = body.scrollHeight;
        });

        scrollObserver.observe(body, { childList: true, subtree: true, characterData: true });
    }


    /* ── Init ───────────────────────────────────────── */
    document.addEventListener('DOMContentLoaded', function () {
        typewriterEffect();
        initScrollObserver();
        initNavToggle();
        initActiveNav();
        initTerminalAutoScroll();
    });

})();
