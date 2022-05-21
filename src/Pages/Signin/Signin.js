import React, {useState} from "react";
import {auth} from "../../firebase";
import "./Signin.css";
const Signin = () => {
  const [formVal, setFormVal] = useState({
    email: "vsanghavi3+1@gmail.com",
    password: "viralsanghavi",
  });
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(formVal.email, formVal.password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="email"
            value={formVal.email}
            onChange={(e) => setFormVal({...formVal, email: e.target.value})}
            required
            placeholder="username"
          />
          <input
            type="password"
            value={formVal.password}
            onChange={(e) => setFormVal({...formVal, password: e.target.value})}
            required
            placeholder="password"
          />
          <button onClick={signIn} type="submit">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
