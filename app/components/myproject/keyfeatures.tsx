"use client";

import Image from "next/image";
import TextWrapper from "../view/textwrapper";
import { useState, useEffect, useRef } from "react";

export const KeyFeatures = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<number[]>([]);
  const [opacities, setOpacities] = useState<number[]>([1, 1, 1]);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  console.log(scrollProgress)

  useEffect(() => {
    const parentOffset = parentRef.current?.offsetTop || 0;
    const elementOffsets = refs.current.map(
      (ref) => (ref?.offsetTop || 0) + parentOffset
    );
    setPositions(elementOffsets);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const container = containerRef.current;
      if (!container) return;

      const containerOffsetTop = container.offsetTop + 200;
      const containerHeight = container.offsetHeight - 200;
      const scrollStart = containerOffsetTop;
      const scrollEnd =
        containerOffsetTop + containerHeight - window.innerHeight;

      if (scrollTop >= scrollStart && scrollTop <= scrollEnd) {
        const progress =
          ((scrollTop - scrollStart) / (scrollEnd - scrollStart)) * 100;
        setScrollProgress(progress);
      } else if (scrollTop < scrollStart) {
        setScrollProgress(0);
      } else if (scrollTop > scrollEnd) {
        setScrollProgress(100);
      }

      const newOpacities = [1, 1, 1];
      if (positions[1] && scrollTop >= positions[1] - 200) {
        newOpacities[0] = 0.7;
      }

      if (positions[2] && scrollTop >= positions[2] - 200) {
        newOpacities[1] = 0.7;
        newOpacities[0] = 0.7;
      }

      setOpacities(newOpacities);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [positions]);

  return (
    <>
      <div ref={parentRef} className="pt-[50px] flex flex-col items-center">
        <TextWrapper>
          <span className="gd1 font-bold tracking-[-1.442px] text-[42px] font-syne">
            Key Features of ValorExchange:
          </span>
        </TextWrapper>
        <div
          ref={containerRef}
          className="flex justify-between w-full mt-[68px] relative"
        >
          <div className="h-[395px] left-0 top-[268px] sticky w-[1px] bg-white/[0.1] flex justify-center">
            <div
              className="w-[3px] h-[120px] rounded-[5px] bg-white"
              style={{
                transform: `translateY(calc(${scrollProgress}% * 2.56))`,
                transition: "transform 0.1s ease",
              }}
            ></div>
          </div>
          <div className="w-full flex flex-col gap-[200px]">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className="w-full flex justify-between sticky top-[200px] transition-opacity duration-500 ease-in-out"
                style={{ opacity: opacities[index] }}
              >
                <div
                  className={`pl-[32px] pt-[60px] flex flex-col ${
                    index === 1 && "justify-center"
                  } ${index === 2 && "justify-end"}`}
                >
                  <div className="textcontainer flex flex-col gap-[7px]">
                    <h4 className="tracking-[-1.442px] font-bold text-xl font-syne text-white">
                      {TextContainer[index].title}
                    </h4>
                    <span className="w-[476px] text-sm tracking-[-0.36px] font-outfit text-white/[0.5]">
                      {TextContainer[index].content}
                    </span>
                  </div>
                </div>
                <div
                  className={
                    index === 2
                      ? "h-[441px] w-[648px]  border-white/[0.14] rounded-[21px] relative"
                      : `h-[481px] w-[678px]  border-white/[0.14] rounded-[21px] relative`
                  }
                >
                  <Image
                    src={`/assets/pyd${index + 1}.png`}
                    alt=""
                    fill
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


const TextContainer = [
  {
    title: "Intuitive Trading Interface",
    content:
      "The core trading interface allows users to execute buy, sell, or exchange transactions with just a few clicks, using straightforward language and guiding tooltips.",
  },
  {
    title: "Simplified Dashboard",
    content:
      "Users have access to a dashboard that displays only the most crucial information, minimizing clutter while providing essential details on holdings, transaction history, and market trends.",
  },
  {
    title: "Enhanced Security Measures",
    content:
      "ValorExchange incorporates advanced security features, such as two-factor authentication and automated transaction verification, ensuring security without disrupting the user experience.",
  },
];