import React from "react";
import "./../Home/Home.css";

function Home() {
  return (
    <>
      <div className={"header"}>
        <div>
          <h1>Olá!</h1>
          <h3>Seja bem vindo(a) ao Trem!</h3>
          <p>
            Transporte Responsavel Escolar Móvel, o aplicativo que você procura
            para facilitar o seu dia a dia!
          </p>
        </div>
        <img src="./VanSVG.svg" alt="" />
      </div>
    
      <div className={"content"}>
        <div className={"lustracao1"}>
          <img src="./Ilustracao1.svg" alt="" />
        </div>
        <div>
        <h1>Procure o transporte ideal para sua necessidade.</h1>
          <p>Precisa de um transporte para seus filhos ou para você? Pesquise já no Trem pelos motoristas mais próximos e organize sua agenda.</p>
        </div>

        <div className={"lustracao2"}>
          <img src="./Ilustracao2.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
