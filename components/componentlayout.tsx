import { isArray } from "lodash";
import Image from "next/image";
import { ArrowRightIcon, Globe } from "@/icon";

interface ProjectLayoutProps {
  projectTitle: string;
  projectSubtitle: string;
  mainImage: string;
  overviewText: string;
  problemText: string;
  designGoals?: string[];
  approach?: string[] | string;
  keyFeatures?: { title: string; sublinks?: string[] }[];
  visualLanguageText?: string;
  impactText?: string;
  futureEnhancements?: string[];
  conclusionText?: string;
  additionalImages?: string[]; // images for the middle 900px section
  children?: React.ReactNode;
  mid?: string;
  hassix?: string | null;
  hasone?: string | null;
  userexperience?: string;
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
}: ProjectLayoutProps) {
  return (
    <>
      <div className="pt-[164px]">
        {/* HEADER */}
        <div className="w-[584px] mx-auto">
          <div className="py-[12px] px-[23px] flex justify-between items-center rounded-t-[32px] bg-white/[0.12]">
            <span className="text-lg font-bold font-syne leading-none uppercase text-white">
              {projectTitle}
            </span>
            <span className="text-lg font-light font-syne leading-none uppercase text-white">
              {projectSubtitle}
            </span>
          </div>

          {/* MAIN IMAGE */}
          <div className="mt-[11px] rounded-b-[25px] h-[352px] overflow-hidden relative">
            <Image
              src={mainImage}
              alt={`${projectTitle} screenshot`}
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          {/* IMPORTANT LINKS */}
          <div className="mt-6 flex flex-col gap-[11px]">
            <span className="font-outfit text-base text-white/60 leading-none">
              important links
            </span>
            <div className="rounded-[100px] px-[23px] py-[12px] flex justify-between  bg-white/[0.12] items-center">
              <div className="flex gap-4 items-center">
                <div className="w-[37px] h-[37px]">
                  <Globe />
                </div>
                <span className="uppercase font-syne text-white text-lg">
                  View life website here
                </span>
              </div>
              <ArrowRightIcon />
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="flex flex-col gap-4 mt-[64px]">
            <span className="font-bold font-syne text-[28px] text-white leading-none">
              Overview
            </span>
            <p className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg">
              {overviewText}
            </p>
          </div>

          {/* PROBLEM */}
          <div className="flex flex-col gap-4 mt-[64px]">
            <span className="font-bold font-syne text-[28px] text-white leading-none">
              The Problem
            </span>
            <p className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg">
              {problemText}
            </p>
          </div>

          {/* DESIGN GOALS */}
          {designGoals.length > 0 && (
            <div className="flex flex-col gap-4 mt-[64px]">
              <span className="font-bold font-syne text-[28px] text-white leading-none">
                Design Goals
              </span>
              {designGoals.map((goal, i) => (
                <span
                  key={i}
                  className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg"
                >
                  {goal}
                </span>
              ))}
            </div>
          )}

          <div className="h-[400px] relative mt-[64px]">
            <Image src={`${mid}`} alt="" fill />
          </div>

          {/* APPROACH */}
          {approach.length > 0 && (
            <div className="flex flex-col gap-4 mt-[64px]">
              <span className="font-bold font-syne text-[28px] text-white leading-none">
                Approach
              </span>
              {isArray(approach) &&
                approach.map((item, i) => (
                  <span
                    key={i}
                    className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg"
                  >
                    {item}
                  </span>
                ))}
              {!isArray(approach) && (
                <span className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg">
                  {approach}
                </span>
              )}
            </div>
          )}

          {/* KEY FEATURES */}
          {keyFeatures.length > 0 && (
            <div className="flex flex-col gap-4 mt-[64px]">
              <span className="font-bold font-syne text-[28px] text-white leading-none">
                Key Features
              </span>
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-white font-syne text-lg">
                    {feature.title}
                  </span>
                  {feature.sublinks &&
                    feature.sublinks.map((sub, j) => (
                      <span
                        key={j}
                        className="text-white/60 font-outfit text-lg pl-4"
                      >
                        {sub}
                      </span>
                    ))}
                </div>
              ))}
            </div>
          )}

          {userexperience && (
            <div className="flex flex-col gap-4 mt-[64px]">
              <span className="font-bold font-syne text-[28px] text-white leading-none">
                User Experience
              </span>
              <p className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg">
                {userexperience}
              </p>
            </div>
          )}

          {/* VISUAL LANGUAGE */}
          {visualLanguageText && (
            <div className="flex flex-col gap-4 mt-[64px]">
              <span className="font-bold font-syne text-[28px] text-white leading-none">
                Visual Language
              </span>
              <p className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg">
                {visualLanguageText}
              </p>
            </div>
          )}
        </div>

        {/* MIDDLE IMAGES */}
        {hasone && hassix && (
          <div className="w-[900px] mx-auto flex flex-col gap-4 mt-[64px]">
            <div className="relative h-[400px]">
              <Image src={`${hasone}`} alt="hasone" fill />
            </div>
            <div className="relative h-[2270px]">
              <Image src={`${hassix}`} alt="hasone" fill />
            </div>
          </div>
        )}
        {additionalImages.length > 0 && !hasone && (
          <div className="w-[900px] mx-auto mt-[64px] flex flex-col gap-4">
            {/* First image */}
            <div className="h-[400px] relative">
              <Image
                src={additionalImages[0]}
                fill
                className="object-cover"
                alt=""
              />
            </div>

            {/* Second + Third images side by side */}
            {additionalImages.length > 2 && (
              <div className="flex gap-4 h-[400px]">
                <div className="w-[65%] h-full relative">
                  <Image
                    src={additionalImages[1]}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="w-[35%] h-full relative">
                  <Image
                    src={additionalImages[2]}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </div>
            )}

            {/* Fourth + Fifth side by side (if available) */}
            {additionalImages.length > 4 && (
              <div className="flex gap-4 h-[400px]">
                <div className="w-[35%] h-full relative">
                  <Image
                    src={additionalImages[3]}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="w-[65%] h-full relative">
                  <Image
                    src={additionalImages[4]}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </div>
            )}

            {hassix && (
              <div className="mt-4 relative h-[1456px]">
                <Image src={hassix} alt="" fill />
              </div>
            )}
          </div>
        )}

        {/* IMPACT, FUTURE ENHANCEMENTS, CONCLUSION */}
        <div className="w-[584px] mx-auto flex flex-col">
          {impactText && (
            <div className="flex flex-col gap-4 mt-[64px]">
              <span className="font-bold font-syne text-[28px] text-white leading-none">
                Impact
              </span>
              <p className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg">
                {impactText}
              </p>
            </div>
          )}

          {futureEnhancements.length > 0 && (
            <div className="flex flex-col gap-4 mt-[64px]">
              <span className="font-bold font-syne text-[28px] text-white leading-none">
                Future Enhancements
              </span>
              <ul className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg pl-8">
                {futureEnhancements.map((item, i) => (
                  <li key={i} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {conclusionText && (
            <div className="flex flex-col gap-4 mt-[64px]">
              <span className="font-bold font-syne text-[28px] text-white leading-none">
                Conclusion
              </span>
              <p className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg">
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
