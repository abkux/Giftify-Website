const Feature = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center">
      <div className="icon-container">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Feature;