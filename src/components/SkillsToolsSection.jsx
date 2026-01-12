import "../css/SkillsToolsSection.css";

const skillGroups = [
  {
    title: "Quality Assurance & Testing",
    items: [
      "Manual Testing",
      "Test Case Design & Execution",
      "Functional Testing",
      "Regression Testing (Basic)",
      "API Testing (Postman)",
      "Data Validation",
    ],
  },
  {
    title: "Automation Tools",
    items: ["Selenium", "Cypress", "Katalon", "Appium"],
  },
  {
    title: "Web Development",
    items: [
      "PHP",
      "Laravel",
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
      "WordPress",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "SQL"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Figma",
      "AWS EC2",
      "XAMPP",
      "Laragon",
      "Linux (Basic)",
      "Trello",
    ],
  },
  {
    title: "Programming Languages",
    items: ["Java", "C#", "Python", "C", "Swift", "Dart"],
  },
];

export default function SkillsToolsSection() {
  return (
    <section className="secWrap" id="skills">
      <div className="secHead">
        <h2 className="secTitle">Tools & Skills</h2>
        <p className="secDesc">
          Grouped so recruiters can scan it in 8 seconds like they always do.
        </p>
      </div>

      <div className="skillGrid">
        {skillGroups.map((g, i) => (
          <article key={i} className="skillCard">
            <div className="skillTitle">{g.title}</div>
            <div className="chipWrap">
              {g.items.map((it, ii) => (
                <span key={ii} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
