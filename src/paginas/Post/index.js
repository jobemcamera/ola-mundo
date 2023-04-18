import React from 'react'
import './Post.css'
import { Route, Routes, useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import fotoCapa from "assets/sobre_mim_capa.png"
import projetos from "json/projetos.json"
import PostModelo from 'componentes/PostModelo';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';

export default function Post() {
    const parametros = useParams();

    const projeto = projetos.find((projeto) => {
        return projeto.id === Number(parametros.id);
        // parametros.id é uma string
    })

    if (!projeto) {
        return <NaoEncontrada />
    }

    return (
        <PaginaPadrao>
            <PostModelo fotoCapa={fotoCapa} titulo={projeto.titulo}>
                <div className='post-markdown-container'>
                    <ReactMarkdown>
                        {projeto.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
        </PaginaPadrao>
    )
}
