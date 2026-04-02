import Card from "@/mycomponents/cards/Card";

const Heronext = () => {
  return (
    <div className="bg-[#F7F8F9]">
      <div className="py-20 flex max-lg:flex-col max-lg:px-4 items-center gap-10 justify-between max-w-[1500] mx-auto ">
        <Card
          image={"/heroNext/image1.jpg"}
          button="Explore Listings"
          title="Find Your Dream Home"
          desc="Explore exclusive listings tailored to your lifestyle and budget. Let our experts guide you to your perfect home."
        />
        <Card
          image={"/heroNext/image2.jpg"}
          button="Talk to Us"
          title="Sell Your Property Fast"
          desc="Our agents use market insights and strategic marketing to get your home sold quickly and at the best price."
        />
        <Card
          image={"/heroNext/image3.jpg"}
          button="See New Projects"
          title="Invest in Real Estate"
          desc="Discover prime investment opportunities with high returns. We connect you with properties that match your goals."
        />
      </div>
    </div>
  );
};
export default Heronext;
