'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import CategoryBox from '../category-box/category-box';
import { categories } from './categories.constants';
import Container from '../container/container';

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            id={item.id}
            key={item.id}
            label={item.label}
            icon={item.icon}
            selected={category === item.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
