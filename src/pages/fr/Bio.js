import React from 'react';

export default function Bio() {
  return (
    <div className="p-10 text-white flex flex-col items-center">
      {/* Photo centrée */}
      <img 
        src={`${process.env.PUBLIC_URL}/Penelope-Biessy/portrait.jpg`} 
        alt="Pénélope Biessy" 
        className="w-60 h-60 rounded-full mb-5 object-cover"
      />
      
      {/* Texte sous la photo */}
      <div className="text-center max-w-2xl">
        <p className="whitespace-normal leading-relaxed mb-4">
          Pénélope Biessy, narrative designer et dramaturge, possède plus de dix ans d’expérience dans le spectacle vivant, 
          en collaborant notamment avec James Thierrée, Zabou Breitman, Luc Bondy et Fabrice Murgia.
        </p>
        <p className="whitespace-normal leading-relaxed mb-4">
          En 2015, elle fonde sa compagnie et met en scène deux créations adaptées de romans à succès.
        </p>
        <p className="whitespace-normal leading-relaxed mb-4">
          En 2020, elle découvre la réalité virtuelle en rejoignant l’Atelier Daruma, studio spécialisé dans les récits immersifs, 
          où elle contribue à la création de Rencontre(s), une expérience VR pour la Maison Chanel, présentée à la 79e Mostra de Venise.
        </p>
        <p className="whitespace-normal leading-relaxed mb-4">
          Aujourd’hui, Pénélope travaille comme narrative designer aux côtés d’Allison Crank sur un jeu vidéo en réalité virtuelle 
          destiné aux adolescents autistes, produit par le studio suisse DiverSSity. Elle collabore également avec 
          Audemars Piguet ainsi qu’avec les studios Dark Euphoria, Tell Me The Story et le Studio Blanca Li au sein duquel elle poursuit ses recherches sur la narration immersive et les corps augmentés.
        </p>
      </div>
    </div>
  );
}
