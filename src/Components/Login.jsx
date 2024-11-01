import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CssNovo.css'; // Importando o CSS principal

function Login() {
  const navigate = useNavigate(); // Usando useNavigate para navegação

  const handleCadastroRedirect = () => {
    navigate('/cadastro'); // Navegando para a página de cadastro
  };

  const handleBack = () => {
    navigate(-1); // Navega para a página anterior
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação, se necessário
    alert('Login realizado com sucesso!'); // Mensagem de sucesso
    navigate('/perfil'); // Navegando para a tela de perfil após o login
  };

  return (
    <div className="login-Telalogin">
      <div className="logino-topo">
        <div className="login-topo-esquerda">
          <img
            src="logo-agenda.png" // Substitua pelo caminho da sua imagem
            alt="Logo"
            className="logino-logo"
            onClick={() => navigate('/')} // Navega para a tela inicial ao clicar na logo
          />
        </div>
        <div className="login-topo-meio">
          <h2>Login de Usuário</h2>
        </div>
        <div className="login-topo-direita">
          {/* Adicione aqui qualquer conteúdo para a parte direita do topo, se necessário */}
        </div>
      </div>

      <div className="login-meio">
        <div className="login-CadastroContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="CPF"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              required
            />
            <button type="submit" className="login-botaoCadastro">Login</button>
          </form>
          <button className="login-botaoVoltar" onClick={handleBack}>Voltar</button>
        </div>
      </div>

      <div className="login-baixo">
        <div className="linkloginContainer">
          <p className="linklogin" onClick={handleCadastroRedirect}>
            Não tem conta ainda? Cadastre-se
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
