import { useState } from "react";
import "./App.css";
import Titulos from "./component/Titulos";
import ListaPlato from "./component/ListaPlatos";

function App() {
  return (
    <>
    <div className="padre">
    <Titulos />
      <div >
        <ListaPlato />
      </div>
    </div>

    </>
  );
}

export default App;
