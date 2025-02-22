import React from 'react'

function LoginPage() {
  return (
    <>
        <input type='button' value="Login" onClick={()=>sessionStorage.setItem('login',true)} />
    </>
    
  )
}

export default LoginPage