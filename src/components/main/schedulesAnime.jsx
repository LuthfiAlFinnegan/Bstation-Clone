import { GiClapperboard } from "react-icons/gi";
import { useEffect, useState } from "react";
import { fetchAnimeSchedules } from "../../utils/jikanApi";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export const SchedulesAnime = () => {
  const [animeSchedules, setAnimeSchedules] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const animeDetails = await fetchAnimeSchedules();
        setAnimeSchedules(animeDetails);
      } catch (err) {
        console.error("Error fetching anime schedules:", err);
      }
    };
    fetchAnime();
  }, []);

  const getDayAndDate = (date) => {
    const options = { weekday: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options).toUpperCase();
  };

  const dates = [];
  for (let i = -3; i <= 3; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(getDayAndDate(date));
  }

  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <>
      <section className="mb-4 mt-[250vh] flex justify-between px-[5vw] md:mt-[50vh]">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          <h4 className="mr-8 w-fit text-xl font-semibold md:text-2xl">
            Release Calendar
          </h4>
          <div className="hidden w-fit items-center space-x-2 rounded-md bg-black px-4 py-1 text-white md:flex">
            <GiClapperboard className="text-[2.3rem]" />
            <p className="text-[14px] font-bold">
              Latest <br /> Updates
            </p>
          </div>
          <div className="flex space-x-8 text-xs md:text-sm">
            {dates.map((date, index) => (
              <div key={index} className="text-center">
                {date.split(" ")[1]} <br /> {date.split(" ")[0]}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden items-center space-x-1 lg:flex">
          <p>View More</p>
          <IoIosArrowForward className="text-lg" />
        </div>
      </section>
      <div className="no-scrollbar grid grid-flow-col overflow-x-auto bg-[#E6F8FE] px-[3.7vw] pb-14 pt-8">
        {animeSchedules.map((anime, index) => (
          <div key={index}>
            <div className="mb-10 text-center">{currentDay}</div>
            <div className="group relative flex h-[340.844px] w-[233.458px] px-[1.3vw] text-sm hover:px-0 group-hover:flex-col group-hover:justify-between">
              <div className="relative flex cursor-pointer flex-col justify-between group-hover:absolute group-hover:-top-8 group-hover:h-[340.844px]">
                <figure className="h-[42.5vh] w-[200.177px] group-hover:absolute group-hover:h-[268.875px] group-hover:w-[233.458px]">
                  <img
                    src={anime.images.jpg.large_image_url}
                    alt=""
                    className="h-full w-full rounded-md object-cover group-hover:w-[233.458px]"
                  />
                </figure>
                <p className="bottom-0 h-[5.7vh] w-full text-left font-bold group-hover:hidden">
                  {anime.title}
                </p>
                <p>E {anime.episodes}</p>
                <div className="hidden h-full w-[233.458px] flex-col justify-end bg-gradient-to-t from-[#06B6F2] from-[23%] to-transparent to-[70%] px-[1.3vw] text-left font-bold text-white group-hover:z-40 group-hover:flex">
                  <p className="h-[5.7vh]">{anime.title}</p>
                  <FaPlay className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] text-white" />
                </div>
              </div>
              <div className="hidden h-[10vh] w-full justify-between rounded-b-md bg-[#06B6F2] px-[1.3vw] py-2 group-hover:absolute group-hover:-bottom-[2.5vh] group-hover:flex group-hover:flex-col">
                <p className="z-50 w-fit rounded-md bg-[rgba(255,255,255,0.2)] px-2 py-1 text-xs text-white">
                  Comic Adaptation
                </p>
                <p className="text-white">E {anime.episodes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
