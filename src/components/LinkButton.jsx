const LinkButton = ({ children, onClick }) => {
  return (
    <button
      className="bg-pink-500 hover:bg-pink-400 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto transition-all duration-500 transform hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LinkButton;
