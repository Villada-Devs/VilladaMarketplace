import { useState } from "react";
import "./styles/styles.css";

import LandPage from "./components/LandPage";
import Login from "./components/Login";
import Register from "./components/Register";

const messages = ["un Buen Día", "Buenas Tardes", " Buenas Noches"];



function App() {

  const [registerOpened, setRegisterOpened] = useState(false);
  const [loginOpened, setLoginOpened] = useState(false);

  const timeMessage = new Date().getHours() <= 6 && new Date().getHours() >= 18? messages[2] : new Date().getHours() < 18 && new Date().getHours() >= 12? messages[1] : messages[0];


  return (
    <>

      <LandPage />
      
      { loginOpened? <Login timeMessage={timeMessage} /> : null }
      { registerOpened? <Register timeMessage={timeMessage} /> : null }

      <button type="button" className="btn btn-primary" onClick={() => {
        if(loginOpened) {
          setLoginOpened(false)
        } else {
          setRegisterOpened(false);
          setLoginOpened(true);
        }
      }}>Login</button>

      <button type="button" className="btn btn-danger" onClick={() => {
        if(registerOpened) {
          setRegisterOpened(false)
        } else {
          setLoginOpened(false);
          setRegisterOpened(true);
        }
      }}>Register</button>
      
    </>

  );
}

export default App;
