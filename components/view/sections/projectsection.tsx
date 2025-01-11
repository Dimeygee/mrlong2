import Image from "next/image";

import Marquee from "../marquee";

export const ProjectSection = () => {
  return (
    <>
      <div className="pt-24 pb-28 overflow-hidden flex gap-5">
        <Marquee duration={30}>
          <div className="flex gap-5 items-center">
            {Projects.map((project: string, index: number) => {
              return (
                <div
                  className="w-[191px] md:w-[322px] shrink-0 h-[133px] md:h-[225px] relative rounded-[10.461px] overflow-hidden"
                  key={index}
                >
                  <Image src={`${project}`} alt="project" fill sizes="100vw" />
                </div>
              );
            })}
          </div>
        </Marquee>
        <Marquee duration={30}>
          <div className="flex gap-5 items-center">
            {Projects.map((project: string, index: number) => {
              return (
                <div
                  className="w-[191px] md:w-[322px] shrink-0 h-[133px] md:h-[225px] relative rounded-[10.461px] overflow-hidden"
                  key={index}
                >
                  <Image src={`${project}`} alt="project" fill sizes="100vw" />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </>
  );
};

const Projects: string[] = [
  "/assets/project1.png",
  "/assets/project2.png",
  "/assets/project3.png",
  "/assets/project4.png",
  "/assets/project5.png",
  "/assets/project6.png",
  "/assets/project7.png",
  "/assets/project8.png",
  "/assets/project9.png",
];
