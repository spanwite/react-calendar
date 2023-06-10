import { FC, ReactNode, useState } from 'react';

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

	const value = {
		date: { day, month, year },
		selectedDate: { year: selectedYear, month: selectedMonth },
		setSelectedMonth,
		setSelectedYear,
		selectionMode,
		setDay,
		setYear,
		setSelectionMode,
		setMonth,
	};

	return (
		<CalendarContext.Provider value={value}>
			{children}
		</CalendarContext.Provider>
	);
};
