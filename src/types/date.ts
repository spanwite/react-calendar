export interface IDate {
	day: number;
	month: number;
	year: number;
}

export type ISelectionMode = 'day' | 'month' | 'year';

export type ISelectedDate = Pick<IDate, 'year' | 'month'>;
