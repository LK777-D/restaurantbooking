const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 fontacme  text-center">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-10">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Email: Food&apos;O@company.com </p>
          <p>Phone: +777 777 777</p>
          <p>Address: 777 Web Dev Street,</p>
        </div>

        <div className="w-full md:w-1/4 mb-10">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="list-none">
            <li>
              <a href="#home" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="text-gray-300 hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="#reservation" className="text-gray-300 hover:text-white">
                Reservation
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 ">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h2>
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white p-2 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-gray-900 p-2 rounded-r transition  hover:bg-orange-400 duration-200 ease-in-out focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>
          &copy; 2023. Food&apos;O - Restaurant Booking. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col">
        <span>name: Luka Dolbaia</span>
        <span>Date: 11.19.2023</span>
      </div>
    </footer>
  );
};

export default Footer;
