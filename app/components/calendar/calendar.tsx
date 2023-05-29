'use client';

import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import type { DatePickerProps } from './calendar.types';
import { faIR } from 'date-fns/locale';
import s from './calendar.module.css';

const Calendar: React.FC<DatePickerProps> = ({
  value,
  onChange,
  disabledDates,
}) => {
  return (
    <DateRange
      className={s.calendar}
      locale={faIR}
      rangeColors={['#262626']}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
};

export default Calendar;
