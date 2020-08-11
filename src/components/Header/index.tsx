import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import ArrowBackLeft from '../../assets/images/icons/back.svg'

interface HeaderProps {
  title: string
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
      </div>

      {props.children}
    </header>
  )
}

export default Header