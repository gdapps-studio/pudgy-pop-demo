import { config, useSpring } from '@react-spring/web';

export const useFadeIn = (delay = 0, onComplete?: () => void) => {
  const fadeInAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.wobbly,
    delay,
  });

  return fadeInAnim;
};
