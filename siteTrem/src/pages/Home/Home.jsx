import React from "react";
import "./../Home/Home.css";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
  return (
    <>
      <div className={"header"}>
        <div>
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
        <IoIosArrowDown />
      </div>
    
      <div className={"content"}>

        <div>
          <img src="./Ilustracao1.svg" alt=""/>
            <div>
              <h1>Procure o transporte ideal para sua necessidade.</h1>
                <p>Precisa de um transporte para seus filhos ou para você? Pesquise já no Trem pelos motoristas mais próximos e organize sua agenda.</p>
              <Link to="/app" className={"button"}>Começar</Link>
            </div>
        </div>

        <div>
            <div>
              <h1>Monitore em tempo real seu transporte institucional.</h1>
                <p>Vizualize onde o transporte está em tempo real, acompanhe as notificações do motorista e veja a melhor rota para seu destino final.</p>
                <Link to="/motoristas" className={"button"}>Começar</Link>
            </div>
          <img src="./Ilustracao2.svg" alt=""/>
        </div>

      </div>

      <div  className={'DivLinkSobre'}>
        <img src="Ilustracao3.svg" alt="" />
        <div className={"LinkApp"} >
          <Link to="/sobre">Conheça quem somos nós!</Link>    
        </div>
      </div>
      
      <div className={'DivCelulares'} >
        <Link to="/app"> Conheça nosso serviço mais de perto <FaArrowRight /> </Link>
        <div>
          <img src="./Celular1.svg" alt="" />
          <img src="./Celular2.svg" alt="" />
          <img src="./Celular3.svg" alt="" />
        </div>
      </div>

      <div  className={'DivLinkContato'}>
        <div className={"LinkContato"} >
          <Link to="/contato">Se interessou? <br /> Entre em contato conosco!</Link>    
        </div>
        <img src="Ilustracao4.svg" alt="" />
      </div>

    </>
  );
}

export default Home;
