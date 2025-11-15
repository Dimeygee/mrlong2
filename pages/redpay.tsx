import { OtherProjects } from "@/components/myproject/otherproject";

import Head from "next/head";
import ProjectLayout from "@/components/componentlayout";

export default function Athlerse() {
  return (
    <>
      <Head>
        <title>mrlong - Red Pay</title>
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
        projectTitle="Redpay  payment  gateway"
        projectSubtitle="product design"
        mainImage="/assets/redpay/hero.png"
        overviewText={`RedPay is a subsidiary of Heirs Holdings under the UBA Group. It powers secure digital payments for online transactions across Africa. My role was to design a clean and intuitive payment interface that allows users to complete transactions quickly across multiple payment methods including card, bank transfer, QR code and USSD.
          
        Timeline: 3 weeks
        Role: Product Designer
        Platform: Checkout UI for web 
        Tools: Figma`}
        problemText={`Many checkout experiences across Africa are slow, confusing or cluttered. Users often abandon transactions when it is not immediately clear what is happening, why a step is required or how long it will take. Failed payments also create anxiety when the interface does not provide guidance or fallback options.`}
        designGoals={[
          "Reduce friction during checkout",
          "Provide clear status feedback and error recovery",
          "Support multiple payment methods without confusing the user",
          "Create trust through visual clarity and security cues",
          "Minimize drop off through smart fallbacks",
        ]}
        approach={[
          "Competitive analysis (Paystack, Flutterwave, Monnify)",
          "User flow mapping for each payment method",
          "Wireframes to test layout clarity",
          "High fidelity UI focused on readability and trust cues",
        ]}
        mid="/assets/redpay/mid.png"
        keyFeatures={[
          {
            title: "Multiple payment methods in one screen",
            sublinks: ["Users can switch instantly if an option fails."],
          },
          {
            title: "Real time status feedback",
            sublinks: ["Eliminates confusion during processing."],
          },
          {
            title: "Fallback suggestions ",
            sublinks: ["Prevents abandoned payments."],
          },
          {
            title: "Security indicators",
            sublinks: ["Reinforces trust at the critical moment."],
          },
        ]}
        impactText="RedPay has processed almost 10 billion Naira in successful online transactions, supported by this streamlined checkout experience. Users reported reduced friction and better understanding of next steps."
        futureEnhancements={[
          "Saved payment preferences",
          "Stronger channel recommendations",
          "Biometric confirmation on mobile browsers",
        ]}
        conclusionText="A clear and focused checkout UI improves trust, reduces errors and increases successful transaction volume for online payments across multiple channels."
        additionalImages={[
          "/assets/redpay/1.png",
          "/assets/redpay/2.png",
          "/assets/redpay/3.png",
          "/assets/redpay/4.png",
          "/assets/redpay/5.png",
        ]}
        hassix={null}
      >
        <OtherProjects />
      </ProjectLayout>
    </>
  );
}
