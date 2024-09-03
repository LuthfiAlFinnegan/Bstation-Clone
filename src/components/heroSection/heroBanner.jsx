import React, { useState, useEffect } from "react";
import hashira from "../../assets/demon-slayer-hashira.webp";
import hashiraLogo from "../../assets/hashira-logo.png";
import windBreaker from "../../assets/wind-breaker.png";
import windBreakerLogo from "../../assets/wind-breaker-logo.png";
import tensura from "../../assets/Tensura.jpg";
import tensuraLogo from "../../assets/tensura-logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const HeroBanner = () => {
  const slides = [
    {
      image: hashira,
      color: "from-[#240404]",
      secondColor: "via-[rgba(36,4,4,0.75)]",
      logo: hashiraLogo,
    },
    {
      image: windBreaker,
      color: "from-[#02240F]",
      secondColor: "via-[rgba(2,36,15,0.75)]",
      logo: windBreakerLogo,
    },
    {
      image: tensura,
      color: "from-[#382F37]",
      secondColor: "via-[rgba(56,47,55,0.77)]",
      logo: tensuraLogo,
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentSlideIndex];

  const handlePrevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section className="relative hidden w-full overflow-x-hidden xl:flex">
      <div className="absolute z-20 ml-[5vw] mt-[20vh] flex w-[415.969px] flex-col space-y-6 overflow-hidden">
        <figure className="h-[159.99px] w-[415.969px]">
          <img src={currentSlide.logo} alt="" className="h-full object-cover" />
        </figure>
        <div className="flex items-center space-x-2 text-sm text-white">
          <p className="rounded-sm bg-white bg-opacity-10 px-2 py-0.5">
            Comic adaptation
          </p>
          <p className="rounded-sm bg-white bg-opacity-10 px-2 py-0.5">
            Hot-blooded
          </p>
          <p className="rounded-sm bg-white bg-opacity-10 px-2 py-0.5">
            Fantasy
          </p>
          <p className="h-fit border-l border-white pl-2">Full</p>
        </div>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga.
        </p>
        <div className="flex space-x-4">
          <button className="h-[58px] w-[225px] rounded-sm bg-white text-[1.5rem] font-bold text-black">
            Play Now
          </button>
          <button className="h-[58px] w-[194px] rounded-sm bg-white bg-opacity-40 text-[1.5rem] font-bold text-white">
            My favorites
          </button>
        </div>
      </div>
      <div className="absolute z-20 mt-[75vh] h-[45vh] w-[100vw] bg-gradient-to-t from-white from-[0%] via-[rgba(255,255,255,0.1)] via-[85%] to-transparent to-[100%]"></div>
      <div
        className={`absolute h-[120vh] w-[65vw] bg-gradient-to-r ${currentSlide.color} ${currentSlide.secondColor} from-[55%]`}
      ></div>
      <figure className="h-[120vh] w-[100vw] pl-[30vw]">
        <img
          src={currentSlide.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="absolute top-[45vh]">
        <div className="flex w-[100vw] justify-between pl-2 pr-6 text-[2.5vw] text-white">
          <IoIosArrowBack
            onClick={handlePrevSlide}
            className="cursor-pointer"
          />
          <IoIosArrowForward
            onClick={handleNextSlide}
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};
