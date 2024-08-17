import Image from "next/image";
import GPS from "@/public/gps.webp";
import Eco from "@/public/eco.webp";


export default function Benefits() {
  return (
    <>
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
          // height={100}
          // width={100}
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
    </>
  );
}
