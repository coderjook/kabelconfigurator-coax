import React, { useState } from "react";
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
          <h1>{connectorHeader}</h1>
          <button onClick={() => setShowConnectorGrid(true)}>
            wijzig connector
          </button>{" "}
        </>
      ) : (
        <h1>Stap 3: Selecteer een connector kant B</h1>
      )}
      <ConnectorDialog
        {...openConnectorDialog}
        {...orders}
        closeShowConnectorGrid={() => setShowConnectorGrid(false)}
        selectedConnector={(connectorName) => setConnectorHeader(connectorName)}
        connector="connB"
      />
      {showConnectorGrid ? (
        <ConnectorGrid {...openConnectorDialog} {...orders} />
      ) : null}
    </>
  );
}

export default Connector;
