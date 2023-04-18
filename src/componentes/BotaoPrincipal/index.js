import React from 'react'
import styles from "./BotaoPrincipal.module.css"

export default function BotaoPrincipal({ children, tamanho, acao }) {
    return (
        <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`} onClick={acao}>
            {children}
        </button>
    )
}
