import Image from "next/image";

const NewEra = () => {
  return (
    <div className="new-era-main">
      <div className="new-era-text-wrapper">
        <h1 className="text-4xl leading-10 ">MINOIS enters a new era…</h1>
        <div className="new-era-paragraph-wrapper">
          <p>
            Drawing inspiration from all the countries of the Mediterranean
            basin, MINOIS tells a riveting story of harmonious contrasts.The
            story begins with the iconic white, cubist houses that are a
            tradition in Cycladic architecture. Typically clustered together,
            they represent a blank Cycladic canvas of endless possibilities,
            waiting to be drawn upon. Their emblematic whiteness, that radiates
            a light so pure, is warmed by lively colors and natural textures, as
            reflections of the Spanish, French and Italian rivieras with touches
            of Moroccan decor, all of which cumulatively personify the aura of
            the Mediterranean, as expressions of a singular, more inclusive
            identity.
          </p>
        </div>
      </div>
      <div className="new-era-image-wrapper">
        <div className="flex justify-center flex-col pt-36">
          <Image
            src="/assets/images/NewEraImage1.png"
            width={342}
            height={512}
            quality={100}
            alt="Pool"
          />
        </div>
        <div className="flex flex-col items-start pt-36 items-arround">
          <Image
            className="ml-[-8px] mt-4"
            src="/assets/images/NewEraImage2.png"
            width={464}
            height={348}
            quality={100}
            alt="Hotel Lobby"
          />
          <Image
            className="mt-[-4]"
            src="/assets/images/NewEraImage3.png"
            width={586}
            height={392}
            quality={100}
            alt="Hottel lobby"
          />
          <div className="rotated-square"></div>
        </div>
      </div>
    </div>
  );
};

export default NewEra;
