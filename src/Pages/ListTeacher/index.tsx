import React, { useState, FormEvent } from 'react'

import Header from '../../components/Header'
import CardTeacher, { Teacher } from '../../components/CardTeacher'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'
import Api from '../../services/Api'

const ListTeacher = () => {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] =useState('')

  const handleSearchTeachers = async (e: FormEvent) => {
    e.preventDefault()

    const { data } = await Api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setTeachers(data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os Proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select
            name="name"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
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
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
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
          
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </Header>

      <main>
        {
          teachers.map((teacher: Teacher) => {
            return (
              <CardTeacher key={teacher.id} teacher={teacher} />
            )
          })
        }
      </main>
    </div>
  )
}

export default ListTeacher