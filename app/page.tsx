import ContactUs1 from "@/mycomponents/ContactUs1";
import Explore from "@/mycomponents/Explore";
import Hero from "@/mycomponents/Hero";
import Heronext from "@/mycomponents/Heronext";
import Navbar from "@/mycomponents/Navbar";

const page = () => {
  return (
    <div>
      <Navbar dark={false} />
      <Hero />
      <Heronext />
      <Explore />
      <ContactUs1 />
    </div>
  );
};
export default page;
