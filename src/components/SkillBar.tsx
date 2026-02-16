import React, { useEffect } from 'react';
import { motion, useAnimation, useInView as framerUseInView } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = framerUseInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${level}%`,
        transition: { duration: 1, ease: "easeOut" }
      });
    }
  }, [controls, inView, level]);

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs text-neon-green">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: "0%" }}
          animate={controls}
        />
      </div>
    </div>
  );
};

export default SkillBar;