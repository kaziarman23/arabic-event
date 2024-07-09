"use client";

import { easeIn, motion } from "framer-motion";
import React from "react";

function aboutUsComponent() {
  return (
    <>
      <div className="w-2/3 h-60 mx-auto my-10">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
            ease: easeIn,
          }}
          className="w-full h-10 text-center text-2xl p-2"
        >
          <h1>The Arabic Events</h1>
        </motion.div>
        <hr className="w-1/2 mx-auto my-2" />
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
            ease: easeIn,
          }}
          className="w-4/5 h-44 my-6 mx-auto text-justify"
        >
          <p className="hover:text-green-500">
            Welcome to Arabic Events, your premier online destination for
            discovering and engaging with a wide array of Arabic cultural
            celebrations. Our website is a testament to the richness and
            diversity of Arabic traditions, offering comprehensive event
            listings, insightful articles, and interactive features. We strive
            to create an inclusive and enriching platform, fostering a deeper
            understanding and apperciation of Arabic culture. Join us as we
            celebrate, learn, and grow together in this vibrant community.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default aboutUsComponent;
