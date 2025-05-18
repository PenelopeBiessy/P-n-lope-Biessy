import React from 'react';

export default function NarrativeDesigner() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/noce5.png')" }}>
      <div className="p-10 bg-black bg-opacity-60 text-white">

        <br />
        <br />

        <p>Projets récents :</p>
        <ul className="list-disc ml-5">
          <li>DO THE DANCE - Expérience en MR à l'Opéra Garnier - Produced by Studio Blanca Li</li>
          <li>
            <a href="https://diverssity.io/who-we-are-2/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:underline cursor-pointer transition duration-300 ease-in-out">
              MY MAGIC ROOM - Jeu en VR pour adolescents autistes produit par DiverSSity
            </a>
          </li>
          <li>FROST FAIR - Film FullDome produit par Algorithm</li>
          <li>
            <a href="https://www.dark-euphoria.com/project/limits-vr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:underline cursor-pointer transition duration-300 ease-in-out">
              LIMITS VR - Expérience VR produite par Tell me the Story & Dark Euphoria
            </a>
          </li>
          <li>AUDEMARS PIGUET VR Experience - Produit par Dreamscape & Albyon</li>
          <li>
            <a href="https://variety.com/2022/digital/festivals/marion-cotillard-coco-chanel-vr-project-rencontres-1235351517/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:underline cursor-pointer transition duration-300 ease-in-out">
              RENCONTRE(S) - Expérience en MR présentée à la Mostra de Venise - Produite par Chanel
            </a>
          </li>
        </ul>

        <br />
        <br />
        <p>Experte UX Design & Storytelling pour la Biennale College Cinema de Venise en 2021</p>
      </div>
    </div>
  );
}