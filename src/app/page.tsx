import "atropos/css";
import GoogleMap from "@/components/GoogleMap";
import WeddingCard from "@/components/WeddingCard";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div id="app" className="container mx-auto">
      <div className="flex flex-col items-center justify-center m-6">
        <WeddingCard />
        <Countdown targetDate="2025-07-05T15:09:00+07:00" />
        <GoogleMap />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}
