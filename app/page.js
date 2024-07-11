import React from "react";
import EmblaCarousel from "./components/EmblaCarousel.jsx";
import Header from "./components/homePageComponents/header.jsx";
import HomePageCards from "./components/homePageComponents/homePageCards.jsx";
import MainSection from "./components/homePageComponents/mainSection.jsx";

function Home() {
  return (
    <>
      <div className="w-full h-14 text-white text-center my-20 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
        <Header />
      </div>
      <div className="w-4/5 h-auto mx-auto my-10 gap-5 flex justify-center items-center sm:w-4/5 md:w-4/5 lg:w-1/2 ">
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
