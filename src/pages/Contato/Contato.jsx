import React, { useState } from "react";
import InputMask from "react-input-mask";
import emailjs from "emailjs-com";
import "./Contato.css";

function Contato() {
  const [popupMessage, setPopupMessage] = useState(""); // Mensagem do popup
  const [showPopup, setShowPopup] = useState(false); // Controle de visibilidade do popup

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7dsxuy",
        "template_89zhpti",
        e.target,
        "tsAaT89swHjM9GoJo"
      )
      .then(
        (result) => {
          setPopupMessage("Email enviado com sucesso!"); // Define mensagem de sucesso
          setShowPopup(true); // Exibe o popup
        },
        (error) => {
          setPopupMessage("Erro ao enviar o email. Tente novamente."); // Define mensagem de erro
          setShowPopup(true); // Exibe o popup
        }
      );

    e.target.reset(); // Reseta o formulário
  }

  // Função para fechar o popup
  function closePopup() {
    setShowPopup(false);
    setPopupMessage("");
  }

  return (
    <section className="contato-container">
      <h1 className="titulo">Contato</h1>
      <form className="formulario-contato" onSubmit={sendEmail}>
        <div className="form-esquerda">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="from_name"
            id="nome"
            placeholder="Seu nome completo"
            required
          />

          <label htmlFor="telefone">Telefone</label>
          <InputMask
            mask="(99) 9 9999 9999"
            name="from_telephone"
            id="telefone"
            placeholder="(00) 0 0000 0000"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="from_email"
            id="email"
            placeholder="seuemail@exemplo.com"
            required
          />
        </div>
        <div className="form-direita">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            name="html_message"
            id="mensagem"
            placeholder="Escreva sua mensagem aqui..."
            required
          ></textarea>
          <button type="submit" value="Send" className="botao-enviar">
            Enviar
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={closePopup} className="popup-close">
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contato;
