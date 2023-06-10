import { IDate } from '../../types/date.ts';
import { locale } from '../constants/locale';


export function getDayOfWeek(date: IDate) {
	const day = new Date(date.year, date.month, date.day).getDay() - 1;
	// monday - 0; sunday - 6
	return day === -1 ? 6 : day;
}

export function makeArrayOfDays(days: number, count = days, atTheEnd = false) {
	if (atTheEnd) {
		return Array.from(Array(count), (_, index) => days - count + index + 1);
	}

	return Array.from(Array(count), (_, index) => index + 1);
}

export function getNumberOfDays(year: number, month: number) {
	return new Date(year, month + 1, 0).getDate();
}

export function getWeekDays() {
	const monday = new Date(Date.UTC(2023, 0, 2));

	const weekDaysShort = [];
	const weekDaysLong = [];

	for (let i = 0; i < 7; i++) {
		weekDaysShort.push(
			monday.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2),
		);
		weekDaysLong.push(
			monday.toLocaleDateString(locale, { weekday: 'long' }),
		);

		monday.setDate(monday.getDate() + 1);
	}

	return {
		short: weekDaysShort,
		long: weekDaysLong,
	};
}

export function getMonthNames() {
	const january = new Date(Date.UTC(2023, 0)); // just a January

	const monthsLong = [];
	const monthsShort = [];

	for (let i = 0; i < 12; i++) {
		monthsLong.push(january.toLocaleDateString(locale, { month: 'long' }));
		monthsShort.push(january.toLocaleDateString(locale, { month: 'short' }));

		january.setMonth(january.getMonth() + 1);
	}

	return {
		long: monthsLong,
		short: monthsShort,
	};
}

export function getDecade(year: number) {
	const start = year - (year % 10);
	const end = start + 10;

	return {
		start, end,
		string: `${start} - ${end}`,
		prev: start - 1,
	};
}
