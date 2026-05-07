export type Signal = {
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "watch" | "neutral";
};

export type WorkflowLane = {
  stage: string;
  count: number;
  sla: string;
  owner: string;
  color: string;
};

export type ThroughputPoint = {
  day: string;
  executions: number;
  approvals: number;
  retries: number;
};

export type AutomationRule = {
  name: string;
  trigger: string;
  route: string;
  risk: string;
  note: string;
};

export type QueueAlert = {
  title: string;
  severity: string;
  detail: string;
  nextAction: string;
};

export type StepNode = {
  label: string;
  state: string;
};
