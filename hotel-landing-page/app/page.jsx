import { Montserrat } from "next/font/google";
import {
  BookYourStay,
  Hero,
  NewEra,
  OpeningBanner,
  Welcome,
} from "@components";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const Home = () => {
  return (
    <div className={`${montserrat.variable} app`}>
      <Hero />
      <Welcome />
      <NewEra />
      <OpeningBanner />
      <BookYourStay />
    </div>
  );
};

export default Home;
