/*
 * MAISON OLFACTIVE — Notre Histoire
 * Style: Éditorial, intime, narratif
 */

import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { IMAGES } from '@/lib/data';

export default function HistoirePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: '#FBF6EE' }} className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Notre histoire"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(61,42,34,0.3) 0%, rgba(61,42,34,0.6) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#F4E7D3', fontFamily: "'Jost', sans-serif", opacity: 0.8 }}
            >
              Maison Olfactive
            </div>
            <h1
              className="text-4xl lg:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#FBF6EE', fontWeight: 400 }}
            >
              Notre histoire
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main text */}
            <div className="lg:col-span-7 reveal">
              <div
                className="text-xs tracking-[0.25em] uppercase mb-6"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                Les origines
              </div>
              <h2
                className="text-3xl lg:text-4xl mb-8 leading-[1.2]"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
              >
                Tout a commencé<br />
                <em style={{ fontStyle: 'italic' }}>dans une cuisine.</em>
              </h2>
              <div className="divider-terracotta mb-8" />
              <div className="space-y-5">
                {[
                  "Il y a quelques années, en préparant un repas d'automne, j'ai réalisé que les odeurs qui m'entouraient — la cannelle dans le four, le bois qui craquait, un zeste d'orange sur la table — étaient les plus belles que j'aie jamais senties.",
                  "Pas des parfums construits. Des odeurs vraies, vivantes, ancrées dans un geste, dans un moment, dans une lumière particulière.",
                  "C'est de là qu'est née Maison Olfactive. L'envie de capturer ces sensations dans des objets simples et beaux. Des bougies, des encens, des diffuseurs — pas pour décorer, mais pour habiter l'espace autrement.",
                  "Chaque senteur est pensée comme un souvenir à créer. Pas un parfum abstrait, mais une ambiance précise : la cuisine lente d'un dimanche, le linge propre d'un matin clair, les herbes séchées d'un jardin d'été.",
                  "Les matières sont naturelles, les contenants sont choisis pour durer, le packaging est pensé pour qu'on ait envie de le garder. Rien d'ostentatoire. Juste du soin, de la sincérité, et une vraie intention derrière chaque objet.",
                ].map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.9]"
                    style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.85 }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Side images */}
            <div className="lg:col-span-5 space-y-4 reveal" style={{ animationDelay: '150ms' }}>
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={IMAGES.cuisineLente}
                  alt="Matières artisanales"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={IMAGES.dimancheMatin}
                  alt="Dimanche matin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#F4E7D3' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 reveal">
            <h2
              className="text-3xl lg:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
            >
              Ce qui nous guide.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '◦',
                title: 'Matières naturelles',
                desc: 'Cire de soja, fragrances sans phtalates, contenants en verre ou céramique. Des choix simples, cohérents, durables.',
              },
              {
                icon: '∿',
                title: 'Fait à la main',
                desc: 'Chaque bougie est coulée à la main, en petite série. La régularité industrielle ne nous intéresse pas.',
              },
              {
                icon: '◈',
                title: 'Packaging soigné',
                desc: 'Des contenants qu\'on a envie de garder, de poser dans la maison, de voir vivre avec le décor.',
              },
              {
                icon: '◻',
                title: 'Senteurs sincères',
                desc: 'Pas de luxe froid, pas de sophistication forcée. Des parfums qui évoquent des moments réels.',
              },
            ].map((val, i) => (
              <div
                key={val.title}
                className="p-8 reveal"
                style={{
                  backgroundColor: '#FBF6EE',
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div className="text-3xl mb-4" style={{ color: '#C97C5D' }}>{val.icon}</div>
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 500 }}
                >
                  {val.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.75 }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#FBF6EE' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center reveal">
          <h2
            className="text-3xl lg:text-4xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
          >
            Entrer dans la maison.
          </h2>
          <p
            className="text-base leading-relaxed mb-8 max-w-md mx-auto"
            style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.75 }}
          >
            Découvrir les collections, les senteurs, les objets pensés pour habiter l'espace autrement.
          </p>
          <Link href="/boutique">
            <button
              className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:gap-5"
              style={{
                backgroundColor: '#C97C5D',
                color: '#FBF6EE',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
              }}
            >
              Découvrir la boutique
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
