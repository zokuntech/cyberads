export default function Video() {
  return (
    <section className="w-full h-[250px] sm:h-[450px] md:h-[450px] lg:h-[650px] 2xl:h-[1000px] flex bg-black items-center justify-center mb-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", margin: 0 }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
