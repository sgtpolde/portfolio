import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      webUrl: "https://riot-tracker.vercel.app",
      imageUrl: "/images/loldata-image.png",
      title: "Twistora",
      isNew: true,
      description: "League of legends history tracker and analitics",
      technologies: ["React", "Tailwind CSS", "NestJS"],
    },
    
    {
      webUrl: "http://dvoreclesje.si/",
      imageUrl: "/images/dvoreclesje-image.png",
      title: "Dvorec Lešje",
      isNew: false,
      description: "Dvorec Leščje - website about paintball & picnic",
      technologies: ["WordPress", "CSS"],
    },
    // Add more projects as needed
  ];
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="py-4">
        <h1 className="text-3xl font-bold mb-4 px-2">Projects</h1>
        <div className="grid grid-cols-1 max-sm:px-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
