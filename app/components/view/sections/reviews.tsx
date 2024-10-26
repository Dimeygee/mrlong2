"use client"

import { ArrowLeftReview, ArrowRightReview, Quotes } from "@/app/icon";
import { Container } from "../container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Linh Nguyen",
    position: "Founder at Carrot Labs",
    review: [
      "CaLan saves us a huge amount of time.",
      "It's helping us achieve the most pixel perfect & fast websites, thanks to",
      "full control over asset export."
    ],
    image: "/assets/Avatar.png"
  },
  {
    id: 2,
    name: "John Doe",
    position: "CEO at Tech Innovators",
    review: [
      "This tool is a game changer for web development.",
      "The features and ease of use are unparalleled.",
      "Highly recommend to anyone in the industry."
    ],
    image: "/path/to/image2.jpg"
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "CTO at WebWorks",
    review: [
      "Excellent service and product quality.",
      "I have never seen such attention to detail.",
      "CaLan's capabilities are outstanding."
    ],
    image: "/path/to/image3.jpg"
  }
];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Container>
        <div className="rounded-[24px] border-[1px] border-white py-[80px] flex relative flex-col items-center justify-center mt-[100px] mb-[78px]">
          <div
            className="absolute left-[20px] top-[50%] bgs w-[56px] h-[56px] translate-y-[-50%] cursor-pointer"
            onClick={handlePrev}
          >
            <ArrowLeftReview />
          </div>
          <div
            className="absolute right-[20px] top-[50%] bgs w-[56px] h-[56px] translate-y-[-50%] cursor-pointer"
            onClick={handleNext}
          >
            <ArrowRightReview />
          </div>
          <Quotes />

          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[currentIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-[64px] mt-[32px]"
            >
              <h3 className="flex flex-col items-center font-outfit tracking-[-0.8px] font-bold text-[24px] leading-[34px]">
                {reviews[currentIndex].review.map((line, index) => (
                  <span key={index} className="gd1">
                    {line}
                  </span>
                ))}
              </h3>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[currentIndex].name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-[65px] h-[65px] rounded-full relative overflow-hidden">
                <Image
                  src={reviews[currentIndex].image}
                  alt=""
                  fill
                  sizes="100vw"
                />
              </div>
              <div className="mt-[24px] mb-[8px]">
                <span className="font-dsans text-[22px] font-bold text-white tracking-[-0.4px] leading-[32px]">
                  {reviews[currentIndex].name}
                </span>
              </div>
              <span className="text-sm leading-[24px] tracking-[-0.3px] font-dsans text-white/[0.3]">
                {reviews[currentIndex].position}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </>
  );
};
