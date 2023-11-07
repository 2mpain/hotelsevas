import { Header } from "./header";
import { headerAnimation } from "@/App";
import { motion } from "framer-motion";

export function UsersFeedback() {
  const authors = [
    {
      name: "Даниил Хомутов",
      role: "Нефтяной магнат",
      image:
        "https://sun9-6.userapi.com/impg/Tgj9Au2ZEq1TzOwzaDa7r0MM9Wz-ntpCi37DBQ/hrqzkwdBo_c.jpg?size=1280x1280&quality=95&sign=de40f8d0e2b2532501ec50998adaf3e9&type=album",
      quote: "Очень тихое и спокойное место",
      description:
        "Если вы переживаете, что хоть что-то может помешать вам отдыху здесь, то вы сильно ошибаетесь!",
    },
    {
      name: "Данила Тимофеев",
      role: "Студент СевГУ",
      image:
        "https://sun9-79.userapi.com/impg/jFHnUuvzGY1E_psdMQ2AdSEOpnXlo7v1ZroL6A/HVtHievJtuI.jpg?size=810x1080&quality=95&sign=322d8eec411b86aec66a2322cf0c689b&type=album",
      quote: "Нет сомнения в удобствах",
      description:
        "В этом отеле всё сопутствует проведению вашего времени, ненадолго забыв обо всех проблемах",
    },
    {
      name: "Мария Семендяева",
      role: "Студентка СевГУ",
      image:
        "https://sun9-62.userapi.com/impg/CDn6ziEcIjsObt6XS2J-IcDqKH-N7Fo2D1mbrQ/TUwleqPvC_g.jpg?size=914x1080&quality=95&sign=c20447d195ba2469cd073160882eaee1&type=album",
      quote: "Ни капли сомнения в привлекательности",
      description:
        "Отель построен по современным стандартам, обстановка спокойная и расслабляющая.",
    },
    {
      name: "Иван Иванов",
      role: "Предприниматель",
      image:
        "data:image/jpeg;base64,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",
      quote: "Потрясающая атмосфера",
      description:
        "Только находясь подальше от городских забот, можно по-настоящему отдохнуть, проведя свои выходные с пользой",
    },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        //animate="visible"
        viewport={{ amount: 0.2 }}
        custom={1}
        variants={headerAnimation(-100, 0)}
        className="flex justify-center items-center my-4"
      >
        <Header title="Отзывы наших клиентов" />
      </motion.div>

      <div className="grid mb-8  rounded-lg shadow-lg md:mb-12 md:grid-cols-2">
        {authors.map((item, index) => (
          <motion.figure
            key={index}
            initial="hidden"
            // animate="visible"
            variants={headerAnimation(0, -80)}
            transition={{ delay: index * 0.6 }}
            whileInView="visible"
            custom={index}
            className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-r border-gray-200 rounded-md dark:bg-slate-900 dark:border-gray-700"
          >
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.quote}
              </h3>
              <p className="my-4">{item.description}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-11 h-11"
                src={item.image}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>{item.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.role}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </>
  );
}