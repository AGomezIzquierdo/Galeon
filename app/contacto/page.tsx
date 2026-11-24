import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import { JsonLd, contactSchema } from '@/lib/schema';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contacto: pide tu diagnóstico de IA gratuito',
  description:
    'Contacta con GALEON, consultora de inteligencia artificial en Sevilla. Cuéntanos qué quieres automatizar o qué web necesitas y te respondemos con una propuesta clara en menos de 24h.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Contacto | GALEON',
    description: 'Cuéntanos qué quieres automatizar o qué web necesitas. Propuesta clara en menos de 24h.',
    url: '/contacto',
    siteName: site.name,
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GALEON, consultora de inteligencia artificial en Sevilla' }],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema()} />
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>
            Hablemos de tu <span className="gradient-text">proyecto</span>
          </h1>
          <p>Cuéntanos qué te gustaría automatizar o qué web necesitas: te respondemos con una propuesta concreta.</p>
        </div>
      </section>
      <ContactSection standalone />
    </>
  );
}
