import styled from "styled-components";
import { romalOranje } from "../Styles/colors";
import { romalBlauw } from "../Styles/colors";

export const ConfirmButton = styled.button`
  margin: 10px;
  color: white;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${romalOranje};
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    background-color: grey;
    pointer-events: none;
   `}
`;

export const ChangeButton = styled.button`
  margin: 10px;
  color: white;
  padding: 10px;
  text-align: center;
  width: 300px;
  cursor: pointer;
  background-color: ${romalBlauw};
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    background-color: grey;
    pointer-events: none;
   `}
`;
