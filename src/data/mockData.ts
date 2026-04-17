export type TrustLevel = 'HIGH' | 'MED' | 'LOW';

export interface Agent {
  id: string;
  name: string;
  type: string;
  trust: TrustLevel;
  trustScore: number;
  blocks24h: number;
  permissions: { name: string; state: 'granted' | 'denied' | 'neutral' }[];
  description: string;
}

export const agents: Agent[] = [
  { id: 'SOC-01', name: 'SOC-01', type: 'Security Ops', trust: 'HIGH', trustScore: 96, blocks24h: 1,
    permissions: [
      { name: 'read:logs', state: 'granted' },
      { name: 'read:alerts', state: 'granted' },
      { name: 'write:incidents', state: 'granted' },
      { name: 'exfil:external', state: 'denied' },
    ],
    description: 'Primary SOC triage agent — correlates alerts, enriches with threat intel, opens incidents.' },
  { id: 'IAM-Rot', name: 'IAM-Rot', type: 'Identity Rotator', trust: 'HIGH', trustScore: 94, blocks24h: 0,
    permissions: [
      { name: 'iam:rotate', state: 'granted' },
      { name: 'kms:encrypt', state: 'granted' },
      { name: 'iam:create-user', state: 'denied' },
    ],
    description: 'Rotates service-account credentials on policy schedule.' },
  { id: 'DLP-Mon', name: 'DLP-Mon', type: 'Data Loss Prevention', trust: 'HIGH', trustScore: 92, blocks24h: 2,
    permissions: [
      { name: 'read:s3', state: 'granted' },
      { name: 'scan:pii', state: 'granted' },
      { name: 'write:s3', state: 'denied' },
    ],
    description: 'Continuously scans object stores for PII, cardholder data, and secrets.' },
  { id: 'Vuln-Pri', name: 'Vuln-Pri', type: 'Vuln Prioritizer', trust: 'HIGH', trustScore: 90, blocks24h: 0,
    permissions: [
      { name: 'read:vulns', state: 'granted' },
      { name: 'read:exploit-intel', state: 'granted' },
      { name: 'write:jira', state: 'granted' },
    ],
    description: 'Ranks CVEs by exploit-in-the-wild signals + asset criticality.' },
  { id: 'CldScan', name: 'CldScan', type: 'Cloud Scanner', trust: 'HIGH', trustScore: 88, blocks24h: 0,
    permissions: [
      { name: 'read:aws', state: 'granted' },
      { name: 'read:gcp', state: 'granted' },
      { name: 'write:*', state: 'denied' },
    ],
    description: 'CSPM posture scanner across AWS + GCP accounts.' },
  { id: 'ML-Pipe', name: 'ML-Pipe', type: 'Model Pipeline', trust: 'MED', trustScore: 72, blocks24h: 3,
    permissions: [
      { name: 'read:training', state: 'granted' },
      { name: 'write:registry', state: 'granted' },
      { name: 'deploy:prod', state: 'denied' },
    ],
    description: 'Automated retraining pipeline — bounded to staging deploys.' },
  { id: 'Test-X', name: 'Test-X', type: 'Experimental', trust: 'LOW', trustScore: 34, blocks24h: 5,
    permissions: [
      { name: 'read:sandbox', state: 'granted' },
      { name: 'write:sandbox', state: 'granted' },
      { name: 'access:prod-db', state: 'denied' },
      { name: 'call:ext-api', state: 'denied' },
    ],
    description: 'New-code-path exploratory agent, quarantined to sandbox tenant.' },
  { id: 'Phish-Hunt', name: 'Phish-Hunt', type: 'Threat Hunter', trust: 'HIGH', trustScore: 91, blocks24h: 0,
    permissions: [
      { name: 'read:mail', state: 'granted' },
      { name: 'read:headers', state: 'granted' },
      { name: 'quarantine:mail', state: 'granted' },
    ],
    description: 'Inbox-level phishing detection + auto-quarantine.' },
  { id: 'Patch-Bot', name: 'Patch-Bot', type: 'Patch Automator', trust: 'HIGH', trustScore: 89, blocks24h: 0,
    permissions: [
      { name: 'read:inventory', state: 'granted' },
      { name: 'write:patch-plan', state: 'granted' },
      { name: 'execute:patch', state: 'denied' },
    ],
    description: 'Plans patch windows; execution requires human approval.' },
  { id: 'Net-Seg', name: 'Net-Seg', type: 'Network Segmenter', trust: 'HIGH', trustScore: 87, blocks24h: 1,
    permissions: [
      { name: 'read:flows', state: 'granted' },
      { name: 'write:fw-rules', state: 'granted' },
    ],
    description: 'Proposes micro-segmentation from observed east-west flows.' },
  { id: 'Log-Fwd', name: 'Log-Fwd', type: 'Log Forwarder', trust: 'HIGH', trustScore: 93, blocks24h: 0,
    permissions: [
      { name: 'read:k8s-logs', state: 'granted' },
      { name: 'write:siem', state: 'granted' },
    ],
    description: 'Normalizes container logs and ships to the SIEM.' },
  { id: 'Comp-Aud', name: 'Comp-Aud', type: 'Compliance Auditor', trust: 'HIGH', trustScore: 95, blocks24h: 0,
    permissions: [
      { name: 'read:configs', state: 'granted' },
      { name: 'read:policies', state: 'granted' },
      { name: 'write:findings', state: 'granted' },
    ],
    description: 'Maps system state to SOC 2 / ISO 27001 / HIPAA controls.' },
  { id: 'Key-Vault', name: 'Key-Vault', type: 'Secret Manager', trust: 'HIGH', trustScore: 97, blocks24h: 0,
    permissions: [
      { name: 'read:kv', state: 'granted' },
      { name: 'write:kv', state: 'granted' },
      { name: 'export:kv', state: 'denied' },
    ],
    description: 'Broker for ephemeral secrets; export is structurally blocked.' },
  { id: 'Edge-WAF', name: 'Edge-WAF', type: 'Edge Protector', trust: 'HIGH', trustScore: 86, blocks24h: 1,
    permissions: [
      { name: 'read:edge-logs', state: 'granted' },
      { name: 'write:waf-rules', state: 'granted' },
    ],
    description: 'Adapts WAF rules from edge telemetry.' },
  { id: 'SBOM-Gen', name: 'SBOM-Gen', type: 'Supply Chain', trust: 'HIGH', trustScore: 85, blocks24h: 0,
    permissions: [
      { name: 'read:builds', state: 'granted' },
      { name: 'write:sbom', state: 'granted' },
    ],
    description: 'Generates and signs SBOMs per build.' },
  { id: 'Drift-Det', name: 'Drift-Det', type: 'Config Drift', trust: 'HIGH', trustScore: 88, blocks24h: 0,
    permissions: [
      { name: 'read:terraform-state', state: 'granted' },
      { name: 'write:drift-report', state: 'granted' },
    ],
    description: 'Detects IaC → runtime drift and opens remediation tickets.' },
  { id: 'Red-Sim', name: 'Red-Sim', type: 'Red Team Sim', trust: 'MED', trustScore: 68, blocks24h: 7,
    permissions: [
      { name: 'simulate:attack', state: 'granted' },
      { name: 'read:staging', state: 'granted' },
      { name: 'reach:prod', state: 'denied' },
    ],
    description: 'Emulates ATT&CK techniques in staging only.' },
  { id: 'Msg-Scan', name: 'Msg-Scan', type: 'Messaging DLP', trust: 'HIGH', trustScore: 90, blocks24h: 3,
    permissions: [
      { name: 'read:slack', state: 'granted' },
      { name: 'read:teams', state: 'granted' },
      { name: 'redact:msg', state: 'granted' },
    ],
    description: 'Inline redaction for sensitive data posted to chat.' },
];

