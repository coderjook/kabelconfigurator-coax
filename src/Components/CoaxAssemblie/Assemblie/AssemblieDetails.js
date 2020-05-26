import React, { useContext } from "react";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";

function AssemblieDetails() {
  // get the selectedAssemblie form the assemblieContext
  const { selectedAssemblie } = useContext(AssemblieContext);

  return (
    <>
      <div>Assemblie:</div>
      {selectedAssemblie ? (
        <>
          <div>assemblieID: {selectedAssemblie.assemblieID} </div>
          <div>artnr_kabel :{selectedAssemblie.artnr_kabel}</div>
          <div>lengte_kabel : {selectedAssemblie.lengte_kabel} </div>
          <div>artnr_connector_a: {selectedAssemblie.artnr_connector_a} </div>
          <div>artnr_afwerking_a: {selectedAssemblie.artnr_afwerking_a} </div>
          <div>artnr_connector_b: {selectedAssemblie.artnr_connector_b} </div>
          <div>artnr_afwerking_b: {selectedAssemblie.artnr_afwerking_b} </div>
          <div>artnr_haspel: {selectedAssemblie.artnr_haspel} </div>
          <div>trans_krimp: {selectedAssemblie.trans_krimp} </div>
          <div>lengte_trans_krimp: {selectedAssemblie.lengte_trans_krimp} </div>
        </>
      ) : (
        <p>selecteer een kabel </p>
      )}
    </>
  );
}

export default AssemblieDetails;
