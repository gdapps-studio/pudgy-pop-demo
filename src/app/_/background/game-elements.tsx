'use client';

import bubbleExtraSmallSvg from '@/assets/bubble-extra-small.svg';
import penguineBubbleSvg from '@/assets/penguine-bubble.svg';
import penguineOutlineSvg from '@/assets/penguine-outline.svg';
import pudgyPopSvg from '@/assets/pudgy-pop.svg';
import { animated } from '@react-spring/web';
import Image from 'next/image';

import { BubbleWithElement } from './bubble-with-element';
import './float.css';
import { useFadeIn } from './use-fade-in';

const SIZES = '(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw';

const Penguine = () => {
  const fadeInAnim = useFadeIn();

  return (
    <animated.div style={fadeInAnim} className="relative mx-auto top-10 max-w-max animate-float-5s">
      <div className="absolute top-[29px] left-[10.5px] z-10">
        <Image src={penguineOutlineSvg} alt="Penguine outline" quality={100} />
      </div>
      <div className="relative w-[115.78px] h-[203.3px]">
        <Image priority src="/pinguine.webp" sizes={SIZES} quality={100} alt="Pinguine bubble" fill />
      </div>
      <div className="absolute bottom-[46px] left-1/2 transform -translate-x-1/2 flex justify-center items-center z-20">
        <PudgyPopText />
      </div>
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[194px] h-[195px]">
        <Image src={penguineBubbleSvg} alt="Bubble" quality={100} />
      </div>
    </animated.div>
  );
};

const PudgyPopText = () => (
  <div className="absolute -bottom-20 z-10">
    <div className="relative w-[243.76px] h-[121.63px]">
      <Image src={pudgyPopSvg} fill alt="Pudgy" quality={100} />
    </div>
  </div>
);

export const GameElements = () => {
  return (
    <div className="relative max-w-[700px] mx-auto w-full h-96">
      <Penguine />
      <BubbleWithElement
        delay={100}
        wrapperClassName="top-2 left-[140px] animate-float-3s"
        bubbleWrapperClassName="w-[116px] h-[115px]"
        element={
          <div className="relative w-[91px] h-[91px]">
            <Image
              priority
              src="/game-elements/booster-shark.png"
              sizes={SIZES}
              quality={100}
              alt="Booster Shark"
              fill
            />
          </div>
        }
      />
      <BubbleWithElement
        delay={400}
        wrapperClassName="-top-12 right-[100px] animate-float-3s"
        bubbleWrapperClassName="w-[165px] h-[164px]"
        element={
          <div className="relative w-[107px] h-[107px]">
            <Image priority src="/game-elements/balloons.png" sizes={SIZES} quality={100} alt="Ballons Shark" fill />
          </div>
        }
      />
      <BubbleWithElement
        delay={1200}
        wrapperClassName="bottom-[45px] left-[140px] animate-float-4s"
        bubbleWrapperClassName="w-[102px] h-[102px]"
        element={
          <div className="relative w-[70px] h-[71px]">
            <Image
              priority
              src="/game-elements/penguin-hammer.png"
              sizes={SIZES}
              quality={100}
              alt="Hammer Shark"
              fill
            />
          </div>
        }
      />
      <div className="absolute top-[130px] left-[60px]">
        <div className="reletive w-[84px] h-[84px]">
          <Image src={bubbleExtraSmallSvg} alt="Bubble" quality={100} />
        </div>
      </div>
    </div>
  );
};
