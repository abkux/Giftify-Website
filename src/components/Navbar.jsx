import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Giftify
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-gray-600 transition-colors duration-500">Home</Link>
            </li>
            <li>
              <Link to="/documentation" className="hover:text-gray-600 transition-colors duration-500">Documentation</Link>
            </li>
            <li>
              <Link to="/status" className="hover:text-gray-600 transition-colors duration-500">Status</Link>
            </li>
            <li>
              <Link to="/invite" className="hover:text-gray-600 transition-colors duration-500">Invite</Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-gray-600 transition-colors duration-500">Support</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          {/* MOBILE BUTTON */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
