import { useCalendar } from '../../hooks/useCalendar';
import { monthsNames } from '../../utils/constants/date.ts';
import { getDecade, getNextMonth } from '../../utils/helpers/date.ts';
import { ArrowButton } from '../ui/ArrowButton.tsx';


export const DateSelector = () => {
	const {
		date,
		setSelectionMode,
		selectionMode,
		setYear,
		setMonth,
	} = useCalendar();

	const handleArrowClick = (offset: 1 | -1) => {
		switch (selectionMode) {
			case 'day': {
				const newDate = getNextMonth(date.year, date.month + offset);

				setMonth(newDate.month);
				setYear(newDate.year);

				break;
			}

			case 'month':
				setYear(date.year + offset);
				break;

			case 'year':
				setYear(date.year + offset * 10);
				break;
		}
	};

	const handleDateClick = () => {
		switch (selectionMode) {
			case 'day':
				setSelectionMode('month');
				break;

			case 'month':
				setSelectionMode('year');
				break;
		}
	};

	const renderDate = () => {
		switch (selectionMode) {
			case 'day':
				return `${monthsNames.long[date.month]}, ${date.year}`;
			case 'month':
				return date.year;
			case 'year':
				return getDecade(date.year).string;
		}
	};

	return (
		<div className="flex items-center bg-[#2b2b2b] gap-2 px-1 py-1.5">
			<div
				className={`py-0.5 pl-1.5 font-medium flex-auto text-left cursor-pointer
				 rounded-md hover:bg-neutral-700`}
				onClick={handleDateClick}
			>
				{renderDate()}
			</div>

			<div className="flex gap-1">
				<ArrowButton left onClick={() => handleArrowClick(-1)}/>
				<ArrowButton onClick={() => handleArrowClick(1)}/>
			</div>
		</div>
	);
};
