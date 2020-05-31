import React, { useState } from "react";
import { ProductHeader, ProductStyled } from "../../../Styles/ProductStyle";
import { useToggleContent } from "../../../Hooks/useToggleContent";
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
  const toggleContent = useToggleContent();
  const openConnectorDialog = useOpenConnectorDialog();
  const [showConnectorGrid, setShowConnectorGrid] = useState(true);
  const [currentConnectorB, setCurrentConnectorB] = useState({});

  const updateCurrentConnectorB = (order) => {
    const newCurrentConnectorB = order;
    setCurrentConnectorB(newCurrentConnectorB);
  };

  return (
    <>
      {currentConnectorB && !showConnectorGrid ? (
        <>
          {" "}
          <ProductHeader onClick={toggleContent.toggleShowContent}>
            <div>Geselecteerde connector: {currentConnectorB.typenummer}</div>
            <div></div>
            <div />
          </ProductHeader>
          {toggleContent.toggleContent ? (
            <ProductStyled>
              <ProductGrid3>
                <div>
                  <Product
                    onClick={() => {
                      openConnectorDialog.setOpenConnectorDialog(
                        currentConnectorB
                      );
                    }}
                  >
                    {/* <ProductImg img={currentConnectorB.img} /> */}
                    <ProductName>
                      <div>{currentConnectorB.typenummer}</div>
                    </ProductName>
                    <ProductDetails>
                      <div>
                        Artikelnummer: {currentConnectorB.artikelnummer}
                      </div>
                      <div>typenummer: {currentConnectorB.typenummer}</div>
                      <div>afwerking: {currentConnectorB.installation}</div>
                      <div>
                        {currentConnectorB.tule
                          ? `${currentConnectorB.tule}`
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
                          currentConnectorB
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
          ) : null}
        </>
      ) : null}
      <ConnectorDialog
        {...openConnectorDialog}
        {...orders}
        closeShowConnectorGrid={() => setShowConnectorGrid(false)}
        updateCurrentConnectorB={(order) => updateCurrentConnectorB(order)}
        connector="connB"
      />
      {showConnectorGrid ? (
        <>
          <ProductHeader active>
            <div>Stap 3: Selecteer een connector voor kant B</div>
            <div /> <div />
          </ProductHeader>
          <ConnectorGrid {...openConnectorDialog} {...orders} />
        </>
      ) : null}
    </>
  );
}

export default Connector;
