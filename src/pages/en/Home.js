import React, { useState, useEffect } from 'react';

const texts = [
  "I am a narrative designer and independent playwright for live performances, XR experiences, and video games.",
  "I craft immersive stories in collaboration with cultural institutions, studios, and luxury brands."
];

export default function Home() {
  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prev) => prev + texts[currentTextIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 50); // Vitesse de frappe (en ms)

    if (charIndex === texts[currentTextIndex].length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setText("");
        setCharIndex(0);
      }, 1000); // Temps de pause entre les phrases
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, currentTextIndex]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Penelope-Biessy/noce6.png)` }}
    >
      <div className="p-10 bg-transparent text-white">
        <p className="text-xl font-light">
          {text}
          <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </p>
      </div>
    </div>
  );
}