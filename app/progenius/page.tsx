

import { Container } from "@/app/components/view/container";
import HeroTextWrapper from "@/app/components/view/herotextwrapper";
import Image from "next/image";
import TextWrapper from "@/app/components/view/textwrapper";
import { ProgeniusKeyFeatures } from "@/app/components/myproject/keyfeatures/progenius";
import { OtherProjects } from "@/app/components/myproject/otherproject";


export default function Progenius() {
  return (
    <>
      <div className="md:pt-[184px]">
        <Container>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[50px]">
              <div className="flex gap-[47px] justify-between items-center">
                <div className="flex flex-col grow-[1] shrink-0">
                  <span className="text-xl font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5]">
                    2024
                  </span>
                  <div className="my-[10px] h-[1px] bg-white/[0.4] w-full"></div>

                  <div className="text-[32px] font-bold tracking-[-1.442px] font-syne leading-[1]">
                    <HeroTextWrapper>
                      <h3 className="gd1">Progenius: Revolutionizing Crypto</h3>
                      <h3 className="gd1">Fundraising Management</h3>
                    </HeroTextWrapper>
                  </div>
                </div>
                <div className="text-xl tracking-[-0.36px] leading-[25.2px] font-outfit grow-[1]">
                  <span className="text-white/[0.5] font-light">
                    Managing crypto fundraising deals can be complex and
                    overwhelming. Progenius simplifies the process with a
                    user-friendly platform designed for crypto enthusiasts and
                    investors, streamlining deal creation, investment tracking,
                    and ROI calculations to help users focus on achieving
                    success in the crypto world.
                  </span>
                </div>
              </div>
              <div className="w-full h-[542px] relative">
                <Image
                  src="/assets/progenius/hero.png"
                  fill
                  sizes="100vw"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-[10px] py-[54px] flex gap-[10px] flex-col">
              <div className="flex flex-col">
                <TextWrapper>
                  <span className="gd1 font-bold tracking-[-1.442px] text-[42px] font-syne">
                    Introduction
                  </span>
                </TextWrapper>
              </div>
              <div className="flex flex-col">
                <TextWrapper>
                  <span className="gd1 font-medium tracking-[-0.36px] text-xl font-outfit">
                    The world of cryptocurrency is fast-paced and full of
                    potential, but managing fundraising deals and investments
                    can often feel like navigating a maze. As someone passionate
                    about solving real-world challenges through design, I set
                    out to create Progenius—a solution to streamline and
                    simplify crypto fundraising. This project is close to my
                    heart as it aims to empower crypto enthusiasts and investors
                    by giving them the tools they need to take control of their
                    investments effortlessly.
                  </span>
                </TextWrapper>
              </div>
            </div>
            <div className="flex gap-16 md:flex-row flex-col py-[56px]">
              <div className="w-[326px] shrink-0 flex flex-col font-bold tracking-[-1.442px] font-syne text-5xl md:border-r-[1px] md:border-r-white/[0.4] md:border-b-0 md:border-b-transparent border-b-[1px] border-b-white/[0.4]">
                <TextWrapper>
                  <h3 className="gd1">Problem </h3>
                </TextWrapper>
                <TextWrapper>
                  <h3 className="gd1">Statement </h3>
                </TextWrapper>
              </div>
              <div className="grow">
                <p className="tracking-[-0.36px] text-lg leading-[25.2px] font-outfit text-white/[0.5] whitespace-pre-line">
                  {`Managing crypto fundraising deals is often riddled with inefficiencies, making it harder for investors and project managers to focus on their goals. From creating deals to tracking investments and calculating returns, the process can be overwhelming. Progenius solves this by providing an intuitive platform that simplifies deal creation, tracks investments, and calculates ROI seamlessly, helping users make informed decisions and save valuable time.
                `}
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="grow flex gap-3 items-center">
                <div className="w-[289px] h-[138px] relative">
                  <Image
                    src="/assets/progenius/bitcoin.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
                <div className="w-[142px] h-[138px] relative">
                  <Image
                    src="/assets/progenius/data.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
              </div>
              <div className="grow">
                <div className="py-[54px] flex gap-[10px] flex-col">
                  <div className="flex flex-col">
                    <TextWrapper>
                      <span className="gd1 font-bold tracking-[-1.442px] text-[42px] font-syne">
                        Target audience
                      </span>
                    </TextWrapper>
                  </div>
                  <div className="flex flex-col">
                    <TextWrapper>
                      <span className="font-medium tracking-[-0.36px] text-xl font-outfit text-white/[0.5]">
                        Progenius is designed for individuals actively
                        participating in the cryptocurrency space—whether
                        seasoned investors or newcomers. These are people
                        looking for a transparent, efficient way to manage
                        crypto deals without needing extensive technical
                        expertise.
                      </span>
                    </TextWrapper>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[54px] flex flex-col items-center">
              <TextWrapper>
                <h2 className="gd1 font-bold tracking-[-1.442px] text-[42px] font-syne">
                  Design process
                </h2>
              </TextWrapper>
            </div>
            <div className="flex flex-col gap-[94px]">
              <div className="w-full flex gap-6 items-center">
                <div className="grow flex justify-start">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4 items-center">
                      <div className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative">
                        <span>1</span>
                      </div>
                      <TextWrapper>
                        <h2 className="gd1 font-bold tracking-[-1.442px] text-2xl font-syne">
                          Research
                        </h2>
                      </TextWrapper>
                    </div>
                    <div>
                      <span className="whitespace-pre-line text-xl font-medium font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5]">
                        {`I started with in-depth research, speaking with crypto investors and project managers to uncover the common hurdles they face. Their stories revealed a consistent need for simplicity and transparency, which became the backbone of my design. I also studied existing tools to identify gaps in user experiences and functionality, ensuring Progenius would stand out as a user-friendly solution.
                        `}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[505px] h-[395px] shrink-0 relative">
                  <Image
                    src="/assets/progenius/research.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex gap-6 items-center">
                <div className="grow flex justify-start">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4 items-center">
                      <div className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative">
                        <span>2</span>
                      </div>
                      <TextWrapper>
                        <h2 className="gd1 font-bold tracking-[-1.442px] text-2xl font-syne">
                          Ideation
                        </h2>
                      </TextWrapper>
                    </div>
                    <div className="max-w-[620px]">
                      <span className="whitespace-pre-line text-xl font-medium font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5]">
                        Armed with insights, I brainstormed ways to address pain
                        points while keeping the user experience at the
                        forefront. I explored features that could make deal
                        management intuitive, from user dashboards to automated
                        ROI calculations. These ideas began to form the
                        foundation of Progenius.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[480px] h-[365px] shrink-0 relative">
                  <Image
                    src="/assets/progenius/ideation.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex gap-[84px] items-center">
                <div className="grow flex justify-start">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4 items-center">
                      <div className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative">
                        <span>3</span>
                      </div>
                      <TextWrapper>
                        <h2 className="gd1 font-bold tracking-[-1.442px] text-2xl font-syne">
                          Wireframes
                        </h2>
                      </TextWrapper>
                    </div>
                    <div>
                      <span className="whitespace-pre-line text-xl font-medium font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5]">
                        To bring my ideas to life, I created low-fidelity
                        wireframes focusing on core user flows. This stage
                        helped me visualize the user journey, ensuring seamless
                        navigation and clarity across all touchpoints.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[296px] h-[296px] shrink-0 relative">
                  <Image
                    src="/assets/wireframes.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex gap-[84px] items-center">
                <div className="grow flex">
                  <div className="flex flex-col gap-3 justify-center">
                    <div className="flex gap-4 items-center justify-center">
                      <div className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative">
                        <span>4</span>
                      </div>
                      <TextWrapper>
                        <h2 className="gd1 font-bold tracking-[-1.442px] text-2xl font-syne">
                          High Fidelity
                        </h2>
                      </TextWrapper>
                    </div>
                    <div>
                      <span className="whitespace-pre-line text-xl font-medium font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5]  text-center inline-block">
                        Once the structure was solidified, I crafted
                        high-fidelity designs, prioritizing a sleek, modern
                        aesthetic that complements the innovative nature of
                        crypto technology. Special attention was given to color
                        schemes and typography to build trust and enhance
                        usability.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex py-[60px] relative">
              <div className="w-[880px] h-[540px] relative mx-auto rounded-[40px] overflow-hidden">
                <Image
                  src="/assets/progenius/mockup1.png"
                  sizes="100vw"
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
        </Container>
        <div className="flex gap-[60px]">
          <div className="relative grow h-[400px] overflow-hidden rounded-tr-[40px]">
            <Image src="/assets/progenius/left.png" sizes="100vw" alt="" fill />
          </div>
          <div className="relative grow h-[400px] rounded-tl-[40px] overflow-hidden">
            <Image
              src="/assets/progenius/right.png"
              sizes="100vw"
              alt=""
              fill
            />
          </div>
        </div>
        <div className="w-full h-[1024px] relative">
          <Image
            src="/assets/progenius/promockup.png"
            sizes="100vw"
            alt=""
            fill
          />
        </div>
        <Container>
          <ProgeniusKeyFeatures />
          <div className="mt-[60px] py-[54px] flex gap-[10px] flex-col">
            <div className="flex flex-col">
              <TextWrapper>
                <span className="gd1 font-bold tracking-[-1.442px] text-[42px] font-syne">
                  Final Outcome
                </span>
              </TextWrapper>
            </div>
            <div className="flex flex-col">
              <TextWrapper>
                <span className="gd1 font-medium tracking-[-0.36px] text-xl font-outfit">
                  ValorExchange effectively bridges the gap between the
                  complexity of cryptocurrency trading and the need for an
                  accessible, intuitive platform. With its user-friendly design
                  and enhanced security features, ValorExchange empowers users
                  to trade confidently, free from the usual barriers, and boosts
                  their overall experience in the digital currency market.
                </span>
              </TextWrapper>
            </div>
          </div>
          <div className="py-[43px] flex flex-col gap-2 items-center">
            <TextWrapper>
              <span className="gd1 font-medium tracking-[-0.36px]  text-[42px] font-syne">
                Figma Design
              </span>
            </TextWrapper>
            <span className="whitespace-pre-line text-xl font-light font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5]">
              Click the icon below to view the figma design for ValorExchange
            </span>
          </div>
        </Container>
        <OtherProjects />
      </div>
    </>
  );
}



