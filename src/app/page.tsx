import DreamSpace from "@/components/organisms/DreamSpace/page";
import ExperienceSection from "@/components/organisms/Experience/Experience";
import Hero from "@/components/organisms/Hero";
import InnovativeSection from "@/components/organisms/Innovative/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <DreamSpace/>
      <InnovativeSection/>
    </main>
  );
}
