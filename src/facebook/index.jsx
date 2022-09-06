import React from 'react'
import ReactFacebookLogin from "react-facebook-login";
import "./facebook.css"
const Facebook = () => {
    const onResponse = resp => {
        console.log(resp);
      };
  return (
    <div>

<ReactFacebookLogin
      appId="709349326823896" // we created this, remember?
      autoLoad={true}
      fields="name,email,picture"
      callback={onResponse}
      onFailure={onResponse}
      cssClass="btnFacebook"
    />
    </div>
  )
}

export default Facebook