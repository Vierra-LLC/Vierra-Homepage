"use client";

import { useElementSize } from "@mantine/hooks";
import React from "react";

import Business from "components/homepage/elements/Business";
import Growth from "components/homepage/elements/Growth";
import styles from "./page.module.css";

import Hero from "components/elements/Hero";
import Testimonials from "components/elements/Testimonials";
import Experience from "components/elements/Experience";
import Case from "components/elements/Case";
import Footer from "components/utils/Footer";
import Navbar from "components/utils/Navbar";
import Software from "components/homepage/elements/Software";

const Page = () => {
  const { ref, width } = useElementSize();

  return (
    <div className={styles.Container} ref={ref}>
      <Navbar />
      <Hero width={width} />
      <Business />
      <Growth />
      <Software />
      <Experience />
      <Case />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Page;
