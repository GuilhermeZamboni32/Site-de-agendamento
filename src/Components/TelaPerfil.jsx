import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaPerfil.css';

function TelaPerfil() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nome: "Nome Completo",
    cpf: "000.000.000-00",
    nascimento: "2000-01-01",
    endereco: "Endereço",
    senha: "******",
  });

  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  return (
    <div className="container">
      <div className='topo'>
        <div className='topo-esquerda'>
          <img 
            src="macaco.png" 
            alt="Logo" 
            className="header-icon" 
            onClick={() => window.location.href = "/"} 
          />
        </div>

        <div className='topo-meio'>
          {/** espaço vazio */}
        </div>
        
        <div className='topo-direita'>
          <button onClick={() => navigate('/login')}>Voltar</button>
        </div>
      </div>

      <div className="info-box">
        <div className="profile-section">
          <img src="bolsonaro.png" alt="Usuário" className="big-image" />

          <form className="user-info-form">
            <input type="text" name="nome" value={userInfo.nome} onChange={handleChange} disabled={!isEditing} placeholder="Nome completo" />
            <input type="date" name="nascimento" value={userInfo.nascimento} onChange={handleChange} disabled={!isEditing} />
            <input type="text" name="cpf" value={userInfo.cpf} onChange={handleChange} disabled={!isEditing} placeholder="CPF" />
            <input type="text" name="endereco" value={userInfo.endereco} onChange={handleChange} disabled={!isEditing} placeholder="Endereço" />
            <input type="password" name="senha" value={userInfo.senha} onChange={handleChange} disabled={!isEditing} placeholder="Senha" />
          </form>

          <button className="button" onClick={handleEdit}>
            {isEditing ? "Salvar" : "Editar"}
          </button>
        </div>

        <div className="cards-section">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="info-item">
              <p>Nome:</p>
              <p>Profissão:</p>
              <button className="button">Ver/Editar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TelaPerfil;
