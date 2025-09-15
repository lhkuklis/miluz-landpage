import React from 'react';

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
}

// Subtle highlight: teal color + semi-bold. Avoid gradients or full-text color fills.
const HighlightedText: React.FC<HighlightedTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`text-[#00c4a7] font-semibold ${className}`}>{children}</span>
  );
};

export default HighlightedText;
