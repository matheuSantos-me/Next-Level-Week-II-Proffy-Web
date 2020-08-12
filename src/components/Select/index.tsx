import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<Props> = ({ name, label, options, ...rest }) => {

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option value="" disabled selected hidden>Selecione uma opção</option>
        {options.map(item => {
          return <option key={item.value} value={item.value}>{item.label}</option>
        })}
      </select>
    </div>
  )
}

export default Select