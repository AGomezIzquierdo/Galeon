import Link from 'next/link';
import Image from 'next/image';
import { nav, site } from '@/lib/content';

export default function Footer() {
  const socials = [
    { label: 'LinkedIn', href: site.social.linkedin },
    { label: 'Instagram', href: site.social.instagram },
  ].filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" className="navbar__brand">
            <Image src="/img/galeon-simbolo-blanco.svg" alt="" width={40} height={41} unoptimized />
            <span>GALEON</span>
          </Link>
          <p>{site.tagline} en {site.location.city}. Automatización con IA, asistentes y desarrollo web para pymes, autónomos y comercios de toda España.</p>
        </div>
        <nav className="footer__links" aria-label="Enlaces del pie de página">
          <strong>Explora</strong>
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href="/contacto">Contacto</Link>
        </nav>
        <div className="footer__links">
          <strong>Contacto</strong>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <address>
            {site.location.city}, {site.location.country}
          </address>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} GALEON. Todos los derechos reservados.</p>
        <p>Hecho con IA y criterio humano.</p>
      </div>
    </footer>
  );
}
