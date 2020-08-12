import React from 'react'

import Header from '../../components/Header'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'

import Warning from '../../assets/images/icons/warning.svg'

import './styles.css'

const FormTeacher = () => {

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
            <Input name="name" label="Nome completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="WhatsApp" />
            <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
            <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>Horários disponíveis <button type="button">+ Novo horário</button></legend>
        </fieldset>

        <footer>
          <p><img src={Warning} alt="Aviso importante" /> Importante! <br /> Preencha todos os dados</p>

          <button>Savar cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default FormTeacher