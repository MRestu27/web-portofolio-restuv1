import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi Everyone", "My Name's is Muh Restu Aliza Akbar", "I trying to learn how to be a front end web dev", "I love making music like LO-FI and EDM Music"],
    loop: true,
    delaySpeed: 100,
  });
  return (
    <div className="h-screen flex flex-col justify-center space-y-8 items-center text-center overflow-hidden">
      <img src="https://avatars.githubusercontent.com/u/111188426?v=4" className="relative rounded-full h-32 w-32 mx-auto object-cover" />
      <div className="z-20">
        <h2 className="text-sm text-paragraph pb-2 uppercase tracking-[15px]">Student</h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 space-y-1"></div>
      </div>
    </div>
  );
}
