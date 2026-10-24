import React from 'react';
import { Check, ShieldCheck, Download, Zap, Lock, Sparkles, BookOpen, FileText, Headphones } from 'lucide-react';

export default function OfferPricing({ onOpenCheckout }) {
  const deliverables = [
    {
      title: "L'Œuvre Complète en 3 Formats Numériques",
      desc: "Format PDF Haute Définition (lecture et fiches) + Format EPUB Universel (liseuses et mobiles) + Format Audio MP3.",
      value: "Valeur : 18 000 FCFA"
    },
    {
      title: "Version Livre Audio MP3 (Narration Studio Henri)",
      desc: "L'intégrale des protocoles narrés avec clarté et impact. Écoutez vos séances quotidiennes en marchant, en voiture ou au sport.",
      value: "Inclus"
    },
    {
      title: "Bonus #1 : Le Traqueur d'Habitudes d'Action",
      desc: "Grille quotidienne imprimable et interactive pour verrouiller tes 21 jours sans briser la chaîne d'exécution.",
      value: "Valeur : 5 000 FCFA"
    },
    {
      title: "Bonus #2 : Le Décodeur d'Urgences Mentales",
      desc: "Fiche réflexe de 2 pages à dégainer en cas de panique, doute paralysant ou envie d'abandonner.",
      value: "Valeur : 5 000 FCFA"
    }
  ];

  return (
    <section id="offre" className="offer-section">
      <div className="container-landing">
        
        {/* En-tête de section */}
        <div className="offer-section-header">
          <div className="pill-badge" style={{ marginBottom: '16px' }}>
            <Zap size={14} color="var(--cyan-glow)" />
            <span>ACCÈS IMMÉDIAT • TARIF DE LANCEMENT</span>
          </div>
          <h2 className="offer-main-title">
            Prends les Commandes de ton <span className="text-gradient-cyan">Cerveau Aujourd'hui</span>
          </h2>
          <p className="offer-main-subtitle">
            Reçois l'ensemble du système de reprogrammation mentale directement sur ton appareil.
          </p>
        </div>

        {/* Boîte Principale d'Offre */}
        <div className="offer-main-box">
          {/* Bandeau Supérieur avec Tarifs */}
          <div className="offer-top-banner">
            <div>
              <span className="offer-edition-tag">
                PACK INTÉGRAL // ÉDITION OFFICIELLE DANI MARIOTTE
              </span>
              <h3 className="offer-box-title">
                21 Jours pour Reprogrammer ton Mental + 3 Bonus
              </h3>
            </div>

            <div className="offer-price-block">
              <div className="offer-striked-price">
                25 000 FCFA / 39 €
              </div>
              <div className="offer-price-row">
                <span className="text-gradient-cyan font-serif offer-amount">
                  10 000 FCFA
                </span>
                <span className="offer-amount-eur">
                  (15 €)
                </span>
              </div>
              <span className="offer-perks-note">
                ✓ Paiement unique • Accès à vie
              </span>
            </div>
          </div>

          {/* Grille : Livrables à gauche / Mockup 3D + Commande à droite */}
          <div className="offer-content-grid">
            
            {/* Colonne Gauche : Livrables & Bonus */}
            <div className="offer-deliverables-list">
              {deliverables.map((item, idx) => (\r\n                <div key={idx} className=\"offer-deliverable-item\">\r\n                  <div className=\"offer-check-icon\">\r\n                    <Check size={16} />\r\n                  </div>\r\n                  <div style={{ flex: 1 }}>\r\n                    <div className=\"offer-item-head\">\r\n                      <span className=\"offer-item-title\">{item.title}</span>\r\n                      <span className=\"offer-item-val\">{item.value}</span>\r\n                    </div>\r\n                    <p className=\"offer-item-desc\">{item.desc}</p>\r\n                  </div>\r\n                </div>\r\n              ))}
            </div>

            {/* Colonne Droite : Mockup 3D Officiel & Bouton de Téléchargement */}
            <div className="offer-checkout-card">
              
              <div style={{ marginBottom: '14px' }}>
                <span className="offer-formats-pill">
                  3 FORMATS LIVRÉS : PDF + EPUB + AUDIO MP3
                </span>
              </div>

              {/* Rendu 3D Officiel du Livre "21 Jours pour reprogrammer ton mental entrepreneurial" */}
              <div className="offer-mockup-wrapper">
                <img 
                  src="/mockup-3d.png" 
                  alt="Livre Officiel 21 Jours pour Reprogrammer ton Mental Entrepreneurial - Dani Mariotte"
                  className="offer-mockup-img"
                  onError={(e) => { e.currentTarget.src = '/couverture-haute-definition.jpg'; }}
                />
              </div>

              <button 
                type="button"
                onClick={onOpenCheckout}
                className="btn-magnetic offer-cta-btn"
                style={{ width: '100%', cursor: 'pointer', border: 'none' }}
              >
                <Download size={22} style={{ flexShrink: 0 }} />
                <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.35 }}>
                  <span style={{ fontWeight: 800 }}>Commander & Télécharger Immédiatement</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, opacity: 0.9, marginTop: '2px' }}>(10 000 FCFA • 15 €)</span>
                </span>
              </button>

              <div className="offer-security-footer">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Lock size={14} color="#10b981" />
                  <span>Paiement 100% Chiffré & Sécurisé Chariow</span>
                </div>

                <div className="offer-payment-badges">
                  <span>📱 Wave</span>
                  <span>🟠 Orange Money</span>
                  <span>🟡 MTN MoMo</span>
                  <span>💳 Visa / Mastercard</span>
                </div>
              </div>
            </div>

          </div>

          {/* Garantie 30 Jours */}
          <div className="offer-guarantee-card">
            <ShieldCheck size={32} color="#10b981" style={{ flexShrink: 0 }} />
            <div className="offer-guarantee-text">
              <strong style={{ color: '#ffffff' }}>Garantie Totale 30 Jours Sans Risque :</strong> Applique le protocole des 21 jours. Si au bout des 21 jours tu n'as pas ressenti un changement radical dans ta discipline et ta capacité à passer à l'action, contacte-nous et tu seras remboursé à 100%, sans poser de questions.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
