'use client';

import { useRouter } from 'next/navigation';
import Heading from '../heading/heading';
import Button from '../button/button';
import type { EmptyStateProps } from './empty-state.types';

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'هیچ تطابق دقیقی وجود ندارد',
  subtitle = 'سعی کنید برخی از فیلترهای خود را تغییر دهید یا حذف کنید.',
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="تمام فیلترها را حذف کنید"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
