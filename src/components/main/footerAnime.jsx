import mixAnime from "../../assets/mix-anime.png";

export const FooterAnime = () => {
  return (
    <>
      <section className="relative mt-20 h-[70vh] w-full">
        <div className="absolute z-10 h-[70vh] w-full bg-gradient-to-t from-white via-transparent via-[80%] to-white"></div>
        <img
          src={mixAnime}
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 space-y-8">
          <h4 className="text-center text-[1.5rem] font-bold">
            Click to check more anime
          </h4>
          <div className="cursor-pointer rounded-md bg-black px-[10vw] py-1 text-center text-lg font-semibold text-white">
            View All
          </div>
        </div>
      </section>
    </>
  );
};
