import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { site } from '@/lib/content';
import { JsonLd, organizationSchema } from '@/lib/schema';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: '%s | GALEON',
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'consultora de inteligencia artificial',
    'consultoría IA Sevilla',
    'automatización con IA',
    'automatización de procesos para pymes',
    'chatbot para empresas',
    'agentes de IA',
    'asistente de IA para negocios',
    'desarrollo web Sevilla',
    'diseño web a medida',
    'integración CRM',
  ],
  authors: site.founders.map((name) => ({ name })),
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  alternates: { canonical: '/' },
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    title: site.title,
    description: site.description,
    url: '/',
    siteName: site.name,
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GALEON, consultora de inteligencia artificial en Sevilla: automatización con IA, asistentes y webs a medida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'ES-SE',
    'geo.placename': 'Sevilla',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f1b5c',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-ES" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        {/* Sin JavaScript, las secciones animadas se muestran igualmente */}
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <JsonLd data={organizationSchema()} />
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
