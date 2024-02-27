import React from "react";
import { CertCard } from "./CertCard";
import { certifications } from "./data";

export const CertificateBlock = () => {
  return (
    <div className="space-y-4 w-full overflow-x-auto pb-10">
      <div className="w-fit flex items-center">
        {certifications.map((cert, index) => (
          <CertCard key={index} cert={cert} />
        ))}
      </div>
    </div>
  );
};
