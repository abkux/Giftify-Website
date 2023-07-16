import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-800 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex justify-center">
            <div className="bg-red-500 text-white p-8 mb-8 rounded-md text-center">
              <p className="font-semibold text-4xl mb-4">
                Error: 404 Page Not Found
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-red-500 font-semibold py-2 px-6 rounded-md shadow-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
