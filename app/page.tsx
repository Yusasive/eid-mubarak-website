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
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 bg-deepBlue text-white dark:bg-gray-900 dark:text-gray-200 text-center overflow-hidden">
      <ThemeToggle />
      <CrescentMoon />
      <Stars />
      <Lantern />

      <motion.h1
        className="text-6xl sm:text-7xl font-bold text-gold font-arabic mt-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Eid Mubarak!
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl mt-4 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        May this Eid bring peace, joy, and countless blessings to you and your
        family.
      </motion.p>

      <GreetingCard />
      <Fireworks />

      <footer className="mt-extra-lg text-gray-400 text-sm">
        Built with ❤️ using Next.js & Tailwind
      </footer>
    </div>
  );
}
