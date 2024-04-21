
import MeuPrimeiroCurriculo from '../assets/MeuPrimeiroCurriculo.mp4';
import Netflixys from '../assets/Netflixys.mp4';
import React from '../assets/react01.mp4';
import siteReact from '../assets/react02.mp4';

import imgPoups from '../assets/img-poups.png';
import imgCurriculo from '../assets/img-curriculo.png';
import imgSouMinas from '../assets/img-souMinasGerais.png';
import imgSenai from '../assets/img-siteSenai.png';
import imgNetflixys from '../assets/img-siteNetflixys.png';
import imgReact from '../assets/img-react.png';
import imgReactSite from '../assets/img-react02.png';
import imgPortfolio from '../assets/img-portfolio.png';


const allProjects = [
  {
    id: 8,
    name: 'POUP$ | Parte 1',
    moduleCourse: 'Front-end',
    img: imgPoups,
    linkGitHub: 'https://github.com/daniellelsilva/drag-n-drop',
    linkPage: imgPoups,
    technologies: 'HTML5, CSS3, JavaScript, React',
    text: 'Este foi um projeto final da disciplina: Codificação para Front-END do curso Rio Pomba Valley. Onde eu crie um projeto: POUP$, um sistema de controle financeiro,, os integrantes estão citados no GitHub',
  },

  {
    id: 7,
    name: 'Portfólio/Currículo',
    moduleCourse: 'Front-end',
    img: imgPortfolio,
    linkGitHub: 'https://github.com/daniellelsilva/drag-n-drop',
    linkPage: imgPortfolio,
    technologies: 'HTML5, CSS3, JavaScript, React',
    text: 'Este foi uma atividade da disciplina: Codificação para Front-END do curso Rio Pomba Valley e que no qual eu me desafiei. Onde teriamos que criar através de um outro projeto um Currículo, foi então que decidi criar um Portfólio e colocar em prática alguns conhecimentos que adquirir tanto com o RPV, quanto com os cursos que tenho feitos em React.',
  },

  {
    id: 6,
    name: 'Site em React',
    moduleCourse: 'Front-end',
    img: imgReactSite,
    linkGitHub: 'https://github.com/daniellelsilva/drag-n-drop',
    linkPage: imgReactSite,
    linkVideo: siteReact,
    technologies: 'HTML5, CSS3, JavaScript, React',
    text: 'Avançando um pouco mais meus estudos em React, pude fazer este site, onde coloquei algumas funcionalidades dentro do que vinha aprendendo.',
  },

  {
    id: 5,
    name: 'Formulário',
    moduleCourse: 'Front-end',
    img: imgReact,
    linkGitHub: 'https://github.com/daniellelsilva/drag-n-drop',
    linkPage: imgReact,
    linkVideo: React,
    technologies: 'HTML5, CSS3, JavaScript, React',
    text: 'Este foi o meu primeiro contato com React. Tivemos que desenvolver posts com comentários.',
  },

  {
    id: 4,
    name: '#Netflixys',
    moduleCourse: 'HTML e CSS',
    img: imgNetflixys,
    linkGitHub: 'https://github.com/maryangelasoares/FullStackRPV/tree/master/FRONT-END/Atividade%20Curriculo%20(O6.O2.24)',
    linkPage: imgNetflixys,
    linkVideo: Netflixys,
    technologies: 'HTML5 e CSS3',
    text: 'Este é um site feito em HTML e CSS. O Netflixys é uma inspiração feita da Netflix, onde de maneira mais básica, pude aplicar meus conhecimentos adquiridos.',
  },

  {
    id: 3,
    name: '#SouMinasGerais',
    moduleCourse: 'Bootstrap',
    img: imgSouMinas,
    linkGitHub: 'https://github.com/maryangelasoares/FullStackRPV/tree/master/FRONT-END/Atividade%20Curriculo%20(O6.O2.24)',
    linkPage: imgSouMinas,
    linkVideo: MeuPrimeiroCurriculo,
    technologies: 'HTML5, CSS3, Bootstrap',
    text: 'Este é meu primeiro site feito em HTML/CSS/Bootstrap. O #SouMinasGerais é um site de pacote de viagens, destacando os pontos turistícos de Minas Gerais. Projeto este que é um "xodô" e pretendo aprimorar ele ainda mais.',
  },

  {
    id: 2,
    name: 'Meu Primeiro Site',
    moduleCourse: 'HTML e CSS',
    img: imgSenai,
    linkGitHub: 'https://github.com/maryangelasoares/FullStackRPV/tree/master/FRONT-END/Atividade%20Curriculo%20(O6.O2.24)',
    linkPage: imgSenai,
    linkVideo: MeuPrimeiroCurriculo,
    technologies: 'HTML5, CSS3',
    text: 'Este é meu primeiro Site utilizando HTML5 e CSS3, onde me inspirei em um modelo de site educativo, no caso o Senai.',
  },

  {
    id: 1,
    name: 'Meu Primeiro Currículo',
    moduleCourse: 'Fundamentos HTML/CSS',
    img: imgCurriculo,
    linkGitHub: 'https://github.com/maryangelasoares/FullStackRPV/tree/master/FRONT-END/Atividade%20Curriculo%20(O6.O2.24)',
    linkPage: imgCurriculo,
    linkVideo: MeuPrimeiroCurriculo,
    technologies: 'HTML5, CSS3',
    text: 'Este é meu primeiro projeto utilizando fundamentos básicos de HTML5 e CSS3.',
  },
];

export default allProjects;