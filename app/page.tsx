"use client";

import CrescentMoon from "./components/CrescentMoon";
import Stars from "./components/Stars";
import Lantern from "./components/Lantern";
import GreetingCard from "./components/GreetingCard";
import Fireworks from "./components/Fireworks";
import ThemeToggle from "./components/ThemeToggle";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 bg-gradient-to-b from-deepBlue to-black text-white dark:bg-gray-900 dark:text-gray-200 text-center overflow-hidden">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Stars />
      <CrescentMoon />
      <Lantern />
      <motion.h1
        className="text-6xl sm:text-7xl font-extrabold text-gold font-arabic mt-8 drop-shadow-lg"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Eid Mubarak! 🌙✨
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl mt-4 max-w-2xl leading-relaxed text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        May this Eid bring peace, joy, and countless blessings to you and your
        family.
      </motion.p>

      <motion.div
        className="mt-8 p-6 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <GreetingCard />
      </motion.div>
      <Fireworks />
      <motion.footer
        className="mt-12 py-8 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Developed by{" "}
        <a
          href="https://linkedin.com/in/yuusuf-abdullahi-temidayo-yusasive/"
          className="text-gold underline transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yusasive
        </a>
      </motion.footer>
    </div>
  );
}
