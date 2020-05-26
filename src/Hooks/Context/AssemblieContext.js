import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = (props) => {
  // Initial values are obtained from the props
  const {
    assemblies: initialAssemblies,
    selectedAssemblie: initialSelectedAssemblie,
    children,
  } = props;

  // Use State to keep the values
  const [assemblies, setAssemblies] = useState(initialAssemblies);
  const [selectedAssemblie, setSelectedAssemblie] = useState(
    initialSelectedAssemblie
  );

  const defaultArtnr = 999999;
  const addNewAssemblie = (artnrCable, lengthCable) => {
    const newAssemblie = {
      assemblieID: new Date().getTime().toString(),
      artnr_kabel: artnrCable,
      lengte_kabel: lengthCable,
      artnr_connector_a: defaultArtnr,
      artnr_afwerking_a: defaultArtnr,
      artnr_connector_b: defaultArtnr,
      artnr_afwerking_b: defaultArtnr,
      artnr_haspel: defaultArtnr,
      trans_krimp: "geen afwerking",
      lengte_trans_krimp: 2,
      artnr_trans_krimp: 10593,
    };
    setAssemblies(newAssemblie);
    setSelectedAssemblie(newAssemblie);
  };

  const UpdateAssemblieConnA = (ArtnrConnA, InstallConnA) => {
    const updateAssemblie = {
      ...assemblies,
    };
    updateAssemblie.artnr_connector_a = ArtnrConnA;
    updateAssemblie.artnr_afwerking_a = InstallConnA;

    setAssemblies(updateAssemblie);
    setSelectedAssemblie(updateAssemblie);
  };

  const UpdateAssemblieConnB = (ArtnrConnB, InstallConnB) => {
    const updateAssemblie = {
      ...assemblies,
    };
    updateAssemblie.artnr_connector_b = ArtnrConnB;
    updateAssemblie.artnr_afwerking_b = InstallConnB;

    setAssemblies(updateAssemblie);
    setSelectedAssemblie(updateAssemblie);
  };

  const UpdateAssemblieHaspel = (ArtnrHaspel) => {
    const updateAssemblie = {
      ...assemblies,
    };
    updateAssemblie.artnr_haspel = ArtnrHaspel;
    setAssemblies(updateAssemblie);
    setSelectedAssemblie(updateAssemblie);
  };

  // Make the context object:
  const assemblieContext = {
    assemblies,
    setAssemblies,
    selectedAssemblie,
    setSelectedAssemblie,
    addNewAssemblie,
    UpdateAssemblieConnA,
    UpdateAssemblieConnB,
    UpdateAssemblieHaspel,
  };

  // pass the value in provider and return
  return (
    <Context.Provider value={assemblieContext}>{children}</Context.Provider>
  );
};

export const { Consumer } = Context;

export {
  Context as AssemblieContext,
  Provider as AssemblieContextProvider,
  Consumer as AssemblieContextConsumer,
};
