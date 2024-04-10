import {CarouselSlider} from "@/components/CarouselSlider"
import ServiceSection from "@/components/ServiceSection";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main >
     <CarouselSlider />
     <ServiceSection />
     <Stats />
     <Footer />
    </main>
  );
}
