import Link from "next/link";
import Image from "next/image";

const OfferCard = ({ name, offer, img, adress, discount }) => {
  return (
    <>
      <Link
        href="/"
        className="relative  bordertransp text-[0.75rem]   p-3 flex  flex-col items-center justify-start gap-2  min-w-[12rem]   "
      >
        <div className="  w-full    ">
          <Image
            layout="responsive"
            className=" aspect-[13/7] rounded-lg object-cover"
            width={50}
            height={20}
            alt="img"
            src={img}
          />
        </div>
        <div className="absolute flex flex-col justify-end fontacme font-extrabold right-[20%] bg-white/80 text-yellow-500 px-2 rounded-b-lg h-[25%] md:h-[32%] w-[20%]">
          <div className="flex flex-col items-center text-[0.95rem]">
            <span>20%</span>
            <span>OFF</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <span className="fontpacifico text-lg ">{name}</span>
          <span className="fontacme text-gray-500">Spec offer : {offer}</span>
        </div>
        <div className="fontacme flex flex-col md:flex-row gap-2">
          <span className="bg-yellow-500 p-1 md:px-2 rounded-md text-white   ">
            {adress}{" "}
          </span>
          <button className="bg-yellow-500 p-1 animate-pulse text-white rounded-md ">
            Book Now
          </button>
        </div>
      </Link>
    </>
  );
};

export default OfferCard;
