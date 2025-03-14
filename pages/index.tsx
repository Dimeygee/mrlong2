import Head from "next/head";
import { HeroSection } from "../components/view/herosection";
import { About } from "../components/view/sections/about";
import { ProjectSection } from "../components/view/sections/projectsection";
import { SelectedWork } from "../components/view/sections/selectwork";
import { ThingsIDo } from "../components/view/sections/thingido";
import { FootPrint } from "../components/view/footprint";
import { Reviews } from "../components/view/sections/reviews";
import { SmoothScrollbar } from "@/components/view/smoothscrollable";

export default function Home() {
  return (
    <>
      <Head>
        <title>mrlong - Home</title>
        <meta
          name="description"
          content="Digital Product Designer crafting 'Magic' through innovative design, user experiences, and interactive solutions. Explore projects, selected works, and client reviews."
        />
        <meta
          name="keywords"
          content="Digital Product Designer, UI/UX, Web Design, Interactive Design, Product Development"
        />
        <meta name="author" content="mrlong" />
        <meta property="og:title" content="mrlong - Home" />
        <meta
          property="og:description"
          content="Digital Product Designer crafting 'Magic' through innovative and interactive product design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrlong.vercel.com" />
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
      <SmoothScrollbar>
        <HeroSection />
        <ProjectSection />
        <About />
        <FootPrint />
        <SelectedWork />
        <ThingsIDo />
        <Reviews />
      </SmoothScrollbar>
    </>
  );
}
