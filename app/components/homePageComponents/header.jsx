"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";

function header() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -100
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 3,
        ease: easeInOut
      }}
    >
      <h1 className="hover:text-red-500 cursor-not-allowed">
        السلام عليكم ورحمة الله وبركاته
      </h1>
    </motion.header>
  );
}

export default header;
