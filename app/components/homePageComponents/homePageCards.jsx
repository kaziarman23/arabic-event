"use client"

import React from "react";
import mosque from "@/public/images/mosque.jpg";
import mosqueTwo from "@/public/images/mosqueTwo.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

function homePageCards() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 3,
          ease: "easeIn"
        }}
        className="w-1/2 h-[450px] border-solid border-gray-500 border rounded-xl bg-slate-300 opacity-70 text-black flex justify-center items-center flex-col hover:shadow-xl hover:shadow-white cursor-cell"
      >
        {/* <div className=""> */}
          <Image
            src={mosque}
            alt="this is image one"
            quality={100}
            placeholder="blur"
            className="p-5 overflow-hidden rounded-xl hover:shadow-md hover:shadow-black"
          />
        {/* </div> */}
        <div className="text-center flex justify-center items-center gap-5 flex-col mx-2 my-3">
          <p>
            Say, O Prophet, He is Allah One and Indivisible. Allah the Sustainer
            needed by all. He has never had offspring, nor was He born. And
            there is none comparable to Him.
          </p>
          <p>Quran: 112</p>
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 3,
          ease: "easeIn"
        }}
        className="w-1/2 h-[450px] border-solid border-gray-500 border rounded-xl bg-slate-300 opacity-70 text-black flex justify-center items-center flex-col hover:shadow-xl hover:shadow-white cursor-cell"
      >
        {/* <div className=""> */}
          <Image
            src={mosqueTwo}
            alt="this is image one"
            quality={100}
            placeholder="blur"
            className="p-5 overflow-hidden rounded-xl hover:shadow-md hover:shadow-black sm:mt-6 md:mt-7 lg:mt-1"
          />
        {/* </div> */}
        <div className="text-center flex justify-center items-center gap-5 flex-col mx-2 my-3">
          <p>
            The Prophet (ﷺ) said, Facilitate things to people (concerning
            religious matters), and do not make it hard for them and give them
            good tidings and do not make them run away (from Islam).
          </p>
          <p>Sahih al-Bukhari: 69</p>
        </div>
      </motion.div>
    </>
  );
}

export default homePageCards;