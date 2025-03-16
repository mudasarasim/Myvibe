// AnimatedText.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
// import './Animations.css';

const AnimatedText = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <span ref={ref} className={`fade-in ${inView ? 'show' : ''}`}>
      {children}
    </span>
  );
};

export default AnimatedText;
