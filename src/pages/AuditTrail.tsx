import AuditStream from '../components/AuditStream';
import { IconClipboard } from '../components/Icons';

export default function AuditTrail() {
  return (
    <>
      <div className="bc">VShield / <b>Audit Trail</b> — 52,410 events indexed</div>
      <div className="page-title">Audit Trail</div>
      <div className="page-sub">Immutable, tamper-evident log of every decision the engine has made.</div>

      <div className="grid2">
        <div className="panel">
          <div className="panel-h">
            <div className="panel-t"><IconClipboard />Live Stream</div>
            <div className="panel-a">Pause</div>
          </div>
          <AuditStream size={12} />
        </div>
        <div className="panel">
          <div className="panel-h">
            <div className="panel-t"><IconClipboard />Retention & Integrity</div>
            <div className="panel-a">Settings →</div>
          </div>
          <div style={{ padding: 16 }}>
            <dl className="kv">
              <dt>Retention</dt><dd>7 years (immutable, WORM-backed)</dd>
              <dt>Integrity</dt><dd>Merkle-chained, daily anchor to external witness</dd>
              <dt>Export</dt><dd>SIEM (Splunk, Sentinel) · S3 · SFTP</dd>
              <dt>Schema</dt><dd>OpenTelemetry-compatible, CloudEvents v1.0</dd>
              <dt>Fields</dt><dd>ts, agent, decision, policy, target, payload_hash, correlation_id, signature</dd>
              <dt>Access</dt><dd>RBAC scoped per tenant; read-only API with JWT</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
