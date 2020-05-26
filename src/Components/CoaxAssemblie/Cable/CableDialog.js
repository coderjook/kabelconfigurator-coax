import React, { useContext } from "react";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogShadow,
  DialogBanner,
  DialogBannerName,
  ConfirmButton,
} from "../../../Styles/DialogStyle";
import { formatPrice } from "../../../Utils/FormatPrice";
import { CableLengthInput } from "./CableLengthInput";
import { useLength } from "../../../Hooks/useLength";

function CableDialogContainer({
  openCableDialog,
  setOpenCableDialog,
  closeShowCableGrid,
  selectedCable,
  setOrders,
  orders,
}) {
  const cableLength = useLength(openCableDialog && openCableDialog.cablelength);
  const { addNewAssemblie } = useContext(AssemblieContext);

  const isEditing = openCableDialog.index > -1;

  function close() {
    setOpenCableDialog();
  }

  const order = {
    assemblieItem: "cable",
    ...openCableDialog,
    cableLength: cableLength.value,
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
    addNewAssemblie(openCableDialog.typenummer, cableLength.value);
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
          <CableLengthInput cableLength={cableLength} />
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={isEditing ? editOrder : addToOrder}>
            {isEditing ? "wijzig kabel" : "selecteer de kabel"}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function CableDialog(props) {
  if (!props.openCableDialog) return null;
  return <CableDialogContainer {...props} />;
}
