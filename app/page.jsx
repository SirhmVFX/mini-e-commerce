import Allproduct from "@/components/Allproduct";
import Bestsellers from "@/components/Bestsellers";
import Explore from "@/components/Explore";
import Herosection from "@/components/HeroSection";
import Statistics from "@/components/Statistics";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <>
      <Herosection />
      <Statistics />
      <Bestsellers />
      <Explore />
      <Trending />
      <Allproduct />
    </>
  );
}
