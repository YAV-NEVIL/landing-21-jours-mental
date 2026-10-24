import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, ShieldCheck, Download, Volume2, VolumeX, Play, Pause, 
  CheckCircle, Maximize2, ZoomIn, ZoomOut, RotateCcw, X, BookOpen, Headphones, 
  FileText, Layers, Eye
} from 'lucide-react';

export default function Hero({ onOpenCheckout }) {
  // --- ÉTATS DU LECTEUR AUDIO RÉEL ---
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(91); // Durée approximative initiale (01:31)
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // --- ÉTATS DE L'AFFICHAGE DU LIVRE ---
  const [activeTab, setActiveTab] = useState('3d'); // '3d' | 'cover' | 'bundle'
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [tiltStyle, setTiltStyle] = useState({});

  // Synchronisation et Autoplay avec l'élément audio HTML5
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 1.0;
    audio.muted = false;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    let cleanedUp = false;

    const cleanupListeners = () => {
      if (cleanedUp) return;
      cleanedUp = true;
      document.removeEventListener('pointerdown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('touchend', handleFirstInteraction);
      document.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    const handleFirstInteraction = () => {
      if (!audio) return;
      audio.muted = false;
      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          cleanupListeners();
        }).catch((err) => {
          console.warn("Attente d'une interaction utilisateur autorisée:", err);
        });
      }
    };

    // 1. Tenter la lecture automatique immédiate (fonctionne directement si autorisé par le navigateur)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // 2. Si la politique stricte du navigateur bloque l'autoplay sans geste (Chrome/Safari mobile),
          // on écoute les premiers gestes physiques de l'utilisateur (toucher, clic, touche clavier)
          document.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
          document.addEventListener('touchstart', handleFirstInteraction, { passive: true });
          document.addEventListener('touchend', handleFirstInteraction, { passive: true });
          document.addEventListener('click', handleFirstInteraction, { passive: true });
          window.addEventListener('keydown', handleFirstInteraction, { passive: true });
        });
    }

    return () => {
      cleanupListeners();
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Lecture bloquée par le navigateur:", err);
      });
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newFraction = Math.max(0, Math.min(1, clickX / rect.width));
    audio.currentTime = newFraction * duration;
    setCurrentTime(audio.currentTime);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Effet de perspective 3D au survol de la souris
  const handleMouseMove = (e) => {
    if (activeTab !== '3d') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotY = (x / (rect.width / 2)) * 14 - 10;
    const rotX = -(y / (rect.height / 2)) * 10 + 4;
    setTiltStyle({
      transform: `rotateY(${rotY}deg) rotateX(${rotX}deg) scale(1.03)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({});
  };

  // Fermeture modale avec Échap
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsZoomModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="hero-section" id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Vrai élément audio HTML5 avec AutoPlay */}
      <audio ref={audioRef} src="./audio/extrait-jour-1.mp3" preload="auto" autoPlay playsInline />

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div className="hero-grid" style={{ alignItems: 'center' }}>
          
          {/* ========================================================
              COLONNE GAUCHE : TITRE, ARGUMENTS & LECTEUR AUDIO RÉEL
             ======================================================== */}
          <div>
            <div className="pill-badge" style={{ marginBottom: '22px' }}>
              <span className="pulse-dot"></span>
              <span>MÉTHODE OFFICIELLE • PACK 3 FORMATS (PDF + EPUB + AUDIO)</span>
            </div>

            <h1 className="hero-title" style={{ margin: '0 0 20px 0' }}>
              <span style={{ display: 'block', fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)', fontWeight: 800, color: '#f8fafc', lineHeight: 1.15 }}>
                Reprogrammer le mental au-delà de
              </span>
              <span 
                className="font-serif text-gradient-cyan" 
                style={{ 
                  display: 'block', 
                  fontSize: 'clamp(3.8rem, 7.8vw, 6.2rem)', 
                  fontWeight: 400, 
                  fontStyle: 'italic', 
                  lineHeight: 0.95,
                  marginTop: '8px'
                }}
              >
                Toute Limite.
              </span>
            </h1>

            <p className="hero-subtitle">
              Le protocole chirurgical en 21 étapes quotidiennes pour désintégrer la procrastination, neutraliser le syndrome de l'imposteur et forger la résilience d'un entrepreneur inarrêtable.
            </p>

            {/* Bouton CTA et réassurance */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                onClick={onOpenCheckout} 
                className="btn-magnetic hero-main-cta"
                style={{ cursor: 'pointer', border: 'none' }}
              >
                <Download size={20} style={{ flexShrink: 0 }} />
                <span>Télécharger le Pack 3 Formats (10 000 FCFA)</span>
                <ArrowRight size={18} style={{ flexShrink: 0 }} />
              </button>

              <div className="hero-badges-row">
                <span className="hero-badge-item">
                  <ShieldCheck size={16} color="#5fd4ff" /> 10 000 FCFA (15 €) • Paiement Sécurisé Chariow
                </span>
                <span className="hero-badge-item">
                  <CheckCircle size={16} color="#10b981" /> <strong>Inclus :</strong> PDF + EPUB + Livre Audio MP3
                </span>
              </div>
            </div>

            {/* ========================================================
                MICRO-LECTEUR AUDIO HAUTE FIDÉLITÉ (BRANCHE SUR LE VRAI MP3)
               ======================================================== */}
            <div className="hero-audio-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <Headphones size={17} color="#5fd4ff" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#e6eaf4', fontWeight: 600, letterSpacing: '0.04em' }}>
                    EXTRAIT AUDIO OFFICIEL : JOUR 1
                  </span>
                  {isPlaying && (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(95, 212, 255, 0.15)',
                      border: '1px solid rgba(95, 212, 255, 0.35)',
                      fontSize: '10px',
                      color: '#5fd4ff',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700
                    }}>
                      <span className="pulse-dot" style={{ width: '6px', height: '6px', backgroundColor: '#5fd4ff' }}></span>
                      EN LECTURE
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#5fd4ff', fontWeight: 700 }}>
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                  <button
                    type="button"
                    onClick={toggleMute}
                    style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '2px' }}
                    title={isMuted ? 'Activer le son' : 'Couper le son'}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>
              </div>

              {/* Contrôles du player */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                  type="button"
                  onClick={togglePlay}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #5fd4ff, #7c8bff)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#060a18',
                    flexShrink: 0,
                    boxShadow: '0 6px 20px rgba(95, 212, 255, 0.45)',
                    transition: 'transform 0.2s ease'
                  }}
                  title={isPlaying ? 'Mettre en pause' : 'Écouter l\'extrait'}
                >
                  {isPlaying ? (
                    <Pause size={20} fill="#060a18" />
                  ) : (
                    <Play size={20} fill="#060a18" style={{ marginLeft: '3px' }} />
                  )}
                </button>

                {/* Waveform Equalizer cliquable pour naviguer dans l'audio */}
                <div 
                  onClick={handleSeek}
                  className="hero-waveform-bar"
                  title="Cliquer pour naviguer dans l'audio"
                >
                  {[30, 60, 90, 45, 100, 75, 40, 85, 60, 95, 50, 80, 65, 90, 35, 75, 85, 95, 55, 70, 85, 60, 40].map((h, i) => {
                    const barProgress = (i / 23) * 100;
                    const isPlayed = barProgress <= progressPercent;
                    return (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: isPlaying ? `${Math.max(20, (h * (0.6 + Math.sin((i + currentTime * 5) * 0.4) * 0.4)))}%` : `${h * 0.5}%`,
                          background: isPlayed ? 'linear-gradient(180deg, #5fd4ff, #7c8bff)' : 'rgba(255, 255, 255, 0.16)',
                          borderRadius: '9999px',
                          transition: 'height 0.12s ease, background 0.15s ease'
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Sous-titre rassurant */}
              <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
                <span>🎙️ Narration Studio : Henri (Microsoft Neural HD)</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>● Audio MP3 inclus</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              COLONNE DROITE : LE GRAND MOCKUP DU LIVRE & COUVERTURE ZOOMABLE
             ======================================================== */}
          <div className="hero-right-col">
            
            {/* Halo néon arrière */}
            <div className="hero-halo-orb" />

            {/* Conteneur Box Agrandie & Impressionnante */}
            <div className="hero-showcase-box">
              
              {/* Entête avec Badges & Sélecteur d'onglets */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--cyan-glow)', letterSpacing: '0.08em', fontWeight: 700 }}>
                  ÉDITION OFFICIELLE // 2026
                </span>
                <span 
                  style={{ 
                    padding: '4px 12px', 
                    borderRadius: '9999px', 
                    background: 'rgba(239, 68, 68, 0.16)', 
                    border: '1px solid rgba(239, 68, 68, 0.45)',
                    color: '#ff6b6b',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700
                  }}
                >
                  MANUEL D'ACTION
                </span>
              </div>

              {/* Onglets de vue pour admirer le livre officiel */}
              <div className="view-tabs">
                <button
                  type="button"
                  className={`view-tab-btn ${activeTab === '3d' ? 'active' : ''}`}
                  onClick={() => setActiveTab('3d')}
                >
                  <BookOpen size={14} />
                  <span>Livre 3D</span>
                </button>
                <button
                  type="button"
                  className={`view-tab-btn ${activeTab === 'cover' ? 'active' : ''}`}
                  onClick={() => setActiveTab('cover')}
                >
                  <Eye size={14} />
                  <span>Couverture HD</span>
                </button>
                <button
                  type="button"
                  className={`view-tab-btn ${activeTab === 'bundle' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bundle')}
                >
                  <Layers size={14} />
                  <span>Mockup Studio</span>
                </button>
              </div>

              {/* ==============================================
                  AFFICHAGE CENTRAL : VUE 3D / COUVERTURE / MOCKUP STUDIO
                 ============================================== */}
              <div 
                className="book-stage-3d"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsZoomModalOpen(true)}
                title="Cliquer pour inspecter et zoomer la couverture en Haute Définition"
              >
                {activeTab === '3d' && (
                  <div className="book-3d-card" style={tiltStyle}>
                    {/* Tranche supérieure */}
                    <div className="book-top-pages"></div>
                    
                    {/* Couverture face avant */}
                    <div className="book-cover-front">
                      <img 
                        src="./couverture-haute-definition.jpg" 
                        alt="Couverture Officielle Haute Résolution - 21 Jours pour Reprogrammer ton Mental Entrepreneurial"
                        onError={(e) => { e.currentTarget.src = './mockup-3d.png'; }}
                      />
                      <div className="book-cover-gloss"></div>
                    </div>

                    {/* Tranche latérale des pages (épaisseur visible) */}
                    <div className="book-side-pages"></div>
                  </div>
                )}

                {activeTab === 'cover' && (
                  <div style={{ width: '100%', maxWidth: '350px', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.85)', border: '1px solid rgba(95, 212, 255, 0.4)' }}>
                    <img 
                      src="./couverture-haute-definition.jpg" 
                      alt="Couverture Pleine Page Haute Définition"
                      style={{ width: '100%', display: 'block', objectFit: 'contain' }}
                      onError={(e) => { e.currentTarget.src = './mockup-3d.png'; }}
                    />
                  </div>
                )}

                {activeTab === 'bundle' && (
                  <div style={{ width: '100%', borderRadius: '18px', overflow: 'hidden', textAlign: 'center' }}>
                    <img 
                      src="./mockup-3d.png" 
                      alt="Mockup 3D Studio Officiel - 21 Jours pour Reprogrammer ton Mental"
                      style={{ width: '100%', maxHeight: '430px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.85))' }}
                      onError={(e) => { e.currentTarget.src = './couverture-haute-definition.jpg'; }}
                    />
                  </div>
                )}

                {/* Bouton d'action Loupe / Zoom */}
                <button
                  type="button"
                  className="zoom-inspect-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomModalOpen(true);
                  }}
                >
                  <Maximize2 size={16} />
                  <span>Inspecter en Haute Définition (Zoom 4K)</span>
                </button>
              </div>

              {/* Spécifications des 3 Formats sous le livre */}
              <div className="hero-formats-grid">
                <div className="hero-format-badge">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#5fd4ff', marginBottom: '2px' }}>
                    <FileText size={15} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700 }}>PDF HD</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>Lecture & Fiches</div>
                </div>

                <div className="hero-format-badge">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#7c8bff', marginBottom: '2px' }}>
                    <BookOpen size={15} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700 }}>EPUB</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>Liseuses & Mobiles</div>
                </div>

                <div className="hero-format-badge">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#10b981', marginBottom: '2px' }}>
                    <Headphones size={15} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700 }}>AUDIO MP3</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>Voix Studio Henri</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ========================================================
          MODALE DE ZOOM HAUTE DÉFINITION (PLEIN ÉCRAN)
         ======================================================== */}
      {isZoomModalOpen && (
        <div className="modal-zoom-overlay" onClick={() => setIsZoomModalOpen(false)}>
          {/* Header de la modale */}
          <div className="modal-zoom-header" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span className="pulse-dot"></span>
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#f8fafc' }}>
                  Couverture Officielle — Inspection Ultra-HD
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  Résolution Native : 1600 × 2560 px • Format KDP / Chariow
                </span>
              </div>
            </div>

            {/* Barre d'outils de Zoom */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div className="modal-zoom-toolbar">
                <button
                  type="button"
                  className="modal-tool-btn"
                  onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.25))}
                  title="Zoomer en arrière"
                >
                  <ZoomOut size={18} />
                </button>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#5fd4ff', minWidth: '45px', textAlign: 'center' }}>
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  className="modal-tool-btn"
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                  title="Zoomer en avant"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  type="button"
                  className="modal-tool-btn"
                  onClick={() => setZoomLevel(1)}
                  title="Réinitialiser le zoom"
                >
                  <RotateCcw size={16} />
                </button>
              </div>

              {/* Bouton Fermer */}
              <button
                type="button"
                onClick={() => setIsZoomModalOpen(false)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                title="Fermer (Échap)"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Corps de la modale avec image zoomable */}
          <div className="modal-zoom-body" onClick={(e) => e.stopPropagation()}>
            <img
              src="./couverture-haute-definition.jpg"
              alt="Couverture Agrandie Haute Définition"
              className="modal-zoom-image"
              style={{
                transform: `scale(${zoomLevel})`
              }}
            />
          </div>

          {/* Footer de la modale avec CTA direct */}
          <div style={{ padding: '16px 30px', background: 'rgba(8, 12, 22, 0.8)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={(e) => e.stopPropagation()}>
            <span style={{ fontSize: '13px', color: '#94a3b8' }}>
              Auteur : <strong>Dani Mariotte</strong> • Édition 2026 • Inclus dans le Pack 3 Formats
            </span>
            <button
              type="button"
              onClick={() => {
                setIsZoomModalOpen(false);
                if (onOpenCheckout) onOpenCheckout();
              }}
              className="btn-magnetic"
              style={{ padding: '10px 24px', fontSize: '13.5px', cursor: 'pointer', border: 'none' }}
            >
              <Download size={16} />
              <span>Commander le Pack Complet (10 000 FCFA)</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
