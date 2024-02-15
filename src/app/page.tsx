"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/NavBar/navbar";
import HeroSection from "@/components/Hero/Hero";
import { theme } from "@/utils/theme";

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{ backgroundColor: `${theme.palette.primary.main}` }}
    >
      <Navbar />
      <HeroSection />
    </main>
  );
}
