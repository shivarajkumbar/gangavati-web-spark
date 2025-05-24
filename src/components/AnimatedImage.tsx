
import React, { useState } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  hoverEffect?: 'zoom' | 'scale' | 'float';
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  hoverEffect = 'zoom' 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getHoverClass = () => {
    switch (hoverEffect) {
      case 'zoom':
        return 'hover:scale-110';
      case 'scale':
        return 'hover:scale-105';
      case 'float':
        return 'hover:-translate-y-2';
      default:
        return 'hover:scale-105';
    }
  };

  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <img
        src={`https://images.unsplash.com/${src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          imageLoaded ? 'opacity-100 animate-scale-in' : 'opacity-0'
        } ${getHoverClass()}`}
      />
    </div>
  );
};

export default AnimatedImage;
