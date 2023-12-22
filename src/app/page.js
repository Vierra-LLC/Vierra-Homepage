"use client";

import Business from "@/components/homepage/elements/Business";
import Case from "@/components/homepage/elements/Case";
import Experience from "@/components/homepage/elements/Experience";
import Growth from "@/components/homepage/elements/Growth";
import Hero from "@/components/homepage/elements/Hero";
import Software from "@/components/homepage/elements/Software";
import Testimonials from "@/components/homepage/elements/Testimonials";
import Footer from "@/components/homepage/utils/Footer";
import Navbar from "@/components/homepage/utils/Navbar";
import styles from "./page.module.css";
import { useElementSize } from "@mantine/hooks";

function Page() {
  const { ref, width, height } = useElementSize();

  return (
    <div className={styles.Container} ref={ref}>
      <Navbar />
      <Hero width={width} />
      <Business width={width} />
      <Growth width={width} />
      <Software width={width} />
      <Experience width={width} />
      <Case width={width} />
      <Testimonials width={width} />
      <Footer />
    </div>
  );
}

export default Page;
