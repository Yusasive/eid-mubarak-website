"use client";

import { MoonIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function CrescentMoon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="absolute top-10 left-10"
    >
      <MoonIcon className="w-24 h-24 text-yellow-300 drop-shadow-lg" />
    </motion.div>
  );
}
