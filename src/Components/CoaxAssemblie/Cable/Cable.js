import React, { useState } from "react";
import CableGrid from "./CableGrid";
import { ProductHeader } from "../../../Styles/ProductStyle";
import { CableDialog } from "./CableDialog";
import { useOpenCableDialog } from "../../../Hooks/useOpenCableDialog";
import {
  Product,
  ProductGrid3,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

function Cable({ ...orders }) {
  const openCableDialog = useOpenCableDialog();
  const [showCableGrid, setShowCableGrid] = useState(true);
  const [currentCable, setCurrentCable] = useState({});

  const updateCurrentCable = (order) => {
    const newCurrentCable = order;
    setCurrentCable(newCurrentCable);
  };

  return (
    <>
      {currentCable && !showCableGrid ? (
        <>
          {" "}
          <ProductHeader>
            <div>
              Geselecteerde Kabel: {currentCable.typenummer} Lengte:{" "}
              {currentCable.cableLength}
            </div>
            <div></div>
            <div />
          </ProductHeader>
          <ProductGrid3>
            <div>
              <Product
                onClick={() => {
                  openCableDialog.setOpenCableDialog(currentCable);
                }}
              >
                {/* <ProductImg img={currentCable.img} /> */}
                <ProductName>
                  <div>{currentCable.typenummer}</div>
                </ProductName>
                <ProductDetails>
                  <div>Artikelnummer: {currentCable.artikelnummer}</div>
                  <div>typenummer: {currentCable.typenummer}</div>
                  <div>merk: {currentCable.merk}</div>
                  <div>lengte: {currentCable.cableLength}</div>
                </ProductDetails>
              </Product>{" "}
            </div>
            <div>
              <Product>
                <button
                  onClick={() => {
                    openCableDialog.setOpenCableDialog(currentCable);
                  }}
                >
                  Wijzig lengte kabel
                </button>
                <button onClick={() => setShowCableGrid(true)}>
                  selecteer een andere kabel
                </button>
              </Product>
            </div>
            <div />
          </ProductGrid3>
        </>
      ) : null}
      <CableDialog
        {...openCableDialog}
        {...orders}
        closeShowCableGrid={() => setShowCableGrid(false)}
        updateCurrentCable={(order) => updateCurrentCable(order)}
      />

      {showCableGrid ? (
        <>
          <ProductHeader active>
            <div>Stap 1: Selecteer een kabel</div>
            <div /> <div />
          </ProductHeader>

          <CableGrid {...openCableDialog} />
        </>
      ) : null}
    </>
  );
}

export default Cable;
