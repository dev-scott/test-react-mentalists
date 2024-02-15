"use client";

import { theme } from "@/utils/theme";
import styles from "./cardFunding.module.css";
import Image from "next/image";
import man from "@/assets/man.png";

interface IProps {}
const CardFunding = (props: IProps) => {
  return (
    <main
      style={{
        width: "300px",
        height: "800px",
        position: "relative",
      }}
    >
      <div
        className={styles.card_container}
        style={{
          backgroundColor: `${theme.palette.common.black}`,
          zIndex: "40",
        }}
      >
        <span
          className={styles.card_title}
          style={{ backgroundColor: `${theme.palette.common.white}` }}
        >
          First Round of <br /> funding
        </span>
        <div>
          <div className={styles.ui_widgets}>
            <div className={styles.ui_values}>75%</div>
            <div className={styles.ui_labels}>Java</div>
          </div>
        </div>
        <div className={styles.circular_progress}>
          <h1>2.4K</h1>
          <span>
            264 Contribution in <br /> the las year
          </span>
        </div>
      </div>
      <div className={styles.container_projet}>
        <div>
          <h1 className={styles.projet_h1}>
            4.875
            <span style={{ fontSize: "20px", marginLeft: "5px" }}>❤️</span>{" "}
          </h1>
          <span className={styles.projet_span}>
            Project view <br /> Last year
          </span>
        </div>
        <Image
          className={styles.carImg}
          style={{ position: "absolute", bottom: "-40%", left: "80%" }}
          src={man}
          alt="person"
          width={500}
          height={700}
        />
      </div>
    </main>
  );
};

export default CardFunding;
