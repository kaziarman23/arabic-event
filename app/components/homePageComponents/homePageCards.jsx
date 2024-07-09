"use client"

import React from "react";
import pic from "@/public/images/pic.jpg";
import picTwo from "@/public/images/picTwo.jpg";
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
        className="w-1/2 h-[410px] border-solid border-gray-500 border rounded-xl bg-slate-300 opacity-70 text-black flex justify-center items-center flex-col hover:shadow-xl hover:shadow-white cursor-cell"
      >
        <div className="p-5 overflow-hidden">
          <Image
            src={pic}
            alt="this is image one"
            quality={100}
            placeholder="blur"
            className="rounded-xl hover:shadow-md hover:shadow-black"
          />
        </div>
        <div className="text-center flex justify-center items-center gap-5 flex-col mx-2 my-3">
          <h3>
            Say, O Prophet, He is Allah One and Indivisible. Allah the Sustainer
            needed by all. He has never had offspring, nor was He born. And
            there is none comparable to Him.
          </h3>
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
        className="w-1/2 h-[410px] border-solid border-gray-500 border rounded-xl bg-slate-300 opacity-70 text-black flex justify-center items-center flex-col hover:shadow-xl hover:shadow-white cursor-cell"
      >
        <div className="p-5 overflow-hidden">
          <Image
            src={picTwo}
            alt="this is image one"
            quality={100}
            placeholder="blur"
            className="rounded-xl hover:shadow-md hover:shadow-black"
          />
        </div>
        <div className="text-center flex justify-center items-center gap-5 flex-col mx-2 my-3">
          <h3>
            The Prophet (ﷺ) said, Facilitate things to people (concerning
            religious matters), and do not make it hard for them and give them
            good tidings and do not make them run away (from Islam).
          </h3>
          <p>Sahih al-Bukhari: 69</p>
        </div>
      </motion.div>
    </>
  );
}

export default homePageCards;
