import { Link } from "react-router-dom";

// Assets
import Gift from "../assets/Gift.svg";
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold flex items-center">
          <img src={Gift} alt="" className="w-8" /> <span className="ml-2 mt-1">Giftify</span>
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link
                to="/"
                className="hover:text-gray-600 transition-colors duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/documentation"
                className="hover:text-gray-600 transition-colors duration-500"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                to="/status"
                className="hover:text-gray-600 transition-colors duration-500"
              >
                Status
              </Link>
            </li>
            <li>
              <Link
                to="/invite"
                className="hover:text-gray-600 transition-colors duration-500"
              >
                Invite
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="hover:text-gray-600 transition-colors duration-500"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
        <button className="md:hidden"> <Bars3Icon className="w-8 text-white"/> </button>
      </div>
    </nav>
  );
};

export default Navbar;
