import React, { useState } from "react";

import "./SignUpScreen.css";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
        });
      }
      console.log("User Registered Successfully!!");
    } catch (error) {
      console.log(error.message);
    }
  };

  // const signIn = (e) => {
  //   e.preventDefault();
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      console.log(auth);

      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signupScreen">
      <form onSubmit={handleRegister}>
        <h1>Sign In</h1>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Sign In
        </button>
        <h4>
          <span className="SignupScreenGrey">New to Netflix? </span>
          <span className="SignupScreenLink" onClick={handleRegister}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
