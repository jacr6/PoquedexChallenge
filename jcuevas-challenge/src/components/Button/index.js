import React from 'react'

//create a react  button control whit bulma function
export default function Button(props) {
  return (
    <button {...props}>{props.children}</button>
  )
}