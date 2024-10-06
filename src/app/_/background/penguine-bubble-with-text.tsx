import penguineBubbleSvg from '@/assets/penguine-bubble.svg';
import penguineOutlineSvg from '@/assets/penguine-outline.svg';
import pudgyPopSvg from '@/assets/pudgy-pop.svg';
import Image from 'next/image';

const PenguineOutline = () => (
  <div className="absolute inset-0 top-6 left-[2.5px] flex items-center justify-center -z-40">
    <Image src={penguineOutlineSvg} alt="Penguine outline" quality={100} />
  </div>
);

const Penguine = () => (
  <div className="absolute inset-0 top-12 left-1 flex items-center justify-center -z-30">
    <Image priority src="/pinguine.webp" quality={100} alt="Pinguine bubble" width={115.78} height={203.3} />
  </div>
);

const PudgyPopText = () => (
  <div className="absolute bottom-10 z-10">
    <div className="relative w-[243.76px] h-[121.63px]">
      <Image src={pudgyPopSvg} fill alt="Pudgy" quality={100} />
    </div>
  </div>
);

const Bubble = () => <Image src={penguineBubbleSvg} alt="Bubble" quality={100} />;

export const PenguineBubbleWithText = () => (
  <div className="relative w-full h-96 mx-auto flex items-center justify-center">
    <Bubble />
    <PenguineOutline />
    <Penguine />
    <PudgyPopText />
  </div>
);
