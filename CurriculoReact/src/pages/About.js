import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import image from '../assets/portfolio-img.jpeg';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/about.scss';


export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="all-about">
        <Header />
        <section className="about">
          <div className="about-header-text-skills" >
            
            <div className="about-text-skills">
              <section className="about-text">
                <p className="about-text-p about-text-p-1">Olá, </p>
                
                <p className="about-text-p about-text-p-2">meu nome é <span>Maryângela Soares</span></p>
                
                <p className="about-text-p about-text-p-3">Graduanda em <span>Análise e Desenvolvimento de Sistemas</span>.</p>
                
                <p className="about-text-p about-text-p-3">Atualmente estou me qualificando como <span>Desenvolvedora full-Stack</span> pelo projeto Rio Pomba Valley, uma parceria Energisa & Senai. Estou aprimorando minhas habilidades, com o objetivo de me especializar em <span>Back-End</span>.</p>
                
                <p className="about-text-p about-text-p-5"><span>Até o momento me identifico mais com Ui Design/Experiência do Usuário e Back-End e pretendo continuar com esse foco, mas acho importante explorar os horizontes de Front-End também.</span></p>

                <p className="about-text-p about-text-p-4"><span>Fun fact:</span> Tenho formação como Técnica em Informática desde 2012, porém nunca exerci a profissão. Durante os últimos oito anos, me aventurei pelo empreendedorismo. Por muito tempo, não imaginava um futuro trabalhando na área da tecnologia. No entanto, ao decidir encerrar esse ciclo e dar uma chance para a área que sempre fui apaixonada, sinto que me reencontrei novamente!</p>
                
                <p className="about-text-p about-text-p-6">Espero que goste do meu portfólio!</p>
              </section>
              <div className="about-image">
            <img className="about-img" src={image} alt="profile" /> 
          </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon">
                      <Icon icon={icon.icon} className={icon.className} />
                    <p className='about-icon-text'>{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
          </div>
          
          <SocialMedia />
        </section>
        
      </div>
      
    )
  }
}
