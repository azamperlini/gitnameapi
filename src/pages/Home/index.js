import React, {useState} from 'react';
import axios from 'axios';
import './index.css';
import {useHistory} from 'react-router-dom';

export default function Home() {

  const [user, setUsuario] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState(false);


  function handlePesquisa(){
    const url = `https://api.github.com/users/${user}/repos`;
    axios.get(url)
    .then(response => {

      const repositories = response.data;
      const repositoriesName = [];

      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories'); //redirecionando para rota
    }).catch(err => {
      setErro(true);
    });
  }

  return (
    <>
      <div className="container">
          <input type="text"
              placeholder="insira seu username..."
              name="user"
              id="user" 
              value={user}
              onChange={e => setUsuario(e.target.value)} className="inputuser"
          />
          <button 
            type="button"
            onClick={handlePesquisa}>Pesquisar
          </button>
          {erro ? <span>Ops, ocorreu um erro na busca.</span> : ''}
        </div>
    </>

  );
}