import bubbleSmallSvg from '@/assets/bubble-small.svg';
import { animated } from '@react-spring/web';
import clsx from 'clsx';
import Image from 'next/image';

import { useFadeIn } from './use-fade-in';

const BubbleWithElement = ({
  element,
  bubbleWrapperClassName,
  wrapperClassName,
  delay = 0,
  onComplete,
}: {
  element: React.ReactNode;
  bubbleWrapperClassName: string;
  wrapperClassName: string;
  delay?: number;
  onComplete?: () => void;
}) => {
  const fadeInAnim = useFadeIn(delay, () => {
    console.log('onrest');
  });
  return (
    <animated.div style={fadeInAnim} className={clsx('absolute', wrapperClassName)}>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{element}</div>
        <div className={clsx('relative', bubbleWrapperClassName)}>
          <Image src={bubbleSmallSvg} alt="Bubble" quality={100} fill />
        </div>
      </div>
    </animated.div>
  );
};

export { BubbleWithElement };
