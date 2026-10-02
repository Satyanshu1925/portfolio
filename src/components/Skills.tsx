type SkillCategory = {
  name: string;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    name: "Frontend UI",
    skills: [
      "Lightning Web Components",
      "Aura Components",
      "Visualforce",
      "Responsive UI Design",
      "Component-Driven Architecture",
    ],
  },
  {
    name: "Salesforce",
    skills: [
      "Apex",
      "Triggers",
      "Flows",
      "SOQL / SOSL",
      "Batch Apex",
      "Sales Cloud",
      "Service Cloud",
      "Experience Cloud",
    ],
  },
  {
    name: "API Security",
    skills: [
      "Secure Record Locking & Sharing Architecture",
      "Granular Access Control",
      "Webhook Integrations",
      "Data Immutability for Financial Records",
    ],
  },
  {
    name: "Architecture",
    skills: [
      "Metadata-Driven Design",
      "Apex Unit Testing",
      "Salesforce CLI",
      "Version Control",
      "AgentForce / AI-Driven Automation",
    ],
  },
];

const certifications = [
  "Salesforce Certified Agentforce Specialist",
  "Data Cloud Consultant",
  "Platform Developer I",
  "AI Associate",
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-foreground/10 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2
          id="skills-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Skills
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-foreground/10 p-6"
            >
              <h3 className="text-base font-semibold">{category.name}</h3>
              <ul className="mt-4 space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm leading-relaxed text-foreground/70"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-medium uppercase tracking-wide text-foreground/50">
            Certifications
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground/80"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
