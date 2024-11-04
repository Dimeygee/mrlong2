
import { Envelope, LogoRound, Dribble, Behance, Linkedin } from "@/app/icon";
import {Container} from "./container"

export const Footer = () => {
    return (
      <>
        <div className="py-[74px]">
          <Container>
            <div className="flex flex-col gap-[27px]">
              <div className="flex justify-between">
                <span className="hover-item inline-flex px-[55px] h-[138px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold  items-center gd1 uppercase">
                  Contact
                </span>
                <div className="min-h-[142px] pl-[41px] backdrop-blur-[22.5px] rounded-[25px] bg-white/[0.05] w-[670px] flex gap-[24px] items-center">
                  <div className="w-[72px] h-[72px] rounded-full bgs">
                    <Envelope />
                  </div>
                  <div className="flex flex-col gap-[10px] ">
                    <span className="tracking-[-0.36px] leading-[25.2px] font-outfit text-lg text-white/[0.5]">
                      Shoot me a mail
                    </span>
                    <h4 className="gd1 tracking-[-1.442px] font-bold font-syne text-[32px]">
                      odebiyiridwan@gmail.com
                    </h4>
                  </div>
                </div>
              </div>
              <div className="video-section">
                <video src="/assets/mvid.mp4" loop autoPlay muted></video>
                <div className="video-copy">
                  <h1 className="font-syne font-bold tracking-[3px]">
                    Let{"'"}s talk design!
                  </h1>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="pt-[25px] pb-[94px]">
          <Container>
            <div className="flex flex-col gap-[32px]">
              <div className="min-h-[166px] flex w-full items-center justify-between border-y-[1px] border-y-white/[0.3]">
                <div className="flex items-center gap-[8px] basis-[300px] justify-start">
                  <LogoRound />
                  <span className="text-lg font-syne text-white font-bold leading-[26px] tracking-[-0.356px]">
                    mrlong
                  </span>
                </div>
                <div className="flex items-center gap-[40px]">
                  <div className="w-[56px] h-[56px] rounded-full bgs">
                    <Dribble />
                  </div>
                  <div className="w-[56px] h-[56px] rounded-full bgs">
                    <Behance />
                  </div>
                  <div className="w-[56px] h-[56px] rounded-full bgs">
                    <Linkedin />
                  </div>
                </div>
                <span className="flex basis-[300px] justify-end text-base font-outfit tracking-[-0.356px]  leading-[26px] text-white/[0.3]">
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
}