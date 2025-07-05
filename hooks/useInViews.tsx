import { useState, useEffect, useRef, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: UseInViewOptions = {}): {
  ref: RefObject<T>;
  inView: boolean;
} {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);
  const enteredView = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        
        if (triggerOnce && isInView && enteredView.current) {
          return;
        }
        
        setInView(isInView);
        
        if (isInView) {
          enteredView.current = true;
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: ref as RefObject<T>, inView };
}
