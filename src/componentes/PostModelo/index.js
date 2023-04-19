import React from 'react'
import styles from "./PostModelo.module.css"

export default function PostModelo({ titulo, children }) {
    return (
        <article className={styles.postModeloContainer}>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}
