import { headerAnimation } from "@/App";
import { motion } from "framer-motion";

export function SignIn() {
  return (
    <section className="bg-gray-50 dark:bg-slate-900 rounded-b-lg shadow-lg">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <motion.div className="flex flex-col justify-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={3}
            variants={headerAnimation(-100, 0)}
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            Мы предлагаем лучшие условия
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={4}
            variants={headerAnimation(-100, 0)}
            className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
          >
            Зарегестрируйтесь, чтобы всегда быть в курсе всех новых событий,
            иметь доступ к подробной информации нашего отеля.
          </motion.p>
        </motion.div>
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={headerAnimation(-100, 0)}
            className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800"
          >
            <motion.h2
              initial="hidden"
              animate="visible"
              custom={3}
              variants={headerAnimation(100, 0)}
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Регистрация
            </motion.h2>
            <form className="mt-8 space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Эл. почта
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ivanov@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Пароль
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-500 dark:text-gray-400"
                  >
                    Запомнить это устройство
                  </label>
                </div>
                <a
                  href="#"
                  className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Забыли пароль?
                </a>
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Зарегистрироваться
              </button>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Уже зарегестрированы?
                <a className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">
                  {" "}
                  Войти в аккаунт
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
