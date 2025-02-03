"use client";

import Link from "next/link";
import Image from "next/image";
import { Close } from "@/icon";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const MobileNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useRouter();

  const MobileNavMenu = [
    { label: "Home", href: "/" },
    { label: "Valor Exchange", href: "/valorexchange" },
    { label: "Athlerse", href: "/athlerse" },
    { label: "Rapilo", href: "/rapilo" },
    { label: "Dartspay", href: "/dartspay" },
    { label: "Rocketmarketing", href: "/rocketmarketing" },
    { label: "Progenius", href: "/progenius" },
  ];

  const MenuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const containervars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const handleMenuClick = (href: string) => {
  setOpen(false); 

  const animationDuration = 500; 

  setTimeout(() => {
    if (href === "/") {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" }); 
      } else {
        navigate.push("/"); 
      }
    } else {
      navigate.push(href); 
    }
  }, animationDuration);
};


  const pathname = usePathname().split("/");
  const path = pathname[pathname.length - 1];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={MenuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full fixed top-0 left-0 z-50 origin-top flex bg-gold flex-col bg-[#12141d] px-[30px]"
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
              {MobileNavMenu.map((menu, index) => {
                if (menu.label === "Shop")
                  return (
                    <div key={index} className="overflow-hidden">
                      <motion.a
                        href={menu.href}
                        variants={mobileLinkVars}
                        className="flex text-4xl font-inter dstroke"
                        onClick={() => handleMenuClick(menu.href)}
                        target="__blank"
                      >
                        <span>{menu.label}</span>
                      </motion.a>
                    </div>
                  );
                return (
                  <div key={index} className="overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      className="flex text-4xl font-inter dstroke"
                      onClick={() => handleMenuClick(menu.href)}
                    >
                      <span>{menu.label}</span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 w-full pt-[17px] md:pt-[27px] pb-[17px] z-40 backdrop-blur-sm  ">
        <nav className="flex justify-between container mx-auto 2xl:px-[150px] px-[16px] md:px-[50px] items-center">
          <div className="flex items-center">
            <ul className="md:flex hidden gap-[42px] items-center font-inter text-base leading-[25.251px] mb-[12px] ">
              <li>
                <Link href="/">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    Home
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/valorexchange">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    ValorExchange
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="athlerse">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    Athlerse
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="rapilo">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    Rapilo
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/dartspay">
                  <motion.span
                    className={`inline-block ${
                      path === "contact" && "text-gold"
                    }`}
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    DartsPay
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/rocketmarketing">
                  <motion.span
                    className={`inline-block ${
                      path === "contact" && "text-gold"
                    }`}
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    Rocketmarketing
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/progenius">
                  <motion.span
                    className={`inline-block ${
                      path === "contact" && "text-gold"
                    }`}
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    Progenius
                  </motion.span>
                </Link>
              </li>
            </ul>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              transition={{ delay: 1 }}
              className="md:ml-[127px] md:w-[144px] md:h-[82px] w-[102px] h-[57px] relative"
            >
              <Link href="/">
                <Image
                  src="/assets/h_logo.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </motion.div>
          </div>
        </nav>
      </div>
    </>
  );
};
