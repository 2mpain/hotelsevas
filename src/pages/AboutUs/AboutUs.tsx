import { motion } from "framer-motion";
import { animate } from "../../utils/animate";

export default function AboutUs() {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="flex-1 justify-center items-center">
        <motion.div custom={1} variants={animate(150, 0)}>
          <h1 className="text-white font-bold md:text-5xl lg:text-9xl">
            Officia excepteur sint mollit quis est qui dolor.
          </h1>
        </motion.div>
        <motion.div custom={2} variants={animate(100, 0)}>
          <h2 className="texopacity-50 font-light">
            Aliqua cillum duis velit minim consectetur.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
