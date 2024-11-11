import { Nav } from "./components/view/nav";
import { HeroSection } from "./components/view/herosection";
import { About } from "./components/view/sections/about";
import { ProjectSection } from "./components/view/sections/projectsection";
import { SelectedWork } from "./components/view/sections/selectwork";
import { ThingsIDo } from "./components/view/sections/thingido";
import { Footer } from "./components/view/footer";
import { FootPrint } from "./components/view/footprint";
import { Reviews } from "./components/view/sections/reviews";

import { GlobalProvider } from "./context/globalcontext";
import CustomCursor from "./components/customcusor";
 

export default function Home() {

 
  return (
    <>
      <GlobalProvider>
        <CustomCursor />
      <Nav  />
      <HeroSection />
      <ProjectSection />
      <About />
      <FootPrint />
      <SelectedWork />
      <ThingsIDo />
      <Reviews />
      <Footer />
      </GlobalProvider>
    </>
  );
}
