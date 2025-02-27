"use client";

import { Container } from "../container";
import { WorkFolder } from "../folder";
import TextWrapper from "../textwrapper";
import Link from "next/link"; // Importing Link from next/link

export const SelectedWork: React.FC = () => {
  return (
    <div className="pt-[75px] pb-[150px]">
      <Container>
        <div className="flex flex-col items-center">
          <div className="md:py-14 py-[50px] flex flex-col gap-[4px] items-center border-y-white/[0.4] border-y-[1px] w-full">
            <span className="text-lg font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5]">
              Discover from my
            </span>
            <h3 className="flex flex-col items-center uppercase md:text-[72px] text-[42px] tracking-[-1.442px] md:leading-[69px] leading-[1] font-bold">
              <TextWrapper>
                <span className="gd1 font-syne">Selected</span>
              </TextWrapper>
              <TextWrapper>
                <span className="abg font-syne">Work</span>
              </TextWrapper>
            </h3>
          </div>
          <div className="pt-[75px] w-full">
            <div className="flex flex-col gap-[35px]">
              {Works.map((work, index) => (
                <div key={index} className="cursor-pointer">
                  
                  <Link href={work.to}>
                      <WorkFolder work={work} />
                  
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Works = [
  {
    id: "#2022",
    name: "valorexchange",
    type: "Product Design",
    platform: "/assets/valorl.png",
    width: "203px",
    height: "52px",
    to: "/valorexchange",
  },
  {
    id: "#2024",
    name: "athlerse",
    type: "Product Design",
    platform: "/assets/athlerse.png",
    width: "203px",
    height: "52px",
    to: "/athlerse",
  },
  {
    id: "#2024",
    name: "ralipo",
    type: "Landing page Design",
    platform: "/assets/rapilo.png",
    width: "158px",
    height: "39px",
    to: "/rapilo",
  },
  {
    id: "#2024",
    name: "dartspay",
    type: "Landing page Design",
    platform: "/assets/dartpay.png",
    width: "208px",
    height: "60px",
    to: "/dartspay",
  },
  {
    id: "#2023",
    name: "rocketmarketing",
    type: "Landing page Design",
    platform: "/assets/rocketl.png",
    width: "203px",
    height: "52px",
    to: "/rocketmarketing",
  },
  {
    id: "#2024",
    name: "progenius",
    type: "Product Design",
    platform: "/assets/progenius.png",
    width: "264px",
    height: "47px",
    to: "/progenius",
  },
];
