import { User } from '@prisma/client';

export type NavbarProps = {
  currentUser: User | null;
};
