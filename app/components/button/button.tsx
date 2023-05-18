'use client';

import React from 'react';
import type { ButtonProps } from './button.types';

const Button = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  outline,
  small,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? 'bg-white' : 'bg-orange-400'
      } ${outline ? 'border-black' : 'border-orange-400'} ${
        outline ? 'text-black' : 'text-white'
      } ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-md'} ${
        small ? 'font-light' : 'font-semibold'
      } ${small ? 'border-[1px]' : 'border-2'}`}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
