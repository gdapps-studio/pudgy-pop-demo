import { Btn1 } from '@/components/btn1';
import { Btn2 } from '@/components/btn2';
import { Btn3D } from '@/components/btn3';
import { Btn4 } from '@/components/btn4';
import { Bubble } from '@/components/bubble';
import { Medal } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

const MemberCard = () => (
  <div className="flex items-center justify-between bg-white border border-gray-200 rounded-full p-1 pr-4 shadow-sm max-w-xs w-full hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden">
        <Image src="/pinguine.png" alt="Profile avatar" width={48} height={48} className="w-12 h-12" />
      </div>
      <div className="absolute -top-1 -left-1 bg-yellow-400 rounded-full p-1">
        <Medal className="w-4 h-4 text-white" />
      </div>
    </div>
    <div className="ml-3">
      <div className="text-2xl font-bold text-black">18,125</div>
      <div className="text-xs font-bold text-black">7654 members</div>
    </div>
  </div>
);

const Section = ({ children, title }: { children: ReactNode; title: string | undefined }) => (
  <div className="container mx-auto space-y-6">
    <h1 className="text-4xl font-bold">{title}</h1>
    {children}
  </div>
);

export default function ComponentPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen space-y-6 relative overflow-hidden">
      <Section title="Button Variations">
        <div className="flex flex-col md:flex-row gap-5">
          <Btn1>Button 1</Btn1>
          <Btn2>Button 2</Btn2>
          <Btn3D>3D Touch</Btn3D>
          <Btn4>Button 4</Btn4>
        </div>
      </Section>

      <Section title="Member Cards">
        <MemberCard />
      </Section>

      <div className="-z-50">
        {[...Array(40)].map((_, index) => (
          <Bubble key={index} />
        ))}
      </div>
    </main>
  );
}
