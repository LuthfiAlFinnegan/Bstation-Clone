import { useEffect, useState } from "react";
import { fetchAnimeDetails } from "../../utils/jikanApi";
import { FaPlay } from "react-icons/fa";

export const TrendingAnime = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchTrendingAnime = async () => {
      try {
        const animeDetails = await fetchAnimeDetails();
        setAnimeList(animeDetails.slice(0, 10));
      } catch (err) {
        return err;
      }
    };

    fetchTrendingAnime();
  }, []);

  return (
    <section className="absolute top-40 z-20 flex w-full flex-col lg:top-[100vh]">
      <div className="z-10 bg-transparent px-[5vw] text-xl font-bold md:text-2xl lg:text-white">
        Trending Now
      </div>
      <div className="no-scrollbar absolute z-50 mt-5 grid w-[100%] grid-cols-2 overflow-x-auto px-[3.7vw] pb-4 pt-8 md:grid-flow-col">
        {animeList.map((anime, index) => (
          <div key={index}>
            <div className="group relative flex h-[340.844px] w-[233.458px] px-[1.3vw] text-sm hover:px-0 md:group-hover:flex-col md:group-hover:justify-between">
              <div className="relative flex cursor-pointer flex-col justify-between md:group-hover:absolute md:group-hover:-top-8 md:group-hover:h-[340.844px]">
                <figure className="w-[43vw] md:h-[42.5vh] md:w-[200.177px] md:group-hover:absolute md:group-hover:h-[268.875px] md:group-hover:w-[233.458px]">
                  <img
                    src={anime.images.jpg.large_image_url}
                    alt=""
                    className="h-full w-full rounded-md object-cover md:group-hover:w-[233.458px]"
                  />
                </figure>
                <p className="bottom-0 h-[5.7vh] w-full text-left font-bold md:group-hover:hidden">
                  {anime.title}
                </p>
                <div className="hidden h-full w-[233.458px] flex-col justify-end bg-gradient-to-t from-[#06B6F2] from-[23%] to-transparent to-[70%] px-[1.3vw] text-left font-bold text-white md:group-hover:z-40 md:group-hover:flex">
                  <p className="h-[5.7vh]">{anime.title}</p>
                  <FaPlay className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] text-white" />
                </div>
              </div>
              <div className="hidden h-[8vh] w-full items-center rounded-b-md bg-[#06B6F2] px-[1.3vw] md:group-hover:absolute md:group-hover:-bottom-[2.5vh] md:group-hover:flex">
                <p className="rounded-md bg-[rgba(255,255,255,0.2)] px-2 py-1 text-xs text-white">
                  Comic Adaptation
                </p>
                <p></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
