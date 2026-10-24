import React, { useState, useEffect } from 'react';
import { Layers, Activity, CalendarCheck, MousePointer, Terminal, Sparkles } from 'lucide-react';

export default function InteractiveFeatures({ onOpenCheckout }) {
  // --- CARTE 1 : Mélangeur Diagnostique ---
  const initialDiagnostiques = [
    {
      id: 1,
      badge: 'PARALYSIE 01',
      title: 'Sur-Analyse & Procrastination',
      desc: 'Planifier sans jamais lancer. Le cerveau remplace l\'action par une fausse impression de préparation.',
      tag: 'Correction : Jour 3 & 5'
    },
    {
      id: 2,
      badge: 'PARALYSIE 02',
      title: 'Syndrome de l\'Imposteur Actif',
      desc: 'Peur irrationnelle d\'être démasqué, sabotage inconscient des prix et des opportunités clés.',
      tag: 'Correction : Jour 8 & 9'
    },
    {
      id: 3,
      badge: 'PARALYSIE 03',
      title: 'Dépendance à la Motivation',
      desc: 'Démarrer dans l\'euphorie puis abandonner au premier obstacle dès que l\'adrénaline retombe.',
      tag: 'Correction : Jour 14 & 17'
    }
  ];

  const [diagnostiques, setDiagnostiques] = useState(initialDiagnostiques);

  useEffect(() => {
    const interval = setInterval(() => {
      setDiagnostiques((prev) => {
        const next = [...prev];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // --- CARTE 2 : Machine à Écrire Télémétrie ---
  const telemetrieLogs = [
    "[SYSTEM_INIT] Scan neuro-cognitif en cours...",
    "[BLOCAGE_DÉTECTÉ] Friction à l'exécution : boucle de doute identifiée.",
    "[RECONFIGURATION] Injection du protocole Jour 4 : Règle des 5 secondes.",
    "[RÉSULTAT] Résistance mentale neutralisée. Discipline établie à 98.4%."
  ];

  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = telemetrieLogs[currentLogIndex];
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentLogIndex((prev) => (prev + 1) % telemetrieLogs.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLogIndex]);

  // --- CARTE 3 : Planificateur Protocole Curseur ---
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const [activeDayIndex, setActiveDayIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 10, y: 15, clicking: false, saved: false });

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % 5;
      if (step === 0) {
        // Position repos en haut à droite
        setCursorPos({ x: 82, y: 12, clicking: false, saved: false });
        setActiveDayIndex(null);
      } else if (step === 1) {
        // Déplacement vers le Jeudi (centre de la rangée de boutons)
        setCursorPos({ x: 50, y: 46, clicking: false, saved: false });
      } else if (step === 2) {
        // Clic sur le jour Jeudi
        setCursorPos({ x: 50, y: 46, clicking: true, saved: false });
        setActiveDayIndex(3);
      } else if (step === 3) {
        // Déplacement vers le bouton Enregistrer au centre
        setCursorPos({ x: 50, y: 84, clicking: true, saved: true });
      } else if (step === 4) {
        // Sortie discrète vers la droite
        setCursorPos({ x: 88, y: 84, clicking: false, saved: true });
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="mecanismes" style={{ padding: '90px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="pill-badge" style={{ marginBottom: '16px' }}>
            <Layers size={14} color="var(--cyan-glow)" />
            <span>MÉCANIQUE DE RECONFIGURATION</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Trois Leviers Pour <span className="text-gradient-cyan">Broyer l'Inertie</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '16px', lineHeight: 1.6 }}>
            Ce n'est pas un livre de motivation que l'on lit sur son canapé. C'est un instrument d'entraînement intensif pour transformer ton cerveau en machine d'exécution.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="features-grid">
          
          {/* CARTE 1: Mélangeur Diagnostique */}
          <div className="glass-card feature-interactive-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>Mélangeur Diagnostique</span>
                <Layers size={20} color="var(--cyan-glow)" />
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-dim)', marginBottom: '22px', lineHeight: 1.5 }}>
                Cycle en temps réel des trois verrous mentaux neutralisés par le protocole.
              </p>
            </div>

            {/* Stacked cycling cards with guaranteed in-flow height */}
            <div className="feature-diagnostic-stack">
              {diagnostiques.map((item, index) => {
                const isTop = index === 0;
                const isMiddle = index === 1;
                return (
                  <div
                    key={item.id}
                    className="feature-stacked-card"
                    style={{
                      position: 'absolute',
                      top: `${index * 12}px`,
                      left: '0',
                      right: '0',
                      padding: '18px 16px',
                      borderRadius: '1.25rem',
                      background: isTop ? 'rgba(22, 29, 48, 0.98)' : isMiddle ? 'rgba(15, 20, 35, 0.88)' : 'rgba(9, 13, 24, 0.75)',
                      border: isTop ? '1px solid rgba(95, 212, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: isTop ? '0 16px 36px rgba(0, 0, 0, 0.65), 0 0 25px rgba(95, 212, 255, 0.12)' : 'none',
                      transform: `scale(${1 - index * 0.04})`,
                      zIndex: 3 - index,
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#ff7e5f', fontWeight: 700, letterSpacing: '0.04em' }}>
                        {item.badge}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#5fd4ff', fontWeight: 600 }}>
                        {item.tag}
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '14.5px', color: '#ffffff', marginBottom: '6px', lineHeight: 1.3 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.45 }}>
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CARTE 2: Machine à Écrire Télémétrie */}
          <div className="glass-card feature-interactive-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>Télémétrie d'Exécution</span>
                <Terminal size={20} color="var(--cyan-glow)" />
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-dim)', marginBottom: '22px', lineHeight: 1.5 }}>
                Moniteur live des protocoles de reprogrammation appliqués au cerveau chaque matin.
              </p>
            </div>

            {/* Terminal Window Box */}
            <div className="feature-telemetry-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--cyan-glow)' }}>
                    FLUX EN DIRECT
                  </span>
                </div>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px', color: '#a8b4c8', lineHeight: 1.6, flex: 1, minHeight: '68px' }}>
                <span style={{ color: '#5fd4ff' }}>neuro-core:~$ </span>
                <span>{displayedText}</span>
                <span 
                  style={{ 
                    display: 'inline-block', 
                    width: '7px', 
                    height: '14px', 
                    background: '#7c8bff', 
                    marginLeft: '4px',
                    verticalAlign: 'middle',
                    animation: 'dotPulse 0.8s infinite'
                  }}
                />
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-sub)' }}>
                <span>STATUS: ACTIF</span>
                <span>LATENCE: 1.2ms</span>
              </div>
            </div>
          </div>

          {/* CARTE 3: Planificateur Protocole Curseur */}
          <div className="glass-card feature-interactive-card" style={{ position: 'relative' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>Planificateur Hebdo 21J</span>
                <CalendarCheck size={20} color="var(--cyan-glow)" />
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-dim)', marginBottom: '22px', lineHeight: 1.5 }}>
                Simulation automatisée de la routine quotidienne d'engagement sans interruption.
              </p>
            </div>

            <div className="feature-planner-box" style={{ position: 'relative', overflow: 'hidden' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
                  SEMAINE 02 // FORGER L'HABITUDE
                </span>
                
                {/* 7 Days Grid with adaptive clamp gap */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 'clamp(4px, 1.2vw, 8px)', marginTop: '14px' }}>
                  {days.map((day, idx) => {
                    const isSelected = activeDayIndex === idx;
                    return (
                      <div
                        key={idx}
                        style={{
                          height: '38px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '10px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'clamp(11px, 2.5vw, 12px)',
                          fontWeight: 700,
                          background: isSelected ? 'linear-gradient(135deg, #5fd4ff, #7c8bff)' : 'rgba(255, 255, 255, 0.04)',
                          color: isSelected ? '#060a18' : '#cbd5e1',
                          border: isSelected ? '1px solid #5fd4ff' : '1px solid rgba(255, 255, 255, 0.08)',
                          transform: isSelected && cursorPos.clicking ? 'scale(0.92)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                          boxShadow: isSelected ? '0 0 15px rgba(95, 212, 255, 0.5)' : 'none'
                        }}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Save Button */}
              <div style={{ textAlign: 'center', marginTop: '18px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    fontSize: '11.5px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    background: cursorPos.saved ? '#10b981' : 'rgba(124, 139, 255, 0.15)',
                    color: cursorPos.saved ? '#ffffff' : '#a8b4c8',
                    border: cursorPos.saved ? '1px solid #10b981' : '1px solid rgba(124, 139, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cursorPos.saved ? '✓ Protocole Validé' : 'Enregistrer le Protocole'}
                </div>
              </div>

              {/* Animated SVG Cursor */}
              <div 
                style={{
                  position: 'absolute',
                  left: `${cursorPos.x}%`,
                  top: `${cursorPos.y}%`,
                  pointerEvents: 'none',
                  transition: 'left 0.7s cubic-bezier(0.25, 1, 0.5, 1), top 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
                  zIndex: 10
                }}
              >
                <MousePointer size={20} color="#5fd4ff" fill="#5fd4ff" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.85))' }} />
              </div>
            </div>
          </div>

        </div>

        {/* Bouton d'action directe sous les mécanismes */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            type="button"
            onClick={onOpenCheckout}
            className="btn-magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 30px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 8px 24px rgba(95, 212, 255, 0.25)'
            }}
          >
            <Sparkles size={16} />
            <span>Déverrouiller le Système Complet (10 000 FCFA)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
