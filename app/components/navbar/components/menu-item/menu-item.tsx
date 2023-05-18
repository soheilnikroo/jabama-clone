'use client';

import React from 'react';
import type { MenuItemProps } from './menu-item.types';

const MenuItem = ({ label, onClick }: MenuItemProps) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </li>
  );
};

export default MenuItem;
