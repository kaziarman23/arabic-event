import React from "react";
import EmblaCarousel from "@/app/components/emblaCarousel";
import Header from "./components/homePageComponents/header.jsx";
import HomePageCards from "./components/homePageComponents/homePageCards.jsx";
import MainSection from "./components/homePageComponents/mainSection.jsx";

function Home() {
  return (
    <>
      <div className="w-full h-14 text-center my-20 text-5xl max-sm:text-4xl max-md:text-4xl">
        <Header />
      </div>
      <div className="w-1/2 h-auto mx-auto my-10 gap-5 flex justify-center items-center max-sm:w-4/5 max-md:w-4/5">
        <HomePageCards />
      </div>

      <div className="w-1/2 h-auto mx-auto my-10">
        <EmblaCarousel />
      </div>

      <main className="w-full h-auto my-10 bg-gray-900">
        <MainSection />
      </main>
    </>
  );
}

export default Home;
