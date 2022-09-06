import React from 'react'
import ReactTwitterLogin from "react-twitter-login";
import "./twitter.css"
const Twitter = () => {
    const authHandler = (error, data) => {
        if (error) return console.error(error);
        console.log(data);
      };
  return (
    <div>

<ReactTwitterLogin
      authCallback={authHandler}
      consumerKey="<Consumer Key>" // We created this, remember?
      consumerSecret="<Consumer Secret>" // We created this, remember?
      callbackUrl="<Callback URL>" // You set this up in the twitter app settings, remember?
      cssClass="btnTwitter"

    />
    </div>
  )
}

export default Twitter