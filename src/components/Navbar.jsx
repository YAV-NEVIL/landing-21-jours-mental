import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

export default function Navbar({ onOpenCheckout }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-floating ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a href="#" className="flex items-center gap-3 text-white no-underline group" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div className="pulse-dot"></div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="nav-logo-title" style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: '15px', letterSpacing: '-0.02em', color: '#ffffff' }}>
            21 JOURS <span style={{ color: 'var(--cyan-glow)' }}>MENTAL</span>
          </span>
          <span className="nav-logo-sub" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
            SYSTÈME D'ACTION
          </span>
        </div>
      </a>

      <nav className="nav-links">
        <a href="#mecanismes" className="nav-link">Mécanismes</a>
        <a href="#protocole" className="nav-link">Protocole 21J</a>
        <a href="#manifeste" className="nav-link">Manifeste</a>
        <a href="#faq" className="nav-link">FAQ</a>
      </nav>

      <button 
        type="button" 
        onClick={onOpenCheckout} 
        className="nav-btn-cta"
        style={{ border: 'none', cursor: 'pointer' }}
      >
        <Zap size={14} />
        <span className="nav-cta-text-full">Télécharger l'Ebook</span>
        <span className="nav-cta-text-mobile">Commander</span>
        <ArrowUpRight size={14} />
      </button>
    </header>
  );
}
