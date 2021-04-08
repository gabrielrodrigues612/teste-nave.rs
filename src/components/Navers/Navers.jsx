import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./navers.css";
import Lista from "../utilities/Lista";
import PopUp from "../utilities/PopUp";
import Context from "../../Context";

import Excluido from "../utilities/ModalSucesso";

function Navers() {
  const { modalSucesso } = useContext(Context);
  const [handle, setHandle] = useState(false);
  function popUp() {
    !handle ? setHandle(true) : setHandle(false);
  }

  return (
    <>
      {handle ? <PopUp setHandle={setHandle} popUp={popUp} /> : null}
      {modalSucesso ? <Excluido nome={"excluido"} /> : null}
      <div className="main">
        <div className="barraAdd">
          <div>
            <h1 className="texto">Navers</h1>
          </div>
          <Link to="/navers/add-naver">
            <button id="adicionar">Adicionar naver</button>
          </Link>
        </div>
        <Lista popUp={popUp} />
      </div>
    </>
  );
}

export default Navers;
