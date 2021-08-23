import { useEffect, MutableRefObject } from 'react';

interface IuseIntersectionObserver {
  enabled: boolean;
  target: MutableRefObject<Element | null>;
  onIntersect(): void;
}
export const useIntersectionObserver = (options: IuseIntersectionObserver) => {
  const { enabled, target, onIntersect } = options;
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const intersectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    const element = target && target.current;
    if (!element) {
      return;
    }

    intersectionObserver.observe(element);

    return () => {
      intersectionObserver.unobserve(element);
    };
  }, [enabled, onIntersect, options, target]);
};
