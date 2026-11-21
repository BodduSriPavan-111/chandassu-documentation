export const h2Style = { fontSize: '2rem', fontWeight: 'normal' };
export const h3Style = { fontSize: '1.5rem', fontWeight: 'normal' };

const outputStyle = {
  backgroundColor: '#f0f4f8',
  border: '1px solid #d1d9e6',
  borderRadius: '8px',
  padding: '1rem',
  fontFamily: 'monospace',
  fontSize: '1rem',
  color: '#2d3748',
  whiteSpace: 'pre-wrap'
};

export function OutputBox({ text }) {
  return <div style={outputStyle}>{text}</div>;
}

export function Description({ children }) {
  return (
    <div className="param-details" style={{ marginBottom: '1rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1rem' }}>
        <tbody>
          <tr>
            <td style={{ verticalAlign: 'top', textAlign: 'left' }}>{children}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
