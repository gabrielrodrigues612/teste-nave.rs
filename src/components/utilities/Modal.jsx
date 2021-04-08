import React, { useContext } from "react";
import Context from "../../Context";
import "./modal.css";

function Modal({ setModal, deletar }) {
  const { setModalSucesso } = useContext(Context);
  function cancelar() {
    setModal(false);
  }

  function excluir() {
    deletar();
    setModal(false);
    setModalSucesso(true);
  }

  return (
    <>
      <div className="containerModal">
        <div className="modalModal">
          <div className="tituloModal">
            <h1>Excluir Naver</h1>
          </div>
          <div className="corpoModal">
            Tem certeza de que deseja excluir este naver?
          </div>
          <div className="botoesModal">
            <button onClick={cancelar} className="cancelar">
              Cancelar
            </button>
            <button onClick={excluir} className="excluir">
              Excluir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
