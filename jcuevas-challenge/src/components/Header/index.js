import React from 'react'
import logo from '/assets/img/logo.png'
//create a react   whit bulma function
export default function Header () {
  return (
    <header className='header'>
      <h1>
        <a href='#'>
          <img src={logo} alt='logo' />
        </a>
      </h1>
    </header>
  )
}
