import StatCards from '../components/StatCards';
import GovernanceHierarchy from '../components/GovernanceHierarchy';
import PoliciesTable from '../components/PoliciesTable';
import AuditStream from '../components/AuditStream';
import { IconShield, IconPolicy, IconClipboard } from '../components/Icons';

export default function GuardrailStatus() {
  return (
    <>
      <div className="bc">VShield / <b>Guardrail Status</b> — All policies enforcing</div>

      <StatCards />

      <div className="grid-main">
        <div className="panel">
          <div className="panel-h">
            <div className="panel-t"><IconShield />Agent Governance Hierarchy</div>
            <div className="panel-a">Edit Policies →</div>
          </div>
          <div style={{ padding: 12 }}>
            <GovernanceHierarchy />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="panel">
            <div className="panel-h">
              <div className="panel-t"><IconPolicy />Runtime Policies</div>
              <div className="panel-a">Manage →</div>
            </div>
            <PoliciesTable limit={6} />
          </div>
          <div className="panel" style={{ flex: 1 }}>
            <div className="panel-h">
              <div className="panel-t"><IconClipboard />Recent Audit Events</div>
              <div className="panel-a">Full Log →</div>
            </div>
            <AuditStream />
          </div>
        </div>
      </div>
    </>
  );
}
