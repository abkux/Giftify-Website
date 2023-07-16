import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="h-0.5 bg-slate-700"></div>
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto px-2 flex justify-between items-center">
          <div>
            <p className="text-gray-400">
              &copy; Giftify. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
