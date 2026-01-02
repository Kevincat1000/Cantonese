(function () {
  "use strict";

  const FOOTER_SEL = "footer[data-site-footer='1']";

  function insertFooterStyles() {
    const style = document.createElement("style");
    style.textContent = `
      footer[data-site-footer="1"] {
        background: #2c2020;
        border: none;
        padding: 12px 0;
        font-family: 'Exo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 12px;
        color: #fff;
        line-height: 1;
      }

      footer[data-site-footer="1"] .footer-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      footer[data-site-footer="1"] .footer-left {
        font-style: italic;
      }

      footer[data-site-footer="1"] .footer-center {
        display: flex;
        align-items: center;
        gap: 16px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

      footer[data-site-footer="1"] .footer-contact {
        color: #fff;
        text-decoration: none;
      }

      footer[data-site-footer="1"] .footer-copyright {
        color: #fff;
      }

      @media (max-width: 768px) {
        footer[data-site-footer="1"] {
          font-size: 10px;
          padding: 10px 0;
        }

        footer[data-site-footer="1"] .footer-content {
          flex-direction: column;
          gap: 8px;
          padding: 0 16px;
        }

        footer[data-site-footer="1"] .footer-center {
          position: static;
          transform: none;
          gap: 12px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function insertFooterHTML() {
    const footerHTML = `
      <footer data-site-footer="1">
        <div class="footer-content">
          <div class="footer-left">Designing for a more connected world.</div>
          <div class="footer-center">
            <a href="mailto:kw30928@gmail.com" class="footer-contact">Contact me</a>
            <div class="footer-copyright">© 2025 Kevin W.</div>
          </div>
        </div>
      </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }

  function boot() {
    insertFooterStyles();
    insertFooterHTML();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
