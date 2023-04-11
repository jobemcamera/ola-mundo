import styles from './Banner.module.css';

import React from 'react'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>
                    Seja bem-vindo ao meu espaço pessoal! Eu sou o Jobe Camera, Desenvolvedor Front-End, estudante de TI, Engenheiro Civil, jogador de Tibia nato e guitarrista nas horas vagas!
                    Aqui irei compartilhar um pouco sobre mim e meus projetos!
                </p>
            </div>
            <div className={styles.imagens}>
                {/* <img 
                    src={circuloColorido} 
                    className={styles.circuloColorido}
                    aria-hidden={true}
                /> */}
                <img
                    src="https://github.com/jobemcamera.png"
                    className={styles.minhaFoto} 
                    alt="Foto do Jobe"
                />
            </div>
        </div>
    )
}
