import { FaGraduationCap } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const Education: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen  text-white">
      <div className="container mx-auto px-4 md:px-0 text-center">
        <h2 className="text-4xl md:text-5xl font-bold my-6">🎓 Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
            <FaGraduationCap className="text-3xl md:text-4xl text-purple-600" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black text-left">
                Computer Technician
              </h3>
              <p className="text-lg md:text-xl text-gray-700">
                🏫 Šolski Center Velenje (Slovenia)
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
            <RiComputerLine className="text-3xl md:text-4xl text-blue-600" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black">
                Engineer of Informatics
              </h3>
              <p className="text-lg md:text-xl text-gray-700">
                🎓 Višja Strokovna Šola Velenje
              </p>
            </div>
          </div>
        </div>
        {/* Centered text */}
        <div className="mt-6 md:text-2xl text-white font-semibold max-w-prose mx-auto text-center">
          On a quest for knowledge, I embarked on my academic journey at{" "}
          <span className="text-purple-600">Šolski Center Velenje</span>, where
          I honed my skills as a{" "}
          <span className="text-purple-600">Computer Technician</span>. Now, I'm
          pursuing my engineering dreams at{" "}
          <span className="text-blue-600">Višja Strokovna Šola Velenje</span>.
        </div>
      </div>
    </div>
  );
};

export default Education;
