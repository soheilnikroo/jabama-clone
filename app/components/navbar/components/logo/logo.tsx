'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="lgo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.svg"
      onClick={() => router.push('/')}
    />
  );
};

export default Logo;
