import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';

function Landing() {
  return (
  <div id="page-landing">
    <div className="content-wrapper">
      <div className="top-landing">
        <img src={logoImg} alt="Logo"/>

        <div className="location">
          <strong>Paraná</strong>
          <span>Ibiporã</span>
        </div>
      </div>

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <Link to="/signin" className="access-restrict-app">
        Acesso restrito
      </Link>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={32} />
        {/* rgba(141, 115, 75,0.6) */}
      </Link>
    </div>
  </div>
  )
}

export default Landing;