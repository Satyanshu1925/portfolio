type ContactLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const links: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Satyanshu1925",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.07.78 2.17 0 1.56-.02 2.82-.02 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/satyanshu8",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: "Salesforce Trailblazer",
    href: "https://www.salesforce.com/trailblazer/satyanshu8",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.9 3.83L12 11.97 5.1 8.13 12 4.3Zm-7 5.5 6 3.33v6.67l-6-3.33V9.8Zm8 10v-6.67l6-3.33v6.67l-6 3.33Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:satyanshu.sf@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.3 7.8 5.85 7.8-5.85a.75.75 0 0 0-.3-.3H4.5a.75.75 0 0 0-.3.3Zm15.8 1.6-7.45 5.59a1 1 0 0 1-1.1 0L4 7.4v11.1c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.4Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl text-center sm:text-left">
        <h2
          id="contact-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Contact
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/70 sm:mx-0 sm:text-lg">
          Open to new opportunities and collaborations. Reach out through any
          of the channels below.
        </p>

        <ul className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={`${link.label}${link.label === "Email" ? "" : " (opens in a new tab)"}`}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
