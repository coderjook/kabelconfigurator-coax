import React, { useState } from "react";
import CableGrid from "./CableGrid";
import { CableDialog } from "./CableDialog";
import { useOpenCableDialog } from "../../../Hooks/useOpenCableDialog";

function Cable({ ...orders }) {
  const openCableDialog = useOpenCableDialog();
  const [showCableGrid, setShowCableGrid] = useState(true);
  const [cableHeader, setCableHeader] = useState();
  return (
    <>
      {cableHeader ? (
        <>
          {" "}
          <h1>{cableHeader}</h1>
          <button onClick={() => setShowCableGrid(true)}>
            wijzig kabel
          </button>{" "}
        </>
      ) : (
        <h1>Stap 1: Selecteer een kabel</h1>
      )}
      <CableDialog
        {...openCableDialog}
        {...orders}
        closeShowCableGrid={() => setShowCableGrid(false)}
        selectedCable={(cableName) => setCableHeader(cableName)}
      />
      {showCableGrid ? <CableGrid {...openCableDialog} /> : null}
    </>
  );
}

export default Cable;
