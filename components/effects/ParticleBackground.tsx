import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const particles: THREE.Points[] = [];
        const particleCount = 500;
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  10;
            positions[i  3 + 1] = (Math.random() - 0.5)  10;
            positions[i  3 + 2] = (Math.random() - 0.5)  10;
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMaterial = new THREE.PointsMaterial({ color: 0xff8c00, size: 0.05, transparent: true });
        const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleSystem);
        particles.push(particleSystem);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            particleSystem.rotation.x += 0.001;
            particleSystem.rotation.y += 0.001;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div 
                className="text-5xl md:text-7xl font-bold text-white text-center mt-20"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.5 }}
            >
                luxury LRP cosmetics
            </motion.h1>
            <motion.div 
                className="text-xl md:text-2xl text-orange-500 text-center mt-5"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                Elevate your beauty with our luxurious cosmetics line.
            </motion.p>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <motion.div 
                    className="bg-orange-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-orange-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Shop Now
                </motion.button>
            </div>
        </div>
    );
};

export default ParticleBackground;