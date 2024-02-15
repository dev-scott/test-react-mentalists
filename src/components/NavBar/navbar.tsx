import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import CustomButton from "../ui/Button/Button";
import menu from "@/assets/menu.png";
import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className={styles.container}
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className={styles.logo_container}>
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
      
      <div className={styles.link_container}>
        <Link className={styles.link} href="#">
          About us
        </Link>
        <Link className={styles.link} href="#">
          {" "}
          Profil
        </Link>
        <Link className={styles.link} href="#">
          Team
        </Link>
        <Link className={styles.link} href="#">
          Contact
        </Link>
      </div>
      <div className={styles.button_container}>
        <CustomButton>Sing In</CustomButton>
        <div className={styles.menu}>
          <Image src={menu} alt="menu" height={20} width={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
