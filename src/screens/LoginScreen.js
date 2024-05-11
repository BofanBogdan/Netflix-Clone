import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreenBackground">
        <img
          className="loginScreenLogo"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreenButton">
          Sign In
        </button>

        <div className="loginScreenGradient" />
      </div>
      <div className="loginScreenBody">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreenInput">
              <form>
                <input type="email" placeholder="Email Adress" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreenButtonStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
