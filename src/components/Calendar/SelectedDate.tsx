import { FC } from 'react';

import { useCalendar } from '../../hooks/useCalendar';
import { daysOfWeekNames, monthsNames } from '../../utils/constants/date.ts';
import { getDayOfWeek } from '../../utils/helpers/date.ts';


export const SelectedDate: FC = () => {
	const { selectedDate, date } = useCalendar();

	const dayOfWeekNumber = getDayOfWeek({ ...selectedDate, day: date.day });
	const dayOfWeek = daysOfWeekNames.long[dayOfWeekNumber];
	const month = monthsNames.long[selectedDate.month];

	return (
		<div className="p-2.5 flex rounded-t-lg bg-[#202020]">
			{dayOfWeek}, {date.day} {month}
		</div>
	);
};

