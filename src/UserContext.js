import React, { useState, useContext } from 'react'

const defUsers = [
    {
        name: 'Joe',
        age: 20,
    },
    {
        name: 'John Doe',
        age: 23,
    },
]

const UserContext = React.createContext()
const UserUpdateContext = React.createContext()

export function useUsers() {
    return useContext(UserContext)
}

export function useAddUser() {
    return useContext(UserUpdateContext)
}

export default function UserProvider({ children }) {
    const [users, setUsers] = useState(defUsers)

    // useEffect(() => {
    //     users.forEach(user => {
    //         localStorage.getItem(user.name)
    //     })
    // }, [])

    const addUser = (user) => {
        setUsers([...users, user])

        // // save users to local storage
        // users.forEach(user => {
        //     localStorage.setItem(user.name, user)
        // })
    }

    return (
        <UserContext.Provider value={users}>
            <UserUpdateContext.Provider value={addUser}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}
