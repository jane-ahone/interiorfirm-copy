import Footer from "@/components/layout/Footer/page";
import ExperienceSection from "@/components/organisms/Experience/experience";
import Feedback from "@/components/organisms/Feedback/page";
import Hero from "@/components/organisms/Hero";
import Interior from "@/components/organisms/Interior/page";
import Unique from "@/components/organisms/Unique/page";
import Working from "@/components/organisms/Working/page";

export default function Home() {
  return (
    <main className="container-grid">
      <Hero />
      <ExperienceSection />
      {/* <DreamSpace />
      <InnovativeSection /> */}
      <Unique />
      <Interior />
      <Feedback />
      <Working />
      <Footer />
    </main>
  );
}
