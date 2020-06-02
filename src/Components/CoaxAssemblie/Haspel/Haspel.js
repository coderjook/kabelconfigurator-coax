import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useToggleContent } from "../../../Hooks/useToggleContent";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import {
  ProductHeader,
  ProductContent,
  ProductStyled,
} from "../../../Styles/ProductStyle";
import HaspelGrid from "./HaspelGrid";
import { HaspelDialog } from "./HaspelDialog";
import { useOpenHaspelDialog } from "../../../Hooks/useOpenHaspelDialog";
import { ConfirmButton } from "../../../Styles/DialogStyle";
import { ChangeButton } from "../../../Styles/ButtonStyle";
import {
  Product,
  ProductGrid3,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

const ProductContentCheck = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: start;
  row-gap: 20px;
  // column-gap: 5px;
  padding: 15px 10px 15px 20px;
  margin-bottom: 10px;
  font-size: 18px;
`;

function Haspel({ ...orders }) {
  const { selectedAssemblie, UpdateAssemblieHaspel } = useContext(
    AssemblieContext
  );
  const openHaspel = useOpenHaspelDialog();
  const toggleContent = useToggleContent();
  const [showHaspelGrid, setShowHaspelGrid] = useState(false);
  const [opmaakHaspel, setOpmaakHaspel] = useState("gebonden");

  const handleChange = (event) => {
    setOpmaakHaspel(event.target.value);
  };

  function addToOrder() {
    UpdateAssemblieHaspel(999999, "gebonden", "nvt", 0);
  }

  return (
    <>
      {selectedAssemblie ? (
        <>
          {" "}
          <ProductHeader onClick={toggleContent.toggleShowContent}>
            <div>Geselecteerde opmaak: {selectedAssemblie.details_haspel}</div>
            <div></div>
            <div />
          </ProductHeader>
          {toggleContent.toggleContent ? (
            <ProductStyled>
              <ProductGrid3>
                <div>
                  <Product
                  // onClick={() => {
                  //   openConnectorDialog.setOpenConnectorDialog(
                  //     selectedAssemblie
                  //   );
                  // }}
                  >
                    <ProductName>
                      <div>{selectedAssemblie.details_haspel}</div>
                    </ProductName>
                    <ProductDetails>
                      <div>Artikelnummer: {selectedAssemblie.artnr_haspel}</div>
                      <div>type: {selectedAssemblie.type_haspel}</div>
                    </ProductDetails>
                  </Product>
                </div>
                <div>
                  <Product>
                    <ChangeButton
                    // onClick={() => {
                    //   openConnectorDialog.setOpenConnectorDialog(
                    //     selectedAssemblie
                    //   );
                    // }}
                    >
                      Wijzig connector afwerking
                    </ChangeButton>
                    <ChangeButton onClick={() => setShowHaspelGrid(true)}>
                      selecteer een andere connector
                    </ChangeButton>
                  </Product>
                </div>
                <div />
              </ProductGrid3>
            </ProductStyled>
          ) : null}
        </>
      ) : (
        <ProductHeader active onClick={toggleContent.toggleShowContent}>
          <div>Stap 4: Selecteer afwerking: Haspel of Gebonden</div>
          <div /> <div />
        </ProductHeader>
      )}

      <HaspelDialog
        {...openHaspel}
        {...orders}
        closeShowHaspelGrid={() => toggleContent.setToggleContent(false)}
      />
      {toggleContent.toggleContent ? (
        <>
          <ProductContentCheck>
            <div>
              <h3> Kies opmaak assemblie:</h3>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  id="gebonden"
                  name="gebonden"
                  value="gebonden"
                  checked={opmaakHaspel === "gebonden"}
                  onChange={handleChange}
                />
                <label for="gebonden">Assemblie wordt gebonden geleverd</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="haspel"
                  name="haspel"
                  value="haspel"
                  checked={opmaakHaspel === "haspel"}
                  onChange={handleChange}
                />
                <label for="haspel">Opmaak op haspel</label>
              </div>
              <p></p>
            </div>
          </ProductContentCheck>
          {opmaakHaspel === "gebonden" ? (
            <ConfirmButton onClick={addToOrder}>
              selecteer de opmaak gebonden
            </ConfirmButton>
          ) : null}
          {opmaakHaspel === "haspel" ? <HaspelGrid {...openHaspel} /> : null}
        </>
      ) : null}
    </>
  );
}

export default Haspel;
