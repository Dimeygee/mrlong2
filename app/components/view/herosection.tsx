/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useState } from "react";
import HeroTextWrapper from "./herotextwrapper";
import { Button } from "../button";
import { ArrowDown } from "../arrowdown";

export const HeroSection = () => {
  const [transform, setTransform] = useState("rotateZ(0deg)");

  const handleMouseMove = (event: {
    currentTarget?: any;
    clientX?: any;
    clientY?: any;
  }) => {
    const { clientX, clientY } = event;
    const element = event.currentTarget;
    const { left, top, width, height } = element.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    const rotateX = deltaY * 30;
    const rotateY = -deltaX * 30;
    const translateZ = deltaY * 20;
    const translateX = deltaX * 30;
    const translateY = deltaY * 30;

    setTransform(
      `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleMouseEnter = () => {
    setTransform(`rotateZ(15deg)`);
  };

  const handleMouseLeave = () => {
    setTransform(`rotateZ(0deg)`);
  };

  return (
    <div
      className="flex flex-col items-center pt-[104px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[391px] h-[401px] relative cursor-pointer">
        <Image
          src="/assets/mrlong.png"
          alt="mrlong"
          fill
          sizes="100vw"
          style={{
            transform: transform,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>
      <h1 className="flex flex-col text-[46px] tracking-[-1.442px] font-bold font-syne items-center leading-[1] text-center">
        <HeroTextWrapper>
          <span className="gd1">Digital Product Designer</span>
        </HeroTextWrapper>
        <HeroTextWrapper transitionDelay={1}>
          <span>
            <span className="gd1 text-center">Crafting</span> &quot;
            <span className="abg text-center">Magic</span>&quot;
          </span>
        </HeroTextWrapper>
      </h1>
      <div className="flex-col mt-[18px] mb-[24px] text-lg tracking-[-0.36px] leading-[25.1px] font-outfit text-white/[0.5] items-center px-[20px] hidden md:flex">
        <span className="leading-[1] text-center">
          <HeroTextWrapper transitionDelay={1}>
            Do you have a billion-dollar idea and are looking for a product
            designer to help bring it to life? If so, you
          </HeroTextWrapper>
        </span>
        <span className="hidden md:flex">
          <HeroTextWrapper transitionDelay={1}>
            would definitely need to speak with me.
          </HeroTextWrapper>
        </span>
      </div>
      <div className="flex-col mt-[18px] mb-[24px] text-lg tracking-[-0.36px] leading-[25.1px] font-outfit text-white/[0.5] items-center px-[20px] md:hidden flex">
        <span className="leading-[1] text-center">
          <HeroTextWrapper transitionDelay={1}>
            Do you have a billion-dollar idea and are looking for a product
            designer to help bring it to life? If so, you would definitely need
            to speak with me.
          </HeroTextWrapper>
        </span>
      </div>
      <div className="flex justify-center">
        <Button text="Open to work" />
      </div>
      <div className="flex justify-center mt-[48px]">
        <ArrowDown />
      </div>
    </div>
  );
};
