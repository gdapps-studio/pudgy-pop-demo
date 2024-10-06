import React from 'react';

export const Btn3D = ({ children, ...props }: React.ComponentProps<'button'>) => (
  <button
    className="button w-40 h-16 bg-emerald-400 rounded-lg cursor-pointer select-none
      active:translate-y-2 active:[box-shadow:0_0px_0_0#20A77F,0_4px_0_0_#166534]
      active:border-b-[0px]
      transition-all duration-150 [box-shadow:0_10px_0_0_#20A77F,0_14px_0_0_#166534]
      border-4 border-green-800
    "
    {...props}
  >
    <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">{children}</span>
  </button>
);
