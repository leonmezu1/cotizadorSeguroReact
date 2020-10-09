import React from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <div>
      <Header titulo="Cotizador de seguros" />
    </div>
  );
}

export default App;
