import type { SafeUser } from '@/types';

export type HeartButtonProps = {
  listingId: string;
  currentUser?: SafeUser | null;
};
