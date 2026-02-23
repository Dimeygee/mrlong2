"use client";

import { Container } from "../container";
import TextWrapper from "../textwrapper";
import Link from "next/link";
import { ArrowRightReview } from "@/icon";
import { useEffect, useRef, useState } from "react";

function LazyVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={visible ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
}

export const SelectedWork: React.FC = () => {
  return (
    <div className="pt-[75px] pb-[150px]">
      <Container>
        <div className="flex flex-col items-center w-full px-4 sm:px-0">
          <div className="md:py-14 py-[50px] flex flex-col gap-[4px] items-center border-y-white/[0.4] border-y-[1px] w-full">
            <span className="text-base sm:text-lg font-outfit text-white/50">
              Discover from my
            </span>
            <h3 className="flex flex-col items-center uppercase md:text-[72px] text-[42px] font-bold text-center">
              <TextWrapper>
                <span className="gd1 font-syne">Selected</span>
              </TextWrapper>
              <TextWrapper>
                <span className="abg font-syne">Work</span>
              </TextWrapper>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] sm:gap-[35px] mt-[62px] w-full">
            {Works.map((work, index) => (
              <Link href={work.to} className="flex flex-col gap-4" key={index}>
                <div className="mt-[11px] rounded-t-[25px] h-[240px] sm:h-[300px] md:h-[352px] overflow-hidden relative bg-black">
                  <LazyVideo src={`/assets/vids/${work.video}.webm`} />
                </div>

                <div className="py-[12px] px-[18px] sm:px-[23px] flex justify-between items-center rounded-b-[32px] bg-white/[0.12]">
                  <span className="text-[16px] sm:text-lg font-bold font-syne uppercase text-white">
                    {work.name}
                  </span>
                  <span className="text-[14px] sm:text-lg font-light font-syne uppercase text-white flex items-center gap-1">
                    <span className="hidden md:flex">{work.type}</span>
                    <ArrowRightReview />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const Works = [
  {
    name: "Redpay payment gateway",
    type: "Product Design",
    video: "redpay",
    to: "/redpay",
  },
  {
    name: "Athlerse Watch",
    type: "Product Design",
    video: "athlersewatch",
    to: "/athlerse",
  },
  { name: "Zuri", type: "Landing Page", video: "Zuri", to: "/zuri" },
  { name: "Glopayz", type: "Product Design", video: "glopayz", to: "/glopayz" },
  { name: "Quonos", type: "Landing Page", video: "quonos", to: "/quonos" },
  {
    name: "Ucee MFB Smart Onboarding",
    type: "Product Design",
    video: "ucee",
    to: "/ucee",
  },
];
