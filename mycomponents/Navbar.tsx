import Image from "next/image";
import Link from "next/link";
import { FaCirclePlus } from "react-icons/fa6";
const Navbar = ({ dark }: { dark: boolean }) => {
  return (
    <div
      className={`flex absolute top-2 left-0 right-0  max-w-7xl mx-auto max-lg:px-4 items-center justify-between  z-10 uppercase ${dark ? "text-black" : "text-white"}`}
    >
      <div className="w-50">
        <Image
          src={"/logo/logo1.png"}
          alt="logo"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className="flex justify-between gap-10">
        <Link href="/">
          <p className="hover:underline hover:underline-offset-10 tracking-widest">
            home
          </p>
        </Link>
        <Link href="/contactUs">
          <p className="hover:underline hover:underline-offset-10 tracking-widest">
            contact
          </p>
        </Link>
      </div>
      <div className="max-lg:hidden">
        <button
          className={`flex items-center gap-2 uppercase border ${dark ? "border-black" : "border-white"} w-50 justify-center rounded-sm py-3`}
        >
          <FaCirclePlus /> add listing
        </button>
      </div>
    </div>
  );
};
export default Navbar;
