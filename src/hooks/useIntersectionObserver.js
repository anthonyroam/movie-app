import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    // console.log(entry)
    if (entry.isIntersecting) {
      setIsVisible(true);
    }

    if (entry.target.id === 'banner' && !entry.isIntersecting) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef);
    };
  }, [containerRef]);

  return [containerRef, isVisible];
};

export default useIntersectionObserver;
