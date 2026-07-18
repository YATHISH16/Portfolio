import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Footer from "./Footer";

/**
 * App.jsx
 *
 * Stacks the sections in reading order. Each section owns its own
 * canvas-dark/canvas-light background per design.md's two-mode
 * rhythm, so no wrapper background is needed here — just the
 * skip link for keyboard/screen-reader users jumping past the nav-less
 * hero straight to content, and a shared `scroll-smooth` for the
 * in-page anchor links (#projects, #skills, #education) used in
 * Hero and Footer.
 */
export default function App() {
  return (
    <div className="scroll-smooth">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
          focus:z-50 focus:bg-canvas-light focus:text-canvas-dark
          focus:rounded-full focus:px-lg focus:py-sm focus:text-button-md"
      >
        Skip to main content
      </a>

      <main id="main">
        <Hero />
        <Projects />
        <Skills />
        <Education />
      </main>

      <Footer />
    </div>
  );
}
