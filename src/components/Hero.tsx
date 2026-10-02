export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="flex min-h-screen flex-col justify-center border-b border-foreground/10 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl text-center sm:text-left">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Satyanshu
        </h1>
        <p className="mt-4 text-lg font-medium text-foreground/70 sm:text-xl">
          Software Developer | Certified Salesforce Platform Developer I
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-foreground/60 sm:mx-0 sm:text-lg">
          Over 3.5 years of experience architecting web applications,
          responsive customer care portals, and structured UI components —
          with a logically sound, multi-layered approach to problem solving
          across the Salesforce platform.
        </p>
        <div className="mt-10 flex justify-center sm:justify-start">
          <a
            href="#experience"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
