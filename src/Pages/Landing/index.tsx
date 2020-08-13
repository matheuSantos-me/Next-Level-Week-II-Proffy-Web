import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Api from '../../services/Api'
import Logo from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import Study from '../../assets/images/icons/study.svg'
import GiveClasses from '../../assets/images/icons/give-classes.svg'
import Heart from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    Api.get('connections').then(res => {
      const { total } = res.data
      setTotalConnections(total)
    })
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
          <h2>Sua patlaforma de estudos online.</h2>
        </div>

        <img src={LandingImg} alt="Plataforma de estudos" className="hero-img" />

        <div className="container-buttons">
          <Link to="/study" className="study">
            <img src={Study} alt="Estudar" /> 
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={GiveClasses} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de { totalConnections } conexões já realizadas! <img src={Heart} alt="Coração" />
        </span>
      </div>
    </div>
  )
}

export default Landing