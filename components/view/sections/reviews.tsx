/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Marquee from "../marquee";
import { Button } from "../../button";

const reviews = [
  {
    id: 1,
    name: "Linh Nguyen",
    position: "Founder at Carrot Labs",
    review: [
      "CaLan saves us a huge amount of time.",
      "It's helping us achieve the most pixel perfect & fast websites, thanks to",
      "full control over asset export.",
    ],
    image: "/assets/Avatar.png",
  },
  {
    id: 2,
    name: "John Doe",
    position: "CEO at Tech Innovators",
    review: [
      "This tool is a game changer for web development.",
      "The features and ease of use are unparalleled.",
      "Highly recommend to anyone in the industry.",
    ],
    image: "/assets/Avatar.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "CTO at WebWorks",
    review: [
      "Excellent service and product quality.",
      "I have never seen such attention to detail.",
      "CaLan's capabilities are outstanding.",
    ],
    image: "/assets/Avatar.png",
  },
];

export const Reviews = () => {
  return (
    <>
      <div className="overflow-hidden  pt-[30px] pb-[60px]">
        <div className="flex justify-center mb-[50px]"><Button text="Recommendations" /></div>
        <div className="flex">
          <div className="flex items-center gap-[24px]">
            <Marquee duration={30}>
              <div className="gap-[24px] flex">
                {reviews.map((review: any, index: number) => {
                  return (
                    <div
                      className="w-[605px] shrink-0 pl-[65px] min-h-[298px] justify-center rounded-[32px] flex flex-col border-[2px] border-white/[0.1] py-[58px] gap-[32px] pr-[46px]"
                      key={index}
                    >
                      <div className="flex gap-[32px] text-white tracking-[-0.4px] font-bold text-xl font-syne leading-[28px]">
                        <span>{review.review}</span>
                      </div>
                      <div className="flex gap-[32px] items-center">
                        <div className="w-[65px] h-[65px] rounded-full relative overflow-hidden">
                          <Image
                            src={`${review.image}`}
                            fill
                            sizes="100vw"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <span className="text-[24px] font-bold uppercase text-sm text-white/[0.5] font-outfit">
                            Linh Nguyen
                          </span>
                          <span className="font-bold uppercase text-[12px] text-white/[0.5] font-outfit">
                            Linh Nguyen
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Marquee>
            <Marquee duration={30}>
              <div className="gap-[24px] flex">
                {reviews.map((review: any, index: number) => {
                  return (
                    <div
                      className="w-[605px] shrink-0 pl-[65px] min-h-[298px] justify-center rounded-[32px] flex flex-col border-[2px] border-white/[0.1] py-[58px] gap-[32px] pr-[46px]"
                      key={index}
                    >
                      <div className="flex gap-[32px] text-white tracking-[-0.4px] font-bold text-xl font-syne leading-[28px]">
                        <span>{review.review}</span>
                      </div>
                      <div className="flex gap-[32px] items-center">
                        <div className="w-[65px] h-[65px] rounded-full relative overflow-hidden">
                          <Image
                            src={`${review.image}`}
                            fill
                            sizes="100vw"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <span className="text-[24px] font-bold uppercase text-sm text-white/[0.5] font-outfit">
                            Linh Nguyen
                          </span>
                          <span className="font-bold uppercase text-[12px] text-white/[0.5] font-outfit">
                            Linh Nguyen
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};
