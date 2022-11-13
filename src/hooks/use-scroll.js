import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

/* UseScroll hook tracks the page scroll */
export const useScroll = (thresh = 0.1) => {
  const animationControls = useAnimation();
  /* useInView hook, it monitors if the element is within the viewport.
  If element is in view then the appropriate animation runs ("show" or "hidden") */
  const [element, isInview] = useInView({ threshold: thresh });

  if (isInview) {
    animationControls.start("show");
  } else {
    animationControls.start("hidden");
  }
  return [element, animationControls];
};
