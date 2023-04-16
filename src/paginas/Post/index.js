import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {
    const parametros = useParams();

    return (
        <h1>Projeto {parametros.id}</h1>
    )
}
