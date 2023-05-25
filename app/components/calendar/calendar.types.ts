import type { RangeKeyDict, Range } from 'react-date-range';

export type DatePickerProps = {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
};
