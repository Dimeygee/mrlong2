"use client";

import { Close } from "@/icon";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useRouter } from "next/navigation";

export const MobileNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useRouter();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const MobileNavMenu = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    {
      label: "Dribbble",
      href: "https://dribbble.com/mrlong007",
      external: true,
    },
    {
      label: "Linkedin",
      href: "https://linkedin.com/mrlong007",
      external: true,
    },
    {
      label: "Behance",
      href: "https://www.behance.net/mrlong007",
      external: true,
    },
  ];

  const MenuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } },
  };

  const containervars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const handleMenuClick = (href: string, external = false) => {
    setOpen(false);
    setTimeout(() => {
      if (external) {
        window.open(href, "_blank");
      } else {
        navigate.push(href);
      }
    }, 500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={MenuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full fixed top-0 left-0 z-50 origin-top flex bg-[#12141d] flex-col px-[30px]"
        >
          <div className="flex absolute top-0 left-0 w-full justify-end py-[34px] px-[30px]">
            <span onClick={() => setOpen(false)}>
              <Close />
            </span>
          </div>

          <motion.div
            variants={containervars}
            initial="initial"
            animate="open"
            exit="initial"
            className="flex flex-col items-center justify-center grow gap-[4px] uppercase"
          >
            {MobileNavMenu.map((menu, index) => (
              <div key={index} className="overflow-hidden">
                <motion.div
                  variants={mobileLinkVars}
                  className="flex text-4xl text-center text-white font-inter dstroke cursor-pointer"
                  onClick={() => handleMenuClick(menu.href, menu.external)}
                >
                  <span>{menu.label}</span>
                </motion.div>
              </div>
            ))}

            {/* Resume Button */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1jwSvU0iMWnOuF7QUoZ2Mk93nEvIqajc0/view"
                target="_blank"
                download="Odebiyi Ridwan Resume"
              >
                <button className="border-[#2F80ED] border-2 rounded-[28px] px-[36px] py-[15px] text-base font-outfit text-white transition duration-[0.5s] hover:bg-[#2F80ED] hover:text-white">
                  View Resume
                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
