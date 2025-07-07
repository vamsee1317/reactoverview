import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

export default function Parent() {
    const {user} = useContext(UserContext);
  return (
    <div>
        <h1>Hello !! {user}</h1>
    </div>
  )
}
