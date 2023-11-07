import "../index.css";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { headerAnimation } from "@/App";

const cardsData = [
  {
    title: "Номер люкс на двоих",
    description:
      "Этот номер предлагает удобства для двух гостей. Он включает в себя большую кровать, ванную комнату, мини-бар и красивый вид из окна.",
    services: [
      "Шведский стол на завтрак, обед и ужин",
      "Уборка номера с заменой всех принадлежностей",
      "Бесплатный WI-FI в номере и на всей территории отеля",
      "Телевизор, кондиционер, халаты и тапочки",
    ],
    image:
      "https://sun9-77.userapi.com/impg/TSaJANsM5oqW-vEdAqc9mCaUTsQztLF9PhLjsA/uSYp_HUHoPE.jpg?size=480x320&quality=96&sign=543701086a68d2e99a0b51a10f5658c7&type=album",
  },
  {
    title: "Номер стандарт",
    description:
      "Стандартный номер идеален для одного гостя. В нем есть уютная кровать, ванная комната и все необходимые удобства.",
    services: [
      "Шведский стол на завтрак, обед и ужин",
      "Уборка номера с заменой всех принадлежностей",
      "Бесплатный WI-FI в номере и на всей территории отеля",
      "Телевизор, кондиционер, халаты и тапочки",
    ],
    image:
      "https://sun9-78.userapi.com/impg/8NhtwULIcXw1oLyPcklm5xkbGduAS7yZkDm7xA/nU0sezLhQbw.jpg?size=604x402&quality=96&sign=57b2d5642df158c6fdf23ce467635ede&type=album",
  },
  {
    title: "Номер с видом на море",
    description:
      "Этот номер предлагает прекрасный вид на море. Включает в себя большую кровать, ванную комнату и балкон, чтобы насладиться видом.",
    services: [
      "Шведский стол на завтрак, обед и ужин",
      "Уборка номера с заменой всех принадлежностей",
      "Бесплатный WI-FI в номере и на всей территории отеля",
      "Телевизор, кондиционер, халаты и тапочки",
    ],
    image:
      "https://sun9-79.userapi.com/impg/fETA6Ur63BR_9sP2kKKLDM11bPU51lazWeUr7Q/5N5P2-3b60c.jpg?size=480x320&quality=96&sign=c5a3ff8772e304faa732cd75486d5e1d&type=album",
  },
  {
    title: "Номер с балконом",
    description:
      "Этот номер предлагает просторный балкон, где можно насладиться свежим воздухом. Включает в себя удобную кровать и ванную комнату.",
    services: [
      "Шведский стол на завтрак, обед и ужин",
      "Уборка номера с заменой всех принадлежностей",
      "Бесплатный WI-FI в номере и на всей территории отеля",
      "Телевизор, кондиционер, халаты и тапочки",
    ],
    image:
      "https://sun9-77.userapi.com/impg/TSaJANsM5oqW-vEdAqc9mCaUTsQztLF9PhLjsA/uSYp_HUHoPE.jpg?size=480x320&quality=96&sign=543701086a68d2e99a0b51a10f5658c7&type=album",
  },
];

export function Cards() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        custom={1}
        variants={headerAnimation(0, 60)}
        className="my-10"
      >
        <h1 className="mt-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl shadow-sm">
          Наши номера
        </h1>
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {cardsData.map((card, index) => (
          <div
            className="card bg-gray-50 dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-gray-950 dark:hover:text-black "
            key={index}
          >
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              custom={index}
              variants={
                index % 2 == 0
                  ? headerAnimation(-100, 0)
                  : headerAnimation(100, 0)
              }
              src={card.image}
              alt={card.title}
              className="image rounded-sm md:w-150 w-full"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              custom={index}
              variants={
                index % 2 == 0
                  ? headerAnimation(0, -100)
                  : headerAnimation(0, 100)
              }
              className="title dark:text-white"
            >
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 shadow-sm">
                {card.title}
              </h2>
            </motion.div>
            <div className="description dark:text-white">
              <p className="leading-7 [&:not(:first-child)]:mt-6 my-2">
                {card.description}
              </p>
            </div>

            <div className="my-2 ">
              <ul
                role="list"
                className="space-y-2 text-gray-500 dark:text-gray-400"
              >
                {card.services.map((service, serviceIndex) => (
                  <li
                    key={serviceIndex}
                    className="flex space-x-2 items-center"
                  >
                    <svg
                      className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="leading-tight">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              className="my-5 border-black text-black dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black "
              variant="outline"
            >
              Забронировать
            </Button>
          </div>
        ))}
      </motion.div>
    </>
  );
}
