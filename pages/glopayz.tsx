import { OtherProjects } from "@/components/myproject/otherproject";

import Head from "next/head";
import ProjectLayout from "@/components/componentlayout";

export default function glopayz() {
  return (
    <>
      <Head>
        <title>mrlong - glopayz</title>
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
        projectTitle="glopayz"
        projectSubtitle="product design"
        mainImage="/assets/glopayz/hero.png"
        overviewText={`GloPayz is a cross border mobile wallet that makes it easy for users across Africa and the diaspora to send and receive money, hold multiple currencies and make local transfers without unnecessary banking friction. I designed the end to end mobile experience including onboarding, wallet management, transfers, currency conversion and virtual cards.
            
            Role: Product Designer
            Timeline: 5 weeks
            Platform: Mobile app
            Tools: Figma`}
        problemText={`Cross border users struggle with high fees, slow settlement, currency volatility and complicated financial tools. Many platforms hide costs and make basic tasks feel stressful. Users want clarity, speed and trust when moving money across countries.`}
        designGoals={[
          "Make wallet funding and withdrawals simple",
          "Reduce friction in cross border transfers",
          "Provide real time exchange rates clearly",
          "Support multiple wallets in different currencies",
          "Build confidence through transparency",
        ]}
        approach={`I researched similar products like Grey, Geegpay, Pesa and Chipper Cash to identify patterns that reduce confusion. I then mapped flows for:

            Wallet creation
            Local transfers
            International transfers
            FX conversion
            Virtual card activation

        Wireframes focused on reducing decisions and keeping users calm.`}
        mid="/assets/glopayz/mid.png"
        keyFeatures={[
          {
            title: "Multi Currency Wallets",
            sublinks: [
              `Users can hold and manage GBP, USD, EUR and local currency wallets in one place. Balances update instantly for clarity.`,
            ],
          },
          {
            title: "Cross Border Transfers",
            sublinks: [
              "Fast transfers across supported countries with real time fees and arrival estimates.",
            ],
          },
          {
            title: "Virtual Cards",
            sublinks: [
              "Create and manage cards for online payments, with spending controls and card freeze options.",
            ],
          },
          {
            title: "FX Conversion",
            sublinks: [
              "Users can convert funds quickly using transparent exchange rate breakdowns.",
            ],
          },
          {
            title: "Ingredient Transparency",
            sublinks: [
              " Educates users about natural formulas in a simple and friendly tone.",
            ],
          },
          {
            title: "Transaction Timeline",
            sublinks: [
              " Keeps users aware of where their money is at each stage.",
            ],
          },
        ]}
        visualLanguageText="The UI uses a clean financial aesthetic with blue color and soft shadows. Typography is structured to improve speed of scanning. Color coding allows users to identify currency types and transaction states instantly."
        impactText={`During prototype testing, users reported:

            Clearer understanding of fees
            Faster money movement without second guessing
            Confidence in tracking transfers end to end

        The streamlined flows reduced hesitation for first time cross border users.`}
        futureEnhancements={[
          "Rewards on FX conversions",
          "Social usernames for transfers",
          "Recurring payments",
          "Automatic rate alerts when currency moves",
        ]}
        conclusionText="The GloPayz mobile app delivers a simple and transparent cross border payment experience. By focusing on clarity, speed and multiple wallet support, the design helps users move money confidently across regions with less friction."
        additionalImages={[
          "/assets/glopayz/1.png",
          "/assets/glopayz/2.png",
          "/assets/glopayz/3.png",
          "/assets/glopayz/4.png",
          "/assets/glopayz/5.png",
        ]}
      >
        <OtherProjects />
      </ProjectLayout>
    </>
  );
}
