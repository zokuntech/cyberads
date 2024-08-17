import Image from "next/image";
import Intro from "@/public/intro.webp";
import Visibility from "@/public/visibility.webp";


export default function IntroComponent() {
  return (
    <>
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
    </>
  );
}
