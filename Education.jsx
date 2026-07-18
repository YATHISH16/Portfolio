/**
 * Education.jsx
 *
 * design.md mapping:
 * - Light catalogue band: bg canvas-light — continues the alternation
 *   (Hero dark -> Projects light -> Skills dark -> Education light)
 * - Degree/institution card uses {component.feature-card-light}
 * - Structured facts (degree, institution, graduation, CGPA) use a
 *   semantic <dl>, since they're genuinely key/value data, not prose
 * - Certifications reuse {component.badge-tag} styling, consistent
 *   with the tech-stack and skill chips elsewhere on the page
 */

const META = [
  { label: "Degree", value: "B.E. in Computer Science and Engineering" },
  { label: "Institution", value: "Mepco Schlenk Engineering College, Sivakasi (Anna University)" },
  { label: "Expected graduation", value: "May 2027" },
  { label: "CGPA", value: "7.75 / 10.0" },
];

const CERTIFICATIONS = [
  "Blockchain and its Applications",
  "Foundation for Virtual and Augmented Reality Systems",
  "Programming in Modern C++",
];

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education and credentials"
      className="bg-canvas-light py-[64px] sm:py-section px-lg sm:px-xl lg:px-xxl"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-body text-body-sm text-stone uppercase tracking-[0.24px]">
          Background
        </p>
        <h2 className="font-display font-medium text-display-md text-ink mt-sm">
          Education &amp; Credentials
        </h2>

        <div className="bg-surface-card border border-hairline-light rounded-lg p-xl sm:p-xxl mt-xxxl">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-xl">
            {META.map(({ label, value }) => (
              <div key={label}>
                <dt className="font-body text-body-sm text-stone">{label}</dt>
                <dd className="font-display font-medium text-heading-sm text-ink mt-xxs">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-hairline-light mt-xxl pt-xxl">
            <h3 className="font-body text-body-sm text-stone">Certifications</h3>
            <ul className="flex flex-wrap gap-xs mt-md" aria-label="Certifications">
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert}
                  className="bg-surface-soft text-ink font-body text-caption rounded-full px-[12px] py-[4px]"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
