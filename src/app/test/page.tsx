'use client';

import { motion } from 'framer-motion';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Landing Page 3D Funcionando! 🎉
        </h1>
        <p className="text-gray-300 mb-8">
          Todas as correções de SSR foram aplicadas com sucesso.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold inline-block"
        >
          Ir para a Landing Page
        </motion.a>
      </motion.div>
    </div>
  );
}



