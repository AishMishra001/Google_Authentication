import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'

function GoogleAuth() {

  const responseGoogle = async(authResult)=>{
      try{
           if(authResult['code'])
            console.log(authResult) ; 
      }catch(err){
            console.error('Error while requesting google code : ',err) ; 
      }
  }

   const googleLogin = useGoogleLogin({
    onSuccess : responseGoogle,
    onError : responseGoogle , 
    flow : 'auth-code'
   })
  return (
    <button onClick={googleLogin}>Login with Google</button>
  )
}

export default GoogleAuth