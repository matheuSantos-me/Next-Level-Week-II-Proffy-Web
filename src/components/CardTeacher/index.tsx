import React from 'react'

import Api from '../../services/Api'
import WhatsApp from '../../assets/images/icons/whatsapp.svg'

export interface Teacher {
  id: number
  name: string,
  bio: string
  cost: number
  avatar: string
  subject: string
  whatsapp: string
}

interface Props {
  teacher: Teacher
}

const CardTeacher: React.FC<Props> = ({ teacher }) => {
  const handleCreateConnection = () => {
    Api.post('connections', {
      user_id: teacher.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
          <strong>{teacher.name}</strong>
          <strong>{teacher.subject}</strong>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a target="_blank" onClick={handleCreateConnection} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={WhatsApp} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default CardTeacher