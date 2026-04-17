export default function GovernanceHierarchy() {
  return (
    <svg viewBox="0 0 600 280" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="shieldG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff7a45" />
          <stop offset="100%" stopColor="#ff4d6a" />
        </linearGradient>
      </defs>

      <g stroke="rgba(240,242,248,.06)" strokeWidth={1}>
        <line x1="300" y1="50" x2="100" y2="130" />
        <line x1="300" y1="50" x2="250" y2="130" />
        <line x1="300" y1="50" x2="400" y2="130" />
        <line x1="300" y1="50" x2="530" y2="130" />
        <line x1="100" y1="130" x2="60"  y2="230" stroke="rgba(0,230,138,.1)" />
        <line x1="100" y1="130" x2="140" y2="230" stroke="rgba(0,230,138,.1)" />
        <line x1="250" y1="130" x2="220" y2="230" stroke="rgba(0,230,138,.1)" />
        <line x1="250" y1="130" x2="300" y2="230" stroke="rgba(0,230,138,.1)" />
        <line x1="400" y1="130" x2="380" y2="230" stroke="rgba(0,230,138,.1)" />
        <line x1="400" y1="130" x2="450" y2="230" stroke="rgba(255,214,68,.1)" />
        <line x1="530" y1="130" x2="530" y2="230" stroke="rgba(255,77,106,.1)" />
      </g>

      <rect x="240" y="20" width="120" height="48" rx="10" fill="#11141e" stroke="url(#shieldG)" strokeWidth={1.5} filter="url(#glow)" />
      <text x="300" y="40" textAnchor="middle" fill="#ff7a45" fontFamily="IBM Plex Mono" fontSize="9" fontWeight="600" letterSpacing="1">VSHIELD</text>
      <text x="300" y="54" textAnchor="middle" fill="rgba(240,242,248,.4)" fontFamily="IBM Plex Mono" fontSize="7">GOVERNANCE CORE</text>

      <text x="10" y="98" fill="rgba(240,242,248,.15)" fontFamily="IBM Plex Mono" fontSize="7" letterSpacing="1.5">POLICY LAYER</text>

      <rect x="40"  y="110" width="120" height="40" rx="6" fill="#11141e" stroke="rgba(255,77,106,.2)" />
      <text x="100" y="127" textAnchor="middle" fill="#ff4d6a" fontFamily="IBM Plex Mono" fontSize="8" fontWeight="500">DATA PROTECTION</text>
      <text x="100" y="140" textAnchor="middle" fill="rgba(240,242,248,.3)" fontFamily="IBM Plex Mono" fontSize="7">PII / Exfil Guard</text>

      <rect x="190" y="110" width="120" height="40" rx="6" fill="#11141e" stroke="rgba(110,86,255,.2)" />
      <text x="250" y="127" textAnchor="middle" fill="#6e56ff" fontFamily="IBM Plex Mono" fontSize="8" fontWeight="500">IDENTITY</text>
      <text x="250" y="140" textAnchor="middle" fill="rgba(240,242,248,.3)" fontFamily="IBM Plex Mono" fontSize="7">Priv Escalation Block</text>

      <rect x="340" y="110" width="120" height="40" rx="6" fill="#11141e" stroke="rgba(0,212,255,.2)" />
      <text x="400" y="127" textAnchor="middle" fill="#00d4ff" fontFamily="IBM Plex Mono" fontSize="8" fontWeight="500">TOOL ACCESS</text>
      <text x="400" y="140" textAnchor="middle" fill="rgba(240,242,248,.3)" fontFamily="IBM Plex Mono" fontSize="7">Scope Enforcement</text>

      <rect x="480" y="110" width="100" height="40" rx="6" fill="#11141e" stroke="rgba(255,214,68,.2)" />
      <text x="530" y="127" textAnchor="middle" fill="#ffd644" fontFamily="IBM Plex Mono" fontSize="8" fontWeight="500">RATE LIMITS</text>
      <text x="530" y="140" textAnchor="middle" fill="rgba(240,242,248,.3)" fontFamily="IBM Plex Mono" fontSize="7">Execution Caps</text>

      <text x="10" y="198" fill="rgba(240,242,248,.15)" fontFamily="IBM Plex Mono" fontSize="7" letterSpacing="1.5">AGENT LAYER</text>

      {[
        { x: 25,  name: 'SOC-01',  tier: 'HIGH', tierColor: '0,230,138' },
        { x: 105, name: 'IAM-Rot', tier: 'HIGH', tierColor: '0,230,138' },
        { x: 185, name: 'DLP-Mon', tier: 'HIGH', tierColor: '0,230,138' },
        { x: 265, name: 'Vuln-Pri',tier: 'HIGH', tierColor: '0,230,138' },
        { x: 345, name: 'CldScan', tier: 'HIGH', tierColor: '0,230,138' },
        { x: 425, name: 'ML-Pipe', tier: 'MED',  tierColor: '255,214,68' },
        { x: 505, name: 'Test-X',  tier: 'LOW',  tierColor: '255,77,106' },
      ].map(a => (
        <g key={a.name}>
          <rect x={a.x} y={210} width={70} height={44} rx={6} fill="#11141e" stroke={`rgba(${a.tierColor},.25)`} />
          <circle cx={a.x + 15} cy={224} r={3} fill={`rgb(${a.tierColor})`} />
          <text x={a.x + 23} y={227} fill="rgba(240,242,248,.8)" fontFamily="DM Sans" fontSize="8" fontWeight="600">{a.name}</text>
          <text x={a.x + 35} y={243} textAnchor="middle" fill={`rgba(${a.tierColor},.6)`} fontFamily="IBM Plex Mono" fontSize="7">{a.tier}</text>
        </g>
      ))}

      <rect x="548" y="208" width="30" height="14" rx="3" fill="rgba(255,77,106,.1)" stroke="rgba(255,77,106,.3)" strokeWidth={0.5} />
      <text x="563" y="218" textAnchor="middle" fill="#ff4d6a" fontFamily="IBM Plex Mono" fontSize="6" fontWeight="600">5 BLOCKED</text>
    </svg>
  );
}
