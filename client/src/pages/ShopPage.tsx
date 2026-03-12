/*
 * MAISON OLFACTIVE — Boutique
 * Style: Navigation simple, visuels respirants, éditorial intégré
 */

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { products, collections, Product } from '@/lib/data';
import { toast } from 'sonner';

type FilterType = 'tout' | 'bougie' | 'encens' | 'diffuseur' | 'parfum-ambiance' | 'coffret';
type CollectionFilter = 'tout' | string;

const categoryLabels: Record<string, string> = {
  tout: 'Tout',
  bougie: 'Bougies',
  encens: 'Encens',
  diffuseur: 'Diffuseurs',
  'parfum-ambiance': 'Sprays',
  coffret: 'Coffrets',
};

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<FilterType>('tout');
  const [activeCollection, setActiveCollection] = useState<CollectionFilter>('tout');

  const filtered = products.filter((p) => {
    const catOk = activeCategory === 'tout' || p.category === activeCategory;
    const colOk = activeCollection === 'tout' || p.collectionSlug === activeCollection;
    return catOk && colOk;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory, activeCollection]);

  return (
    <div style={{ backgroundColor: '#FBF6EE' }} className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-12" style={{ backgroundColor: '#F4E7D3' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="reveal">
            <div
              className="text-xs tracking-[0.25em] uppercase mb-3"
              style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
            >
              Boutique
            </div>
            <h1
              className="text-4xl lg:text-5xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
            >
              Tous les objets<br />
              <em style={{ fontStyle: 'italic' }}>parfumés.</em>
            </h1>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.75 }}
            >
              Des bougies, encens, diffuseurs et parfums d'ambiance pensés pour habiter l'espace avec douceur.
            </p>
          </div>
        </div>
      </section>

      {/* Collections nav */}
      <section className="py-8 border-b" style={{ backgroundColor: '#FBF6EE', borderColor: 'rgba(61,42,34,0.08)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex gap-4 lg:gap-8 overflow-x-auto pb-2 scrollbar-hide">
            {/* Collections */}
            <div className="flex gap-3 flex-shrink-0">
              {[{ slug: 'tout', name: 'Toutes les collections' }, ...collections].map((col) => (
                <button
                  key={col.slug}
                  onClick={() => setActiveCollection(col.slug)}
                  className="px-4 py-2 text-xs tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-300"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: activeCollection === col.slug ? 500 : 400,
                    backgroundColor: activeCollection === col.slug ? '#3D2A22' : 'transparent',
                    color: activeCollection === col.slug ? '#FBF6EE' : '#3D2A22',
                    border: '1px solid',
                    borderColor: activeCollection === col.slug ? '#3D2A22' : 'rgba(61,42,34,0.15)',
                  }}
                >
                  {col.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-6" style={{ backgroundColor: '#FBF6EE' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {(Object.keys(categoryLabels) as FilterType[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 text-xs tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-300"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  color: activeCategory === cat ? '#C97C5D' : '#B7ADA3',
                  borderBottom: activeCategory === cat ? '1px solid #C97C5D' : '1px solid transparent',
                }}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="pb-20" style={{ backgroundColor: '#FBF6EE' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Count */}
          <div
            className="text-xs tracking-[0.15em] uppercase mb-8"
            style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}
          >
            {filtered.length} produit{filtered.length > 1 ? 's' : ''}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                Aucun produit dans cette sélection.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <Link key={product.id} href={`/produits/${product.slug}`}>
                  <div
                    className="product-card group cursor-pointer reveal"
                    style={{ animationDelay: `${(i % 4) * 80}ms` }}
                  >
                    <div className="relative overflow-hidden aspect-square mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                      />
                      {product.isBestSeller && (
                        <div
                          className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase"
                          style={{ backgroundColor: '#C97C5D', color: '#FBF6EE', fontFamily: "'Jost', sans-serif" }}
                        >
                          Best-seller
                        </div>
                      )}
                      {product.isNew && (
                        <div
                          className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase"
                          style={{ backgroundColor: '#A8B29A', color: '#FBF6EE', fontFamily: "'Jost', sans-serif" }}
                        >
                          Nouveau
                        </div>
                      )}
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
                    <div
                      className="text-[10px] tracking-[0.2em] uppercase mb-1"
                      style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}
                    >
                      {product.collection} · {product.olfactiveFamily}
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
                        {product.format.split('—')[0].trim()}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Collections banner */}
      <section className="py-16" style={{ backgroundColor: '#3D2A22' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <Link key={col.id} href={`/collections/${col.slug}`}>
                <div
                  className="group relative overflow-hidden cursor-pointer reveal"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(61,42,34,0.8) 0%, transparent 60%)' }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3
                      className="text-base"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#FBF6EE', fontWeight: 400 }}
                    >
                      {col.name}
                    </h3>
                    <span
                      className="text-xs flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ color: col.color, fontFamily: "'Jost', sans-serif" }}
                    >
                      Explorer <ArrowRight size={10} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
