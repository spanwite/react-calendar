import { FC } from 'react';

import { CalendarProvider } from '../../context/calendar/CalendarProvider';

import { DateSelector } from './DateSelector.tsx';
import { SelectedDate } from './SelectedDate.tsx';
import { RenderTable } from './tables/RenderTable.tsx';


export const Calendar: FC = () => {

	return (
		<CalendarProvider>
			<SelectedDate/>
			<DateSelector/>
			<RenderTable/>
		</CalendarProvider>
	);
};
