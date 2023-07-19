import Link from "next/link";

const Footer = () => {
  return (
    <>
    <div className="bg-gray-900">
      <div className="p-4 flex justify-around flex-col items-center md:flex-row">
          <div className="p-10">
          <p className="text-xl font-semibold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-indigo-500 to-rose-500">
              &copy; Giftify
            </p>
            <span className="text-sm text-white font-thin">
            All rights reserved.
            </span>
          </div>
          <div className="p-10">
          <ul className="">
            <h1 className="text-white hover:text-zinc-200 underline">Important Links</h1>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
      </div>

    </div>
      {/* <div className="h-0.5 bg-slate-700"></div>
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
      </footer> */}
    </>
  );
};

export default Footer;
