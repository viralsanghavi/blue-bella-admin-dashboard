import {useEffect, useState, useContext} from "react";
import {ThemeContext} from "styled-components";
import {ThemeProvider} from "styled-components";
import "./App.css";
import Loader from "./components/Loader";
import {auth} from "./firebase";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin/Signin";
import defaultTheme from "./themes/default";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">{user ? <Home user={user} /> : <Signin />}</div>
    </ThemeProvider>
  );
}

export default App;
