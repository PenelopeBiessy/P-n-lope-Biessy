import React from 'react';

export default function NarrativeDesignerEN() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Penelope-Biessy/noce5.png)` }}
    >
      <div className="p-10 bg-black bg-opacity-60 text-white">
        <br />
        <br />

        <p>Recent Projects:</p>
        <ul className="list-disc ml-5">
          <li>DO THE DANCE - MR Experience at the Opéra Garnier - Produced by Studio Blanca Li</li>
          <li>
            <a href="https://diverssity.io/who-we-are-2/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:underline cursor-pointer transition duration-300 ease-in-out">
              MY MAGIC ROOM - VR game for autistic teenagers produced by DiverSSity
            </a>
          </li>
          <li>FROST FAIR - FullDome film produced by Algorithm</li>
          <li>
            <a href="https://www.dark-euphoria.com/project/limits-vr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:underline cursor-pointer transition duration-300 ease-in-out">
              LIMITS VR - VR experience produced by Tell me the Story & Dark Euphoria
            </a>
          </li>
          <li>AUDEMARS PIGUET VR Experience - Produced by Dreamscape & Albyon</li>
          <li>
            <a href="https://variety.com/2022/digital/festivals/marion-cotillard-coco-chanel-vr-project-rencontres-1235351517/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:underline cursor-pointer transition duration-300 ease-in-out">
              RENCONTRE(S) - MR experience presented at the Venice Film Festival - Produced by Chanel
            </a>
          </li>
        </ul>

        <br />
        <p>UX Design & Storytelling Expert for the Venice Biennale College Cinema in 2021</p>
      </div>
    </div>
  );
}