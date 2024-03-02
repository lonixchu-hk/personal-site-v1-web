import { BackgroundOverlay } from "@/components/home/BackgroundOverlay";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global h-screen flex flex-col items-center justify-center relative px-10 bg-[url('/main-bg.jpg')] bg-cover bg-center overflow-hidden">
      <div className="text-white text-center mb-4 text-xl md:text-2xl leading-6 tracking-wider z-20">
        <h2>Oops! Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
      <Link href="/" className="text-white underline z-20">
        Go Back Home
      </Link>
      <BackgroundOverlay underMaintenance={false} />
    </div>
  );
}
