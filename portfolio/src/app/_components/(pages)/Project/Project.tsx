import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
}

const projects: ProjectProps[] = [
  { title: 'Project 1', description: 'An innovative project using modern technologies.' },
  { title: 'Project 2', description: 'A web application that showcases dynamic user interaction.' },
  // Add more projects as needed
];

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Showcase of my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-5">
        <h1 className="text-4xl font-bold text-center mb-5">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card w-full bg-base-100 shadow-xl hover:shadow-2xl"
            >
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
