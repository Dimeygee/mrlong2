import Image from "next/image";


interface ProjectLayoutProps {
  projectTitle: string;
  projectSubtitle: string;
  mainImage: string;
  overviewText: string;
  problemText: string;
  designGoals?: string[];
  approach?: string[];
  keyFeatures?: { title: string; sublinks?: string[] }[];
  visualLanguageText?: string;
  impactText?: string;
  futureEnhancements?: string[];
  conclusionText?: string;
  additionalImages?: string[]; // images for the middle 900px section
  children?: React.ReactNode;
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
  visualLanguageText,
  impactText,
  futureEnhancements = [],
  conclusionText,
  additionalImages = [],
  children,
}: ProjectLayoutProps) {
  return (
    <>
      <div className="pt-[164px]">
        {/* HEADER */}
        <div className="w-[584px] mx-auto">
          <div className="py-[12px] px-[23px] flex justify-between items-center rounded-t-[32px] bg-[rgba(255,255,25,0.12)]">
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
              <div
                className="rounded-[100px] flex justify-between bg-[rgba(255,255,25,0.12)]"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-[37px] h-[37px]" />
                  <span className="uppercase font-syne text-white text-lg">
                    View life website here
                  </span>
                </div>
                <div className="w-[6px] h-[12px]" />
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

          {/* APPROACH */}
          {approach.length > 0 && (
            <div className="flex flex-col gap-4 mt-[64px]">
              <span className="font-bold font-syne text-[28px] text-white leading-none">
                Approach
              </span>
              {approach.map((item, i) => (
                <span
                  key={i}
                  className="whitespace-pre-line leading-[25.2px] tracking-[-0.36px] text-white/60 font-outfit text-lg"
                >
                  {item}
                </span>
              ))}
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
        {additionalImages.length > 0 && (
          <div className="w-[900px] mx-auto">
            <div className="mt-[64px] flex-col flex gap-4">
              {additionalImages.map((img, i) => {
                if (i === 1 || i === 2) {
                  // side-by-side layouts
                  return (
                    <div key={i} className="h-[400px] flex gap-4">
                      <div
                        className={`w-[${
                          i === 1 ? "65%" : "35%"
                        }] h-full relative`}
                      >
                        <Image
                          src={img}
                          fill
                          className="object-cover"
                          alt={`middle image ${i}`}
                        />
                      </div>
                      <div
                        className={`w-[${
                          i === 1 ? "35%" : "65%"
                        }] h-full relative`}
                      >
                        <Image
                          src={additionalImages[i + 1]}
                          fill
                          className="object-cover"
                          alt={`middle image ${i + 1}`}
                        />
                      </div>
                    </div>
                  );
                }
                return i === 0 ? (
                  <div key={i} className="h-[400px] relative">
                    <Image
                      src={img}
                      fill
                      className="object-cover"
                      alt={`middle image ${i}`}
                    />
                  </div>
                ) : null;
              })}
            </div>
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
