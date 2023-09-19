"use client";

import React from "react";
import { signIn } from "next-auth/react";

type Props = {};

function Login({}: Props) {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center text-white text-center gap-10">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-5xl font-bold text-center text-[#17ff74]">
        Welcome to ChatApp
        </h1>
        <h2 className="text-sm font-thin ">A Next.js and ChatGPT based conversational Application</h2>
      </div>
      <button
        onClick={() => signIn("google")}
        className="text-2xl my-8 bg-[#17ff74] text-black font-bold px-10 py-5 rounded-full hover:scale-110 transition duration-150"
      >
        Google Sign-In
      </button>
    </div>
  );
}

export default Login;
