import React from 'react';
import styles from './Inicio.module.css';
import projetos from 'json/projetos.json'
import Projetos from 'componentes/Projetos';
import PostModelo from 'componentes/PostModelo';

export default function Inicio() {
    return (
        <>
            <PostModelo titulo="Início" />
            <ul className={styles.projetos}>
                {projetos.map((projeto) =>
                    <li key={projeto.id}>
                        <Projetos projeto={projeto} />
                    </li>
                )}
            </ul>
        </>
    )
}
