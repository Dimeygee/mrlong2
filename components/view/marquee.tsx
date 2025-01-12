
"use client"


import {motion} from "framer-motion"


const Marquee = ({ children, duration, right }: { children: React.ReactNode, duration: string | number; right?: boolean }) => {
    return (
      <div className="marquee-wrapper">
        <motion.div
          className="marquee-content flex gap-[40px]"
          initial={{ x: right ? "-100%" : "0%" }}
          animate={{ x: right ? "0%" : "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: duration }}
        >
          {children}
        </motion.div>
      </div>
    );
}
export default Marquee