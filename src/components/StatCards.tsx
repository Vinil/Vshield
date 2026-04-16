import { useEffect, useState } from 'react';
import { stats as staticStats } from '../data/mockData';

export default function StatCards() {
  const [blocked, setBlocked] = useState(23);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() > 0.7) {
        setBlocked(b => b + 1);
        setPulse(true);
        setTimeout(() => setPulse(false), 300);
      }
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="stats">
      {staticStats.map((s, i) => {
        const isBlocked = s.label === 'Blocked (24h)';
        const value = isBlocked ? String(blocked) : s.value;
        const style = isBlocked
          ? { color: pulse ? '#fff' : 'var(--red)' }
          : s.color ? { color: s.color } : undefined;
        return (
          <div key={i} className={`stat ${s.kind}`}>
            <div className="stat-label">{s.label}</div>
            <div className="stat-val" style={style}>
              {value}
              {s.unit && <span className="stat-unit">{s.unit}</span>}
            </div>
            <div className={`stat-delta${s.deltaBad ? ' bad' : ''}`}>{s.delta}</div>
          </div>
        );
      })}
    </div>
  );
}
