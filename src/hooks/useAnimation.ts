import { useEffect } from "react";

interface useAnimationProps {
  element: Element[] | null;
  animation: "floatLeft" | "floatRight" | "floatUp" | "floatDown";
  animationLenght?: number;
  animationDelay?: number;
  firstDelay?: boolean;
  loadAll?: boolean;
}

export const useAnimation = ({
  element,
  animation,
  animationLenght = 1,
  animationDelay,
  firstDelay,
}: useAnimationProps) => {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.map((entry, index) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.style.animation = animation;
          target.style.animationDuration = `${animationLenght}s`;
          target.style.animationDelay = `${
            (firstDelay ? 1 : index) * (animationDelay || 0)
          }s`;
          target.style.animationIterationCount = "1";
          target.style.animationTimingFunction = "ease-in-out";
          target.style.animationFillMode = "forwards";
        } else if (target.style.animation === animation) {
          intersectionObserver.unobserve(entry.target);
        }
        // else {
        //   target.style.animation = "";

        // }
      });
    });

    if (!element || !element.length) return;
    element.forEach((elem) => {
      intersectionObserver.observe(elem);
      (elem as HTMLElement).style.opacity = "0";
    });

    return () => intersectionObserver.disconnect();
  }, [element]);
};
