import { NavLink, useLocation } from 'react-router-dom';
import { IconBell } from './Icons';

interface Tab {
  to: string;
  label: string;
  // Extra paths that should light this tab as active.
  alsoMatch?: string[];
}

const tabs: Tab[] = [
  { to: '/',              label: 'Guardrails',    alsoMatch: ['/blocked', '/config'] },
  { to: '/policy-engine', label: 'Policy Engine' },
  { to: '/identity',      label: 'Identity' },
  { to: '/agents',        label: 'Agent Scope' },
  { to: '/audit',         label: 'Audit Log' },
  { to: '/compliance',    label: 'Governance',    alsoMatch: ['/reports'] },
];

export default function Topbar() {
  const { pathname } = useLocation();
  return (
    <div className="tb">
      <div className="tb-nav">
        {tabs.map(t => {
          const matchesExtra = t.alsoMatch?.includes(pathname) ?? false;
          return (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.to === '/'}
              className={({ isActive }) => (isActive || matchesExtra ? 'active' : '')}
            >
              {t.label}
            </NavLink>
          );
        })}
      </div>
      <div className="tb-r">
        <div className="bell"><IconBell /><div className="bell-dot" /></div>
        <div className="avatar">VV</div>
      </div>
    </div>
  );
}
