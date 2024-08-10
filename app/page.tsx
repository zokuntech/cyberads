"use client";
import { useEffect } from "react";
import Image from "next/image";
import Intro from "../public/intro.png";
import Visibility from "../public/visibility.png";
import Contact from "../public/contact.png";
import Eco from "../public/eco.jpg";
import { FullStory, init } from "@fullstory/browser";
import GPS from "../public/gps.png";
import { ProfileForm } from "../components/form";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { useToast } from "@/components/ui/use-toast";

import "../styles/hero.css";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const value = process.env.NEXT_PUBLIC_FULLSTORY_ORG_ID;

  useEffect(() => {
    if (value) init({ orgId: value });
  }, [value]);

  return (
    <main className="flex  flex-col items-center justify-between bg-stone-900">
      <section className="heroImage bg-white w-full h-screen md:h-[600px] lg:h-screen grid grid-rows-5 mb-10">
        <div className="w-full h-full bg-black/30 fixed" />
        <div className=" row-span-3 xl:row-span-2 flex flex-col justify-end items-center z-10 cursor-default">
          <h1 className="2xl:text-6xl  text-white font-bold text-center text-4xl w-[90%] md:text-5xl md:leading-tight">
            Boost Your Brand's Visibility
          </h1>
          <h2 className="mt-3 text-xl w-[90%] 2xl:text-3xl font-medium text-white text-center sm:w-[70%] md:w-[80%] sm:text-2xl">
            Advertise on a high-visibility Cybertruck around the Phoenix valley
          </h2>
          <button className="bg-black px-12 py-4 text-xl text-white border-2 border-white font-medium mt-6 hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </section>

      <section className="w-full h-[750px] lg:h-screen flex bg-black items-center justify-center mb-10 flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 sm:h-2/5 md:h-1/3 w-full h-1/2 lg:h-full flex items-center justify-center flex-col cursor-default">
          <h2 className="lg:text-4xl xl:text-5xl text-3xl 2xl:text-6xl font-bold text-white capitalize leading-tight 2xl:leading-snug z-10 lg:w-[80%] w-[90%] 2xl:w-[70%] mb-4 xl:mb-8">
            A new way of gaining brand awareness
          </h2>
          <p className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  font-light text-white capitalize leading-snug 2xl:leading-normal z-10 w-[90%] lg:w-[80%] 2xl:w-[70%]">
            Stand out with advertising that moves. CyberAds takes your brand on
            the road via Cybertruck, making your message visible in high-traffic
            areas where traditional ads might be missed.
          </p>
        </div>
        <Image
          src={Intro}
          className="lg:h-full lg:w-1/2 object-cover z-10 w-full h-1/2 sm:h-3/5 md:h-2/3"
          alt="Tesla cybertruck driving down the street in pheoinx arizona with people staring at it"
        />
      </section>

      <section className="w-full h-[700px] lg:h-screen flex bg-black items-center justify-center mb-10 flex-col lg:flex-row">
        <Image
          src={Visibility}
          className="lg:h-full lg:w-1/2 object-cover z-10 w-full h-1/2 sm:h-3/5 md:h-2/3"
          alt="Tesla cybertruck driving down the street in pheoinx arizona with people staring at it"
        />
        <div className="lg:w-1/2 sm:h-2/5 md:h-1/3 w-full h-1/2 lg:h-full flex items-center justify-center flex-col cursor-default">
          <h2 className="lg:text-4xl xl:text-5xl text-3xl 2xl:text-6xl font-bold text-white capitalize leading-tight 2xl:leading-snug z-10 lg:w-[80%] w-[90%] 2xl:w-[70%] mb-4 xl:mb-8">
            Exclusive Advertising Space
          </h2>
          <p className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  font-light text-white capitalize leading-snug 2xl:leading-normal z-10 w-[90%] lg:w-[80%] 2xl:w-[70%]">
            Benefit from exclusive advertising space on a unique and
            attention-grabbing vehicle, setting your business apart from
            competitors.
          </p>
        </div>
      </section>

      <section className="w-full h-[250px] sm:h-[450px] md:h-[450px] lg:h-[650px] 2xl:h-[1000px] flex bg-black items-center justify-center mb-10">
        <video
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%", margin: 0 }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="w-full h-[750px] lg:h-screen flex bg-black items-center justify-center mb-10 flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 sm:h-2/5 md:h-1/3 w-full h-1/2 lg:h-full flex items-center justify-center flex-col cursor-default">
          <h2 className="lg:text-4xl xl:text-5xl text-3xl 2xl:text-6xl font-bold text-white capitalize leading-tight 2xl:leading-snug z-10 lg:w-[80%] w-[90%] 2xl:w-[70%] mb-4 xl:mb-8">
            Eco-Friendly Advertising
          </h2>
          <p className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  font-light text-white capitalize leading-snug 2xl:leading-normal z-10 w-[90%] lg:w-[80%] 2xl:w-[70%]">
            Promote your business with our electric Cybertruck, contributing to
            a greener environment while advertising.
          </p>
        </div>
        <Image
          src={Eco}
          className="lg:h-full lg:w-1/2 object-cover z-10 w-full h-1/2 sm:h-3/5 md:h-2/3"
          alt="Tesla cybertruck driving down the street in pheoinx arizona with people staring at it"
        />
      </section>

      <section className="w-full h-[700px] lg:h-screen flex bg-black items-center justify-center mb-10 flex-col lg:flex-row">
        <Image
          src={GPS}
          className="lg:h-full lg:w-1/2 object-cover z-10 w-full h-1/2 sm:h-3/5 md:h-2/3"
          alt="Tesla cybertruck driving down the street in pheoinx arizona with people staring at it"
        />
        <div className="lg:w-1/2 sm:h-2/5 md:h-1/3 w-full h-1/2 lg:h-full flex items-center justify-center flex-col cursor-default">
          <h2 className="lg:text-4xl xl:text-5xl text-3xl 2xl:text-6xl font-bold text-white capitalize leading-tight 2xl:leading-snug z-10 lg:w-[80%] w-[90%] 2xl:w-[70%] mb-4 xl:mb-8">
            Trackable Advertising
          </h2>
          <p className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  font-light text-white capitalize leading-snug 2xl:leading-normal z-10 w-[90%] lg:w-[80%] 2xl:w-[70%]">
            With QR codes and route transparency, track the effectiveness of
            your ad campaigns in real-time.
          </p>
        </div>
      </section>

      <section className="w-full h-[1000px] bg-black md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[1000px] flex items-center justify-center mb-10 flex-col py-10 z-10">
        <div className=" w-full lg:w-full  h-1/5 flex justify-center items-center flex-col md:mb-6">
          <h2 className=" lg:text-center lg:text-4xl xl:text-5xl text-3xl 2xl:text-6xl font-bold text-white capitalize leading-tight 2xl:leading-snug z-10 lg:w-[80%] w-[90%] 2xl:w-[70%] mb-4 2xl:mb-8">
            How It Works
          </h2>
          <p className=" text-lg lg:text-center lg:w-[50%] lg:text-xl xl:text-2xl 2xl:text-3xl  font-light text-white capitalize leading-snug 2xl:leading-normal z-10 w-[90%] lg:w-[80%] 2xl:w-[70%]">
            Our Cybertruck travels around high-traffic areas, ensuring your ads
            get seen by thousands daily.
          </p>
        </div>
        <div className="h-4/5 xl:h-3/5 w-[90%] xl:w-[80%] grid grid-rows-3 md:grid-cols-3 md:grid-rows-none 2xl:gap-14 gap-6  lg:gap-10 mt-2 md:mt-2  pb-4 lg:pb-10">
          <div className="h-full border-2 border-white flex flex-col justify-center items-center">
            <span className="rounded-full border-white border-2 w-20 h-20 lg:h-24 lg:w-24 2xl:h-32 2xl:w-32 flex justify-center items-center mb-3 lg:mb-4">
              <FaClipboardList className="text-white text-3xl lg:text-4xl 2xl:text-6xl" />
            </span>
            <h3 className="text-white text-2xl xl:text-3xl font-semibold mb-2">
              Step 1:
            </h3>
            <p className="text-white text-center text-md lg:text-xl w-[90%] md:text-md lg:w-[90%] 2xl:text-2xl">
              Sign up for our early bird special or request a free consultation.
            </p>
          </div>
          <div className="h-full border-2 border-white flex flex-col justify-center items-center">
            <span className="rounded-full border-white border-2 w-20 h-20 lg:h-24 lg:w-24 2xl:h-32 2xl:w-32 flex justify-center items-center mb-3 lg:mb-4">
              <MdOutlineDesignServices className="text-white text-3xl lg:text-4xl 2xl:text-6xl" />
            </span>
            <h3 className="text-white text-2xl xl:text-3xl font-semibold mb-2">
              Step 2:
            </h3>
            <p className="text-white text-center text-md lg:text-xl w-[80%] lg:w-[90%] md:text-md  2xl:text-2xl">
              Upload your ad design or utilize our team of experts.
            </p>
          </div>
          <div className="h-full border-2 border-white flex flex-col justify-center items-center">
            <span className="rounded-full border-white border-2 w-20 h-20 lg:h-24 lg:w-24  2xl:h-32 2xl:w-32 flex justify-center items-center mb-3 lg:mb-4">
              <BsEmojiHeartEyes className="text-white text-3xl lg:text-4xl 2xl:text-6xl" />
            </span>
            <h3 className="text-white text-2xl xl:text-3xl font-semibold mb-2">
              Step 3:
            </h3>
            <p className="text-white text-center text-md  w-[90%] md:text-md md:w-[85%] lg:w-[90%]  2xl:text-2xl">
              See your ad on our Cybertruck as it drives around Phoenix.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="w-full h-[700px] flex bg-black items-center justify-center mb-10">
        <div className="w-1/2 h-full flex justify-center items-center flex-col z-10">
          <h2 className="text-6xl font-bold text-white capitalize leading-tight z-10 w-[80%] cursor-default mb-4">
            Reserve Your Advertising Space
          </h2>
          <p className="text-2xl font-light text-white capitalize leading-smug z-10 w-[80%] cursor-default">
            Showcase your business and gain unmatched visibility across the
            city.
          </p>
          <ProfileForm />
        </div>
        <Image
          src={Contact}
          className="h-full w-1/2 object-cover"
          alt="Tesla cybertruck driving down the street in pheoinx arizona with people staring at it"
        />
      </section> */}

      <section className="w-full h-[900px] lg:h-screen flex bg-black items-center justify-center mb-10 flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 sm:h-2/5 md:h-1/2 h-1/2 w-full h-1/2 lg:h-full flex items-center justify-center flex-col cursor-default z-10">
          <h2 className="lg:text-4xl xl:text-5xl text-3xl 2xl:text-6xl font-bold text-white capitalize leading-tight 2xl:leading-snug z-10 lg:w-[80%] w-[90%] 2xl:w-[70%] mb-4 xl:mb-8">
            Reserve Your Advertising Space
          </h2>
          <p className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  font-light text-white capitalize leading-snug 2xl:leading-normal z-10 w-[90%] lg:w-[80%] 2xl:w-[70%]">
            Showcase your business and gain unmatched visibility across the
            city.
          </p>
          <ProfileForm />
        </div>
        <Image
          src={Contact}
          className="lg:h-full lg:w-1/2 md:h-1/2  object-cover z-10 w-full h-1/2 sm:h-3/5 md:h-2/3"
          alt="Tesla cybertruck driving down the street in pheoinx arizona with people staring at it"
        />
      </section>
      <Toaster />
    </main>
  );
}
