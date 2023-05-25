import type { SafeListing, SafeUser } from '@/types';

export type PropertiesClientProps = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};
