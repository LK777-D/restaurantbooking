import slice from "@/assets/pizza-slice.png";
import Image from "next/image";

const Ad = () => {
  return (
    <aside className="bg-yellow-500 w-[90%] mx-auto rounded-md py-3 relative my-[10rem] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-2 text-white fontacme ml-32">
        <div className="flex flex-col md:gap-3 md:flex-row items-center  ">
          <span className="text-2xl fontpacifico">Food&apos;O+</span>
          <span className="w-[55%] md:w-auto">
            Be 1 step forward to your favorite food
          </span>
        </div>
        <button className="border border-white px-2 py-1 rounded-lg transition hover:bg-white hover:text-yellow-500 duration-200 ease-in ">
          Join Now
        </button>
      </div>
      <Image
        alt="foodad"
        src={slice}
        width={320}
        className="absolute translate-x-[-40%] md:translate-x-[-90%] "
      />
    </aside>
  );
};

export default Ad;
