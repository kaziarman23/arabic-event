"use client";
import { motion } from "framer-motion";
import React from "react";
import carouselOne from "@/public/images/carouselOne.jpg";
import carouselTwo from "@/public/images/carouselTwo.jpg";
import carouselThree from "@/public/images/carouselThree.jpg";
import carouselFour from "@/public/images/carouselFour.jpg";
import carouselFive from "@/public/images/carouselFive.jpg";
import Image from "next/image";

function foundationComponent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Shahada"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={carouselOne}
          alt="Declaration of Faith"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Shahada (Declaration of Faith)</h1>
        <h2 className="hover:text-red-600">
          This is the central belief of Islam, expressed in the phrase There is
          no god but Allah(God) and Muhammad is the Messenger of God. Saying
          this with conviction is how one becomes a Muslim.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Salah"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={carouselTwo}
          alt="Prayer"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Salah (Prayer)</h1>
        <h2 className="hover:text-red-600">
          Muslims perform ritual prayers five times a day facing the Kaaba in
          Mecca. These prayers serve as a direct connection between a believer
          and God.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Sawm"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={carouselThree}
          alt="Fasting"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Sawm (Fasting)</h1>
        <h2 className="hover:text-red-600">
          During the holy month of Ramadan, Muslims abstain from food, drink,
          and other indulgences from dawn to dusk. Fasting teaches
          self-discipline, empathy for the less fortunate, and strengthens
          connection with God.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Hajj"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={carouselFour}
          alt="Pilgrimage"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Hajj (Pilgrimage)</h1>
        <h2 className="hover:text-red-600">
          {" "}
          If they are able-bodied and can afford it, Muslims are expected to
          undertake the pilgrimage to Mecca at least once in their lifetime.
          It&#39;s a spiritual journey that retraces the steps of Prophet
          Abraham and emphasizes the equality of all believers before God.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Zakat"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={carouselFive}
          alt="Almsgiving"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Zakat (Almsgiving)</h1>
        <h2 className="hover:text-red-600">
          This is the act of giving a specific portion of one&#39;s wealth to
          the poor and needy. It&#39;s a form of charity that purifies wealth
          and promotes social responsibility.
        </h2>
        <hr className="w-full" />
      </motion.div>
    </>
  );
}

export default foundationComponent;
