import React, { useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
import app from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const register = (email, password, name, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(res => updateProfile(res.user, { displayName: name, photoURL }))
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => signInWithPopup(auth, googleProvider)

    const logout = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const value = { user, loading, register, login, logout, loginWithGoogle }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider