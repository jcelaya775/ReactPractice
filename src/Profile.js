import React from 'react'
import { useUsers } from './UserContext'

export default function Profile() {
  const users = useUsers()

  return (
    <div>
      <h1 className='text-gray-800 mb-2'>Users:</h1>
      <div className='container p-6 border-4 border-slate-600'>
        {users.map((user, key) => {
          return <h1 key={key}>{user.name}</h1>
        })}
      </div>
    </div>
  )
}
