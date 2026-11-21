const BADGES = [
  ['https://img.shields.io/pypi/v/chandassu?color=gold', 'PyPI Version'],
  ['https://static.pepy.tech/badge/chandassu', 'Downloads'],
  ['https://zenodo.org/badge/DOI/10.5281/zenodo.14632005.svg', 'DOI']
];

export default function DocsHome() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Welcome to <span className="kitikiplot-shine">Chandassu</span> Documentation!
      </h1>
      <div className="shields">
        {BADGES.map(([src, alt]) => (
          <a key={alt} href={src}>
            <img src={src} alt={alt} />
          </a>
        ))}
        <div className="author-note">
          <h2 style={{ fontSize: '2rem', fontWeight: 'normal' }}>
            <i className="fa-solid fa-pen-nib"></i> Author&apos;s Note
          </h2>
          <p>
            Telugu, a Indian language spoken by over 75 million speakers across the world, possesses a rich tradition of metrical poetry known as chandassu.{' '}
            Unlike free verse, chandassu poetry adheres to strict prosodic patterns that govern syllabic weight, rhythm, and structural organization.{' '}
            We present, <strong>Chandassu</strong>, the first ever open-source Python library implementing Metrical Poetry in Telugu Language.{' '}
            This framework includes AksharamTokenizer for prosody-aware tokenization, LaghuvuGuruvu Generator for classifying light and heavy syllables, and{' '}
            PadyaBhedam Checker for automated pattern recognition, and demonstrates how computational social science can preserve endangered cultural knowledge systems.
            <br />
            <br />
            <i className="fab fa-python"></i>&nbsp;PyPI:{' '}
            <a href="https://pypi.org/project/kitikiplot" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
              https://pypi.org/project/kitikiplot
            </a>{' '}
            <br />
            <i className="fab fa-github"></i>&nbsp;GitHub:{' '}
            <a href="https://github.com/BodduSriPavan-111/kitikiplot" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
              github.com/BodduSriPavan-111/kitikiplot
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
