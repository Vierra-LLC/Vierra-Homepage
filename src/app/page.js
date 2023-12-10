import Hero from "@/components/elements/Hero";
import Testimonials from "@/components/elements/Testimonials";
import Footer from "@/components/utils/Footer";
import Navbar from "@/components/utils/Navbar";

function page() {
  const block = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div style={block}>
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
