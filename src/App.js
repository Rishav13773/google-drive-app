import React from 'react'
import { Container } from 'react-bootstrap'
import Signup from './components/Signup'
import { AuthProvider } from './context/AuthContex'

const App = () => {
  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>

  )
}

export default App