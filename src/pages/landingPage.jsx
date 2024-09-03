import { HeroBanner } from "../components/heroSection/heroBanner";
import { FooterAnime } from "../components/main/footerAnime";
import { ForYou } from "../components/main/forYouAnime";
import { SchedulesAnime } from "../components/main/schedulesAnime";
import { TrendingAnime } from "../components/main/trendingAnime";
import { Navbar } from "../components/navbar/navbar";

export const LandingPage = () => {
  return (
    <>
      <section className="">
        <Navbar />
        <HeroBanner />
        <TrendingAnime />
        <SchedulesAnime />
        <ForYou />
        <FooterAnime />
      </section>
    </>
  );
};
