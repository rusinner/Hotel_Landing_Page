import Image from "next/image";

const NewEra = () => {
  return (
    <div className="new-era-main">
      <div className="new-era-text-wrapper">
        <h1 className="text-4xl leading-10 ">MINOIS enters a new era…</h1>
        <div className="new-wra-paragraph-wrapper">
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
        <div className="rotated-square"></div>
      </div>
    </div>
  );
};

export default NewEra;
