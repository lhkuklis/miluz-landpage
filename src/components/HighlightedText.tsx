import React from 'react';

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-[#00e6c3] to-[#39175d] bg-clip-text text-transparent font-extrabold ${className}`}>{children}</span>
  );
};

export default HighlightedText;
