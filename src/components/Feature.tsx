import { FC, ReactNode } from 'react';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Feature: FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center border border-slate-700 hover:scale-105 transition-transform duration-300">
      <div className="h-16 w-16 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full m-2 mb-6 flex items-center justify-center cursor-pointer">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Feature;
