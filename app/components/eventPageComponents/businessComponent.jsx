"use client";

import { motion } from "framer-motion";
import React from "react";
import business from "@/public/images/businessOne.jpeg";
import businessTwo from "@/public/images/businessTwo.jpeg";
import businessThree from "@/public/images/businessThree.jpeg";
import businessFour from "@/public/images/businessFour.jpeg";
import businessFive from "@/public/images/businessFive.jpg";
import Image from "next/image";

function businessComponent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Conferences"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={business}
          alt="Conferences and exhibitions picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Conferences and exhibitions</h1>
        <h2 className="hover:text-red-600">
          These events bring together industry leaders, experts, and potential
          customers from all over the world. They offer a great opportunity to
          learn about the latest trends and developments in your industry, as
          well as to network with other professionals.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Trade"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={businessTwo}
          alt=" Trade missions picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Trade missions</h1>
        <h2 className="hover:text-red-600">
          These events are a great way to explore new business opportunities in
          a particular region. Trade missions typically involve a group of
          companies from one country traveling to another country to meet with
          potential customers and partners.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Networking"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={businessThree}
          alt="Networking event picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Networking events</h1>
        <h2 className="hover:text-red-600">
          These events are a great way to meet other professionals in your
          industry or in a related industry. They can be a great way to make new
          contacts and learn about new business opportunities.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Finance"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={businessFour}
          alt="Finance event picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Finance event</h1>
        <h2 className="hover:text-red-600">
          Events like the World Economic Forum Mena or the Abu Dhabi
          International Financial Centre Global Financial Markets Forum cater to
          finance professionals.
        </h2>
        <hr className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        id="Tourism"
        className="flex justify-center items-center gap-3 flex-col my-5"
      >
        <Image
          src={businessFive}
          alt="Tourism picture"
          placeholder="blur"
          className="w-3/5 h-96"
        />
        <h1 className="hover:text-green-500">Tourism</h1>
        <h2 className="hover:text-red-600">
          The Arabian Travel Market (ATM) in Dubai is a leading tourism event,
          while events like the Riyadh International Tourism Fair showcase Saudi
          Arabia&#39;s tourism potential.
        </h2>
        <hr className="w-full" />
      </motion.div>
    </>
  );
}

export default businessComponent;
