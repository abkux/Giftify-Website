import { FC } from "react";

interface AboutProps {
  icon: string;
  name: string;
  role: string;
  description: string;
}

const About: FC<AboutProps> = ({ icon, name, role, description }) => {
  return (
    <div className="bg-gray-900 p-8 md:px-24 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center">
        <img
          src={icon}
          className="w-24 rounded-lg border-2 border-gray-700"
        />
        <div className="ms-10">
          <h1 className="text-white font-bold text-2xl">{name}</h1>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-400 pt-4">{description}</p>
    </div>
  );
};

export default About;
