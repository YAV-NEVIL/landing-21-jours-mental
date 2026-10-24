import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Zap, ArrowRight } from 'lucide-react';

export default function FAQAssistant({ onOpenCheckout }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Combien de temps par jour nécessite le protocole ?",
      a: "15 minutes par jour suffisent amplement : 5 minutes pour assimiler le principe choc du matin et déconstruire l'illusion du jour, et 10 minutes pour exécuter l'action concrète obligatoire."
    },
    {
      q: "Sous quel format vais-je recevoir le livre numérique ?",
      a: "Dès validation du paiement, tu reçois un accès immédiat pour télécharger le pack : le livre complet en format PDF Haute Résolution (mise en page premium) et en format EPUB (parfaitement optimisé pour smartphones, tablettes et liseuses type Kindle/Kobo), ainsi que les bonus imprimables."
    },
    {
      q: "Est-ce adapté si j'ai déjà lu beaucoup de livres sans passer à l'action ?",
      a: "C'est précisément pour toi qu'il a été conçu. Les livres classiques stimulent l'intellect sans reprogrammer les réflexes de fuite. Ici, chaque page est calibrée comme un électrochoc comportemental : aucune théorie vide, que du conditionnement par l'action mesurable."
    },
    {
      q: "Comment fonctionne le paiement depuis l'Afrique ou l'international ?",
      a: "Le paiement est instantané et 100% sécurisé via la passerelle officielle Chariow. Tu peux payer directement en FCFA avec ton compte Mobile Money (Orange Money, MTN MoMo, Wave, Moov) ou en euros/dollars par Carte Bancaire Visa / Mastercard."
    },
    {
      q: "Que se passe-t-il si je saute un jour pendant le challenge ?",
      a: "Le livre intègre un protocole d'urgence spécifique pour éviter la spirale du découragement. Tu apprends à relancer le processus immédiatement sans t'autoflageller, afin de sanctuariser ton momentum."
    }
  ];

  return (
    <section id="faq" style={{ padding: '90px 0', position: 'relative' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="pill-badge" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} color="var(--cyan-glow)" />
            <span>RÉPONSES CLAIRES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Questions Fréquentes
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  background: isOpen ? 'rgba(18, 25, 45, 0.9)' : 'rgba(11, 15, 26, 0.7)',
                  border: isOpen ? '1px solid rgba(95, 212, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="faq-btn"
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? '#5fd4ff' : '#94a3b8'
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Réassurance après la FAQ */}
        <div 
          style={{
            marginTop: '50px',
            textAlign: 'center',
            padding: '32px 24px',
            borderRadius: '2rem',
            background: 'linear-gradient(180deg, rgba(16, 22, 40, 0.7) 0%, rgba(9, 13, 24, 0.9) 100%)',
            border: '1px solid rgba(95, 212, 255, 0.25)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.45)'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
            Prêt à faire partie de ceux qui exécutent ?
          </h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-dim)', maxWidth: '550px', margin: '0 auto 20px', lineHeight: 1.5 }}>
            Paiement direct sécurisé par Mobile Money (Wave, Orange, MTN, Moov) ou Carte Bancaire. Téléchargement instantané du pack complet.
          </p>
          <button
            type="button"
            onClick={onOpenCheckout}
            className="btn-magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 8px 25px rgba(95, 212, 255, 0.35)'
            }}
          >
            <Zap size={16} />
            <span>Obtenir l'Accès Immédiat (10 000 FCFA)</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
