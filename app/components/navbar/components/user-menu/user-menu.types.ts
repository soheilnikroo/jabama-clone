import { User } from '@prisma/client';

export type UserMenuProps = {
  currentUser: User | null;
};
