import ExperienceSection from "@/components/organisms/Experience/experience";
import Hero from "@/components/organisms/Hero";

export default function Home() {
  return (
    <main className="container-grid">
      <Hero />
      <ExperienceSection/>
      {/* <ExperienceSection />
      <DreamSpace />
      <InnovativeSection />
      <Unique />
      <Interior />
      <Feedback />
      <Working />
      <Footer /> */}
    </main>
  );
}
