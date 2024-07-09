"use client";
import { motion } from "framer-motion";
import React from "react";
import religious from "@/public/images/religious.jpg";
import religiousTwo from "@/public/images/religiousTwo.jpg";
import religiousThree from "@/public/images/religiousThree.jpg";
import religiousFour from "@/public/images/religiousFour.jpg";
import religiousFive from "@/public/images/religiousFive.jpg";
import Image from "next/image";

function religiousComponent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Eid-al-Fitr"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={religious}
          alt="Festival of Breaking the Fast"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">
          Eid-al-Fitr (Festival of Breaking the Fast)
        </h1>
        <h2 className="hover:text-red-600">
          This three-day celebration marks the end of the holy month of Ramadan.
          Muslims abstain from food and drink from dawn to dusk during Ramadan.
          Eid al-Fitr is a time for feasting, family gatherings, and exchanging
          gifts.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Eid-al-Adha"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={religiousTwo}
          alt="Festival of Sacrifice"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">
          Eid-al-Adha (Festival of Sacrifice)
        </h1>
        <h2 className="hover:text-red-600">
          This four-day celebration commemorates Prophet Abraham&#39;s
          willingness to sacrifice his son Ishmael as an act of obedience to
          God. Muslims traditionally sacrifice an animal (usually a sheep, goat,
          or cow) and share the meat with family, friends, and the poor.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Laylat-al-Qadr"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={religiousThree}
          alt="Night of Power"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">
          Laylat-al-Qadr (Night of Power)
        </h1>
        <h2 className="hover:text-red-600">
          This night, believed to be the night the Quran was revealed to the
          Prophet Muhammad, is observed during the last ten days of Ramadan.
          Muslims spend Laylat al-Qadr in prayer and recitation of the Quran.
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
          src={religiousFour}
          alt="Pilgrimage"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Hajj (Pilgrimage)</h1>
        <h2 className="hover:text-red-600">
          {" "}
          The Hajj is a pilgrimage to Mecca, Saudi Arabia, that every
          able-bodied Muslim must undertake at least once in their lifetime. The
          Hajj commemorates the journey of Prophet Abraham (Ibrahim), his wife
          Hagar, and their son Ishmael. Pilgrims perform a series of rituals,
          including circling the Kaaba, a cubical structure in Mecca that
          Muslims believe was built by Abraham and Ishmael.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Ashura"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={religiousFive}
          alt="Ashura"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Ashura</h1>
        <h2 className="hover:text-red-600">
          Ashura is the tenth day of Muharram, the first month of the Islamic
          calendar. Shia Muslims observe Ashura as a day of mourning for the
          martyrdom of Imam Hussein, the grandson of Prophet Muhammad. Sunni
          Muslims may observe Ashura as a day of fasting.
        </h2>
        <hr className="w-full" />
      </motion.div>
    </>
  );
}

export default religiousComponent;
