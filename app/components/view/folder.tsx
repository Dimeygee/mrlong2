/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TextWrapper from "./textwrapper";

const generateRandomGradient = () => {
  const colors = [
    "#FF5F43",
    "#36D1DC",
    "#5B86E5",
    "#F2994A",
    "#BB6BD9",
    "#8E2DE2",
    "#3A1C71",
    "#FF5C5C",
  ];
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
};

export const WorkFolder = ({ work, key }: { work: any; key: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const gradients = useMemo(
    () => ({
      gradient1: generateRandomGradient(),
      gradient2: generateRandomGradient(),
      gradient3: generateRandomGradient(),
    }),
    []
  );

  return (
    <motion.div
      key={key}
      className="relative h-[208px] backdrop-blur-[22.5px] bg-white/[0.05] rounded-[25px] group cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative flex flex-col h-full justify-center z-[200] bg-[#12141d] px-[50px] rounded-[25px] border-[1px] border-white/[0.3]"
        initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
        animate={{ rotateX: isHovered ? -45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="absolute top-[20px] text-lg text-white/[0.5] font-outfit tracking-[-0.36px] leading-[25.2px]">
          {work.id}
        </span>
        <div className="flex md:flex-row flex-col justify-between items-center w-full gap-4 md:mt-0 mt-[30px]">
          <TextWrapper>
            <h4 className="uppercase tracking-[-1.442px] font-bold text-[32px] font-syne bg1">
              {work.name}
            </h4>
          </TextWrapper>
          <span className="text-lg font-outfit text-white/[0.5] tracking-[-0.36px] leading-[25.2px]">
            {work.type}
          </span>
          <div
            className={` relative`}
            style={{ width: `${work.width}`, height: `${work.height}` }}
          >
            <Image
              src={`${work.platform}`}
              alt="workimage"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[85] rounded-[25px]"
        style={{ background: gradients.gradient1 }}
        initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
        animate={{ rotateX: isHovered ? -35 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[80] rounded-[25px]"
        style={{ background: gradients.gradient2 }}
        initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
        animate={{ rotateX: isHovered ? -25 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[75] rounded-[25px]"
        style={{ background: gradients.gradient3 }}
        initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
        animate={{ rotateX: isHovered ? -15 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
