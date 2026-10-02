type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

type Project = {
  name: string;
  location: string;
  tagline: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    title: "Software Developer",
    company: "Astrea IT Services",
    location: "Noida (Remote)",
    period: "July 2023 – Present",
    highlights: [
      "Designed scalable Component-Driven (LWC/Aura) modules using metadata-driven architectures, enabling dynamic UI updates without code deployments.",
      "Engineered a unified Trigger & Logic Framework to process Policy Lifecycles (endorsements, cancellations) and calculate pro-rata refunds, using Batch Apex for high-volume policy renewals.",
      "Implemented a Custom Record Locking Engine (Apex) and sharing architecture to enforce strict data immutability and granular access control for sensitive financial records.",
      "Optimized complex Apex triggers and built a Visualforce-to-PDF engine for instant document delivery, reducing manual processing time by 30%.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Astrea IT Services",
    location: "Noida",
    period: "March 2023 – June 2023",
    highlights: [
      "Gained hands-on proficiency in Object Modeling, Security Architecture, Automation (Flows), and Apex/LWC development across the Salesforce ecosystem.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Kiwibikes Insurance",
    location: "New Zealand",
    tagline: "Policy Automation System",
    highlights: [
      "Built the schema from scratch — objects, fields, validation rules, page layouts, and FlexiPages — establishing a scalable foundation.",
      "Developed 10+ custom Aura components and 25+ Visualforce-to-PDF pages integrated with email automation for customer communication.",
      "Automated CSV downloads on underwriter transactions and built a Web-to-Lead Apex class to generate leads from inbound emails; automated policy activation via batch classes.",
    ],
  },
  {
    name: "Smart TradeSYNC",
    location: "AppExchange",
    tagline: "Financial Governance",
    highlights: [
      "Programmed dynamic pricing modules and role-based UI field rendering to synchronize trade data and pricing logic in real time.",
    ],
  },
  {
    name: "ExpenseSense",
    location: "AppExchange",
    tagline: "Financial Governance",
    highlights: [
      "Built an end-to-end expense advance/reimbursement engine with status-based record locking to enforce workflow integrity.",
    ],
  },
  {
    name: "PLOS",
    location: "California",
    tagline: "Experience Cloud Portal",
    highlights: [
      "Designed and built a Salesforce Community from scratch with a custom branded theme.",
      "Built a custom Aura component to dynamically fetch and display Knowledge Articles based on the associated manuscript.",
      "Implemented tailored case creation with custom logic and validations for support handling.",
    ],
  },
  {
    name: "National Party",
    location: "New Zealand",
    tagline: "Community Platform",
    highlights: [
      "Designed a community platform to boost user engagement and collaboration.",
      "Built \"Dynamic Custom Path,\" an Aura component managing picklist paths via metadata for seamless configuration.",
      "Built \"Dynamic Compact Layout,\" a reusable component surfacing key fields dynamically, plus condition-based dynamic colors and stage locking.",
    ],
  },
  {
    name: "Law Business Research",
    location: "United Kingdom",
    tagline: "Bi-Directional Mailtrap Integration",
    highlights: [
      "Closed-loop email tracking via outbound Apex delivery payloads and an inbound Custom Email Service webhook engine capturing live engagement metrics.",
    ],
  },
  {
    name: "Norfolk Mortgage Trust",
    location: "New Zealand",
    tagline: "Identity Verification Integration",
    highlights: [
      "Integrated the Cloudcheck Quick Go API for real-time customer identity verification during lead creation.",
      "Configured secure API authentication (API key, nonce, timestamp, signature) between Salesforce and Cloudcheck.",
      "Parsed verification responses to update lead records so the sales team could prioritize genuine leads.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-foreground/10 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2
          id="experience-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Experience
        </h2>

        <ol className="mt-12 space-y-12 border-l border-foreground/15 pl-6 sm:pl-10">
          {roles.map((role) => (
            <li key={`${role.company}-${role.period}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-foreground sm:-left-[43px]"
              />
              <p className="text-sm font-medium uppercase tracking-wide text-foreground/50">
                {role.period}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{role.title}</h3>
              <p className="text-foreground/70">
                {role.company} — {role.location}
              </p>
              <ul className="mt-4 space-y-2">
                {role.highlights.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-relaxed text-foreground/70 sm:text-base"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h3 className="mt-20 text-2xl font-semibold tracking-tight">
          Notable Projects
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-foreground/10 p-6"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                {project.location}
              </p>
              <h4 className="mt-2 text-lg font-semibold leading-snug">
                {project.name}
              </h4>
              <p className="mt-1 text-sm font-medium text-foreground/60">
                {project.tagline}
              </p>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-relaxed text-foreground/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
