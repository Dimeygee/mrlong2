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
  additionalImages?: string[];
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
            <Image
              src={mainImage}
              alt={`${projectTitle} screenshot`}
              fill
              className="object-cover"
            />
          </div>

          {/* IMPORTANT LINKS */}
          <div className="mt-6 flex flex-col gap-3">
            <span className="font-outfit text-sm sm:text-base text-white/60">
              important links
            </span>
            <div className="rounded-full px-5 py-3 flex justify-between bg-white/10 items-center">
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 sm:w-[37px] sm:h-[37px]">
                  <Globe />
                </div>
                <span className="uppercase font-syne text-white text-sm sm:text-lg">
                  View live website here
                </span>
              </div>
              <ArrowRightIcon />
            </div>
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
          <div className="flex flex-col gap-4 mt-14">
            <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
              The Problem
            </span>
            <p className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg leading-relaxed">
              {problemText}
            </p>
          </div>

          {/* DESIGN GOALS */}
          {designGoals.length > 0 && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Design Goals
              </span>
              {designGoals.map((goal, i) => (
                <span
                  key={i}
                  className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg leading-relaxed"
                >
                  {goal}
                </span>
              ))}
            </div>
          )}

          {/* MID IMAGE */}
          <div className="h-[250px] sm:h-[320px] md:h-[400px] relative mt-14">
            <Image src={`${mid}`} alt="" fill className="object-cover" />
          </div>

          {/* APPROACH */}
          {approach && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Approach
              </span>
              {isArray(approach) ? (
                approach.map((item, i) => (
                  <span
                    key={i}
                    className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg leading-relaxed"
                  >
                    {item}
                  </span>
                ))
              ) : (
                <span className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg leading-relaxed">
                  {approach}
                </span>
              )}
            </div>
          )}

          {/* KEY FEATURES */}
          {keyFeatures.length > 0 && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Key Features
              </span>
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-white font-syne text-lg">
                    {feature.title}
                  </span>
                  {feature.sublinks?.map((sub, j) => (
                    <span
                      key={j}
                      className="text-white/60 font-outfit text-base sm:text-lg pl-4"
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
          {impactText && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Impact
              </span>
              <p className="text-white/60 whitespace-pre-line font-outfit text-base sm:text-lg leading-relaxed">
                {impactText}
              </p>
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
