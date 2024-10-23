import React from 'react';
import './../Footer/Footer.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      <footer>
        <figure>
          <img src="TremLogo.svg" alt="Logomarca TREM" />
          <figcaption>Seu transporte na palma da sua mão!</figcaption>
        </figure>

        <div className={'Lista'}>
          <ul><Link to="/sobre"> <FaArrowRight /> Quem Somos</Link></ul>
          <ul><Link to="/"> <FaArrowRight /> Parcerias</Link></ul>
          <ul><Link to="/motorista"> <FaArrowRight /> Motoristas Parceiros</Link></ul>
          <ul><Link to="/app"> <FaArrowRight /> Aplicativo</Link></ul>
          <ul><Link to="/contato"> <FaArrowRight /> Contato</Link></ul>
        </div>

        <div className={'Sociais'}>
          <ul><a href="#"> <LuInstagram /> @Tremtransporteescolar</a></ul>
          <ul><a href="#"> <LiaLinkedin /> Trem Enterprise</a></ul>
          <ul><a href="#"> <SiGmail /> tremtransporteescolar@gmail.com</a></ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;