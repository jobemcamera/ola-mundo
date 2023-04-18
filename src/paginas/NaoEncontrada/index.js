import React from 'react'
import styles from './NaoEcontrada.module.css'
import BotaoPrincipal from 'componentes/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada() {

    const navegar = useNavigate()

    function voltarPagina() {
        return navegar(-1)
    }

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <div className={styles.botaoContainer}>
                    <BotaoPrincipal tamanho="lg" acao={voltarPagina}>
                        Voltar
                    </BotaoPrincipal>
                </div>
            </div>

            <div className={styles.espacoEmBranco}>

            </div>
        </>
    )
}
