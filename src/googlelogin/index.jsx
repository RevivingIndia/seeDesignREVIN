import React from 'react'
import ReactGoogleLogin from "react-google-login";
const Googlelogin = () => {
    const onResponse = resp => {
        console.log(resp);
      };
  return (
    <>
  <ReactGoogleLogin
      clientId="786890010437-cvmrg9tublh8nhaepqgtiof0vtpmhtjr.apps.googleusercontent.com" // We created this earlier, remember?
      buttonText="Login with Google"
      onSuccess={onResponse}
      onFailure={onResponse}
    />
    </>
  )
}

export default Googlelogin