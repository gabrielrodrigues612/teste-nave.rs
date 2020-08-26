import React, { useState, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import "./addNaver.css";

import Adicionado from "../ModalSucesso";

import Context from "../../Context";
import Header from "../Header/Header";

function AddNaver({ history }) {
  const { auth, authAxios, modalSucesso, setModalSucesso } = useContext(
    Context
  );
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [projetos, setProjeto] = useState("");
  const [cargo, setCargo] = useState("");
  const [tempoEmpresa, setTempoEmpresa] = useState("");
  const [url, setUrl] = useState("");

  if (!auth) {
    history.push("/login");
    return null;
  }

  function updateNome(e) {
    setNome(e.target.value);
  }

  function updateIdade(e) {
    setIdade(e.target.value);
  }

  function updateProjeto(e) {
    setProjeto(e.target.value);
  }

  function updateCargo(e) {
    setCargo(e.target.value);
  }

  function updateTempoEmpresa(e) {
    setTempoEmpresa(e.target.value);
  }

  function updateUrl(e) {
    setUrl(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await authAxios.post("/navers", {
        job_role: cargo,
        admission_date: tempoEmpresa,
        birthdate: idade,
        project: projetos,
        name: nome,
        url
      });
      setUrl("");
      setNome("");
      setIdade("");
      setCargo("");
      setTempoEmpresa("");
      setProjeto("");
      setModalSucesso(true);
    } catch (err) {
      Promise.reject(err);
      alert("Verifique os valores digitados");
    }
  }

  return (
    <>
      <Header />
      {modalSucesso ? <Adicionado nome={"adicionado"} /> : null}

      <div class="wrap">
        <div class="goback">
          <Link to="/navers">
            <span>
              <svg
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.51 1.86998L10.73 0.0999756L0.839996 9.99998L10.74 19.9L12.51 18.13L4.38 9.99998L12.51 1.86998Z"
                  fill="black"
                />
              </svg>
            </span>
          </Link>
          <h1>Adicionar Naver</h1>
        </div>

        <form onSubmit={handleSubmit} id="formulario">
          <div>
            <label for="nome">Nome</label>
            <br />
            <input
              required
              value={nome}
              onChange={updateNome}
              placeholder="Nome"
              type="text"
              id="nome"
            />
          </div>
          <div>
            <label for="idade">Idade</label>
            <br />
            <input
              required
              value={idade}
              onChange={updateIdade}
              placeholder="Idade"
              type="text"
              id="idade"
            />
          </div>
          <div>
            <label for="projetos">Projetos que participou</label>
            <br />
            <input
              required
              value={projetos}
              onChange={updateProjeto}
              placeholder="Projetos que participou"
              type="text"
              id="projetos"
            />
          </div>
          <div>
            <label for="cargo">Cargo</label>
            <br />
            <input
              required
              value={cargo}
              onChange={updateCargo}
              placeholder="Cargo"
              type="text"
              id="cargo"
            />
          </div>
          <div>
            <label for="tempoEmpresa">Tempo de empresa</label>
            <br />
            <input
              required
              value={tempoEmpresa}
              onChange={updateTempoEmpresa}
              placeholder="Tempo de empresa"
              type="text"
              id="tempoEmpresa"
            />
          </div>
          <div>
            <label for="url">URL da foto do Naver</label>
            <br />
            <input
              required
              value={url}
              onChange={updateUrl}
              placeholder="URL da foto do Naver"
              type="text"
              id="url"
            />
          </div>
          <div>
            <input id="botao" value="Salvar" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default withRouter(AddNaver);
