import React from "react";
import EmblaCarousel from "@/app/components/emblaCarousel";
import Header from "./components/homePageComponents/header.jsx";
import HomePageCards from "./components/homePageComponents/homePageCards.jsx";
import MainSection from "./components/homePageComponents/mainSection.jsx";

function Home() {
  return (
    <>
      <div className="w-full h-10 text-center text-[40px] my-20">
        <Header />
      </div>
      <div className=" w-1/2 h-[420px] mx-auto my-10 gap-5 flex justify-center items-center">
        <HomePageCards />
      </div>

      <div className="w-1/2 h-auto mx-auto my-10">
        <EmblaCarousel />
      </div>

      <main className="w-full h-96 my-10 bg-gray-900">
        <MainSection />
      </main>
    </>
  );
}

export default Home;
