'use client';

import React from 'react';
import Container from '../container/container';
import { Logo, Search, UserMenu } from './components';
import type { NavbarProps } from './navbar.types';

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
