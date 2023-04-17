import React, { useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { useRef } from 'react'
import { useAuth } from '../context/AuthContex'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(auth, emailRef.current.value)
            setMessage("Check your inbox for further instructions")

        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Forgot Password</h2>
                    {error && <Alert variant='dnager'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100' type='submit'>Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign up</Link>
            </div>
        </>
    )
}

export default ForgotPassword