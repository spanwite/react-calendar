import styled from 'styled-components';


interface TableProps {
	columns?: number;
}

export const Table = styled.ul<TableProps>`
  padding: 0.25rem;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, minmax(0, 1fr));
  gap: 0.5rem;
  background-color: #2b2b2b;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
`;
