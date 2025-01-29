
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SlideArrowLeft, SlideArrowRight } from "@/icon";
import { usePathname } from "next/navigation";


interface SlideItem {
  title: string;
  description: string;
  imageSrc: string;
}

interface MobileKeyFeaturesProps {
  slides: SlideItem[];
}

export const MobileKeyFeatures = ({ slides }: MobileKeyFeaturesProps) => {

    const pathname = usePathname()

    const IsAthlerse = pathname.includes("athlerse")

  return (
    <div className="md:hidden flex flex-col">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%",
              display: "flex",
              position: "relative",
              perspective: "1000px",
              background: "#12141d",
            }}
          >
            <div className="flex flex-col pt-[55px]">
              <h4 className="text-[18px] font-bold text-white font-syne tracking-[-1.442px]">
                {slide.title}
              </h4>
              <p className="mt-[7px] mb-[21px] text-sm font-outfit text-white/[0.5] tracking-[-0.36px]">
                {slide.description}
              </p>
              <div className=" w-full relative self-center" style={{
                height:IsAthlerse ? "300px" : "261px",
                width:IsAthlerse && index !== 2 ? "50%" : IsAthlerse && index === 2 ? "40%" : "100%"
              }}>
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  sizes="100vw"
                  fill
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-6 relative bottom-0 mt-5 justify-center">
        <button className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center swiper-button-left">
          <SlideArrowLeft />
        </button>
        <button className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center swiper-button-right group">
          <span className="group-hover:text-black">
            <SlideArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};
