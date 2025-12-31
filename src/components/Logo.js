"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-(--color-dark) text-(--color-light) flex items-center justify-center rounded-full font-bold text-2xl"
        whileHover={{ 
            scale: 1.01,
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(204, 134, 36, 1)","rgba(131,58,180,1)", "#121212"],
            transition: { duration: 1, repeat: Infinity}
         }}
      >
        DJ
      </MotionLink>
    </div>
  );
};

export default Logo;
