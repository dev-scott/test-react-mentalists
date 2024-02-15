import Image from "next/image";
import styles from "./Hero.module.css";
import heroImg1 from "@/assets/heroImg1.png";
import CardFunding from "../CardFunding/CardFunding";
import CardClient from "../CardClients/CardClient";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "@/utils/motion";

const HeroSection = () => {
  return (
    <motion.div
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.hero_container}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={styles.container1}
      >
        <h1 className={styles.hero_h1}>
          Smart Digital Agency <br /> For Your Business <br /> To Succeed
        </h1>
        <span className={styles.hero_span}>
          Agency that build many amazing product to boost <br /> your business
          to next level
        </span>
      </motion.div>
      <motion.div className={styles.container2} variants={zoomIn(0.4, 1)}>
        <CardFunding />
        <Image
          src={heroImg1}
          alt="hero img 1"
          width={150}
          height={150}
          className={styles.heroImg1}
        />
        <CardClient />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
