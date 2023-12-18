import { useEffect, useState } from "react";
import "../index.css";
import { motion } from "framer-motion";
import { AlertComp } from "./alert";
import { Cards } from "./Cards/cards";
import { UsersFeedback } from "./UsersFeedback/UsersFeedback";
import { Header } from "./header";
import Stepper from "./steps";
import { SignIn } from "./signin";
import { Footer } from "./footer";
import { HeaderParagraph } from "./MainPage/HeaderParagrpah";
import { steps } from "./MainPage/data/data";
import { CustomAccordion } from "./CustomAccordion/CustomAccordion";

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

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="flex flex-col  ml-2 mr-2 justify-center items-center "
      >
        {/* hotel image w/ title, rent button & calendar */}

        <HeaderParagraph
          onClick={() => {
            setShowAlert(!showAlert);
            setButtonPressed(!buttonPressed);
          }}
        />

        {/* sign in form */}
        <SignIn />

        {/* users's feedbacks section */}
        <div className="my-4">
          <UsersFeedback />
        </div>

        {/* data accordion */}

        <CustomAccordion />

        {/* showing Alert if user clicked on rent */}
        {showAlert && <AlertComp show={showAlert} />}

        {/* how to visit us section */}
        <Header title="Заезд в 3 шага!" />

        {/*how to visit us steps */}
        <div className="flex-1 justify-center items-center mb-4">
          <Stepper steps={steps} />
        </div>

        {/* hotel rooms cards */}
        <Cards />

        {/* website footer */}
        <Footer />
      </motion.div>
    </>
  );
}
