import { OtherProjects } from "@/components/myproject/otherproject";

import Head from "next/head";
import ProjectLayout from "@/components/componentlayout";

export default function Zuri() {
  return (
    <>
      <Head>
        <title>mrlong - Zuri</title>
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
        projectTitle="zuri"
        projectSubtitle="Landing page"
        mainImage="/assets/zuri/hero.png"
        overviewText={`Zuri Naturals is a UK based skincare brand focused on clean, effective products for dark skin tones. They needed a simple and conversion focused website where customers could browse products, understand ingredient benefits, read reviews and purchase easily. I designed a responsive landing page that highlights the brand story and improves the shopping experience.
            
        Role: Product Designer
        Timeline: 2 weeks
        Platform: Web
        Tools: Figma`}
        problemText={`Skincare buyers often feel overwhelmed when shopping online. It is difficult to trust ingredients, compare products and know which items are suitable for their skin. Without clarity and social proof, shoppers hesitate and abandon the process.

        * Zuri needed:
        * Clear product presentation
        * Ingredient transparency
        * Simple checkout paths
        * Visible customer reviews`}
        designGoals={[
          "Increase product discovery",
          "Build trust through reviews and benefits",
          "Reduce friction during checkout",
          "Communicate brand identity with clarity",
        ]}
        approach={`I reviewed competitive beauty landing pages to understand what drives conversion. Based on this, I structured the page to show:
                * Hero product highlights
                * Category previews
                * Ingredient benefits
                * Customer reviews
                * Clear pricing
                * Simple add to cart actions
        Each section was designed to flow logically and reduce thinking time.`}
        mid="/assets/zuri/mid.png"
        keyFeatures={[
          {
            title: "Hero Spotlight",
            sublinks: [
              `Presents hero products immediately with a clean call to action for quick purchase.`,
            ],
          },
          {
            title: "Skin Benefit Highlights",
            sublinks: [
              "Shows what each product solves to help shoppers make faster decisions.",
            ],
          },
          {
            title: "Customer Reviews",
            sublinks: [
              "Displays social proof to build trust and reduce hesitation.",
            ],
          },
          {
            title: "Featured Collections",
            sublinks: [
              "Groups products into easy categories so buyers can explore by need.",
            ],
          },
          {
            title: "Ingredient Transparency",
            sublinks: [
              " Educates users about natural formulas in a simple and friendly tone.",
            ],
          },
        ]}
        visualLanguageText="I used a calm and clean aesthetic that reflects skincare and wellness. Neutral surfaces keep the product images as the hero. Soft gradients guide attention to calls to action. Typography is elegant and readable to match the brand personality."
        impactText="The updated landing page improved clarity and buyer confidence. Browsing became faster, reviews became more visible and call to action placement reduced friction. Shoppers were able to understand product purpose without confusion."
        futureEnhancements={[
          "Personalized product recommendations based on skin type",
          "User video testimonials",
          "Routine builder bundles",
          "Ingredient comparison cards",
        ]}
        conclusionText="The Zuri Naturals landing page delivers a simple and trustworthy shopping experience for skincare buyers. By focusing on clarity, product education and reviews, the design supports faster decisions and increases customer confidence."
        additionalImages={[
          "/assets/zuri/1.png",
          "/assets/zuri/2.png",
          "/assets/zuri/3.png",
          "/assets/zuri/4.png",
          "/assets/zuri/5.png",
        ]}
        hassix={"/assets/zuri/6.png"}
      >
        <OtherProjects />
      </ProjectLayout>
    </>
  );
}
