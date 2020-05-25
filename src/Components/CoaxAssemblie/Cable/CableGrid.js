import React from "react";
import styled from "styled-components";
import { cables } from "../../../Data/CableData";
import {
  Product,
  ProductGrid,
  ProductLabel,
} from "../../../Styles/ProductGrid";
import { formatPrice } from "../../../Data/CableData";

const ProductStyled = styled.div`
  margin: 0px 400px 50px 20px;
`;

function CableGrid({ setOpenCableDialog }) {
  return (
    <ProductStyled>
      {Object.entries(cables).map(([sectionName, cables]) => (
        <>
          <h3> {sectionName} </h3>
          <ProductGrid>
            {cables.map((cable) => (
              <Product
                img={cable.img}
                onClick={() => {
                  setOpenCableDialog(cable);
                }}
              >
                <ProductLabel>
                  <div>{cable.typenummer}</div>
                  <div>{formatPrice(cable.inkoopprijs)}</div>
                </ProductLabel>
              </Product>
            ))}
          </ProductGrid>
        </>
      ))}
    </ProductStyled>
  );
}

export default CableGrid;
