import { IconType } from 'react-icons';

export type CategoryBoxProps = {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
};
