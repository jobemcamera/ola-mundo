import React from 'react';
import Banner from 'componentes/Banner';
import styles from './Inicio.module.css';
import projetos from 'json/projetos.json'
import Projetos from 'componentes/Projetos';

export default function Inicio() {
    return (
        <main>
            <Banner />
            <ul className={styles.projetos}>
                {projetos.map( (projeto) => 
                    <li key={projeto.id}>
                        <Projetos projeto={projeto}/>
                    </li>
                )}
            </ul>
        </main>
    )
}
