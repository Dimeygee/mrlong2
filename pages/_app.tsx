// pages/_app.tsx
import { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { Syne, Outfit, DM_Sans } from "next/font/google";
//import { SmoothScrollbar } from "../components/view/smoothscrollable";
import { GlobalProvider } from "../context/globalcontext";
import { Nav } from "../components/view/nav";
import { Footer } from "../components/view/footer";
import CustomCursor from "../components/customcusor";
import { LoadingProvider } from "../context/loadingcontext";
import "../globals.css";

const outfit = Outfit({
  display: "swap",
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
});

const dsans = DM_Sans({
  display: "swap",
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
});

const syne = Syne({
  display: "swap",
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
});

// Overlay animation variants
const enterOverlayVariants = {
  initial: { y: "0%" },
  animate: { y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } },
};

const leaveOverlayVariants = {
  initial: { y: "100%" },
  animate: { y: "0%", transition: { duration: 0.8, ease: "easeInOut" } },
};

// Content motion variants
const contentVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

function MyApp({ Component, pageProps, router }: AppProps) {
  // Derive the page title from the route, default to 'Home' if it's the root route
  const pageTitle =
    router.route === "/" ? "Home" : router.route.split("/").pop() || "Page";

  return (
    <div className={`${outfit.variable} ${dsans.variable} ${syne.variable}`}>
        <LoadingProvider>
          <GlobalProvider>
            <CustomCursor />
            <Nav />
            {/* AnimatePresence for page transitions */}
            <AnimatePresence mode="wait">
              {/* Enter Overlay */}
              <motion.div
                key={`enter-overlay-${router.route}`}
                className="fixed top-0 left-0 w-full h-full bg-black z-[999] pointer-events-none"
                variants={enterOverlayVariants}
                initial="initial"
                animate="animate"
              >
                {/* Overlay Text */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-white uppercase font-bold text-4xl z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5, // Reduced duration to make the text appear faster
                    ease: "easeOut", // A faster easing function
                  }}
                >
                  {pageTitle}
                </motion.div>
              </motion.div>

              {/* Leave Overlay */}
              <motion.div
                key={`leave-overlay-${router.route}`}
                className="fixed top-0 left-0 w-full h-full bg-black z-[998] pointer-events-none"
                variants={leaveOverlayVariants}
                initial="initial"
                transition={{ delay: 0.5 }}
                exit="animate"
              />
              {/* Page Content */}
              <motion.div
                key={router.route}
                className="relative z-[1]"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.8,
                  delay: 0.5, // Slight delay for content to appear after overlay text animation
                }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
            <Footer />
          </GlobalProvider>
        </LoadingProvider>
    </div>
  );
}

export default MyApp;
