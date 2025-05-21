import React, { useState } from 'react';
import SocialIcons from '../components/SocialIcons';
import ScrollDownIcon from '../components/ScrollDownIcon';
import { motion } from 'framer-motion';

const Landing: React.FC = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * 10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(-rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section 
      id="landing"
      className="relative h-screen flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle,rgba(63, 226, 251, 1) 14%, rgba(79, 79, 224, 0.96) 75%)'
      }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
      
      <div className="section-container h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left column: Profile Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] overflow-hidden"
                style={{
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src="../../../images/Omkar.png" 
                  alt="Omkara Anjaneya Kumar"
                  className="w-full h-full object-cover"
                  style={{
                    transform: 'translateZ(20px)',
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <SocialIcons className="mt-6 flex justify-center" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column: Name and Quote */}
          <motion.div
            className="text-white text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                background: 'linear-gradient(90deg,rgba(153, 0, 255, 1) 0%, rgba(255, 0, 0, 1) 50%, rgba(255, 149, 0, 1) 100%)' ,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Omkara Anjaneya Kumar
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-6 italic"
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                background: 'linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)' ,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
            -- Passionate about innovation, driven by impact --
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      <ScrollDownIcon />
    </section>
  );
};

export default Landing;
