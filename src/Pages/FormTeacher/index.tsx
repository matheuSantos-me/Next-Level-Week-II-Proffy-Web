import React from 'react'

import Header from '../../components/Header'
import Input from '../../components/Input'

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
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
            <Input name="subject" label="Matéria" />
            <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>Seus dados</legend>
            <Input name="name" label="Nome completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="WhatsApp" />
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