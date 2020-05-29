import React, { useState } from "react";
import { ProductHeader } from "../../../Styles/ProductStyle";
import { ConnectorDialog } from "./ConnectorDialog";
import ConnectorGrid from "./ConnectorGrid";
import { useOpenConnectorDialog } from "../../../Hooks/useOpenConnectorDialog";

function Connector({ ...orders }) {
  const openConnectorDialog = useOpenConnectorDialog();
  const [showConnectorGrid, setShowConnectorGrid] = useState(true);
  const [connectorHeader, setConnectorHeader] = useState();
  const [currentConnectorA, setCurrentConnectorA] = useState({});

  const updateCurrentConnectorA = (order) => {
    const newCurrentConnector = order;
    setCurrentConnectorA(newCurrentConnector);
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
          <div>
            <button onClick={() => setShowConnectorGrid(true)}>
              selecteer een andere connector
            </button>{" "}
          </div>
        </>
      ) : null}
      <ConnectorDialog
        {...openConnectorDialog}
        {...orders}
        closeShowConnectorGrid={() => setShowConnectorGrid(false)}
        updateCurrentConnectorA={(order) => updateCurrentConnectorA(order)}
        // selectedConnector={(connectorName) => setConnectorHeader(connectorName)}
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
      ) : (
        <>
          <ProductHeader>
            <div>Stap 2: Selecteer een connector voor kant A</div>
            <div /> <div />
          </ProductHeader>
        </>
      )}

      {/* {!currentConnectorA && !showConnectorGrid ? (
        <>
          <ProductHeader>
            <div>Stap 2: Selecteer een connector voor kant A</div>
            <div /> <div />
          </ProductHeader>
        </>
      ) : null} */}
    </>
  );
}

export default Connector;
