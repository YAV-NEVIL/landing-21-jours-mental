import React from 'react';
import { Shield, Cpu, Activity, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

export default function ProtocolStack({ onOpenCheckout }) {
  const steps = [
    {
      num: 'PHASE 01 // JOURS 1 À 7',
      title: 'Déconstruction Neuro-Émotionnelle',
      subtitle: 'Nettoyer le disque dur mental des croyances toxiques',
      desc: 'Identification et élimination chirurgicale des 7 illusions qui te paralysent : le mythe du bon moment, la peur d\'être jugé, et le syndrome de l\'imposteur actif.',
      deliverable: 'Résultat : L\'esprit est libéré de la friction psychologique avant d\'agir.',
      type: 'geom'
    },
    {
      num: 'PHASE 02 // JOURS 8 À 14',
      title: 'L\'Algorithme de l\'Habitude Inébranlable',
      subtitle: 'Remplacer la volonté fragile par des systèmes d\'automatisation',
      desc: 'Mise en place de déclencheurs d\'action à seuil zéro. Tu n\'as plus besoin de motivation : l\'exécution devient aussi naturelle et obligatoire que respirer.',
      deliverable: 'Résultat : 7 jours consécutifs d\'exécution sans aucune négociation interne.',
      type: 'laser'
    },
    {
      num: 'PHASE 03 // JOURS 15 À 21',
      title: 'L\'Exécution Implacable & La Conquête',
      subtitle: 'Monétisation, confrontation au marché et résilience d\'acier',
      desc: 'Passage en mode offensif : oser vendre au juste prix, convertir les revers en carburant et bâtir une endurance psychologique que rien ne peut stopper.',
      deliverable: 'Résultat : Un entrepreneur nouveau, armé d\'un mental d\'acier prêt à dominer.',
      type: 'ecg'
    }
  ];

  return (
    <section id="protocole" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <div className="pill-badge" style={{ marginBottom: '16px' }}>
            <Cpu size={14} color="var(--cyan-glow)" />
            <span>ARCHITECTURE DES 21 JOURS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Le Déroulé du <span className="text-gradient-cyan">Protocole</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '16px' }}>
            Trois blocs de 7 jours consécutifs pour reprogrammer ton mental de fond en comble.
          </p>
        </div>

        {/* Sticky Stacked Cards Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`glass-card protocol-card protocol-card-${idx}`}
              style={{
                top: `${90 + idx * 30}px`,
                zIndex: idx + 1
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '11.5px', 
                      color: '#5fd4ff', 
                      letterSpacing: '0.08em',
                      fontWeight: 700,
                      background: 'rgba(95, 212, 255, 0.1)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(95, 212, 255, 0.3)'
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                  {step.title}
                </h3>

                <div style={{ fontSize: '15px', color: '#7c8bff', fontWeight: 600, marginBottom: '16px' }}>
                  {step.subtitle}
                </div>

                <p style={{ color: 'var(--text-dim)', fontSize: '14.5px', lineHeight: 1.65, marginBottom: '20px' }}>
                  {step.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                  <CheckCircle2 size={16} />
                  <span>{step.deliverable}</span>
                </div>
              </div>

              {/* Unique Visual / Animation Per Card */}
              <div 
                style={{ 
                  height: '220px', 
                  borderRadius: '2rem', 
                  background: '#050811', 
                  border: '1px solid rgba(124, 139, 255, 0.2)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {step.type === 'geom' && (
                  // Motif 1 : Cercles concentriques & géométrie en rotation lente
                  <svg width="180" height="180" viewBox="0 0 200 200" style={{ animation: 'spinSlow 20s linear infinite' }}>
                    <circle cx="100" cy="100" r="80" stroke="rgba(95, 212, 255, 0.3)" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
                    <circle cx="100" cy="100" r="55" stroke="rgba(124, 139, 255, 0.5)" strokeWidth="2" strokeDasharray="12 4" fill="none" />
                    <circle cx="100" cy="100" r="30" stroke="#5fd4ff" strokeWidth="2" fill="rgba(95, 212, 255, 0.08)" />
                    <path d="M 100 20 L 100 180 M 20 100 L 180 100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <circle cx="100" cy="100" r="6" fill="#7c8bff" />
                  </svg>
                )}

                {step.type === 'laser' && (
                  // Motif 2 : Grille de points avec ligne laser de balayage
                  <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div 
                      style={{
                        position: 'absolute',
                        inset: '15px',
                        backgroundImage: 'radial-gradient(rgba(124, 139, 255, 0.35) 1.5px, transparent 1.5px)',
                        backgroundSize: '16px 16px'
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #5fd4ff, #7c8bff, transparent)',
                        boxShadow: '0 0 15px #5fd4ff, 0 0 30px #5fd4ff',
                        animation: 'laserScan 3.5s ease-in-out infinite alternate'
                      }}
                    />
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#5fd4ff', zIndex: 2, background: 'rgba(5, 8, 17, 0.8)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(95, 212, 255, 0.3)' }}>
                      ALGORITHME VERROUILLÉ
                    </div>
                  </div>
                )}

                {step.type === 'ecg' && (
                  // Motif 3 : Forme d'onde ECG SVG pulsante avec stroke-dashoffset
                  <svg width="220" height="90" viewBox="0 0 240 100" style={{ overflow: 'visible' }}>
                    <path
                      d="M 10 50 L 60 50 L 75 15 L 90 85 L 105 35 L 120 60 L 135 50 L 230 50"
                      fill="none"
                      stroke="#5fd4ff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: 300,
                        strokeDashoffset: 0,
                        animation: 'ecgPulse 2.8s ease-in-out infinite'
                      }}
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bouton d'action direct pour lancer le protocole */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button
            type="button"
            onClick={onOpenCheckout}
            className="btn-magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 36px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 10px 30px rgba(95, 212, 255, 0.35)'
            }}
          >
            <Zap size={18} />
            <span>Activer les 21 Jours de Reprogrammation (10 000 FCFA)</span>
            <ArrowRight size={18} />
          </button>
          <div style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
            ✓ Inclus : PDF + EPUB + Livre Audio MP3 • Accès instantané
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes laserScan {
          0% { top: 10%; opacity: 0.4; }
          50% { opacity: 1; }
          100% { top: 90%; opacity: 0.4; }
        }
        @keyframes ecgPulse {
          0% { stroke-dashoffset: 300; opacity: 0.4; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -300; opacity: 0.4; }
        }
        @media (max-width: 860px) {
          #protocole .glass-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
