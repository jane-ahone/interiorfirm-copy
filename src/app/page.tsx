import DreamSpace from "@/components/organisms/DreamSpace/page";
import ExperienceSection from "@/components/organisms/Experience/Experience";
import Feedback from "@/components/organisms/Feedback/page";
import Hero from "@/components/organisms/Hero";
import InnovativeSection from "@/components/organisms/Innovative/page";
import Interior from "@/components/organisms/Interior/page";
import Unique from "@/components/organisms/Unique/page";

export default function Home() {
  return (
    <main className="container-grid overflow-hidden">
      <Hero />
      <ExperienceSection />
      <DreamSpace />
      <InnovativeSection />
      <Unique />
      <Interior />
      <Feedback/>
    </main>
  );
}
