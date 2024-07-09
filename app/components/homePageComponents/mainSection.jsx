"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import foundation from "@/public/images/foundationPhoto.jpg";

function mainSection() {
  return (
    <>
      <div className="w-1/2 h-full mx-auto flex justify-center items-center flex-col">
        <div className="w-full h-full flex justify-between items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 2,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
            className="w-1/2 h-48 flex justify-center items-center"
          >
            <Image
              src={foundation}
              alt="Foundation Image"
              placeholder="blur"
              quality={100}
              className="w-80 h-44 rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 2,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
            className="w-1/2 h-48 text-white flex justify-center items-center flex-col gap-2"
          >
            <h1>The Arabic Events</h1>
            <p className="hover:text-blue-500 cursor-wait">
              This is what we do...
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0.2,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
            ease: "easeIn",
          }}
          viewport={{ once: true }}
          className="w-full h-full text-white flex justify-start items-center"
        >
          <h1>
            Welcome to our event management website, where we simplify the
            process of organizing and promoting your events. Our platform offers
            a range of tools to help you manage guest lists, ticketing, and
            RSVPs. With our user-friendly interface, you can easily create and
            customize event pages, set up registration forms, and track
            attendance. We also provide marketing solutions to help you reach a
            wider audience and increase event visibility. Our goal is to ensure
            your events run smoothly, so you can focus on creating memorable
            experiences for your guests.
          </h1>
        </motion.div>
      </div>
    </>
  );
}

export default mainSection;
