import { Container } from "@/components/view/container";
import HeroTextWrapper from "@/components/view/herotextwrapper";
import Image from "next/image";
import TextWrapper from "@/components/view/textwrapper";
import { AthlerseKeyFeatures } from "@/components/myproject/keyfeatures/athlerse";
import { OtherProjects } from "@/components/myproject/otherproject";
import { MobileKeyFeatures } from "@/components/myproject/mobilekeyfeatures";
import { ArrowRightIcon, NetIcon, ArrowleftIcon } from "@/icon";
import Head from "next/head";

export default function Athlerse() {
  return (
    <>
      <Head>
        <title>mrlong - Athlerse</title>
        <meta
          name="description"
          content="Athelrse: Gamifying Fitness for a Connected, Motivated Community"
        />
        <meta
          name="keywords"
          content="Digital Product Designer, UI/UX, Web Design, Interactive Design, Product Development"
        />
        <meta name="author" content="mrlong" />
        <meta property="og:title" content="mrlong - Home" />
        <meta
          property="og:description"
          content="Athelrse: Gamifying Fitness for a Connected, Motivated Community"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrlong.vercel.com/athlerse" />
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

                  <div className="text-[32px] font-bold tracking-[-1.442px] font-syne leading-[1] md:flex hidden">
                    <HeroTextWrapper>
                      <h3 className="gd1">Athelrse: Gamifying Fitness for a</h3>
                      <h3 className="gd1">Connected, Motivated Community</h3>
                    </HeroTextWrapper>
                  </div>
                  <div className="text-[32px] font-bold tracking-[-1.442px] font-syne leading-[1] md:hidden flex">
                    <HeroTextWrapper>
                      Athelrse: Gamifying Fitness for a Effortless
                      Cryptocurrency Trading Connected, Motivated Community
                    </HeroTextWrapper>
                  </div>
                </div>
                <div className="text-xl tracking-[-0.36px] leading-[25.2px] font-outfit grow-[1]">
                  <span className="text-white/[0.5] font-light">
                    Fitness is more than just a journey; it’s a lifestyle, but
                    staying committed can often feel like an uphill battle.
                    Despite the rise of fitness apps, many fail to provide the
                    engagement and incentives needed to keep users motivated.
                  </span>
                </div>
              </div>
              <div className="w-full md:h-[542px] h-[153px] relative">
                <Image
                  src="/assets/athlerse/hero.png"
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
                    Fitness transcends being merely a journey; it embodies a
                    lifestyle, yet maintaining commitment can frequently
                    resemble an uphill struggle. Although fitness apps have
                    proliferated, many do not offer the engagement and
                    incentives necessary to sustain user motivation. Athlerse
                    seeks to alter this dynamic. By integrating gamification,
                    community involvement, and blockchain rewards, Athlerse
                    redefines fitness as a gratifying and social endeavor. It
                    serves as a platform where every workout matters—not only
                    for your health but also for fostering a sense of
                    accomplishment and community.
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
                  {`Despite the growing interest in health and fitness, many individuals find it challenging to stay motivated and consistent with their wellness goals. Traditional fitness apps often miss the mark, failing to provide engaging tools or meaningful incentives that encourage long-term commitment. Athlerse addresses this issue by creating a hybrid platform where fitness meets rewards, combining workouts with gamification and community-building to make fitness a sustainable and fulfilling journey.
                `}
                </p>
              </div>
            </div>
            <div className="flex md:gap-8 md:flex-row flex-col">
              <div className="md:grow flex gap-3 items-center md:order-0 order-1">
                <div className="w-[289px] h-[112px] md:h-[138px] relative">
                  <Image
                    src="/assets/athlerse/bitcoin.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
                <div className="w-[142px] h-[112px] md:h-[138px] relative">
                  <Image
                    src="/assets/athlerse/data.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
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
                        Athlerse is designed for fitness enthusiasts who seek
                        motivation, community, and tangible rewards for their
                        efforts. From beginners trying to kickstart their
                        wellness journey to seasoned athletes looking for
                        innovative ways to stay engaged, Athlerse caters to a
                        broad spectrum of fitness lovers.
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
            <div className="flex flex-col md:gap-[94px]">
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
                        {`I began by exploring the barriers that hinder users from staying consistent with fitness apps. Through surveys and user interviews, I uncovered three key challenges:
                        Lack of meaningful rewards for effort.
                        Absence of a supportive and interactive community.
                        Limited motivation from traditional goal-tracking mechanisms.
                        These insights shaped the foundation of Athlerse’s unique approach—focusing on gamification, tangible rewards, and community-driven engagement.
                        `}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-[505px] w-full h-[350px] shrink-0 relative">
                  <Image
                    src="/assets/athlerse/research.png"
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
                        With these insights in hand, I brainstormed innovative
                        features to address user pain points. Core ideas
                        included integrating blockchain technology for digital
                        rewards, creating a gamified workout experience, and
                        fostering a global community through challenges and
                        social features.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-[480px] w-full h-[365px] shrink-0 relative">
                  <Image
                    src="/assets/athlerse/ideation.png"
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
                        I sketched out low-fidelity wireframes to map user flows
                        and interactions. Key screens included the user
                        dashboard, workout tracking interface, community
                        leaderboard, and rewards store. Feedback during this
                        phase helped refine the design for better usability.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-[296px] w-full h-[250px] md:h-[296px] shrink-0 relative">
                  <Image
                    src="/assets/athlerse/wireframe.png"
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
                        Once the structure was finalized, I developed
                        high-fidelity prototypes, focusing on a clean, modern
                        interface that conveys energy and motivation. Colors,
                        typography, and visual elements were carefully chosen to
                        evoke a sense of excitement and community.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-[60px] relative">
              <div className="w-full h-[300px] md:h-[1154px] relative mx-auto rounded-[40px] overflow-hidden flex gap-[80px]">
                <div className="grow flex items-center">
                  <div className="relative w-full h-[150px] md:h-[716px]">
                    <Image
                      src="/assets/athlerse/getfit.png"
                      sizes="100vw"
                      alt=""
                      fill
                    />
                  </div>
                </div>
                <div className="grow flex flex-col gap-[80px]">
                  <div className="h-[50%] relative">
                    <Image
                      src="/assets/athlerse/unleash.png"
                      sizes="100vw"
                      alt=""
                      fill
                    />
                  </div>
                  <div className="h-[50%] relative">
                    <Image
                      src="/assets/athlerse/activities.png"
                      sizes="100vw"
                      alt=""
                      fill
                    />
                  </div>
                </div>
                <div className="grow flex items-center">
                  <div className="relative w-full h-[150px] md:h-[716px]">
                    <Image
                      src="/assets/athlerse/createaccount.png"
                      sizes="100vw"
                      alt=""
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="w-full h-[300px] md:h-[1200px] relative">
          <Image src="/assets/athlerse/mockup2.png" sizes="100vw" alt="" fill />
        </div>
        <Container>
          <AthlerseKeyFeatures />
          <MobileKeyFeatures slides={slidesData} />
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
                Live website
              </span>
            </TextWrapper>
            <span className="whitespace-pre-line text-xl font-light font-outfit tracking-[-0.36px] leading-[25.2px] text-white/[0.5] md:text-left text-center">
              Click the icon below to view the live website design for Athlerse
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
                href="https://www.athlerse.com/"
                target="__blank"
                className="bgs w-[56px] h-[56px] text-white hover-item hover:text-black transition-colors duration-75 flex justify-center text-2xl font-bold items-center relative swiper-button-right group"
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



const slidesData = [
  {
    title: "Intuitive Trading Interface",
    description:
      "The core trading interface allows users to execute buy, sell, or exchange transactions with just a few clicks, using straightforward language and guiding tooltips.",
    imageSrc: "/assets/athlerse/key1.png",
  },
  {
    title: "Simplified Dashboard",
    description:
      "Users have access to a dashboard that displays only the most crucial information, minimizing clutter while providing essential details on holdings, transaction history, and market trends.",
    imageSrc: "/assets/athlerse/key2.png",
  },
  {
    title: "Enhanced Security Measures",
    description:
      "ValorExchange incorporates advanced security features, such as two-factor authentication and automated transaction verification, ensuring security without disrupting the user experience.",
    imageSrc: "/assets/athlerse/key3.png",
  },
  {
    title: "Enhanced Security Measures",
    description:
      "ValorExchange incorporates advanced security features, such as two-factor authentication and automated transaction verification, ensuring security without disrupting the user experience.",
    imageSrc: "/assets/athlerse/key4.png",
  },
];
