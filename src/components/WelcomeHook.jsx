import React from 'react'
import { useState } from 'react'

const WelcomeHook = () => {

    const [name, setName] = useState(`John Snow`)

    const handleNameChange = (e) => {
        e.preventDefault() // Prevent the default action of the event
        setName("Mike Snow")
    }

  return (
    <div className='mt-10'>
        <h1>Welcome, {name}!</h1>
        <p onClick={handleNameChange}>Change the Name.</p>
    </div>
  )
}

export default WelcomeHook