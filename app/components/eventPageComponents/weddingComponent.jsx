"use client";
import { motion } from "framer-motion";
import React from "react";
import weddingPhotoTwo from "@/public/images/weddingPhotoTwo.jpg";
import weddingPhotoThree from "@/public/images/weddingPhotoThree.jpg";
import weddingPhotoFour from "@/public/images/weddingPhotoFour.jpg";
import weddingPhoto from "@/public/images/weddingPhoto.jpg";
import Image from "next/image";

function weddingComponent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Mahr"
        className="flex justify-center items-center flex-col gap-5 my-5"
      >
        <Image
          src={weddingPhoto}
          alt="Wedding Photo for Mahr"
          placeholder="blur"
          className="rounded-xl"
        />
        <h1 className="text-2xl hover:text-green-500">Magsaba (Mahr)</h1>

        <br />
        <div>
          <h1 className="hover:text-green-500">
            The groom presents the bride with a dowry, symbolizing his
            commitment to providing for her. This can include money, jewelry, or
            other valuables.
          </h1>
          <br />
          <h2 className="hover:text-red-600">
            Hadith: A woman came to the Prophet and he said: Who will marry her
            ? A man said: I will. The Prophet said: Give her something, even if
            it is an iron ring. He said: I do not have one. He said: I marry her
            to you for what you know of the Quran.(Sunan Ibn Majah, 1889)
          </h2>
        </div>
        <hr className="w-full " />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Fatiha"
        className="flex justify-center items-center flex-col gap-5 my-5"
      >
        <Image
          src={weddingPhotoTwo}
          alt="Wedding Photo for Fatiha"
          placeholder="blur"
          className="rounded-xl"
        />
        <h1 className="text-2xl hover:text-green-500">
          Fatiha (Opening Prayer)
        </h1>

        <br />
        <div>
          <h1 className="hover:text-green-500">
            An Imam or religious leader performs a prayer to bless the union,
            seeking Allah&#39;s (SWT) approval and guidance for the couple.
          </h1>
          <br />
          <h2 className="hover:text-red-600">
            Hadith Narrated by Abu Dawud: The marriage prayer is a sunnah for
            every Muslim.
          </h2>
        </div>
        <hr className="w-full " />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Nikah"
        className="flex justify-center items-center flex-col gap-5 my-5"
      >
        <Image
          src={weddingPhotoThree}
          alt="Wedding Photo for Nikah"
          placeholder="blur"
          className="rounded-xl"
        />
        <h1 className="text-2xl hover:text-green-500">
          Aqdun Nikah (Marriage Contract Signing)
        </h1>
        <br />
        <div>
          <h1 className="hover:text-green-500">
            The marriage contract is a legal document signed by the bride&#39;s
            wali (guardian) and the groom, with witnesses present. It outlines
            the(zuwaja) or marital rights and obligations.
          </h1>
          <br />
          <h2 className="hover:text-red-600">
            Hadith Narrated by Ibn Abbas: The conditions most worthy of
            fulfillment are the ones you stipulate between yourselves [in a
            marriage contract].(Sahih Bukhari)
          </h2>
        </div>
        <hr className="w-full " />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Feast"
        className="flex justify-center items-center flex-col gap-5 my-5"
      >
        <Image
          src={weddingPhotoFour}
          alt="Wedding Photo for Feast"
          placeholder="blur"
          className="rounded-xl"
        />
        <h1 className="text-2xl hover:text-green-500">
          Walimat al-Aras (Wedding Feast)
        </h1>
        <br />
        <div>
          <h1 className="hover:text-green-500">
            A grand celebration with family and friends to mark the joyous
            occasion. It involves traditional food, music, and dancing,
            fostering community and strengthening ties.
          </h1>
          <br />
          <h2 className="hover:text-red-600">
            Hadith Narrated by Anas: The Prophet (ﷺ) Walima [wedding feast]
            after he married Zaynab bint Jahsh.(Sahih Bukhari),
          </h2>
        </div>
        <hr className="w-full " />
      </motion.div>
    </>
  );
}

export default weddingComponent;
