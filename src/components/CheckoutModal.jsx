import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, Loader2, Sparkles, CheckCircle } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const checkoutUrl = "https://zpkvlptl.mychariow.shop/21-jours-pour-reprogrammer-son-mental/checkout";

  // Gestion du scroll du body et touche Echap
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="checkout-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      <div 
        className="checkout-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête de la modale */}
        <div className="checkout-modal-header">
          <div className="checkout-header-info">
            <div className="checkout-security-badge">
              <span className="checkout-pulse-dot"></span>
              <ShieldCheck size={14} color="#10b981" />
              <span>PAIEMENT DIRECT SÉCURISÉ • CHARIOW SSL 256-BIT</span>
            </div>
            <h3 id="checkout-title" className="checkout-title">
              21 Jours pour Reprogrammer son Mental
            </h3>
            <p className="checkout-subtitle">
              Pack 3 Formats (PDF + EPUB + Audio MP3) • <strong style={{ color: '#5fd4ff' }}>10 000 FCFA</strong> (15 €)
            </p>
          </div>

          <div className="checkout-header-actions">

            <button 
              type="button"
              onClick={onClose}
              className="checkout-close-btn"
              aria-label="Fermer la fenêtre de commande"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Corps de la modale avec Iframe Chariow */}
        <div className="checkout-modal-body">
          {isLoading && (
            <div className="checkout-loader-wrapper">
              <div className="checkout-spinner-box">
                <Loader2 size={36} className="checkout-spinner-icon" />
                <span className="checkout-loader-text">Chargement de la commande sécurisée...</span>
                <span className="checkout-loader-sub">Connexion à la passerelle officielle Chariow</span>
              </div>
            </div>
          )}

          <iframe
            src={checkoutUrl}
            title="Formulaire de commande et paiement sécurisé Chariow"
            className="checkout-iframe"
            onLoad={() => setIsLoading(false)}
            allow="payment; clipboard-write; camera"
          />
        </div>

        {/* Pied de la modale avec réassurance */}
        <div className="checkout-modal-footer">
          <div className="checkout-footer-badges">
            <div className="checkout-badge-pill">
              <Lock size={13} color="#10b981" />
              <span>Paiement 100% Chiffré</span>
            </div>
            <div className="checkout-badge-pill">
              <CheckCircle size={13} color="#5fd4ff" />
              <span>Mobile Money (Wave, Orange, MTN, Moov) & CB</span>
            </div>
            <div className="checkout-badge-pill">
              <Sparkles size={13} color="#a855f7" />
              <span>Livraison Instantanée par Email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
