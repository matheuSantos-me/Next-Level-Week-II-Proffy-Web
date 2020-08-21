import React, { useState, FormEvent } from 'react'

import Api from '../../services/Api'
import PageHeader from '../../components/Molecule/PageHeader'
import TeacherItem, { Teacher } from '../../components/Molecule/TeacherItem'
import Select from '../../components/Atom/Select'
import Input from '../../components/Atom/Input'

import './styles.css'

const TeacherList = () => {
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
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
        <Select 
            name="subject" 
            label="Matéria" 
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Química', label: 'Química' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Espanhol', label: 'Espanhol' },
              { value: 'Língua Portuguesa', label: 'Língua Portuguesa' },
              { value: 'Literatura', label: 'Literatura' }
            ]}
          />

          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sábado' }
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => { setTime(e.target.value)}}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.map((teacher: Teacher) => {
            return (
              <TeacherItem key={teacher.id} teacher={teacher} />
            )
          })
        }
      </main>
    </div>
  )
}

export default TeacherList