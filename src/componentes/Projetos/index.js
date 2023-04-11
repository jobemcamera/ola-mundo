import styles from './Projetos.module.css';

import React from 'react'

export default function Projetos({ projeto }) {
    return (
        <div className={styles.projeto}>
            <img
                className={styles.capa}
                src={`/assets/projects/${projeto.id}/capa.png`}
                alt="Imagem de capa do Projeto"
            />
            <h2 className={styles.titulo}>{projeto.titulo}</h2>
            <button className={styles.botaoVer}>Ver</button>
        </div>
    )
}
