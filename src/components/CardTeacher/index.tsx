import React from 'react'

import WhatsApp from '../../assets/images/icons/whatsapp.svg'

const CardTeacher = () => {

  return (
    <article className="teacher-item">
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
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default CardTeacher