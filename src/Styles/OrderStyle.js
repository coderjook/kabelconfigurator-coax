import styled from "styled-components";
import { DialogContent } from "./DialogStyle";

export const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
export const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

export const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #F58020;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

export const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;
