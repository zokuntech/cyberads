"use client";
import { useEffect } from "react";
import "../../styles/hero.css";
import { init } from "@fullstory/browser";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Hero() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    init({ orgId: "o-20D7ZB-na1" });
    //   <script>
    //   gtag('event', 'conversion', {'send_to': 'AW-808416131/tuXTCJD1w8kZEIPnvYED'});
    // </script>
    // sendGTMEvent({
    //   event: "conversion",
    //   send_to: "AW-808416131/tuXTCJD1w8kZEIPnvYED",
    //   value: "value", // Replace 'value' with the actual value you want to send
    // });
  }, []);

  return (
    <section className="heroImage bg-white w-full h-screen md:h-[600px] lg:h-screen grid grid-rows-5 mb-10">
      <div className="w-full h-full bg-black/30 fixed" />
      <div className=" row-span-3 xl:row-span-2 flex flex-col justify-end items-center z-10 cursor-default">
        <h1 className="2xl:text-6xl  text-white font-bold text-center text-4xl w-[90%] md:text-5xl md:leading-tight">
          Boost Your Brand's Visibility
        </h1>
        <h2 className="mt-3 text-xl w-[90%] 2xl:text-3xl font-medium text-white text-center sm:w-[70%] md:w-[80%] sm:text-2xl">
          Advertise on a high-visibility Cybertruck around the Phoenix valley
        </h2>
        <button
          onClick={() => scrolltoHash("contact")}
          className="bg-black px-12 py-4 text-xl text-white border-2 border-white font-medium mt-6 hover:bg-white hover:text-black"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
