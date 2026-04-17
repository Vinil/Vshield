import { policies } from '../data/mockData';

export default function PoliciesTable({ limit }: { limit?: number }) {
  const rows = typeof limit === 'number' ? policies.slice(0, limit) : policies;
  const toneForBlocks = (n: number) =>
    n >= 6 ? 'var(--red)' : n >= 3 ? 'var(--orange)' : 'var(--w40)';
  return (
    <table className="tbl">
      <thead><tr><th>Policy</th><th>Status</th><th>Blocks</th></tr></thead>
      <tbody>
        {rows.map(p => (
          <tr key={p.id}>
            <td style={{ color: 'var(--w80)' }}>{p.name}</td>
            <td><span className="tag tag-on">Active</span></td>
            <td style={{ color: toneForBlocks(p.blocks24h), fontFamily: 'var(--mono)', fontSize: 11 }}>{p.blocks24h}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
