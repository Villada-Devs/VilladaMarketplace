import { useState } from "react";
import "./styles/styles.css";

import NavBar from "./components/navbar/NavBar";
import LandPage from "./components/landpage/LandPage";
import Login from "./components/navbar/Login";
import Register from "./components/navbar/Register";
import EventsMain from "./components/events/EventsMain";
import MarketplaceMain from "./components/marketplace/MarketplaceMain";
import Footer from "./components/Footer";
import PoolMain from "./components/pool/PoolMain";


function App() {

  const backendUrl = "https://upf-app-web.herokuapp.com/";

  const [registerOpened, setRegisterOpened] = useState(false);
  const [loginOpened, setLoginOpened] = useState(false);

  const [selectedView, setSelectedView] = useState("Inicio");
  const views = ["Inicio", "Marketplace", "Eventos", "Pool"];

  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState({username: ""});

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

  const handleCardClick = (e) => e.stopPropagation();

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

      <NavBar toggleLoginMenu={toggleLoginMenu} toggleRegisterMenu={toggleRegisterMenu} selectedView={selectedView} setSelectedView={setSelectedView} views={views} />

      {
        selectedView === views[0]? (
          <LandPage />
        ) : selectedView === views[1]? (
          <MarketplaceMain />
        ) : selectedView === views[2]? (
          <EventsMain />
        ) : selectedView === views[3]? (
          <PoolMain />
        ) : (
          null
        )
      }
      

      { loginOpened? <Login login={login} toggleLoginMenu={toggleLoginMenu} toggleRegisterMenu={toggleRegisterMenu} handleCardClick={handleCardClick} /> : null }
      { registerOpened? <Register toggleLoginMenu={toggleLoginMenu} toggleRegisterMenu={toggleRegisterMenu} handleCardClick={handleCardClick} /> : null }

      <Footer />

      
    </>

  );
}

export default App;
