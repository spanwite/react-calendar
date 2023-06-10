import { FC } from 'react';

import { useCalendar } from '../../../hooks/useCalendar';
import { monthsNames } from '../../../utils/constants/date';
import { ClickableCell } from '../styled/Cell.styles';
import { Table } from '../styled/Table.styles';


export const MonthsTable: FC = () => {
	const { date, setMonth, setSelectionMode, selectedDate } = useCalendar();

	const handleClick = (month: number) => {
		setSelectionMode('day');
		setMonth(month);
	};

	return (
		<Table>
			{monthsNames.short.map((name, index) => (
				<ClickableCell
					size="large"
					key={name}
					selected={index === selectedDate.month && selectedDate.year === date.year}
					onClick={() => handleClick(index)}
				>
					{name}
				</ClickableCell>
			))}
		</Table>
	);
};
