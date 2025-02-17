
"use client"


import {motion} from "framer-motion"


export const Marquee = ({ children, duration, right }: { children: React.ReactNode, duration: string | number; right?: boolean }) => {

    const marqueduration = duration

    return (
      <div className="marquee-wrapper">
        <motion.div
          className="marquee-content flex gap-[40px]"
          initial={{ x: right ? "-100%" : "0%" }}
          animate={{ x: right ? "0%" : "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: marqueduration }}
        >
          {children}
        </motion.div>
      </div>
    );
}