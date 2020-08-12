import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import ArrowBackLeft from '../../assets/images/icons/back.svg'

import './styles.css'

interface HeaderProps {
  title: string
  description?: string
}

const Header: React.FC<HeaderProps> = props => {

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={ArrowBackLeft} alt="Arrow back" />
        </Link>

        <img src={Logo} alt="Logo" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        { props.description && <p>{props.description}</p> }
      </div>

      {props.children}
    </header>
  )
}

export default Header