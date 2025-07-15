import React from 'react';
import { motion } from 'framer-motion';

const ConcentricBackground: React.FC = () => {
  const circleCount = 4;

  return (
    <div className="absolute  right-8 w-[600px] h-[600px] overflow-hidden pointer-events-none z-0">
      {[...Array(circleCount)].map((_, i) => {
        const scaleBase = 1 - i * 0.15;
        return (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: `rgba(59, 130, 246, ${0.07 + i * 0.06})`,
              transform: `scale(${scaleBase})`,
              zIndex: -i,
              filter: 'blur(1px)',
            }}
            animate={{
              scale: [scaleBase, scaleBase + 0.1, scaleBase], 
              opacity: [1, 0.6, 1], 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2, 
            }}
          />
        );
      })}
    </div>
  );
};

export default ConcentricBackground;
