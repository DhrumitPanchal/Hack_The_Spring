import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./RactRouter.js/Home";
import About from "./RactRouter.js/About";
import Work from "./RactRouter.js/Work";
import Contect from "./RactRouter.js/Contect";
import ErrorPage from "./RactRouter.js/ErrorPage";
import Navebar from "./RactRouter.js/Navebar";
import Footer from "./RactRouter.js/Footer";
import Login from "./RactRouter.js/Login";
import ProfilePage from "./RactRouter.js/ProfilePage";
import Workers from "./RactRouter.js/Workers";
import MyContext from "./RactRouter.js/Context";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyContext>
          <Navebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/Contect" element={<Contect />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Workers" element={<Workers />} />
          </Routes>
        </MyContext>
      </BrowserRouter>
    </>
  );
}

export default App;
