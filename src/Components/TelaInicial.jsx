import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaPerfil.css';


function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className='body'>
      <div className='container'>
        <div className='topo'>
          <div className='topo-esquerda' onClick={() => navigate('/')}>
            <img src='macaco.png' alt="Logo" className="logo" />
          </div>

          <div className='topo-meio'>
            {/**espaço em branco */}
          </div>

          <div className='topo-direita'>
            <button className='botao' onClick={() => navigate('/cadastro')}>Cadastro</button>
            <button className='botao' onClick={() => navigate('/login')}>Login</button>
          </div>
        </div>

        <div className='meio'>
          
        </div>

        <div className='baixo'>
          <div className='quadro'>
            <h3>Filosofia</h3>
            <p>Texto sobre filosofia.</p>
          </div>
          <div className='quadro'>
            <h3>História</h3>
            <p>Texto sobre história.</p>
          </div>
          <div className='quadro'>
            <h3>Objetivos</h3>
            <p>Texto sobre objetivos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
