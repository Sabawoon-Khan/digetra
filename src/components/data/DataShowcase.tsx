import Image from "next/image";

import { DataFlowDiagram } from "./DataFlowDiagram";

const useCases = ["Executive KPIs", "Revenue analytics", "Operations dashboards", "Experimentation"];

const stack = [
  { name: "Snowflake", abbr: "Sn" },
  { name: "BigQuery", abbr: "BQ" },
  { name: "dbt", abbr: "db" },
  { name: "Airflow", abbr: "Af" },
  { name: "Looker", abbr: "Lk" },
  { name: "Power BI", abbr: "BI" },
];

const highlights = [
  {
    title: "Connect every source",
    text: "Databases, streams, and SaaS land in one governed path — no shadow copies.",
  },
  {
    title: "Clean, then model",
    text: "Transforms, tests, and a metrics layer so definitions match from warehouse to report.",
  },
  {
    title: "Dashboards people use",
    text: "KPIs and charts wired to the same facts — from exec views to team self-serve.",
  },
];

export function DataShowcase() {
  return (
    <div className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="data-showcase-hero mx-auto max-w-3xl lg:mx-0">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Data & analytics
          </p>
          <h2
            id="data-heading"
            className="font-display mt-4 text-[2rem] font-bold leading-[1.12] tracking-[-0.035em] text-neutral-950 sm:text-4xl md:text-5xl lg:text-[3rem]"
          >
            Analytics that connect data to decisions
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            From raw systems to trusted metrics and live dashboards — one clear flow, end to end.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-100/40 shadow-[0_18px_60px_-34px_rgba(0,0,0,0.14)] sm:mt-12">
          <Image
            src="/images/digentra-data-metrics.png"
            alt="Abstract visualization of metrics, analytics, and data flowing into decisions"
            width={1376}
            height={768}
            className="h-44 w-full object-cover object-center sm:h-52 md:h-56"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>

        <div className="data-showcase-diagram mt-10 sm:mt-12">
          <p className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            How data becomes insight
          </p>
          <DataFlowDiagram />
        </div>

        <div className="data-showcase-highlights mt-12 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="rounded-xl border border-neutral-200 bg-neutral-50/40 p-5 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-28px_rgba(0,0,0,0.18)]"
            >
              <p className="font-mono text-[0.6875rem] font-medium tabular-nums text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-display mt-3 text-[0.9375rem] font-bold leading-snug text-neutral-950">
                {h.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{h.text}</p>
            </div>
          ))}
        </div>

        <div className="data-showcase-chips mt-14 border-t border-neutral-200/80 pt-12 lg:mt-16 lg:pt-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-sm font-semibold text-neutral-950">Use cases</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Where teams typically start once the foundation is in place.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {useCases.map((label) => (
                  <li key={label}>
                    <span className="inline-block rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-800">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-950">Stack & platforms</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Representative tools — we meet you on your warehouse and BI choices.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <li key={item.name}>
                    <span className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white py-1 pl-2 pr-3 text-sm text-neutral-800">
                      <span className="flex h-6 min-w-[1.5rem] items-center justify-center rounded bg-neutral-100 px-1 text-[0.65rem] font-medium tabular-nums text-neutral-600">
                        {item.abbr}
                      </span>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
