'use client';

import React from 'react';

import './btn.4.css';

export const Btn4 = (props: React.ComponentProps<'button'>) => {
  return (
    <>
      <button className="max-w-max btn-3d font-bold rounded-xl bg-emerald-400 shadow-emerald-600/50" {...props}>
        {props.children}
      </button>
    </>
  );
};
