import { IconBell } from './Icons';

const tabs = [
  { id: 'guardrails',    label: 'Guardrails' },
  { id: 'policy-engine', label: 'Policy Engine' },
  { id: 'identity',      label: 'Identity' },
  { id: 'agent-scope',   label: 'Agent Scope' },
  { id: 'audit-log',     label: 'Audit Log' },
  { id: 'governance',    label: 'Governance' },
];

export default function Topbar({ active = 'guardrails' }: { active?: string }) {
  return (
    <div className="tb">
      <div className="tb-nav">
        {tabs.map(t => (
          <a key={t.id} href="#" className={t.id === active ? 'active' : ''}>{t.label}</a>
        ))}
      </div>
      <div className="tb-r">
        <div className="bell"><IconBell /><div className="bell-dot" /></div>
        <div className="avatar">VV</div>
      </div>
    </div>
  );
}
