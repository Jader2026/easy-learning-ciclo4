import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Estudiantes from "./pages/estudiantes/Estudiantes";
import Lideres from "./pages/lideres/Lideres";
import Admon from "./pages/administrador/Admon";
import Sidebar from "./components/Sidebar"
import './App.css';
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";

function App() {
  const user = true;
  return (
    <ApolloProvider client ={client}>
    <Router>
      <div className="flex">
        <div className="content">
          <Sidebar/>
          <Routes>
          <Route path = "/" exact={true} element = {<Home/>}/>
          <Route path = "/login"  exact={true} element = {<Login/>}/>
          <Route path = "/register"  exact={true} element = {<Register/>}/>
          <Route path = "/usuario"  element = {user ? <Settings/>:<Register/>}/>
          <Route path = "/estudiantes"  element = {user ? <Estudiantes/>:<Register/>}/>
          <Route path = "/lideres"  element = {user ? <Lideres/>:<Register/>}/>
          <Route path = "/admon"  element = {user ? <Admon/>:<Register/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </ApolloProvider>
  );
}       

export default App;
