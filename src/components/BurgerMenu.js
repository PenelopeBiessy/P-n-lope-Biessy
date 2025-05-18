import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BurgerMenu({ lang, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden relative">
      <button onClick={toggleMenu} className="text-white text-3xl p-2">
        ☰
      </button>
      {isOpen && (
        <div className="absolute right-0 top-12 bg-black text-white p-4 rounded shadow-lg">
          <Link to={`/${lang}/narrative-designer`} onClick={toggleMenu} className="block p-2">Narrative Designer</Link>
          <Link to={`/${lang}/${lang === 'fr' ? 'dramaturge' : 'playwright'}`} onClick={toggleMenu} className="block p-2">
            {lang === 'fr' ? 'Dramaturge' : 'Playwright'}
          </Link>
          <Link to={`/${lang}/${lang === 'fr' ? 'repetitrice' : 'rehearsal-director'}`} onClick={toggleMenu} className="block p-2">
            {lang === 'fr' ? 'Répétitrice' : 'Rehearsal Director'}
          </Link>
          <Link to={`/${lang}/bio`} onClick={toggleMenu} className="block p-2">Bio</Link>
          <Link to="/contact" onClick={toggleMenu} className="block p-2">Contact</Link>
          <button onClick={toggleLanguage} className="block p-2 mt-2 border-t border-gray-700">
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      )}
    </div>
  );
}