"use client";

import Image from "next/image";
import TextWrapper from "../../view/textwrapper";
import { useState, useEffect, useRef, useCallback } from "react";

export const AthlerseKeyFeatures = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]); // Refs for text containers
  const parentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<number[]>([]);
  const [opacities, setOpacities] = useState<number[]>([1, 1, 1, 1]); // Initial opacity for images
  const [textOpacities, setTextOpacities] = useState<number[]>([1, 0, 0, 0]); // Initial opacity for text containers (first one is 1)
  const [scrollProgress, setScrollProgress] = useState<number>(0);

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

      const startScroll = positions[0] || 0;
      const endScroll = positions[positions.length - 1] || 0;

      if (scrollTop >= startScroll && scrollTop <= endScroll) {
        const progress =
          ((scrollTop - startScroll) / (endScroll - startScroll)) * 100;
        setScrollProgress(progress);
      } else if (scrollTop < startScroll) {
        setScrollProgress(0);
      } else if (scrollTop > endScroll) {
        setScrollProgress(100);
      }

      // Update image opacities based on the current scroll position
      const newOpacities = positions.map((pos, index) => {
        const nextPos = positions[index + 1] || Infinity;

        // If the scrollTop is near the current image's position (in the viewport)
        if (scrollTop >= pos && scrollTop < nextPos) {
          return 1; // Current image in view
        }

        // If it's past the image, make it 0.5
        if (scrollTop >= pos) {
          return 0.5; // Previous image
        }

        return 1; // Default opacity for future images
      });

      setOpacities(newOpacities);

      // Update text container opacities
      const newTextOpacities = positions.map((pos, index) => {
        const nextPos = positions[index + 1] || Infinity;

        if (index === 0 && scrollTop < positions[1]) {
          return 1; // Keep the first text container visible initially
        }

        if (index === positions.length - 1 && scrollTop >= pos) {
          return 1; // Keep the last text container visible until scrolling back up
        }

        if (scrollTop >= pos && scrollTop < nextPos) {
          return 1; // Current text container in view
        }

        return 0; // Fade out
      });

      setTextOpacities(newTextOpacities);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [positions]);

  // Using useCallback to avoid the TypeScript error
  const setTextRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      textRefs.current[index] = el;
    },
    []
  );

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
          <div className="sticky left-0 top-[268px] h-[395px] flex gap-[32px]">
            <div className="h-[395px] left-0 top-[268px] sticky w-[1px] bg-white/[0.1] flex justify-center custom-scroll">
              <div
                className="w-[3px] h-[120px] scroll-bar rounded-[5px] bg-white"
                style={{
                  transform: `translateY(${
                    ((395 - 120) * scrollProgress) / 100
                  }px)`,
                  transition: "transform 0.1s ease",
                }}
              ></div>
            </div>
            <div className="flex relative flex-col py-[15px] justify-between">
              <div
                ref={setTextRef(0)} // Using the callback ref
                className="thisisthetextcontainer flex flex-col gap-[7px]"
                style={{
                  opacity: textOpacities[0],
                  transition: "opacity 0.5s ease-in-out", // Smooth opacity transition
                }}
              >
                <h4 className="tracking-[-1.442px] font-bold text-xl font-syne text-white">
                  Progress Tracking
                </h4>
                <span className="w-[476px] text-sm tracking-[-0.36px] font-outfit text-white/[0.5]">
                  A comprehensive dashboard provides insights into user
                  progress, helping them visualize milestones and stay
                  motivated.
                </span>
              </div>
              <div
                ref={setTextRef(1)} // Using the callback ref
                className="thisisthetextcontainer flex flex-col gap-[7px]"
                style={{
                  opacity: textOpacities[1],
                  transition: "opacity 0.5s ease-in-out", // Smooth opacity transition
                }}
              >
                <h4 className="tracking-[-1.442px] font-bold text-xl font-syne text-white">
                  Community Engagement
                </h4>
                <span className="w-[476px] text-sm tracking-[-0.36px] font-outfit text-white/[0.5]">
                  A built-in social platform allows users to connect with
                  others, join challenges, and celebrate achievements, fostering
                  a sense of belonging.
                </span>
              </div>
              <div
                ref={setTextRef(2)} // Using the callback ref
                className="thisisthetextcontainer flex flex-col gap-[7px]"
                style={{
                  opacity: textOpacities[2],
                  transition: "opacity 0.5s ease-in-out", // Smooth opacity transition
                }}
              >
                <h4 className="tracking-[-1.442px] font-bold text-xl font-syne text-white">
                  Blockchain Rewards
                </h4>
                <span className="w-[476px] text-sm tracking-[-0.36px] font-outfit text-white/[0.5]">
                  By integrating blockchain technology, Athlerse offers users
                  tangible incentives, including tradable digital assets, for
                  their fitness efforts.
                </span>
              </div>
              <div
                ref={setTextRef(3)} // Using the callback ref
                className="thisisthetextcontainer flex flex-col gap-[7px]"
                style={{
                  opacity: textOpacities[3],
                  transition: "opacity 0.5s ease-in-out", // Smooth opacity transition
                }}
              >
                <h4 className="tracking-[-1.442px] font-bold text-xl font-syne text-white">
                  Shop Feature
                </h4>
                <span className="w-[476px] text-sm tracking-[-0.36px] font-outfit text-white/[0.5]">
                  Users can spend the GYM tokens they’ve earned from working out
                  to purchase a variety of items in the app’s shop. From fitness
                  gear to digital assets and exclusive rewards, the shop adds an
                  exciting layer of motivation and utility to the platform.
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-[200px]">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className="w-full flex justify-center sticky top-[200px] transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: opacities[index],
                  transition: "opacity 0.5s ease-in-out", // Smooth opacity transition
                }}
              >
                <div
                  className={`pl-[32px] pt-[60px] flex flex-col ${
                    index === 1 && "justify-center"
                  } ${index === 2 && "justify-end"}`}
                ></div>
                <div
                  className={
                    index === 2
                      ? "h-[510px] w-[259px] border-white/[0.14] rounded-[21px] relative"
                      : `h-[510px] w-[319px] border-white/[0.14] rounded-[21px] relative`
                  }
                >
                  <Image
                    src={`/assets/athlerse/key${index + 1}.png`}
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
