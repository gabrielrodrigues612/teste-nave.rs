import React, { useContext, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import Context from "../../Context";
import Modal from "./Modal";

function PopUp({ setHandle, popUp }) {
  const { userPopUp, setUserPopUp, authAxios, setDados } = useContext(Context);
  const [modal, setModal] = useState(false);

  const deletar = useCallback(async () => {
    await authAxios.delete(`/navers/${userPopUp.id}`);
    const navers = await authAxios.get("/navers");
    setDados(navers.data);
  }, [authAxios, userPopUp, setDados]);

  function modalPopUp() {
    setModal(true);
  }

  function close() {
    setHandle(false);
    popUp();
    setUserPopUp("");
  }

  if (userPopUp === "") {
    return null;
  }

  return (
    <>
      <div className="container">
        <div className="popUp">
          <div className="imagem">
            <img src={userPopUp.url} alt="" />
          </div>
          <div className="info">
            <section className="close">
              <svg
                onClick={close}
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
            </section>
            <section className="dados">
              <section>
                <h1>{userPopUp.name}</h1>
                <p>{userPopUp.job_role}</p>

                <h1>Idade</h1>
                <p>{userPopUp.birthdate}</p>

                <h1>Tempo de empresa</h1>
                <p>{userPopUp.admission_date}</p>
              </section>
              <section className="iconesPop">
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
                <Link to={`navers/edit/${userPopUp.id}`}>
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
              </section>
            </section>
          </div>
        </div>
      </div>
      {modal ? <Modal setModal={setModal} deletar={deletar} /> : null}
    </>
  );
}

export default PopUp;
