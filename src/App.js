import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

import HomeFR from './pages/fr/Home';
import NarrativeDesignerFR from './pages/fr/NarrativeDesigner';
import DramaturgeFR from './pages/fr/Dramaturge';
import RepetitriceFR from './pages/fr/Repetitrice';
import BioFR from './pages/fr/Bio';
import Contact from './pages/Contact';

import HomeEN from './pages/en/Home';
import Playwright from './pages/en/Playwright';
import RehearsalDirector from './pages/en/RehearsalDirector';
import NarrativeDesignerEN from './pages/en/NarrativeDesigner';
import BioEN from './pages/en/Bio';

function AppContent() {
  const [lang, setLang] = useState('fr');
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Language
  const toggleLanguage = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    setLang(newLang);
    navigate(newLang === 'fr' ? '/' : '/en');
  };

  // Toggle Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <header className="p-6 bg-transparent">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-4xl font-light tracking-wide">Pénélope Biessy</Link>

          {/* Burger Menu for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white text-3xl">&#9776;</button>
          </div>

          {/* Overlay when the menu is open */}
          {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

          {/* Slide-out Menu */}
          <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleMenu} className="text-white text-3xl absolute top-4 right-4">&times;</button>
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <Link to={`/${lang}/narrative-designer`} onClick={toggleMenu} className="text-2xl">Narrative Designer</Link>
              <Link to={`/${lang}/${lang === 'fr' ? 'dramaturge' : 'playwright'}`} onClick={toggleMenu} className="text-2xl">
                {lang === 'fr' ? 'Dramaturge' : 'Playwright'}
              </Link>
              <Link to={`/${lang}/${lang === 'fr' ? 'repetitrice' : 'rehearsal-director'}`} onClick={toggleMenu} className="text-2xl">
                {lang === 'fr' ? 'Répétitrice' : 'Rehearsal Director'}
              </Link>
              <Link to={`/${lang}/bio`} onClick={toggleMenu} className="text-2xl">Bio</Link>
              <Link to="/contact" onClick={toggleMenu} className="text-2xl">Contact</Link>
              <button onClick={toggleLanguage} className="text-2xl">
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            <Link to={`/${lang}/narrative-designer`} className="hover:underline">Narrative Designer</Link>
            <Link to={`/${lang}/${lang === 'fr' ? 'dramaturge' : 'playwright'}`} className="hover:underline">
              {lang === 'fr' ? 'Dramaturge' : 'Playwright'}
            </Link>
            <Link to={`/${lang}/${lang === 'fr' ? 'repetitrice' : 'rehearsal-director'}`} className="hover:underline">
              {lang === 'fr' ? 'Répétitrice' : 'Rehearsal Director'}
            </Link>
            <Link to={`/${lang}/bio`} className="hover:underline">Bio</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <button onClick={toggleLanguage} className="hover:underline">
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </nav>
      </header>

      <main className="main-content container mx-auto p-8">
        <Routes>
          <Route path="/" element={<HomeFR />} />
          <Route path="/fr" element={<HomeFR />} />
          <Route path="/fr/narrative-designer" element={<NarrativeDesignerFR />} />
          <Route path="/fr/dramaturge" element={<DramaturgeFR />} />
          <Route path="/fr/repetitrice" element={<RepetitriceFR />} />
          <Route path="/fr/bio" element={<BioFR />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/en" element={<HomeEN />} />
          <Route path="/en/narrative-designer" element={<NarrativeDesignerEN />} />
          <Route path="/en/playwright" element={<Playwright />} />
          <Route path="/en/rehearsal-director" element={<RehearsalDirector />} />
          <Route path="/en/bio" element={<BioEN />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;