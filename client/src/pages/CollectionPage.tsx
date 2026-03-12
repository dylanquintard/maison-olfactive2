/*
 * MAISON OLFACTIVE — Page Collection
 * Style: Éditorial marchand, immersif, aéré
 */

import { useEffect } from 'react';
import { Link, useParams } from 'wouter';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getCollectionBySlug, getProductsByCollection, collections } from '@/lib/data';
import { toast } from 'sonner';

export default function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const collection = getCollectionBySlug(slug || '');
  const products = getProductsByCollection(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);

  if (!collection) {
    return (
      <div style={{ backgroundColor: '#FBF6EE' }} className="min-h-screen flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <p style={{ fontFamily: "'Jost', sans-serif", color: '#3D2A22' }}>Collection introuvable.</p>
          <Link href="/boutique">
            <button className="mt-4 text-sm" style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif" }}>
              Retour à la boutique
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FBF6EE' }} className="min-h-screen">
      <Navigation />

      {/* Hero collection */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(61,42,34,0.65) 0%, rgba(61,42,34,0.2) 60%, transparent 100%)' }}
        />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <Link href="/boutique">
              <button
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase mb-6 hover:gap-3 transition-all duration-300"
                style={{ color: 'rgba(251,246,238,0.7)', fontFamily: "'Jost', sans-serif" }}
              >
                <ArrowLeft size={12} /> Boutique
              </button>
            </Link>
            <div
              className="text-xs tracking-[0.25em] uppercase mb-3"
              style={{ color: collection.color, fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
            >
              Collection
            </div>
            <h1
              className="text-4xl lg:text-5xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#FBF6EE', fontWeight: 400 }}
            >
              {collection.name}
            </h1>
            <p
              className="text-base max-w-md leading-relaxed"
              style={{ color: '#F4E7D3', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.9 }}
            >
              {collection.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16" style={{ backgroundColor: '#FBF6EE' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl reveal">
            <div className="divider-terracotta mb-6" />
            <p
              className="text-base leading-[1.9]"
              style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.85 }}
            >
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-20" style={{ backgroundColor: '#FBF6EE' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className="text-xs tracking-[0.2em] uppercase mb-8 reveal"
            style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}
          >
            {products.length} produit{products.length > 1 ? 's' : ''} dans cette collection
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <Link key={product.id} href={`/produits/${product.slug}`}>
                <div
                  className="product-card group cursor-pointer reveal"
                  style={{ animationDelay: `${i * 80}ms` }}
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
                      style={{ backgroundColor: '#3D2A22', color: '#FBF6EE', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                    >
                      Ajouter au panier
                    </button>
                  </div>
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
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                  >
                    {product.price} €
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other collections */}
      <section className="py-16" style={{ backgroundColor: '#F4E7D3' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2
            className="text-2xl mb-8 reveal"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
          >
            Les autres collections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {collections.filter((c) => c.slug !== slug).map((col, i) => (
              <Link key={col.id} href={`/collections/${col.slug}`}>
                <div
                  className="group relative overflow-hidden cursor-pointer reveal"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(61,42,34,0.6) 0%, transparent 60%)' }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3
                      className="text-lg"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#FBF6EE', fontWeight: 400 }}
                    >
                      {col.name}
                    </h3>
                    <span
                      className="text-xs flex items-center gap-1.5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ color: col.color, fontFamily: "'Jost', sans-serif" }}
                    >
                      Découvrir <ArrowRight size={10} />
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
