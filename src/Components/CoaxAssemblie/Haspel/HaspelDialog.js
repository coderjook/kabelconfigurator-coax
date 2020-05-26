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

export function getPrice(order) {
  return order.length * order.inkoopprijs;
}

function HaspelDialogContainer({
  openHaspelDialog,
  setOpenHaspelDialog,
  closeShowHaspelGrid,
  selectedHaspel,
  setOrders,
  orders,
}) {
  const isEditing = openHaspelDialog.index > -1;

  function close() {
    setOpenHaspelDialog();
  }

  const order = {
    assemblieItem: "haspel",
    ...openHaspelDialog,
  };

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openHaspelDialog.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    close();
    selectedHaspel(openHaspelDialog.typenummer);
    closeShowHaspelGrid();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openHaspelDialog.img}>
          <DialogBannerName> {openHaspelDialog.typenummer} </DialogBannerName>
          <DialogBannerName> {openHaspelDialog.kabelgroep} </DialogBannerName>
        </DialogBanner>
        <DialogContent>hier kom info over haspel</DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={isEditing ? editOrder : addToOrder}>
            {isEditing ? "wijzig haspel" : "selecteer de haspel"}{" "}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
          {/* <ConfirmButton onClick={addToOrder}>selecteer de kabel</ConfirmButton> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function HaspelDialog(props) {
  if (!props.openHaspelDialog) return null;
  return <HaspelDialogContainer {...props} />;
}
