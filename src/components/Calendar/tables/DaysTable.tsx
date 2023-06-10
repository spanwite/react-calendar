import { FC, useMemo } from 'react';

import { useCalendar } from '../../../hooks/useCalendar';
import { daysOfWeekNames, MAX_DAYS_COUNT } from '../../../utils/constants/date';
import {
	getDayOfWeek,
	getNextMonth,
	getNumberOfDays,
	makeArrayOfDays,
} from '../../../utils/helpers/date';
import { Cell, ClickableCell } from '../styled/Cell.styles';
import { Table } from '../styled/Table.styles';


export const DaysTable: FC = () => {
	const {
		date,
		setDay,
		setMonth,
		setYear,
		setSelectedYear,
		setSelectedMonth,
		selectedDate,
	} = useCalendar();

	const days = useMemo(() => {
		const currentDaysNumber = getNumberOfDays(date.year, date.month);
		const currentDays = makeArrayOfDays(currentDaysNumber);

		const prevDaysCount = getDayOfWeek({ year: date.year, month: date.month, day: 1 });
		const prevDaysNumber = getNumberOfDays(date.year, date.month - 1);
		const prevDays = makeArrayOfDays(prevDaysNumber, prevDaysCount, true);

		const nextDaysCount = MAX_DAYS_COUNT - currentDaysNumber - prevDaysCount;
		const nextDays = makeArrayOfDays(nextDaysCount);

		console.log('rendered');

		return {
			current: currentDays,
			next: nextDays,
			prev: prevDays,
		};
	}, [date.month, date.year]);

	const handleClick = (day: number, monthOffset = 0) => {
		const newDate = getNextMonth(date.year, date.month + monthOffset);

		setSelectedYear(newDate.year);
		setSelectedMonth(newDate.month);

		setMonth(newDate.month);
		setYear(newDate.year);
		setDay(day);
	};

	return (
		<Table columns={7}>
			{daysOfWeekNames.short.map(dayOfWeek => (
				<Cell key={dayOfWeek} colored>
					{dayOfWeek}
				</Cell>
			))}

			{days.prev.map(day => (
				<ClickableCell
					key={day}
					onClick={() => handleClick(day, -1)}
					dimmed
				>
					{day}
				</ClickableCell>
			))}

			{days.current.map(day => (
				<ClickableCell
					key={day}
					onClick={() => handleClick(day)}
					selected={
						day === date.day &&
						date.month === selectedDate.month &&
						date.year === selectedDate.year
					}
				>
					{day}
				</ClickableCell>
			))}

			{days.next.map(day => (
				<ClickableCell
					key={day}
					onClick={() => handleClick(day, 1)}
					dimmed
				>
					{day}
				</ClickableCell>
			))}
		</Table>
	);
};
