import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CssNovo.css';

function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className='body'>
      <div className='container'>
        <h2 className='titulo'>Cadastro</h2>
        <form className='form-cadastro'>
          <label>
            Nome Completo:
            <input type="text" className='input-field' required />
          </label>
          <label>
            CPF:
            <input type="text" className='input-field' required />
          </label>
          <label>
            Data de Nascimento:
            <input type="date" className='input-field' required />
          </label>
          <label>
            Telefone:
            <input type="tel" className='input-field' required />
          </label>
          <label>
            Senha:
            <input type="password" className='input-field' required />
          </label>
          <label>
            Confirmar Senha:
            <input type="password" className='input-field' required />
          </label>
          <button type="button" className='botao-cadastrar' onClick={() => navigate('/login')}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
