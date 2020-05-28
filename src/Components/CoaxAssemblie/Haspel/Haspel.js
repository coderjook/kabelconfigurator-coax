import React, { useState } from "react";
import { ProductHeader } from "../../../Styles/ProductStyle";
import HaspelGrid from "./HaspelGrid";
import { HaspelDialog } from "./HaspelDialog";
import { useOpenHaspelDialog } from "../../../Hooks/useOpenHaspelDialog";

function Haspel({ ...orders }) {
  const openHaspel = useOpenHaspelDialog();
  const [showHaspelGrid, setShowHaspelGrid] = useState(true);
  const [haspelHeader, setHaspelHeader] = useState();
  return (
    <>
      {haspelHeader ? (
        <>
          {" "}
          <ProductHeader>
            <div>Geselecteerde haspel: {haspelHeader}</div>
            <div>
              <button onClick={() => setShowHaspelGrid(true)}>
                selecteer een andere haspel
              </button>{" "}
            </div>
            <div />
          </ProductHeader>
        </>
      ) : (
        <ProductHeader>
          <div>Stap 4: Selecteer afwerking: Haspel of Gebonden</div>
          <div /> <div />
        </ProductHeader>
      )}
      <HaspelDialog
        {...openHaspel}
        {...orders}
        closeShowHaspelGrid={() => setShowHaspelGrid(false)}
        selectedHaspel={(haspelName) => setHaspelHeader(haspelName)}
      />
      {showHaspelGrid ? <HaspelGrid {...openHaspel} /> : null}
    </>
  );
}

export default Haspel;
