import React from "react";
import Header from "../Header/Header";

function Jumbotron() {
  return (
    <>
      <Header />
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <p class="lead">Carregando...</p>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
