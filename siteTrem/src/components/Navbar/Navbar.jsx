import { useState } from 'react'
import './../Navbar/Navbar.css'

function Navbar(){

    return(
    <>
         <nav>
        <img src="assets/logo-branca.png" alt="LogoTrem" /> 
        <div class="menu-wrapper">
            <div class="menu">
                <a href="sobre.html">SOBRE</a>
                <a href="motorista.html">MOTORISTA</a>
                <a href="app.html">APP</a>
                <a href="contato.html">CONTATO</a>
            </div>
            <div class="menu">
                <p id="p-globo"><img src="assets/globo-branco.png" alt="globo" />PT-BR</p>
                <a href="">LOGIN</a>
                <button id="btn-cadastro">
                    <a href="">CADASTRE-SE</a>
                </button>
            </div>
        </div>
        <div class="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
    </>
    )

}

export default Navbar