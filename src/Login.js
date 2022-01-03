import React, { useEffect, useRef } from 'react'
import { useUsers, useAddUser } from './UserContext'

export default function Login() {
  const users = useUsers()
  const addUser = useAddUser()

  const inputRef = useRef()

  const updateUsers = () => {
    const user = {
      name: inputRef.current.value,
    }
    addUser(user)

    inputRef.current.value = ''
  }

  useEffect(() => {
    const inp = inputRef.current
    inp.addEventListener('keyup', onKeyUp)

    return () => {
      inp.removeEventListener('keyup', onKeyUp)
    }
  })

  const onKeyUp = (event) => {
    // if enter
    if (event.keyCode === 13) {
      updateUsers()
    }
  }

  return (
    <div>
      <h1 className='text-gray-800 mb-2'>Users:</h1>
      <div className='container p-6 border-4 border-slate-600'>
        {users.map((user, key) => {
          return <h1 key={key}>{user.name}</h1>
        })}
      </div>
      <div className='mt-14'>
        <input
          className='border-2 border-black rounded'
          ref={inputRef}
          type='text'
          placeholder='Enter new user'
        ></input>
        <button
          className='ml-4 bg-orange-500 px-2 border-2 rounded border-black'
          onClick={updateUsers}
        >
          Add
        </button>
      </div>
    </div>
  )
}
