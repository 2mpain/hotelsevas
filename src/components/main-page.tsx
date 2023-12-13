import { useEffect, useState } from "react";
import "../index.css";
import { Button } from "@/components/ui/button";
import { CursorArrowIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { headerAnimation } from "@/App";
import { AlertComp } from "./alert";
//import { CarouselComp } from "./carousel";
import { Cards } from "./cards";
import { DatePickerWithRange } from "./ui/calendar-comp";
import { UsersFeedback } from "./feedbacks";
import { Header } from "./header";
import Stepper from "./steps";
import { SignIn } from "./signin";
import { Footer } from "./footer";

const accordionData = [
  {
    id: "item-1",
    title: "Где вы находитесь?",
    content: "Мы находимся по адресу: город Севастополь, ул. Кронштадтская 41.",
  },
  {
    id: "item-2",
    title: "Как далеко остановка?",
    content: "Ближайшая остановка находится в 5 минутах ходьбы.",
  },
  {
    id: "item-3",
    title: "Какие номера вы предлагаете?",
    content: "Мы предлагаем однокомнатные номера со всеми удобствами.",
  },
  {
    id: "item-4",
    title: "Какая цена за номер на одного человека?",
    content: "Эконом-номер со всеми условиями стоит 3000 руб. в сутки",
  },
];

export function MainPage() {
  const [showAlert, setShowAlert] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    }
  }, [showAlert]);

  const steps = [
    {
      number: 1,
      title: "Связь",
      description: "Свяжитесь с нами",
      active: true,
    },
    {
      number: 2,
      title: "Выберите дату",
      description: "Количество дней проживания",
    },
    { number: 3, title: "Оплата", description: "После можете заезжать!" },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="flex flex-col  ml-2 mr-2 justify-center items-center "
      >
        <header className="header__main">
          <motion.div
            custom={3}
            variants={headerAnimation(0, 100)}
            //className="section__container header__container"
          >
            <h1 className="mb-8 scroll-m-20 text-4xl md:text-8xl font-extrabold tracking-tight text-white text-center">
              Комфортное место
              <br />
              для Вашего отдыха
            </h1>
            <motion.div
              custom={4}
              variants={headerAnimation(0, 100)}
              className="flex justify-center my-15"
            >
              <div className="flex flex-col justify-center items-center text-center w-full">
                <Button
                  className="shadow-lg bg-white text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                  onClick={() => {
                    setShowAlert(!showAlert);
                    setButtonPressed(!buttonPressed);
                  }}
                >
                  <CursorArrowIcon className="mr-2 h-4 w-4" /> Забронировать
                  номер
                </Button>

                <DatePickerWithRange className="my-2  text-black dark:bg-black dark:text-white" />
              </div>
            </motion.div>
          </motion.div>
        </header>

        <div className="">
          <SignIn />
        </div>

        <div className="my-4">
          <UsersFeedback />
        </div>
        <div className="w-full md:w-3/5">
          <Accordion type="single" collapsible>
            {accordionData.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                //animate="visible"
                whileInView="visible"
                variants={headerAnimation(-100, 0)}
              >
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {showAlert && <AlertComp show={showAlert} />}

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={headerAnimation(100, 0)}
          className="mt-2"
        >
          <Header title="Заезд в 3 шага!" />
        </motion.div>

        <div className="flex-1 justify-center items-center mb-4">
          <Stepper steps={steps} />
        </div>

        <Cards />
        <Footer />
      </motion.div>
    </>
  );
}
