import React from 'react'

import Logo from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import StudyIcon from '../../assets/images/icons/study.svg'
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

const Landing = () => {

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={Logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={LandingImg} alt="Proffy" />
        <div className="buttons-containers">
          <a href="" className="study"><img src={StudyIcon} alt="Estudar" />Estudar</a>
          <a href="" className="give-classes"><img src={GiveClassesIcon} alt="Dar aulas" />Estudar</a>
        </div>

        <span classeName="total-connectiions">Total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt="Conexões" /></span>
      </div>
    </div>
  )
}

export default Landing