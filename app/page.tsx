import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

// Sections for home page
const Hero = dynamic(() => import("@/components/Home/Hero"));
const IntroComponent = dynamic(() => import("@/components/Home/Intro"), {
  ssr: false,
});
const Stats = dynamic(() => import("@/components/Home/Stats"));
const Video = dynamic(() => import("@/components/Home/Video"), { ssr: false });
const Steps = dynamic(() => import("@/components/Home/Steps"), { ssr: false });
const Benefits = dynamic(() => import("@/components/Home/Benefits"), {
  ssr: false,
});
const Form = dynamic(() => import("@/components/Home/Form"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Cybertruck Advertising in Phoenix - Boost Your Brand's Visibility with
          Mobile Ads
        </title>
        <meta
          name="description"
          content="Advertise on a high-visibility Cybertruck in Phoenix. Reach your target audience with eco-friendly, mobile billboard advertising. Trackable ad campaigns to maximize your brand's impact."
        />
        <meta
          name="keywords"
          content="Cybertruck advertising Phoenix, mobile billboard advertising, Tesla truck ads, high-visibility ads Phoenix, eco-friendly advertising, Phoenix business marketing, outdoor advertising Phoenix, electric vehicle ads, unique advertising space, mobile marketing Phoenix"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.zokunads.com" />
        <meta
          property="og:title"
          content="Cybertruck Advertising in Phoenix - Boost Your Brand's Visibility with Mobile Ads"
        />
        <meta
          property="og:description"
          content="Boost your brand's visibility with exclusive advertising on a Tesla Cybertruck in Phoenix. Eco-friendly, high-impact, and trackable advertising solutions."
        />
        <meta
          property="og:image"
          content="https://www.zokunads.com/og-image.jpg"
        />
        <meta property="og:url" content="https://www.zokunads.com" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="flex  flex-col items-center justify-between bg-stone-900">
        <Hero />
        <IntroComponent />
        <Stats />
        <Video />
        <Benefits />
        <Steps />
        <Form />
        <Toaster />
        {/* <GoogleTagManager gtmId="AW-808416131" /> */}
      </main>
    </>
  );
}
