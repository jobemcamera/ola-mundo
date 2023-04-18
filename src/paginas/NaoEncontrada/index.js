import React from 'react'
import styles from './NaoEcontrada.module.css'

export default function NaoEncontrada() {
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <div className={styles.botaoContainer}>
                    <button>Voltar</button>
                </div>
            </div>

            <div className={styles.espacoEmBranco}>

            </div>
        </>
    )
}
