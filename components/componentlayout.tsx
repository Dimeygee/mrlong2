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
  simpleGrid?: string[];
  projectName?: boolean;
}

/**
 * Mobile: renders as a natural-height block (w-full h-auto), no cropping.
 * Desktop (sm+): renders as a fixed-height container with object-cover fill.
 */
function ResponsiveImg({
  src,
  alt = "",
  desktopHeightClass = "sm:h-[480px]",
  widthClass = "w-full",
}: {
  src: string;
  alt?: string;
  desktopHeightClass?: string;
  widthClass?: string;
}) {
  return (
    <div className={`${widthClass} overflow-hidden`}>
      {/* Mobile – natural height */}
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full h-auto block sm:hidden`}
      />
      {/* Desktop – fixed height, object-cover */}
      <div className={`hidden sm:block relative w-full ${desktopHeightClass}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

/**
 * Full-bleed single image (used for mid, hasone, hassix, and wide singles).
 * Mobile: natural height. Desktop: fixed height with object-cover.
 */
function SingleResponsiveImg({
  src,
  alt = "",
  desktopHeightClass = "sm:h-[400px]",
}: {
  src: string;
  alt?: string;
  desktopHeightClass?: string;
}) {
  return (
    <div className="w-full overflow-hidden">
      {/* Mobile */}
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto block sm:hidden"
      />
      {/* Desktop */}
      <div className={`hidden sm:block relative w-full ${desktopHeightClass}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
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
  simpleGrid = [],
  projectName,
}: ProjectLayoutProps) {
  console.log(approach, impactText);
  return (
    <>
      <div className="pt-[120px] sm:pt-[140px] md:pt-[164px]">
        <div className="w-full max-w-[584px] mx-auto px-4">
          {/* ── Header ── */}
          <div className="py-3 px-5 flex justify-between items-center rounded-t-[24px] md:rounded-t-[32px] bg-white/10">
            <span className="text-base sm:text-lg font-bold font-syne uppercase text-white">
              {projectTitle}
            </span>
            <span className="text-base sm:text-lg font-light font-syne uppercase text-white">
              {projectSubtitle}
            </span>
          </div>

          {/* ── Hero video ── */}
          <div className="mt-3 rounded-b-[20px] md:rounded-b-[25px] h-[220px] sm:h-[280px] md:h-[352px] overflow-hidden relative">
            <video
              src={`/assets/vids/${mainImage}.webm`}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={`/assets/posters/${mainImage}.jpg`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          {/* ── Link ── */}
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
                  <span>
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

          {/* ── Overview ── */}
          <div className="flex flex-col gap-4 mt-14">
            <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
              Overview
            </span>
            <p className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg leading-relaxed">
              {overviewText}
            </p>
          </div>

          {/* ── Problem ── */}
          {ProblemList ? (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                The Problem
              </span>
              <span className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg leading-relaxed">
                {ProblemList.intro}
                <ul className="text-white/60 whitespace-pre-line font-outfit font-normal text-base sm:text-lg leading-relaxed pl-7 list-disc">
                  {ProblemList.list.map((problem, index) => (
                    <li key={index}>{problem}</li>
                  ))}
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

          {/* ── Design Goals ── */}
          {designGoals.length > 0 && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Design Goals
              </span>
              <ul className="text-white/60 whitespace-pre-line font-outfit font-normal text-base sm:text-lg leading-relaxed pl-7 list-disc">
                {designGoals.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Mid image ── */}
          {mid && (
            <div className="w-full mt-14 overflow-hidden">
              <SingleResponsiveImg
                src={mid}
                desktopHeightClass="sm:h-[400px]"
              />
            </div>
          )}

          {/* ── Approach ── */}
          {approachlist && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Approach
              </span>
              <span className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg">
                {approachlist.intro}
                <ul className="text-white/60 whitespace-pre-line font-outfit font-normal text-base sm:text-lg pl-7 list-disc">
                  {approachlist.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {approachlist.outro}
              </span>
            </div>
          )}

          {/* ── Key Features ── */}
          {keyFeatures.length > 0 && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Key Features
              </span>
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex flex-col gap-1 relative pl-9">
                  <div className="absolute w-1 h-1 bg-white rounded-full left-[13px] top-3" />
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

          {/* ── User Experience ── */}
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

          {/* ── Visual Language ── */}
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

        {/* ── hasone + hassix pair ── */}
        {hasone && hassix && (
          <div className="w-full max-w-[900px] mx-auto flex flex-col gap-4 mt-14 px-4">
            <SingleResponsiveImg
              src={hasone}
              alt="image"
              desktopHeightClass="sm:h-[400px]"
            />
            {/* hassix is intentionally tall on desktop to match the original */}
            <SingleResponsiveImg
              src={hassix}
              alt="image"
              desktopHeightClass="sm:h-[1700px] md:h-[2270px]"
            />
          </div>
        )}

        {/* ── simpleGrid ── */}
        {simpleGrid.length > 0 && (
          <div className="w-full max-w-[900px] mx-auto mt-14 flex flex-col gap-4 px-4">
            {simpleGrid.length >= 1 && (
              <SingleResponsiveImg
                src={simpleGrid[0]}
                desktopHeightClass="sm:h-[400px]"
              />
            )}

            {simpleGrid.length >= 3 && (
              <div className="flex flex-col sm:flex-row gap-4">
                <ResponsiveImg
                  src={simpleGrid[1]}
                  widthClass="w-full sm:w-[60%]"
                  desktopHeightClass="sm:h-[480px]"
                />
                <ResponsiveImg
                  src={simpleGrid[2]}
                  widthClass="w-full sm:w-[40%]"
                  desktopHeightClass="sm:h-[480px]"
                />
              </div>
            )}

            {simpleGrid.length >= 5 && (
              <div className="flex flex-col sm:flex-row gap-4">
                <ResponsiveImg
                  src={simpleGrid[3]}
                  widthClass="w-full sm:w-[40%]"
                  desktopHeightClass="sm:h-[480px]"
                />
                <ResponsiveImg
                  src={simpleGrid[4]}
                  widthClass="w-full sm:w-[60%]"
                  desktopHeightClass="sm:h-[480px]"
                />
              </div>
            )}
          </div>
        )}

        {/* ── additionalImages ── */}
        {additionalImages.length > 0 && !hasone && simpleGrid.length === 0 && (
          <div className="w-full max-w-[900px] mx-auto mt-14 flex flex-col gap-4 px-4">
            {additionalImages.length >= 2 && (
              <div className="flex flex-col sm:flex-row gap-4">
                <ResponsiveImg
                  src={additionalImages[0]}
                  widthClass="w-full sm:w-1/2"
                  desktopHeightClass="sm:h-[400px]"
                />
                <ResponsiveImg
                  src={additionalImages[1]}
                  widthClass="w-full sm:w-1/2"
                  desktopHeightClass="sm:h-[400px]"
                />
              </div>
            )}

            {additionalImages.length >= 3 && (
              <SingleResponsiveImg
                src={additionalImages[2]}
                desktopHeightClass="sm:h-[400px]"
              />
            )}

            {additionalImages.length >= 5 && (
              <div className="flex flex-col sm:flex-row gap-4">
                <ResponsiveImg
                  src={additionalImages[3]}
                  widthClass="w-full sm:w-[60%]"
                  desktopHeightClass="sm:h-[400px]"
                />
                <ResponsiveImg
                  src={additionalImages[4]}
                  widthClass="w-full sm:w-[40%]"
                  desktopHeightClass="sm:h-[400px]"
                />
              </div>
            )}

            {additionalImages.length >= 6 && (
              <SingleResponsiveImg
                src={additionalImages[5]}
                desktopHeightClass="sm:h-[400px]"
              />
            )}

            {additionalImages.length >= 8 && (
              <div className="flex flex-col sm:flex-row gap-4">
                <ResponsiveImg
                  src={additionalImages[6]}
                  widthClass={
                    projectName ? "w-full sm:w-[50%]" : "w-full sm:w-[60%]"
                  }
                  desktopHeightClass="sm:h-[400px]"
                />
                <ResponsiveImg
                  src={additionalImages[7]}
                  widthClass={
                    projectName ? "w-full sm:w-[50%]" : "w-full sm:w-[40%]"
                  }
                  desktopHeightClass="sm:h-[400px]"
                />
              </div>
            )}

            {additionalImages.length >= 11 && (
              <div className="flex flex-col sm:flex-row gap-4">
                <ResponsiveImg
                  src={additionalImages[8]}
                  widthClass="w-full sm:w-[40%]"
                  desktopHeightClass="sm:h-[400px]"
                />
                <ResponsiveImg
                  src={additionalImages[9]}
                  widthClass="w-full sm:w-[60%]"
                  desktopHeightClass="sm:h-[400px]"
                />
              </div>
            )}

            {additionalImages.length >= 11 && (
              <div className="flex flex-col sm:flex-row gap-4">
                <ResponsiveImg
                  src={additionalImages[10]}
                  widthClass={projectName ? "w-full" : "w-full sm:w-1/2"}
                  desktopHeightClass="sm:h-[400px]"
                />
                {!projectName && (
                  <ResponsiveImg
                    src={additionalImages[11]}
                    widthClass="w-full sm:w-1/2"
                    desktopHeightClass="sm:h-[400px]"
                  />
                )}
              </div>
            )}

            {additionalImages.length >= 12 && (
              <SingleResponsiveImg
                src={additionalImages[12]}
                desktopHeightClass="sm:h-[400px]"
              />
            )}
          </div>
        )}

        {/* ── Impact / Future / Conclusion ── */}
        <div className="w-full max-w-[584px] mx-auto px-4 flex flex-col">
          {impactList && (
            <div className="flex flex-col gap-4 mt-14">
              <span className="font-bold font-syne text-2xl sm:text-[28px] text-white">
                Impact
              </span>
              <span className="whitespace-pre-line text-white/60 font-outfit text-base sm:text-lg">
                {impactList.intro}
                <ul className="text-white/60 whitespace-pre-line font-outfit font-normal text-base sm:text-lg pl-7 list-disc">
                  {impactList.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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
