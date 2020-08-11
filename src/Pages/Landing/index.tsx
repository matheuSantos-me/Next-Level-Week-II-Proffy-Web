import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import Study from '../../assets/images/icons/study.svg'
import GiveClasses from '../../assets/images/icons/give-classes.svg'
import Heart from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

const Landing = () => {

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
          <h2>Sua patlaforma de estudos online.</h2>
        </div>

        <img src={LandingImg} alt="Plataforma de estudos" className="hero-img" />

        <div className="container-buttons">
          <Link to="/ListTeacher" className="study">
            <img src={Study} alt="Estudar" /> 
            Estudar
          </Link>

          <Link to="/FormTeacher" className="give-classes">
            <img src={GiveClasses} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de conexões 8 realizadas! <img src={Heart} alt="Coração" />
        </span>
      </div>
    </div>
  )
}

export default Landing