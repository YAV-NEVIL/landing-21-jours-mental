import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenCheckout }) {
  return (
    <footer 
      style={{
        background: '#04060b',
        borderTop: '1px solid rgba(124, 139, 255, 0.2)',
        borderRadius: '4rem 4rem 0 0',
        padding: '70px 24px 40px',
        position: 'relative',
        marginTop: '60px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: '18px', color: '#ffffff', marginBottom: '10px' }}>
              21 JOURS <span style={{ color: 'var(--cyan-glow)' }}>MENTAL</span>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-dim)', lineHeight: 1.6, maxWidth: '300px', marginBottom: '20px' }}>
              Le protocole d'entraînement cérébral intensif pour entrepreneurs exigeants. Conçu et rédigé par Dani Mariotte.
            </p>
            {/* System Operational Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              <span className="pulse-dot" style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#10b981', fontWeight: 600 }}>
                SYSTÈME OPÉRATIONNEL // SERVEURS SÉCURISÉS
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '14px', color: '#ffffff', marginBottom: '16px', letterSpacing: '0.05em' }}>
              NAVIGATION
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <li><a href="#hero" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }}>Accueil</a></li>
              <li><a href="#mecanismes" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }}>Mécanismes d'Action</a></li>
              <li><a href="#protocole" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }}>Protocole des 21 Jours</a></li>
              <li><a href="#manifeste" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }}>Manifeste</a></li>
              <li>
                <button 
                  type="button"
                  onClick={onOpenCheckout} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    padding: 0, 
                    color: 'var(--cyan-glow)', 
                    cursor: 'pointer', 
                    fontSize: '13.5px', 
                    textAlign: 'left',
                    fontWeight: 600
                  }}
                >
                  ⚡ Commander le Pack (10 000 FCFA)
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '14px', color: '#ffffff', marginBottom: '16px', letterSpacing: '0.05em' }}>
              SÉCURITÉ & LÉGAL
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--text-dim)' }}>
              <li>Paiements sécurisés SSL 256 bits via Chariow</li>
              <li>Protection des données personnelles (RGPD)</li>
              <li>Garantie de remboursement 30 jours</li>
              <li>Support client réactif par email 7j/7</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '12.5px',
            color: 'var(--text-sub)'
          }}
        >
          <div>
            © 2026 Dani Mariotte — Tous droits réservés. Produit digital officiel.
          </div>
          <div>
            Édition Haute Fidélité • Conçu avec rigueur & impact
          </div>
        </div>

      </div>
    </footer>
  );
}
