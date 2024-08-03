import React from "react";
import styles from "../Landing/Style";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Testimonials,
  Hero,
} from "../Landing";

const Landing = ({onGetStartedClick}) => {
  return (
    <div className="absolute  -z-10  w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000_0%,#63e_100%)] text-white">
      <div className="bg-primary w-full overflow-hidden">
        

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero someFunction={onGetStartedClick}/>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            {/* <Clients /> */}
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
{/* <div className="absolute  -z-10 h-[70rem] w-full items-center px-5 py-24"> */}
