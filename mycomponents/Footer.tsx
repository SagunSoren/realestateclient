import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebook, FaLongArrowAltRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="py-20  text-white flex max-lg:flex-col max-lg:items-center max-w-7xl mx-auto justify-between">
        <div className="lg:w-100 max-lg:w-full max-lg:px-10">
          <div className="w-80">
            <div>
              <Image
                src={"/logo/logo1.png"}
                alt="logo"
                width={200}
                height={200}
              ></Image>
            </div>
            <p className="text-white/70">
              The Property Adviser is a leading real estate agency dedicated to
              helping individuals, families, and investors find their dream
              properties.
            </p>
            <div className="flex items-center gap-2">
              <FaLongArrowAltRight />
              <p className="text-orange-600">Find more</p>
            </div>
          </div>
        </div>
        {/* contact us */}
        <div className=" lg:w-100 max-lg:w-full max-lg:px-10 max-lg:mt-10">
          <h1>Contact Us</h1>
          <div className="text-white/70 text-sm">
            <p className=" mt-6">Head office</p>
            <div className="flex gap-2 mt-2 items-center">
              <div>
                <MdOutlineLocationOn className="text-white text-2xl" />
              </div>
              <p>
                Office No.1, Balaji Heights, Sector 31, Kamothe, Navi Mumbai,
                Maharashtra 410206
              </p>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <div>
                <MdLocalPhone className="text-white text-2xl" />{" "}
              </div>
              <p>+91 8146687151</p>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <div>
                <MdOutlineEmail className="text-white text-2xl" />{" "}
              </div>
              <p>msagunsoren@gmailcom</p>
            </div>
            <p className="mt-6">Branch Office</p>
            <div className="flex gap-2 mt-2 items-center">
              <div>
                <MdOutlineLocationOn className="text-white text-2xl" />
              </div>
              <p>
                Office No. 2003, Kamdhenu Commerz, Sector 14, Kharghar, Navi
                Mumbai, Maharashtra 410210
              </p>
            </div>
          </div>
        </div>
        {/* Follow Us */}
        <div className="lg:w-60 max-lg:mt-10">
          <p className="mb-4 max-lg:hidden">Follow Us</p>
          <div className="flex gap-1">
            <div className="h-12 flex items-center justify-center w-12 bg-blue-500 rounded-full text-2xl">
              <FaFacebook />
            </div>
            <div className="h-12 flex items-center justify-center  w-12 bg-gray-600 rounded-full text-2xl">
              <Link
                href={
                  "https://www.instagram.com/vaid.smyle?igsh=MXNvMmNkMzY5NTQ3Nw%3D%3D"
                }
              >
                <FaInstagram />
              </Link>
            </div>
            <div className="h-12 flex items-center justify-center  w-12 bg-red-500 rounded-full text-2xl">
              <FaYoutube />
            </div>
            <div className="h-12 flex items-center justify-center  w-12 bg-blue-400 rounded-full text-2xl">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-white/70 flex text-sm justify-between pb-4">
        <p>© 2025 The Property Adviser</p>
        <div className="flex gap-8">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/contactUs">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
