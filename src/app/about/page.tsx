"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../../styles/Page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <h1>About</h1>

      <motion.div
        className={styles.box}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Section One
      </motion.div>

      <motion.div
        className={styles.box}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Section Two
      </motion.div>

      <motion.div
        className={styles.box}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        Section Three
      </motion.div>

      <motion.div
        className={styles.box}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Section Four
      </motion.div>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
