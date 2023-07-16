import { FC, ReactNode } from 'react';

interface AboutDevProps {
    icon: string;
    name: string;
    role: string;
    description: string;
}

const AboutDev: FC<AboutDevProps> = ({ icon, name, role, description }) => {
    return (
        <div className="bg-[#111827] p-8 rounded-lg border border-gray-200/80 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center">
      <img src={icon} className="w-24 bg-white flex-shrink-0 p-1 rounded-lg"/>
      <div className="ms-10">
      <h1 className="text-white font-bold text-2xl">{name}</h1>
      <p className="text-white">{role}</p>
      </div>
        </div>
      <p className="text-white pt-4">{description}</p>
    </div>
    )
}

export default AboutDev;