import { Github, Linkedin, Mail } from "lucide-react";

/**
 * Hero.jsx
 *
 * design.md mapping:
 * - hero-band-dark: bg canvas-dark, text on-dark, rounded-none, no shadow
 * - name set in display-xxl (Aeonik Pro 500, lineHeight 1.0), clamped
 *   136 -> 80 -> 64 -> 48 across the breakpoint ladder per the
 *   Responsive Behavior / Collapsing Strategy section
 * - tagline in body-lg / heading-sm, Inter, on-dark-mute
 * - primary CTA uses {component.button-primary} (white pill on dark)
 * - secondary CTA uses {component.button-outline-dark}
 * - section vertical padding: spacing.section (88px), collapsing to 64px
 *   on Mobile per the Responsive Behavior table
 *
 * TODO before shipping: the LinkedIn and GitHub URLs below are placeholders
 * — the source content only provided a bare "linkedin.com" and no GitHub
 * link. Swap SOCIAL_LINKS with your real profile URLs.
 */

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:msyathish16@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-profile", // TODO: replace with real URL
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username", // TODO: replace with real URL
    icon: Github,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="bg-canvas-dark text-on-dark rounded-none py-[64px] sm:py-section px-lg sm:px-xl lg:px-xxl min-h-screen flex items-center"
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col">
        <header>
          <p className="font-body text-body-sm sm:text-body-md text-on-dark-mute tracking-[0.24px] uppercase">
            Tirunelveli, Tamil Nadu, India
          </p>

          <h1
            className="font-display font-medium text-on-dark mt-md
              text-[48px] leading-none tracking-[-0.48px]
              sm:text-[64px] sm:tracking-[-1.2px]
              lg:text-[80px] lg:tracking-[-1.6px]
              2xl:text-[136px] 2xl:tracking-[-2.72px]"
          >
            Yathish M S
          </h1>

          <p className="font-body text-body-lg sm:text-heading-sm text-on-dark-mute mt-lg max-w-2xl">
            Full Stack Developer&nbsp;
            <span aria-hidden="true" className="text-stone">
              |
            </span>
            &nbsp;AI Chatbot Developer&nbsp;
            <span aria-hidden="true" className="text-stone">
              |
            </span>
            &nbsp;Prompt Engineer
          </p>
        </header>

        <div className="flex flex-wrap items-center gap-lg mt-xxl">
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-12
              bg-canvas-light text-canvas-dark font-body text-button-md
              rounded-full px-[28px] py-[14px]
              transition-colors hover:bg-faint"
          >
            View my work
          </a>

          <a
            href="mailto:msyathish16@gmail.com"
            className="inline-flex items-center justify-center h-12
              bg-canvas-dark text-on-dark font-body text-button-md
              rounded-full px-[27px] py-[13px] border border-on-dark
              transition-colors hover:bg-surface-elevated"
          >
            Get in touch
          </a>
        </div>

        <nav aria-label="Social links" className="mt-xxxl">
          <ul className="flex items-center gap-xl">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center w-11 h-11
                    rounded-full text-on-dark-mute
                    transition-colors hover:text-on-dark hover:bg-surface-elevated"
                >
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
