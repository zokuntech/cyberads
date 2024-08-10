import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title:
    "Cybertruck Advertising in Phoenix - Boost Your Brand's Visibility with Mobile Ads",
  description:
    "Advertise on a high-visibility Cybertruck in Phoenix. Reach your target audience with eco-friendly, mobile billboard advertising. Trackable ad campaigns to maximize your brand's impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
