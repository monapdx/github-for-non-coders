import { useMemo, useState } from 'react';
import { useIdentity } from '../context/IdentityContext';

export function PrinciplesLibrary() {
  const { clusters } = useIdentity();
  const [q, setQ] = useState('');
  const [clusterFilter, setClusterFilter] = useState('all');

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return clusters.flatMap((c) =>
      c.principles
        .map((text, i) => ({ key: `${c.id}-${i}`, clusterId: c.id, clusterTitle: c.title, text: text.trim() }))
        .filter((r) => r.text.length > 0)
    );
  }, [clusters]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return rows.filter((r) => {
      if (clusterFilter !== 'all' && r.clusterId !== clusterFilter) return false;
      if (!needle) return true;
      return r.text.toLowerCase().includes(needle) || r.clusterTitle.toLowerCase().includes(needle);
    });
  }, [rows, q, clusterFilter]);

  return (
    <section aria-labelledby="lib-heading">
      <h2 id="lib-heading" className="section-title">
        Principles library
      </h2>
      <p className="section-lede">
        Every principle in one place. Search across clusters or narrow the list when you are planning or writing.
      </p>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <div className="grid-2">
          <div className="field" style={{ marginBottom: 0 }}>
            <label htmlFor="lib-search">Search</label>
            <input
              id="lib-search"
              className="input"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Keyword in principle or cluster…"
              autoComplete="off"
            />
          </div>
          <div className="field" style={{ marginBottom: 0 }}>
            <label htmlFor="lib-filter">Cluster</label>
            <select
              id="lib-filter"
              className="input"
              value={clusterFilter}
              onChange={(e) => setClusterFilter(e.target.value)}
            >
              <option value="all">All clusters</option>
              {clusters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {filtered.length === 0 ? (
          <p className="card" style={{ color: 'var(--muted)', margin: 0 }}>
            No principles match that filter.
          </p>
        ) : (
          filtered.map((r) => (
            <article key={r.key} className="card accent-lav">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="tag">{r.clusterTitle}</span>
              </div>
              <p style={{ margin: '0.65rem 0 0', fontSize: '1.05rem' }}>{r.text}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
