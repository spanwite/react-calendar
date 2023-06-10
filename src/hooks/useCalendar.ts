import { useContext } from 'react';

import { CalendarContext } from '../context/calendar/CalendarContext';


export function useCalendar() {
	return useContext(CalendarContext);
}