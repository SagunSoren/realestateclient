import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const Card = ({
  image,
  title,
  desc,
  button,
}: {
  image: string;
  title: string;
  desc: string;
  button: string;
}) => {
  return (
    <div className="h-145 w-full bg-white p-4 drop-shadow-2xl rounded-lg">
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="hero"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, 100vw"
        ></Image>
      </div>
      <div className="p-2">
        <h1 className="mt-6 font-semibold text-2xl">{title}</h1>
        <p className="mt-4 text-black/50">{desc}</p>
        <div className="inline-flex gap-2 px-4 py-2 items-center border mt-4 border-black rounded-sm">
          <FaLongArrowAltRight />
          <p>{button}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
