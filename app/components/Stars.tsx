"use client";

import { motion } from "framer-motion";

const stars = new Array(15).fill(0).map((_, i) => ({
  id: i,
  x: Math.random() * 100 + "vw",
  y: Math.random() * 50 + "vh",
  delay: Math.random() * 3,
}));

export default function Stars() {
  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-2 h-2 bg-white rounded-full shadow-md"
          style={{ top: star.y, left: star.x }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: star.delay,
          }}
        />
      ))}
    </>
  );
}

