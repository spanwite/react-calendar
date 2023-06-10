import { FC, ReactNode } from 'react';
import { useState } from 'react';

import { ISelectionMode } from '../../types/date.ts';

import { CalendarContext } from './CalendarContext';


interface CalendarProviderProps {
	children: ReactNode;
}

const initialDate = new Date();

export const CalendarProvider: FC<CalendarProviderProps> = ({ children }) => {
	const [day, setDay] = useState(initialDate.getDate());
	const [month, setMonth] = useState(initialDate.getMonth());
	const [year, setYear] = useState(initialDate.getFullYear());

	const [selectedYear, setSelectedYear] = useState(year);
	const [selectedMonth, setSelectedMonth] = useState(month);

	const [selectionMode, setSelectionMode] = useState<ISelectionMode>('day');

	const setMonthCorrectly = (month: number) => {
		if (month === -1) {
			setYear(year - 1);
			setMonth(11);
		} else if (month === 12) {
			setYear(year + 1);
			setMonth(0);
		} else {
			setMonth(month);
		}
	};

	const value = {
		date: { day, month, year },
		selectedDate: { year: selectedYear, month: selectedMonth },
		setSelectedMonth,
		setSelectedYear,
		selectionMode,
		setDay,
		setYear,
		setSelectionMode,
		setMonth: setMonthCorrectly,
	};

	return (
		<CalendarContext.Provider value={value}>
			{children}
		</CalendarContext.Provider>
	);
};
