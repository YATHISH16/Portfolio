import { Code2, Globe, Sparkles, Database, Wrench, PenTool } from "lucide-react";

/**
 * Skills.jsx
 *
 * design.md mapping:
 * - Dark storytelling band: bg canvas-dark, text on-dark — alternates
 *   with Projects' light catalogue band per the two-mode rhythm
 * - Category cards use {component.feature-card-dark}: surface-elevated
 *   bg, rounded-lg, padding xxl (no shadow — elevation is the
 *   canvas -> surface-elevated luminance step, the only step allowed
 *   on the dark surface ladder)
 * - Skill chips reuse {component.badge-tag} shape (rounded-full,
 *   caption type) recolored for a dark surface: divider-soft bg,
 *   on-dark-mute text, since badge-tag itself is a light-surface token
 * - Section heading in display-md; eyebrow in body-sm / on-dark-mute
 */

const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    skills: [
      "Full Stack Development",
      "Responsive Web Design",
      "REST API Integration",
      "DOM Manipulation",
      "CRUD Applications",
      "Server-Side Logic",
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Sparkles,
    skills: [
      "Prompt Engineering",
      "AI Chatbot Development",
      "Generative AI",
      "NLP",
      "Large Language Models (LLM)",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    skills: ["SQL", "Relational Database Design", "Role-Based Access Control (RBAC)"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "IBM SkillsBuild"],
  },
  {
    id: "design",
    title: "Design & Methodology",
    icon: PenTool,
    skills: ["UI/UX Design", "Wireframing", "Agile/Scrum"],
  },
];

function SkillCard({ category }) {
  const { title, icon: Icon, skills } = category;

  return (
    <article className="h-full flex flex-col bg-surface-elevated rounded-lg p-xxl">
      <div className="w-11 h-11 flex items-center justify-center rounded-full bg-divider-soft">
        <Icon size={20} strokeWidth={1.75} className="text-on-dark" aria-hidden="true" />
      </div>

      <h3 className="font-display font-medium text-heading-sm text-on-dark mt-lg">
        {title}
      </h3>

      <ul className="flex flex-wrap gap-xs mt-lg" aria-label={`Skills in ${title}`}>
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-divider-soft text-on-dark-mute font-body text-caption rounded-full px-[12px] py-[4px]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="bg-canvas-dark py-[64px] sm:py-section px-lg sm:px-xl lg:px-xxl"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-body text-body-sm text-on-dark-mute uppercase tracking-[0.24px]">
          Capabilities
        </p>
        <h2 className="font-display font-medium text-display-md text-on-dark mt-sm">
          Skills &amp; Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl mt-xxxl">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
