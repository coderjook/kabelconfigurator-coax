import React, { useState, useContext } from "react";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { ConfirmButton } from "../../../Styles/DialogStyle";

function Afwerking({ orders, setOrders }) {
  const [transKrimpkous, setTransKrimpkous] = useState("geen");
  const [lengthTransKrimpkous, setLengthTransKrimpkous] = useState(1);
  const { UpdateAssemblieAfwerking } = useContext(AssemblieContext);

  const handleChange = (event) => {
    setTransKrimpkous(event.target.value);
  };

  const handleChangeLength = (event) => {
    setLengthTransKrimpkous(event.target.value);
  };

  const order = {
    assemblieItem: "afwerking",
    transKrimpkous: transKrimpkous,
    lengthTransKrimpkous: lengthTransKrimpkous,
  };

  function addToOrder() {
    setOrders([...orders, order]);
    UpdateAssemblieAfwerking(transKrimpkous, lengthTransKrimpkous);
  }

  return (
    <>
      <h1>Laatste stap: kies afwerking assemblie</h1>
      <h3> Kies de afwerking:</h3>
      <input
        type="radio"
        id="geen"
        name="geen"
        value="geen"
        checked={transKrimpkous === "geen"}
        onChange={handleChange}
      />
      <label for="geen">geen afwerking</label>
      <input
        type="radio"
        id="kantA"
        name="kantA"
        value="kantA"
        checked={transKrimpkous === "kantA"}
        onChange={handleChange}
      />
      <label for="kantB">transparante krimpkous alleen kant A</label>
      <input
        type="radio"
        id="kantB"
        name="kantB"
        value="kantB"
        checked={transKrimpkous === "kantB"}
        onChange={handleChange}
      />
      <label for="kantB">transparante krimpkous alleen kant B</label>
      <input
        type="radio"
        id="beideKanten"
        name="beideKanten"
        value="beideKanten"
        checked={transKrimpkous === "beideKanten"}
        onChange={handleChange}
      />
      <label for="beideKanten">transparante krimpkous op beide kanten</label>
      {transKrimpkous === "geen" ? (
        <p>geen transparante krimpkous</p>
      ) : (
        <div>
          Lengte transparante krimpkous cm
          <input
            type="text"
            id="lengthTransKrimp"
            name="lengthTransKrimp"
            value={lengthTransKrimpkous}
            onChange={handleChangeLength}
          />
        </div>
      )}
      <ConfirmButton onClick={addToOrder}>add to order</ConfirmButton>
    </>
  );
}

export default Afwerking;
