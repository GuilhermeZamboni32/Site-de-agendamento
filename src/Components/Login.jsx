import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CssNovo.css';

function Login() {
  const navigate = useNavigate();

  return (
    <div className='body'>
      <div className='container'>
        <h2>Login</h2>
        <form>
          <label>
            CPF:
            <input type="text" />
          </label>
          <label>
            Senha:
            <input type="password" />
          </label>
          <button type="button" onClick={() => navigate('/perfil')}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
