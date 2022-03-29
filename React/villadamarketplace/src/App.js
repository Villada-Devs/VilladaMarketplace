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

  const toggleLoginMenu = async () => {
    if(loginOpened) {
      setLoginOpened(false);
    } else {
      setRegisterOpened(false);
      setLoginOpened(true);
    }
  }

  const toggleRegisterMenu = async () => {
    if(registerOpened) {
      setRegisterOpened(false);
    } else {
      setLoginOpened(false);
      setRegisterOpened(true);
    }
  }

  return (
    <>

      <LandPage toggleLoginMenu={toggleLoginMenu} />
      
      { loginOpened? <Login timeMessage={timeMessage} toggleLoginMenu={toggleLoginMenu} toggleRegisterMenu={toggleRegisterMenu} /> : null }
      { registerOpened? <Register timeMessage={timeMessage} toggleLoginMenu={toggleLoginMenu} toggleRegisterMenu={toggleRegisterMenu} /> : null }

      
      
    </>

  );
}

export default App;
