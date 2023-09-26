import React from "react";

const WelcomeText = ({ title, subtitle }) => {
  return (
    <div className="welcome-title">
      <h1 className="text-[64px] leading-[68px]">{title}</h1>
      <h3 className="text-[14px] leading-[28px] ">{subtitle}</h3>
    </div>
  );
};

export default WelcomeText;
