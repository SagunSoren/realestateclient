"use client";
import Navbar from "@/mycomponents/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MdLocalPhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";

import { items } from "@/db/FAQ";

const page = () => {
  return (
    <div>
      <div className="pb-20">
        <Navbar dark={true} />
      </div>
      <div className="py-10 max-w-7xl flex max-lg:flex-col max-lg:px-4 mt-10 mb-10 lg:mx-auto">
        <p className="lg:w-1/2 text-5xl max-lg:text-2xl font-semibold">
          Get in Touch with Us
        </p>
        <p className="lg:w-1/2 text-lg">
          Reach out to our team of experts to get personalized assistance and
          guidance on your real estate journey. Let's connect and make your
          experience smooth and successful.
        </p>
      </div>

      {/* map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.023770806!2d72.71354303141594!3d19.08226120793199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1775129698908!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>

      <div className="flex max-w-7xl max-lg:flex-col gap-10 mx-auto mt-20">
        {/* contact us */}
        <div className=" lg:w-120 max-lg:px-4 w-full">
          <p className="text-xl font-semibold pl-6">Head office</p>
          <div className="flex gap-2 mt-2 items-center">
            <div>
              <MdOutlineLocationOn className="text-black text-xl" />
            </div>
            <p>
              Office No.1, Balaji Heights, Sector 31, Kamothe, Navi Mumbai,
              Maharashtra 410206
            </p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <div>
              <MdLocalPhone className="text-black text-xl" />{" "}
            </div>
            <p>9374932748</p>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <div>
              <MdOutlineEmail className="text-black text-xl" />{" "}
            </div>
            <p>msagunsoren@gmailcom</p>
          </div>
          <p className="mt-10 font-semibold text-xl pl-6">Branch Office</p>
          <div className="flex gap-2 mt-2 items-center">
            <div>
              <MdOutlineLocationOn className="text-black text-xl" />
            </div>
            <p>
              Office No. 2003, Kamdhenu Commerz, Sector 14, Kharghar, Navi
              Mumbai, Maharashtra 410210
            </p>
          </div>
        </div>
        {/* form */}
        <div className="w-full max-lg:px-4">
          <div className="flex max-lg:flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-2 border-gray-300 p-2 mr-2"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border-2 border-gray-300 p-2"
            />
          </div>
          <button className="bg-black text-white w-full py-2 mt-2">
            Submit
          </button>
        </div>
      </div>

      {/* FAQ  */}
      <div className="h-1 bg-black/10 max-w-7xl mx-auto mt-10"></div>
      <div className="flex max-lg:flex-col max-w-7xl mx-auto mt-20 mb-20">
        <p className="lg:w-1/3 max-lg:text-center text-2xl">FAQ</p>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="max-w-full mx-auto  px-6"
        >
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-xl">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default page;
