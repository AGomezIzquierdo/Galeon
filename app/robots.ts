import type { MetadataRoute } from 'next';
import { site } from '@/lib/content';

// Rastreadores de buscadores y de asistentes de IA a los que damos acceso explícito.
// Queremos que GALEON aparezca (y se cite bien) en ChatGPT, Claude, Perplexity, Gemini, etc.
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
  'meta-externalagent',
  'DuckAssistBot',
  'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      { userAgent: aiCrawlers, allow: '/', disallow: '/api/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
