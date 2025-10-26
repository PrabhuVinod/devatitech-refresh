import Hero from "@/components/Hero";
import CenterOfExcellence from "@/components/CenterOfExcellence";
import TLMValues from "@/components/TLMValues";
import GlobalReach from "@/components/GlobalReach";
import Domains from "@/components/Domains";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Hero />
      <CenterOfExcellence />
      <TLMValues />
      <GlobalReach />
      <Domains />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
