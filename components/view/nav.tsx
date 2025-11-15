/* eslint-disable react/jsx-key */
"use client";

import { Container } from "./container";
import { useEffect, useState, useRef } from "react";

import Link from "next/link";
import { useGlobalStateContext } from "@/context/globalcontext";
import { Envelope, MenuSvg, LogoSvg } from "@/icon";
import { MobileNav } from "./mobilenav";
import { Close } from "@/icon";

export const Nav = () => {
  const { onCursor } = useGlobalStateContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [open, setOpen] = useState(false);
  const carouselRef = useRef<HTMLAnchorElement>(null);
  const logos = [
    <span className="text-white flex h-[100%] w-full">
      <LogoSvg />
    </span>,
    <span className="text-yellow-500 flex h-[100%] w-full">
      <LogoSvg />
    </span>,
    <span className="text-blue-500 flex h-[100%] w-full">
      <LogoSvg />
    </span>,
    <span className="text-white flex h-[100%] w-full">
      <LogoSvg />
    </span>,
    <span className="text-yellow-500 flex h-[100%] w-full">
      <LogoSvg />
    </span>,
    <span className="text-blue-500 flex h-[100%] w-full">
      <LogoSvg />
    </span>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === logos.length - 1) {
        setIsTransitioning(false);
        setActiveIndex(0);

        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      } else {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeIndex, logos.length]);

  return (
    <>
      <MobileNav open={open} setOpen={setOpen} />
      <div className="fixed top-0 left-0 w-full z-[888]">
        <div className="bg-[#12141d]/[0.1] backdrop-blur-[10px] flex justify-center items-center">
          <Container>
            <div className="flex items-center justify-between h-[103px] ">
              <div className="flex gap-[46px] items-center">
                <div
                  className="md:flex hidden w-[56px] h-[56px] rounded-full border-[2px] border-[rgba(255,255,255,0.1)] text-white items-center justify-center hover-item hover:text-black transition-colors duration-75"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                  onClick={() => setOpen(!open)}
                >
                  {open ? <Close /> : <MenuSvg />}
                </div>
                <Link
                  href="/"
                  className="relative w-[100px] h-[27px] overflow-hidden"
                  ref={carouselRef}
                >
                  <div
                    className="flex"
                    style={{
                      transform: `translateX(-${activeIndex * 100}%)`,
                      transition: isTransitioning
                        ? "transform 0.5s ease"
                        : "none",
                      width: `${logos.length * 100}%`,
                    }}
                  >
                    {logos.map((logo, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        {logo}
                      </div>
                    ))}
                  </div>
                </Link>
              </div>
              <div className="flex gap-[32px]">
                <a
                  href="mailto:Odebiyiridwan@gmail.com"
                  className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 relative md:flex hidden"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                >
                  <Envelope />
                </a>
                <Link
                  href="https://drive.google.com/file/d/1jwSvU0iMWnOuF7QUoZ2Mk93nEvIqajc0/view"
                  target="_blank"
                  className="rounded-[28px] min-h-[56px] border-[2px] border-[rgba(255,255,255,0.1)] items-center justify-center text-white text-base w-[161px] tracking-[-0.36px] font-outfit hover-item hover:text-black transition-colors duration-75 md:flex hidden"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                >
                  <span>View resume</span>
                </Link>
                <div
                  className=" md:hidden flex w-[56px] h-[56px] rounded-full border-[2px] border-[rgba(255,255,255,0.1)] text-white items-center justify-center hover-item hover:text-black transition-colors duration-75"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                  onClick={() => setOpen(!open)}
                >
                  {open ? <Close /> : <MenuSvg />}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
