import { FC, useMemo } from 'react';

import { useCalendar } from '../../../hooks/useCalendar';
import { getDecade } from '../../../utils/helpers/date';
import { ClickableCell } from '../styled/Cell.styles';
import { Table } from '../styled/Table.styles';


export const YearsTable: FC = () => {
	const { date, setYear, setSelectionMode, selectedDate } = useCalendar();

	const years = useMemo(() => {
		const result = [];
		const decade = getDecade(date.year);

		const handleClick = (newYear: number) => {
			setYear(newYear);
			setSelectionMode('month');
		};

		result.push(
			<ClickableCell
				dimmed key={decade.prev} size="large"
				onClick={() => handleClick(decade.prev)}
			>
				{decade.prev}
			</ClickableCell>,
		);

		for (let i = decade.start; i < decade.end; i++) {
			result.push(
				<ClickableCell
					key={i}
					selected={i === selectedDate.year}
					size="large"
					onClick={() => handleClick(i)}
				>
					{i}
				</ClickableCell>,
			);
		}

		result.push(
			<ClickableCell
				dimmed
				key={decade.end}
				size="large"
				onClick={() => handleClick(decade.end)}
			>
				{decade.end}
			</ClickableCell>,
		);

		return result;
	}, [date.year, setYear, setSelectionMode, selectedDate.year]);

	return <Table>{years}</Table>;
};
