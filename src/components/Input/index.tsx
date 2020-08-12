import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<Props> = ({ name, label, ...rest }) => {

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default Input