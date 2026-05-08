import { useIdentity } from '../context/IdentityContext';
import { ListEditor } from './ListEditor';

export function WorkflowBuilder() {
  const { workflow, setWorkflow } = useIdentity();

  return (
    <section aria-labelledby="wf-heading">
      <h2 id="wf-heading" className="section-title">
        Workflow builder
      </h2>
      <p className="section-lede">
        A simple pipeline from raw material to shipped artifacts, plus a feedback loop so the system learns with you.
      </p>

      <div className="workflow-visual card accent-lime" style={{ marginBottom: '1.25rem' }}>
        <div className="wf-flow">
          <div className="wf-col">
            <h3 className="wf-col-title">Inputs</h3>
            <p className="wf-col-sub">What enters the system</p>
          </div>
          <div className="wf-arrow" aria-hidden="true">
            →
          </div>
          <div className="wf-col">
            <h3 className="wf-col-title">Process</h3>
            <p className="wf-col-sub">How you shape it</p>
          </div>
          <div className="wf-arrow" aria-hidden="true">
            →
          </div>
          <div className="wf-col">
            <h3 className="wf-col-title">Outputs</h3>
            <p className="wf-col-sub">What ships</p>
          </div>
        </div>
        <div className="wf-loop">
          <span className="tag" style={{ borderColor: 'var(--lavender)' }}>
            Feedback loop
          </span>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--muted)', maxWidth: '52ch' }}>
            Outputs feed archives, new problems, and UI notes—so the next pass through the pipeline starts richer than the last.
          </p>
        </div>
        <style>{`
          .workflow-visual {
            padding: 1rem 1.1rem;
          }
          .wf-flow {
            display: grid;
            gap: 0.75rem;
            align-items: stretch;
          }
          @media (min-width: 900px) {
            .wf-flow {
              grid-template-columns: 1fr auto 1fr auto 1fr;
              align-items: center;
            }
          }
          .wf-col {
            border: 3px solid var(--border);
            background: var(--bg);
            padding: 0.75rem 0.85rem;
          }
          .wf-col-title {
            margin: 0;
            font-family: var(--font-display);
            font-size: 1.05rem;
          }
          .wf-col-sub {
            margin: 0.35rem 0 0;
            color: var(--muted);
            font-size: 0.9rem;
          }
          .wf-arrow {
            text-align: center;
            font-weight: 800;
            font-size: 1.25rem;
            color: var(--pink);
          }
          .wf-loop {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 3px dashed var(--muted);
          }
        `}</style>
      </div>

      <div className="grid-2">
        <div className="card">
          <ListEditor
            label="Inputs"
            items={workflow.inputs}
            onChange={(inputs) => setWorkflow({ ...workflow, inputs })}
          />
        </div>
        <div className="card">
          <ListEditor
            label="Process"
            items={workflow.process}
            onChange={(process) => setWorkflow({ ...workflow, process })}
          />
        </div>
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <ListEditor
            label="Outputs"
            items={workflow.outputs}
            onChange={(outputs) => setWorkflow({ ...workflow, outputs })}
          />
        </div>
      </div>
    </section>
  );
}
