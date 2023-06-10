import { FC } from 'react';

import { useCalendar } from '../../../hooks/useCalendar.ts';

import { DaysTable } from './DaysTable.tsx';
import { MonthsTable } from './MonthsTable.tsx';
import { YearsTable } from './YearsTable.tsx';


export const RenderTable: FC = () => {
	const { selectionMode } = useCalendar();

	return (
		<>
			{selectionMode === 'day' && <DaysTable/>}
			{selectionMode === 'month' && <MonthsTable/>}
			{selectionMode === 'year' && <YearsTable/>}
		</>
	);
};