import { useIdentity } from '../context/IdentityContext';
import { useState } from 'react';
import { ClusterModal } from './ClusterModal';
import { ClusterDetail } from './ClusterDetail';

const ACCENTS = ['var(--pink)', 'var(--lime)', 'var(--lavender)'];

function ringPosition(index, total, radiusVmin) {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  const x = Math.cos(angle) * radiusVmin;
  const y = Math.sin(angle) * radiusVmin;
  return { x, y };
}

export function IdentityMap() {
  const { clusters, setClusters } = useIdentity();
  const [viewId, setViewId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [creating, setCreating] = useState(false);

  const viewing = clusters.find((c) => c.id === viewId) ?? null;
  const editing = clusters.find((c) => c.id === editId) ?? null;

  function persist(updated) {
    setClusters((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  }

  function addCluster(cluster) {
    setClusters((prev) => [...prev, cluster]);
    setCreating(false);
  }

  function removeCluster(id) {
    setClusters((prev) => prev.filter((c) => c.id !== id));
    setEditId(null);
    setViewId(null);
  }

  return (
    <section aria-labelledby="map-heading">
      <h2 id="map-heading" className="section-title">
        Identity map
      </h2>
      <p className="section-lede">
        Your philosophy as a constellation. Tap a cluster for a clean read-through, then edit when you want to refine it. Everything saves locally in your browser.
      </p>

      <div className="identity-map-wrap card">
        <div className="identity-map">
          <button
            type="button"
            className="identity-core"
            onClick={() => {
              setViewId(null);
              setEditId(null);
            }}
            aria-label="Identity core — center of your values"
          >
            <span className="identity-core-label">Identity Core</span>
            <span className="identity-core-sub">{clusters.length} clusters</span>
          </button>

          {clusters.map((c, i) => {
            const { x, y } = ringPosition(i, clusters.length, 38);
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <button
                key={c.id}
                type="button"
                className="cluster-node"
                style={{
                  ['--nx']: `${x}vmin`,
                  ['--ny']: `${y}vmin`,
                  borderColor: accent,
                  boxShadow: `4px 4px 0 ${accent}`,
                }}
                onClick={() => {
                  setEditId(null);
                  setCreating(false);
                  setViewId(c.id);
                }}
              >
                {c.title}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setViewId(null);
            setEditId(null);
            setCreating(true);
          }}
        >
          Add value cluster
        </button>
      </div>

      {viewing && !creating && !editId ? (
        <ClusterDetail
          cluster={viewing}
          onClose={() => setViewId(null)}
          onEdit={() => {
            setEditId(viewing.id);
            setViewId(null);
          }}
        />
      ) : null}

      {(creating || editId) && (creating || editing) ? (
        <ClusterModal
          cluster={creating ? null : editing}
          isNew={creating}
          onClose={() => {
            setCreating(false);
            setEditId(null);
          }}
          onSave={(c) => {
            if (creating) addCluster(c);
            else persist(c);
            setCreating(false);
            setEditId(null);
          }}
          onDelete={creating ? null : removeCluster}
        />
      ) : null}

      <style>{`
        .identity-map-wrap {
          padding: 1rem;
          overflow: hidden;
        }
        .identity-map {
          position: relative;
          width: 100%;
          min-height: clamp(360px, 52vw, 480px);
          margin: 0 auto;
          max-width: 640px;
        }
        .identity-core {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: min(44vw, 220px);
          aspect-ratio: 1;
          border-radius: 999px;
          border: 3px solid var(--border);
          background: var(--surface-2);
          color: var(--text);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          box-shadow: var(--shadow-lime);
          z-index: 2;
          text-align: center;
          padding: 0.75rem;
        }
        .identity-core:hover {
          filter: brightness(1.06);
        }
        .identity-core-label {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(1rem, 2.8vw, 1.2rem);
          line-height: 1.15;
        }
        .identity-core-sub {
          font-size: 0.85rem;
          color: var(--muted);
        }
        .cluster-node {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) translate(var(--nx), var(--ny));
          max-width: min(36vw, 200px);
          border: 3px solid var(--border);
          background: var(--bg);
          color: var(--text);
          font-weight: 700;
          font-size: clamp(0.72rem, 2.1vw, 0.95rem);
          line-height: 1.25;
          padding: 0.55rem 0.6rem;
          text-align: center;
          z-index: 1;
        }
        .cluster-node:hover {
          filter: brightness(1.08);
        }
        @media (max-width: 719px) {
          .identity-map {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.65rem;
            min-height: unset;
            padding-top: 0.25rem;
          }
          .identity-core {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            grid-column: 1 / -1;
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
            aspect-ratio: auto;
            min-height: 5.5rem;
            border-radius: 0;
          }
          .cluster-node {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            max-width: none;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
