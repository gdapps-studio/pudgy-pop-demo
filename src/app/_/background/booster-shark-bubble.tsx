import bubbleSmallSvg from '@/assets/bubble-small.svg';
import Image from 'next/image';

const Bubble = () => <Image src={bubbleSmallSvg} alt="Bubble" quality={100} />;

const BubbleWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">{children}</div>
    <Bubble />
  </div>
);

const BoosterSharkWithBubble = () => (
  <div className="absolute top-10 left-1/3">
    <BubbleWrapper>
      <div className="relative w-[91px] h-[91px]">
        <Image priority src="/game-elements/booster-shark.png" quality={100} alt="Booster Shark" fill />
      </div>
    </BubbleWrapper>
  </div>
);

export { BoosterSharkWithBubble };
