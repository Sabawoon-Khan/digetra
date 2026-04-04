export function Hero() {
  const enterpriseFocus = [
    "Cloud & infrastructure",
    "Zero trust & security",
    "Data & integrations",
    "Custom software",
    "Managed support",
  ];

  return (
    <section
      id="top"
      className="hero-surface relative min-h-[100dvh] overflow-hidden border-b border-neutral-200/80 pt-[calc(4.5rem+env(safe-area-inset-top,0px))] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-[0.35] sm:opacity-[0.4]" aria-hidden />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4.5rem-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px))] max-w-6xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[calc(100svh-5rem)] lg:px-8">
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="mb-5 inline-flex items-center rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-neutral-600 sm:text-[0.6875rem]">
            Digetra
          </p>

          <h1 className="font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.035em] text-neutral-950 text-balance sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            We are the technology partner for teams that need{" "}
            <span className="accent-mark">reliability at scale</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-neutral-600 text-balance sm:text-lg">
            Cloud, software, and operations — delivered with clarity so you can move as fast as your
            roadmap demands.
          </p>

          <div className="mt-9 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="#contact"
              className="focus-ring btn-primary inline-flex min-h-[48px] items-center justify-center rounded-md px-7 py-3.5 text-[0.9375rem] font-semibold sm:min-h-0"
            >
              Start a conversation
              <svg className="ml-2 h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-md border border-neutral-300 bg-white px-7 py-3.5 text-[0.9375rem] font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50 sm:min-h-0"
            >
              View capabilities
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 w-full max-w-3xl sm:mt-16">
          <div className="rounded-xl border border-neutral-200 bg-white px-5 py-8 sm:px-8 sm:py-9">
            <h2 className="text-center font-display text-base font-bold tracking-tight text-neutral-950 sm:text-lg">
              Where we focus
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-sm text-neutral-500">
              Core areas we build and operate in for clients.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {enterpriseFocus.map((label) => (
                <span
                  key={label}
                  className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-[0.8125rem] font-medium text-neutral-800"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
