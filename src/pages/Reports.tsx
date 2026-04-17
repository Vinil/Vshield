import { IconReport } from '../components/Icons';

const reports = [
  { id: 'r-01', name: 'Weekly Posture Summary',      schedule: 'Mon 08:00 UTC',  last: '3 days ago',  format: 'PDF + JSON' },
  { id: 'r-02', name: 'Blocked Actions — Exec View', schedule: 'Daily 07:00 UTC', last: '17 hours ago', format: 'PDF'        },
  { id: 'r-03', name: 'SOC 2 Evidence Package',      schedule: 'Quarterly',       last: '2 weeks ago', format: 'ZIP'        },
  { id: 'r-04', name: 'Agent Trust Deltas',          schedule: 'Weekly',          last: '4 days ago',  format: 'CSV'        },
  { id: 'r-05', name: 'Prompt-Injection Incidents',  schedule: 'Daily',           last: '11 hours ago', format: 'JSON'       },
  { id: 'r-06', name: 'Egress Host Anomalies',       schedule: 'Hourly',          last: '23 minutes',   format: 'JSON'       },
];

export default function Reports() {
  return (
    <>
      <div className="bc">VShield / <b>Reports</b></div>
      <div className="page-title">Reports</div>
      <div className="page-sub">Scheduled, evidence-ready reports for security, compliance, and executive audiences.</div>

      <div className="panel">
        <div className="panel-h">
          <div className="panel-t"><IconReport />Scheduled Reports</div>
          <div className="panel-a">+ New Report</div>
        </div>
        <table className="tbl">
          <thead><tr><th>Name</th><th>Schedule</th><th>Last Run</th><th>Format</th><th></th></tr></thead>
          <tbody>
            {reports.map(r => (
              <tr key={r.id}>
                <td style={{ color: 'var(--w80)', fontWeight: 500 }}>{r.name}</td>
                <td style={{ fontFamily: 'var(--mono)', fontSize: 10.5 }}>{r.schedule}</td>
                <td style={{ color: 'var(--w40)', fontFamily: 'var(--mono)', fontSize: 10.5 }}>{r.last}</td>
                <td><span className="tag tag-on">{r.format}</span></td>
                <td style={{ textAlign: 'right' }}>
                  <button className="btn ghost" style={{ padding: '5px 10px' }}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
