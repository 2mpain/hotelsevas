import "./App.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import DrawerComp from "./components/ui/drawer";
import "./index.css";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import { MainPage } from "./components/main-page";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export const headerAnimation = (x: number, y: number) => {
  return {
    hidden: {
      x: x,
      y: y,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
};

function App() {
  return (
    <ThemeProvider>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="backdrop-blur-xl flex z-10 w-full fixed top-0 rounded-b-md border border-gray-600 items-center p-1  mr-1 shadow-lg flex-1 flex-row justify-between"
      >
        <div>
          <ModeToggle />
        </div>

        <div className="flex-grow text-center">
          <motion.p
            custom={2}
            variants={headerAnimation(0, -100)}
            className="scroll-m-20 text-xl font-semibold tracking-tight"
          >
            Отель в Севастополе
          </motion.p>
          <Typewriter
            options={{
              strings: ["ул. Кронштадтская, 41", "+797812345678"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <motion.div custom={1} variants={headerAnimation(100, 0)}>
          <DrawerComp />
        </motion.div>
      </motion.div>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
