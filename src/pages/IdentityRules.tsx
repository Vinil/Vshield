import { agents } from '../data/mockData';
import { IconKey } from '../components/Icons';

const trustColor = {
  HIGH: 'var(--green)',
  MED:  'var(--yellow)',
  LOW:  'var(--red)',
} as const;

export default function IdentityRules() {
  return (
    <>
      <div className="bc">VShield / <b>Identity Rules</b></div>
      <div className="page-title">Identity Rules</div>
      <div className="page-sub">Per-agent scope, trust tier, and privilege boundaries.</div>

      <div className="panel">
        <div className="panel-h">
          <div className="panel-t"><IconKey />Agent Identity Scope</div>
          <div className="panel-a">Policy Builder →</div>
        </div>
        <table className="tbl">
          <thead><tr><th>Agent</th><th>Trust</th><th>Trust Score</th><th>Permissions</th></tr></thead>
          <tbody>
            {agents.map(a => (
              <tr key={a.id}>
                <td style={{ color: 'var(--w80)', fontWeight: 500 }}>
                  <div>{a.name}</div>
                  <div style={{ color: 'var(--w40)', fontFamily: 'var(--mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: 1 }}>{a.type}</div>
                </td>
                <td>
                  <span style={{ color: trustColor[a.trust], fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 0.5 }}>
                    <span className="sd" style={{ background: trustColor[a.trust], boxShadow: `0 0 6px ${trustColor[a.trust]}` }} />
                    {a.trust}
                  </span>
                </td>
                <td style={{ fontFamily: 'var(--mono)', width: 220 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 32, color: trustColor[a.trust] }}>{a.trustScore}</span>
                    <div className="trust-bar">
                      <div className="trust-fill" style={{ width: `${a.trustScore}%`, background: trustColor[a.trust] }} />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="ag-perms" style={{ marginTop: 0 }}>
                    {a.permissions.map(perm => (
                      <span key={perm.name} className={`ag-perm ${perm.state === 'granted' ? 'granted' : perm.state === 'denied' ? 'denied' : ''}`}>
                        {perm.state === 'denied' ? '×' : '✓'} {perm.name}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
