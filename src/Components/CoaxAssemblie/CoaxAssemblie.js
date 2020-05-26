import React from "react";
import { AssemblieContextProvider } from "../../Hooks/Context/AssemblieContext";
import Cable from "./Cable/Cable";
import Connector from "./Connector/Connector";
import ConnectorB from "./Connector/ConnectorB";
import Haspel from "./Haspel/Haspel";
import Finish from "./Finish/Finish";
import { Order } from "./Order/Order";
import { useOrders } from "../../Hooks/useOrders";
import User from "./Assemblie/User";

function CoaxAssemblie() {
  const assemblies = [];
  const orders = useOrders();
  return (
    <>
      <AssemblieContextProvider assemblies={assemblies}>
        <div>
          <Order {...orders} />
        </div>
        <Cable {...orders} />
        <Connector {...orders} />
        <ConnectorB {...orders} />
        <Haspel {...orders} />
        <Finish />
        <User />
      </AssemblieContextProvider>
    </>
  );
}

export default CoaxAssemblie;
