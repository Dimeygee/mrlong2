import { OtherProjects } from "@/components/myproject/otherproject";

import Head from "next/head";
import ProjectLayout from "@/components/componentlayout";

export default function Quonos() {
  return (
    <>
      <Head>
        <title>mrlong - Quonos</title>
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
        projectTitle="quonos"
        projectSubtitle="Landing page"
        mainImage="/assets/quonox/hero.png"
        overviewText={`Quonos is a creative studio that offers branding, product design, development and visual content services for startups and growing digital businesses. I designed a modern landing page that communicates credibility, showcases featured work and guides prospects toward contacting the studio.

        Role: Product Designer
        Timeline: 2 weeks
        Platform: Web
        Tools: Figma`}
        problemText={`
            Creative studios often struggle with landing pages that:
                Feel generic
                Do not explain capabilities clearly
                Lack work samples
                Hide contact actions
            Visitors want to understand a studio quickly, trust their quality and take the next step.`}
        designGoals={[
          "Present services and capabilities clearly",
          "Showcase portfolio visuals in a clean layout",
          "Highlight credibility through case sections",
          "Create simple pathways to contact",
          "Reflect a modern studio personality",
        ]}
        approach={`I reviewed leading creative studio sites to understand how they communicate value. Based on this, I structured the page to introduce:

            Hero positioning and value statement
            Service categories
            Featured case visuals
            Client value proposition
            Clear calls to action

        The flow reduces cognitive load and builds trust section by section.`}
        mid="/assets/quonox/mid.png"
        keyFeatures={[
          {
            title: "Hero Statement",
            sublinks: [
              `Communicates what Quonos does and who they help within the first few seconds.`,
            ],
          },
          {
            title: "Service Highlights",
            sublinks: [
              "Explains branding, product design, development and motion work clearly.",
            ],
          },
          {
            title: "Featured Projects",
            sublinks: ["Shows visual proof of capability and design craft."],
          },
          {
            title: "Studio Personality",
            sublinks: [
              "Uses bold color and clean typography to stand out from generic agency websites.",
            ],
          },
          {
            title: "Conversion Area",
            sublinks: [
              "Contact CTA appears throughout the page for easy outreach.",
            ],
          },
        ]}
        visualLanguageText="The UI uses bold contrast, sharp typography and clean layout grids. Subtle gradients and motion accents give the brand a digital creative tone. Spacing and alignment reinforce premium quality."
        impactText={`The landing page improved clarity of service offering and made it easier for prospects to understand what Quonos can deliver. Early feedback showed stronger interest in portfolio exploration and quicker inquiry actions.`}
        futureEnhancements={[
          "Deeper case study links",
          "Team spotlight section",
          "Motion reel integration",
          "Client testimonial prompts",
        ]}
        conclusionText="The Quonos Studio landing page creates a confident first impression, showcases creative capability and gives visitors a clear path to start a project. By keeping the structure simple and visual, the design communicates value without overwhelming the viewer."
        hasone="/assets/quonox/has1.png"
        hassix="/assets/quonox/has6.png"
      >
        <OtherProjects />
      </ProjectLayout>
    </>
  );
}
