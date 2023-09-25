import { Hero, NewEra, OpeningBanner, Welcome } from "@components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <NewEra />
      <OpeningBanner />
      <Welcome />
    </div>
  );
};

export default Home;
