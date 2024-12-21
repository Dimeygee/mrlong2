"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";

const routes: { [key: string]: string } = {
  "/": "Home",
  "/progenius": "Progenius",
  "/dartspay": "Dartspay",
  "/rapilo": "Rapilo",
  "/rocketmarketing": "Rocketmarketing",
  "/valorexchange": "Valorexchange",
  "/athlerse": "Athlerse",
};

interface Dimensions {
  width: number | null;
  height: number | null;
}

const anim = (variants: Variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

interface CurveProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Curve({ children, backgroundColor }: CurveProps) {
   const router = useRouter();
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />
      <motion.p className="route" {...anim(text)}>
       {routes[router.route]}
      </motion.p>
     
      {children}
    </div>
  );
}

interface SVGProps {
  height: number;
  width: number;
}

const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)} width={width} height={height}>
      <motion.path
        {...anim(curve(initialPath, targetPath))}
        fill="currentColor"
      />
    </motion.svg>
  );
};


