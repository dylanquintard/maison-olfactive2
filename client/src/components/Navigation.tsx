/*
 * MAISON OLFACTIVE — Navigation
 * Style: Fine, discrète, asymétrique
 * Fond: ivoire chaud transparent avec blur
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { toast } from 'sonner';

const navLinks = [
  { label: 'Collections', href: '/boutique' },
  { label: 'Bougies', href: '/boutique' },
  { label: 'Encens', href: '/boutique' },
  { label: 'Coffrets', href: '/boutique' },
  { label: 'Notre histoire', href: '/notre-histoire' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[#FBF6EE]/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(61,42,34,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex flex-col leading-none cursor-pointer">
                <span
                  className="font-serif-display text-xl lg:text-2xl tracking-wide"
                  style={{ color: '#3D2A22', fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  Maison
                </span>
                <span
                  className="font-sans-brand text-[10px] lg:text-xs tracking-[0.25em] uppercase"
                  style={{ color: '#C97C5D', fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
                >
                  Olfactive
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href + link.label} href={link.href}>
                  <span
                    className="link-underline text-sm tracking-wide transition-colors duration-300"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 400,
                      color: '#3D2A22',
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => toast('Recherche bientôt disponible')}
                className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#F4E7D3] transition-colors duration-300"
                aria-label="Rechercher"
              >
                <Search size={16} style={{ color: '#3D2A22' }} />
              </button>
              <button
                onClick={() => toast('Panier bientôt disponible')}
                className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#F4E7D3] transition-colors duration-300 relative"
                aria-label="Panier"
              >
                <ShoppingBag size={16} style={{ color: '#3D2A22' }} />
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] flex items-center justify-center"
                  style={{ backgroundColor: '#C97C5D', color: '#FBF6EE', fontFamily: "'Jost', sans-serif" }}
                >
                  0
                </span>
              </button>
              <button
                className="lg:hidden flex items-center justify-center w-9 h-9"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                {menuOpen ? <X size={20} style={{ color: '#3D2A22' }} /> : <Menu size={20} style={{ color: '#3D2A22' }} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#FBF6EE' }}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <Link key={link.href + link.label} href={link.href}>
                <span
                  className="text-3xl transition-colors duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    color: '#3D2A22',
                    animationDelay: `${i * 80}ms`,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: '#B7ADA3', fontFamily: "'Jost', sans-serif" }}
            >
              Des objets parfumés pour la maison
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
