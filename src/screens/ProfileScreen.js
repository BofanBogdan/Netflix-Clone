import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <dvi className="profileScreenBody">
        <h1>My Profile</h1>
        <div className="profileScreenInfo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRWmEJlGi5aIzr_oo-d73CEVySRqVxpR2beb4NWCVzw&s"
            alt="avatar"
          />

          <div className="profileScreenDetails">
            <h2>{user.email}</h2>
            <div className="profileScreenPlans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreenSignOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </dvi>
    </div>
  );
}

export default ProfileScreen;
