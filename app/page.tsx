import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Gallery from "@/components/sections/Gallery";
import WhyExtraBaku from "@/components/sections/WhyExtraBaku";
import Events from "@/components/sections/Events";
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
        <Experience />
        <VideoShowcase />
        <Gallery />
        <WhyExtraBaku />
        <Events />
        <Testimonials />
        <InstagramWall />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
