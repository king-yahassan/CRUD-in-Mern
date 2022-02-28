import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import EditeUser from "./components/EditeUser";
import Navigation from "./components/Navigation";
import ShowUser from "./components/ShowUser";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>

          <Route path="/" element= {<AllUsers/>} />
          <Route path="/new-user" element= {<AddUser/>} />
          <Route path="/edite-user/:id" element = {<EditeUser/>} />
          <Route path="/show-user/:id" element= {<ShowUser/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
