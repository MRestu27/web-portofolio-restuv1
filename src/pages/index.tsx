import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="bg-[#232946] text-primary h-screen overflow-scroll scroll-smooth">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
    </motion.div>
  );
}
