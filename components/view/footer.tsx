import { Envelope, LogoRound, Dribble, Behance, Linkedin } from "@/icon";
import { Container } from "./container";
import { useGlobalStateContext } from "@/context/globalcontext";
import Link from "next/link";
//import Image from "next/image"

export const Footer = () => {
  const { onCursor } = useGlobalStateContext();
  return (
    <>
      <div className="py-[74px]">
        <Container>
          <div className="flex flex-col gap-[27px]">
            <div className="flex items-start md:justify-between md:flex-row  flex-col md:gap-0 gap-5">
              <span className="hover-item inline-flex px-[26px] md:px-[55px] md:h-[138px] h-[67px] tracking-[-1.442px] text-xl md:text-[32px] rounded-[400px] border-[1px]  border-white font-syne font-bold  items-center gd1 uppercase  text-center">
                Contact
              </span>
              <div className="min-h-[203px] md:min-h-[142px] pl-[20px] md:pl-[41px] backdrop-blur-[22.5px] rounded-[25px] bg-white/[0.05] md:w-[670px] flex md:flex-row flex-col gap-[24px] md:justify-normal justify-center md:items-center  w-full">
                <div className="w-[72px] h-[72px] shrink-0 rounded-full bgs">
                  <Envelope />
                </div>
                <div className="md:w-[72px] md:h-[72px] w-[49px] h-[49px] shrink-0 rounded-full sbgs">
                  <SEnvelope />
                </div>
                <div className="flex flex-col md:gap-[10px] ">
                  <span className="tracking-[-0.36px] leading-[25.2px] font-outfit text-lg text-white/[0.5]">
                    Shoot me a mail
                  </span>
                  <h4 className="gd1 tracking-[-1.442px] font-bold font-syne text-xl md:text-[32px]">
                    odebiyiridwan@gmail.com
                  </h4>
                </div>
              </div>
            </div>
            <div className="video-section">
              <div className="font-syne font-bold w-full h-full tracking-[3px] md:text-center md:justify-center text-left flex items-center md:text-[137px] text-[60px]">
                Let{"'"}s talk design!
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-[25px] pb-[94px]">
        <Container>
          <div className="flex flex-col gap-[32px]">
            <div className="min-h-[166px] flex w-full items-center justify-between border-y-[1px] border-y-white/[0.3] md:flex-row flex-col md:py-0 py-[35px] md:gap-0 gap-[38px]">
              <div className="flex  items-center gap-[8px] md:basis-[300px] justify-start">
                <LogoRound />
                <span className="text-lg font-syne text-white font-bold leading-[26px] tracking-[-0.356px]">
                  mrlong
                </span>
              </div>
              <div className="flex items-center gap-[40px]">
                <Link
                  target="__blank"
                  href="https://dribbble.com/mrlong007"
                  className="w-[56px] h-[56px] rounded-full bgs text-white hover-item hover:text-black transition-colors duration-75"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                >
                  <Dribble />
                </Link>
                <Link
                  target="__blank"
                  href="https://www.behance.net/mrlong007"
                  className="w-[56px] h-[56px] rounded-full bgs text-white hover-item hover:text-black transition-colors duration-75"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                >
                  <Behance />
                </Link>
                <Link
                  target="__blank"
                  href="https://linkedin.com/mrlong007"
                  className="w-[56px] h-[56px] rounded-full bgs text-white hover-item hover:text-black transition-colors duration-75"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                >
                  <Linkedin />
                </Link>
                <Link
                  target="__blank"
                  href="https://dribbble.com/mrlong007"
                  className="w-[56px] h-[56px] rounded-full  sbgs"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                >
                  <Dribble />
                </Link>
                <Link
                  target="__blank"
                  href="https://www.behance.net/mrlong007"
                  className="w-[56px] h-[56px] rounded-full  sbgs"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                >
                  <Behance />
                </Link>
                <Link
                  target="__blank"
                  href="https://linkedin.com/mrlong007"
                  className="w-[56px] h-[56px] rounded-full  sbgs"
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("")}
                >
                  <Linkedin />
                </Link>
              </div>
              <span className="flex md:basis-[300px] justify-end text-base font-outfit tracking-[-0.356px]  leading-[26px] text-white/[0.3]">
                © mrlong 2024 Freelancer
              </span>
            </div>
            <div className="w-full flex justify-center items-center text-base tracking-[-0.356px] font-outfit leading-[26px]">
              Made with love ❤️ and coffee ☕️
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};


/*
  {
      label: "Dribbble",
      href: "https://dribbble.com/mrlong007",
      external: true,
    },
    {
      label: "Linkedin",
      href: "https://linkedin.com/mrlong007",
      external: true,
    },
    {
      label: "Behance",
      href: "https://www.behance.net/mrlong007",
      external: true,
    },
*/

const SEnvelope = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        opacity="0.4"
        d="M6.67485 21.3998H19.1247C21.1997 21.3998 22.2372 20.3623 22.2372 18.2873V8.94987C22.2372 6.87489 21.1997 5.8374 19.1247 5.8374H6.67485C4.59987 5.8374 3.56238 6.87489 3.56238 8.94987V18.2873C3.56238 20.3623 4.59987 21.3998 6.67485 21.3998Z"
        fill="white"
      />
      <path
        d="M12.8998 14.6704C12.5263 14.6704 12.1507 14.5542 11.8322 14.3228L6.73619 10.6158C6.38863 10.3637 6.31181 9.87611 6.56496 9.52855C6.81707 9.18202 7.30143 9.10318 7.6521 9.35737L12.7484 13.0633C12.8397 13.1286 12.961 13.1297 13.0523 13.0633L18.1486 9.35737C18.4982 9.10318 18.9836 9.18202 19.2357 9.52855C19.4889 9.87611 19.4121 10.3627 19.0645 10.6158L13.9685 14.3217C13.6489 14.5552 13.2733 14.6704 12.8998 14.6704Z"
        fill="white"
      />
    </svg>
  );
};
