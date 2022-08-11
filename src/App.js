import { useState } from "react";
import "./styles/styles.css";

import LandPage from "./components/LandPage";
import Login from "./components/Login";
import Register from "./components/Register";
import TopNav from "./components/TopNav";
import Events from "./components/Events";
import Marketplace from "./components/Marketplace";
import Footer from "./components/Footer";

const messages = ["un Buen Día", "Buenas Tardes", " Buenas Noches"];



function App() {

  const backendUrl = "https://upf-app-web.herokuapp.com/";

  const [registerOpened, setRegisterOpened] = useState(false);
  const [loginOpened, setLoginOpened] = useState(false);

  const [selectedView, setSelectedView] = useState("Inicio");
  const views = ["Inicio", "Eventos", "Marketplace"];

  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState({username: ""});

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

  const login = async (email, password) => {

    if(password !== "" && email !== "") {

      const response = await fetch(backendUrl + "dj-rest-auth/login/", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password}),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const res = await response.json();
      console.log(res);

      if("statusCode" in res === false) {
        setUserToken(res);
        // getUserInfo(res);
      } else {
        alert("Wrong Credentials.");
      }   
    }
  }

  return (
    <>

      <TopNav toggleLoginMenu={toggleLoginMenu} toggleRegisterMenu={toggleRegisterMenu} selectedView={selectedView} setSelectedView={setSelectedView} views={views} />


      {
        selectedView == views[0]? (
          <LandPage />
        ) : selectedView == views[1]? (
          <Events />
        ) : selectedView == views[2]? (
          <Marketplace />
        ) : (
          null
        )
      }
      

      { loginOpened? <Login login={login} timeMessage={timeMessage} toggleLoginMenu={toggleLoginMenu} toggleRegisterMenu={toggleRegisterMenu} /> : null }
      { registerOpened? <Register timeMessage={timeMessage} toggleLoginMenu={toggleLoginMenu} toggleRegisterMenu={toggleRegisterMenu} /> : null }

      <Footer />

      
    </>

  );
}

export default App;
