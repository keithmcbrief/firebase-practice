import React from 'react'
import "./App.css";
import Nav from './components/Nav'
// import { auth } from "./firebase/init";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

function App() {
  // const [user, setUser] = React.useState({})
  // const [loading, setLoading] = React.useState(true)

  // React.useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setLoading(false)
  //     if (user) {
  //       setUser(user)
  //     }
  //   })
  // },[])

  // function register() {
  //   console.log("register");
  //   createUserWithEmailAndPassword(auth, "email@email.com", "test123")
  //     .then((user) => {
  //       console.log(user)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // function login() {
  //   signInWithEmailAndPassword(auth, "email@email.com", "test123")
  //   .then(({ user }) => {
  //     setUser(user)
  //   })
  //   .catch((error) => {
  //   });
  // }

  // function logout() {
  //   signOut(auth)
  //   setUser({})
  // }

  return (
    <div className="App">
      <Nav />
      {/* <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'loading...' : user.email} */}
    </div>
  );
}

export default App;
