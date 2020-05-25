import React from "react";

import { DialogFooter, ConfirmButton } from "../../../Styles/DialogStyle";
import {
  OrderStyled,
  OrderContent,
  OrderContainer,
  OrderItem,
  DetailItem,
} from "../../../Styles/OrderStyle";

import { formatPrice } from "../../../Data/CableData";
import { getPrice } from "../Cable/CableDialog";
import Assemblie from "../../CoaxAssemblie/Assemblie/Assemblie";

export function Order({
  setOpenCableDialog,
  orders,
  setOrders,
  setOpenConnector,
}) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <>
      <OrderStyled>
        <Assemblie />
        {orders.length === 0 ? (
          <OrderContent>geen assemblie geconfigureerd</OrderContent>
        ) : (
          <OrderContent>
            {" "}
            <OrderContainer>Jouw assemblie:</OrderContainer> {""}
            {orders.map((order, index) => (
              <OrderContainer editable>
                <OrderItem
                  onClick={() => {
                    setOpenCableDialog({ ...order, index });
                  }}
                >
                  <div>{order.length}</div>
                  <div>{order.typenummer}</div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteItem(index);
                    }}
                  >
                    X
                  </div>
                  <div> {formatPrice(getPrice(order))}</div>
                </OrderItem>

                {order.length ? (
                  <DetailItem>lengte kabel: {order.length}</DetailItem>
                ) : null}

                {order.installation && (
                  <DetailItem>afwerking: {order.installation}</DetailItem>
                )}
                {/* <div>tule: {order.tule}</div> */}
                {order.tule ? <DetailItem>{order.tule}</DetailItem> : null}
              </OrderContainer>
            ))}
            <OrderContainer>
              <OrderItem>
                <div />
                <div>Sub-total</div>
                <div>{formatPrice(subtotal)}</div>
              </OrderItem>
              <OrderItem>
                <div />
                <div>Tax</div>
                <div>{formatPrice(tax)}</div>
              </OrderItem>
              <OrderItem>
                <div />
                <div>Total</div>
                <div>{formatPrice(total)}</div>
              </OrderItem>
            </OrderContainer>
          </OrderContent>
        )}
        <DialogFooter>
          <ConfirmButton>Vraag offerte aan</ConfirmButton>
        </DialogFooter>
      </OrderStyled>
    </>
  );
}
