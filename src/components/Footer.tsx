import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="h-0.5 bg-slate-700"></div>
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto px-2 flex justify-between items-center">
          <div>
          <p className="text-xl font-semibold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-indigo-500 to-rose-500">
              &copy; Giftify
            </p>
            <span className="text-sm text-white font-thin">
            All rights reserved.
            </span>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
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
