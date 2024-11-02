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
    <div className="login-body">
        <div className='login-container'>
              <div className="login-topo">

                <div className="login-topo-esquerda">
                  <div className='imagem'>
                  <img src="logo-agenda.png" alt="Logo" className="logo" onClick={() => navigate('/')} />
                  </div>
                </div>
                <div className="login-topo-meio">
                  <h2>Login de Usuário</h2>
                </div>
                <div className="login-topo-direita">
                <button className="login-botao-voltar" onClick={handleBack}>Voltar</button>
                </div>
              </div>

          <div className="login-meio">
                <div className="login-info">
                      <form className='login-form' onSubmit={handleSubmit}>
                        <input className='input'
                          type="text"
                          placeholder="CPF"
                          required
                        />
                        <input className='input'
                          type="password"
                          placeholder="Senha"
                          required
                        />
                        <button type="submit" className="login-botao-login">Login</button>
                      </form>
                     
                </div>
          </div>

          <div className="login-baixo">
            {/**espaço em branco */}
        </div>
        </div>
    </div>
  );
}

export default Login;
