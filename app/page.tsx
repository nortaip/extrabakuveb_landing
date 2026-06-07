import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import NightlifeContent from "@/components/sections/NightlifeContent";
import Experience from "@/components/sections/Experience";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Gallery from "@/components/sections/Gallery";
import CtaBand from "@/components/sections/CtaBand";
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
        <CtaBand
          eyebrow="VIP Experience"
          title="Reserve a VIP table at the"
          highlight="best night club in Baku"
          description="Bottle service, a dedicated host and the best seats in the house — secure your VIP lounge for an unforgettable night."
          primary={{ label: "Reserve a VIP Table", href: "#contact" }}
          secondary={{ label: "Explore the Menu", href: "#menu" }}
        />
        <WhyExtraBaku />
        <Events />
        <Cocktails />
        <Testimonials />
        <CtaBand
          title="Your night begins at"
          highlight="Extra Baku"
          description="The largest premium nightclub in the Caucasus is waiting. Reserve your night, book a private event or talk to our team."
          primary={{ label: "Reserve Your Night", href: "#contact" }}
          secondary={{ label: "Contact Our Event Team", href: "#contact" }}
        />
        <InstagramWall />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
