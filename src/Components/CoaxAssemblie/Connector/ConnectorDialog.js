import React, { useState } from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogShadow,
  DialogBanner,
  DialogBannerName,
  ConfirmButton,
} from "../../../Styles/DialogStyle";
import Tules from "./Tules";
import { formatPrice } from "../../../Data/ConnectorData";
import { useInstallation } from "../../../Hooks/useInstallation";

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
  ${CursorPointer}
`;

const Label = styled.label`
  ${CursorPointer}
`;

export function getPrice(order) {
  return order.inkoopprijs;
}

function ConnectorDialogContainer({
  closeShowConnectorGrid,
  selectedConnector,
  openConnectorDialog,
  setOpenConnectorDialog,
  setOrders,
  orders,
}) {
  const installationRadio = useInstallation();
  const isEditing = openConnectorDialog.index > -1;
  const [tuleState, setTuleState] = useState();

  const tuleOrder = tuleState ? `${tuleState}` : null;

  function close() {
    setOpenConnectorDialog();
  }

  console.log({ tuleOrder });

  const order = {
    ...openConnectorDialog,
    installation: installationRadio.value,
    tule: tuleOrder,
  };

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openConnectorDialog.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    selectedConnector(openConnectorDialog.typenummer);
    closeShowConnectorGrid();
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openConnectorDialog.img}>
          <DialogBannerName>{openConnectorDialog.typenummer}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          {/* {openConnector.tulegroep} */}

          <h3> Kies de afwerking:</h3>
          <RadioInput
            type="radio"
            id="geen"
            name="geen"
            value="geen"
            checked={installationRadio.value === "geen"}
            onChange={installationRadio.onChange}
          />
          <Label for="geen">geen afwerking</Label>
          <RadioInput
            type="radio"
            id="krimpkous"
            name="krimpkous"
            value="krimpkous"
            checked={installationRadio.value === "krimpkous"}
            onChange={installationRadio.onChange}
          />
          <Label for="krimpkous">zwarte krimpkous</Label>
          <RadioInput
            type="radio"
            id="tule"
            name="tule"
            value="tule"
            checked={installationRadio.value === "tule"}
            onChange={installationRadio.onChange}
          />
          <Label for="tule">tule</Label>

          {installationRadio.value === "tule" ? (
            <>
              <div>tule: {tuleState}</div>
              <Tules
                tulegroep={openConnectorDialog.tulegroep}
                onChange={(banaan) => setTuleState(banaan)}
                tuleOrder={tuleState}
              />
            </>
          ) : null}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={isEditing ? editOrder : addToOrder}>
            {isEditing ? "update order" : "add to order"}{" "}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function ConnectorDialog(props) {
  if (!props.openConnectorDialog) return null;
  return <ConnectorDialogContainer {...props} />;
}
