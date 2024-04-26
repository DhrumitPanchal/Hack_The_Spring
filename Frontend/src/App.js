import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Loading from "./RactRouter.js/Loading";
const Home = lazy(() => import("./RactRouter.js/Home"));
const About = lazy(() => import("./RactRouter.js/About"));
const Work = lazy(() => import("./RactRouter.js/Work"));
const Contact = lazy(() => import("./RactRouter.js/Contact"));
const ErrorPage = lazy(() => import("./RactRouter.js/ErrorPage"));
const Navebar = lazy(() => import("./RactRouter.js/Navebar"));
const Footer = lazy(() => import("./RactRouter.js/Footer"));
const Login = lazy(() => import("./RactRouter.js/Login"));
const ProfilePage = lazy(() => import("./RactRouter.js/ProfilePage"));
const Workers = lazy(() => import("./RactRouter.js/Workers"));
const MyContext = lazy(() => import("./RactRouter.js/Context"));
const AddWork = lazy(() => import("./RactRouter.js/AddWork"));
const ViewUserProfile = lazy(() => import("./RactRouter.js/ViewUserProfile"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <MyContext>
            <Toaster />
            <Navebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/:id" element={<ViewUserProfile />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Workers" element={<Workers />} />
              <Route path="/addWork" element={<AddWork />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </MyContext>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
