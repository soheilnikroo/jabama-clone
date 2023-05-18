'use client';

import React, { useCallback, useState } from 'react';
import Avatar from '@/app/components/avatar/avatar';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from '../menu-item/menu-item';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-grow items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          خانه جاباما
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md pl-4 bg-white overflow-hidden right-0 top-12 text-sm">
          <ul className="flex flex-col cursor-pointer">
            <MenuItem label="ورود" onClick={() => {}} />
            <MenuItem label="ثبت نام" onClick={() => {}} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
