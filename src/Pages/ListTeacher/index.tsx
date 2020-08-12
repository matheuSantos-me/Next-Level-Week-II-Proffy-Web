import React from 'react'

import Header from '../../components/Header'
import CardTeacher from '../../components/CardTeacher'
import Input from '../../components/Input'

import './styles.css'

const ListTeacher = () => {

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os Proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
          <Input type="time" name="time" label="Hora" />
        </form>
      </Header>

      <main>
        <CardTeacher />
      </main>
    </div>
  )
}

export default ListTeacher