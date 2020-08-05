import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura..br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a Imersão React Alura. Desenvolvedor 
        {' '}
        <a href="https://www.linkedin.com/in/césar-sturmer-84394117a">
          César Sturmer
        </a>
        

      </p>
     
    </FooterBase>
  );
}

export default Footer;
