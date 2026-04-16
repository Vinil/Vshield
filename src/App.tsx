import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

const tabMap: Record<string, string> = {
  '/':               'guardrails',
  '/policy-engine':  'policy-engine',
  '/blocked':        'guardrails',
  '/identity':       'identity',
  '/agents':         'agent-scope',
  '/audit':          'audit-log',
  '/compliance':     'governance',
  '/reports':        'governance',
  '/config':         'guardrails',
};

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="shell">
      <Sidebar />
      <div className="main">
        <Topbar active={tabMap[pathname] ?? 'guardrails'} />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
