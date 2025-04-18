"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>

      <motion.div
        className={styles.box}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        First Box
      </motion.div>

      <motion.div
        className={styles.box}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Second Box
      </motion.div>

      <motion.div
        className={styles.box}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Third Box
      </motion.div>

      <Link href="/about">Go to About</Link>
    </div>
  );
}
