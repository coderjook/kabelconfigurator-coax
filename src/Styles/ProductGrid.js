import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 20px;
  column-gap: 5px;

  padding-bottom: 100px;
`;

export const ProductGrid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 20px;
  column-gap: 5px;

  padding-bottom: 100px;
`;

export const ProductLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export const Product = styled.div`
  width: 90%;

  margin-top: 5px;
  // border-radius: 7px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 1px 0px grey;
  &:hover {
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 5px;
    // filter: contrast(100%);
    box-shadow: 0px 0px 3px 0px grey;
  }
`;

export const ProductImg = styled.div`
  height: 100px;
  // width: 100%;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
`;

export const ProductName = styled.div`
  // position: absolute;
  color: #212121;
  font-size: 18px;
  //background-color: green;
  padding: 5px;
  width: 100%;
`;

export const ProductDetails = styled.div`
  // position: absolute;
  padding: 5px;
  color: #6a6a6a;
  font-size: 14px;
  font-weight: 400;
`;
