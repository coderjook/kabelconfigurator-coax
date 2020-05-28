import React, { useState } from "react";
import CableGrid from "./CableGrid";
import { ProductHeader } from "../../../Styles/ProductStyle";
import { CableDialog } from "./CableDialog";
import { useOpenCableDialog } from "../../../Hooks/useOpenCableDialog";
import {
  Product,
  ProductImg,
  ProductGrid3,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

function Cable({ ...orders }) {
  const openCableDialog = useOpenCableDialog();
  const [showCableGrid, setShowCableGrid] = useState(true);
  const [cableHeader, setCableHeader] = useState();
  const [currentCable, setCurrentCable] = useState(
    "artikelnummer",
    "typenummer",
    "merk",
    "lengte"
  );

  const updateCurrentCable = (artikelnummer, typenummer, merk, lengte, img) => {
    const newCurrentCable = {
      artikelnummer: artikelnummer,
      typenummer: typenummer,
      merk: merk,
      lengte: lengte,
      img: img,
    };
    setCurrentCable(newCurrentCable);
    console.log("merk", currentCable.merk);
  };

  const headerActive = showCableGrid ? "active" : "";
  console.log("headeractive: ", { headerActive }, "showCablegrid: ", {
    showCableGrid,
  });

  return (
    <>
      {cableHeader ? (
        <>
          {" "}
          <ProductHeader as={`${headerActive}`}>
            <div>Geselecteerde Kabel: {cableHeader}</div>
            <div></div>
            <div />
          </ProductHeader>
          <ProductGrid3>
            <div>
              <Product
              //   onClick={() => {
              //   setOpenCableDialog(cable);
              // }}
              >
                <ProductImg img={currentCable.img} />
                <ProductName>
                  <div>{currentCable.typenummer}</div>
                </ProductName>
                <ProductDetails>
                  <div>Artikelnummer: {currentCable.artikelnummer}</div>
                  <div>typenummer: {currentCable.typenummer}</div>
                  <div>merk: {currentCable.merk}</div>
                  <div>lengte: {currentCable.lengte}</div>
                </ProductDetails>
              </Product>{" "}
            </div>
            <div>
              <button onClick={() => setShowCableGrid(true)}>
                selecteer een andere kabel
              </button>{" "}
            </div>
            <div></div>
          </ProductGrid3>
        </>
      ) : (
        <ProductHeader active>
          <div>Stap 1: Selecteer een kabel</div>
          <div /> <div />
        </ProductHeader>
      )}
      <CableDialog
        {...openCableDialog}
        {...orders}
        closeShowCableGrid={() => setShowCableGrid(false)}
        selectedCable={(cableName) => setCableHeader(cableName)}
        updateCurrentCable={(artikelnummer, typenummer, merk, lengte, img) =>
          updateCurrentCable(artikelnummer, typenummer, merk, lengte, img)
        }
      />
      {showCableGrid ? <CableGrid {...openCableDialog} /> : null}

      {/* <ProductGrid3>
        <div>
          <Product
          //   onClick={() => {
          //   setOpenCableDialog(cable);
          // }}
          >
            <ProductImg img={currentCable.img} />
            <ProductName>
              <div>{currentCable.typenummer}</div>
            </ProductName>
            <ProductDetails>
              <div>Artikelnummer: {currentCable.artikelnummer}</div>
              <div>typenummer: {currentCable.typenummer}</div>
              <div>merk: {currentCable.merk}</div>
              <div>lengte: {currentCable.lengte}</div>
            </ProductDetails>
          </Product>{" "}
        </div>
        <div>
          <button onClick={() => setShowCableGrid(true)}>
            selecteer een andere kabel
          </button>{" "}
        </div>
        <div></div>
      </ProductGrid3> */}
    </>
  );
}

export default Cable;
