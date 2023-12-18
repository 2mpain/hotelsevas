import { motion } from "framer-motion";
import { animate } from "../../utils/animate";
import { CursorArrowIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/readyToUse/button";
import { DatePickerWithRange } from "../readyToUse/calendar-comp";
import "../../index.css";

interface HeaderParagraphProps {
  onClick: () => void;
}

export function HeaderParagraph({ onClick }: HeaderParagraphProps) {
  return (
    <header className="header__main">
      <motion.div
        custom={3}
        variants={animate(0, 100)}
        //className="section__container header__container"
      >
        <h1 className="mb-8 scroll-m-20 text-4xl md:text-8xl font-extrabold tracking-tight text-white text-center">
          Комфортное место
          <br />
          для Вашего отдыха
        </h1>
        <motion.div
          custom={4}
          variants={animate(0, 100)}
          className="flex justify-center my-15"
        >
          <div className="flex flex-col justify-center items-center text-center w-full">
            <Button
              className="shadow-lg bg-white text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
              onClick={onClick}
            >
              <CursorArrowIcon className="mr-2 h-4 w-4" /> Забронировать номер
            </Button>

            <DatePickerWithRange className="my-2  text-black dark:bg-black dark:text-white" />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
