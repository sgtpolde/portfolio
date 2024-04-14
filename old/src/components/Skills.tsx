import React from "react";

type SkillProps = {
  label: string;
  value: number;
};

const Skill: React.FC<SkillProps> = ({ label, value }) => {
  return (
    <div className="w-72 md:w-96">
      <p className="text-lg md:text-xl font-bold text-white">{label}</p>
      <progress
        className="progress progress-accent w-full"
        value={value}
        max="100"
      ></progress>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsData: SkillProps[] = [
    { label: "React.ts", value: 80 },
    { label: "Nest.ts", value: 95 },
    { label: "JavaScript", value: 65 },
    { label: "TypeScript", value: 85 },
    { label: "HTML", value: 90 },
    { label: "CSS", value: 89 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-6"> 🚀 Skills</h2>

      {skillsData.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
  );
};

export default Skills;
