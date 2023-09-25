"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeroImage = ({ source }) => {
  return (
    <div className="w-full h-[98vh] relative flex">
      <Image
        src={source}
        fill
        priority
        quality={100}
        sizes="100vw"
        style={{ objectFit: "cover" }}
        alt="HeroImage"
      />

      <div className="bg-white w-[150px] h-[116px] pt-4 pl-4 pr-4 flex mx-auto relative z-10 place-self-end">
        <Image
          src="/assets/images/SmallHeroIcon.png"
          width={146}
          height={112}
          alt="Small Banner Icon"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  const [width, setWidth] = useState(undefined);
  const breakpoint = 600;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? (
    <div>
      <HeroImage
        source="/assets/images/MainHeroImageSmall.png"
        className="sm:hidden"
      />
    </div>
  ) : (
    <div>
      <h1>Grand Opening</h1>
      <HeroImage source="/assets/images/MainHeroImage.png" />
    </div>
  );
};

export default Hero;
