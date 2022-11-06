import { useCallback, useState } from 'react';
import { useTrend } from '../context/TrendContext';
import useFocusOut from './useFocusOut';

function usePageTitle() {
  const trends = useTrend();
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  useFocusOut(isOpenDatePicker, setIsOpenDatePicker, 'trigger-date-picker', 'date-picker');

  const handleDateSetClick = useCallback(
    (from: Date | undefined, to: Date | undefined) => () => {
      trends?.setDateRange({
        fromDate: from || trends?.dateRange.fromDate,
        toDate: to || trends?.dateRange.toDate,
      });

      setIsOpenDatePicker(false);
    },
    []
  );

  const handleDateRangeClick = () => setIsOpenDatePicker((cur) => !cur);

  return { trends, isOpenDatePicker, handleDateSetClick, handleDateRangeClick };
}

export default usePageTitle;
