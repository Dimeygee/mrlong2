import { Container } from "@/components/view/container";
import HeroTextWrapper from "@/components/view/herotextwrapper";
import Image from "next/image";
import TextWrapper from "@/components/view/textwrapper";
import { KeyFeatures } from "@/components/myproject/keyfeatures";
import { OtherProjects } from "@/components/myproject/otherproject";
import { MobileKeyFeatures } from "@/components/myproject/mobilekeyfeatures";
import { ArrowRightIcon, Figma, ArrowleftIcon } from "@/icon";

import Head from "next/head"

export default function ValorExchange() {
  return (
    <>
      <Head>
        <title>mrlong - Valor Exchange</title>
        <meta
          name="description"
          content="Creating a Seamless User Experience for Effortless Cryptocurrency Trading"
        />
        <meta
          name="keywords"
          content="Digital Product Designer, UI/UX, Web Design, Interactive Design, Product Development"
        />
        <meta name="author" content="mrlong" />
        <meta property="og:title" content="mrlong - Valor Exchange" />
        <meta
          property="og:description"
          content="Creating a Seamless User Experience for Effortless Cryptocurrency Trading"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://mrlong.vercel.com/valorexchange"
        />
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
                    2022
                  </span>
                  <div className="my-[10px] h-[1px] bg-white/[0.4] w-full"></div>

                  <div className="text-[32px] font-bold tracking-[-1.442px] font-syne leading-[1] md:flex hidden">
                    <HeroTextWrapper>
                      <h3 className="gd1">
                        ValorExchange: Creating a Seamless{" "}
                      </h3>
                      <h3 className="gd1">User Experience for Effortless </h3>
                      <h3 className="gd1">Cryptocurrency Trading</h3>
                    </HeroTextWrapper>
                  </div>
                  <div className="text-[32px] font-bold tracking-[-1.442px] font-syne leading-[1] md:hidden flex">
                    <HeroTextWrapper>
                      ValorExchange: Creating a Seamless User Experience for
                      Effortless Cryptocurrency Trading
                    </HeroTextWrapper>
                  </div>
                </div>
                <div className="text-xl tracking-[-0.36px] leading-[25.2px] font-outfit grow-[1]">
                  <span>
                    <span className="text-white font-medium ">
                      ValorExchange
                    </span>{" "}
                    -{" "}
                  </span>
                  <span className="text-white/[0.5] font-light">
                    A revolutionary platform designed to provide a smooth,
                    intuitive experience for cryptocurrency users to buy, sell,
                    or exchange tokens without the typical barriers and
                    complexities that deter or frustrate many users.
                    ValorExchange prioritizes simplicity, accessibility, and
                    ease of use, empowering users to participate in crypto
                    trading with confidence, regardless of their experience
                    level.
                  </span>
                </div>
              </div>
              <div className="w-full md:h-[542px] h-[153px] relative">
                <Image src="/assets/valor.png" fill sizes="100vw" alt="" />
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
                    ValorExchange is designed to simplify the world of
                    cryptocurrency trading, empowering users to buy, sell, and
                    exchange tokens without facing the typical complexities and
                    barriers that deter many individuals from fully engaging
                    with digital assets. With an emphasis on user-centered
                    design, ValorExchange prioritizes ease, security, and
                    intuitive functionality, making it accessible to crypto
                    novices and seasoned traders alike.
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
                  {`The cryptocurrency trading environment is often complex, laden with technical jargon and unintuitive processes that overwhelm both new and experienced users. Common barriers include confusing interfaces, fragmented workflows, and a lack of clear guidance on transactions. These challenges deter potential investors and frustrate experienced traders, limiting adoption in the digital currency market.
                ValorExchange aims to address these issues by creating a platform that facilitates effortless and secure trading of cryptocurrency tokens. By focusing on clarity and intuitive design, ValorExchange allows users to engage in crypto transactions seamlessly, while providing essential tools to manage their assets securely.
                `}
                </p>
              </div>
            </div>
            <div className="flex md:gap-8 md:flex-row flex-col">
              <div className="md:grow flex gap-3 items-center md:order-0 order-1">
                <div className="w-[289px] h-[112px] md:h-[138px] relative">
                  <Image src="/assets/bitcoin.png" fill sizes="100vw" alt="" />
                </div>
                <div className="w-[142px] h-[112px] md:h-[138px] relative">
                  <Image src="/assets/data.png" fill sizes="100vw" alt="" />
                </div>
              </div>
              <div className="grow">
                <div className="md:py-[54px] py-4 flex gap-[10px] flex-col">
                  <div className="flex flex-col">
                    <TextWrapper>
                      <span className="gd1 font-bold tracking-[-1.442px] text-[26px] md:text-[42px] font-syne">
                        Target audience
                      </span>
                    </TextWrapper>
                  </div>
                  <div className="flex flex-col">
                    <TextWrapper>
                      <span className="font-medium tracking-[-0.36px] text-xl font-outfit text-white/[0.5]">
                        Crypto individuals: Users with varying levels of
                        experience in cryptocurrency trading, ranging from
                        beginners who seek simplicity and guidance to advanced
                        traders who prioritize efficiency and functionality.
                      </span>
                    </TextWrapper>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[54px] flex flex-col md:items-center">
              <TextWrapper>
                <h2 className="gd1 font-bold tracking-[-1.442px] text-[26px] md:text-[42px] font-syne">
                  Design process
                </h2>
              </TextWrapper>
            </div>
            <div className="flex flex-col gap-[94px]">
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
                        {`To ensure ValorExchange would address user pain points effectively, I conducted detailed user research, including surveys and interviews. This research brought forward several key insights:
                            Complexity: Many platforms offer advanced functionality at the cost of usability, especially for newcomers.
                            User Frustration: Users find it difficult to navigate trading options, leading to confusion and sometimes costly mistakes.
                            Security Concerns: While most platforms emphasize security, the measures in place often disrupt the user experience, leaving users frustrated or deterred from trading.
                    These insights informed my approach to the platform, ensuring that usability and security were core to the design.
                        `}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-[571px] w-full h-[133px] md:h-[219px] shrink-0 relative">
                  <Image src="/assets/research.png" fill sizes="100vw" alt="" />
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
                        Building on the research, I began the ideation phase
                        with a central question: How can I make cryptocurrency
                        trading as seamless and intuitive as possible?
                        Brainstorming sessions generated potential features and
                        design approaches, such as streamlined navigation and a
                        minimalist interface, which would make the platform both
                        functional and approachable. I also explored
                        customizable options, enabling users to switch between a
                        basic view for quick trades and an advanced view for
                        detailed analysis. This modular approach helps
                        ValorExchange cater to both beginners and more
                        experienced users.e to the design.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[346px] h-[322px] shrink-0 relative">
                  <Image src="/assets/ideation.png" fill sizes="100vw" alt="" />
                </div>
              </div>
              <div className="w-full flex md:flex-row flex-col gap-[32px]  md:gap-[84px] md:items-center">
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
                        In the wireframing phase, I created low-fidelity
                        wireframes to define the layout, navigation flow, and
                        core functionality of the platform. The primary focus
                        here was to ensure an intuitive user journey, from
                        signing up to completing a transaction. I also
                        identified specific pain points in the user journey that
                        could be simplified or restructured to improve flow and
                        reduce confusion.
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
                        With feedback from the wireframes, I moved to
                        high-fidelity prototypes, incorporating final branding,
                        typography, and color schemes. The interface was
                        designed to be visually appealing yet highly functional,
                        using clean lines, intuitive icons, and concise
                        language. I focused on clear call-to-action buttons,
                        streamlined navigation, and an unobtrusive yet strong
                        security layer to ensure a secure trading experience.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-[60px] relative h-[436px] md:h-[960px]">
              <div className="absolute z-20 bottom-0 left-[100px]">
                <div>
                  <Image
                    src="/assets/firstpage.png"
                    sizes="100vw"
                    alt=""
                    className=""
                    width={667}
                    height={889}
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-[100px]">
                <div>
                  <Image
                    src="/assets/secondpage.png"
                    sizes="100vw"
                    alt=""
                    className=""
                    width={573}
                    height={777}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="w-full md:h-[1024px] h-[303px] relative">
          <Image src="/assets/valormockup.png" sizes="100vw" alt="" fill />
        </div>
        <Container>
          <KeyFeatures />
          <MobileKeyFeatures slides={slidesData} />
          <div className="mt-[60px] py-[54px] flex gap-[10px] flex-col">
            <div className="flex flex-col">
              <TextWrapper>
                <span className="gd1 font-bold tracking-[-1.442px] text-[26px] md:text-[42px] font-syne">
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
              Click the icon below to view the figma design for Valor Exchange
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
                href="https://www.figma.com/file/2gavLGb1lPAxI9G7nEVwG5/Odebiyi-Ridwan-Figma-Portfolio?node-id=0%3A1"
                target="__blank"
                className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative group"
                //onMouseEnter={() => onCursor("hovered")}
                //onMouseLeave={() => onCursor("")}
              >
                <span className="group-hover:text-black">
                  <Figma />
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


const slidesData = [
  {
    title: "Intuitive Trading Interface",
    description:
      "The core trading interface allows users to execute buy, sell, or exchange transactions with just a few clicks, using straightforward language and guiding tooltips.",
    imageSrc: "/assets/pyd1.png",
  },
  {
    title: "Simplified Dashboard",
    description:
      "Users have access to a dashboard that displays only the most crucial information, minimizing clutter while providing essential details on holdings, transaction history, and market trends.",
    imageSrc: "/assets/pyd2.png",
  },
  {
    title: "Enhanced Security Measures",
    description:
      "ValorExchange incorporates advanced security features, such as two-factor authentication and automated transaction verification, ensuring security without disrupting the user experience.",
    imageSrc: "/assets/pyd3.png",
  },
];
