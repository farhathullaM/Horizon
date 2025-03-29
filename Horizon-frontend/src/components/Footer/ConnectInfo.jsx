import React from "react";

export const ConnectInfo = ({ img, heading, info }) => {
  return (
    <div className="flex gap-3 items-center max-sm:gap-2 max-sm:flex-col max-sm:items-start">
      <img
        src={img}
        alt="location icon"
        className="w-10 max-sm:w-7 select-none hover:scale-110 transform duration-200"
      />
      <div className="flex flex-col">
        <p className="font-semibold max-sm:text-sm">{heading}</p>
        <p className="font-light text-sm">{info}</p>
      </div>
    </div>
  );
};
