const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());


app.post('/send-email', async (req, res) => {
  const { nome, telefone, email, mensagem } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tremtransporteescolar@gmail.com',
      pass: 'jtjg ndbs nezp gsex',
    },
  });

  const mailOptions = {
    from: email,
    to: 'tremtransporteescolar@gmail.com',
    subject: `Nova mensagem de ${nome}, a partir do site`,
    text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email enviado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao enviar o email.');
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
