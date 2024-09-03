import bstationLogo from "../../assets/bstation-logo.png";
import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbDiamond } from "react-icons/tb";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className={`fixed top-0 z-50 flex w-full items-center font-semibold text-white transition-colors duration-300 ${navbarBg ? "bg-white text-black" : "bg-transparent text-white"}`}
      >
        <div className="flex h-[64px] w-[272px] items-center px-6">
          <SlMenu
            className={` ${navbarBg ? "text-black" : "text-black md:text-white"} mr-4 mt-[0.5vh] md:mr-8 md:text-[1.4vw]`}
          />
          <img
            src={bstationLogo}
            alt=""
            className="h-[4vh] w-[40vw] xl:w-[10vw]"
          />
        </div>
        {/* search bar */}
        <div className="mx-6 hidden h-[40px] w-[480px] items-center xl:flex">
          <div className="flex h-full items-center rounded-l-md bg-[#F2F2F2] px-2.5">
            <CiSearch className="text-md text-black" />
          </div>
          <input
            type="text"
            className="h-full w-full rounded-r-md bg-[#F2F2F2] text-sm font-normal text-black outline-none"
            placeholder="Search"
          />
        </div>
        <div
          className={` ${navbarBg ? "text-black" : "text-white"} ml-3 hidden w-[420px] justify-between text-2xl font-extrabold xl:flex`}
        >
          <div className="flex items-center">
            <MdOutlineFileUpload />
          </div>
          <div className="flex items-center">
            <MdAccessTime />
          </div>
          <div className="flex items-center">
            <FaRegBookmark className="text-xl" />
          </div>
          <div
            className={`flex items-center space-x-1 rounded-sm ${navbarBg ? "bg-[#F2F2F2]" : "bg-white"} px-3 py-1.5 text-black`}
          >
            <MdOutlineFileDownload className="text-lg" />
            <p className="text-xs font-normal">Application</p>
          </div>
          <div className="flex items-center space-x-1 rounded-sm bg-[#FF4A80] px-3 py-1.5">
            <TbDiamond className="text-sm" />
            <p className="text-xs font-normal">Premium</p>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-sm font-normal text-black"></div>
        </div>
      </section>
    </>
  );
};
