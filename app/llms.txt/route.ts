// /llms.txt: resumen en Markdown pensado para asistentes de IA (ChatGPT, Claude, Perplexity...).
// Se genera desde lib/content.ts, así que nunca se desincroniza de la web.
import { site, services, useCases, processSteps, packages, priceList, faqs } from '@/lib/content';

export const dynamic = 'force-static';

const eur = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} €`;

export function GET() {
  const prices = priceList
    .map((p) => {
      const range = p.max ? `${eur(p.min)}–${eur(p.max)}` : `desde ${eur(p.min)}`;
      return `- ${p.service}: ${range}${p.monthly ? '/mes' : ''} (sin IVA). ${p.scope}`;
    })
    .join('\n');

  const body = `# ${site.name}

> ${site.summary}

- Tipo: consultora de inteligencia artificial, automatización de procesos y desarrollo web
- Ubicación: ${site.location.city}, ${site.location.region} (${site.location.country})
- Zona de servicio: ${site.areaServed}
- Clientes: ${site.audience.join(', ')}
- Fundadores: ${site.founders.join(' y ')} (${site.foundingYear})
- Contacto: ${site.email} · ${site.url}/contacto
- Diagnóstico inicial: gratuito y sin compromiso; respuesta con propuesta en menos de 24 h

## Servicios

${services.map((s) => `- **${s.title}**: ${s.description}`).join('\n')}

## Qué se puede automatizar

${useCases.map((u) => `- **${u.title}**: ${u.description}`).join('\n')}

## Paquetes

${packages.map((p) => `- **${p.name}** (${p.price}): ${p.description}`).join('\n')}

## Precios orientativos

Tarifas de lanzamiento sin IVA. El precio final depende del alcance. Los servicios de terceros (dominio, hosting, APIs, créditos de IA, licencias) se presupuestan aparte.

${prices}

## Cómo trabajamos

${processSteps.map((p) => `${Number(p.number)}. **${p.title}**: ${p.description}`).join('\n')}

## Preguntas frecuentes

${faqs.map((f) => `### ${f.question}\n\n${f.answer}`).join('\n\n')}

## Páginas

- [Inicio](${site.url}/): servicios, demostración, proceso, paquetes y preguntas frecuentes
- [Contacto](${site.url}/contacto): formulario para pedir el diagnóstico gratuito
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
