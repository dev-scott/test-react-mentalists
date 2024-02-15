import { theme } from "@/utils/theme";
import styles from "./cardClient.module.css";
import person from "@/assets/person.jpg";
import Image from "next/image";

const CardClient = () => {
  return (
    <main className={styles.main_container}>
      <div
        className={styles.card_container}
        style={{ backgroundColor: `${theme.palette.secondary.main}` }}
      >
        <div
          className={styles.card_container2}
          style={{ backgroundColor: `${theme.palette.common.black}` }}
        >
          <div className={styles.card_header}>
            <h1>5000+</h1>
            <span>Total Clients</span>
          </div>
          <div className={styles.card_footer} style={{ width: "100%" }}>
            <div
              className={styles.badge1}
              style={{ backgroundColor: "white", padding: "5px" }}
            >
              <Image
                src={person}
                alt="person"
                style={{ width: "100%", height: "100%", borderRadius: "100%" }}
              />
            </div>
            <div
              className={styles.badge2}
              style={{ backgroundColor: "white", padding: "5px" }}
            >
              <Image
                src={person}
                alt="person"
                style={{ width: "100%", height: "100%", borderRadius: "100%" }}
              />
            </div>
            <div
              className={styles.badge3}
              style={{
                backgroundColor: `${theme.palette.secondary.dark}`,
                padding: "5px",
              }}
            >
              <h1>+2</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button_container}>
        <button className={styles.button}>Mobile app design</button>
        <button className={styles.button}>Games</button>
        <button className={styles.button} style={{ gridColumn: "1" }}>
          Programming
        </button>
        <button className={styles.button}>Search engine Opt</button>
        <button className={styles.button} style={{ gridColumn: "1/-1" }}>
          Sofware developer
        </button>
      </div>
    </main>
  );
};

export default CardClient;
