import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypingEffectProps {
  sequences: (string | number)[];
  className?: string;
  speed?: number;
  repeat?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  sequences, 
  className = "", 
  speed = 50,
  repeat = Infinity
}) => {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper="span"
      speed={speed}
      repeat={repeat}
      className={`${className} inline-block`}
    />
  );
};

export default TypingEffect;