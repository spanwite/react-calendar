/* eslint-disable */

import { FC } from 'react';


interface ArrowButtonProps {
	left?: boolean;
	onClick?: () => void;
}

export const ArrowButton: FC<ArrowButtonProps> = ({ onClick, left }) => {

	return (
		<button
			className={`w-[32px] h-[32px] rounded-md flex items-center justify-center
			 hover:bg-neutral-700`}
			onClick={onClick}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				 fill="none"
				 stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
				 className={left ? 'rotate-180' : ''}
			>
				<polyline points="9 18 15 12 9 6"/>
			</svg>
		</button>
	);
};