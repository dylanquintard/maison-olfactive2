/*
 * MAISON OLFACTIVE — Footer
 * Style: Fond brun profond, typographie légère, liens discrets
 */

import { Link } from 'wouter';
import { toast } from 'sonner';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#3D2A22' }} className="pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div
                className="text-3xl mb-1"
                style={{ fontFamily: "'Playfair Display', serif", color: '#FBF6EE', fontWeight: 400 }}
              >
                Maison Olfactive
              </div>
              <div
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif" }}
              >
                Objets parfumés pour la maison
              </div>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              Des objets parfumés inspirés des saisons, des cuisines vivantes et des souvenirs qui réchauffent la maison.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
            >
              Collections
            </h4>
            <ul className="space-y-3">
              {['Cuisine lente', 'Dimanche matin', 'Zeste & feu', 'Herbes chaudes'].map((col) => (
                <li key={col}>
                  <Link href={`/collections/${col.toLowerCase().replace(/ /g, '-').replace(/&/g, 'et')}`}>
                    <span
                      className="text-sm link-underline transition-colors duration-300 hover:text-[#FBF6EE]"
                      style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                    >
                      {col}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
            >
              Informations
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Notre histoire', href: '/notre-histoire' },
                { label: 'Livraison & retours', href: '#' },
                { label: 'FAQ', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span
                      className="text-sm link-underline transition-colors duration-300 hover:text-[#FBF6EE]"
                      style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
              >
                Recevoir les nouvelles collections, les inspirations de saison<br className="hidden md:block" /> et quelques idées pour parfumer la maison avec douceur.
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-2.5 text-sm bg-white/5 border border-white/15 rounded-sm outline-none focus:border-[#C97C5D] transition-colors duration-300 w-56"
                style={{ color: '#FBF6EE', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
              />
              <button
                onClick={() => toast('Inscription enregistrée, merci !')}
                className="px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: '#C97C5D',
                  color: '#FBF6EE',
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                }}
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            © 2025 Maison Olfactive. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {['Mentions légales', 'Politique de confidentialité', 'CGV'].map((item) => (
              <button
                key={item}
                onClick={() => toast('Page bientôt disponible')}
                className="text-xs transition-colors duration-300 hover:text-[#FBF6EE]"
                style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
