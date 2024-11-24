"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { SlideArrowLeft, SlideArrowRight } from "@/app/icon";
import TextWrapper from "../view/textwrapper";
import { Container } from "@/app/components/view/container";

const Projects = [
  { id: "#2022", name: "Athlerse", type: "Product Design" },
  { id: "#2024", name: "Rapilo", type: "Landing page" },
  { id: "#2024", name: "Dartspay", type: "Landing page" },
  { id: "#2024", name: "progenius", type: "Product Design" },
  { id: "#2024", name: "rocketmarketing", type: "Landing page" },
  { id: "#2024", name: "valorexchange", type: "Landing page" },
];

export const OtherProjects = () => {
  return (
    <>
      <div className="flex flex-col gap-[32px]">
        <Container>
        <div className="flex items-center justify-between mx-auto px-5">
          <TextWrapper>
            <span className="gd1 font-bold tracking-[-1.442px] text-[42px] font-syne">
              View other projects
            </span>
          </TextWrapper>
          <div className="flex gap-6">
            <div className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative swiper-button-left">
              <span>
                <SlideArrowLeft />
              </span>
            </div>
            <div className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative swiper-button-right">
              <span>
                <SlideArrowRight />
              </span>
            </div>
          </div>
        </div>
        </Container>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={24}
          navigation={{
            nextEl: ".swiper-button-left",
            prevEl: ".swiper-button-right",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Navigation, Pagination]}
          className="flex font-outfit container self-end"
        >
          {Projects.map((project) => (
            <SwiperSlide
              key={project.name}
              className="px-[59px] flex flex-col justify-center gap-[40px] bg-white/[0.05] backdrop-blur-[0.85px] rounded-[25px]"
              style={{ width: "476px", height:"208px", display:"flex" }}
            >
              <div className="text-xl text-white/[0.5] leading-[25.2px] tracking-[-0.36px]">
                <span>{project.id}</span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="text-[32px] tracking-[-1.442px] uppercase font-bold font-syne">
                  {project.name}
                </span>
                <span className="text-xl  text-white/[0.5] leading-[25.2px] tracking-[-0.36px]">
                  {project.type}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
