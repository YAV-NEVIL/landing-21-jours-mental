import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveFeatures from './components/InteractiveFeatures';
import Manifesto from './components/Manifesto';
import ProtocolStack from './components/ProtocolStack';
import OfferPricing from './components/OfferPricing';
import FAQAssistant from './components/FAQAssistant';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import './App.css';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="relative min-h-screen text-[#f8fafc] bg-[#05070d] selection:bg-[#5fd4ff]/30 selection:text-white">
      {/* Background Cyber Glowing Orbs */}
      <div className="cyber-bg">
        <div className="cyber-glow-1"></div>
        <div className="cyber-glow-2"></div>
        <div className="cyber-glow-3"></div>
      </div>

      {/* Floating Morphing Navbar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Section 1 : Hero avec Titre Cinématique & Mockup 3D */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* Section 2 : Fonctionnalités & Artefacts Interactifs (Mélangeur, Télémétrie, Planificateur) */}
        <InteractiveFeatures onOpenCheckout={handleOpenCheckout} />

        {/* Section 3 : Manifeste Haute Intensité */}
        <Manifesto onOpenCheckout={handleOpenCheckout} />

        {/* Section 4 : Protocole Sticky & Cartes empilées 21 Jours */}
        <ProtocolStack onOpenCheckout={handleOpenCheckout} />

        {/* Section 5 : Offre Complète, Mockup & Paiement Sécurisé Chariow */}
        <OfferPricing onOpenCheckout={handleOpenCheckout} />

        {/* Section 6 : FAQ Interactive */}
        <FAQAssistant onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Section 7 : Pied de Page */}
      <Footer onOpenCheckout={handleOpenCheckout} />

      {/* Modale de Paiement Intégrée Chariow (Reste 100% sur la même page) */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={handleCloseCheckout} 
      />
    </div>
  );
}
