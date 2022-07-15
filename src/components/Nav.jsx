import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";
import { auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const Nav = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, [user]);

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {});
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="nav">
      <div className="nav__container">
        <div className="logo__wrapper">
          <FontAwesomeIcon icon="bars" className="btn btn__bars" />
          <figure className="logo">
            <img className="logo__img" src={Logo} alt=""></img>
          </figure>
        </div>
        <div className="nav__links">
          {
            user.length > 0 ?
            'logged in' :
            <>
            <button className="btn btn__register" onClick={register}>Register</button>
            <button className="btn btn__login" onClick={login}>Login</button>
            logged out
            </>
          }
          
          
          {/* {loading ? "loading..." : user.email} */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
