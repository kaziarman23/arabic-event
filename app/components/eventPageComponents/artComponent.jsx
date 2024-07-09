"use client";

import { motion } from "framer-motion";
import React from "react";
import art from "@/public/images/artOne.jpg";
import artTwo from "@/public/images/artTwo.jpg";
import artThree from "@/public/images/artThree.jpg";
import artFour from "@/public/images/artFour.jpg";
import artFive from "@/public/images/artFive.jpg";
import Image from "next/image";

function artComponent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Painting"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={art}
          alt="Painting picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Painting</h1>
        <h2 className="hover:text-red-600">
          From intricate miniatures to bold contemporary works, Arabic paintings
          showcase a variety of styles and subjects.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Calligraphy"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={artTwo}
          alt="Calligraphy picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Calligraphy</h1>
        <h2 className="hover:text-red-600">
          This art form elevates the beauty of the Arabic script, often
          incorporating it into decorative pieces or religious texts.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Textiles"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={artThree}
          alt="Textiles picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Textiles events</h1>
        <h2 className="hover:text-red-600">
          Woven tapestries, rugs, and clothing adorned with intricate patterns
          and embroidery are a hallmark of Arab artistic expression.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Sculpture"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={artFour}
          alt="Sculpture event picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Sculpture event</h1>
        <h2 className="hover:text-red-600">
          Stone carvings, metalwork, and ceramic pieces depict everything from
          human figures to geometric designs.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Architecture"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={artFive}
          alt="Architecture picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Architecture Event</h1>
        <h2 className="hover:text-red-600">
          Mosques, palaces, and other structures often feature stunning
          architectural elements like mosaics, domes, and intricate carvings.
        </h2>
        <hr className="w-full" />
      </motion.div>
    </>
  );
}

export default artComponent;
