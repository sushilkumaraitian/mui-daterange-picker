import * as React from 'react';
import { Locale } from 'date-fns';

export type NavigationAction = 'PREV' | 'NEXT';

export interface DateRange {
  startDate?: Date;
  endDate?: Date;
}

export interface DateRangePickerProps {
  open: boolean;
  toggle: () => void;
  onChange: (dateRange: DateRange) => void;
  initialDateRange?: DateRange;
  minDate?: Date | string;
  maxDate?: Date | string;
  definedRanges?: Array<{
    label: string;
    startDate: Date;
    endDate: Date;
  }>;
  input?: boolean;
  locale?: Locale;
  showDateDisplay?: boolean;
  showMonthArrow?: boolean;
  showMonthAndYearPickers?: boolean;
  showPreview?: boolean;
  showSelectionPreview?: boolean;
  monthsToShow?: number;
  ranges?: boolean;
  rangeColors?: string[];
  direction?: 'left' | 'right';
  staticRanges?: any[];
  inputRanges?: any[];
  className?: string;
  classNames?: {
    wrapper?: string;
    dateRangePickerWrapper?: string;
    dateDisplay?: string;
    dateDisplayItem?: string;
    dateDisplayItemActive?: string;
    monthAndYearWrapper?: string;
    monthAndYearPickers?: string;
    monthAndYearPickersSelects?: string;
    monthPicker?: string;
    yearPicker?: string;
    monthAndYearDivider?: string;
    monthAndYearPickersWrapper?: string;
    monthAndYearPickersWrapperActive?: string;
    monthAndYearPickersWrapperHover?: string;
    monthAndYearPickersWrapperDisabled?: string;
    monthAndYearPickersWrapperActiveHover?: string;
    monthAndYearPickersWrapperActiveDisabled?: string;
    monthAndYearPickersWrapperHoverDisabled?: string;
    monthAndYearPickersWrapperActiveHoverDisabled?: string;
    monthAndYearPickersWrapperActiveHoverDisabledSelected?: string;
  };
}

export const DateRangePicker: React.FC<DateRangePickerProps>;

export const DateRangePickerWrapper: React.FC<DateRangePickerProps>;

export const StaticDateRangePicker: React.FC<DateRangePickerProps>;

// Re-export types that might be useful for consumers
export { Locale };
