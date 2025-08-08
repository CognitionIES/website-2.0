import { useEffect, useState, useCallback } from 'react';

interface IntersectionObserverHookResult {
  ref: (node: Element | null) => void;
  isVisible: boolean;
  hasBeenVisible: boolean;
}

export const useIntersectionObserver = (
  threshold: number = 0.1,
  rootMargin: string = '0px 0px -50px 0px'
): IntersectionObserverHookResult => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  const ref = useCallback((node: Element | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true);
          setHasBeenVisible(true);
          // Don't disconnect observer to allow for visibility tracking
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, threshold, rootMargin, hasBeenVisible]);

  return { ref, isVisible, hasBeenVisible };
};