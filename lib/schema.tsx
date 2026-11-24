// Datos estructurados (schema.org en JSON-LD). Google los usa para entender quién es GALEON
// y los asistentes de IA (ChatGPT, Perplexity, Gemini, Claude...) para citarla con datos
// correctos. Todo sale de lib/content.ts: si cambias un texto allí, se actualiza aquí.

import { site, services, priceList, faqs, processSteps } from './content';

const ORG_ID = `${site.url}/#organizacion`;
const WEBSITE_ID = `${site.url}/#web`;

function price(p: (typeof priceList)[number]) {
  return {
    '@type': p.monthly ? 'UnitPriceSpecification' : 'PriceSpecification',
    priceCurrency: 'EUR',
    minPrice: p.min,
    ...(p.max ? { maxPrice: p.max } : {}),
    valueAddedTaxIncluded: false,
    ...(p.monthly ? { unitCode: 'MON', unitText: 'mes' } : {}),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': ORG_ID,
        name: site.name,
        alternateName: `${site.name} Inteligencia Artificial`,
        url: site.url,
        logo: {
          '@type': 'ImageObject',
          url: `${site.url}/img/original/galeon-logo.png`,
          width: 1024,
          height: 1024,
        },
        image: `${site.url}/og-image.png`,
        description: site.summary,
        slogan: 'Pon la inteligencia artificial a trabajar para tu negocio.',
        email: site.email,
        foundingDate: site.foundingYear,
        founder: site.founders.map((name) => ({ '@type': 'Person', name })),
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.location.city,
          addressRegion: site.location.region,
          addressCountry: site.location.countryCode,
        },
        areaServed: [
          { '@type': 'City', name: site.location.city },
          { '@type': 'Country', name: site.location.country },
        ],
        knowsLanguage: ['es', 'en'],
        priceRange: '35 € - 1.800 €',
        currenciesAccepted: 'EUR',
        knowsAbout: [
          'Inteligencia artificial',
          'Automatización de procesos',
          'Automatización con IA',
          'Chatbots y asistentes de IA',
          'Agentes de IA',
          'Desarrollo web',
          'SEO técnico',
          'Integración de CRM y APIs',
          'Consultoría de IA para pymes',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: site.email,
          url: `${site.url}/contacto`,
          availableLanguage: ['Spanish', 'English'],
          areaServed: site.location.countryCode,
        },
        sameAs: Object.values(site.social).filter(Boolean),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios y precios orientativos de GALEON',
          itemListElement: priceList.map((p) => ({
            '@type': 'Offer',
            name: p.service,
            description: p.scope,
            priceSpecification: price(p),
            itemOffered: {
              '@type': 'Service',
              name: p.service,
              description: p.scope,
              provider: { '@id': ORG_ID },
              areaServed: site.location.country,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: 'es-ES',
        publisher: { '@id': ORG_ID },
      },
    ],
  };
}

export function homeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${site.url}/#inicio`,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: 'es-ES',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        primaryImageOfPage: `${site.url}/og-image.png`,
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.hero__title', '.hero__subtitle', '.faq__answer'] },
      },
      ...services.map((s) => ({
        '@type': 'Service',
        name: s.title,
        description: s.description,
        serviceType: s.title,
        provider: { '@id': ORG_ID },
        areaServed: site.location.country,
        audience: { '@type': 'BusinessAudience', audienceType: site.audience.join(', ') },
      })),
      {
        '@type': 'HowTo',
        name: 'Cómo trabaja GALEON un proyecto de IA o web',
        step: processSteps.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.title, text: p.description })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${site.url}/#faqs`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };
}

export function contactSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        url: `${site.url}/contacto`,
        name: `Contacto | ${site.name}`,
        inLanguage: 'es-ES',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Contacto', item: `${site.url}/contacto` },
        ],
      },
    ],
  };
}

// Inserta el JSON-LD de forma segura (escapa "<" para que nadie pueda cerrar el <script>).
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
