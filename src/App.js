import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/navbar/NavBar";
import Login from "./components/navbar/Login";
import Register from "./components/navbar/Register";

import ProfileView from "./components/profile/ProfileView";

import LandPage from "./components/landpage/LandPage";

import MarketplaceMain from "./components/marketplace/MarketplaceMain";
import MarketplaceForm from "./components/marketplace/MarketplaceForm";
import BooksSection from "./components/marketplace/BooksSection";
import ToolsSection from "./components/marketplace/ToolsSection";
import UniformsSection from "./components/marketplace/UniformsSection";
import ArticleDetailedView from "./components/marketplace/ArticleDetailedView";

import EventsMain from "./components/events/EventsMain";
import EventDetailedView from "./components/events/EventDetailedView";
import EventsForm from "./components/events/EventsForm";

import PoolMain from "./components/pool/PoolMain";
import PoolForm from "./components/pool/PoolForm";

import AboutUs from "./components/about-us/AboutUs";

import Footer from "./components/Footer";
import ContextConnected from './context/ContextConnected';

import "./styles/styles.css";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import loadingGif from "./img/loading.gif";

function App() {

  const backendUrl = "http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/";

  const [registerOpened, setRegisterOpened] = useState(false);
  const [loginOpened, setLoginOpened] = useState(false);

  const [userInfo, setUserInfo] = useState(null);
  const [profile, setProfile] = useState([]);
  const [books, setBooks] = useState([]);
  const [tools, setTools] = useState([]);
  const [uniforms, setUniforms] = useState([]);
  const [events, setEvents] = useState([]);
  const [pools, setPools] = useState([]);

  const [spinnerShowing, setSpinnerShowing] = useState(false);
  

  const handleCardClick = (e) => e.stopPropagation();

  useEffect(() => {
    const loadUserFromLocalStorage = async () => {
      const token = await JSON.parse(localStorage.getItem("token"));
      if (token) {
        const res = await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/user/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access_token}`
          },
        })
        const data = await res.json();
        setUserInfo(data);
      }
    };
    loadUserFromLocalStorage();
  }, []);


  return (
    <>
      <ContextConnected.Provider value={{
        backendUrl,
        userInfo,
        setUserInfo,

        profile,
        setProfile,

        registerOpened,
        loginOpened,
        setRegisterOpened,
        setLoginOpened,

        books,
        setBooks,
        tools,
        setTools,
        uniforms,
        setUniforms,

        events,
        setEvents,

        pools,
        setPools,

        spinnerShowing,
        setSpinnerShowing,
      }}>


        <BrowserRouter>
          <NavBar />
          <Routes>

            <Route path="/" element= {<LandPage />} />

            <Route path="/Perfil" element= {<ProfileView />} />

            <Route path="/Marketplace" element= {<MarketplaceMain />} />
            <Route path="/Marketplace/formulario" element= {<MarketplaceForm />} />
            <Route path="/Marketplace/Libros" element= {<BooksSection />} />
            <Route path="/Marketplace/Herramientas" element= {<ToolsSection />} />
            <Route path="/Marketplace/Uniformes" element= {<UniformsSection />} />
            <Route path="/Marketplace/articulo/detalles" element= {<ArticleDetailedView />} />
            
            <Route path="/Eventos" element= {<EventsMain />} />
            <Route path="/Eventos/detalles" element= {<EventDetailedView />} />
            <Route path="/Eventos/formulario" element= {<EventsForm/>} />

            <Route path="/Pool" element= {<PoolMain />} />
            <Route path="/Pool/formulario" element= {<PoolForm />} />

            <Route path="/Sobre-Nosotros" element= {<AboutUs />} />

          </Routes>

          { !userInfo? (<>
            { loginOpened? <Login handleCardClick={handleCardClick} /> : null }
            { registerOpened? <Register handleCardClick={handleCardClick} /> : null }
          </>) : null }

          <Footer />

          {
            spinnerShowing? (
              <div className="spinner-container">
                <img className="spinner" src={loadingGif} alt="loading" />
              </div>
            ) : null
          }
          
        </BrowserRouter>

      </ContextConnected.Provider>

      <ToastContainer position="top-center" />
    </>

  );
}

export default App;
