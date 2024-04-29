'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full px-4 flex flex-col justify-center items-center bg-base-300 text-base-content">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          The page youre looking for does not exist.
        </p>
        <Link href="/" className="btn btn-primary">
          Go back to home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;