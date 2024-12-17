"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { SlideArrowLeft, SlideArrowRight } from "@/app/icon";
import TextWrapper from "../view/textwrapper";
import { Container, SwiperContainer } from "@/app/components/view/container";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useGlobalStateContext } from "@/app/context/globalcontext";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Projects = [
  { id: "#2022", name: "Athlerse", type: "Product Design" },
  { id: "#2024", name: "Rapilo", type: "Landing page" },
  { id: "#2024", name: "Dartspay", type: "Landing page" },
  { id: "#2024", name: "Progenius", type: "Product Design" },
  { id: "#2024", name: "RocketMarketing", type: "Landing page" },
  { id: "#2024", name: "ValorExchange", type: "Landing page" },
];

const generateRandomGradient = () => {
  const colors = [
    "#FF5F43",
    "#36D1DC",
    "#5B86E5",
    "#F2994A",
    "#BB6BD9",
    "#8E2DE2",
    "#3A1C71",
    "#FF5C5C",
  ];
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
};

export const OtherProjects = () => {
  const { onCursor } = useGlobalStateContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname(); // Retrieve the current pathname

  const gradients = useMemo(
    () =>
      Projects.map(() => ({
        gradient1: generateRandomGradient(),
        gradient2: generateRandomGradient(),
        gradient3: generateRandomGradient(),
      })),
    []
  );

  // Filter out the project with a name matching the current pathname
  const filteredProjects = useMemo(() => {
    const currentPageName = pathname?.split("/").pop()?.toLowerCase() || ""; // Get the last segment of the pathname and convert to lowercase
    return Projects.filter(
      (project) => project.name.toLowerCase() !== currentPageName
    );
  }, [pathname]);

  return (
    <>
      <div
        className={`flex flex-col gap-[32px] overflow-hidden transition-all duration-300 py-[82px]`}
      >
        <Container>
          <div className="flex items-center justify-between mx-auto px-5">
            <TextWrapper>
              <span className="gd1 font-bold tracking-[-1.442px] text-[42px] font-syne">
                View other projects
              </span>
            </TextWrapper>
            <div className="flex gap-6">
              <div
                className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative swiper-button-left"
                onMouseEnter={() => onCursor("hovered")}
                onMouseLeave={() => onCursor("")}
              >
                <span>
                  <SlideArrowLeft />
                </span>
              </div>
              <div
                className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative swiper-button-right group"
                onMouseEnter={() => onCursor("hovered")}
                onMouseLeave={() => onCursor("")}
              >
                <span className="group-hover:text-black">
                  <SlideArrowRight />
                </span>
              </div>
            </div>
          </div>
        </Container>
        <SwiperContainer>
          <div className="relative h-[208px]">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={35}
              navigation={{
                nextEl: ".swiper-button-right",
                prevEl: ".swiper-button-left",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              modules={[Navigation, Pagination]}
              className="flex font-outfit container self-end"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "300%",
                paddingLeft: "70px",
              }}
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide
                  key={project.name}
                  style={{
                    width: "476px",
                    height: "208px",
                    display: "flex",
                    position: "relative",
                    perspective: "1000px",
                    background: "#12141d",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link href={`/${project.name.toLowerCase()}`} className="absolute w-full h-full top-0 left-0 z-[999]"></Link>
                  <motion.div
                    initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
                    animate={{ rotateX: hoveredIndex === index ? -45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-[59px] flex flex-col justify-center gap-[40px] rounded-[25px] w-full h-full z-[100] relative bg-[#12141d] border-white/[0.14] border-[1px]"
                  >
                    <div className="text-xl text-white/[0.5] leading-[25.2px] tracking-[-0.36px]">
                      <span>{project.id}</span>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <span className="text-[32px] tracking-[-1.442px] uppercase font-bold font-syne">
                        {project.name}
                      </span>
                      <span className="text-xl text-white/[0.5] leading-[25.2px] tracking-[-0.36px]">
                        {project.type}
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full z-[85] rounded-[25px]"
                    style={{ background: gradients[index].gradient1 }}
                    initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
                    animate={{ rotateX: hoveredIndex === index ? -35 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full z-[80] rounded-[25px]"
                    style={{ background: gradients[index].gradient2 }}
                    initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
                    animate={{ rotateX: hoveredIndex === index ? -25 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full z-[75] rounded-[25px]"
                    style={{ background: gradients[index].gradient3 }}
                    initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
                    animate={{ rotateX: hoveredIndex === index ? -15 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </SwiperContainer>
      </div>
    </>
  );
};
