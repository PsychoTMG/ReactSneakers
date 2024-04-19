import React from 'react'
import Logo from '../assets/logo.svg'
import Logo2 from '../assets/zmdi_favorite-outline.svg'
import Profile from '../assets/profile.svg'
import Busket from '../assets/busket.svg'

const Header = () => {
  return (
    <header className='header'>

    <div className='headerLeft'>
      <img width={40} height={40} src={Logo} alt='ds' />
      <div className='headerInfo'>
        <h3>React sneakers</h3>
        <p>Магазин кросовок </p>
      </div>
    </div>
    <ul className='headerRight'>
      <li>
        <img width={15} height={15} src={Busket} alt='ds' />
        <span>1205 руб.</span>
      </li>
      <li>
        <img width={15} height={15} src={Logo2} alt='ds' />
        <span>Закладки</span>
      </li>
      <li>
        <img width={15} height={15} src={Profile} alt='ds' />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
  )
}

export default Header
