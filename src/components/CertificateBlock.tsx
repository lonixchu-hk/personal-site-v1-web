import React from "react";

import { CertCard } from "./CertCard";

const certifications = [
  {
    type: "Professional Certificate",
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    issuerImage: "/aws_logo.jpeg",
    issueDate: "Nov 2022",
    certImage: "/AWS_ASS_BADGE.png",
    certLink:
      "https://www.credly.com/badges/bc3f3e09-cb4c-4c85-a0f4-164ed251e32b",
    color: "#f79400",
  },
  {
    type: "Professional Certificate",
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services (AWS)",
    issuerImage: "/aws_logo.jpeg",
    issueDate: "Nov 2022",
    certImage: "/AWS_DVA_BADGE.png",
    certLink:
      "https://www.credly.com/badges/8ced859a-65b5-491d-b064-adfce1da914b",
    color: "#f79400",
  },
  {
    type: "Professional Certificate",
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    issuerImage: "/ms_logo.jpeg",
    issueDate: "Nov 2023",
    certImage: "/MS_ASS_BADGE.svg",
    certLink:
      "https://learn.microsoft.com/api/credentials/share/en-us/LonixChu-1373/F02EF6A571E68827?sharingId",
    color: "#8462ed",
  },
  {
    type: "Professional Certificate",
    title: "ACA Cloud Computing Certification",
    issuer: "Alibaba Cloud",
    issuerImage: "/ali_logo.jpeg",
    issueDate: "Dec 2023",
    certImage: "/ACA_COM_BADGE.png",
    certLink: "",
    color: "#ff6a00",
  },
  {
    type: "Professional Certificate",
    title: "ACA Developer Certification",
    issuer: "Alibaba Cloud",
    issuerImage: "/ali_logo.jpeg",
    issueDate: "Dec 2023",
    certImage: "/ACA_DEV_BADGE.png",
    certLink: "",
    color: "#ff6a00",
  },
  {
    type: "Course Certificate",
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    issuerImage: "/coursera_logo.jpeg",
    issueDate: "Sep 2023",
    certImage: "/COURSERA_BADGE.png",
    certLink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/TJXC2VWPSUF9",
    color: "#e0eaf6",
  },
];

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
