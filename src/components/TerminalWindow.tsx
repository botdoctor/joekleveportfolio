import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal@joe-kleve:~$",
  children,
  className = ""
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`terminal-window ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div
            className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
            onClick={() => setIsMinimized(!isMinimized)}
          ></div>
        </div>
        <div className="text-xs text-gray-400 font-mono">{title}</div>
        <div></div>
      </div>

      {!isMinimized && (
        <div className="terminal-content text-terminal-teal font-mono">
          {children}
        </div>
      )}
    </motion.div>
  );
};

export default TerminalWindow;
