
import { Container } from "../container";
import { WorkFolder } from "../folder";
import TextWrapper from "../textwrapper";
import Link from "next/link";

export const SelectedWork = () => {

  return (
    <div className="pt-[75px] pb-[150px]">
      <Container>
        <div className="flex flex-col items-center">
          <div className="py-14 flex flex-col gap-[4px] items-center border-y-white/[0.4] border-y-[1px] w-full">
            <span className="text-lg font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5]">
              Discover from my
            </span>
            <h3 className="flex flex-col items-center uppercase md:text-[72px] text-[58px] tracking-[-1.442px] leading-[69px] font-bold">
              <TextWrapper>
                <span className="gd1 font-syne">Selected</span>
              </TextWrapper>
              <TextWrapper>
                 <span className="abg font-syne">Work</span>
              </TextWrapper>
             
            </h3>
          </div>
          <div className="pt-[75px] w-full">
            <div className="flex flex-col gap-[35px]">
              {Works.map((work, index) => (
                <Link href={work.to} key={index}>
                  <WorkFolder  work={work} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Works = [
  {
    id: "#2022",
    name: "valorexchange",
    type: "Product Design",
    platform: "/assets/athlerse.png",
    width: "203px",
    height: "52px",
    to:"/valorexchange"
  },
  {
    id: "#2024",
    name: "athlerse",
    type: "Product Design",
    platform: "/assets/athlerse.png",
    width: "203px",
    height: "52px",
    to:"#"
  },
  {
    id: "#2024",
    name: "rapilo",
    type: "Landing page Design",
    platform: "/assets/rapilo.png",
    width: "158px",
    height: "39px",
    to:"#"
  },
  {
    id: "#2024",
    name: "dartspay",
    type: "Landing page Design",
    platform: "/assets/dartpay.png",
    width: "208px",
    height: "60px",
    to:"#"
  },
  {
    id: "#2023",
    name: "rocketmarketing",
    type: "Landing page Design",
    platform: "/assets/athlerse.png",
    width: "203px",
    height: "52px",
    to:"#"
  },
  {
    id: "#2024",
    name: "progenius",
    type: "Product Design",
    platform: "/assets/progenius.png",
    width: "264px",
    height: "47px",
    to:"progenius"
  },
];
