import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-base100 opacity-75 flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center text-white text-center">
        <img
          src="images/mopping.gif"
          alt="Mopping Animation"
          className="w-64 h-64 mt-4 animate-fill-forwards"
        />

        <p className="text-lg mt-4">Mopping up... Please wait</p>
      </div>
    </div>
  );
};

export default Loading;
