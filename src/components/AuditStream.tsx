import { useEffect, useRef, useState } from 'react';
import { initialAuditEvents, streamEvents, type AuditEvent } from '../data/mockData';

const MAX = 7;

function now(): string {
  return new Date().toLocaleTimeString('en-GB', { hour12: false });
}

export default function AuditStream({ size = MAX }: { size?: number }) {
  const [events, setEvents] = useState<AuditEvent[]>(initialAuditEvents.slice(0, size));
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const schedule = () => {
      const delay = 3500 + Math.random() * 2500;
      timeoutRef.current = window.setTimeout(() => {
        const pick = streamEvents[Math.floor(Math.random() * streamEvents.length)];
        setEvents(prev => [{ ts: now(), ...pick }, ...prev].slice(0, size));
        schedule();
      }, delay);
    };
    schedule();
    return () => { if (timeoutRef.current) window.clearTimeout(timeoutRef.current); };
  }, [size]);

  return (
    <div style={{ padding: '8px 14px' }}>
      {events.map((e, i) => (
        <div className="log" key={`${e.ts}-${i}`}>
          <span className="log-t">{e.ts}</span>
          <span className={`log-l ${e.level}`}>{e.level}</span>
          <span className="log-m">
            {e.message}
            {e.agent && <> — <b>{e.agent}</b></>}
          </span>
        </div>
      ))}
    </div>
  );
}
