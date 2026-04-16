import { policies } from '../data/mockData';
import { IconPolicy } from '../components/Icons';

const catColor: Record<string, string> = {
  data:     'var(--red)',
  identity: 'var(--violet)',
  tool:     'var(--cyan)',
  rate:     'var(--yellow)',
  supply:   'var(--orange)',
  network:  'var(--green)',
};

const sevColor: Record<string, string> = {
  critical: 'var(--red)',
  high:     'var(--orange)',
  medium:   'var(--yellow)',
  low:      'var(--green)',
};

export default function PolicyEngine() {
  return (
    <>
      <div className="bc">VShield / <b>Policy Engine</b> — {policies.length} policies defined</div>
      <div className="page-title">Policy Engine</div>
      <div className="page-sub">Runtime rules evaluated in-line on every agent action. Edit below to redeploy.</div>

      <div className="panel">
        <div className="panel-h">
          <div className="panel-t"><IconPolicy />All Policies</div>
          <div className="panel-a">+ New Policy</div>
        </div>
        <table className="tbl">
          <thead><tr><th>Policy</th><th>Category</th><th>Severity</th><th>Blocks (24h)</th><th>Rule</th><th>Updated</th></tr></thead>
          <tbody>
            {policies.map(p => (
              <tr key={p.id}>
                <td style={{ color: 'var(--w80)' }}>
                  <div style={{ fontWeight: 600 }}>{p.name}</div>
                  <div style={{ color: 'var(--w40)', fontSize: 10.5, marginTop: 2, maxWidth: 380 }}>{p.description}</div>
                </td>
                <td>
                  <span className="tag" style={{ background: 'var(--w04)', color: catColor[p.category] }}>
                    {p.category}
                  </span>
                </td>
                <td>
                  <span style={{ color: sevColor[p.severity], fontFamily: 'var(--mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    {p.severity}
                  </span>
                </td>
                <td style={{ fontFamily: 'var(--mono)', color: p.blocks24h > 0 ? 'var(--red)' : 'var(--w40)' }}>{p.blocks24h}</td>
                <td style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--w60)' }}>{p.rule}</td>
                <td style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--w40)' }}>{p.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
