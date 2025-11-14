import { Container } from "@/components/view/container";
import HeroTextWrapper from "@/components/view/herotextwrapper";
import Image from "next/image";
import TextWrapper from "@/components/view/textwrapper";
//import { KeyFeatures } from "@/components/myproject/keyfeatures";
import { OtherProjects } from "@/components/myproject/otherproject";
import { ArrowRightIcon, NetIcon, ArrowleftIcon } from "../icon";
import Head from "next/head";

export default function Dartspay() {
  return (
    <>
      <Head>
        <title>mrlong - Dartspay</title>
        <meta
          name="description"
          content="Delivering innovative payment solutions."
        />
        <meta
          name="keywords"
          content="Digital Product Designer, UI/UX, Web Design, Interactive Design, Product Development"
        />
        <meta name="author" content="mrlong" />
        <meta property="og:title" content="mrlong - Dartspay" />
        <meta
          property="og:description"
          content="Delivering innovative payment solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrlong.vercel.com/dartspay" />
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
      <div className="md:pt-[184px] pt-[140px]">
        <OtherProjects />
      </div>
    </>
  );
}
