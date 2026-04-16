import { frameworks } from '../data/mockData';
import { IconCompliance } from '../components/Icons';

function color(c: number) {
  if (c >= 90) return 'var(--green)';
  if (c >= 80) return 'var(--yellow)';
  return 'var(--red)';
}

export default function ComplianceMap() {
  return (
    <>
      <div className="bc">VShield / <b>Compliance Map</b></div>
      <div className="page-title">Compliance Map</div>
      <div className="page-sub">Controls from leading frameworks wired to VShield policies. Evidence auto-harvested.</div>

      <div className="panel">
        <div className="panel-h">
          <div className="panel-t"><IconCompliance />Framework Coverage</div>
          <div className="panel-a">Export Evidence →</div>
        </div>
        <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {frameworks.map(f => (
            <div key={f.id} style={{ background: 'var(--bg2)', border: '1px solid var(--w04)', borderRadius: 10, padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{f.name}</div>
                <span style={{ color: color(f.coverage), fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600 }}>{f.coverage}%</span>
              </div>
              <div style={{ height: 4, background: 'var(--w04)', borderRadius: 2, overflow: 'hidden', marginBottom: 10 }}>
                <div style={{ height: '100%', width: `${f.coverage}%`, background: color(f.coverage) }} />
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--w40)', display: 'flex', justifyContent: 'space-between' }}>
                <span>{f.passing}/{f.controls} controls passing</span>
                <span style={{ color: 'var(--w60)' }}>{f.controls - f.passing} gaps</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
