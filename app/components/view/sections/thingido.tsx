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
              <span className="hover-item inline-flex justify-center px-[55px] h-[200px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 col-span-3">
                UI design
              </span>
              <div className="col-span-2 h-[200px] rounded-full border-[1px] border-white hover-item"></div>
              <span className="hover-item inline-flex justify-center px-[55px] h-[200px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 col-span-5">
                rapid prototyping
              </span>
              <div className="col-span-2  h-[200px] rounded-full border-[1px] border-white hover-item"></div>
            </div>
            <div className="grid grid-cols-12 gap-[18px] uppercase items-center">
              <div className="h-[200px] rounded-full border-[1px] border-white hover-item col-span-2"></div>
              <span className="hover-item inline-flex justify-center px-[55px] h-[200px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 col-span-3">
                ux design
              </span>
              <div className="h-[200px] rounded-full border-[1px] border-white hover-item col-span-2"></div>
              <span className="hover-item inline-flex justify-center px-[55px] h-[200px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 col-span-5">
                no-code development
              </span>
            </div>
            <div className=" gap-[18px] grid grid-cols-12 uppercase items-center">
              <span className="hover-item inline-flex justify-center px-[55px] h-[200px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne col-span-5 font-bold items-center gd1">
                Interaction design
              </span>
              <div className="h-[200px] rounded-full border-[1px] border-white hover-item col-span-2"></div>
              <span className="hover-item inline-flex justify-center px-[55px] h-[200px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1 col-span-5">
                Wireframing
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
