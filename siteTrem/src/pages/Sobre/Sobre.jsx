import React from 'react';
import "./../Sobre/Sobre.css";
import { LuInstagram } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";

function Sobre() {
  return (
    <>
  
    <div className={"DivApresentacao"}>
      <div>
        <h1>O que somos?</h1>
        <p>
        Somos uma Startup que se iniciou a partir de um trabalho na instituição Cotemig. 
        O nosso trabalho tem como objetivo desenvolver um aplicativo para gerenciar transportes escolares,
        especificamente para vans escolares. Nossa idéia surgiu a partir da necessidade de alguns integrantes
        que utilizam esse meio de transporte e estavam tendo problemas com a organização, gerenciamento e procura.
        </p>
      </div>
      <img src="./ImagemGrupo1.svg" alt="" />
    </div>

    <div className={"DivApresentacao2"}>
    <img src="./Ilustracao5.svg" alt="" />
      <div>
        <h1>O que oferecemos?</h1>
        <p>
        Oferecemos um serviço de organização onde os alunos podem procurar um transporte a partir da instituição
        onde estudam e bairro onde moram. A partir dessa localização, o app disponibiliza a melhor rota para o 
        motorista em tempo real, um centro de notificações onde o motorista 
        pode avisar quando algum imprevisto acontecer, um perfil pessoal com suas
        informações e maior praticidade em anunciar os dias que você não irá ou voltará utilizando o transporte.
        </p>
      </div>
    </div>

    <div className={"DivIntegrantes"}>
      <h1>Nossa equipe</h1>

      <div className={"DivIntegrantes1"}>
        <img src="./Henrique.svg" alt="" />
        <div>
          <h2>Henrique Capanema</h2>
          <p>COO | Desenvolvedor Back-End | Banco de Dados  | Administrador</p>
          <a href=""><LuInstagram /> @henrique_tesla</a>
          <a href="https://www.linkedin.com/in/henrique-capanema-7a22392b5/"><LiaLinkedin /> Henrique Capanema</a>
        </div>
      </div>

      <div className={"DivIntegrantes2"}>
        <div>
          <h2>Alice Lunardi</h2>
          <p>COO/CMO | Desenvolvedor Front-End | Designer Gráfico | Web Designer | UI/UX | Social Media</p>
          <a href=""><LuInstagram /> @lunaaardi</a>
          <a href="https://www.linkedin.com/in/alice-lunardi-918407250/"><LiaLinkedin /> Alice Lunardi</a>
        </div>
        <img src="./Alice.svg" alt="" />
      </div>

      <div className={"DivIntegrantes1"}>
        <img src="./Mateus.svg" alt="" />
        <div>
          <h2>Mateus de Sousa</h2>
          <p>CTO/CIO | Desenvolvedor Full Stack | Banco de Dados  | UI/UX</p>
          <a href="https://www.linkedin.com/in/mateus-de-sousa-santos-646945264/"><LiaLinkedin /> Mateus de Sousa Santos</a>
        </div>
      </div>

      <div className={"DivIntegrantes2"}>
        <div>
          <h2>Sophia Meirelles</h2>
          <p>CDO | Desenvolvedor Front-End | Designer Gráfico | Web Designer | UI/UX</p>
          <a href="https://www.linkedin.com/in/sophiameirelles/"><LiaLinkedin /> Sophia Meirelles</a>
        </div>
        <img src="./Sophia.svg" alt="" />
      </div>

      <div className={"DivIntegrantes1"}>
        <img src="./Davi.svg" alt="" />
        <div>
          <h2>Davi Lavalle</h2>
          <p>CRO | Pesquisador | Organizador | Administrador</p>
          <a href="https://www.linkedin.com/in/davi-lavalle-carneiro-1bba15311/"><LiaLinkedin />  Davi Lavalle Carneiro</a>
        </div>
      </div>

      <div className={"DivIntegrantes2"}>
        <div>
          <h2>Ana Clara Camargos</h2>
          <p>SCRUM MASTER | Pesquisador | Organizador | Administrador</p>
          <a href=""><LuInstagram /> @_anaclara.cl</a>
          <a href="https://www.linkedin.com/in/ana-clara-camargos-6935322b1/"><LiaLinkedin /> Ana Clara Camargos</a>
        </div>
        <img src="./Ana.svg" alt="" />
      </div>
    </div>
    </>
  );
}

export default Sobre;
