import styles from './Rodape.module.css';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

import React from 'react'
import { Link } from 'react-router-dom';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <section className={styles.redes}>
                <Link to={'https://www.instagram.com/jobecamera/'}>
                    <BsInstagram size={25} />
                </Link>
                <Link to={'https://www.linkedin.com/in/jobecamera/'}>
                    <BsLinkedin size={25} />
                </Link>
                <Link to={'https://www.github.com/jobemcamera/'}>
                    <BsGithub size={25} />
                </Link>
            </section>
            <section className={styles.informacoes}>
                <p>Desenvolvido por Jobe Camera</p>
                <p>Inspirado no projeto Olá Mundo da Alura</p>
            </section>
        </footer>
    )
}
