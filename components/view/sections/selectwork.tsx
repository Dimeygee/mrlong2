"use client";

import { Container } from "../container";
import TextWrapper from "../textwrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightReview } from "@/icon";

export const SelectedWork: React.FC = () => {
  return (
    <div className="pt-[75px] pb-[150px]">
      <Container>
        <div className="flex flex-col items-center w-full px-4 sm:px-0">
          {/* HEADER */}
          <div
            className="md:py-14 py-[50px] flex flex-col gap-[4px] items-center 
            border-y-white/[0.4] border-y-[1px] w-full"
          >
            <span
              className="text-base sm:text-lg font-outfit tracking-[-0.36px] 
              leading-[22px] sm:leading-[25.2px] text-white/50"
            >
              Discover from my
            </span>

            <h3
              className="flex flex-col items-center uppercase 
              md:text-[72px] text-[42px] tracking-[-1.442px] 
              md:leading-[69px] leading-[1] font-bold text-center"
            >
              <TextWrapper>
                <span className="gd1 font-syne">Selected</span>
              </TextWrapper>
              <TextWrapper>
                <span className="abg font-syne">Work</span>
              </TextWrapper>
            </h3>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] sm:gap-[35px] mt-[62px] w-full">
            {Works.map((work, index) => (
              <Link
                href={`${work.to}`}
                className="flex flex-col gap-4"
                key={index}
              >
                {/* IMAGE */}
                <div
                  className="mt-[11px] rounded-t-[25px] 
                  h-[240px] xs:h-[260px] sm:h-[300px] md:h-[352px] 
                  overflow-hidden relative"
                >
                  <Image
                    src={work.platform}
                    alt={`hero`}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* TEXT BOX */}
                <div
                  className="py-[12px] px-[18px] sm:px-[23px] flex 
                  justify-between items-center rounded-b-[32px] 
                  bg-white/[0.12]"
                >
                  <span
                    className="text-[16px] sm:text-lg font-bold font-syne 
                    leading-none uppercase text-white"
                  >
                    {work.name}
                  </span>
                  <span
                    className="text-[14px] sm:text-lg font-light font-syne 
                    leading-none uppercase text-white flex items-center gap-1"
                  >
                    {work.type}
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
    id: "#2022",
    name: "Redpay  payment  gateway",
    type: "Product Design",
    platform: "/assets/redpay/hero.png",
    width: "203px",
    height: "52px",
    to: "/redpay",
  },
  {
    id: "#2024",
    name: "athlerse watch",
    type: "Product Design",
    platform: "/assets/athlerse-watch.png",
    width: "203px",
    height: "52px",
    to: "/athlerse",
  },
  {
    id: "#2024",
    name: "zuri",
    type: "Landing Page",
    platform: "/assets/zuri/hero.png",
    width: "158px",
    height: "39px",
    to: "/zuri",
  },
  {
    id: "#2024",
    name: "Glopayz",
    type: "Product Design",
    platform: "/assets/glopayz/hero.png",
    width: "208px",
    height: "60px",
    to: "/glopayz",
  },
  {
    id: "#2023",
    name: "Quonos",
    type: "Landing page",
    platform: "/assets/quonox/hero.png",
    width: "203px",
    height: "52px",
    to: "/quonos",
  },
  {
    id: "#2024",
    name: "Ucee  MFB  SMart  Onboarding",
    type: "Product Design",
    platform: "/assets/ucee/hero.png",
    width: "264px",
    height: "47px",
    to: "/ucee",
  },
];
