import type { Category } from './categories.types';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

export const categories: Category[] = [
  {
    id: 'Beach',
    label: 'ساحل',
    icon: TbBeach,
    description: 'این ملک نزدیک به ساحل است!',
  },
  {
    id: 'Windmills',
    label: 'آسیاب های بادی',
    icon: GiWindmill,
    description: 'این ملک دارای آسیاب بادی است!',
  },
  {
    id: 'Modern',
    label: 'نوین',
    icon: MdOutlineVilla,
    description: 'این ملک مدرن است!',
  },
  {
    id: 'Countryside',
    label: 'حومه شهر',
    icon: TbMountain,
    description: 'این ملک در حومه شهر است!',
  },
  {
    id: 'Pools',
    label: 'استخرها',
    icon: TbPool,
    description: 'این ملک دارای یک استخر زیبا است!',
  },
  {
    id: 'Islands',
    label: 'جزایر',
    icon: GiIsland,
    description: 'این ملک در یک جزیره است!',
  },
  {
    id: 'Lake',
    label: 'دریاچه',
    icon: GiBoatFishing,
    description: 'این ملک نزدیک دریاچه است!',
  },
  {
    id: 'Skiing',
    label: 'اسکی',
    icon: FaSkiing,
    description: 'این ملک دارای فعالیت های اسکی است!',
  },
  {
    id: 'Castles',
    label: 'قلعه ها',
    icon: GiCastle,
    description: 'این ملک یک قلعه باستانی است!',
  },
  {
    id: 'Caves',
    label: 'غارها',
    icon: GiCaveEntrance,
    description: 'این ملک در یک غار شبح وار است!',
  },
  {
    id: 'Camping',
    label: 'چادر زدن',
    icon: GiForestCamp,
    description: 'این ملک فعالیت های کمپینگ را ارائه می دهد!',
  },
  {
    id: 'Arctic',
    label: 'قطب شمال',
    icon: BsSnow,
    description: 'این ملک در محیط قطب شمال است!',
  },
  {
    id: 'Desert',
    label: 'کویر',
    icon: GiCactus,
    description: 'این ملک در بیابان است!',
  },
  {
    id: 'Barns',
    label: 'انبارها',
    icon: GiBarn,
    description: 'این ملک در انبار است!',
  },
  {
    id: 'Lux',
    label: 'لوکس',
    icon: IoDiamond,
    description: 'این ملک کاملا نوساز و مجلل است!',
  },
];
