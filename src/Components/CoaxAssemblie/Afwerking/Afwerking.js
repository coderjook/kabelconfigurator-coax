import React, { useState } from "react";

function Afwerking() {
  const [transKrimpkous, setTransKrimpkous] = useState("geen");

  const handleChange = (event) => {
    setTransKrimpkous(event.target.value);
  };

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
    </>
  );
}

export default Afwerking;
