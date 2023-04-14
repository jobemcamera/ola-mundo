import React from 'react'
import PostModelo from 'componentes/PostModelo'
import styles from "./SobreMim.module.css"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/jobe_sobremim.jpg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Jobe!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Jobe"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Tenho 29 anos, moro em Bananal, estado de São Paulo. Sou uma pessoa apaixonada por jogos, cinema, música e conhecimento. Me considero uma pessoa divertida, sempre tentando fazer as pessoas rirem. Gosto de saber de todos os assuntos, por isso sempre busco aprender coisas novas e aprimorar as conhecidas.  
            </p>
            <p className={styles.paragrafo}>
                Na adolescência, fiquei louco por Guns N' Roses, e com 15 anos, comecei a aprender a tocar violão. Com 16, meu pai me deu minha primeira guitarra (hoje tem 4). Tive banda dos 19 aos 26 anos, tocando em vários locais e eventos. Já fui em diversos shows das minhas bandas preferidas, incluindo duas edições do Rock in Rio, 2013 e 2017.
            </p>
            <p className={styles.paragrafo}>
                Comecei minha vida profissional no restaurante dos meus pais com apenas 12 anos de idade, e até hoje continuo os ajudando sempre que posso.
            </p>
            <p className={styles.paragrafo}>
                Minha vida na programação começou em 2009, quando fiz um curso Técnico de Informática. Aprendi Delphi, PHP, Java e SQL. Ao final do curso, acabei sendo contemplado com o segundo melhor TCC! 
            </p>
            <p className={styles.paragrafo}>
                Em 2012, comecei a cursar Física Computacional na Federal Fluminense de Volta Redonda-RJ. Ali tive contato com conteúdos de alto nível de matemática e programação em C, porém não quis seguir a carreira de pesquisador. Diante disso, mudei para Engenharia Civil, onde eu pude aplicar mais toda aquela base de cálculos em coisas mais concretas (literalmente). Em 2020 entrei para o mercado da engenharia, mas em meados de 2022, senti que ainda não estava realizado...
            </p>
            <p className={styles.paragrafo}>
                Foi quando tive a oportunidade de entrar novamente em uma universade pública para cursar Tecnologia da Informação na UNIVESP. Depois de quase 10 anos sem praticar uma linha de código, voltei com tudo, focado e determinado a aprender as tecnologias novas e aprimorar todo o conhecimento que adquiri na última década.
            </p>
            <p className={styles.paragrafo}>
                Hoje já me considero um Desenvolvedor Front-End, onde busco praticar e publicar meus projetos todos os dias!
            </p>
        </PostModelo>
    )
}
