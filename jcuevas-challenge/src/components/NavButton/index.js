import React from 'react'

// create a react bulma button hook function
const NavButton = (props) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}
export default NavButton

