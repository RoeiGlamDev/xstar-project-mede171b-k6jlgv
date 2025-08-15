import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Scene: React.FC = () => {
  const canvasRef = useRef<THREE.WebGLRenderer>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Add any additional Three.js scene setup
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.div 
        className="text-6xl font-bold text-orange-600 mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        luxury LRP cosmetics
      </motion.h1>
      <motion.div 
        className="text-xl text-gray-800 mb-8" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        Elevate your beauty with our exquisite range of luxury cosmetics.
      </motion.p>
      <Canvas ref={canvasRef} className="w-full h-full">
        <OrbitControls />
        {/ Add 3D models and interactive elements here /}
        {/ Example of a 3D model /}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#FFA500" />
        </mesh>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <motion.div 
        className="mt-6 px-6 py-3 text-white bg-orange-600 hover:bg-orange-500 transition duration-300 rounded"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert('Shop Now!')}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default Scene;