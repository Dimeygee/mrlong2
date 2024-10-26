"use client"

import { useState } from "react"; 
import Image from "next/image";
import { motion } from "framer-motion";
import TextWrapper from "./textwrapper";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WorkFolder = ({ work, key }: {work: any, key: number}) => {
    const [isHovered, setIsHovered] = useState(false);
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
          <div className="flex justify-between items-center w-full">
            <TextWrapper><h4 className="uppercase tracking-[-1.442px] font-bold text-[32px] font-syne bg1">
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
          className="absolute top-0 left-0 w-full h-full z-[85] bg-blue-500 opacity-75 rounded-[25px]"
          initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
          animate={{ rotateX: isHovered ? -35 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-[80] bg-green-500 opacity-75 rounded-[25px]"
          initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
          animate={{ rotateX: isHovered ? -25 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-[75] bg-yellow-500 opacity-75 rounded-[25px]"
          initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
          animate={{ rotateX: isHovered ? -15 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
}
