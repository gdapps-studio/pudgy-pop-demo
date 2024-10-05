'use client';

import { motion } from 'framer-motion';

function ComponentPage() {
  return (
    <main className="flex justify-center items-center h-screen">
      <motion.button
        className="bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        Play now
      </motion.button>
    </main>
  );
}

export default ComponentPage;
