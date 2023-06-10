import { createContext } from 'react';

import { IDate, ISelectedDate, ISelectionMode } from '../../types/date.ts';


interface ICalendarContext {
	date: IDate;
	setDay: (day: number) => void,
	setMonth: (month: number) => void,
	setYear: (year: number) => void,

	selectedDate: ISelectedDate,
	setSelectedMonth: (month: number) => void,
	setSelectedYear: (year: number) => void,

	selectionMode: ISelectionMode,
	setSelectionMode: (mode: ISelectionMode) => void,
}

export const CalendarContext = createContext<ICalendarContext>({
	date: {} as IDate,
	setDay: () => undefined,
	setMonth: () => undefined,
	setYear: () => undefined,

	selectedDate: {} as ISelectedDate,
	setSelectedYear: () => undefined,
	setSelectedMonth: () => undefined,

	selectionMode: {} as ISelectionMode,
	setSelectionMode: () => undefined,
});
