'use client';

import React from 'react';
import { InputProps } from './input.types';
import { BiDollar } from 'react-icons/bi';

const Input = ({
  errors,
  id,
  label,
  register,
  disabled,
  formatPrice,
  registerOptions,
  type = 'text',
}: InputProps) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          className="text-neutral-700 absolute top-5 left-2"
          size={24}
        />
      )}
      <input
        id={id}
        disabled={disabled}
        type={type}
        placeholder=" "
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          formatPrice ? 'pl-9' : 'pl-4'
        } ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}  ${
          errors[id] ? 'focus:border-rose-500' : 'focus:border-black'
        }`}
        {...register(id, registerOptions)}
      />
      <p
        className="
      text-rose-500
      text-sm
      mt-2
      "
      >
        {errors[id]?.message?.toString()}
      </p>
      <label
        className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        ${formatPrice ? 'right-9' : 'right-4'}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
