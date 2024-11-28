import { Container } from "@/app/components/view/container";
import HeroTextWrapper from "@/app/components/view/herotextwrapper";
import Image from "next/image";
import TextWrapper from "@/app/components/view/textwrapper";
import { KeyFeatures } from "@/app/components/myproject/keyfeatures";
import { OtherProjects } from "@/app/components/myproject/otherproject";

export default function Athlerse() {
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
                      <h3 className="gd1">Athelrse: Gamifying Fitness for a</h3>
                      <h3 className="gd1">Connected, Motivated Community</h3>
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
              <div className="w-full h-[542px] relative">
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
                  {`Despite the growing interest in health and fitness, many individuals find it challenging to stay motivated and consistent with their wellness goals. Traditional fitness apps often miss the mark, failing to provide engaging tools or meaningful incentives that encourage long-term commitment. Athlerse addresses this issue by creating a hybrid platform where fitness meets rewards, combining workouts with gamification and community-building to make fitness a sustainable and fulfilling journey.
                `}
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="grow flex gap-3 items-center">
                <div className="w-[289px] h-[138px] relative">
                  <Image
                    src="/assets/athlerse/bitcoin.png"
                    fill
                    sizes="100vw"
                    alt=""
                  />
                </div>
                <div className="w-[142px] h-[138px] relative">
                  <Image
                    src="/assets/athlerse/data.png"
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
                <div className="w-[505px] h-[395px] shrink-0 relative">
                  <Image
                    src="/assets/athlerse/research.png"
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
                <div className="w-[480px] h-[365px] shrink-0 relative">
                  <Image
                    src="/assets/athlerse/ideation.png"
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
                        I sketched out low-fidelity wireframes to map user flows
                        and interactions. Key screens included the user
                        dashboard, workout tracking interface, community
                        leaderboard, and rewards store. Feedback during this
                        phase helped refine the design for better usability.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[296px] h-[296px] shrink-0 relative">
                  <Image
                    src="/assets/athlerse/wireframe.png"
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
              <div className="w-full h-[1024px] relative mx-auto rounded-[40px] overflow-hidden flex gap-[80px]">
                <div className="grow flex items-center">
                  <div className="relative w-full h-[716px]">
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
                  <div className="grow relative"></div>
                </div>
                <div className="grow flex items-center">
                  <div className="relative w-full h-[716px]">
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
        <div className="w-full h-[1024px] relative">
          <Image src="/assets/athlerse/mockup2.png" sizes="100vw" alt="" fill />
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
