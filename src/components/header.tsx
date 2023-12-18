import { motion } from "framer-motion";
import { animate } from "../utils/animate";

export function Header({ title }: { title: string }) {
  const parts = title.split(/(\d+)/);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animate(100, 0)}
      className="mt-2"
    >
      <div className="my-6 text-center">
        <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl shadow-sm">
          {parts.map((part, index) => {
            if (/^\d+$/.test(part)) {
              return (
                <span className="text-blue-600 dark:text-blue-500" key={index}>
                  {part}
                </span>
              );
            } else {
              return <span key={index}>{part}</span>;
            }
          })}
        </h1>
      </div>
    </motion.div>
  );
}
