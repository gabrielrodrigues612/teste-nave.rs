import React, { useContext } from "react";
import Header from "../Header/Header";
import Navers from "../Navers/Navers";
import { withRouter } from "react-router-dom";
import Context from "../../Context";

function Container({ history }) {
  const { auth } = useContext(Context);
  if (!auth) {
    history.push("/");
    return null;
  }
  return (
    <>
      <Header />
      <Navers />
    </>
  );
}

export default withRouter(Container);
