import React from "react";
import styled from "styled-components";
import { connectors } from "../../../Data/ConnectorData";
import {
  Product,
  ProductGrid,
  ProductLabel,
} from "../../../Styles/ProductGrid";
import { formatPrice } from "../../../Data/ConnectorData";

const ProductStyled = styled.div`
  margin: 0px 400px 50px 20px;
`;

function ConnectorGrid({ setOpenConnectorDialog, orders }) {
  let orderKabelgroep = null;
  if (orders.length === 0) {
    orderKabelgroep = null;
  } else {
    console.log("connkabelgroep ", orders[0].kabelgroep);
    orderKabelgroep = orders[0].kabelgroep;
  }
  console.log("orders:connector-kabelgroep ", orderKabelgroep);

  return (
    <ProductStyled>
      {orderKabelgroep}
      {Object.entries(connectors).map(([kabelgroep, connectors]) =>
        kabelgroep === orderKabelgroep ? (
          <>
            <h3> {kabelgroep} </h3>
            <ProductGrid>
              {connectors.map((connector) => (
                <>
                  <Product
                    img={connector.img}
                    onClick={() => {
                      setOpenConnectorDialog(connector);
                    }}
                  >
                    <ProductLabel>
                      <div>{connector.typenummer}</div>
                      <div>{formatPrice(connector.inkoopprijs)}</div>
                    </ProductLabel>
                  </Product>
                </>
              ))}
            </ProductGrid>
          </>
        ) : null
      )}
    </ProductStyled>
  );
}

export default ConnectorGrid;
