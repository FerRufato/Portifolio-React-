import React from 'react';
import Avatar from '../../components/Avatar';
import { BotaoTema, SidebarContainer } from './styles';

//import { Descricao } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
    <Avatar />
    <span style={{ fontSize: 20 }}><h3>Fernanda Rufato</h3></span> {/* Usando style para definir fontSize */}
    <br />
    <p>FerRufato</p>
    <br />
    <h5>Desenvolvedora Full Stack Java</h5>
    <br />
    <br />
    <BotaoTema >Trocar tema</BotaoTema >
    </SidebarContainer>
  </aside>
);


export default Sidebar;