export interface Policy {
  id: string;
  name: string;
  category: 'data' | 'identity' | 'tool' | 'rate' | 'supply' | 'network';
  status: 'active' | 'paused';
  blocks24h: number;
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  rule: string;
  updatedAt: string;
}

export const policies: Policy[] = [
  { id: 'pol-001', name: 'PII Data Exfiltration', category: 'data', status: 'active', blocks24h: 8, severity: 'critical',
    description: 'Blocks agent calls that carry recognizable PII (SSN, DOB, card PAN, national ID) to any egress destination outside the approved zone.',
    rule: 'deny if pii_entities_detected and destination.zone != "internal"',
    updatedAt: '2 days ago' },
  { id: 'pol-002', name: 'Privilege Escalation', category: 'identity', status: 'active', blocks24h: 5, severity: 'critical',
    description: 'Prevents any agent from widening its own IAM scope or assuming a role above its trust tier.',
    rule: 'deny if action matches "iam:AttachPolicy|iam:PassRole" and target.tier > agent.trust_tier',
    updatedAt: '5 days ago' },
  { id: 'pol-003', name: 'Unauthorized Tool Access', category: 'tool', status: 'active', blocks24h: 4, severity: 'high',
    description: 'Agents may only call tools explicitly listed in their manifest. Ad-hoc tool discovery is blocked.',
    rule: 'deny if tool.id not in agent.manifest.tools',
    updatedAt: '1 week ago' },
  { id: 'pol-004', name: 'Cross-Tenant Data Flow', category: 'data', status: 'active', blocks24h: 3, severity: 'high',
    description: 'No agent may read from one tenant and write to another in the same session.',
    rule: 'deny if session.read_tenant != session.write_tenant',
    updatedAt: '3 days ago' },
  { id: 'pol-005', name: 'Execution Rate Limiter', category: 'rate', status: 'active', blocks24h: 2, severity: 'medium',
    description: 'Bounds per-agent tool invocations and outbound bytes within rolling windows.',
    rule: 'deny if agent.invocations_5m > threshold[agent.trust_tier]',
    updatedAt: '1 week ago' },
  { id: 'pol-006', name: 'MCP Server Auth', category: 'tool', status: 'active', blocks24h: 1, severity: 'high',
    description: 'All MCP server calls require signed, unexpired short-lived tokens bound to the agent identity.',
    rule: 'deny if mcp.auth.signature invalid or mcp.auth.exp < now()',
    updatedAt: '12 hours ago' },
  { id: 'pol-007', name: 'Prompt Injection Detector', category: 'data', status: 'active', blocks24h: 0, severity: 'high',
    description: 'Flags tool outputs that contain instructions targeting the agent (jailbreak / indirect injection).',
    rule: 'warn if tool.output matches injection_signatures then require human_review',
    updatedAt: '2 weeks ago' },
  { id: 'pol-008', name: 'Supply-Chain Package Allowlist', category: 'supply', status: 'active', blocks24h: 0, severity: 'medium',
    description: 'Agents may only import/execute packages signed by trusted publishers.',
    rule: 'deny if package.signer not in trust_roots',
    updatedAt: '4 days ago' },
  { id: 'pol-009', name: 'Egress Host Allowlist', category: 'network', status: 'active', blocks24h: 0, severity: 'medium',
    description: 'Outbound HTTP targets must match the agent-specific host allowlist.',
    rule: 'deny if http.host not in agent.allowlist.hosts',
    updatedAt: '3 days ago' },
  { id: 'pol-010', name: 'Sensitive Action Quorum', category: 'identity', status: 'active', blocks24h: 0, severity: 'critical',
    description: 'High-blast-radius actions require a second signer (human or trusted agent).',
    rule: 'deny if action.blast_radius >= HIGH and approvals < 2',
    updatedAt: '6 days ago' },
];

