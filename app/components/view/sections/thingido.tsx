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

            <div className="flex gap-[18px] uppercase items-center">
              <span className="hover-item inline-flex px-[55px] h-[138px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1">
                UI design
              </span>
              <div className="w-[142px] h-[138px] rounded-full border-[1px] border-white hover-item"></div>
              <span className="hover-item inline-flex px-[55px] h-[138px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1">
                rapid prototyping
              </span>
              <div className="w-[142px] h-[138px] rounded-full border-[1px] border-white hover-item"></div>
            </div>
            <div className="flex gap-[18px] uppercase items-center">
              <div className="w-[142px] h-[138px] rounded-full border-[1px] border-white hover-item"></div>
              <span className="hover-item inline-flex px-[55px] h-[138px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1">
                ux design
              </span>
              <div className="w-[142px] h-[138px] rounded-full border-[1px] border-white hover-item"></div>
              <span className="hover-item inline-flex px-[55px] h-[138px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1">
                no-code development
              </span>
            </div>
            <div className="flex gap-[18px] uppercase items-center">
              <span className="hover-item inline-flex px-[55px] h-[138px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1">
                Interaction design
              </span>
              <div className="w-[142px] h-[138px] rounded-full border-[1px] border-white hover-item"></div>
              <span className="hover-item inline-flex px-[55px] h-[138px] tracking-[-1.442px] text-[32px] rounded-[400px] border-[1px] border-white font-syne font-bold items-center gd1">
                Wireframing
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
