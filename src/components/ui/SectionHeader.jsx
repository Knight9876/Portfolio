import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

const SectionHeader = ({ title }) => {
  const headerRef = useRef(null);
  
  useScrollReveal(headerRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  });

  return (
    <div className="flex flex-row items-center mb-12">
      <div className="w-2 h-10 bg-primary-light dark:bg-primary-dark rounded-r-full"></div>
      <h1
        ref={headerRef}
        className="text-4xl font-extrabold text-start pl-6 tracking-tight"
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
