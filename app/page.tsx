"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-start gap-12 py-12 h-screen px-2 text-white"
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-5xl font-bold text-center text-[#17ff74]">
          ChatApp
        </h1>
        <h2 className="text-sm font-thin">
          A Next.js and ChatGPT based conversational Application
        </h2>
      </div>
      <div className="flex flex-col items-start justify-start w-4/5 text-[#90BEDE]">
        <span className="text-2xl font-semibold">
          How To Use
        </span>
        <ol className="list-decimal list-inside opacity-60">
          <li className="text-lg font-medium">
            Click on the New Chat button
          </li>
          <li className="text-lg font-medium">
            Start typing your message and wait for the AI to respond
          </li>
          <li className="text-lg font-medium">
            You can also click on the existing chats to continue the conversation
          </li>
        </ol>
      </div>
      <div className="flex flex-col items-end justify-end w-4/5 text-[#90BEDE]">
        <span className="text-2xl font-semibold">
          About
        </span>
        <p className="text-lg font-medium">
          This application is built using Next.js and ChatGPT. It uses NextAuth for authentication and Firebase for database and hosting. This application uses ChatGPT by OpenAI for providing the conversational model. 
        </p>
      </div>

      
    </motion.div>
  );
}
