import React, { useState } from "react";
import styled from "styled-components";
import { useToggleContent } from "../../../Hooks/useToggleContent";

import { ProductHeader, ProductContent } from "../../../Styles/ProductStyle";
import HaspelGrid from "./HaspelGrid";
import { HaspelDialog } from "./HaspelDialog";
import { useOpenHaspelDialog } from "../../../Hooks/useOpenHaspelDialog";

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
  const openHaspel = useOpenHaspelDialog();
  const toggleContent = useToggleContent();
  const [showHaspelGrid, setShowHaspelGrid] = useState(false);
  const [opmaakHaspel, setOpmaakHaspel] = useState("gebonden");
  const [haspelHeader, setHaspelHeader] = useState();
  const [currentHaspel, setCurrentHaspel] = useState({});

  const updateCurrentHaspel = (order) => {
    const newCurrentHaspel = order;
    setCurrentHaspel(newCurrentHaspel);
  };

  const handleChange = (event) => {
    setOpmaakHaspel(event.target.value);
  };

  // const toggleShowContent = () => {
  //   setToggleContent(!toggleContent);
  // };

  return (
    <>
      {haspelHeader ? (
        <>
          {" "}
          <ProductHeader onClick={toggleContent.toggleShowContent}>
            <div>Geselecteerde haspel: {haspelHeader}</div>
            <div></div>
            <div />
          </ProductHeader>
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
        updateCurrentHaspel={(order) => updateCurrentHaspel(order)}
        selectedHaspel={(haspelName) => setHaspelHeader(haspelName)}
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
          {opmaakHaspel === "haspel" ? <HaspelGrid {...openHaspel} /> : null}
        </>
      ) : null}
    </>
  );
}

export default Haspel;
