import React from 'react';
import { GithubSecao } from './styles';


const Sobre = () => (
  <section>
    <br />
    <h3>Sobre mim</h3>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, architecto. Odio harum totam nostrum nesciunt, iste ipsum blanditiis, enim ducimus rem nobis excepturi officiis aut architecto laudantium, a dolor id.
    </p>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=FerRufato&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FerRufato&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
);

export default Sobre;

