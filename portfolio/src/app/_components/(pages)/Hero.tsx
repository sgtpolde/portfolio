'use client';
import useTypewriter from '@/app/_utils/TypeWriter';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Function to generate random mocked code snippet
const generateRandomMockedCode = () => {
  const pseudoCodeSnippets = [
    [
      { prefix: '$', code: 'npm install package' },
      { prefix: '>', code: 'installing...', className: 'text-warning' },
    ],
    [
      { prefix: '$', code: 'git clone repository' },
      { prefix: '>', code: 'cloning...', className: 'text-warning' },
    ],
    [
      { prefix: '$', code: 'docker build image' },
      { prefix: '>', code: 'building...', className: 'text-warning' },
      { prefix: '>', code: 'Done!', className: 'text-success' },
    ],
  ];

  const randomIndex = Math.floor(Math.random() * pseudoCodeSnippets.length);
  return pseudoCodeSnippets[randomIndex];
};

// Hero component
const Hero = () => {
  const mockedCodeLines = generateRandomMockedCode();
  const typewriterText = useTypewriter(
    'Full-Stack Developer | Tech Enthusiast | Problem Solver', // Provide the text for the typewriter effect
    10, // Optionally specify typing speed in milliseconds (default: 200)
    75, // Optionally specify deleting speed in milliseconds (default: 100)
    50, // Optionally specify delay before typing starts in milliseconds (default: 1000)
    100 // Optionally specify delay after typing ends and before deleting starts in milliseconds (default: 1000)
  );
  return (
    <header className='flex flex-col md:flex-row h-screen w-full overflow-hidden relative'>
      {/* Background */}
      <div className=''>
        {/* Implement dynamic background effects here */}
        {/* Example: particles, gradients, animations */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-base-300 via-base-100 to-base-100'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className='w-full md:w-1/2 p-10 flex flex-col justify-center z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h1
          className='text-5xl font-bold'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
        >
          Hello, I&apos;m <span className='text-primary'>Žak Bršek</span>
        </motion.h1>
        <motion.p
          className='text-xl mt-3 mb-5'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
        >
          {typewriterText}
        </motion.p>
        <Link href='/Projects'>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.7, type: 'spring', stiffness: 100 }}
            className='btn btn-primary btn-lg'
          >
            View My Projects
          </motion.div>
        </Link>
      </motion.div>

      {/* Code Snippet 
      <motion.div
        className='w-full md:w-1/2 p-8 rounded-lg flex justify-left items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className='mockup-code flex flex-col '>
          {mockedCodeLines.map((line, index) => (
            <pre
              key={index}
              data-prefix={line.prefix}
              className={line.className}
            >
              <code>{line.code}</code>
            </pre>
          ))}
        </div>
      </motion.div>
      */}
    </header>
  );
};

export default Hero;
