import "./register.css"
import { useState } from "react";
import { Link } from "react-router-dom"
import { useMutation} from "@apollo/client"
import { crearUsuario } from "../../graphql/mutations";
import { client } from "../../graphql/client";
import { ApolloProvider } from '@apollo/client';



export default function Register() {

  const [datos, setDatos] = useState({
    nombre:'',
    apellido:'',
    identificacion:'',
    correo:'',
    rol:'',
    password:''
  })
  const [title, setTitle] = useState('')

  const [register, { error, reset }] = useMutation(crearUsuario);

    return (
      <ApolloProvider client = {client}>
        <>
        <div className="register">
            <span className="registerTitle">Register</span>
          <form className="registerForm" >

            <label>Nombre</label> 
            <input type="Text" className="registerInput" placeholder="Ingresa tu nombre" name="nombreinput" onChange={event => setDatos({...datos, nombre:event.target.value})}/>
            
            <label>Apellido</label> 
            <input type="Text" className="registerInput" placeholder="Ingresa tu apellido" name="apellido" onChange={event => setDatos({...datos, apellido:event.target.value})}/>
            
            <label>Identificacion</label> 
            <input type="Text" className="registerInput" placeholder="Ingresa tu identificacion" name="identificacion" onChange={event => setDatos({...datos, identificacion:event.target.value})}/>
            
            <label>Email</label> 
            <input type="Email" className="registerInput" placeholder="Ingresa tu correo" name="correo" onChange={event => setDatos({...datos, correo:event.target.value})}/>
            
            <label>Password</label> 
            <input type="Password" className="registerInput" placeholder="Ingresa tu contraseña" name="password" onChange={event => setDatos({...datos, password:event.target.value})}/>
            
            <label>Rol</label> 
            <select name="Rol" onChange={event => setDatos({...datos, rol:event.target.value})}>
              <option>ADMINISTRADOR</option>
              <option>ESTUDIANTE</option>
              <option>LIDER</option>
            </select>

            {/*<button type="button" onClick={() => console.log(datos.nombre)}>PRUEBA</button>*/}
            
            <button type="button" className="registerButton" onClick={() => {register({variables:{nombre:datos.nombre, 
            apellido:datos.apellido, identificacion:datos.identificacion, 
            correo:datos.correo, rol:datos.rol, password:datos.password}}); console.log(datos.nombre, datos.apellido, datos.rol)}} >Register</button>
            <button className="registerLoginButton">
                <Link className="link" to="/login">LOGIN</Link>
            </button> 
          </form>
        </div>
        </>
      </ApolloProvider>
    )
}
