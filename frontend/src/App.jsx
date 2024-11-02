import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GoogleAuth from './components/GoogleAuth'
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import { GoogleOAuthProvider } from '@react-oauth/google'


function App() {

  const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const GoogleAuthWrapper = ()=>{
    return (
      <GoogleOAuthProvider clientId={client_id}>
        <GoogleAuth/>
      </GoogleOAuthProvider>
    )
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<GoogleAuthWrapper/>}/>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
