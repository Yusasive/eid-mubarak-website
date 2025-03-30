"use client";

import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

export default function Fireworks() {
  const [showConfetti, setShowConfetti] = useState(false);

  const startCelebration = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Stop after 5s
  };

  return (
    <div className="flex flex-col items-center mt-6">
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <motion.button
        className="bg-yellow-500 text-white px-6 py-2 rounded-full text-lg mt-4 shadow-lg hover:bg-yellow-600"
        onClick={startCelebration}
        whileTap={{ scale: 0.9 }}
      >
        Celebrate 🎉
      </motion.button>
    </div>
  );
}
