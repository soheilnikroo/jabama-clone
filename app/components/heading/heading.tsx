'use client';

import React from 'react';
import type { HeadingProps } from './heading.types';

const Heading = ({ title, center, subTitle }: HeadingProps) => {
  return (
    <header className={`${center ? 'text-center' : 'text-start'}`}>
      <h5 className="text-2xl font-bold">{title}</h5>
      <p className="font-light text-neutral-500 mt-2">{subTitle}</p>
    </header>
  );
};

export default Heading;
