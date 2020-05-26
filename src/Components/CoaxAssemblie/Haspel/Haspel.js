import React, { useState } from "react";
import HaspelGrid from "./HaspelGrid";
import { HaspelDialog } from "./HaspelDialog";
import { useOpenHaspelDialog } from "../../../Hooks/useOpenHaspelDialog";

function Haspel({ ...orders }) {
  const openHaspel = useOpenHaspelDialog();
  const [showHaspelGrid, setShowHaspelGrid] = useState(true);
  const [haspelHeader, setHaspelHeader] = useState();
  return (
    <>
      <p>haspelgeschikt: {orders.haspelgeschikt}</p>
      {haspelHeader ? (
        <>
          {" "}
          <h1>{haspelHeader}</h1>
          <button onClick={() => setShowHaspelGrid(true)}>
            wijzig haspel
          </button>{" "}
        </>
      ) : (
        <h1>Stap 4: Selecteer een Haspel</h1>
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
