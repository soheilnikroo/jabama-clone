import type { SafeListing, SafeUser } from '@/types';

export type FavoritesClientProps = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};
