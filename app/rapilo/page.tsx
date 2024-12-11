

import { Container } from "@/app/components/view/container";
import HeroTextWrapper from "@/app/components/view/herotextwrapper";
import Image from "next/image";
import TextWrapper from "@/app/components/view/textwrapper";
import { KeyFeatures } from "@/app/components/myproject/keyfeatures";
import { OtherProjects } from "@/app/components/myproject/otherproject";

export default function Ralipo() {
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
                      <h3 className="gd1">Ralipo Landing Page Redesign</h3>
                    </HeroTextWrapper>
                  </div>
                </div>
                <div className="text-xl tracking-[-0.36px] leading-[25.2px] font-outfit grow-[1]">
                  <span className="text-white/[0.5] font-light">
                    Ralipo, a platform focused on user engagement and feedback
                    collection, needed a modern, user-friendly redesign of its
                    landing page to better communicate its offerings and improve
                    conversions.
                  </span>
                </div>
              </div>
              <div className="w-full h-[542px] relative">
                <Image
                  src="/assets/rapilo/hero.png"
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
                    Ralipo, a platform focused on user engagement and feedback
                    collection, needed a modern, user-friendly redesign of its
                    landing page to better communicate its offerings and improve
                    conversions. My goal was to create a seamless, visually
                    appealing design that would align with Ralipo’s brand
                    identity while addressing usability challenges.
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
                  {`The previous iteration of the landing page presented several challenges. It did not clearly convey Ralipo’s core value, leaving users uncertain about its offerings. Furthermore, the layout was cluttered and lacked a clear hierarchy, making navigation cumbersome. The page was also poorly optimized for mobile devices, which led to a decline in engagement from mobile users and a reduced overall conversion rate.
                `}
                </p>
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
              <div className="w-full flex gap-[172px] items-center">
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
                        {`To begin, I conducted user interviews and surveys to understand the frustrations and needs of existing users. This was complemented by a thorough competitive analysis, where I reviewed other platforms to identify best practices and opportunities for Ralipo to stand out. Finally, I analyzed user behavior through heatmaps and website analytics, identifying high-exit zones and areas where users struggled the most.
                        `}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[461px] h-[331px] shrink-0 relative">
                  <Image
                    src="/assets/rapilo/research.png"
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
                        The ideation phase involved a series of brainstorming
                        sessions with the Ralipo team to align on the project
                        {"'"}s goals and feature priorities. I created quick
                        sketches and explored multiple layout options to ensure
                        clarity and usability. A mind map was used to visualize
                        how content elements like testimonials, CTAs, and
                        product features could flow cohesively. To ensure
                        feasibility, I organized a collaborative design workshop
                        with stakeholders, where ideas were evaluated and
                        shortlisted based on their potential impact and
                        implementation viability.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[539px] h-[365px] shrink-0 relative">
                  <Image
                    src="/assets/rapilo/ideation.png"
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
                        Following ideation, I developed low-fidelity wireframes
                        to establish a strong structural foundation. These
                        wireframes were refined into high-fidelity prototypes
                        that incorporated Ralipo’s branding elements. The
                        prototypes were tested with users, and the feedback was
                        used to iterate and make improvements. This iterative
                        cycle ensured that the final design would align with
                        user needs and expectations.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[412px] h-[296px] shrink-0 relative">
                  <Image
                    src="/assets/rapilo/wireframe.png"
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
                        In the Hi-fidelity phase, the landing page was refined
                        to emphasize a clear visual hierarchy. Key features such
                        as campaign creation tools and analytics integrations
                        were prominently displayed, making the page easier to
                        navigate. Calls-to-action were strategically placed and
                        visually emphasized to increase user engagement, while
                        the design was optimized for mobile-first responsiveness
                        to ensure seamless usability across devices. Trust
                        elements, including customer testimonials and
                        recognizable partner logos, were added to build
                        credibility and foster user confidence.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="w-full relative flex items-end mt-[100px] justify-center">
          <div className="w-[667px] h-[1448px] relative z-10">
            <Image src="/assets/rapilo/mockup1.png" alt="" sizes="100vw" fill />
          </div>
          <div className="w-[573px] h-[1266px] ml-[-183px] relative z-0">
            <Image src="/assets/rapilo/mockup2.png" alt="" sizes="100vw" fill />
          </div>
        </div>
        <Container>
          <div className="hidden">
            <KeyFeatures />
          </div>
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
