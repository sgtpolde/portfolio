import React from "react";

interface Project {
  webUrl: string;
  imageUrl: string;
  title: string;
  isNew: boolean;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<Project> = ({
  webUrl,
  imageUrl,
  title,
  isNew,
  description,
  technologies,
}) => {
  return (
    <div className="card w-auto md:w-96 bg-base-100 shadow-xl">
      <figure>
        <a href={webUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title} />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {technologies.map((technology, index) => (
            <div key={index} className="badge badge-outline">
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
