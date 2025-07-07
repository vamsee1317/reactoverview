import React, { use, useContext } from 'react'
import { UserContext } from '../context/userContext';

export default function GrandChild() {

    const {user} = useContext(UserContext);

  return (
    <div>
        <p>{user}</p>
    </div>
  )
}
