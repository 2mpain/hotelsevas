import "../index.css";
import { motion } from "framer-motion";
import { Cards } from "./Cards/cards";
import { UsersFeedback } from "./UsersFeedback/UsersFeedback";
import Stepper from "./steps";
import { SignIn } from "./signin";
import { Footer } from "./footer";
import { HeaderParagraph } from "./MainPage/HeaderParagrpah";
import { steps } from "./MainPage/data/data";
import { CustomAccordion } from "./CustomAccordion/CustomAccordion";
import MainHeader from "../components/Header/Header";
import ContactUs from "./ContactUs/contactus";

export function MainPage() {
  return (
    <>
      <MainHeader />
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="flex flex-col  ml-2 mr-2 justify-center items-center "
      >
        {/* hotel image w/ title, rent button & calendar */}
        <HeaderParagraph showCalendar={false} />

        {/* sign in form */}
        <SignIn />

        {/* users's feedbacks section */}
        <UsersFeedback />

        {/* data accordion */}
        <CustomAccordion />

        {/*how to visit us steps */}
        <Stepper steps={steps} />

        {/* hotel rooms cards */}
        <Cards />

        <ContactUs />

        {/* website footer */}
        <Footer />
      </motion.div>
    </>
  );
}
