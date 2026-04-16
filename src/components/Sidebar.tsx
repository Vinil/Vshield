import type { ComponentType, SVGProps } from 'react';
import { NavLink } from 'react-router-dom';
import {
  IconShield, IconPolicy, IconBlock, IconKey,
  IconClipboard, IconCompliance, IconReport,
  IconCpu, IconGear,
} from './Icons';

interface NavItem {
  to: string;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  badge?: { text: string; tone?: 'g' };
}

const enforcement: NavItem[] = [
  { to: '/',                  label: 'Guardrail Status', Icon: IconShield },
  { to: '/policy-engine',     label: 'Policy Engine',    Icon: IconPolicy },
  { to: '/blocked',           label: 'Blocked Actions',  Icon: IconBlock, badge: { text: '23' } },
  { to: '/identity',          label: 'Identity Rules',   Icon: IconKey },
];

const compliance: NavItem[] = [
  { to: '/audit',      label: 'Audit Trail',    Icon: IconClipboard },
  { to: '/compliance', label: 'Compliance Map', Icon: IconCompliance },
  { to: '/reports',    label: 'Reports',        Icon: IconReport },
];

const agents: NavItem[] = [
  { to: '/agents', label: 'Agent Registry', Icon: IconCpu, badge: { text: '18', tone: 'g' } },
  { to: '/config', label: 'Configuration',  Icon: IconGear },
];

function Section({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="sb-section">
      <div className="sb-label">{label}</div>
      {items.map(({ to, label, Icon, badge }) => (
        <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `sb-item${isActive ? ' active' : ''}`}>
          <Icon />
          <span>{label}</span>
          {badge && <span className={`sb-badge${badge.tone ? ' ' + badge.tone : ''}`}>{badge.text}</span>}
        </NavLink>
      ))}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="sb">
      <div className="sb-logo">
        <div className="sb-logo-icon">
          <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        </div>
        <div className="sb-logo-text">VShield<span>.ai</span></div>
      </div>
      <Section label="Enforcement" items={enforcement} />
      <Section label="Compliance" items={compliance} />
      <Section label="Agents" items={agents} />
    </aside>
  );
}
