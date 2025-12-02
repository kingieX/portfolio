import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="mb-8">
          <span className="text-9xl bg-gradient-to-r from-[#4F8CFF] to-[#00AEEF] bg-clip-text text-transparent">
            404
          </span>
        </div>
        
        <h1 className="text-4xl mb-4">Page Not Found</h1>
        
        <p className="text-lg text-gray-600 dark:text-[#9CA3AF] mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. 
          It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8CFF] hover:bg-[#00AEEF] text-white rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Home size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-300 dark:border-[#4F8CFF] text-gray-800 dark:text-[#E2E8F0] hover:bg-gray-100 dark:hover:bg-[#4F8CFF]/10 rounded-xl transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 text-6xl text-[#4F8CFF]/20">
          <span>{'{'}</span>
          <span>{'<>'}</span>
          <span>{'}'}</span>
        </div>
      </motion.div>
    </div>
  );
}
