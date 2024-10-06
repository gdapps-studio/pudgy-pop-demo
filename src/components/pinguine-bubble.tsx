import pinguineSvg from '@/assets/pinguine-bubble.svg';
import Image from 'next/image';

import './pinguine-bubble.css';

const PinguineBubble = () => (
  <div className="pinguine-bubble relative max-w-max overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <Image priority src="/pinguine-bubble.webp" alt="Pinguine" width={284} height={505} />
    </div>
    <Image src={pinguineSvg} alt="Bubble" width={483} />
  </div>
);

export { PinguineBubble };
