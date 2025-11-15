
import { OtherProjects } from "@/components/myproject/otherproject";

import Head from "next/head";
import ProjectLayout from "@/components/componentlayout";

export default function Athlerse() {
  return (
    <>
      <Head>
        <title>mrlong - Athlerse watch</title>
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
        projectTitle="Athlerse watch"
        projectSubtitle="product design"
        mainImage="/assets/athlerse-watch.png"
        overviewText={`Athlerse is a social fitness platform that lets users track workouts and compete through challenges. I designed the companion smartwatch interface that allows users to view daily activity, start workouts quickly and monitor real-time metrics directly from their wrist.

Role: Lead Product Designer
Timeline: 3 weeks
Platform: Smartwatch interface
Tools: Figma`}
        problemText={`Most fitness watch interfaces feel fragmented or overly complex. Users struggle to:
- View essential data at a glance
- Start a workout with minimal friction
- Track performance metrics in real-time
- Sync progress with a social fitness community

This leads to poor engagement and low retention.`}
        designGoals={[
          "Make core fitness actions quick and effortless",
          "Surface key health stats clearly",
          "Encourage consistent daily activity",
          "Connect results to the Athlerse social experience",
        ]}
        approach={[
          "I mapped the most frequent actions users perform on a fitness watch",
        ]}
        keyFeatures={[
          {
            title: "Activity Overview",
            sublinks: [
              "Shows steps, distance and calories burned with simple visual progress indicators",
            ],
          },
        ]}
        visualLanguageText="UI elements are bold, legible and minimal. Bright accent gradients draw attention to performance indicators. Icons are simple and recognizable during motion. Dark backgrounds improve battery life and readability outdoors."
        futureEnhancements={[
          "Live group workouts",
          "Audio coaching prompts",
          "Adaptive heart rate zones",
          "Personalized recovery tips",
        ]}
        conclusionText="The Athlerse watch interface brings social fitness directly to the wrist with a clear, lightweight design. By focusing on speed, visibility, and motivation, it encourages users to stay active and share progress with friends inside the Athlerse community."
        additionalImages={[
          "/assets/athlerse/athlerse-watch1.png",
          "/assets/athlerse/athlerse-watch2.png",
          "/assets/athlerse/athlerse-watch3.png",
          "/assets/athlerse/athlerse-watch4.png",
          "/assets/athlerse/athlerse-watch5.png",
        ]}
        mid="/assets/athlerse/mid.png"
      >
        <OtherProjects />
      </ProjectLayout>
    </>
  );
}

export const slidesData = [
  {
    title: "Intuitive Trading Interface",
    description:
      "The core trading interface allows users to execute buy, sell, or exchange transactions with just a few clicks, using straightforward language and guiding tooltips.",
    imageSrc: "/assets/athlerse/key1.png",
  },
  {
    title: "Simplified Dashboard",
    description:
      "Users have access to a dashboard that displays only the most crucial information, minimizing clutter while providing essential details on holdings, transaction history, and market trends.",
    imageSrc: "/assets/athlerse/key2.png",
  },
  {
    title: "Enhanced Security Measures",
    description:
      "ValorExchange incorporates advanced security features, such as two-factor authentication and automated transaction verification, ensuring security without disrupting the user experience.",
    imageSrc: "/assets/athlerse/key3.png",
  },
  {
    title: "Advanced Transaction Verification",
    description:
      "Automated checks and real-time alerts maintain security and ensure users’ transactions are accurate and trustworthy.",
    imageSrc: "/assets/athlerse/key4.png",
  },
];
