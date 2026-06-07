import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import NightlifeContent from "@/components/sections/NightlifeContent";
import Experience from "@/components/sections/Experience";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Gallery from "@/components/sections/Gallery";
import WhyExtraBaku from "@/components/sections/WhyExtraBaku";
import Events from "@/components/sections/Events";
import Cocktails from "@/components/sections/Cocktails";
import Testimonials from "@/components/sections/Testimonials";
import InstagramWall from "@/components/sections/InstagramWall";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative grain">
        <Hero />
        <NightlifeContent />
        <Experience />
        <VideoShowcase />
        <Gallery />
        <WhyExtraBaku />
        <Events />
        <Cocktails />
        <Testimonials />
        <InstagramWall />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
