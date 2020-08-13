import React from 'react'

import Header from '../../components/Header'
import CardTeacher from '../../components/CardTeacher'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

const ListTeacher = () => {

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os Proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="name"
            label="Matéria"
            options={[
              { value: "Português", label: "Português" },
              { value: "Matemática", label: "Matemática" },
              { value: "História", label: "História" },
              { value: "Geografia", label: "Geografia" },
              { value: "Biologia", label: "Biologia" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "Inglês", label: "Inglês" },
              { value: "Espanhol", label: "Espanhol" },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" }
            ]}
          />
          
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