import Image from "next/image";
import Marquee from "./marquee";
import TextWrapper from "./textwrapper";
import { Button } from "../button";

export const FootPrint = () => {
  return (
    <>
      <div className="flex items-center flex-col p-[66px]">
        <div className="flex relative md:w-[876px] overflow-hidden">
          <div className="absolute rectangle left-0 top-0 z-10 rotate-[360deg]"></div>
          <div className="absolute rectangle1 right-0 top-0 z-10"></div>
          <div className="flex gap-[24px] z-0">
            <Marquee duration={30}>
              <div className="flex gap-[24px]">
                {FootPrints.map((print, index) => {
                  return (
                    <div
                      className="w-[185px] h-[54px] relative shrink-0"
                      key={index}
                    >
                      <Image
                        src={print}
                        alt=""
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  );
                })}
              </div>
            </Marquee>
            <Marquee duration={30}>
              <div className="flex gap-[24px]">
                {FootPrints.map((print, index) => {
                  return (
                    <div
                      className="w-[185px] h-[54px] relative shrink-0"
                      key={index}
                    >
                      <Image
                        src={print}
                        alt=""
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
        <div className="mt-[33px] mb-[18px]">
          <h5 className="flex items-center flex-col font-syne text-lg font-bold">
            <TextWrapper>
              <span className="gd1 ">Impacted in various companies</span>
            </TextWrapper>
            <TextWrapper>
              <span className="gd1">around the world</span>
            </TextWrapper>
          </h5>
        </div>
        <span>
          <Button text="My footprint" />
        </span>
      </div>
    </>
  );
};

const FootPrints = [
  "/assets/f (4).png",
  "/assets/f (2).png",
  "/assets/f (1).png",
  "/assets/dartpay.png",
  "/assets/f (5).png",
  "/assets/athlerse.png",
  "/assets/rapilo.png",
  "/assets/f (3).png",
];
