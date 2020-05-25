import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogShadow,
  DialogBanner,
  DialogBannerName,
  ConfirmButton,
} from "../../../Styles/DialogStyle";
import { formatPrice } from "../../../Data/CableData";
import { CableLengthInput } from "./CableLengthInput";
import { useLength } from "../../../Hooks/useLength";

export function getPrice(order) {
  return order.length * order.inkoopprijs;
}

function CableDialogContainer({
  openCableDialog,
  setOpenCableDialog,
  closeShowCableGrid,
  selectedCable,
  setOrders,
  orders,
}) {
  const Cablelength = useLength(openCableDialog && openCableDialog.Cablelength);

  const isEditing = openCableDialog.index > -1;

  function close() {
    setOpenCableDialog();
  }

  const order = {
    ...openCableDialog,
    Cablelength: Cablelength.value,
  };

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openCableDialog.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    close();
    selectedCable(openCableDialog.typenummer);
    closeShowCableGrid();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openCableDialog.img}>
          <DialogBannerName> {openCableDialog.typenummer} </DialogBannerName>
          <DialogBannerName> {openCableDialog.kabelgroep} </DialogBannerName>
        </DialogBanner>
        <DialogContent>
          hier kom lengte
          <CableLengthInput Cablelength={Cablelength} />
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={isEditing ? editOrder : addToOrder}>
            {isEditing ? "wijzig kabel" : "selecteer de kabel"}{" "}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
          {/* <ConfirmButton onClick={addToOrder}>selecteer de kabel</ConfirmButton> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function CableDialog(props) {
  if (!props.openCableDialog) return null;
  return <CableDialogContainer {...props} />;
}
