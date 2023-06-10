import { useCalendar } from '../../hooks/useCalendar';
import { monthsNames } from '../../utils/constants/date.ts';
import { getDecade } from '../../utils/helpers/date.ts';
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
		if (selectionMode === 'year') {
			setYear(date.year + offset * 10);
		} else if (selectionMode === 'month') {
			setYear(date.year + offset);
		} else {
			setMonth(date.month + offset);
		}
	};

	const handleDateClick = () => {
		if (selectionMode === 'day') {
			setSelectionMode('month');
		} else if (selectionMode === 'month') {
			setSelectionMode('year');
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
