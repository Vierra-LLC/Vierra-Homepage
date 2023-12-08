import Hero from "@/components/elements/Hero";
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
    </div>
  );
}

export default page;
