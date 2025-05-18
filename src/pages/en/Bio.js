import React from 'react';

export default function Bio() {
  return (
    <div className="p-10 text-white flex flex-col items-center">
      {/* Centered photo */}
      <img 
        src={`${process.env.PUBLIC_URL}/portrait.jpg`} 
        alt="Pénélope Biessy" 
        className="w-60 h-60 rounded-full mb-5 object-cover"
      />
      
      {/* Text below the photo */}
      <div className="text-center max-w-2xl">
        <p className="whitespace-normal leading-relaxed mb-4">
          Pénélope Biessy, narrative designer and dramaturge, has over ten years of experience in the performing arts, 
          collaborating notably with James Thierrée, Zabou Breitman, Luc Bondy, and Fabrice Murgia.
        </p>
        <p className="whitespace-normal leading-relaxed mb-4">
          In 2015, she founded her own company and directed two creations adapted from famous novels.
        </p>
        <p className="whitespace-normal leading-relaxed mb-4">
          In 2020, she discovered virtual reality by joining Atelier Daruma, a studio specialized in immersive storytelling, 
          where she contributed to the creation of Rencontre(s), a VR experience for Chanel, presented at the 79th Venice International Film Festival.
        </p>
        <p className="whitespace-normal leading-relaxed mb-4">
          Today, Pénélope works as a narrative designer alongside Allison Crank on a VR video game for autistic teenagers, 
          produced by the Swiss studio DiverSSity. She also collaborates with Audemars Piguet, the studios Dark Euphoria and Tell Me The Story, 
          and the Studio Blanca Li, where she deepens her research on immersive storytelling by exploring augmented bodies.
        </p>
      </div>
    </div>
  );
}