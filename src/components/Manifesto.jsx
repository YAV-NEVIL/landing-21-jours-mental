import React from 'react';
import { Compass, Flame, ArrowRight } from 'lucide-react';

export default function Manifesto({ onOpenCheckout }) {
  return (
    <section 
      id="manifeste" 
      style={{ 
        padding: '120px 0', 
        background: '#070a13', 
        position: 'relative',
        borderTop: '1px solid rgba(124, 139, 255, 0.15)',
        borderBottom: '1px solid rgba(124, 139, 255, 0.15)',
        overflow: 'hidden'
      }}
    >
      {/* Background glow orb */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(123, 97, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        <div className="pill-badge" style={{ marginBottom: '32px' }}>
          <Compass size={14} color="var(--cyan-glow)" />
          <span>LE MANIFESTE ANTI-BLABLA</span>
        </div>

        {/* Contrasting Statement 1: Common Approach */}
        <p 
          style={{ 
            fontFamily: 'var(--font-sora)', 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
            color: 'var(--text-dim)', 
            lineHeight: 1.6,
            maxWidth: '750px',
            margin: '0 auto 40px'
          }}
        >
          La plupart des livres de motivation se concentrent sur : <br />
          <span style={{ color: '#64748b', textDecoration: 'line-through' }}>
            les pensées positives passives, l'excitation temporaire et les théories sans lendemain.
          </span>
        </p>

        {/* Divider icon */}
        <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '50%', background: 'rgba(95, 212, 255, 0.1)', marginBottom: '30px', border: '1px solid rgba(95, 212, 255, 0.3)' }}>
          <Flame size={24} color="#5fd4ff" />
        </div>

        {/* Contrasting Statement 2: Differentiated Approach */}
        <h2 
          style={{ 
            fontFamily: 'var(--font-sora)', 
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
            fontWeight: 800,
            color: '#f8fafc',
            lineHeight: 1.25,
            marginBottom: '20px'
          }}
        >
          Nous nous concentrons sur :
        </h2>

        <div 
          className="font-serif text-gradient-cyan" 
          style={{ 
            fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)', 
            lineHeight: 1.1,
            fontStyle: 'italic',
            maxWidth: '920px',
            margin: '0 auto'
          }}
        >
          La reconfiguration chirurgicale des circuits d'action et la discipline algorithmique.
        </div>

        <p style={{ marginTop: '36px', fontSize: '15px', color: '#94a3b8', maxWidth: '640px', margin: '36px auto 0', lineHeight: 1.6 }}>
          21 jours pour ne plus négocier avec ta propre faiblesse. Chaque matin : 1 principe électrochoc, 1 illusion détruite, 1 protocole d'action immédiate.
        </p>

        <div style={{ marginTop: '34px' }}>
          <button
            type="button"
            onClick={onOpenCheckout}
            className="btn-magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              fontSize: '14.5px',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              background: 'linear-gradient(135deg, #7c8bff 0%, #5fd4ff 100%)',
              color: '#060a18',
              boxShadow: '0 8px 24px rgba(95, 212, 255, 0.3)'
            }}
          >
            <span>Passer à l'Action : Obtenir le Livre (10 000 FCFA)</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
