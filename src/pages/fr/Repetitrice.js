import React from 'react';

export default function Repetitrice() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/scenesdechasse.jpg)` }}>
      <div className="p-10 text-white bg-transparent">
        <p>Les artistes que j'accompagne dans la mémorisation et la mise en jeu :</p>

        <br />

        <ul className="list-disc ml-5">
          <li>François Cluzet</li>
          <li>Micha Lescot</li>
          <li>Dominique Reymond</li>
          <li>André Marcon</li>
          <li>Aurore Clément</li>
          <li>Amélie Tatti</li>
          <li>Emilie Gavois-Kahn</li>
          <li>Anggun</li>
          <li>Zabou Breitman</li>
          <li>Mélanie Doutey</li>
          <li>Zahia Dehar</li>
        </ul>

        <br />

        <p>2017 : répétitrice sur la série PARIS ETC (Les Films du Kiosque / Canal +) réalisée par Zabou Breitman.</p>
      </div>
    </div>
  );
}