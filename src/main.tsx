import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './styles/global.css';
import App from './App';
import GuardrailStatus from './pages/GuardrailStatus';
import PolicyEngine from './pages/PolicyEngine';
import BlockedActions from './pages/BlockedActions';
import IdentityRules from './pages/IdentityRules';
import AuditTrail from './pages/AuditTrail';
import ComplianceMap from './pages/ComplianceMap';
import Reports from './pages/Reports';
import AgentRegistry from './pages/AgentRegistry';
import Configuration from './pages/Configuration';

const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true,           Component: GuardrailStatus },
      { path: 'policy-engine', Component: PolicyEngine },
      { path: 'blocked',       Component: BlockedActions },
      { path: 'identity',      Component: IdentityRules },
      { path: 'audit',         Component: AuditTrail },
      { path: 'compliance',    Component: ComplianceMap },
      { path: 'reports',       Component: Reports },
      { path: 'agents',        Component: AgentRegistry },
      { path: 'config',        Component: Configuration },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
