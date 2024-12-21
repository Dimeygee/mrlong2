import { Container } from "../container";
import TextWrapper from "../textwrapper";

export const ThingsIDo = () => {
  return (
    <>
      <div className="pt-[90px] pb-[122px]">
        <Container>
          <div className="flex flex-col gap-[48px]">
            <TextWrapper>
              <h2 className="font-syne font-bold leading-[69px] tracking-[-1.442px] text-[72px] gd1">
                Things I do
              </h2>
            </TextWrapper>

            <div className="grid grid-cols-12 gap-[18px] uppercase items-center">
              <span className="hover-item inline-flex justify-center px-[10px] md:px-[55px] md:h-[200px] h-[150px]  tracking-[-1.442px] text-xl md:text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 md:col-span-3 col-span-6">
                UI design
              </span>
              <div className="md:col-span-2 col-span-5 md:h-[200px] h-[150px]  rounded-full border-[1px] border-white hover-item"></div>
              <span className="hover-item inline-flex justify-center px-[10px] md:px-[55px] md:h-[200px] h-[150px]  tracking-[-1.442px] text-xl md:text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 md:col-span-5 col-span-10">
                rapid prototyping
              </span>
              <div className="md:col-span-2 col-span-4 md:flex hidden  md:h-[200px] h-[150px]  rounded-full border-[1px] border-white hover-item"></div>
            </div>
            <div className="grid grid-cols-12 gap-[18px] uppercase items-center">
              <div className="md:h-[200px] h-[150px]  rounded-full border-[1px] border-white hover-item md:col-span-2 col-span-5"></div>
              <span className="hover-item inline-flex justify-center px-[10px] md:px-[55px] md:h-[200px] h-[150px]  tracking-[-1.442px] text-xl md:text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 md:col-span-3 col-span-5">
                ux design
              </span>
              <div className="md:h-[200px] h-[150px]  rounded-full border-[1px] border-white hover-item md:flex hidden md:col-span-2 col-span-5"></div>
              <span className="hover-item inline-flex justify-center px-[10px] md:px-[55px] md:h-[200px] h-[150px]  tracking-[-1.442px] text-xl md:text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 md:col-span-5 col-span-10">
                no-code development
              </span>
            </div>
            <div className=" gap-[18px] grid grid-cols-12 uppercase items-center">
              <span className="hover-item inline-flex justify-center px-[10px] md:px-[55px] md:h-[200px] h-[150px]  tracking-[-1.442px] text-xl md:text-[32px] rounded-[400px] border-[1px] border-white font-syne md:col-span-5 col-span-7 font-bold items-center gd1">
                Interaction design
              </span>
              <div className="md:h-[200px] h-[150px]  rounded-full border-[1px] border-white hover-item md:col-span-2 col-span-5"></div>
              <span className="hover-item inline-flex justify-center px-[10px] md:px-[55px] md:h-[200px] h-[150px]  tracking-[-1.442px] text-xl md:text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 md:col-span-5 col-span-10">
                Wireframing
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
