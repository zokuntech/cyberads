import { BsEmojiHeartEyes } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

export default function Steps() {
  return (
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
  );
}
