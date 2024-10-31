import React from 'react';
import "./../Motorista/Motorista.css";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

function Motorista() {
  return (
    <>
    <div className={'DivApresentacaoMotorista'}>
      <h1>Por que se tornar um motorista no aplicativo?</h1>
      <img src="Ilustracao6.svg" alt="" />
      <p>Utilizar o Trem no seu transporte oferece uma oportunidade de organização fácil e sem dificuldades.
         Com o aplicativo, você pode gerenciar seus passageiros e ter a melhor rota para o dia.</p>
    </div>
    
    <div>
      <h1>Começe a usar sem custos iniciais</h1>
        <div className={'DivApresentacaoGrid'}>
          <img src="Ilustracao7.svg" alt="" className={'DivApresentacaoGridImg1'}/>
          <img src="Ilustracao8.svg" alt="" className={'DivApresentacaoGridImg2'}/>
          <img src="Ilustracao9.svg" alt="" className={'DivApresentacaoGridImg3'}/>
          <div className="progress-bar-vertical">
            <div className="progress-bar-dot top"></div>
            <div className="progress-bar-dot mid"></div>
            <div className="progress-bar-dot bottom"></div>
          </div>
          <p className={'DivApresentacaoGridP1'}>Não se preocupe com mensagens durante a rota, 
            deixe com que o aplicativo avise o passageiro atrvés de notificação a sua chegada.</p>
          <p className={'DivApresentacaoGridP2'}>Consiga mais clientes, ao cadastrar sua van, ela ficará disponivel para que as
            pessoas te encontrem e se tornem seus passageiros.</p>
          <p className={'DivApresentacaoGridP3'}>
          Veja a melhor rota a partir da quantidade de passageiros que irão em cada dia para 
          uma rota mais eficiente e rápida.
          </p>
        </div>
    </div>

    <div className={'DivCelulares'} >
        <Link to="/app"> Se torne já um motorista parceiro! <FaArrowRight /> </Link>
        <img src="Ilustracao10.svg" alt="" />
      </div>
    
    </>
  );
}

export default Motorista;
