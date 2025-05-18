import React from 'react';

export default function Contact() {
  return (
    <div className="p-10 bg-black text-white">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p>Email: <a href="mailto:penelopebiessy@gmail.com" className="text-blue-400">penelopebiessy@gmail.com</a></p>
      <p>
        <a href="https://www.linkedin.com" className="text-blue-400" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://www.instagram.com" className="text-blue-400 ml-2" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>

      <form className="mt-4">
        <input type="text" placeholder="Nom" className="w-full p-2 mb-2 bg-black text-white border border-white" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-2 bg-black text-white border border-white" />
        <textarea placeholder="Message" className="w-full p-2 mb-2 bg-black text-white border border-white"></textarea>
        <button type="submit" className="w-full p-2 bg-gray-700 text-white hover:bg-gray-600">Envoyer</button>
      </form>
    </div>
  );
}