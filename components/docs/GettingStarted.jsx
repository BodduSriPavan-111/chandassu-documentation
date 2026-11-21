import CodeBlock from './CodeBlock';
import { OutputBox, h2Style, h3Style } from './parts';

export default function GettingStarted({ sample }) {
  return (
    <>
      <h2 style={h2Style}>Installation</h2>
      <hr />
      <div className="param-details" style={{ marginBottom: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1rem' }}>
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'top', width: '150px', paddingRight: '0.5rem', fontWeight: 'bold' }}>Command:</td>
              <td style={{ verticalAlign: 'top', textAlign: 'left' }}>
                <code>pip install chandassu</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 style={h3Style}>Quick Start</h3>
      <CodeBlock code={sample.code} />
      <h3 style={h3Style}>Output</h3>
      <OutputBox text={sample.output} />
    </>
  );
}
