import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import Tehnologies from "../components/Tehnologies";
import Education from "../components/Education";
import Skills from "../components/Skills";

type TechnologyIconProps = {
  src: string;
  alt: string;
  label: string;
};

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ src, alt, label }) => {
  return (
    <div className="w-1/4 sm:w-1/12 rounded-full bg-primary text-white flex items-center justify-center h-12 max-md:w-12 mr-4 mb-4 sm:mb-0">
      <img src={src} alt={alt} className="w-9 h-8" />
      <span className="sr-only">{label}</span>
    </div>
  );
};

const ProfileImage: React.FC = () => {
  return (
    <div className=" w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl mx-auto md:mx-0">
      <img
        src="/images/brko_animated.png"
        className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
        alt="Žak Bršek"
      />
    </div>
  );
};

const TechnologyIcons: React.FC = () => {
  const technologies = [
    { src: "/images/react-icon.png", alt: "React", label: "React" },
    {
      src: "/images/tailwind-icon.png",
      alt: "Tailwind CSS",
      label: "Tailwind CSS",
    },
    { src: "/images/nestjs-icon.png", alt: "NestJS", label: "NestJS" },
    // Add more technologies here
  ];

  return (
    <div className="flex flex-wrap items-center justify-start mt-4">
      {technologies.map((tech, index) => (
        <TechnologyIcon key={index} {...tech} />
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate some loading process (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Set the loading time here (2 seconds in this example)
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" text-white">
      <div
        className="container mx-auto flex flex-col items-center justify-center py-20 md:py-32 "
        style={{ minHeight: "100vh" }}
      >
        <div className="animate-fade-down animate-duration-800 animate-ease-in flex flex-col px-5 md:flex-row items-center justify-between">
          <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
            <ProfileImage />
          </div>
          <div className="md:w-1/2 md:ml-12">
            <h1 className=" text-4xl md:text-6xl font-bold leading-tight mb-4">
              Hello, I'm Žak Bršek
            </h1>
            <p className="text-lg md:text-xl mb-6">
              A passionate Full Stack Developer from Slovenia with expertise in
              React, TypeScript, Tailwind CSS and Nestjs.
            </p>
            <p className="text-lg md:text-xl mb-6">
              I focus on creating user-friendly interfaces and building strong
              backend systems to provide seamless digital experiences that truly
              make an impact.
            </p>
            <TechnologyIcons />
            <div className="mt-8">
              <Link to="/projects">
                <button className="btn btn-primary mr-4">
                  Explore Projects
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn btn-secondary">Contact Me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* New section */}
      <Education />
      <Tehnologies />
      <Skills />
    </div>
  );
};

export default Hero;
