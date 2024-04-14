import React from "react";

// Define technology data as an array of objects
const technologies = [
  {
    name: "React.js",
    imageSrc:
      "https://img.shields.io/badge/-React.js-61DAFB?style=for-the-badge&logo=React&logoColor=white",
  },
  {
    name: "Tailwind CSS",
    imageSrc:
      "https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=Tailwind%20CSS&logoColor=white",
  },
  {
    name: "Node.js",
    imageSrc:
      "https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white",
  },
  {
    name: "Nest.js",
    imageSrc:
      "https://img.shields.io/badge/-Nest.js-E0234E?style=for-the-badge&logo=NestJS&logoColor=white",
  },
  {
    name: "TypeScript",
    imageSrc:
      "https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white",
  },
  {
    name: "MySQL",
    imageSrc:
      "https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white",
  },
  {
    name: "PostgresSQL",
    imageSrc:
      "https://img.shields.io/badge/-PostgresSQL-336791?style=for-the-badge&logo=PostgreSQL&logoColor=white",
  },
  {
    name: "Flutter",
    imageSrc:
      "https://img.shields.io/badge/-Flutter-02569B?style=for-the-badge&logo=Flutter&logoColor=white",
  },
  {
    name: "Git",
    imageSrc:
      "https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=Git&logoColor=white",
  },
  {
    name: "Vercel",
    imageSrc:
      "https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white",
  },
  {
    name: "Render",
    imageSrc:
      "https://img.shields.io/badge/-Render-373737?style=for-the-badge&logo=Render&logoColor=white",
  },
  {
    name: "Netlify",
    imageSrc:
      "https://img.shields.io/badge/-Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white",
  },
];

const TechnologiesAndTools: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100 py-8 px-4 md:px-10 flex items-center justify-center">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          🔧 Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-items-center">
          {technologies.map((technology) => (
            <TechnologyItem
              key={technology.name}
              name={technology.name}
              imageSrc={technology.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TechnologyItem: React.FC<{ name: string; imageSrc: string }> = ({
  name,
  imageSrc,
}) => {
  return (
    <div className="max-sm:px-2 flex flex-col items-center justify-center rounded-xl p-4 ">
      <img src={imageSrc} alt={name} className="rounded-xl w-full h-20 mb-4" />
    </div>
  );
};

export default TechnologiesAndTools;
