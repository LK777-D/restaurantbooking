const Header = () => {
  return (
    <header className="flex justify-center items-center h-[70vh]   lg:h-[80vh] lg:justify-start lg:ml-[5rem]">
      <div className="text-white flex flex-col gap-3 px-4  ">
        <span className="text-[1.7rem] fontacme lg:text-[2.4rem] ">
          Taste The{" "}
        </span>
        <span className="text-[2.2rem] fontpacifico font-extrabold lg:text-[2.9rem] ">
          Best Food Ever
        </span>
        <p className="max-w-[35rem] lg:text-[1.1rem] fontacme">
          We are committed to offering best restaurant booking services.
          combining our energy and enthusiasm with years of experience.
        </p>
      </div>
    </header>
  );
};

export default Header;
