"use client";
import BookButton from "./BookButton";
import WelcomeText from "./WelcomeText";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-main">
      <BookButton onClick={() => console.log("Click")} text="BOOK YOUR STAY" />

      <div className="hero-section text-[#ffffff]">
        <WelcomeText
          title="Grand opening"
          subtitle="We are in great anticipation of the moment when our doors open to welcome you."
        />
        <div className="hero-logo">
          <Image
            src="/assets/images/SmallHeroIcon.png"
            width={146}
            height={112}
            alt="Small Banner Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
