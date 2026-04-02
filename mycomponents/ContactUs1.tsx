import Image from "next/image";
import { BsFillHouseAddFill } from "react-icons/bs";

const ContactUs1 = () => {
  return (
    <div className="bg-[#F7F8F9] flex items-center justify-center max-lg:p-10">
      <div className=" max-w-[1500] lg:my-20 w-full flex max-lg:flex-col  max-lg:mb-10  bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="relative h-120 max-md:h-60 lg:w-1/2">
          <Image
            src="/hero.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="lg:w-1/2 lg:p-20 flex flex-col gap-4 max-lg:p-4 max-lg:pb-4 justify-center">
          <BsFillHouseAddFill className="size-12 max-lg:size-6" />
          <h1 className="text-2xl max-lg:text-lg font-semibold">
            Get Your Dream Property
          </h1>
          <p className="text-black/50 max-lg:text-sm">
            Want to buy about your property' hassle? Our experts provide best
            advice to help you make informed decisions.
          </p>
          <div className="bg-orange-600 max-lg:mx-auto  text-white px-4 py-2 w-fit rounded-sm cursor-pointer">
            <p>Get in Touch with Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs1;
