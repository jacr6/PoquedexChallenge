import React from 'react'

//create a react   whit bulma function
export default function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  )
}