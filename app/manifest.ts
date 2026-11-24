import type { MetadataRoute } from 'next';
import { site } from '@/lib/content';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f1b5c',
    lang: 'es-ES',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/img/original/favicon.png', sizes: '256x256', type: 'image/png' },
    ],
  };
}
