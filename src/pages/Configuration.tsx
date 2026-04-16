import { IconGear } from '../components/Icons';

export default function Configuration() {
  return (
    <>
      <div className="bc">VShield / <b>Configuration</b></div>
      <div className="page-title">Configuration</div>
      <div className="page-sub">Platform-wide enforcement mode, integrations, and secrets.</div>

      <div className="grid2">
        <div className="panel">
          <div className="panel-h">
            <div className="panel-t"><IconGear />Enforcement Mode</div>
          </div>
          <div style={{ padding: 16 }}>
            <dl className="kv">
              <dt>Mode</dt><dd><span className="tag tag-on">Enforce</span> (block violations inline)</dd>
              <dt>Fail-open</dt><dd>Disabled — agents are blocked if VShield is unreachable</dd>
              <dt>Latency budget</dt><dd>80 ms p99</dd>
              <dt>Deploy</dt><dd>Sidecar proxy + eBPF tap + SDK</dd>
            </dl>
          </div>
        </div>
        <div className="panel">
          <div className="panel-h">
            <div className="panel-t"><IconGear />Integrations</div>
            <div className="panel-a">+ Add</div>
          </div>
          <div style={{ padding: 16 }}>
            <dl className="kv">
              <dt>Identity</dt><dd>Okta · Azure AD · AWS IAM</dd>
              <dt>SIEM</dt><dd>Splunk · Microsoft Sentinel · Datadog</dd>
              <dt>Ticketing</dt><dd>Jira · ServiceNow · Linear</dd>
              <dt>Messaging</dt><dd>Slack · Teams · PagerDuty</dd>
              <dt>Model hosts</dt><dd>Anthropic · OpenAI · Bedrock · Vertex</dd>
              <dt>MCP servers</dt><dd>14 registered, 14 verified</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
