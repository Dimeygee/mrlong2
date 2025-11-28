/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { ArrowRightIcon, Globe, Repair } from "@/icon";
import Link from "next/link";

interface ProblemListType {
  intro: string;
  list: string[];
  outro: string;
}
interface ProjectLayoutProps {
  projectTitle: string;
  projectSubtitle: string;
  mainImage: string;
  overviewText: string;
  problemText?: string;
  designGoals?: string[];
  approach?: string[] | string;
  keyFeatures?: { title: string; sublinks?: string[] }[];
  visualLanguageText?: string;
  impactText?: string;
  futureEnhancements?: string[];
  conclusionText?: string;
  additionalImages?: string[];
  children?: React.ReactNode;
  mid?: string;
  hassix?: string | null;
  hasone?: string | null;
  userexperience?: string;
  ProblemList?: ProblemListType;
  approachlist?: ProblemListType;
  impactList?: ProblemListType;
  link: string;
}

export default function ProjectLayout({
  projectTitle,
  projectSubtitle,
  mainImage,
  overviewText,
  problemText,
  designGoals = [],
  approach = [],
  keyFeatures = [],
  userexperience,
  visualLanguageText,
  impactText,
  futureEnhancements = [],
  conclusionText,
  additionalImages = [],
  children,
  mid,
  hassix,
  hasone,
  ProblemList,
  approachlist,
  impactList,
  link,
}: ProjectLayoutProps) {
  console.log(approach, impactText);
  return (
    <>
      <div className="pt-[120px] sm:pt-[140px] md:pt-[164px]">
        {/* HEADER */}
        <div className="w-full max-w-[584px] mx-auto px-4">
          <div className="py-3 px-5 flex justify-between items-center rounded-t-[24px] md:rounded-t-[32px] bg-white/10">
            <span className="text-base sm:text-lg font-bold font-syne uppercase text-white">
              {projectTitle}
            </span>
            <span className="text-base sm:text-lg font-light font-syne uppercase text-white">
              {projectSubtitle}
            </span>
          </div>

          {/* MAIN IMAGE */}
          <div className="mt-3 rounded-b-[20px] md:rounded-b-[25px] h-[220px] sm:h-[280px] md:h-[352px] overflow-hidden relative">
            <video
              src={`/assets/vids/${mainImage}.mp4`}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          {/* IMPORTANT LINKS */}
          <div className="mt-6 flex flex-col gap-3">
            <span className="font-outfit text-sm sm:text-base uppercase text-white/60">
              Important links
            </span>
            <Link
              href={link || "#"}
              target={link ? "__blank" : undefined}
              className="rounded-full px-5 py-3 flex justify-between bg-white/10 items-center cursor-pointer"
              title={link ? "Open website" : "Work in progress"}
            >
              {link ? (
                <div className="flex gap-3 items-center">
                  <span >
                    <Globe />
                  </span>
                  <span className="uppercase font-syne text-white text-sm sm:text-lg">
                    View live website here
                  </span>
                </div>
              ) : (
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 sm:w-[37px] sm:h-[37px]">
                    <Repair />
                  </div>
                  <span className="uppercase font-syne text-white text-sm sm:text-lg">
                    product is in active development...
                  </span>
                </div>
              )}

              <ArrowRightIcon currentColor={"rgba(255,255,255,0.1)"} />
            </Link>
          </div>

          {/* OVERVIEW */}
          <div className="flex flex-col gap-4 mt-14">
            <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
              Overview
            </span>
            <p className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg leading-relaxed">
              {overviewText}
            </p>
          </div>

          {/* PROBLEM */}

          {ProblemList ? (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                The Problem
              </span>
              <span className="whitespace-pre-line  text-white/60 font-outfit text-base sm:text-lg leading-relaxed">
                {ProblemList.intro}
                <ul className="text-white/60 whitespace-pre-line font-outfit font-normal text-base sm:text-lg leading-relaxed pl-7 list-disc">
                  {ProblemList.list.map((problem, index) => {
                    return <li key={index}>{problem}</li>;
                  })}
                </ul>

                {ProblemList.outro}
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                The Problem
              </span>
              <p className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg leading-relaxed">
                {problemText}
              </p>
            </div>
          )}

          {/* DESIGN GOALS */}
          {designGoals.length > 0 && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Design Goals
              </span>
              <span className="whitespace-pre-line  text-white/60 font-outfit text-base sm:text-lg leading-relaxed">
                <ul className="text-white/60 whitespace-pre-line font-outfit font-normal text-base sm:text-lg leading-relaxed pl-7 list-disc">
                  {designGoals.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              </span>
            </div>
          )}

          {/* MID IMAGE */}
          <div className="h-[250px] sm:h-[320px] md:h-[400px] relative mt-14">
            <Image src={`${mid}`} alt="" fill className="object-cover" />
          </div>

          {/* APPROACH */}
          {approachlist && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Approach
              </span>
              <span className="whitespace-pre-line leading-[-0.36px]  text-white/60 font-outfit text-base sm:text-lg ">
                {approachlist.intro}
                <ul className="text-white/60 whitespace-pre-line font-outfit font-normal text-base sm:text-lg  pl-7 list-disc">
                  {approachlist.list.map((problem, index) => {
                    return <li key={index}>{problem}</li>;
                  })}
                </ul>

                {approachlist.outro}
              </span>
            </div>
          )}

          {/* KEY FEATURES */}
          {keyFeatures.length > 0 && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Key Features
              </span>
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex flex-col gap-1 relative pl-9">
                  <div className="absolute w-1 h-1 bg-white rounded-full left-[13px] top-3"></div>
                  <span className="text-white font-syne text-lg">
                    {feature.title}
                  </span>
                  {feature.sublinks?.map((sub, j) => (
                    <span
                      key={j}
                      className="text-white/60 font-outfit text-base sm:text-lg"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* USER EXPERIENCE */}
          {userexperience && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                User Experience
              </span>
              <p className="text-white/60 whitespace-pre-line font-outfit text-base sm:text-lg leading-relaxed">
                {userexperience}
              </p>
            </div>
          )}

          {/* VISUAL LANGUAGE */}
          {visualLanguageText && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Visual Language
              </span>
              <p className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg leading-relaxed">
                {visualLanguageText}
              </p>
            </div>
          )}
        </div>

        {/* MIDDLE IMAGES SECTION */}
        {hasone && hassix && (
          <div className="w-full max-w-[900px] mx-auto flex flex-col gap-4 mt-14 px-4">
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px]">
              <Image src={hasone} alt="image" fill className="object-cover" />
            </div>
            <div className="relative h-[1200px] sm:h-[1700px] md:h-[2270px]">
              <Image src={hassix} alt="image" fill className="object-cover" />
            </div>
          </div>
        )}

        {/* ADDITIONAL IMAGES */}
        {additionalImages.length > 0 && !hasone && (
          <div className="w-full max-w-[900px] mx-auto mt-14 flex flex-col gap-4 px-4">
            {/* First Image */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px]">
              <Image
                src={additionalImages[0]}
                fill
                className="object-cover"
                alt=""
              />
            </div>

            {/* Second + Third images */}
            {additionalImages.length > 2 && (
              <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-[350px] md:h-[400px]">
                <div className="relative w-full sm:w-[65%] h-[250px] sm:h-full">
                  <Image
                    src={additionalImages[1]}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="relative w-full sm:w-[35%] h-[250px] sm:h-full">
                  <Image
                    src={additionalImages[2]}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </div>
            )}

            {/* 4 + 5 */}
            {additionalImages.length > 4 && (
              <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-[350px] md:h-[400px]">
                <div className="relative w-full sm:w-[35%] h-[250px] sm:h-full">
                  <Image
                    src={additionalImages[3]}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="relative w-full sm:w-[65%] h-[250px] sm:h-full">
                  <Image
                    src={additionalImages[4]}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* IMPACT, FUTURE ENHANCEMENTS, CONCLUSION */}
        <div className="w-full max-w-[584px] mx-auto px-4 flex flex-col">
          {impactList && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Impact
              </span>
              <span className="whitespace-pre-line leading-[-0.36px]  text-white/60 font-outfit text-base sm:text-lg ">
                {impactList.intro}
                <ul className="text-white/60 whitespace-pre-line font-outfit font-normal text-base sm:text-lg  pl-7 list-disc">
                  {impactList.list.map((problem, index) => {
                    return <li key={index}>{problem}</li>;
                  })}
                </ul>

                {impactList.outro}
              </span>
            </div>
          )}

          {futureEnhancements.length > 0 && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Future Enhancements
              </span>
              <ul className="text-white/60 whitespace-pre-line font-outfit text-base sm:text-lg leading-relaxed pl-6 list-disc">
                {futureEnhancements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {conclusionText && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Conclusion
              </span>
              <p className="text-white/60 whitespace-pre-line font-outfit text-base sm:text-lg leading-relaxed">
                {conclusionText}
              </p>
            </div>
          )}
        </div>
      </div>

      {children}
    </>
  );
}