export interface AuditEvent {
  ts: string;
  level: 'block' | 'allow' | 'warn' | 'audit';
  message: string;
  agent?: string;
}

export const initialAuditEvents: AuditEvent[] = [
  { ts: '14:33:21', level: 'block', message: 'PII exfil attempt — ext-api', agent: 'SOC-01' },
  { ts: '14:32:58', level: 'allow', message: 'Cred rotation approved', agent: 'IAM-Rot' },
  { ts: '14:32:14', level: 'warn',  message: 'Rate limit 82% — Cloud-Scanner' },
  { ts: '14:31:47', level: 'block', message: 'Priv escalation denied', agent: 'Test-X' },
  { ts: '14:31:02', level: 'audit', message: 'Policy update: MCP auth v2.1 deployed' },
  { ts: '14:30:44', level: 'block', message: 'Unauth tool call → prod-db', agent: 'Test-X' },
];

export const streamEvents: Omit<AuditEvent, 'ts'>[] = [
  { level: 'block', message: 'PII exfil attempt — ext-api', agent: 'SOC-01' },
  { level: 'allow', message: 'Cred rotation approved', agent: 'IAM-Rot' },
  { level: 'warn',  message: 'Rate limit 82% — Cloud-Scanner' },
  { level: 'block', message: 'Priv escalation denied', agent: 'Test-X' },
  { level: 'audit', message: 'Policy update: MCP auth v2.1 deployed' },
  { level: 'block', message: 'Unauth tool call → prod-db', agent: 'Test-X' },
  { level: 'allow', message: 'DLP scan completed — S3 bucket-047' },
  { level: 'block', message: 'Cross-tenant read denied', agent: 'ML-Pipe' },
  { level: 'warn',  message: 'Prompt-injection signature in tool reply' },
  { level: 'audit', message: 'SBOM signed for build #8814' },
  { level: 'allow', message: 'Patch-plan opened for CVE-2025-41171', agent: 'Patch-Bot' },
  { level: 'block', message: 'Egress host not in allowlist', agent: 'Red-Sim' },
];

export interface StatCard {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  deltaBad?: boolean;
  color?: string;
  kind: 's1' | 's2' | 's3' | 's4';
}

export const stats: StatCard[] = [
  { label: 'Policies Active', value: '147', delta: 'All enforcing', color: 'var(--orange)', kind: 's1' },
  { label: 'Blocked (24h)', value: '23', delta: '+4 from yesterday', deltaBad: true, color: 'var(--red)', kind: 's2' },
  { label: 'Governed Agents', value: '18', unit: '/18', delta: '100% coverage', color: 'var(--green)', kind: 's3' },
  { label: 'Audit Events', value: '52.4', unit: 'K', delta: 'All logged & indexed', kind: 's4' },
];

export interface ComplianceFramework {
  id: string;
  name: string;
  coverage: number;
  controls: number;
  passing: number;
}

export const frameworks: ComplianceFramework[] = [
  { id: 'soc2',    name: 'SOC 2 Type II',  coverage: 94, controls: 116, passing: 109 },
  { id: 'iso',     name: 'ISO 27001:2022', coverage: 91, controls: 93,  passing: 85  },
  { id: 'hipaa',   name: 'HIPAA',          coverage: 88, controls: 54,  passing: 48  },
  { id: 'pcidss',  name: 'PCI DSS 4.0',    coverage: 82, controls: 264, passing: 217 },
  { id: 'gdpr',    name: 'GDPR',           coverage: 90, controls: 47,  passing: 42  },
  { id: 'nist',    name: 'NIST AI RMF',    coverage: 86, controls: 72,  passing: 62  },
];
