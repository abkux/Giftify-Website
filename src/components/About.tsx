import { FC } from "react";
import Link from "next/link";
interface AboutProps {
  icon: string;
  name: string;
  role: string;
  description: string;
  link: string;
}

const About: FC<AboutProps> = ({ icon, name, role, description, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-gray-900 p-8 md:px-20 max-w-md rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300 transform-gpu"
    >
      <div className="flex items-center">
        <img
          src={icon}
          alt={`${name}'s icon`}
          className="w-24 rounded-lg border-2 border-gray-700"
        />
        <div className="ms-10">
          <h1 className="text-white font-bold text-2xl">{name}</h1>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-400 pt-4">{description}</p>
    </Link>
  );
};

export default About;
