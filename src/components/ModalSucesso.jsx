import React, { useContext } from "react";
import Context from "../Context";
import { Link } from "react-router-dom";
import "./modalSucesso.css";

export default function ModalSucesso({ nome }) {
  const { setModalSucesso } = useContext(Context);
  function fechar() {
    setModalSucesso(false);
  }
  return (
    <div className="containerSucesso">
      <div className="modalSucesso">
        <div className="tituloModalSucesso">
          <h1>Naver {nome}</h1>
          <Link to="/navers">
            <span onClick={fechar}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#212121"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="corpoModal">Naver {nome} com sucesso.</div>
      </div>
    </div>
  );
}
