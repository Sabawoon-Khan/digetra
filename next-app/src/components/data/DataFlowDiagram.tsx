/**
 * Left → right: sources → ingest & clean → warehouse / analytics → dashboards.
 * Strokes use `.data-flow-line-ltr` (forward motion); nodes use `.data-flow-node-pulse` sparingly.
 */
export function DataFlowDiagram() {
  return (
    <div className="data-flow-canvas mx-auto w-full max-w-5xl px-3 py-6 sm:px-5 sm:py-8" aria-hidden>
      <svg
        viewBox="0 0 880 248"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>From sources to dashboards</title>
        <defs>
          <linearGradient id="data-flow-stroke" x1="0" y1="0" x2="880" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="45%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="data-node-source" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <linearGradient id="data-node-transform" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
          <linearGradient id="data-node-warehouse" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fafafa" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="data-node-dash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <filter id="data-card-shadow" x="-8%" y="-8%" width="116%" height="116%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#0f172a" floodOpacity="0.07" />
          </filter>
          <marker
            id="data-flow-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="#0284c7" />
          </marker>
        </defs>

        {/* Column labels */}
        <text
          x="76"
          y="22"
          textAnchor="middle"
          fill="#94a3b8"
          className="select-none font-semibold uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Sources
        </text>
        <text
          x="292"
          y="22"
          textAnchor="middle"
          fill="#94a3b8"
          className="select-none font-semibold uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Ingest &amp; clean
        </text>
        <text
          x="486"
          y="22"
          textAnchor="middle"
          fill="#94a3b8"
          className="select-none font-semibold uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Warehouse
        </text>
        <text
          x="714"
          y="22"
          textAnchor="middle"
          fill="#94a3b8"
          className="select-none font-semibold uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Dashboards
        </text>

        {/* --- Sources --- */}
        <rect
          x="20"
          y="44"
          width="112"
          height="40"
          rx="9"
          fill="url(#data-node-source)"
          stroke="#e2e8f0"
          strokeWidth="1"
          filter="url(#data-card-shadow)"
        />
        <text x="76" y="64" textAnchor="middle" fill="#0f172a" className="font-semibold" style={{ fontSize: "10px" }}>
          Databases
        </text>
        <text x="76" y="78" textAnchor="middle" fill="#64748b" style={{ fontSize: "8px" }}>
          OLTP · DW
        </text>

        <rect
          x="20"
          y="92"
          width="112"
          height="40"
          rx="9"
          fill="url(#data-node-source)"
          stroke="#e2e8f0"
          strokeWidth="1"
          filter="url(#data-card-shadow)"
        />
        <text x="76" y="112" textAnchor="middle" fill="#0f172a" className="font-semibold" style={{ fontSize: "10px" }}>
          APIs &amp; streams
        </text>
        <text x="76" y="126" textAnchor="middle" fill="#64748b" style={{ fontSize: "8px" }}>
          events · webhooks
        </text>

        <rect
          x="20"
          y="140"
          width="112"
          height="40"
          rx="9"
          fill="url(#data-node-source)"
          stroke="#e2e8f0"
          strokeWidth="1"
          filter="url(#data-card-shadow)"
        />
        <text x="76" y="160" textAnchor="middle" fill="#0f172a" className="font-semibold" style={{ fontSize: "10px" }}>
          SaaS &amp; files
        </text>
        <text x="76" y="174" textAnchor="middle" fill="#64748b" style={{ fontSize: "8px" }}>
          apps · exports
        </text>

        {/* Merge + paths to transform */}
        <path
          d="M 132 64 H 176 V 120 H 244"
          className="data-flow-line-ltr"
          stroke="url(#data-flow-stroke)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 132 112 H 200 V 120 H 244"
          className="data-flow-line-ltr"
          stroke="url(#data-flow-stroke)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 132 160 H 176 V 120 H 244"
          className="data-flow-line-ltr"
          stroke="url(#data-flow-stroke)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <circle cx="236" cy="120" r="4" fill="#0ea5e9" opacity="0.85" />

        {/* Transform */}
        <rect
          x="244"
          y="88"
          width="116"
          height="64"
          rx="11"
          fill="url(#data-node-transform)"
          stroke="#7dd3fc"
          strokeWidth="1.15"
          filter="url(#data-card-shadow)"
          className="data-flow-node-pulse"
        />
        <text
          x="302"
          y="114"
          textAnchor="middle"
          fill="#0c4a6e"
          className="font-semibold"
          style={{ fontSize: "11px" }}
        >
          Clean &amp; transform
        </text>
        <text x="302" y="132" textAnchor="middle" fill="#0369a1" style={{ fontSize: "8px" }}>
          dbt · tests · quality gates
        </text>

        <path
          d="M 360 120 H 400"
          className="data-flow-line-ltr"
          stroke="url(#data-flow-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          markerEnd="url(#data-flow-arrow)"
          fill="none"
        />

        {/* Warehouse / analytics */}
        <rect
          x="404"
          y="80"
          width="132"
          height="80"
          rx="12"
          fill="url(#data-node-warehouse)"
          stroke="#cbd5e1"
          strokeWidth="1.1"
          filter="url(#data-card-shadow)"
        />
        <text
          x="470"
          y="108"
          textAnchor="middle"
          fill="#0f172a"
          className="font-semibold"
          style={{ fontSize: "11px" }}
        >
          Warehouse &amp; metrics
        </text>
        <text x="470" y="126" textAnchor="middle" fill="#64748b" style={{ fontSize: "8px" }}>
          semantic layer · facts
        </text>
        <text x="470" y="142" textAnchor="middle" fill="#64748b" style={{ fontSize: "8px" }}>
          trusted analytics-ready data
        </text>

        <path
          d="M 536 120 H 584"
          className="data-flow-line-ltr"
          stroke="url(#data-flow-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          markerEnd="url(#data-flow-arrow)"
          fill="none"
        />

        {/* Dashboard card */}
        <rect
          x="588"
          y="52"
          width="268"
          height="144"
          rx="12"
          fill="url(#data-node-dash)"
          stroke="#e2e8f0"
          strokeWidth="1"
          filter="url(#data-card-shadow)"
        />
        <text x="722" y="78" textAnchor="middle" fill="#0f172a" className="font-semibold" style={{ fontSize: "11px" }}>
          Live dashboards &amp; BI
        </text>
        <text x="722" y="94" textAnchor="middle" fill="#64748b" style={{ fontSize: "8px" }}>
          KPIs · charts · scheduled reports
        </text>

        {/* Mini chart mock */}
        <rect x="612" y="108" width="36" height="52" rx="3" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="0.75" />
        <rect x="618" y="128" width="8" height="26" rx="1" fill="#0ea5e9" opacity="0.85" />
        <rect x="630" y="118" width="8" height="36" rx="1" fill="#0284c7" opacity="0.9" />
        <rect x="642" y="124" width="8" height="30" rx="1" fill="#0369a1" opacity="0.85" />

        <rect x="664" y="108" width="36" height="52" rx="3" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.75" />
        <path
          d="M 668 148 L 676 132 L 684 140 L 692 124 L 696 128"
          stroke="#0284c7"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        <rect x="716" y="108" width="124" height="52" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75" />
        <line x1="726" y1="120" x2="830" y2="120" stroke="#e2e8f0" strokeWidth="0.75" />
        <line x1="726" y1="132" x2="800" y2="132" stroke="#e2e8f0" strokeWidth="0.75" />
        <line x1="726" y1="144" x2="810" y2="144" stroke="#e2e8f0" strokeWidth="0.75" />
        <rect x="728" y="124" width="40" height="4" rx="1" fill="#cbd5e1" />
        <rect x="728" y="136" width="56" height="4" rx="1" fill="#e2e8f0" />
        <rect x="728" y="148" width="48" height="4" rx="1" fill="#e2e8f0" />
      </svg>
      <p className="relative z-[1] mt-5 max-w-xl mx-auto text-center text-[0.8125rem] leading-relaxed text-neutral-500">
        Pull from databases, APIs, and SaaS → clean and model in the warehouse → serve analytics and
        dashboards your teams actually use.
      </p>
    </div>
  );
}
