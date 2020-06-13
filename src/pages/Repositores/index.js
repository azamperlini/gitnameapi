import React, { useEffect, useState } from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default function Repositores() {
    const [repositories, setRepositories] = useState([]);
    useEffect(() =>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        console.log(repositoriesName);
        //localStorage.clear();
    }, []);
    return (
        <>
            <div className="Container">
                <h1 className="title">Repositórios</h1>
                <ul className="list">
                    {repositories.map(repository =>{
                        return(
                            <li key={repository}>
                                Repositório: {repository}
                            </li>
                        )
                    })}
                </ul>
                <Link to="/">Voltar para página principal</Link>
            </div>
        </>
    )
}