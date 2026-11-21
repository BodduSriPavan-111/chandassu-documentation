import '@fortawesome/fontawesome-free/css/all.min.css';
import 'prismjs/themes/prism.css';
import '@/styles/global.css';
import '@/styles/shared.css';
import '@/styles/home.css';
import '@/styles/journey.css';
import '@/styles/docs.css';

export const metadata = {
  title: 'Chandassu-The Metrical Poetry',
  icons: { icon: '/assets/Global_Logo.png' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
