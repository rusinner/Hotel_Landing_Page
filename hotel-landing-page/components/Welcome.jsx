import Image from "next/image";
const Welcome = () => {
  return (
    <div className="welcome-main">
      <div className="welcome-photo-wrapper">
        <Image
          src="/assets/images/WelcomeImage.png"
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Welcome Bar"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="welcome-text-wrapper">
        <div className="paragraph-wrapper">
          <h1 className="text-4xl leading-10 ">Welcome</h1>
          <p>
            The new and exciting version of MINOIS luxury boutique hotel on
            Paros island, embodies Mediterranean aura in its entire spectrum and
            all its glory. It represents a marvelous amalgam of alluring
            temperaments, hues, patterns, materials, shapes and expressions, all
            of which emit warmth, delight and vivacity under the prism of
            colorful, luminous auras that are linked to both people and places.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
