"use client";

import React from "react";
import wedding from "@/public/images/WeddingPhotoThree.jpg";
import foundation from "@/public/images/foundationPhoto.jpg";
import commander from "@/public/images/commanderPhoto.jpg";
import religious from "@/public/images/religiousEvent.jpg";
import art from "@/public/images/artPhoto.jpg";
import business from "@/public/images/businessPhoto.jpg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const eventsData = [
  {
    id: 1,
    img: wedding,
    pageName: "weddingEventPage",
    title: "Arabic Wedding Events",
    message: "More Details...",
  },
  {
    id: 2,
    img: foundation,
    pageName: "foundationEventPage",
    title: "Foundation of Islamic life",
    message: "More Details...",
  },
  {
    id: 3,
    img: commander,
    pageName: "leadersPage",
    title: "Islamic Top Leaders",
    message: "More Details...",
  },
  {
    id: 4,
    img: religious,
    pageName: "religiousEventPage",
    title: "Arabic Religious Events",
    message: "More Details...",
  },
  {
    id: 5,
    img: art,
    pageName: "artEventPage",
    title: "Arabic Art Exhibitions",
    message: "More Details...",
  },
  {
    id: 6,
    img: business,
    pageName: "businessEventPage",
    title: "Arabic Business Events",
    message: "More Details...",
  },
];

function eventPageCards() {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full h-auto grid grid-rows-4 grid-cols-1 gap-2 place-items-center overflow-hidden sm:grid-rows-3 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3"
      >
        {eventsData.map((event) => (
          <motion.div
            transition={{
              duration: 4,
              ease: "linear",
            }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            key={event.id}
            className="w-60 h-60 bg-black text-white rounded-xl border-red-600 border my-10 hover:drop-shadow-xl hover:shadow-yellow-500"
          >
            <Image src={event.img} alt={event.title} className="p-2" />
            <h1 className="mx-5 my-2">{event.title}</h1>
            <p className="mx-5 text-blue-500 hover:text-blue-300 cursor-pointer">
              <Link href={`/event/${event.pageName}`}>{event.message}</Link>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default eventPageCards;
