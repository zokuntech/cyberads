/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zokunads-bucket.s3.us-west-2.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
