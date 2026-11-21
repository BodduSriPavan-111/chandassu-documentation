import Link from 'next/link';

const REPO = 'https://github.com/BodduSriPavan-111/chandassu';

const HOME_LINKS = [
  ['Home', '/#home'],
  ['Getting Started', '/#getting-started'],
  ['Features', '/#features'],
  ['Contribute', '/#contribute']
];

const JOURNEY_LINKS = [
  ['Home', '/#home'],
  ['Getting Started', '/#getting-started'],
  ['Features', '/#features'],
  ['Research', '/#research'],
  ['Our Journey', '/our-journey'],
  ['Contribute', '/#contribute']
];

export default function Footer({ variant = 'home' }) {
  const isHome = variant === 'home';
  const quickLinks = isHome ? HOME_LINKS : JOURNEY_LINKS;
  const pypi = (
    <a href="https://pypi.org" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-python"></i>
    </a>
  );

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>తెలుగు ఛందస్సు</h3>
          <p>Preserving and promoting the rich tradition of Global metrical poetry for future generations.</p>
          <div className="footer-social">
            <a href={REPO} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            {isHome ? <li>{pypi}</li> : pypi}
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCewAfPoPG3edn-ZJq4YMpbA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map(([label, href]) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><Link href="/docs">Documentation</Link></li>
            <li><a href={REPO}>API Reference</a></li>
            <li><a href={REPO}>Tutorials</a></li>
            <li><a href={REPO}>Examples</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li><a href="https://discord.com">Discord Server</a></li>
            <li><a href={REPO}>GitHub Discussions</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <center>
          <p>&copy; 2025 Boddu Sri Pavan. Made with ❤️ for Global literature.</p>
        </center>
      </div>
    </footer>
  );
}
