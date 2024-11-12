import { Container } from "../container";
import TextWrapper from "../textwrapper"

export const About = () => {
  return (
    <div id="about" className="mb-[103px]">
      <Container>
        <div className="flex gap-16 md:flex-row flex-col">
          <div className="w-[226px] shrink-0 flex flex-col font-bold tracking-[-1.442px] font-syne text-5xl md:border-r-[1px] md:border-r-white/[0.4] border-b-[1px] border-b-white/[0.4]">
            <TextWrapper>
              <h3 className="gd1">About</h3>
            </TextWrapper>

            <h3 className="abg">
              <TextWrapper>Me</TextWrapper>
            </h3>
          </div>
          <div className="grow">
            <p className="tracking-[-0.36px] text-lg leading-[25.2px] font-outfit text-white/[0.5] whitespace-pre-line">
              {`Hey there! I'm Ridwan, a passionate product designer with 4 years of experience crafting intuitive and visually engaging digital experiences. I specialize in creating designs that are not only aesthetically pleasing but also highly functional, ensuring users feel right at home. 
                I've had the privilege of working on diverse projects that impact thousands of users, and I thrive on solving complex problems with simple, elegant solutions. My design approach is grounded in empathy and user-centric principles, but I also like to sprinkle in a bit of creativity and personality to make the experience memorable. 
                I believe in the power of design to transform ideas into reality and am committed to helping businesses achieve their goals while bringing a little joy to users along the way. Let’s create something amazing together!
                `}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
