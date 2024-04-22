import React from 'react'

const Header = (props) => {
  return (
    <header className='header'>
      <div className='headerLeft'>
        <img width={40} height={40} src='img/logo.svg' alt='logo' />
        <div className='headerInfo'>
          <h3>React sneakers</h3>
          <p>Магазин кросовок </p>
        </div>
      </div>
      <ul className='headerRight'>
        <li>
          <img onClick={props.onClickCart} width={15} height={15} src="img/busket.svg" alt='ds' />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={15} height={15} src='img/zakladki.svg' alt='ds' />
          <span>Закладки</span>
        </li>
        <li>
          <img width={15} height={15} src='img/profile.svg' alt='ds' />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  )
}

export default Header
