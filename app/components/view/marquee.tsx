
"use client"


import {motion} from "framer-motion"


const Marquee = ({ children, duration, initial }: { children: React.ReactNode, duration: string | number, initial?: string | number }) => {
    return (
        <div className="marquee-wrapper">
            <motion.div
                className="marquee-content flex gap-[40px]"
                initial={{ x:initial || "0%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat:Infinity, ease: 'linear', duration:duration }}
            >
                {children}
            </motion.div>
        </div>
    )
}
export default Marquee