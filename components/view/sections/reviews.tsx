/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Marquee from "react-fast-marquee";

import Image from "next/image";
import { Button } from "@/components/button";

const reviews = [
  {
    id: 1,
    name: "Gafar Ajao",
    position: "Full-stack Developer - RB2",
    review: [
      "Ridwan is a seasoned product designer with eyes and taste for quality designs. I'm my experience working with him, with Ridwan, no bad design, I'd recommend him to anyone in a heartbeat 🤓",
    ],
    image: "/assets/gafar.png",
  },
  {
    id: 2,
    name: "Oluyomi Olushola Michael",
    position: "Techincal PM - Unifonic",
    review: [
      "Ridwan is a designer who creates where others don't see it, maintaining quality user experience. He's not just an amazing colleague but a friend, teaching commitment and dedication to excellence. Honored to work with him.",
    ],
    image: "/assets/micheal.png",
  },
  {
    id: 3,
    name: "Jessica Isah",
    position: "Product Manager - Unifonic",
    review: [
      "Working with Ridwan is seamless. His innovation and user experience focus make him invaluable to engineering and product teams. He adds and embodies creativity. His commitment and enthusiasm will benefit any team.",
    ],
    image: "/assets/contact.png",
  },
  {
    id: 4,
    name: "Bakare Sofia",
    position: "Product designer - Tribebanc",
    review: [
      "Ridwan is an excellent professional. He improved my design understanding and has impressive work ethic and communication skills. He adapts to any situation and stands out for his willingness to help others. I highly recommend him.",
    ],
    image: "/assets/contact.png",
  },
  {
    id: 5,
    name: "David ogbonna-eze",
    position: "Lead deveolper - rechaj",
    review: [
      "We relied on Ridwan to bring our product vision to life, and he delivered beyond expectations. Ridwan’s user-centered approach made our app intuitive and polished. I wouldn’t hesitate to work together again!",
    ],
    image: "/assets/contact.png",
  },
  {
    id: 6,
    name: "managi iwu0ha",
    position: "Product designer - Digicore",
    review: [
      "Working with Ridwan was a game-changer for our project. Ridwan’s designs weren’t just beautiful—they solved real problems. Every detail felt thoughtful and intentional.",
    ],
    image: "/assets/managi.png",
  },
  {
    id: 7,
    name: "Alvin Ahn",
    position: "co-founder - lukuku",
    review: [
      "I’ve collaborated with a lot of designers, but Ridwan stands out. He has an incredible ability to listen, iterate, and transform ideas into experiences that feel seamless and impactful.",
    ],
    image: "/assets/contact.png",
  },
];

export const Reviews: React.FC = () => {
  return (
    <div className="overflow-hidden pt-[30px] pb-[60px]">
      <div className="flex justify-center mb-[50px]">
        <Button text="Recommendations" />
      </div>
      <div className="relative overflow-hidden">
        <Marquee
          pauseOnHover={true}
          className="flex  whitespace-nowrap"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="md:w-[605px] w-[352px] min-h-[194px] shrink-0 pl-[42px] md:pl-[65px] md:min-h-[298px] justify-center rounded-[32px] flex flex-col border-[2px] border-white/[0.1] py-[20px] md:py-[58px] md:gap-[32px] gap-[20px] pr-[46px]"
            >
              <div className="flex gap-[32px] text-white tracking-[-0.4px] font-bold text-[12px] md:text-base font-syne leading-[28px] text-wrap">
                <span>{review.review}</span>
              </div>
              <div className="flex gap-[32px] items-center">
                <div className="md:w-[65px] md:h-[65px] w-[42px] h-[42px] rounded-full relative overflow-hidden">
                  <Image
                    src={review.image}
                    fill
                    sizes="100vw"
                    alt={review.name}
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="font-bold uppercase text-[10px] md:text-sm text-white/[0.5] font-outfit">
                    {review.name}
                  </span>
                  <span className="font-bold uppercase md:text-[12px] text-[8px] text-white/[0.5] font-outfit">
                    {review.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
