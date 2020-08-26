import React, { useContext, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Context from "../../Context";
import Modal from "./Modal";

function Card({ name, job, url, id, popUp }) {
  const [modal, setModal] = useState(false);
  const { authAxios, setDados, setUserPopUp } = useContext(Context);
  const deletar = useCallback(async () => {
    await authAxios.delete(`/navers/${id}`);
    const navers = await authAxios.get("/navers");
    setDados(navers.data);
  }, [authAxios, id, setDados]);

  async function popUpUser() {
    popUp();
    try {
      const response = await authAxios.get(`/navers/${id}`);
      setUserPopUp(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  function modalPopUp() {
    setModal(true);
  }

  return (
    <>
      {modal ? <Modal deletar={deletar} setModal={setModal} /> : null}
      <div id={id} class="card">
        <div onClick={popUpUser} className="foto">
          <img src={url} alt="" />
        </div>
        <div class="conteudo">
          <h2>{name}</h2>
          <p>{job}</p>
          <div className="icones">
            <span onClick={modalPopUp} id="excluir">
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 18H13V4H1V18ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                  fill="#212121"
                />
              </svg>
            </span>
            <Link to={`/navers/edit/${id}`}>
              <span className="editar">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM18.41 4.34L14.66 0.589996L12.13 3.13L15.88 6.88L18.41 4.34Z"
                    fill="#212121"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
