import React from 'react'
import { useUserContext } from '../context/UserContext'

function Home() {
  const { user } = useUserContext();
  return (
    <div>Home for {user} </div>
  )
}

export default Home
