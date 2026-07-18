/**
 * Projects.jsx
 *
 * design.md mapping:
 * - Catalogue band: bg canvas-light (white/light bands alternate with dark
 *   storytelling bands per the "Do" list)
 * - Cards use {component.feature-card-light}: surface-card bg,
 *   hairline-light border, rounded-lg, padding xxl
 * - Featured cards (AI Chatbot, Student Management System) get
 *   {component.badge-feature} (primary bg) and take the larger 7/12
 *   column in the bento grid on desktop — visual emphasis via size +
 *   badge, not a different card style, so the system stays consistent
 * - Tech stack chips use {component.badge-tag} (surface-soft bg)
 * - Section heading in display-md; eyebrow in body-sm / stone
 *
 * No live/source URLs were supplied for any project, so card action
 * links are intentionally omitted rather than fabricated. Add a `links`
 * field per project (e.g. { demo, repo }) once you have real URLs, and
 * uncomment the action row near the bottom of ProjectCard.
 */

const PROJECTS = [
  {
    id: "ai-chatbot",
    featured: true,
    title: "AI Chatbot for Students",
    subtitle: "Web-Based AI Application",
    timeline: "Jan 2025 – Dec 2025",
    description:
      "Architected and deployed an AI-powered chatbot that resolves student academic queries using prompt engineering for context-aware, accurate natural language responses. Generative AI integration automates query resolution, enabling 24/7 instant self-service support behind a real-time, responsive chat interface.",
    stack: ["Python", "JavaScript", "HTML5", "CSS3", "Generative AI", "Prompt Engineering", "NLP", "LLM"],
  },
  {
    id: "student-management",
    featured: true,
    title: "Student Management Web System",
    subtitle: "Full Stack CRUD Application",
    timeline: "Jan 2025 – Dec 2025",
    description:
      "Engineered a full stack CRUD application for managing student records, course enrollments, and academic data, with role-based access control (RBAC) for secure multi-user environments. A normalized SQL database layer paired with a responsive front end cut manual administrative workload.",
    stack: ["JavaScript", "HTML5", "CSS3", "SQL", "REST API", "Server-Side Logic", "RBAC"],
  },
  {
    id: "among-us-game",
    featured: false,
    title: "Mini Among Us Game",
    subtitle: "Browser-Based Interactive Game",
    timeline: "Jan 2024 – Dec 2024",
    description:
      "A fully interactive browser game built from scratch in vanilla JavaScript — custom game logic, player controls, collision detection, and CSS animations, with no external libraries.",
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3", "DOM Manipulation", "CSS Animations"],
  },
  {
    id: "query-management",
    featured: false,
    title: "Student Query Management System",
    subtitle: "Web Portal & Admin Dashboard",
    timeline: "Jan 2024 – Dec 2024",
    description:
      "A full stack query submission and resolution portal with an admin dashboard, streamlining student-faculty communication. Role-based views and real-time status tracking improve resolution efficiency.",
    stack: ["JavaScript", "HTML5", "CSS3", "SQL", "REST API", "RBAC"],
  },
];

function ProjectCard({ project }) {
  const { featured, title, subtitle, timeline, description, stack } = project;

  return (
    <article
      className={`h-full flex flex-col bg-surface-card border border-hairline-light rounded-lg
        p-xl sm:p-xxl
        ${featured ? "lg:p-xxl" : ""}`}
    >
      <div className="flex items-start justify-between gap-md">
        <p className="font-body text-body-sm text-stone">{subtitle}</p>
        {featured && (
          <span className="inline-flex items-center bg-primary text-on-primary font-body text-caption rounded-full px-[12px] py-[4px] whitespace-nowrap">
            Featured
          </span>
        )}
      </div>

      <h3
        className={`font-display font-medium text-ink mt-sm ${
          featured ? "text-heading-lg" : "text-heading-md"
        }`}
      >
        {title}
      </h3>

      <p className="font-body text-body-md text-charcoal mt-md flex-1">
        {description}
      </p>

      <ul className="flex flex-wrap gap-xs mt-xl" aria-label={`Technologies used in ${title}`}>
        {stack.map((tech) => (
          <li
            key={tech}
            className="bg-surface-soft text-ink font-body text-caption rounded-full px-[12px] py-[4px]"
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="font-body text-caption text-stone mt-lg">{timeline}</p>

      {/* Uncomment once real project URLs are available:
      <div className="flex items-center gap-lg mt-lg">
        {project.links?.demo && (
          <a href={project.links.demo} className="font-body text-button-sm text-link">Live demo</a>
        )}
        {project.links?.repo && (
          <a href={project.links.repo} className="font-body text-button-sm text-link">Source</a>
        )}
      </div>
      */}
    </article>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const secondary = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="bg-canvas-light py-[64px] sm:py-section px-lg sm:px-xl lg:px-xxl"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-body text-body-sm text-stone uppercase tracking-[0.24px]">
          Selected work
        </p>
        <h2 className="font-display font-medium text-display-md text-ink mt-sm">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl mt-xxxl">
          {/* Row 1: AI Chatbot (featured, 7/12) + Mini Among Us (secondary, 5/12) */}
          <div className="lg:col-span-7">
            <ProjectCard project={featured[0]} />
          </div>
          <div className="lg:col-span-5">
            <ProjectCard project={secondary[0]} />
          </div>

          {/* Row 2: Student Management System (featured, 7/12) + Query Management (secondary, 5/12) */}
          <div className="lg:col-span-7">
            <ProjectCard project={featured[1]} />
          </div>
          <div className="lg:col-span-5">
            <ProjectCard project={secondary[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
