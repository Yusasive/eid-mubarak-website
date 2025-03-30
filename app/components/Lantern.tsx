"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lanternAnimation from "../assets/lantern.json";

export default function Lantern() {
  const [lanterns, setLanterns] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    // Generate multiple lanterns at random positions
    const positions = Array.from({ length: 3 }, () => ({
      top: `${Math.random() * 20}vh`,
      left: `${Math.random() * 80 + 10}vw`,
    }));
    setLanterns(positions);
  }, []);

  return (
    <>
      {lanterns.map((pos, index) => (
        <div
          key={index}
          className="absolute w-16 h-16 opacity-80"
          style={{ top: pos.top, left: pos.left }}
        >
          <Lottie animationData={lanternAnimation} loop={true} />
        </div>
      ))}
    </>
  );
}
