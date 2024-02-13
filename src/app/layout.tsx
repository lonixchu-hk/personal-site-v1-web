import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lonix Chu - Software Engineer & Full Stack Developer",
  description:
    "This is Lonix Chu personal website to display his skills and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
