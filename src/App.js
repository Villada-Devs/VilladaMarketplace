import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/navbar/NavBar";
import LandPage from "./components/landpage/LandPage";
import Login from "./components/navbar/Login";
import Register from "./components/navbar/Register";
import EventsMain from "./components/events/EventsMain";
import EventDetailedView from "./components/events/EventDetailedView";
import EventsForm from "./components/events/EventsForm";
import MarketplaceMain from "./components/marketplace/MarketplaceMain";
import Footer from "./components/Footer";
import PoolMain from "./components/pool/PoolMain";
import ContextConnected from './context/ContextConnected';
import { api } from "./axios";

import "./styles/styles.css";

function App() {

  const backendUrl = "http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/";

  const [registerOpened, setRegisterOpened] = useState(false);
  const [loginOpened, setLoginOpened] = useState(false);

  const [userInfo, setUserInfo] = useState(null);

  const handleCardClick = (e) => e.stopPropagation();

  useEffect(() => {
    const loadUserFromLocalStorage = async () => {
      const token = await JSON.parse(localStorage.getItem("token"));
      if (token) {
        return await api.get(`user`).then((response) => {
          if (response) {
            setUserInfo(response.data);
            return response.data;
          }
        });
      }
    };
    loadUserFromLocalStorage();
  }, []);


  return (
    <>
      <ContextConnected.Provider value={{
        backendUrl: backendUrl,
        userInfo: userInfo,
        setUserInfo: setUserInfo,
        registerOpened: registerOpened,
        loginOpened: loginOpened,
        setRegisterOpened: setRegisterOpened,
        setLoginOpened: setLoginOpened,
      }}>


        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<LandPage />} />
            <Route exact path="/Marketplace" element={<MarketplaceMain />} />
            <Route exact path="/Eventos" element={<EventsMain />} />
            <Route exact path="/Eventos/detalles" element={<EventDetailedView />} />
            <Route exact path="/Eventos/formulario" element={<EventsForm/>} />
            <Route exact path="/Pool" element={<PoolMain />} />
          </Routes>

          { !userInfo? (<>
            { loginOpened? <Login handleCardClick={handleCardClick} /> : null }
            { registerOpened? <Register handleCardClick={handleCardClick} /> : null }
          </>) : null }

          <Footer />
          
        </BrowserRouter>

      </ContextConnected.Provider>

      
    </>

  );
}

export default App;
