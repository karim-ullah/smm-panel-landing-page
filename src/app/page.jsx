import Hero from "@/components/home/Hero";
import Stats from "@/components/home/stats";
import Services from '@/components/home/services'
import WorkingProcess from "@/components/home/workingProcess";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Stats/>
      <Services/>
      <WorkingProcess/>
    </div>
  );
}
