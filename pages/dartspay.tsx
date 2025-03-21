import { Container } from "@/components/view/container";
import HeroTextWrapper from "@/components/view/herotextwrapper";
import Image from "next/image";
import TextWrapper from "@/components/view/textwrapper";
//import { KeyFeatures } from "@/components/myproject/keyfeatures";
import { OtherProjects } from "@/components/myproject/otherproject";
import { ArrowRightIcon, NetIcon, ArrowleftIcon } from "../icon";
import Head from "next/head"

export default function Dartspay() {
  return (
    <>
      <Head>
        <title>mrlong - Dartspay</title>
        <meta
          name="description"
          content="Delivering innovative payment solutions."
        />
        <meta
          name="keywords"
          content="Digital Product Designer, UI/UX, Web Design, Interactive Design, Product Development"
        />
        <meta name="author" content="mrlong" />
        <meta property="og:title" content="mrlong - Dartspay" />
        <meta
          property="og:description"
          content="Delivering innovative payment solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrlong.vercel.com/dartspay" />
        {/*<meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="mrlong - Home" />
        <meta
          name="twitter:description"
          content="Digital Product Designer crafting 'Magic' through innovative and interactive product design."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />*/}
      </Head>
      <div className="md:pt-[184px] pt-[140px]">
        <Container>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[50px]">
              <div className="flex gap-[47px] justify-between items-center md:flex-row flex-col">
                <div className="flex flex-col grow-[1] shrink-0">
                  <span className="text-xl font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5]">
                    2024
                  </span>
                  <div className="my-[10px] h-[1px] bg-white/[0.4] w-full"></div>

                  <div className="text-[32px] font-bold tracking-[-1.442px] font-syne leading-[1]">
                    <HeroTextWrapper>
                      <h3 className="gd1">Dartspay Landing Page Redesign</h3>
                    </HeroTextWrapper>
                  </div>
                </div>
                <div className="text-xl tracking-[-0.36px] leading-[25.2px] font-outfit grow-[1]">
                  <span className="text-white/[0.5] font-light">
                    Dartspay required a comprehensive redesign of its landing
                    page to address usability challenges and align with its
                    mission of delivering innovative payment solutions. The
                    redesign aimed to create a visually appealing, user-friendly
                    page that not only attracted visitors but also converted
                    them into active users.
                  </span>
                </div>
              </div>
              <div className="w-full md:h-[542px] h-[153px] relative">
                <Image
                  src="/assets/dartspay/hero.png"
                  fill
                  sizes="100vw"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-[10px] py-[54px] flex gap-[10px] flex-col">
              <div className="flex flex-col">
                <TextWrapper>
                  <span className="gd1 font-bold tracking-[-1.442px] text-[26px] md:text-[42px] font-syne">
                    Introduction
                  </span>
                </TextWrapper>
              </div>
              <div className="flex flex-col">
                <TextWrapper>
                  <span className="gd1 font-medium tracking-[-0.36px] text-xl font-outfit">
                    Dartspay is a cutting-edge payment solutions platform
                    designed to simplify digital transactions for businesses and
                    individuals. With a focus on security, efficiency, and
                    user-friendliness, Dartspay empowers its users with tools
                    for seamless money transfers, subscription management, and
                    real-time payment tracking. As a growing platform in a
                    competitive space, Dartspay recognized the need for a
                    landing page redesign to better communicate its value and
                    enhance user engagement.
                  </span>
                </TextWrapper>
              </div>
            </div>
            <div className="flex gap-16 md:flex-row flex-col py-[56px]">
              <div className="w-[326px] shrink-0 hidden md:flex flex-row md:flex-col font-bold tracking-[-1.442px] font-syne md:text-5xl text-[26px] md:border-r-[1px] md:border-r-white/[0.4] md:border-b-0 md:border-b-transparent border-b-[1px] border-b-white/[0.4]">
                <TextWrapper>
                  <h3 className="gd1">Problem </h3>
                </TextWrapper>
                <TextWrapper>
                  <h3 className="gd1">Statement </h3>
                </TextWrapper>
              </div>
              <div className="w-[326px] shrink-0 md:hidden md flex-row md:flex-col font-bold tracking-[-1.442px] font-syne md:text-5xl text-[26px] md:border-r-[1px] md:border-r-white/[0.4] md:border-b-0 md:border-b-transparent border-b-[1px] border-b-white/[0.4]">
                <h3 className="gd1">Problem Statement </h3>
              </div>
              <div className="grow">
                <p className="tracking-[-0.36px] text-lg leading-[25.2px] font-outfit text-white/[0.5] whitespace-pre-line">
                  {`The original Dartspay landing page presented several usability and design challenges. Visitors found the page's structure cluttered, with scattered information and a lack of clear navigation. The call-to-action (CTA) buttons were not prominent enough, resulting in low conversion rates. Additionally, the page lacked a cohesive brand identity and was not optimized for mobile users, leading to high bounce rates.
                `}
                </p>
              </div>
            </div>
            <div className="py-[54px] flex flex-col items-center">
              <TextWrapper>
                <h2 className="gd1 font-bold tracking-[-1.442px] text-[26px] md:text-[42px] font-syne">
                  Design process
                </h2>
              </TextWrapper>
            </div>
            <div className="flex flex-col md:gap-[94px] gap-10">
              <div className="w-full flex md:flex-row flex-col gap-6 items-center">
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
                        {`The original Dartspay landing page presented several usability and design challenges. Visitors found the page's structure cluttered, with scattered information and a lack of clear navigation. The call-to-action (CTA) buttons were not prominent enough, resulting in low conversion rates. Additionally, the page lacked a cohesive brand identity and was not optimized for mobile users, leading to high bounce rates.
                        `}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-[553px] w-full h-[206px] md:h-[261px] shrink-0 relative">
                  <Image
                    src="/assets/dartspay/research.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex gap-6 md:flex-row flex-col items-center">
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
                        During ideation, I collaborated with Dartspay’s
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
                <div className="md:w-[472px] w-full h-[250px] md:h-[300px] shrink-0 relative">
                  <Image
                    src="/assets/dartspay/ideation.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex gap-6 md:flex-row flex-col items-center">
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
                        After finalizing the layout concepts, I created
                        low-fidelity wireframes to establish the framework for
                        the redesign. Once approved, these wireframes evolved
                        into high-fidelity prototypes that incorporated
                        Dartspay’s branding elements, such as its signature
                        color palette and iconography. Usability tests with
                        sample users provided feedback, which informed iterative
                        refinements.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-[412px] w-full h-[206px] md:h-[296px] shrink-0 relative">
                  <Image
                    src="/assets/dartspay/wireframe.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex md:mt-0 mt-[34px] gap-[84px] items-center">
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
                        In the Hi-fidelity phase, I prioritized a clean and
                        modern aesthetic. Key features included a prominent
                        headline above the fold that clearly communicated
                        Dartspay’s unique selling proposition, strategically
                        placed CTAs like “Get Started” or “Explore Pricing,” and
                        a streamlined benefits section. The page was optimized
                        for mobile responsiveness, ensuring seamless navigation
                        and interaction across all devices. Trust-building
                        elements such as client logos, testimonials, and
                        security assurances were added to establish credibility.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="w-full relative flex items-end mt-[100px] md:justify-center justify-between">
          <div className="w-[667px] h-[500px] md:h-[1448px] relative z-10">
            <Image
              src="/assets/dartspay/mockup1.png"
              alt=""
              sizes="100vw"
              fill
            />
          </div>
          <div className="w-[573px] h-[400px] md:h-[1266px] ml-[-183px] relative z-0">
            <Image
              src="/assets/dartspay/mockup2.png"
              alt=""
              sizes="100vw"
              fill
            />
          </div>
        </div>
        <Container>
          <div className="mt-[60px] py-[54px] flex gap-[10px] flex-col">
            <div className="flex flex-col">
              <TextWrapper>
                <span className="gd1 font-bold tracking-[-1.442px] md:text-[42px] text-[26px] font-syne">
                  Results
                </span>
              </TextWrapper>
            </div>
            <div className="flex flex-col">
              <TextWrapper>
                <span className="gd1 font-medium tracking-[-0.36px] text-xl font-outfit">
                  The redesigned landing page, now live on Dartspay, delivered
                  impressive results. User engagement increased by 40%, as
                  reflected in longer session durations. The conversion rate for
                  sign-ups improved from 5% to 18%, thanks to the strategic
                  placement of CTAs and clear communication of benefits. Mobile
                  bounce rates dropped by 25% due to enhanced responsiveness and
                  usability.
                </span>
              </TextWrapper>
            </div>
          </div>
          <div className="py-[43px] flex flex-col gap-2 items-center">
            <TextWrapper>
              <span className="gd1 font-medium tracking-[-0.36px]  text-[42px] font-syne">
                Live website
              </span>
            </TextWrapper>
            <span className="whitespace-pre-line text-xl font-light font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5] md:text-left text-center">
              Click the icon below to view the live website design for Dartspay
            </span>
            <div className="flex items-center gap-2 md:gap-[28px] mt-4">
              <div className="flex items-center gap-1 md:gap-[8px]">
                <ArrowRightIcon />
                <ArrowRightIcon />
                <ArrowRightIcon />
                <ArrowRightIcon />
                <ArrowRightIcon />
              </div>
              <a
                href="https://www.dartspay.com/"
                target="__blank"
                className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative  group"
                //onMouseEnter={() => onCursor("hovered")}
                //onMouseLeave={() => onCursor("")}
              >
                <span className="group-hover:text-black">
                  <NetIcon />
                </span>
              </a>
              <div className="flex items-center gap-1 md:gap-[8px]">
                <ArrowleftIcon />
                <ArrowleftIcon />
                <ArrowleftIcon />
                <ArrowleftIcon />
                <ArrowleftIcon />
              </div>
            </div>
          </div>
        </Container>
        <OtherProjects />
      </div>
    </>
  );
}
