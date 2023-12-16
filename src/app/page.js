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

function page() {
  return (
    <div className={styles.Container}>
      <Navbar />
      <Hero />
      <Business />
      <Growth />
      <Software />
      <Experience />
      <Case />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
