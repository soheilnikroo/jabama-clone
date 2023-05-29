'use client';

import React, { useCallback, useState } from 'react';
import Avatar from '@/components/avatar/avatar';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from '../menu-item/menu-item';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import type { UserMenuProps } from './user-menu.types';
import { signOut } from 'next-auth/react';
import useRentModal from '@/hooks/useRentModal';
import { useRouter } from 'next/navigation';

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-grow items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          جاباما خانه شما {currentUser?.name} 👋
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md  bg-white overflow-hidden left-0 w-[40vw] md:w-3/4 top-12 text-sm">
          <ul className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="سفر های من"
                  onClick={() => router.push('/trips')}
                />
                <MenuItem
                  label="علاقه مندی ها"
                  onClick={() => router.push('/favorites')}
                />
                <MenuItem
                  label="رزرو های من"
                  onClick={() => router.push('/reservations')}
                />
                <MenuItem
                  label="مشخصات من"
                  onClick={() => router.push('/properties')}
                />
                <MenuItem label="جاباما خانه شما" onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label="خروج" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="ورود" onClick={loginModal.onOpen} />
                <MenuItem label="ثبت نام" onClick={registerModal.onOpen} />
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
