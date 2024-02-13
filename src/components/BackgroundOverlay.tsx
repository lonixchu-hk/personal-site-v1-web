import React from "react";

interface Props {
  underMaintenance: boolean;
}

export const BackgroundOverlay = (props: Props) => {
  const heightClass = props.underMaintenance ? "h-[100%]" : "h-[102%]";
  return (
    <div
      className={`absolute w-full ${heightClass} top-0 left-0 bg-transparent bg-gradient-to-b from-[#00000012] from-60% to-[#1a191d] to-100% z-0`}
    />
  );
};
