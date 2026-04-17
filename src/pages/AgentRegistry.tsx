import { agents } from '../data/mockData';
import { IconCpu } from '../components/Icons';

const trustColor = {
  HIGH: 'var(--green)',
  MED:  'var(--yellow)',
  LOW:  'var(--red)',
} as const;

export default function AgentRegistry() {
  return (
    <>
      <div className="bc">VShield / <b>Agent Registry</b> — {agents.length} governed agents</div>
      <div className="page-title">Agent Registry</div>
      <div className="page-sub">Every agent runtime enrolled with VShield. Identity, scope, and trust in one place.</div>

      <div className="panel">
        <div className="panel-h">
          <div className="panel-t"><IconCpu />All Agents</div>
          <div className="panel-a">+ Enroll Agent</div>
        </div>
        <div className="ag-grid">
          {agents.map(a => (
            <div key={a.id} className="ag">
              <div className="ag-top">
                <div className="ag-name">
                  <span className="sd" style={{ background: trustColor[a.trust], boxShadow: `0 0 6px ${trustColor[a.trust]}` }} />
                  {a.name}
                </div>
                <div className="ag-type">{a.type}</div>
              </div>
              <div style={{ color: 'var(--w60)', fontSize: 10.5, lineHeight: 1.45 }}>{a.description}</div>
              <div className="ag-perms">
                {a.permissions.map(p => (
                  <span key={p.name} className={`ag-perm ${p.state === 'granted' ? 'granted' : p.state === 'denied' ? 'denied' : ''}`}>
                    {p.state === 'denied' ? '×' : '✓'} {p.name}
                  </span>
                ))}
              </div>
              <div className="ag-trust">
                <span>trust</span>
                <div className="trust-bar">
                  <div className="trust-fill" style={{ width: `${a.trustScore}%`, background: trustColor[a.trust] }} />
                </div>
                <span style={{ color: trustColor[a.trust] }}>{a.trustScore}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
