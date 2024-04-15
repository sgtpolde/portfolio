'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
}

const projects: ProjectProps[] = [
  { title: 'E-Commerce Platform', description: 'Developed a full-stack online store using React, Node.js, and MongoDB.' },
  { title: 'Social Media App', description: 'Built a social media application with real-time chat functionality using Socket.io, Express, and React.' },
];

const Projects: NextPage = () => {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      <Head>
        <title>Projects</title>
        <meta name="description" content="Showcase of projects by a Full-Stack Developer" />
      </Head>
      <main className="p-10">
        <h1 className="text-4xl font-bold text-center mb-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="card bg-neutral hover:bg-neutral-focus transition duration-300 ease-in-out shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">More Info</button>
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
