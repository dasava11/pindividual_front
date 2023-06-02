import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Wrapper from "./components/Wrapper/Wrapper";
/* import NavBar from "./components/NavBar/NavBar"; */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/home/detail/:id" element={<Detail />} />
          <Route path="/home/form" element={<Form />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
