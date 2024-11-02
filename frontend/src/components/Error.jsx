import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {

  const navigate = useNavigate() ; 
  return (
    <>
    <div>404 Page not found</div>
    <button onClick={()=>{
      navigate('/login') ; 
    }}>Login</button>
    </>
  )
}

export default Error