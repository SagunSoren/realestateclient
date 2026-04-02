import { IoIosSearch } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="h-200 text-white relative w-full ">
      <Image
        src={"/heroImage/hero.jpg"}
        fill
        alt="hero-image"
        className="object-cover -z-20"
        sizes="75vw"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/50 -z-10" aria-hidden="true" />
      <div
        className=" max-w-[1400] mx-auto
       h-200 flex flex-col max-lg:items-center justify-center z-10"
      >
        <div className="">
          <p className="text-5xl font-semibold max-lg:text-center max-lg:text-4xl mb-10 leading-16">
            Your Dream Home Awaits,
            <br className="max-lg:hidden" /> Start Exploring Today!
          </p>

          <div className="lg:w-1/2 bg-white h-16 rounded-md flex items-center max-lg:mx-4 px-1 pl-4 mb-10">
            <input
              type="text"
              className="text-black outline-none w-full text-xl "
              placeholder="Search Properties"
            />
            <a href="#explore" className="bg-[#FF3333] p-4 text-2xl rounded-md">
              <IoIosSearch />
            </a>
          </div>

          <div className="flex gap-4l max-lg:justify-center gap-4">
            <div className="flex items-center gap-2 text-sm uppercase font-semibold">
              <FaRegBuilding />
              <p>Projects</p>
            </div>
            <div className="flex items-center gap-2 text-sm uppercase font-semibold">
              <BsFillBuildingsFill />
              <p>New Launch</p>
            </div>
            <div className="flex items-center gap-2 text-sm uppercase font-semibold">
              <FaRegBuilding />
              <p>Resale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
