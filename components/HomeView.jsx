'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { asset } from '@/lib/asset';

const PAPER_1 = 'Computational Social Linguistics for Telugu Cultural Preservation Novel Algorithms for Chandassu Metrical Pattern Recognition.jpg';
const PAPER_2 = 'NFA_AksharamToken_and_PadyamPlot.jpg';


const CONTRIBUTORS = [
  { url: 'https://www.linkedin.com/in/boddusripavan/', img: 'Boddu_Sri_Pavan.jpeg', alt: 'Person 1', name: 'Boddu Sri Pavan', role: 'Maintainer& Key Contributor' },
  { url: 'https://www.linkedin.com/in/chandrasheker-t-44807015/', img: 'T_Chadrasheker.jpg', alt: 'Person 2', name: 'T Chandrasheker', role: 'Our Professor' },
  { url: 'https://www.linkedin.com/in/boddu-swathi-sree-2a2a58332/', img: 'Boddu_Swathi_Sree.jpeg', alt: 'Person 2', name: 'Boddu Swathi Sree', role: 'Contributor' },
  { url: 'https://www.linkedin.com/in/appanamohankumar/', img: 'Appana_Mohan.png', alt: 'Person 2', name: 'Appana Mohan', role: 'Contributor' }
];

const col = (flex, background) => ({
  flex: `0 0 ${flex}`,
  background,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem'
});

const yellowTitle = (size) => ({ fontSize: size, color: 'brown', fontWeight: 'normal', margin: 0 });
const glyph = { fontSize: '4rem', margin: '1rem 0', color: '#000' };
const tokenLine = { fontSize: '3rem', margin: '1rem 0', color: '#333' };
const green = { color: '#01a33c' };

function Br({ n = 1 }) {
  return Array.from({ length: n }, (_, i) => <br key={i} />);
}

function DocsButton() {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href="/docs"
      target="_blank"
      rel="noopener"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: '14px 36px',
        color: '#fff',
        fontWeight: 'bold',
        textDecoration: 'none',
        borderRadius: '8px',
        background: 'linear-gradient(45deg, #01a33c, #bd9700)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hover ? 'scale(1.08) rotate(-1deg)' : 'scale(1) rotate(0)',
        boxShadow: hover ? '0 8px 25px rgba(1, 163, 60, 0.5), 0 0 25px rgba(189, 151, 0, 0.6)' : 'none'
      }}
    >
      Go to Docs <i className="fa fa-arrow-right"></i>
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: hover ? '200%' : '-150%',
          width: '50%',
          height: '100%',
          background: 'rgba(255,255,255,0.6)',
          transform: 'skewX(-25deg)',
          transition: hover ? 'left 0.7s ease' : 'none'
        }}
      ></span>
    </Link>
  );
}

