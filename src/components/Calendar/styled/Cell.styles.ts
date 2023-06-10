import styled, { css } from 'styled-components';


interface CellProps {
	colored?: boolean;
	size?: 'medium' | 'large';
}

export const Cell = styled.li<CellProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  ${({ colored }) => colored && css`color: #bfd7ff;`}
  ${({ size }) => size === 'large'
          ? css`
            width: 105px;
            height: 60px;
            border-radius: 0.5rem
          `
          : css`
            width: 40px;
            height: 40px;
          `}
`;

interface ClickableCellProps {
	selected?: boolean;
	dimmed?: boolean;
}

export const ClickableCell = styled(Cell)<CellProps & ClickableCellProps>`
  cursor: pointer;

  ${({ dimmed }) => dimmed && css`opacity: 0.2;`}
  ${({ selected }) => selected && css`background-color: #6289d2;`}
  &:hover {
    background-color: #6289d2;
  }
`;
