import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, Sparkles, CheckCircle, ArrowRight, ExternalLink, Headphones, BookOpen, Smartphone } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose }) {
  const checkoutUrl = "https://zpkvlptl.mychariow.shop/21-jours-pour-reprogrammer-son-mental/checkout";

  // Gestion du scroll du body et touche Echap
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

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

  const handleProceedToPayment = () => {
    // Ouverture de la passerelle officielle Chariow dans un nouvel onglet dédié
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

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
        className="checkout-modal-container checkout-express-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête de la modale */}
        <div className="checkout-modal-header">
          <div className="checkout-header-info">
            <div className="checkout-security-badge">
              <span className="checkout-pulse-dot"></span>
              <ShieldCheck size={14} color="#10b981" />
              <span>PASSERELLE OFFICIELLE SÉCURISÉE • CHARIOW SSL 256-BIT</span>
            </div>
            <h3 id="checkout-title" className="checkout-title">
              Finaliser votre Commande
            </h3>
            <p className="checkout-subtitle">
              Accès immédiat au Pack 3 Formats • Dani Mariotte
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

        {/* Corps de la modale — Tunnel Express Haute Conversion */}
        <div className="checkout-modal-body checkout-express-body">
          {/* Fiche récapitulative du produit */}
          <div className="checkout-product-card">
            <div className="checkout-product-thumb">
              <img 
                src="./mockup-3d.png" 
                alt="Pack Officiel 21 Jours pour Reprogrammer son Mental" 
                className="checkout-thumb-img"
                onError={(e) => { e.currentTarget.src = './couverture-haute-definition.jpg'; }}
              />
            </div>
            <div className="checkout-product-details">
              <span className="checkout-tag">PACK COMPLET 3-EN-1</span>
              <h4 className="checkout-product-name">
                21 Jours pour Reprogrammer son Mental Entrepreneurial
              </h4>
              <p className="checkout-product-author">Par Dani Mariotte</p>
              
              <div className="checkout-formats-list">
                <div className="checkout-format-item">
                  <BookOpen size={13} color="#5fd4ff" />
                  <span>Ebook PDF Haute Définition</span>
                </div>
                <div className="checkout-format-item">
                  <Smartphone size={13} color="#7c8bff" />
                  <span>EPUB Universel (Liseuses & Mobiles)</span>
                </div>
                <div className="checkout-format-item">
                  <Headphones size={13} color="#10b981" />
                  <span>Livre Audio MP3 (Voix Studio HD)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc Tarif & Garantie */}
          <div className="checkout-price-box">
            <div className="checkout-price-left">
              <span className="checkout-price-label">Tarif de lancement officiel :</span>
              <div className="checkout-price-amount">
                <span className="price-main">10 000 FCFA</span>
                <span className="price-eur">(15 €)</span>
              </div>
            </div>
            <div className="checkout-price-badge">
              <span>Paiement unique • Accès à vie</span>
            </div>
          </div>

          {/* Opérateurs de paiement supportés */}
          <div className="checkout-operators-box">
            <span className="checkout-operators-title">
              Moyens de paiement acceptés sur la passerelle officielle :
            </span>
            <div className="checkout-operators-grid">
              <span className="operator-pill">🔴 M-Pesa (Vodacom)</span>
              <span className="operator-pill">🔴 Airtel Money</span>
              <span className="operator-pill">🟠 Orange Money</span>
              <span className="operator-pill">🟡 MTN MoMo</span>
              <span className="operator-pill">🌊 Wave</span>
              <span className="operator-pill">💳 Visa / Mastercard</span>
            </div>
          </div>

          {/* Bouton d'action principal magnétique */}
          <div className="checkout-cta-zone">
            <button
              type="button"
              onClick={handleProceedToPayment}
              className="btn-magnetic checkout-launch-btn"
            >
              <span>Accéder au Paiement Sécurisé (10 000 FCFA)</span>
              <ArrowRight size={20} className="checkout-btn-arrow" />
            </button>
            <p className="checkout-cta-hint">
              <Lock size={12} color="#10b981" style={{ display: 'inline', verticalAlign: '-1px', marginRight: '4px' }} />
              Vous allez être redirigé vers l'interface de paiement cryptée officielle Chariow. Vos coordonnées restent 100% protégées.
            </p>
          </div>

          {/* Garanties et réassurance */}
          <div className="checkout-guarantees-grid">
            <div className="guarantee-card">
              <Sparkles size={16} color="#5fd4ff" />
              <div>
                <strong>Livraison Instantanée</strong>
                <p>Téléchargement direct + envoi immédiat sur votre email.</p>
              </div>
            </div>
            <div className="guarantee-card">
              <CheckCircle size={16} color="#10b981" />
              <div>
                <strong>Support 7j/7 Garanti</strong>
                <p>Assistance technique dédiée en cas de besoin.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pied de la modale */}
        <div className="checkout-modal-footer">
          <div className="checkout-footer-badges">
            <div className="checkout-badge-pill">
              <Lock size={13} color="#10b981" />
              <span>Chiffrement Bancaire SSL 256-bit</span>
            </div>
            <div className="checkout-badge-pill">
              <CheckCircle size={13} color="#5fd4ff" />
              <span>Partenaire Officiel Chariow</span>
            </div>
            <div className="checkout-badge-pill">
              <ExternalLink size={13} color="#a855f7" />
              <span>Cette page reste ouverte</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
