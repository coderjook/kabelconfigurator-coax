import React, { useState } from "react";
import { ProductHeader, ProductStyled } from "../../../Styles/ProductStyle";
import { ConnectorDialog } from "./ConnectorDialog";
import ConnectorGrid from "./ConnectorGrid";
import { useOpenConnectorDialog } from "../../../Hooks/useOpenConnectorDialog";
import { ChangeButton } from "../../../Styles/ButtonStyle";
import {
  Product,
  ProductGrid3,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

function Connector({ ...orders }) {
  const openConnectorDialog = useOpenConnectorDialog();
  const [showConnectorGrid, setShowConnectorGrid] = useState(true);
  const [currentConnectorA, setCurrentConnectorA] = useState({});

  const updateCurrentConnectorA = (order) => {
    const newCurrentConnectorA = order;
    setCurrentConnectorA(newCurrentConnectorA);
  };

  return (
    <>
      {currentConnectorA && !showConnectorGrid ? (
        <>
          {" "}
          <ProductHeader>
            <div>Geselecteerde connector: {currentConnectorA.typenummer}</div>
            <div></div>
            <div />
          </ProductHeader>
          <ProductStyled>
            <ProductGrid3>
              <div>
                <Product
                  onClick={() => {
                    openConnectorDialog.setOpenConnectorDialog(
                      currentConnectorA
                    );
                  }}
                >
                  {/* <ProductImg img={currentConnectorA.img} /> */}
                  <ProductName>
                    <div>{currentConnectorA.typenummer}</div>
                  </ProductName>
                  <ProductDetails>
                    <div>Artikelnummer: {currentConnectorA.artikelnummer}</div>
                    <div>typenummer: {currentConnectorA.typenummer}</div>
                    <div>afwerking: {currentConnectorA.installation}</div>
                    <div>
                      {currentConnectorA.tule
                        ? `${currentConnectorA.tule}`
                        : null}
                    </div>
                  </ProductDetails>
                </Product>
              </div>
              <div>
                <Product>
                  <ChangeButton
                    onClick={() => {
                      openConnectorDialog.setOpenConnectorDialog(
                        currentConnectorA
                      );
                    }}
                  >
                    Wijzig connector afwerking
                  </ChangeButton>
                  <ChangeButton onClick={() => setShowConnectorGrid(true)}>
                    selecteer een andere connector
                  </ChangeButton>
                </Product>
              </div>
              <div />
            </ProductGrid3>
          </ProductStyled>
        </>
      ) : null}
      <ConnectorDialog
        {...openConnectorDialog}
        {...orders}
        closeShowConnectorGrid={() => setShowConnectorGrid(false)}
        updateCurrentConnectorA={(order) => updateCurrentConnectorA(order)}
        connector="connA"
      />
      {showConnectorGrid ? (
        <>
          <ProductHeader active>
            <div>Stap 2: Selecteer een connector voor kant A</div>
            <div /> <div />
          </ProductHeader>
          <ConnectorGrid {...openConnectorDialog} {...orders} />
        </>
      ) : null}
    </>
  );
}

export default Connector;
