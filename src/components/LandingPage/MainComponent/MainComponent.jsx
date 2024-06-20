import React from "react";
import "./styles.css";
import Button from "../../Common/Button/Button";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";

const MainComponent = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <Button text={"dashboard"} />
          <Button text={"share"} outlined={true} />
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          src={iphone}
          alt="Iphone img"
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
          }}
        />
        <img src={gradient} alt="gradient Img" className="gradient" />
      </div>
    </div>
  );
};

export default MainComponent;
