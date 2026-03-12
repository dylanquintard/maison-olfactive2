/*
 * MAISON OLFACTIVE — Fiche Produit
 * Style: Sensorielle, claire, rassurante
 */

import { useEffect, useState } from 'react';
import { Link, useParams } from 'wouter';
import { ArrowLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getProductBySlug, getProductsByCollection } from '@/lib/data';
import { toast } from 'sonner';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const [qty, setQty] = useState(1);

  const relatedProducts = product
    ? getProductsByCollection(product.collectionSlug).filter((p) => p.slug !== slug).slice(0, 3)
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);

  if (!product) {
    return (
      <div style={{ backgroundColor: '#FBF6EE' }} className="min-h-screen flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <p style={{ fontFamily: "'Jost', sans-serif", color: '#3D2A22' }}>Produit introuvable.</p>
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

      <div className="pt-24 lg:pt-28">
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center gap-2 text-xs" style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}>
            <Link href="/boutique"><span className="hover:text-[#C97C5D] transition-colors">Boutique</span></Link>
            <span>/</span>
            <Link href={`/collections/${product.collectionSlug}`}>
              <span className="hover:text-[#C97C5D] transition-colors">{product.collection}</span>
            </Link>
            <span>/</span>
            <span style={{ color: '#3D2A22' }}>{product.name}</span>
          </div>
        </div>

        {/* Main product */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className="reveal">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isBestSeller && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase"
                    style={{ backgroundColor: '#C97C5D', color: '#FBF6EE', fontFamily: "'Jost', sans-serif" }}
                  >
                    Best-seller
                  </div>
                )}
                {product.isNew && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase"
                    style={{ backgroundColor: '#A8B29A', color: '#FBF6EE', fontFamily: "'Jost', sans-serif" }}
                  >
                    Nouveau
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="reveal" style={{ animationDelay: '100ms' }}>
              <Link href={`/collections/${product.collectionSlug}`}>
                <span
                  className="text-xs tracking-[0.2em] uppercase hover:text-[#C97C5D] transition-colors duration-300"
                  style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}
                >
                  {product.collection}
                </span>
              </Link>

              <h1
                className="text-3xl lg:text-4xl mt-2 mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
              >
                {product.name}
              </h1>

              <div
                className="text-xs tracking-[0.15em] uppercase mb-4"
                style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                {product.olfactiveFamily}
              </div>

              <div
                className="text-2xl font-medium mb-6"
                style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
              >
                {product.price} €
              </div>

              <div className="divider-terracotta mb-6" />

              {/* Format */}
              <div
                className="text-xs mb-6"
                style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
              >
                {product.format}
              </div>

              {/* Notes */}
              <div className="mb-6">
                <div
                  className="text-xs tracking-[0.15em] uppercase mb-2"
                  style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}
                >
                  Notes olfactives
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 text-xs"
                      style={{
                        backgroundColor: '#F4E7D3',
                        color: '#3D2A22',
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Qty + Add to cart */}
              <div className="flex gap-3 mb-6">
                <div
                  className="flex items-center border"
                  style={{ borderColor: 'rgba(61,42,34,0.15)' }}
                >
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#F4E7D3] transition-colors"
                  >
                    <Minus size={12} style={{ color: '#3D2A22' }} />
                  </button>
                  <span
                    className="w-10 text-center text-sm"
                    style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif" }}
                  >
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#F4E7D3] transition-colors"
                  >
                    <Plus size={12} style={{ color: '#3D2A22' }} />
                  </button>
                </div>
                <button
                  onClick={() => toast(`${qty}× ${product.name} ajouté${qty > 1 ? 's' : ''} au panier`)}
                  className="flex-1 flex items-center justify-center gap-3 py-3 text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:opacity-90"
                  style={{
                    backgroundColor: '#3D2A22',
                    color: '#FBF6EE',
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  <ShoppingBag size={15} />
                  Ajouter au panier
                </button>
              </div>

              {/* Accordion-style info */}
              <div className="space-y-4 border-t" style={{ borderColor: 'rgba(61,42,34,0.08)' }}>
                {[
                  { label: 'L\'ambiance', content: product.ambiance },
                  { label: 'À allumer quand', content: product.whenToLight },
                  { label: 'Composition', content: product.composition },
                  { label: 'Conseils d\'usage', content: product.usage },
                ].map((item) => (
                  <details key={item.label} className="group pt-4">
                    <summary
                      className="flex items-center justify-between cursor-pointer list-none"
                    >
                      <span
                        className="text-sm tracking-wide"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 500 }}
                      >
                        {item.label}
                      </span>
                      <Plus
                        size={14}
                        style={{ color: '#C97C5D' }}
                        className="group-open:rotate-45 transition-transform duration-300"
                      />
                    </summary>
                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: '#3D2A22', fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.75 }}
                    >
                      {item.content}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="py-16" style={{ backgroundColor: '#F4E7D3' }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <h2
                className="text-2xl mb-8 reveal"
                style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
              >
                Dans la même collection
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((p, i) => (
                  <Link key={p.id} href={`/produits/${p.slug}`}>
                    <div
                      className="product-card group cursor-pointer reveal"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <div className="relative overflow-hidden aspect-square mb-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                        />
                      </div>
                      <h3
                        className="text-base mb-1"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#3D2A22', fontWeight: 400 }}
                      >
                        {p.name}
                      </h3>
                      <span
                        className="text-sm"
                        style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                      >
                        {p.price} €
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
