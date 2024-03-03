import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <section id="footer" className="text-center mt-20 mb-5 text-sm">
      Copyrighted by Lonix Chu @ 2024
      {new Date().getFullYear() == 2024 ? `` : ` - ${new Date().getFullYear()}`}
      . All Rights Reserved.
      <br />
      Creative Ideas Inspired By{" "}
      <Link href={"https://github.com/tamal-sen"} target="_blank">
        Tamal Sen
      </Link>
    </section>
  );
};
