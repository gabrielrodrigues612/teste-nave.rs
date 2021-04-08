import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Axios from "axios";

import "./app.css";
import Context from "./Context";

import Login from "./components/Login/Login";
import Container from "./components/utilities/Container";
import AddNaver from "./components/AddNaver/AddNaver";
import Edit from "./components/Edit/Edit";

export default function App() {
  const [auth, setAuth] = useState(localStorage.getItem("token"));
  const [dados, setDados] = useState([]);
  const [userPopUp, setUserPopUp] = useState("");
  const [modalSucesso, setModalSucesso] = useState(false);

  const authAxios = Axios.create({
    baseURL: "https://navedex-api.herokuapp.com/v1",
    headers: {
      Authorization: `Bearer ${auth}`
    }
  });

  const fetchApi = useCallback(async () => {
    try {
      const result = await authAxios.get("/navers");
      setDados(result.data);
    } catch (err) {
      Promise.reject(err);
    }
  }, [authAxios]);

  return (
    <Context.Provider
      value={{
        auth,
        setAuth,
        fetchApi,
        dados,
        authAxios,
        setDados,
        userPopUp,
        setUserPopUp,
        modalSucesso,
        setModalSucesso
      }}
    >
      <BrowserRouter className="App">
        <Switch>
          <Route exact path="/navers" component={Container} />
          <Route exact path="/navers/edit/:id" component={Edit} />
          <Route exact path="/navers/add-naver" component={AddNaver} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}
