import { useMemo, useState } from 'react';
import { policies, agents } from '../data/mockData';
import { IconBlock } from '../components/Icons';

interface Block {
  id: string;
  ts: string;
  agent: string;
  policy: string;
  target: string;
  details: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
}

function generate(): Block[] {
  const targets = ['ext-api', 'prod-db', 'prod.kms', 's3://tenant-b/*', 'payroll.rds', 'iam:AttachPolicy', 'slack:#exec', 'gcp://billing', 'azure.keyvault'];
  const details = [
    'Payload matched PII pattern (SSN)',
    'Attempted role assumption above trust tier',
    'Tool not in agent manifest',
    'Cross-tenant read/write in one session',
    '5-minute invocation budget exceeded',
    'MCP token signature invalid',
    'Host not in egress allowlist',
  ];
  const sev: Block['severity'][] = ['critical', 'high', 'medium', 'low'];
  const out: Block[] = [];
  const now = new Date();
  for (let i = 0; i < 23; i++) {
    const ts = new Date(now.getTime() - i * (60_000 + Math.random() * 4 * 60_000))
      .toLocaleTimeString('en-GB', { hour12: false });
    out.push({
      id: `blk-${String(1000 + i)}`,
      ts,
      agent: agents[i % agents.length].id,
      policy: policies[i % policies.length].name,
      target: targets[i % targets.length],
      details: details[i % details.length],
      severity: sev[i % sev.length],
    });
  }
  return out;
}

const sevColor: Record<string, string> = {
  critical: 'var(--red)',
  high:     'var(--orange)',
  medium:   'var(--yellow)',
  low:      'var(--green)',
};

export default function BlockedActions() {
  const all = useMemo(generate, []);
  const [filter, setFilter] = useState<string>('all');
  const filtered = filter === 'all' ? all : all.filter(b => b.severity === filter);

  return (
    <>
      <div className="bc">VShield / <b>Blocked Actions</b> — {all.length} in last 24h</div>
      <div className="page-title">Blocked Actions</div>
      <div className="page-sub">Every denied agent action, preserved for audit.</div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
        {(['all', 'critical', 'high', 'medium', 'low'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? 'btn' : 'btn ghost'}
          >{f}</button>
        ))}
      </div>

      <div className="panel">
        <div className="panel-h">
          <div className="panel-t"><IconBlock />Denied Events</div>
          <div className="panel-a">Export CSV →</div>
        </div>
        <table className="tbl">
          <thead><tr><th>Time</th><th>Agent</th><th>Policy</th><th>Target</th><th>Details</th><th>Severity</th></tr></thead>
          <tbody>
            {filtered.map(b => (
              <tr key={b.id}>
                <td style={{ fontFamily: 'var(--mono)', color: 'var(--w40)' }}>{b.ts}</td>
                <td style={{ color: 'var(--w80)', fontWeight: 500 }}>{b.agent}</td>
                <td>{b.policy}</td>
                <td style={{ fontFamily: 'var(--mono)', color: 'var(--w60)' }}>{b.target}</td>
                <td>{b.details}</td>
                <td>
                  <span style={{ color: sevColor[b.severity], fontFamily: 'var(--mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    {b.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
