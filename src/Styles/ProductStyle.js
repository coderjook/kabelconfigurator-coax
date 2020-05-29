import styled from "styled-components";
import { romalBlauw, romalLichtBlauw } from "./colors";

export const ProductHeader = styled.div`
  display: grid;
  background-color: ${romalLichtBlauw};
  color: grey;
  grid-template-columns: 2fr 1fr 1fr;
  justify-items: start;
  row-gap: 20px;
  // column-gap: 5px;
  padding: 15px 10px 15px 20px;
  margin-bottom: 10px;
  font-size: 25px;
  ${({ active }) =>
    active
      ? `
    background-color: ${romalBlauw};
    color: white;
    &:hover {
      cursor: pointer;
      
    }
  `
      : `
    pointer-events: none; 
  `}
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: start;
  row-gap: 20px;
  // column-gap: 5px;
  padding: 15px 10px 15px 20px;
  margin-bottom: 10px;
  font-size: 18px;
`;
