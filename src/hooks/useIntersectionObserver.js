import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = () => {
  const containerRef = useRef(null);
  const [opacity, setOpacity] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setOpacity(false);
    } else {
      setOpacity(true);
    }
  };

  const options = {
    threshold: 0.25,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, []);

  return [containerRef, opacity];
};

export default useIntersectionObserver;
