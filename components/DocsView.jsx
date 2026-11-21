'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/asset';
import samples from '@/data/docsSamples';
import ApiDoc from '@/components/docs/ApiDoc';
import DocsHome from '@/components/docs/DocsHome';
import GettingStarted from '@/components/docs/GettingStarted';

const TYPES = "'kandamu', 'aataveladi', 'teytageethi', 'seesamu', 'vutpalamaala', 'champakamaala'";

const PAGES = {
  home: { label: 'Home', render: () => <DocsHome /> },
  'getting-started': { label: 'Getting Started', render: () => <GettingStarted sample={samples['getting-started']} /> },
  AksharamTokenizer: {
    label: 'Aksharam Tokenizer',
    render: () => (
      <ApiDoc
        title="Aksharam Tokenizer"
        description="This method tokenizes input Telugu string into 'Aksharam Tokens', human-perceivable prosodic character units."
        sample={samples.AksharamTokenizer}
      />
    )
  },
  LaghuvuGuruvuGenerator: {
    label: 'LaghuvuGuruvu Generator',
    render: () => (
      <ApiDoc
        title="LaghuvuGuruvu Generator"
        description="This method classifies given Telugu text into Laghuvu-Guruvu sequence."
        sample={samples.LaghuvuGuruvuGenerator}
      />
    )
  },
  PadyaBhedamChecker: {
    label: 'PadyaBhedam Checker',
    render: () => (
      <ApiDoc
        title="PadyaBhedam Checker"
        description="This method evaluates given Laghuvu-Guruvu data with given padyam type with confidence scores."
        params={[
          ['lg_data (list)', 'Laghuvu-Guruvu data generated using laghuvu_guruvu.LaghuvuGuruvu.generate()'],
          ['type (str)', `Type of padyam. Currently supported types: ${TYPES}, 'mattebhamu', 'saardulamu'`],
          ['return_micro_score (bool)', "Set to 'True' to return lakshanamwise scores (micro scores). Default is set to 'True'."],
          ['verbose (bool)', "Prints the result of each step for better traceability. Default is set to 'False'."]
        ]}
        codeHeading="Code"
        sample={samples.PadyaBhedamChecker}
      />
    )
  },
  PoemRecognition: {
    label: 'Poem Recognition',
    render: () => (
      <ApiDoc
        title="Poem Recognition"
        description={`This method takes an input Telugu poem, iterates through the padyam types and returns the most probable. Currently supported types: ${TYPES}, 'saardulamu', 'mattebhamu'.`}
        sample={samples.PoemRecognition}
        image={{ file: 'Poem_Recognition.png', alt: 'Poem Recognition output' }}
      />
    )
  },
  DefineYourOwnPoem: {
    label: 'Define Your Own Poem',
    render: () => (
      <ApiDoc
        title="Define Your Own Poem"
        description="Define your own customized poem and compute scores."
        sample={samples.DefineYourOwnPoem}
      />
    )
  },
  PadyamPlot: {
    label: 'Padyam Plot',
    render: () => (
      <ApiDoc
        title="Padyam Plot"
        description="Visualization for metrical poetry in Telugu language."
        codeHeading="Code"
        sample={samples.PadyamPlot}
        showOutputBox={false}
        image={{ file: 'PadyamPlot_Vutpalamaala.png', alt: 'Padyam Plot of Vutpalamaala' }}
      />
    )
  }
};

const REPO = 'https://github.com/BodduSriPavan-111/chandassu';

export default function DocsView() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    document.title = 'Chandassu Documentation';
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = asset('logo.png');
  }, []);

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [active]);

  const select = (key) => {
    setActive(key);
    setOpen(false);
  };

  return (
    <div className="page-docs">
      <div className="container">
        <aside className={`sidebar${open ? ' open' : ''}`} role="navigation" aria-label="Main Navigation">
          <div className="sidebar-top">
            <Link href="/">
              <img
                src={asset('Global_Banner_Crop.png')}
                alt="Chandassu Logo"
                style={{ width: '100%', maxWidth: '250px', height: '100%', marginTop: '-3%' }}
              />
            </Link>
            <button className="docs-menu-btn" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
              <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
          <nav>
            {Object.entries(PAGES).map(([key, p]) => (
              <div
                key={key}
                className={`nav-section direct-link${active === key ? ' active' : ''}`}
                onClick={() => select(key)}
              >
                <span>{p.label}</span>
              </div>
            ))}
          </nav>
          <div className="sidebar-footer">
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="nav-item">
              <i className="fab fa-python"></i> GitHub
            </a>
            <a href={`${REPO}/issues`} target="_blank" rel="noopener noreferrer" className="nav-item">
              <i className="fas fa-exclamation-circle"></i> Issues
            </a>
            <a href={`${REPO}/pulls`} target="_blank" rel="noopener noreferrer" className="nav-item">
              <i className="fas fa-code-branch"></i> Pull Requests
            </a>
            <div className="copyright">© 2025 Designed by <b>Boddu Sri Pavan</b></div>
          </div>
        </aside>

        <main className="content" role="main" tabIndex={0} ref={contentRef}>
          {PAGES[active].render()}
        </main>
      </div>
    </div>
  );
}
