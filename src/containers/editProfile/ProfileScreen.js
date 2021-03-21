import React, { useContext } from "react";
import { Header } from "../../components";
import "./profileScreenStyles.css";
import * as ROUTES from "../../constants/routes";
import logo from "../../logo3.svg";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase";

const ProfileScreen = () => {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  return (
    <>
      <Header.Frame>
        <Header.Group>
          <Header.Logo
            to={ROUTES.HOME}
            src={logo}
            alt="Netflix"
            style={{ width: "200px" }}
          />
        </Header.Group>
        <Header.Group>
          <Link to="/browse" style={{ textDecoration: "none" }}>
            <Header.TextLink>Go back</Header.TextLink>
          </Link>
        </Header.Group>
      </Header.Frame>

      {/* body */}
      <div className="editProfile__body">
        <h1>Edit Profile</h1>
        <div className="editProfile__info">
          <Header.Picture src={user.photoURL} />
          <div className="editProfile__details">
            <h2> {user.email}</h2>
            <h2> {user.displayName}</h2>
            <div className="editProfile__plans">
              <h3>Plans</h3>
              <div className="plans_screen">
                <div className="plans_screen_info">
                  <h4>Basic Plan</h4>
                  <h5>720p</h5>
                </div>
                <button className="false">Subscribe</button>
              </div>

              <div className="plans_screen">
                <div className="plans_screen_info">
                  <h4>Standard Plan</h4>
                  <h5>1080p</h5>
                </div>
                <button className="false">Subscribe</button>
              </div>

              <div className="plans_screen">
                <div className="plans_screen_info">
                  <h4>Premium Plan</h4>
                  <h5>4K+HDR</h5>
                </div>
                <button className="false">Subscribe</button>
              </div>

              <button
                className="editProfile__signout"
                onClick={() => firebase.auth().signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
