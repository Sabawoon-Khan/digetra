/**
 * Enterprise GenAI architecture — modern card, gradients, soft depth.
 * Motion via globals `.ai-flow-*` (respects prefers-reduced-motion).
 */
export function AIFlowDiagram() {
  return (
    <div className="ai-flow-canvas mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12" aria-hidden>
      <svg
        viewBox="0 0 780 248"
        className="h-auto w-full min-w-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Enterprise GenAI system flow</title>
        <defs>
          <linearGradient id="ai-node-input" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f4f4f5" />
          </linearGradient>
          <linearGradient id="ai-node-pipeline" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fafafa" />
            <stop offset="100%" stopColor="#f4f4f5" />
          </linearGradient>
          <linearGradient id="ai-node-llm" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eef2ff" />
            <stop offset="55%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <linearGradient id="ai-node-tools" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="ai-node-guard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="100%" stopColor="#fafaf9" />
          </linearGradient>
          <linearGradient id="ai-node-ship" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0fdf4" />
          </linearGradient>
          <linearGradient
            id="ai-line-primary"
            x1="0"
            y1="0"
            x2="780"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <filter id="ai-card-shadow" x="-8%" y="-8%" width="116%" height="116%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#0f172a" floodOpacity="0.06" />
          </filter>
          <filter id="ai-llm-glow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="b" />
            <feFlood floodColor="#6366f1" floodOpacity="0.12" result="c" />
            <feComposite in="c" in2="b" operator="in" result="g" />
            <feMerge>
              <feMergeNode in="g" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker
            id="ai-flow-arrow"
            markerWidth="9"
            markerHeight="9"
            refX="8"
            refY="4.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L9,4.5 L0,9 Z" fill="#6366f1" />
          </marker>
        </defs>

        {/* Column labels */}
        <text
          x="59"
          y="22"
          textAnchor="middle"
          fill="#a1a1aa"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          className="font-semibold uppercase"
        >
          Sources
        </text>
        <text
          x="198"
          y="22"
          textAnchor="middle"
          fill="#a1a1aa"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          className="font-semibold uppercase"
        >
          Orchestrate
        </text>
        <text
          x="338"
          y="22"
          textAnchor="middle"
          fill="#a1a1aa"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          className="font-semibold uppercase"
        >
          Model
        </text>
        <text
          x="468"
          y="22"
          textAnchor="middle"
          fill="#a1a1aa"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          className="font-semibold uppercase"
        >
          Agents
        </text>
        <text
          x="588"
          y="22"
          textAnchor="middle"
          fill="#a1a1aa"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          className="font-semibold uppercase"
        >
          Trust layer
        </text>
        <text
          x="713"
          y="22"
          textAnchor="middle"
          fill="#a1a1aa"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
          className="font-semibold uppercase"
        >
          Delivery
        </text>

        {/* --- Input layer --- */}
        <rect
          x="18"
          y="56"
          width="86"
          height="42"
          rx="9"
          fill="url(#ai-node-input)"
          stroke="#e4e4e7"
          strokeWidth="1"
          filter="url(#ai-card-shadow)"
        />
        <text x="61" y="77" textAnchor="middle" fill="#18181b" style={{ fontSize: "10px" }} className="font-semibold">
          Database
        </text>
        <text x="61" y="91" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          OLTP · warehouse
        </text>

        <rect
          x="18"
          y="114"
          width="86"
          height="42"
          rx="9"
          fill="url(#ai-node-input)"
          stroke="#e4e4e7"
          strokeWidth="1"
          filter="url(#ai-card-shadow)"
        />
        <text x="61" y="135" textAnchor="middle" fill="#18181b" style={{ fontSize: "10px" }} className="font-semibold">
          Vector store
        </text>
        <text x="61" y="149" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          embeddings · RAG
        </text>

        <rect
          x="18"
          y="172"
          width="86"
          height="42"
          rx="9"
          fill="url(#ai-node-input)"
          stroke="#e4e4e7"
          strokeWidth="1"
          filter="url(#ai-card-shadow)"
        />
        <text x="61" y="193" textAnchor="middle" fill="#18181b" style={{ fontSize: "10px" }} className="font-semibold">
          APIs &amp; events
        </text>
        <text x="61" y="207" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          webhooks · streams
        </text>

        {/* Pipeline */}
        <rect
          x="142"
          y="100"
          width="112"
          height="72"
          rx="11"
          fill="url(#ai-node-pipeline)"
          stroke="#d4d4d8"
          strokeWidth="1"
          filter="url(#ai-card-shadow)"
          className="ai-flow-node-pulse"
        />
        <text x="198" y="128" textAnchor="middle" fill="#18181b" style={{ fontSize: "10px" }} className="font-semibold">
          AI pipeline
        </text>
        <text x="198" y="143" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          ingest · transform
        </text>
        <text x="198" y="156" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          routing · policies
        </text>

        {/* LLM */}
        <rect
          x="286"
          y="92"
          width="108"
          height="88"
          rx="12"
          fill="url(#ai-node-llm)"
          stroke="#c7d2fe"
          strokeWidth="1.25"
          filter="url(#ai-llm-glow)"
          className="ai-flow-node-pulse"
        />
        <text x="340" y="124" textAnchor="middle" fill="#1e1b4b" style={{ fontSize: "11px" }} className="font-semibold">
          LLM inference
        </text>
        <text x="340" y="141" textAnchor="middle" fill="#6366f1" style={{ fontSize: "8px" }}>
          private · VPC
        </text>
        <text x="340" y="155" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          adapters · prompts
        </text>

        {/* Tools */}
        <rect
          x="286"
          y="28"
          width="108"
          height="42"
          rx="10"
          fill="url(#ai-node-tools)"
          stroke="#e2e8f0"
          strokeWidth="1"
          filter="url(#ai-card-shadow)"
        />
        <text x="340" y="48" textAnchor="middle" fill="#0f172a" style={{ fontSize: "10px" }} className="font-semibold">
          Tools &amp; MCP
        </text>
        <text x="340" y="62" textAnchor="middle" fill="#64748b" style={{ fontSize: "8px" }}>
          search · code · APIs
        </text>

        {/* Agents */}
        <rect
          x="426"
          y="64"
          width="94"
          height="46"
          rx="10"
          fill="url(#ai-node-input)"
          stroke="#e4e4e7"
          strokeWidth="1"
          filter="url(#ai-card-shadow)"
        />
        <text x="473" y="87" textAnchor="middle" fill="#18181b" style={{ fontSize: "10px" }} className="font-semibold">
          Agents
        </text>
        <text x="473" y="101" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          planner · memory
        </text>

        <rect
          x="426"
          y="122"
          width="94"
          height="46"
          rx="10"
          fill="url(#ai-node-input)"
          stroke="#e4e4e7"
          strokeWidth="1"
          filter="url(#ai-card-shadow)"
        />
        <text x="473" y="145" textAnchor="middle" fill="#18181b" style={{ fontSize: "10px" }} className="font-semibold">
          Human review
        </text>
        <text x="473" y="159" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          HITL · approvals
        </text>

        {/* Guardrails */}
        <rect
          x="544"
          y="92"
          width="104"
          height="88"
          rx="11"
          fill="url(#ai-node-guard)"
          stroke="#fbbf24"
          strokeWidth="1"
          strokeDasharray="5 4"
          opacity="0.95"
          filter="url(#ai-card-shadow)"
        />
        <text x="596" y="124" textAnchor="middle" fill="#78350f" style={{ fontSize: "10px" }} className="font-semibold">
          Guardrails
        </text>
        <text x="596" y="139" textAnchor="middle" fill="#a16207" style={{ fontSize: "8px" }}>
          eval · PII · safety
        </text>
        <text x="596" y="153" textAnchor="middle" fill="#a16207" style={{ fontSize: "8px" }}>
          traces · SLOs
        </text>

        {/* Products */}
        <rect
          x="672"
          y="88"
          width="100"
          height="96"
          rx="12"
          fill="url(#ai-node-ship)"
          stroke="#bbf7d0"
          strokeWidth="1.15"
          filter="url(#ai-card-shadow)"
        />
        <text x="722" y="120" textAnchor="middle" fill="#14532d" style={{ fontSize: "11px" }} className="font-semibold">
          Your systems
        </text>
        <text x="722" y="137" textAnchor="middle" fill="#15803d" style={{ fontSize: "8px" }}>
          web · mobile
        </text>
        <text x="722" y="151" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          APIs · copilots
        </text>
        <text x="722" y="165" textAnchor="middle" fill="#71717a" style={{ fontSize: "8px" }}>
          internal tools
        </text>

        {/* Connectors — gradient stroke, left→right flow */}
        <g className="ai-flow-connectors">
          <path
            d="M 104 77 H 120 V 124 H 142"
            className="ai-flow-line-fine"
            stroke="url(#ai-line-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 104 135 H 128 V 136 H 142"
            className="ai-flow-line"
            stroke="url(#ai-line-primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 104 193 H 120 V 128 H 142"
            className="ai-flow-line"
            stroke="url(#ai-line-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M 254 136 H 286"
            className="ai-flow-line"
            stroke="url(#ai-line-primary)"
            strokeWidth="2.15"
            strokeLinecap="round"
            markerEnd="url(#ai-flow-arrow)"
          />

          <path
            d="M 340 92 V 70"
            className="ai-flow-line-slow"
            stroke="url(#ai-line-primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M 394 118 H 410 V 87 H 426"
            className="ai-flow-line"
            stroke="url(#ai-line-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 394 144 H 410 V 145 H 426"
            className="ai-flow-line-fine"
            stroke="url(#ai-line-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M 520 87 H 532 V 136 H 544"
            className="ai-flow-line"
            stroke="url(#ai-line-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 520 145 H 532 V 136 H 544"
            className="ai-flow-line"
            stroke="url(#ai-line-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M 648 136 H 672"
            className="ai-flow-line"
            stroke="url(#ai-line-primary)"
            strokeWidth="2.15"
            strokeLinecap="round"
            markerEnd="url(#ai-flow-arrow)"
          />
        </g>
      </svg>
    </div>
  );
}
