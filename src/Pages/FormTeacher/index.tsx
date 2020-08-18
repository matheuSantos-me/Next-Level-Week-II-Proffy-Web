import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import Api from '../../services/Api'
import Header from '../../components/Header'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'

import Warning from '../../assets/images/icons/warning.svg'

import './styles.css'

const FormTeacher = () => {
  let history = useHistory()
  const [state, setState] = useState()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')
  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }])

  const addNewSchedule = () => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }


  const setScheduleItemValue = (position: number, field: string, value: string) => {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value}
      }

      return scheduleItem
    })
    setScheduleItems(updateScheduleItems)
  }

  const handleRegisterClass = (e: FormEvent) => {
    e.preventDefault()

    Api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost), 
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    }).catch(() => {
      alert('Error no cadastro, tente novamente!')
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleRegisterClass}>
          <fieldset>
            <legend>Seus dados</legend>
              <Input
                name="name"
                label="Nome completo"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <Input
                name="avatar"
                label="Avatar"
                value={avatar}
                onChange={e => setAvatar(e.target.value)}
              />

              <Input
                name="whatsapp"
                label="WhatsApp"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
              />

              <TextArea
                name="bio"
                label="Biografia"
                value={bio}
                onChange={e => setBio(e.target.value)}
              />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
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

              <Input
                name="cost"
                label="Custo da sua hora por aula"
                value={cost}
                onChange={e => setCost(e.target.value)}
              />
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis <button type="button" onClick={addNewSchedule}>+ Novo horário</button></legend>

            {
              scheduleItems.map((scheduleItem, index) => {
                return (
                  <div key={scheduleItem.week_day} className="schedule-item">
                    <Select
                      name="week_day"
                      label="Dia da semana"
                      value={scheduleItem.week_day}
                      onChange={e => setScheduleItemValue(index, 'week_day', e.target.value )}
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
                      name="from"
                      label="Das"
                      value={scheduleItem.from}
                      onChange={e => setScheduleItemValue(index, 'from', e.target.value )}
                    />

                    <Input
                      type="time"
                      name="to"
                      label="Até"
                      value={scheduleItem.to}
                      onChange={e => setScheduleItemValue(index, 'to', e.target.value )}
                    />
                  </div>
                )
              })
            }
          </fieldset>

          <footer>
            <p><img src={Warning} alt="Aviso importante" /> Importante! <br /> Preencha todos os dados</p>
            <button type="submit">Savar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default FormTeacher