import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContex = React.createContext()

export function useAuth() {
    return useContext(AuthContex)
}

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    )
}

