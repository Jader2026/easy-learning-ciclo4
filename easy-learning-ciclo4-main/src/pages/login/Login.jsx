import "./login.css"
import { Link } from "react-router-dom"
import { client } from "../../graphql/client";
import { ApolloProvider } from '@apollo/client';
import {useState} from 'react'
import { LOGIN } from "../../graphql/mutations";
import { useMutation} from "@apollo/client"



export default function Login() {
  const [datos, setDatos] = useState({
    correo:'',
    password:''
  });
  const [Login, { error, reset }] = useMutation(LOGIN);

  return (
    <ApolloProvider client={client}>
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="Email" className="loginInput" placeholder="Ingresa tu correo" name="correo" />
        <label>Password</label>
        <input type="Password" className="loginInput" placeholder="Ingresa tu contraseña"  name="password" />
        <button className="loginButton" onClick={() => Login}>
          <Link className="link" to="/estudiantes">LOGIN</Link>
        </button>
        <button className="loginRegisterButton" >
          <Link className="link" to="/register">REGISTER</Link>
        </button>
      </form>
      
    </div>
    </ApolloProvider>
  )
}
