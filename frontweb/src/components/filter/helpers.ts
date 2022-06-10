import { FilterData } from '../../types';
import { formatDateToServer } from '../../utils/formatters';

export const buildFilterParams = (filterData?: FilterData) => {
  return {
    minDate: formatDateToServer(filterData?.dates?.[0]),
    maxDate: formatDateToServer(filterData?.dates?.[1]),
    gender: filterData?.gender
  };
};
