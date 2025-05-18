import React from 'react';

export default function Dramaturge() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Penelope-Biessy/noce2.png)` }}>
      <div className="p-10 bg-black bg-opacity-60 text-white">

        <br />
        <br />

        <p>Assistante à la mise en scène et dramaturge pendant dix ans, j'ai travaillé principalement aux côtés de James Thierrée, Zabou Breitman, Fabrice Murgia et Luc Bondy.</p>

        <br />
        <p>Expériences significatives (2010-2020) :</p>
        <ul className="list-disc ml-5">
          <li>
            <a href="https://www.chatelet.com/programmation/saison-2022-2023/room/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              Room - James Thierrée - Théâtre de Carouge, Genève
            </a>
          </li>
          <li>
            <a href="https://www.opera-orchestre-montpellier.fr/collections/reinhardt-wagner-frank-thomas-poil-de-carotte-ronfler-cest-chanter/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              Poil de Carotte - Zabou Breitman - Opéra Orchestre National de Montpellier
            </a>
          </li>
          <li>
            <a href="https://sceneweb.fr/zabou-breitman-va-mettre-en-scene-la-dame-de-chez-maxim-a-la-porte-saint-martin-avec-lea-drucker-micha-lescot-et-andre-marcon/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              La Dame de chez Maxim - Zabou Breitman - Théâtre de la Porte Saint Martin, Paris
            </a>
          </li>
          <li>
            <a href="https://compagnieduhanneton.com/fr/creation/la-grenouille-avait-raison" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              La Grenouille avait raison - James Thierrée - Théâtre de Carouge, Genève
            </a>
          </li>
          <li>
            <a href="https://www.artara.be/spectacles/les-enfants-de-jehovah/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              Les Enfants de Jéhovah - Fabrice Murgia - Théâtre de Vidy-Lausanne
            </a>
          </li>
          <li>
            <a href="https://www.festival-automne.com/fr/edition-2010/luc-bondy-chaises" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              Les Chaises - Luc Bondy - Théâtre des Amandiers de Nanterre
            </a>
          </li>
        </ul>

        <br />
        <br />
      </div>
    </div>
  );
}