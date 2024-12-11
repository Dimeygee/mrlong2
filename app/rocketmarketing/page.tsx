import { Container } from "@/app/components/view/container";
import HeroTextWrapper from "@/app/components/view/herotextwrapper";
import Image from "next/image";
import TextWrapper from "@/app/components/view/textwrapper";
import { KeyFeatures } from "@/app/components/myproject/keyfeatures";
import { OtherProjects } from "@/app/components/myproject/otherproject";

export default function RocketMarketing() {
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
                      <h3 className="gd1">
                        Rocketmarketing Landing Page Redesign
                      </h3>
                    </HeroTextWrapper>
                  </div>
                </div>
                <div className="text-xl tracking-[-0.36px] leading-[25.2px] font-outfit grow-[1]">
                  <span className="text-white/[0.5] font-light">
                    The landing page redesign for Rocket Marketing aimed to
                    create a visually compelling, highly functional interface
                    that clearly communicated the agency’s services, showcased
                    its success stories, and optimized the user experience to
                    convert visitors into leads.
                  </span>
                </div>
              </div>
              <div className="w-full h-[542px] relative">
                <Image
                  src="/assets/rocketmarketing/hero.png"
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
                    Rocket Marketing is a digital marketing agency specializing
                    in helping businesses accelerate their online presence
                    through data-driven strategies, creative campaigns, and
                    innovative solutions. With expertise in SEO, social media
                    marketing, and PPC advertising, Rocket Marketing empowers
                    clients to achieve measurable results and sustainable
                    growth. To stay competitive and improve lead generation, the
                    company sought a redesign of its landing page to better
                    represent its capabilities and drive conversions.
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
                  {`The original Rocket Marketing landing page struggled to engage visitors effectively. The design lacked a clear structure, making it difficult for users to understand the agency’s services and offerings. Call-to-action (CTA) elements were buried or lacked emphasis, resulting in lower-than-expected lead generation. Additionally, the page didn’t highlight client success stories or case studies prominently, which are critical for building trust in a competitive digital marketing landscape.
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
              <div className="w-full flex gap-[87px] items-center">
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
                        {`To kick off the project, I reviewed the analytics data from Rocket Marketing’s existing landing page to identify high drop-off points and low-engagement sections. I also conducted stakeholder interviews to align on the business goals and target audience. Competitive research revealed the importance of showcasing case studies, testimonials, and transparent service breakdowns to differentiate the agency and instill trust.
                        `}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[553px] h-[300px] shrink-0 relative">
                  <Image
                    src="/assets/rocketmarketing/research.png"
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
                        During ideation, I collaborated with rocketmarketing’s
                        stakeholders to define clear goals for the redesign. I
                        brainstormed potential solutions, sketching different
                        layouts to explore ideas for a clean, visually
                        compelling structure. Using mind mapping, I identified
                        the most critical user flows and features to prioritize,
                        such as a prominent benefits section, testimonials, and
                        an accessible pricing display.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[511px] h-[300px] shrink-0 relative">
                  <Image
                    src="/assets/rocketmarketing/ideation.png"
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
                        I created low-fidelity wireframes to test various
                        layouts, focusing on structuring the content in a way
                        that maintained user engagement. After stakeholder
                        feedback, I moved to high-fidelity prototypes that
                        incorporated Rocket Marketing’s branding elements,
                        including its color palette, fonts, and visual style.
                        Interactive prototypes allowed for user testing and
                        refinement based on usability feedback.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[412px] h-[296px] shrink-0 relative">
                  <Image
                    src="/assets/rocketmarketing/wireframe.png"
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
                        The final design emphasized clarity and visual appeal. A
                        prominent headline above the fold communicated Rocket
                        Marketing’s unique selling proposition, while the
                        navigation was simplified to enhance usability. CTAs,
                        such as “Get n touch” were strategically placed and
                        designed to stand out with bold colors and hover
                        effects. The page featured a dedicated section for
                        client success stories, complete with metrics and
                        testimonials, and included trust signals like client
                        logos and certifications. The design was fully optimized
                        for mobile responsiveness, ensuring a seamless
                        experience on all devices.
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
            <Image
              src="/assets/rocketmarketing/mockup1.png"
              alt=""
              sizes="100vw"
              fill
            />
          </div>
          <div className="w-[573px] h-[1266px] ml-[-183px] relative z-0">
            <Image
              src="/assets/rocketmarketing/mockup2.png"
              alt=""
              sizes="100vw"
              fill
            />
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
