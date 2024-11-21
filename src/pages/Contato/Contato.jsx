import React, { useState } from 'react';
import InputMask from 'react-input-mask'; // Biblioteca para máscara de entrada
import './Contato.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email enviado com sucesso!');
        setFormData({ nome: '', telefone: '', email: '', mensagem: '' });
      } else {
        alert('Erro ao enviar o email.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar o email.');
    }
  };

  return (
    <section className="contato-container">
      <h1 className="titulo">Contato</h1>
      <form className="formulario-contato" onSubmit={handleSubmit}>
        <div className="form-esquerda">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
          />

          <label htmlFor="telefone">Telefone</label>
          <InputMask
            mask="(99) 9 9999 9999"
            name="telefone"
            id="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(00) 0 0000 0000"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seuemail@exemplo.com"
          />
        </div>
        <div className="form-direita">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            name="mensagem"
            id="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
          <button type="submit" className="botao-enviar">Enviar</button>
        </div>
      </form>
    </section>
  );
}

export default Contato;
