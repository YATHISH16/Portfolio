import { Github, Linkedin, Mail } from "lucide-react";

/**
 * Footer.jsx
 *
 * design.md mapping:
 * - {component.footer}: bg canvas-dark, text on-dark-mute, body-sm,
 *   rounded-none, padding "80px 24px" (spacing.block vertical, 24px
 *   horizontal — taken literally from the component spec rather than
 *   the page's usual px-xl/px-xxl, since footer defines its own padding)
 * - Multi-column quick-links grid above a copyright line, separated by
 *   {colors.divider-soft} — same structure as the documented component,
 *   with the regulatory-disclosure block replaced by a plain copyright
 *   line since this is a personal portfolio, not a fintech product
 * - <address> is the semantically correct element for contact info
 *
 * TODO: same placeholder URLs as Hero's social links — replace once
 * real profile URLs are available.
 */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:msyathish16@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile", icon: Linkedin }, // TODO
  { label: "GitHub", href: "https://github.com/your-username", icon: Github }, // TODO
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas-dark text-on-dark-mute rounded-none py-block px-lg sm:px-xl">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-xxl">
          <div>
            <p className="font-display font-medium text-heading-sm text-on-dark">
              Yathish M S
            </p>
            <p className="font-body text-body-sm mt-xs">
              Full Stack Developer &amp; AI Chatbot Developer
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-body text-caption text-on-dark uppercase tracking-[0.24px]">
              Navigate
            </h3>
            <ul className="mt-md space-y-sm">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-body-sm hover:text-on-dark transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-body text-caption text-on-dark uppercase tracking-[0.24px]">
              Contact
            </h3>
            <address className="not-italic mt-md space-y-sm">
              <p className="font-body text-body-sm">Tirunelveli, Tamil Nadu, India</p>
              <ul className="flex items-center gap-md mt-sm" aria-label="Social links">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full
                        transition-colors hover:text-on-dark hover:bg-surface-elevated"
                    >
                      <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </div>
        </div>

        <div className="border-t border-divider-soft mt-xxxl pt-xl">
          <p className="font-body text-body-sm">
            © {year} Yathish M S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
