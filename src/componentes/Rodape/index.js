import React from 'react'
import styles from './Rodape.module.css';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';


export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <section className={styles.redes}>
                <a href="https://www.instagram.com/jobecamera/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram size={25} />
                </a>
                <a href="https://www.linkedin.com/in/jobecamera/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin size={25} />
                </a>
                <a href="https://www.github.com/jobemcamera/" target="_blank" rel="noopener noreferrer">
                    <BsGithub size={25} />
                </a>
            </section>
            <section className={styles.informacoes}>
                <p>Desenvolvido por Jobe Camera</p>
                <p>Inspirado no projeto Olá Mundo da Alura</p>
            </section>
        </footer>
    );
}
