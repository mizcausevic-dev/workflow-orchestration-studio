import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { automationRules, queueAlerts, stepNodes, throughputTrend, topSignals, workflowLanes } from "./data";

const signalTone = {
  positive: "signal-card positive",
  watch: "signal-card watch",
  neutral: "signal-card neutral"
} as const;

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Workflow Orchestration Studio</p>
          <h1>Multi-step operations, approvals, and routing logic in one operator-grade control surface.</h1>
          <p className="hero-text">
            A recruiter-ready frontend flagship for teams that need workflow visibility, escalation logic, retry control,
            and ownership clarity across complex internal operations.
          </p>
          <div className="hero-chips">
            <span>Approvals</span>
            <span>Automation</span>
            <span>Ownership</span>
          </div>
        </div>
        <div className="orchestration-map" aria-label="Workflow orchestration map">
          {stepNodes.map((node, index) => (
            <div key={node.label} className="node-wrapper">
              <div className="node-card">
                <strong>{node.label}</strong>
                <span>{node.state}</span>
              </div>
              {index < stepNodes.length - 1 ? <div className="node-link" /> : null}
            </div>
          ))}
        </div>
      </header>

      <section className="signal-grid" aria-label="Workflow signals">
        {topSignals.map((signal) => (
          <article key={signal.label} className={signalTone[signal.tone]}>
            <p>{signal.label}</p>
            <strong>{signal.value}</strong>
            <span>{signal.delta}</span>
          </article>
        ))}
      </section>

      <section className="content-grid first-grid">
        <article className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Execution throughput</p>
              <h2>How the system moves work through approvals and retries</h2>
            </div>
            <span className="panel-note">Daily operator load</span>
          </div>
          <div className="chart-frame">
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={throughputTrend}>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
                <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid rgba(148,163,184,0.16)",
                    borderRadius: "18px"
                  }}
                />
                <Legend />
                <Bar dataKey="executions" fill="#2dd4bf" radius={[8, 8, 0, 0]} />
                <Bar dataKey="approvals" fill="#38bdf8" radius={[8, 8, 0, 0]} />
                <Line type="monotone" dataKey="retries" stroke="#f59e0b" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel lane-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Workflow lanes</p>
              <h2>Current stage pressure and SLA posture</h2>
            </div>
          </div>
          <div className="lane-list">
            {workflowLanes.map((lane) => (
              <article key={lane.stage} className="lane-card">
                <div className="lane-topline">
                  <strong>{lane.stage}</strong>
                  <span>{lane.count} active</span>
                </div>
                <div className="lane-track">
                  <div className="lane-fill" style={{ width: `${lane.count * 2}%`, background: lane.color }} />
                </div>
                <small>{lane.sla} · {lane.owner}</small>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid second-grid">
        <article className="panel rules-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Automation rules</p>
              <h2>Which orchestration policies carry the most leverage</h2>
            </div>
          </div>
          <div className="rule-grid">
            {automationRules.map((rule) => (
              <article key={rule.name} className="rule-card">
                <div className="rule-topline">
                  <strong>{rule.name}</strong>
                  <span>{rule.risk}</span>
                </div>
                <p className="rule-trigger">{rule.trigger}</p>
                <p>{rule.route}</p>
                <small>{rule.note}</small>
              </article>
            ))}
          </div>
        </article>

        <article className="panel alert-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Queue alerts</p>
              <h2>What leadership and operators should act on next</h2>
            </div>
          </div>
          <div className="alert-list">
            {queueAlerts.map((alert) => (
              <article key={alert.title} className="alert-card">
                <div className="alert-topline">
                  <strong>{alert.title}</strong>
                  <span>{alert.severity}</span>
                </div>
                <p>{alert.detail}</p>
                <small>{alert.nextAction}</small>
              </article>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
