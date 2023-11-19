const Nav = () => {
  return (
    <nav className="h-[5rem]  flex items-center justify-around ">
      <span className="text-white fontacme text-[2rem] shadow-xl ">
        Food&apos;O
      </span>
      <input
        type="text"
        placeholder="Search in Food'O... "
        className=" bg-gray-300/70 placeholder:text-white rounded-md py-1 px-3 text-center w-[50%] md:w-[30%] "
      />
      <button className="bg-yellow-500 transition hover:bg-yellow-600 duration-150 ease-in rounded-lg text-white fontacme px-2 py-1">
        Log In
      </button>
    </nav>
  );
};

export default Nav;
