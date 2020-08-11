import React from 'react'

import Header from '../../components/Header'

import WhatsApp from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const ListTeacher = () => {

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os Proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>

      <main>
        <article>
          <header>
            <img src="https://avatars2.githubusercontent.com/u/59510927?s=460&u=3c88c79aebe9a224c23bddddcb2465323ce8d1bf&v=4" alt="AAAAAAAAAAAAAA" />

            <div>
              <strong>AAAAAAAAAAAAAAAAAAAAAAaaa</strong>
              <strong>oiiiiiiiiiiiiiiiiiiiii</strong>
            </div>
          </header>

          <p>
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa
            <br /> <br />
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 80,00</strong>
            </p>

            <button type="button">
              <img src={WhatsApp} alt="" />
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default ListTeacher