import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lonix Chu - Software Engineer & Full Stack Developer",
  description:
    "Lonix Chu, a Full Stack Developer based in Hong Kong. Explore my digital realm—a multifaceted online resume and portfolio. Delve into my expertise in full-stack development, cloud computing, and AI. Meet Lonix Chu here!",
  keywords: [
    "cloud",
    "full-stack",
    "developer",
    "software",
    "certification",
    "AI",
    "Hong Kong",
    "resume",
    "portfolio",
    "Lonix Chu",
    "development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.gaTrackingId ?? ""} />
    </html>
  );
}
