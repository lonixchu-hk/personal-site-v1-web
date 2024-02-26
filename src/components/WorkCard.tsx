import React from "react";

interface Props {
  classname: string;
}

interface Project {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  // url: string;
}

export const WorkCard = () => {
  return (
    <div className="col-span-full md:col-span-6 h-96 rounded-lg bg-[#333038a0] text-[#809090] p-5">
      CkcInputMethod-Android13
    </div>
  );
};
