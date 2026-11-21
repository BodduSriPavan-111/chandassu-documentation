'use client';

import '@/lib/prism';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  const html = useMemo(() => Prism.highlight(code, Prism.languages.python, 'python'), [code]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = () => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <pre className="language-python">
      <button className="copy-btn" title="Copy code" onClick={copy}>
        {copied ? '✓' : 'Copy'}
      </button>
      {'\n'}
      <code className="language-python" dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
}
