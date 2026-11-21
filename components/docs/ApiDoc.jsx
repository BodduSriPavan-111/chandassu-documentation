import { asset } from '@/lib/asset';
import CodeBlock from './CodeBlock';
import { Description, OutputBox, h2Style, h3Style } from './parts';

const cell = { padding: '0.5rem', border: '1px solid #ddd' };

function ParamTable({ rows }) {
  return (
    <>
      <h3 style={h3Style}>Parameters</h3>
      <div className="param-details" style={{ marginBottom: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1rem', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ textAlign: 'left', ...cell }}>Parameter</th>
              <th style={{ textAlign: 'left', ...cell }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, text]) => (
              <tr key={name}>
                <td style={cell}>{name}</td>
                <td style={cell}>{text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function ApiDoc({ title, description, params, codeHeading = 'Quick Start', sample, image, showOutputBox = true }) {
  return (
    <>
      <h2 style={h2Style}>{title}</h2>
      <hr />
      <Description>{description}</Description>
      {params && <ParamTable rows={params} />}
      <h3 style={h3Style}>{codeHeading}</h3>
      <CodeBlock code={sample.code} />
      <h3 style={h3Style}>Output</h3>
      {showOutputBox && sample.output != null && <OutputBox text={sample.output} />}
      {image && <img className="output-img" src={asset(image.file)} alt={image.alt} />}
    </>
  );
}
