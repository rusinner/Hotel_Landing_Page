import { Montserrat } from "next/font/google";
import { Hero, NewEra, OpeningBanner, Welcome } from "@components";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const Home = () => {
  return (
    <div className={`${montserrat.variable}`}>
      <Hero />
      <Welcome />
      <NewEra />
      <OpeningBanner />
      <Welcome />
    </div>
  );
};

export default Home;
