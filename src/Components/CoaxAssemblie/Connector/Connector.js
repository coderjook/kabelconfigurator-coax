import React, { useState } from "react";
import { ProductHeader } from "../../../Styles/ProductStyle";
import { ConnectorDialog } from "./ConnectorDialog";
import ConnectorGrid from "./ConnectorGrid";
import { useOpenConnectorDialog } from "../../../Hooks/useOpenConnectorDialog";

function Connector({ ...orders }) {
  const openConnectorDialog = useOpenConnectorDialog();
  const [showConnectorGrid, setShowConnectorGrid] = useState(true);
  const [connectorHeader, setConnectorHeader] = useState();

  return (
    <>
      {connectorHeader ? (
        <>
          {" "}
          <ProductHeader>
            <div>Geselecteerde connector: {connectorHeader}</div>
            <div>
              <button onClick={() => setShowConnectorGrid(true)}>
                selecteer een andere connector
              </button>{" "}
            </div>
            <div />
          </ProductHeader>
        </>
      ) : (
        <ProductHeader>
          <div>Stap 2: Selecteer een connector voor kant A</div>
          <div /> <div />
        </ProductHeader>
      )}
      <ConnectorDialog
        {...openConnectorDialog}
        {...orders}
        closeShowConnectorGrid={() => setShowConnectorGrid(false)}
        selectedConnector={(connectorName) => setConnectorHeader(connectorName)}
        connector="connA"
      />
      {showConnectorGrid ? (
        <ConnectorGrid {...openConnectorDialog} {...orders} />
      ) : null}
    </>
  );
}

export default Connector;
