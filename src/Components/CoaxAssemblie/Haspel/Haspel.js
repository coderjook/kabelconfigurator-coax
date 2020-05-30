import React, { useState } from "react";

import { ProductHeader, ProductContent } from "../../../Styles/ProductStyle";
import HaspelGrid from "./HaspelGrid";
import { HaspelDialog } from "./HaspelDialog";
import { useOpenHaspelDialog } from "../../../Hooks/useOpenHaspelDialog";

function Haspel({ ...orders }) {
  const openHaspel = useOpenHaspelDialog();
  const [showHaspelGrid, setShowHaspelGrid] = useState(false);
  const [opmaakHaspel, setOpmaakHaspel] = useState(999999);
  const [toggleContent, setToggleContent] = useState(false);
  const [haspelHeader, setHaspelHeader] = useState();

  const handleChange = (event) => {
    setOpmaakHaspel(event.target.value);
  };

  const toggleShowContent = () => {
    setToggleContent(!toggleContent);
  };

  return (
    <>
      {haspelHeader ? (
        <>
          {" "}
          <ProductHeader>
            <div>Geselecteerde haspel: {haspelHeader}</div>
            <div>
              <button onClick={() => setToggleContent(true)}>
                selecteer een andere haspel
              </button>{" "}
            </div>
            <div />
          </ProductHeader>
        </>
      ) : (
        <ProductHeader active onClick={toggleShowContent}>
          <div>Stap 4: Selecteer afwerking: Haspel of Gebonden</div>
          <div /> <div />
        </ProductHeader>
      )}
      <HaspelDialog
        {...openHaspel}
        {...orders}
        closeShowHaspelGrid={() => setToggleContent(false)}
        selectedHaspel={(haspelName) => setHaspelHeader(haspelName)}
      />
      {/* <ProductContent>
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
            <label for="gebonden">geen opmaak</label>
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
          <div>
            {opmaakHaspel === "haspel"
              ? setShowHaspelGrid(true)
              : setShowHaspelGrid(false)}
            {/* <ConfirmButton onClick={addToOrder}>add to order</ConfirmButton> */}
      {/* </div>
        </div>
      </ProductContent> */}
      {toggleContent ? <HaspelGrid {...openHaspel} /> : null}
    </>
  );
}

export default Haspel;
