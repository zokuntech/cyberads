import Chart from "../utils/Chart";
import { FaPerson } from "react-icons/fa6";

export default function Stats() {
  const states = {
    1: "https://www.3m.com/3M/en_US/graphics-signage-us/applications/vehicles-and-transportation/fleet-graphics/power-of-fleet-graphics/",
    2: "https://cdn2.hubspot.net/hubfs/501970/A%20Beginners%20Guide%20to%20Vehicle%20Wraps%20and%20Graphics.pdf",
    3: "https://www.blipbillboards.com/blog/the-10-most-persuasive-ooh-and-billboard-advertising-statistics-you-need-to-know/",
    4: "https://www.meadowoutdoor.com/assets/deeper_reading/Nielsen-OAAA-Digital-OOH-Advertising-Report-2020.pdf",
    5: "https://tkographix.com/fleet-graphics-statistics/",
  };
  return (
    <section className="w-full h-[2400px] bg-black md:h-[1400px] lg:h-[1500px] xl:h-[1200px] 2xl:h-[1400px] flex items-center justify-center mb-10 flex-col py-10 z-10">
      <div className=" w-full lg:w-full  h-1/12 md:1/12 flex justify-center items-center flex-col mb-6">
        <h2 className=" lg:text-center lg:text-4xl xl:text-5xl text-3xl 2xl:text-6xl font-bold text-white capitalize leading-tight 2xl:leading-snug z-10 lg:w-[80%] w-[90%] 2xl:w-[70%] mb-4 2xl:mb-8">
          Better approach to OOH advertising
        </h2>
        <p className="capitalize text-lg lg:text-center lg:w-[50%] lg:text-xl xl:text-2xl 2xl:text-3xl  font-light text-white capitalize leading-snug 2xl:leading-normal z-10 w-[90%] lg:w-[80%] 2xl:w-[70%]">
          As more people spend time outside their homes, especially in transit,
          OOH advertising has become an essential medium for brands to reach
          their target audiences effectively.
        </p>
      </div>
      <div className="xl:h-3/5 w-[90%] h-11/12 xl:w-[80%] grid grid-rows-6 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-none 2xl:gap-14 gap-6  lg:gap-10 mt-2 md:mt-2  pb-4 lg:pb-10">
        <div className="h-[300px] md:h-[300px] lg:h-[350px] border-2 border-white flex flex-col justify-center items-center p-6 z-10">
          <span className="h-2/3 w-full">
            <Chart
              data={[
                { name: "75%", value: 75 },
                { name: "75%", value: 25 },
              ]}
            />
          </span>
          <p className="text-white text-center cursor-default h-1/3 ">
            75% DEVELOPED POSITIVE IMPRESSION WHEN COMPANY VEHICLE IS WRAPPED
            <a href={states[2]} target="_blank" className="ml-1 text-blue-500">
              (2)
            </a>
          </p>
        </div>
        <div className="h-[300px] md:h-[300px] lg:h-[350px] border-2 border-white flex flex-col justify-center items-center p-6 z-10">
          <span className="h-2/3 w-full">
            <Chart
              data={[
                { name: "96%", value: 96 },
                { name: "96%", value: 4 },
              ]}
            />
          </span>
          <p className="text-white text-center cursor-default h-1/3">
            96% OF THE VIEWERS OF MOBILE OUTDOOR ADVERTISEMENTS SAY THEY HAVE
            MORE IMPACT THAN A STATIC BILLBOARD.{" "}
            <a href={states[5]} target="_blank" className="ml-1 text-blue-500">
              (5)
            </a>
          </p>
        </div>
        <div className="h-[300px] md:h-[300px] lg:h-[350px]  border-2 border-white flex flex-col justify-center items-center p-6 z-10">
          <span className="h-2/3 w-full">
            <Chart
              data={[
                { name: "46%", value: 46 },
                { name: "46%", value: 54 },
              ]}
            />
          </span>
          <p className="text-white text-center cursor-default h-1/3">
            46% OF PEOPLE SEARCHED A BRAND OR PRODUCT ON GOOGLE AFTER SEEING AN
            OOH AD{" "}
            <a href={states[3]} target="_blank" className="ml-1 text-blue-500">
              (3)
            </a>
          </p>
        </div>
        <div className="h-[300px] md:h-[300px] lg:h-[350px]  border-2 border-white flex flex-col justify-center items-center p-6 z-10">
          <span className="h-2/3 w-full flex items-center justify-center">
            <FaPerson className="text-green-500 text-7xl" />
            <FaPerson className="text-green-500 text-7xl" />
            <FaPerson className="text-white text-7xl" />
          </span>
          <p className="text-white text-center cursor-default h-1/3">
            67% OF VIEWERS TOOK ACTION ON MOBILE DEVICE AFTER SEEING AD{" "}
            <a href={states[3]} target="_blank" className="ml-1 text-blue-500">
              (3)
            </a>
            <a href={states[4]} target="_blank" className="ml-1 text-blue-500">
              (4)
            </a>
          </p>
        </div>
        <div className="h-[300px] md:h-[300px] lg:h-[350px]  border-2 border-white flex flex-col justify-center items-center p-6 z-10">
          <span className="h-2/3 w-full flex items-center justify-center ">
            <span className="border-4 border-white py-8 px-10 text-white cursor-default text-3xl font-bold">
              30k - 70k
            </span>
          </span>
          <p className="text-white text-center cursor-default h-1/3">
            CAN GENERATE BETWEEN 30,000 TO 70,000 IMPRESSIONS DAILY.{" "}
            <a href={states[1]} target="_blank" className="ml-1 text-blue-500">
              (1)
            </a>
            <a href={states[5]} target="_blank" className="ml-1 text-blue-500">
              (5)
            </a>
          </p>
        </div>
        <div className="h-[300px] md:h-[300px] lg:h-[350px] border-2 border-white flex flex-col justify-center items-center p-6 z-10">
          <span className="h-2/3 w-full flex items-center justify-center ">
            <span className="border-4 border-white py-6 px-12 text-white cursor-default text-5xl font-bold">
              15x
            </span>
          </span>
          <p className="text-white text-center cursor-default h-1/3">
            WRAPPED VEHICLE ADS BOOSTS NAME RECOGNITION 15X MORE THAN OTHER
            ADVERTISING.{" "}
            <a href={states[2]} target="_blank" className="ml-1 text-blue-500">
              (2)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
