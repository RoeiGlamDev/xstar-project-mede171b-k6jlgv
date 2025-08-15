import { useEffect, useRef } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  const ref = React.useRef<THREE.Mesh>(null!);
  let clock = new THREE.Clock();

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.position.y = Math.sin(elapsedTime) * 0.2; // Floating effect
  });

  return (
    <mesh ref={ref} position={position}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElement position={[-1, 0, 0]} />
        <FloatingElement position={[1, 0, 0]} />
        <OrbitControls />
      </Canvas>
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold text-orange-600">Luxury LRP Cosmetics</h1>
        <p className="mt-4 text-xl text-gray-700">Elevate your beauty with our premium cosmetics.</p>
        <button className="mt-6 px-8 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300">
          Shop Now
        </button>
      </motion.div>
    </div>
  );
};

export default FloatingElements;