"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";

export default function GreetingCard() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const downloadCard = () => {
    const card = document.getElementById("greeting-card");
    if (card) {
      toPng(card).then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "Eid_Greeting_Card.png";
        link.click();
        setIsDownloaded(true);
        setTimeout(() => setIsDownloaded(false), 3000);
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-10">
      <input
        type="text"
        placeholder="Enter your name"
        className="px-4 py-2 w-80 border rounded-md bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Write your Eid message..."
        className="px-4 py-2 w-80 border rounded-md bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <motion.button
        className="bg-gold text-white px-6 py-2 rounded-md shadow-lg hover:bg-yellow-600 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowCard(true)}
      >
        Generate Card
      </motion.button>

      {showCard && (
        <motion.div
          id="greeting-card"
          className="p-6 w-80 rounded-lg shadow-lg mt-4 text-center bg-white/20 backdrop-blur-xl border border-white/30 text-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gold drop-shadow-md">
            ✨ Eid Mubarak! ✨
          </h2>
          <p className="mt-2 text-gray-200">
            {message || "Wishing you a joyful and blessed Eid!"}
          </p>
          <p className="mt-4 font-semibold text-white">
            - {name || "Your Friend"}
          </p>

          <motion.button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-green-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCard}
          >
            Download 🎉
          </motion.button>

          {isDownloaded && (
            <motion.p
              className="mt-2 text-green-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Card downloaded successfully!
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  );
}
