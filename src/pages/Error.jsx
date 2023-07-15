import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
      <>
        <Navbar />
        <section className="bg-gray-800 min-h-screen flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-red-500 text-white p-4 mb-4 rounded-md">
                <p className="font-semibold">Error: {error.status} {error.statusText}</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  };
  
  export default Error;
  
