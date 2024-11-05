

import Paragrafo from "../Paragrafo"
import Title from "../Title"
import React from "react"

import { Card, LinkBotao } from './styles'



const Projeto = () => {
  return (
  <Card>
    <br />
    <Title fontSize="16px">Projeto Lista de tarefas</Title>
    <br />
    <Paragrafo>
      Lista de tarefas feita com VueJs
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
  )
}
export default Projeto
