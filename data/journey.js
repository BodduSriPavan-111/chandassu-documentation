export const PEOPLE = {
  sp: { n: 'Boddu Sri Pavan', r: 'Creator & Maintainer', i: 'BP', img: 'Boddu_Sri_Pavan.jpeg', url: 'https://www.linkedin.com/in/boddusripavan/' },
  ss: { n: 'Boddu Swathi Sree', r: 'Contributor', i: 'BS', img: 'Boddu_Swathi_Sree.jpeg', url: 'https://www.linkedin.com/in/boddu-swathi-sree-2a2a58332/' },
  am: { n: 'Appana Mohan', r: 'Contributed to automatic padyam finder.', i: 'AM', img: 'Appana_Mohan.png', url: 'https://www.linkedin.com/in/appanamohankumar/' },
  tc: { n: 'T. Chandrasekhar', r: 'Our Professor, provided His valuable guidance during this work', i: 'TC', img: 'T_Chadrasheker.jpg', url: 'https://www.linkedin.com/in/chandrasheker-t-44807015/' }
};

export const PAL = [
  { c: '#ed0000', t: '#fff' },
  { c: '#01a33c', t: '#fff' },
  { c: '#6b7280', t: '#fff' },
  { c: '#ffde59', t: '#1a1a1a', b: '#b08a00' }
];

export const JOURNEY = [
  {
    d: '17 November 2026',
    t: 'Telugu letters, formalised as automata (NFA)',
    s: 'Our work is published on arXiv: Non-Deterministic Finite Automata for Telugu Letters and Visualizations for Metrical Poetry.',
    w: ['tc'],
    a: ['https://arxiv.org/search/?query=Non-Deterministic+Finite+Automata+for+Telugu+Letters&searchtype=title', 'Read on arXiv']
  },
  { d: '10 September 2026', t: 'Mattakokila joins the family', s: 'A new padyam type, now included.' },
  {
    d: '1 August 2026',
    t: 'Padyam Plot, proposed',
    s: 'A visual representation for metrical poetry in Telugu language.',
    w: ['am'],
    a: ['https://github.com/BodduSriPavan-111/chandassu/blob/main/examples/PadyamPlot.ipynb', 'Read on GitHub']
  },
  {
    d: '5 October 2025',
    t: 'Chandassu goes open source',
    s: 'The Python library and its source code are now public.',
    w: ['sp', 'ss'],
    a: ['https://github.com/BodduSriPavan-111/chandassu', 'View on GitHub']
  },
  {
    d: '23 September 2025',
    t: 'Our paper lands on arXiv',
    s: 'Computational Social Linguistics for Telugu Cultural Preservation: Novel Algorithms for Chandassu Metrical Pattern Recognition',
    k: [['4,651', 'annotated padyams, open-sourced'], ['100%', 'Prosody-aware Tokenizer'], ['91.73%', 'accuracy on the Chandassu Score']],
    a: ['https://arxiv.org/abs/2510.01233', 'Read on arXiv']
  }
];
