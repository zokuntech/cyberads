"use client";
import { ProfileForm } from "@/components/form";
import Image from "next/image";
import Contact from "@/public/contact.webp";

export default function Form() {
  return (
    <section
      id="contact"
      className="w-full h-[900px] lg:h-screen flex bg-black items-center justify-center mb-10 flex-col-reverse lg:flex-row"
    >
      <div className="lg:w-1/2  md:h-1/2 w-full h-1/2 lg:h-full flex items-center justify-center flex-col cursor-default z-10">
        <h2 className="lg:text-4xl xl:text-5xl text-3xl 2xl:text-6xl font-bold text-white capitalize leading-tight 2xl:leading-snug z-10 lg:w-[80%] w-[90%] 2xl:w-[70%] mb-4 xl:mb-8">
          Reserve Your Advertising Space
        </h2>
        <p className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  font-light text-white capitalize leading-snug 2xl:leading-normal z-10 w-[90%] lg:w-[80%] 2xl:w-[70%]">
          Showcase your business and gain unmatched visibility across the city.
        </p>
        <ProfileForm />
      </div>
      <Image
        src={Contact}
        className="lg:h-full lg:w-1/2 md:h-1/2  object-cover z-10 w-full h-1/2 sm:h-1/2"
        alt="Tesla cybertruck driving down the street in pheoinx arizona with people staring at it"
      />
    </section>
  );
}