export default function HomeView() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = 'home';
      document.querySelectorAll('.page-home .section').forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-home">
      <Navbar solid={scrolled} activeId={active} />

      <div className="landing" id="home">
        <img
          src={asset('Global_Banner.png')}
          alt="Telugu Chandassu Banner"
          style={{ width: '100%', margin: '0%', padding: '0%' }}
          className="landing-img"
        />
      </div>
      <Br n={5} />

      <div
        className="section"
        id="getting-started"
        style={{ fontFamily: 'Arial, sans-serif', padding: '50px 20px', boxSizing: 'border-box', textAlign: 'center' }}
      >
        <div style={{ marginBottom: '20px' }}>
          <span className="pip-text" style={{ color: 'brown', fontSize: '4rem' }}>! pip install</span>{' '}
          <span
            className="pip-text"
            style={{
              backgroundColor: '#ffde59',
              color: '#ed0000',
              fontSize: '4rem',
              padding: '6px 16px',
              transform: 'skew(-15deg)',
              display: 'inline-block'
            }}
          >
            <span style={{ display: 'inline-block', transform: 'skew(15deg)' }}>chandassu</span>
          </span>
        </div>

        <h2 className="hl-lg" style={{ fontSize: '3rem', fontWeight: 'normal', marginBottom: '40px', color: '#333' }}>
          The first ever Python library for
        </h2>
        <h2 className="hl-lg" style={{ fontSize: '3rem', fontWeight: 'normal', marginBottom: '40px', color: '#333' }}>
          Metrical Poetry in Global Languages
        </h2>
        <h2 className="hl-sm" style={{ fontSize: '2rem', fontWeight: 'normal', marginBottom: '40px', color: '#333' }}>
          Current Language(s): Telugu, (Your contribution is warmly welcomed !)
        </h2>

        <DocsButton />
        <br />
      </div>

      <section style={{ width: '100%', marginTop: '-5%', fontFamily: "'Segoe UI', sans-serif" }}>
        <div className="section feat-row" id="features" style={{ display: 'flex', flexWrap: 'wrap', minHeight: '80vh' }}>
          <div className="feat-col" style={col('40%', '#ffde59')}>
            <h1 style={yellowTitle('4rem')}>Aksharam</h1>
            <h1 style={yellowTitle('4rem')}>Tokenizer</h1>
            <p style={{ fontSize: '1.5rem', color: '#000', marginTop: '1rem', textAlign: 'center' }}>
              Splits raw text into prosodic tokens
            </p>
          </div>

          <div className="feat-col" style={col('60%', '#fff')}>
            <div className="tok-line" style={tokenLine}>
              <span style={{ color: '#000' }}>సంస్కృతి</span> → <span style={green}>సం</span>+<span style={green}>స్కృ</span>+<span style={green}>తి</span>
            </div>
            <div className="tok-line" style={tokenLine}>
              <span style={{ color: '#000' }}>మ్రొక్కెదన్</span> → <span style={green}>మ్రొ</span>+<span style={green}>క్కె</span>+<span style={green}>దన్</span>
            </div>
          </div>
        </div>

        <div className="feat-row" style={{ display: 'flex', flexWrap: 'wrap', minHeight: '80vh', width: '100%', boxSizing: 'border-box' }}>
          <div
            className="feat-col"
            style={{ ...col('60%', '#fff'), textAlign: 'center', boxSizing: 'border-box' }}
          >
            <div className="lg-wrap" style={{ marginBottom: '2rem', letterSpacing: '1rem', whiteSpace: 'nowrap' }}>
              <table>
                <tbody>
                  <tr>
                    {['|', '|', '|', 'U', '|'].map((c, i) => (
                      <td key={i}><span className="lg-glyph" style={glyph}>{c}</span></td>
                    ))}
                  </tr>
                  <tr>
                    {['తె', 'లు', 'గు', 'భా', 'ష'].map((c, i) => (
                      <td key={i}><span className="lg-glyph" style={glyph}>{c}</span></td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '1.5rem', color: '#666', marginTop: '1rem' }}>
              (Each Aksharam Token is aligned with the Laghuvu/ Guruvu)
            </p>
          </div>

          <div className="feat-col" style={{ ...col('40%', '#ffde59'), boxSizing: 'border-box' }}>
            <h1 style={yellowTitle('3.5rem')}>LaghuvuGuruvu</h1>
            <h1 style={yellowTitle('3.5rem')}>Generator</h1>
            <p style={{ fontSize: '1.4rem', color: '#000', marginTop: '1rem', textAlign: 'center' }}>
              Classifies each prosodic token into Laghuvu/ Guruvu
            </p>
          </div>
        </div>

        <div className="feat-row" style={{ display: 'flex', flexWrap: 'wrap', minHeight: '80vh' }}>
          <div className="feat-col" style={col('40%', '#ffde59')}>
            <h1 style={yellowTitle('4rem')}>PadyaBhedam</h1>
            <h1 style={yellowTitle('4rem')}>Checker</h1>
            <p style={{ fontSize: '1.5rem', color: '#000', marginTop: '1rem', textAlign: 'center' }}>
              Analyze provided text with padyam of interest
            </p>
          </div>

          <div className="feat-col" style={col('60%', '#fff')}>
            <div className="vut-title" style={{ fontSize: '2rem', marginTop: '2rem', color: '#000000', fontWeight: 'normal' }}>
              Vutpalamaala (ఉత్పలమాల)
            </div>
            <br />

            <div
              className="poem"
              style={{ fontSize: '1.7rem', lineHeight: '2.2rem', color: '#000', textAlign: 'left', marginBottom: '2rem', maxWidth: '90%' }}
            >
              తొండము నేక దంతమును తోరపు బొజ్జయు వామ హస్తమున్<br />
              మెండుగ మ్రోయు గజ్జెలును మెల్లని చూపులు మందహాసమున్<br />
              కొండొక గుజ్జు రూపమున కోరిన విద్యలకెల్ల నొజ్జవై<br />
              యుండెడి పార్వతీ తనయ యోయి గణాధిప నీకు మ్రొక్కెదన్
            </div>

            <div className="score-label" style={{ fontSize: '2.5rem', marginTop: '2rem', color: '#01a33c', fontWeight: 'normal' }}>
              Chandassu Score
            </div>
            <div className="score-val" style={{ fontSize: '3.5rem', marginTop: '2rem', color: '#01a33c', fontWeight: 'normal' }}>
              100%
            </div>
          </div>
        </div>
      </section>
      <Br n={2} />

      <div className="section research" id="research">
        <h1>Research</h1>
        <div className="research-grid">
          <a className="research-card" href="https://arxiv.org/abs/2510.01233" target="_blank" rel="noopener" aria-label="Python library for Telugu Chandassu">
            <img src={asset(PAPER_1)} alt="Research paper 1" />
          </a>
          <a className="research-card" href="https://arxiv.org/abs/2510.01233" target="_blank" rel="noopener" aria-label="NFA and Padyam Plot">
            <img src={asset(PAPER_2)} alt="Research paper 2" />
          </a>
        </div>
      </div>

      <div className="section" id="contribute">
        <div className="contributors-bg">
          <div className="spiral-strip"></div>
          <div className="spiral-strip"></div>
          <div className="spiral-strip"></div>
          <div className="spiral-strip"></div>

          <div className="math-shape"><div className="hexagon"></div></div>
          <div className="math-shape"><div className="pentagon"></div></div>
          <div className="math-shape"><div className="triangle"></div></div>
          <div className="math-shape"><div className="diamond"></div></div>
          <div className="math-shape"><div className="octagon"></div></div>
          <div className="math-shape"><div className="triangle"></div></div>

          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <Br n={3} />
        <div className="contributors-content">
          <h1 className="contrib-title" style={{ color: '#01a33c', fontSize: '6rem', fontWeight: 300, marginBottom: '20px' }}>
            Contributors
          </h1>
          <br />
          <h3
            className="contrib-sub"
            style={{ color: '#333', fontSize: '2rem', fontWeight: 300, marginBottom: '50px', textAlign: 'center', lineHeight: 1.4 }}
          >
            We warmly welcome contributions from the community! <br />
            Your support helps preserve and promote Global metrical poetry. <br />
            (Click on image to view LinkedIn profile)
          </h3>

          <div className="contributors-grid">
            {CONTRIBUTORS.map((c) => (
              <div className="contributor-card" key={c.name}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <img
                    src={asset(c.img)}
                    alt={c.alt}
                    style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #01a33c' }}
                  />
                </a>
                <h3 style={{ marginTop: '15px', color: '#2c3e50' }}>{c.name}</h3>
                <p style={{ color: '#555' }}>{c.role}</p>
              </div>
                        ))}

            <div className="contributor-card">
              <a
                href="https://github.com/BodduSriPavan-111/chandassu"
                target="_blank"
                rel="noopener noreferrer"
                className="join-ring"
                aria-label="Contribute on GitHub"
              >
                <span className="join-inner">
                  <i className="fab fa-github"></i>
                  <b>You?</b>
                </span>
              </a>
              <h3 style={{ marginTop: '15px', color: '#2c3e50' }}>Join Us</h3>
              <p style={{ color: '#555' }}>Fork. Code. Contribute.</p>
            </div>
          </div>
        </div>
      </div>

      <Br n={4} />
      <Footer variant="home" />
    </div>
  );
}
