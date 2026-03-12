/*
 * MAISON OLFACTIVE — Homepage
 * Direction: Maison Vivante / Retenue Sensorielle
 * Sections: Hero, Univers, Collections, Best-sellers, Storytelling, Newsletter
 */

import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { collections, bestSellers, newProducts, IMAGES } from '@/lib/data';
import { toast } from 'sonner';

const categoryIcons: Record<string, string> = {
  bougie: '◦',
  encens: '∿',
  diffuseur: '◈',
  'parfum-ambiance': '◉',
  coffret: '◻',
};

const categoryLabels: Record<string, string> = {
  bougie: 'Bougie',
  encens: 'Encens',
  diffuseur: 'Diffuseur',
  'parfum-ambiance': 'Spray d\'ambiance',
  coffret: 'Coffret',
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Parallax on hero
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroImg = heroRef.current.querySelector('.hero-img') as HTMLElement;
        if (heroImg) {
          heroImg.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBF6EE' }}>
      <Navigation />

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      >
        {/* Background image with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Maison Olfactive — ambiance"
            className="hero-img w-full h-[120%] object-cover object-center"
            style={{ willChange: 'transform' }}
          />
          {/* Warm overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(61,42,34,0.55) 0%, rgba(61,42,34,0.2) 50%, rgba(61,42,34,0.05) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-end pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-xl">
              {/* Eyebrow */}
              <div
                className="text-xs tracking-[0.3em] uppercase mb-6 animate-fade-in"
                style={{ color: '#F4E7D3', fontFamily: "'Jost', sans-serif", fontWeight: 400, opacity: 0.8 }}
              >
                Objets parfumés pour la maison
              </div>

              {/* Title */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 animate-fade-in-up"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#FBF6EE',
                  fontWeight: 400,
                  animationDelay: '100ms',
                }}
              >
                La maison garde<br />
                <em style={{ fontStyle: 'italic', color: '#F4E7D3' }}>les odeurs</em><br />
                des gestes simples.
              </h1>

              {/* Divider */}
              <div className="divider-terracotta mb-6 animate-fade-in" style={{ animationDelay: '300ms' }} />

              {/* Subtitle */}
              <p
                className="text-base leading-relaxed mb-8 animate-fade-in"
                style={{
                  color: '#F4E7D3',
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  opacity: 0.9,
                  animationDelay: '400ms',
                }}
              >
                Des senteurs enveloppantes, des matières simples,<br className="hidden md:block" />
                des rituels à garder.
              </p>

              {/* CTA */}
              <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
                <Link href="/boutique">
                  <button
                    className="flex items-center gap-3 px-7 py-3.5 text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:gap-5"
                    style={{
                      backgroundColor: '#C97C5D',
                      color: '#FBF6EE',
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Explorer les senteurs
                    <ArrowRight size={14} />
                  </button>
                </Link>
                <Link href="/notre-histoire">
                  <button
                    className="flex items-center gap-2 px-7 py-3.5 text-sm tracking-[0.1em] uppercase border transition-all duration-300 hover:bg-white/10"
                    style={{
                      borderColor: 'rgba(251,246,238,0.4)',
                      color: '#FBF6EE',
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Notre histoire
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2">
          <div
            className="w-px h-12 animate-pulse"
            style={{ backgroundColor: 'rgba(251,246,238,0.4)' }}
          />
          <span
            className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center"
            style={{ color: 'rgba(251,246,238,0.5)', fontFamily: "'Jost', sans-serif" }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ─── UNIVERS ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FBF6EE' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="reveal">
              <div
                className="text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                L'univers
              </div>
              <h2
                className="text-3xl lg:text-4xl leading-[1.2] mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
              >
                La maison n'est pas<br />
                seulement un lieu.
              </h2>
              <div className="divider-terracotta mb-6" />
              <p
                className="text-base leading-[1.9] mb-4"
                style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.85 }}
              >
                C'est une température, une odeur, une lumière, un moment. Des objets parfumés inspirés des saisons, des cuisines vivantes et des souvenirs qui réchauffent la maison.
              </p>
              <p
                className="text-base leading-[1.9] mb-8"
                style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.85 }}
              >
                Des matières simples, des senteurs enveloppantes, des gestes à garder.
              </p>
              <Link href="/notre-histoire">
                <button
                  className="flex items-center gap-2 text-sm tracking-wide link-underline transition-colors duration-300"
                  style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                >
                  Notre histoire
                  <ArrowRight size={14} />
                </button>
              </Link>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 reveal" style={{ animationDelay: '150ms' }}>
              {[
                { label: 'Chaleur', desc: 'Une marque qui rassure, accueille, enveloppe.' },
                { label: 'Sincérité', desc: 'Pas de discours artificiel, pas de luxe froid.' },
                { label: 'Sensorialité', desc: 'La matière, l\'odeur, la lumière, la texture.' },
                { label: 'Temporalité', desc: 'Les saisons, les moments, les habitudes.' },
              ].map((val, i) => (
                <div
                  key={val.label}
                  className="p-5 reveal"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#F4E7D3' : '#FBF6EE',
                    border: '1px solid rgba(61,42,34,0.06)',
                    animationDelay: `${i * 80}ms`,
                  }}
                >
                  <div
                    className="text-sm font-medium mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 500 }}
                  >
                    {val.label}
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.7 }}
                  >
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── COLLECTIONS ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F4E7D3' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <div
                className="text-xs tracking-[0.25em] uppercase mb-3"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                Collections
              </div>
              <h2
                className="text-3xl lg:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
              >
                Quatre univers,<br />
                <em style={{ fontStyle: 'italic' }}>une même maison.</em>
              </h2>
            </div>
            <Link href="/boutique" className="hidden md:block">
              <span
                className="text-sm link-underline flex items-center gap-2"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                Voir tout <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* Collections grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <Link key={col.id} href={`/collections/${col.slug}`}>
                <div
                  className="group relative overflow-hidden cursor-pointer reveal"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
                      style={{ background: 'linear-gradient(to top, rgba(61,42,34,0.7) 0%, rgba(61,42,34,0.1) 60%, transparent 100%)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div
                      className="w-6 h-px mb-3 transition-all duration-500 group-hover:w-10"
                      style={{ backgroundColor: col.color }}
                    />
                    <h3
                      className="text-xl mb-1.5"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#FBF6EE', fontWeight: 400 }}
                    >
                      {col.name}
                    </h3>
                    <p
                      className="text-xs leading-relaxed mb-3 opacity-80"
                      style={{ color: '#F4E7D3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                    >
                      {col.tagline}
                    </p>
                    <span
                      className="text-xs tracking-[0.15em] uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ color: col.color, fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                    >
                      Découvrir <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEST SELLERS ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FBF6EE' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Tabs */}
          <div className="flex items-center justify-between mb-10 reveal">
            <div>
              <div
                className="text-xs tracking-[0.25em] uppercase mb-3"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                Sélection
              </div>
              <h2
                className="text-3xl lg:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
              >
                Les incontournables.
              </h2>
            </div>
            <Link href="/boutique" className="hidden md:block">
              <span
                className="text-sm link-underline flex items-center gap-2"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                Toute la boutique <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, i) => (
              <Link key={product.id} href={`/produits/${product.slug}`}>
                <div
                  className="product-card group cursor-pointer reveal"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-103"
                    />
                    {product.isBestSeller && (
                      <div
                        className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase"
                        style={{
                          backgroundColor: '#C97C5D',
                          color: '#FBF6EE',
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        Best-seller
                      </div>
                    )}
                    {product.isNew && (
                      <div
                        className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase"
                        style={{
                          backgroundColor: '#A8B29A',
                          color: '#FBF6EE',
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        Nouveau
                      </div>
                    )}
                    {/* Quick add */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toast(`${product.name} ajouté au panier`);
                      }}
                      className="absolute bottom-0 left-0 right-0 py-3 text-xs tracking-[0.15em] uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-400"
                      style={{
                        backgroundColor: '#3D2A22',
                        color: '#FBF6EE',
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      Ajouter au panier
                    </button>
                  </div>

                  {/* Info */}
                  <div>
                    <div
                      className="text-[10px] tracking-[0.2em] uppercase mb-1"
                      style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}
                    >
                      {product.olfactiveFamily}
                    </div>
                    <h3
                      className="text-base mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-xs leading-relaxed mb-2 line-clamp-2"
                      style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.65 }}
                    >
                      {product.ambiance}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-medium"
                        style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                      >
                        {product.price} €
                      </span>
                      <span
                        className="text-[10px] tracking-wide"
                        style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}
                      >
                        {categoryLabels[product.category]}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOUVEAUTÉS ─── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F4E7D3' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8 reveal">
            <h2
              className="text-2xl lg:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
            >
              <em style={{ fontStyle: 'italic' }}>Nouveautés</em> de saison
            </h2>
            <Link href="/boutique">
              <span
                className="text-sm link-underline flex items-center gap-2"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                Voir tout <ArrowRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product, i) => (
              <Link key={product.id} href={`/produits/${product.slug}`}>
                <div
                  className="product-card group cursor-pointer flex gap-5 reveal"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative overflow-hidden w-28 h-28 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute top-2 left-2 px-2 py-0.5 text-[9px] tracking-[0.15em] uppercase"
                      style={{
                        backgroundColor: '#A8B29A',
                        color: '#FBF6EE',
                        fontFamily: "'Jost', sans-serif",
                      }}
                    >
                      Nouveau
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div
                      className="text-[10px] tracking-[0.2em] uppercase mb-1"
                      style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}
                    >
                      {product.collection}
                    </div>
                    <h3
                      className="text-lg mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-xs leading-relaxed mb-2 line-clamp-2"
                      style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.65 }}
                    >
                      {product.ambiance}
                    </p>
                    <span
                      className="text-sm font-medium"
                      style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                    >
                      {product.price} €
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORYTELLING ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FBF6EE' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="reveal mb-12">
            <div
              className="text-xs tracking-[0.25em] uppercase mb-3"
              style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
            >
              Journal
            </div>
            <h2
              className="text-3xl lg:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
            >
              Saisons, rituels,<br />
              <em style={{ fontStyle: 'italic' }}>inspirations.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Parfumer la maison en hiver',
                excerpt: 'Les senteurs chaudes et épicées pour réchauffer les pièces quand la lumière baisse et que le froid s\'installe.',
                category: 'Saisons',
                image: IMAGES.cuisineLente,
              },
              {
                title: 'Comment choisir une bougie selon le moment',
                excerpt: 'Le matin appelle les agrumes. L\'après-midi, les herbes. Le soir, les bois et les épices. Un guide simple pour habiter chaque heure.',
                category: 'Rituels maison',
                image: IMAGES.dimancheMatin,
              },
              {
                title: 'Les senteurs de cuisine les plus réconfortantes',
                excerpt: 'Cannelle, pain chaud, vanille légère — les notes qui ramènent à la table, aux gestes simples, aux cuisines qui sentent bon.',
                category: 'Recettes d\'ambiance',
                image: IMAGES.herbesChaudes,
              },
            ].map((article, i) => (
              <button
                key={article.title}
                onClick={() => toast('Journal bientôt disponible')}
                className="group text-left reveal"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase mb-2"
                  style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                >
                  {article.category}
                </div>
                <h3
                  className="text-lg mb-2 group-hover:text-[#C97C5D] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.65 }}
                >
                  {article.excerpt}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COFFRETS ─── */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ backgroundColor: '#3D2A22' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div
                className="text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                Idée cadeau
              </div>
              <h2
                className="text-3xl lg:text-4xl leading-[1.2] mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#FBF6EE', fontWeight: 400 }}
              >
                Offrir une<br />
                <em style={{ fontStyle: 'italic', color: '#D98B4F' }}>présence olfactive.</em>
              </h2>
              <div className="divider-terracotta mb-6" />
              <p
                className="text-sm leading-[1.9] mb-8"
                style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
              >
                Des coffrets pensés pour offrir ou se faire plaisir. Tout pour créer un rituel, dans un packaging soigné que l'on a envie de garder.
              </p>
              <Link href="/boutique">
                <button
                  className="flex items-center gap-3 px-7 py-3.5 text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:gap-5"
                  style={{
                    backgroundColor: '#C97C5D',
                    color: '#FBF6EE',
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Voir les coffrets
                  <ArrowRight size={14} />
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal" style={{ animationDelay: '150ms' }}>
              {[
                { label: 'Cire naturelle', icon: '◦', desc: 'Soja 100% naturel' },
                { label: 'Fragrances pures', icon: '∿', desc: 'Sans phtalates' },
                { label: 'Packaging soigné', icon: '◻', desc: 'Kraft & verre ambré' },
                { label: 'Fait à la main', icon: '◈', desc: 'Artisanat français' },
              ].map((feat, i) => (
                <div
                  key={feat.label}
                  className="p-5 reveal"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    animationDelay: `${i * 80}ms`,
                  }}
                >
                  <div
                    className="text-2xl mb-3"
                    style={{ color: '#C97C5D' }}
                  >
                    {feat.icon}
                  </div>
                  <div
                    className="text-sm font-medium mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#FBF6EE', fontWeight: 500 }}
                  >
                    {feat.label}
                  </div>
                  <p
                    className="text-xs"
                    style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                  >
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F4E7D3' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center reveal">
            <div
              className="text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
            >
              Restez proches
            </div>
            <h2
              className="text-3xl lg:text-4xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
            >
              Les nouvelles de la maison.
            </h2>
            <p
              className="text-sm leading-[1.9] mb-8"
              style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.75 }}
            >
              Recevoir les nouvelles collections, les inspirations de saison et quelques idées pour parfumer la maison avec douceur.
            </p>
            <div className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 text-sm bg-white border border-[rgba(61,42,34,0.12)] outline-none focus:border-[#C97C5D] transition-colors duration-300"
                style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
              />
              <button
                onClick={() => toast('Inscription enregistrée, merci !')}
                className="px-6 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90 flex-shrink-0"
                style={{
                  backgroundColor: '#3D2A22',
                  color: '#FBF6EE',
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                }}
              >
                S'inscrire
              </button>
            </div>
            <p
              className="text-[11px] mt-4"
              style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              Pas de spam. Juste de la douceur, quand c'est le bon moment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
