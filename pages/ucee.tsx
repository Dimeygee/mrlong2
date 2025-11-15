import { OtherProjects } from "@/components/myproject/otherproject";

import Head from "next/head";
import ProjectLayout from "@/components/componentlayout";

export default function Ucee() {
  return (
    <>
      <Head>
        <title>mrlong - Ucee</title>
        <meta
          name="description"
          content="Athlerse: Gamifying Fitness for a Connected, Motivated Community"
        />
        <meta
          name="keywords"
          content="Digital Product Designer, UI/UX, Web Design, Interactive Design, Product Development"
        />
        <meta name="author" content="mrlong" />
        <meta property="og:title" content="mrlong - Home" />
        <meta
          property="og:description"
          content="Athlerse: Gamifying Fitness for a Connected, Motivated Community"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrlong.vercel.com/athlerse" />
      </Head>

      <ProjectLayout
        projectTitle="ucee"
        projectSubtitle="Landing page"
        mainImage="/assets/ucee/hero.png"
        overviewText={`UCEE MFB is a digital microfinance bank operating across multiple states in Nigeria. I designed the Agent Smart Onboarding experience which allows registered agents to generate location based referral links and QR codes that prospective customers can use to open UCEE MFB accounts online. The solution was built to support field marketing and real time customer acquisition.

        Role: Product Designer
        Timeline: 3 weeks
        Platform: 
        WebTools: Figma`}
        problemText={`Customer acquisition for microfinance banks is often slow and resource heavy. Agents struggle with:

            Collecting customer information manually
            Sharing registration forms securely
            Tracking where customers come from
            Scaling outreach across multiple states

        Traditional onboarding creates friction and delays.`}
        designGoals={[
          " Make new account registration easier and faster",
          "Enable agents to generate unique referral links",
          "Track customer acquisition by location",
          "Reduce manual data handling",
          "Improve registration funnel completion",
        ]}
        approach={`I studied the existing field onboarding process and identified friction points. The new design allows agents to:

            Log in securely
            Generate a unique referral link
            Download a QR code for offline scanning
            Track sign ups by location

        The interface is simple to understand, even in busy field conditions.`}
        mid="/assets/ucee/mid.png"
        keyFeatures={[
          {
            title: "Location Based Referral Links",
            sublinks: [
              `Each agent receives a custom link tied to their location, allowing accurate customer attribution.`,
            ],
          },
          {
            title: "QR Code Sharing",
            sublinks: [
              " Prospects can scan and register instantly, removing typing effort and speeding up sign ups.",
            ],
          },
          {
            title: "Simple Agent Dashboard",
            sublinks: [
              "Shows referral performance and sign up trends clearly.",
            ],
          },
          {
            title: "Featured Collections",
            sublinks: [
              "Groups products into easy categories so buyers can explore by need.",
            ],
          },
          {
            title: "Cross State Reach",
            sublinks: [
              " Agents across Nigeria can register users without physical paperwork.",
            ],
          },
        ]}
        userexperience="The onboarding journey is lightweight and mobile friendly since most prospects register on their phones. Messaging was simplified to reduce confusion, and progress feedback keeps users confident during form completion."
        visualLanguageText="The interface uses clear typography, bold CTAs and simple icons. The layout focuses on speed and legibility since many agents operate outdoors or on the move."
        impactText="This solution drove significant growth. UCEE MFB recorded over one hundred thousand new customer registrations across Nigeria through the Agent Smart Onboarding system. Referral tracking improved visibility into which regions were performing well and allowed targeted agent incentives."
        futureEnhancements={[
          "Reward tiers for high performing agents",
          "Real time regional leaderboards",
          "Referral funnel analytics",
          "Verification status tracking",
        ]}
        conclusionText="The UCEE MFB Agent Smart Onboarding experience brings scalable customer acquisition to the field. By combining referral links, QR codes and location tracking, agents can register customers faster and more reliably. The result is higher conversion, better visibility and meaningful growth for the microfinance network."
        additionalImages={[
          "/assets/ucee/1.png",
          "/assets/ucee/2.png",
          "/assets/ucee/3.png",
          "/assets/ucee/4.png",
          "/assets/ucee/5.png",
        ]}
      >
        <OtherProjects />
      </ProjectLayout>
    </>
  );
}
