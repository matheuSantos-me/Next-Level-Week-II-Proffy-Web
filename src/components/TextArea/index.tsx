import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const TextArea: React.FC<Props> = ({ name, label, ...rest }) => {

  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  )
}

export default TextArea