import { DataShowcase } from "./data/DataShowcase";
import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Business & operational analytics",
    body:
      "Dashboards and reporting that leadership actually uses: KPIs tied to decisions, clear definitions, and refresh cadences that match how you run the business. We connect sources of truth, reduce duplicate metrics, and document assumptions so numbers stay consistent across teams.",
  },
  {
    title: "Data platforms & engineering",
    body:
      "Pipelines, warehouses, and lakehouse patterns built for scale and cost. Ingestion from SaaS and databases, transformation with testing and lineage, and environments that separate sandbox from production. The goal is trustworthy data downstream — for analytics, ML features, and compliance.",
  },
  {
    title: "Advanced analytics & insight",
    body:
      "Beyond static reports: segmentation, forecasting, experimentation readouts, and self-serve exploration where appropriate. We help you prioritize questions that move revenue or reduce risk, and we instrument events and dimensions so analysis is repeatable, not one-off heroics.",
  },
];

const plugInItems = [
  "Metrics layers, semantic models, and BI tool rollout (e.g. Looker, Power BI, Mode)",
  "ELT/ETL, dbt-style transforms, data quality checks, and alerting",
  "Customer and product analytics, funnel and cohort analysis",
  "Feeding structured features to ML and AI systems you run alongside analytics",
];

export function DataAnalytics() {
  return (
    <section id="data" className="scroll-mt-24" aria-labelledby="data-heading">
      <DataShowcase />

      <div className="border-b border-neutral-200/80 bg-neutral-50 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal className="data-analytics-intro mx-auto max-w-md text-center">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Capabilities in depth
            </p>
            <p className="font-display mt-2 text-base font-medium leading-snug tracking-tight text-neutral-900 sm:text-[1.0625rem]">
              How we structure analytics programs end to end.
            </p>
          </Reveal>

          <div className="data-analytics-pillars reveal-stagger mx-auto mt-6 max-w-2xl sm:mt-7">
            <div className="divide-y divide-neutral-100 rounded-lg border border-neutral-200/70 bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)]">
              {pillars.map((p) => (
                <Reveal key={p.title} className="data-analytics-pillar">
                  <article className="px-4 py-4 sm:px-5 sm:py-[1.125rem]">
                    <h3 className="font-display text-[0.9375rem] font-semibold leading-snug text-neutral-950 sm:text-base">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] leading-[1.62] text-neutral-500">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="data-analytics-plug mx-auto mt-6 max-w-2xl sm:mt-7">
            <div className="border-t border-neutral-200/70 pt-6 sm:pt-7">
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.18em] text-neutral-400">
                Where we plug in
              </p>
              <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-1.5">
                {plugInItems.map((line) => (
                  <li key={line} className="flex gap-2 text-[0.8125rem] leading-[1.55] text-neutral-500">
                    <span
                      className="mt-[0.4rem] h-[3px] w-[3px] shrink-0 rounded-full bg-neutral-300"
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
