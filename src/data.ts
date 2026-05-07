import { AutomationRule, QueueAlert, Signal, StepNode, ThroughputPoint, WorkflowLane } from "./types";

export const topSignals: Signal[] = [
  { label: "Active workflows", value: "18", delta: "+4 this quarter", tone: "positive" },
  { label: "Approval latency", value: "6.2h", delta: "Down 18%", tone: "positive" },
  { label: "Retry load", value: "9%", delta: "Billing handoff still noisy", tone: "watch" },
  { label: "Routing confidence", value: "93", delta: "Policy stable", tone: "neutral" }
];

export const workflowLanes: WorkflowLane[] = [
  { stage: "Intake", count: 38, sla: "< 2h", owner: "Ops intake", color: "#2dd4bf" },
  { stage: "Review", count: 26, sla: "< 8h", owner: "Functional lead", color: "#38bdf8" },
  { stage: "Approval", count: 14, sla: "< 12h", owner: "Director", color: "#f59e0b" },
  { stage: "Execution", count: 31, sla: "< 24h", owner: "Delivery pod", color: "#a78bfa" }
];

export const throughputTrend: ThroughputPoint[] = [
  { day: "Mon", executions: 42, approvals: 28, retries: 5 },
  { day: "Tue", executions: 51, approvals: 34, retries: 4 },
  { day: "Wed", executions: 48, approvals: 31, retries: 6 },
  { day: "Thu", executions: 57, approvals: 39, retries: 5 },
  { day: "Fri", executions: 61, approvals: 44, retries: 3 }
];

export const automationRules: AutomationRule[] = [
  {
    name: "Enterprise legal escalation",
    trigger: "Deal risk + legal review > 24h",
    route: "Legal lead → Exec sponsor",
    risk: "High",
    note: "Protects commit dates for strategic deals."
  },
  {
    name: "Partner SLA recovery",
    trigger: "Partner intake idle > 6h",
    route: "Channel ops → Routing manager",
    risk: "Medium",
    note: "Prevents regional partner backlog from distorting attribution."
  },
  {
    name: "Identity exception triage",
    trigger: "Critical exception queue count > 5",
    route: "IAM lead → Security governance",
    risk: "High",
    note: "Keeps remediation work visible before audit review."
  }
];

export const queueAlerts: QueueAlert[] = [
  {
    title: "Approval lane is absorbing too much commercial escalation",
    severity: "High",
    detail: "Cross-functional approvers are creating a bottleneck for strategic pricing and identity exceptions.",
    nextAction: "Auto-split approval paths by workflow family this sprint."
  },
  {
    title: "Retry rate is concentrated in partner and billing handoffs",
    severity: "Medium",
    detail: "Most orchestration noise comes from two route families rather than broad system instability.",
    nextAction: "Introduce path-specific remediation playbooks."
  },
  {
    title: "Executive visibility is strong, but ownership signals can tighten",
    severity: "Medium",
    detail: "The command layer shows status clearly, but some workflows still need more explicit accountable owners.",
    nextAction: "Add owner-specific dashboards and route acknowledgements."
  }
];

export const stepNodes: StepNode[] = [
  { label: "Trigger", state: "Healthy" },
  { label: "Validation", state: "Stable" },
  { label: "Policy Check", state: "Monitored" },
  { label: "Approval", state: "Constrained" },
  { label: "Execution", state: "Healthy" },
  { label: "Feedback", state: "Live" }
];
