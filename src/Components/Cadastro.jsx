import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CssNovo.css';

function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const dadosCadastro = {
      nomeCompleto,
      dataNascimento,
      cpf,
      endereco,
      senha,
    };

    console.log('Dados de Cadastro:', dadosCadastro);

    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  return (
    <div className="cadastro-TelaCadastro">
      <div className="cadastro-topo">
        <div className="cadastro-topo-esquerda">
          <img
            src="logo-agenda.png" // Substitua pelo caminho da sua imagem
            alt="Logo"
            className="cadastro-logo"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="cadastro-topo-meio">
          <h2>Cadastro de Usuário</h2>
        </div>
        <div className="cadastro-topo-direita">
          {/* Outros elementos no topo-direita, se necessário */}
        </div>
      </div>

      <div className="cadastro-meio">
        <div className="cadastro-CadastroContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome Completo"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Data de Nascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
            <button type="submit" className="cadastro-botaoCadastro">Cadastrar</button>
          </form>
          <button onClick={() => navigate('/')} className="cadastro-botaoVoltar">Voltar</button>
        </div>
      </div>

      <div className="cadastro-baixo">
        {/* Conteúdo adicional para a seção "baixo" */}
      </div>
    </div>
  );
}

export default Cadastro;
