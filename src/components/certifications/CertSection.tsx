import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "./SkillCard";
import { CertificateBlock } from "./CertificateBlock";
import { CertCard } from "./CertCard";
import { ICert } from "@/app/profileEntity";
import ScrollableDiv from "../ScrollableDiv";

interface Props {
  data: ICert[];
}
export const CertSection = (props: Props) => {
  const certs = props.data ?? [];
  // turn cert array into object with grouped key as nature of cert
  const certGroups = certs.reduce((acc, cert) => {
    if (!acc[cert.nature]) {
      acc[cert.nature] = [];
    }
    acc[cert.nature].push(cert);
    return acc;
  }, {} as Record<string, ICert[]>);
  return (
    certs.length > 0 && (
      <section
        id="certifications"
        className="scroll-mt-8 w-full md:mx-5 xl:w-[1180px] mt-5 relative overflow-hidden"
      >
        <SectionTitle className="text-xl md:text-2xl text-left">
          Qualified In:
        </SectionTitle>
        {Object.keys(certGroups).map(function (certNature) {
          return (
            <div className="space-y-4 w-full overflow-x-auto pb-5 mb-5">
              <div className="text-xl">
                $ <span className="text-[#C19C00]">cd</span> ./{certNature}
              </div>
              <ScrollableDiv>
                {certGroups[certNature].map((cert, index) => (
                  <CertCard key={index} cert={cert} />
                ))}
              </ScrollableDiv>
            </div>
          );
        })}
      </section>
    )
  );
};
