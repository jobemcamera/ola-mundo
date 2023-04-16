import { Link } from 'react-router-dom';
import styles from './Projetos.module.css';

import React from 'react'

export default function Projetos({ projeto }) {
    return (
        <Link to={`/posts/${projeto.id}`}>
            <div className={styles.projeto}>
                <img
                    className={styles.capa}
                    src={`/assets/projects/${projeto.id}/capa.png`}
                    alt="Imagem de capa do Projeto"
                />
                <h2 className={styles.titulo}>{projeto.titulo}</h2>
                <button className={styles.botaoVer}>Ver</button>
            </div>
        </Link>
    )
}
