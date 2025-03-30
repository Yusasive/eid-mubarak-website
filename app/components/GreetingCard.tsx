"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";

export default function GreetingCard() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);

  const downloadCard = () => {
    const card = document.getElementById("greeting-card");
    if (card) {
      toPng(card).then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "Eid_Greeting_Card.png";
        link.click();
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-10">
      <input
        type="text"
        placeholder="Enter your name"
        className="px-4 py-2 border rounded-md text-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Write your Eid message..."
        className="px-4 py-2 border rounded-md text-black"
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-gold text-white px-4 py-2 rounded-md"
        onClick={() => setShowCard(true)}
      >
        Generate Card
      </button>

      {showCard && (
        <motion.div
          id="greeting-card"
          className="p-6 bg-white text-black rounded-lg shadow-lg mt-4 text-center w-80"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-gold">Eid Mubarak!</h2>
          <p className="mt-2">{message || "Wishing you a joyful Eid!"}</p>
          <p className="mt-4 font-semibold">- {name || "Your Friend"}</p>
          <button
            className="mt-4 bg-green-600 text-white px-3 py-1 rounded-md"
            onClick={downloadCard}
          >
            Download
          </button>
        </motion.div>
      )}
    </div>
  );
}
